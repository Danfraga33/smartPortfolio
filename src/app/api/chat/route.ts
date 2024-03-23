import { ChatOpenAI } from "@langchain/openai";
import { LangChainStream, StreamingTextResponse } from "ai";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
  PromptTemplate,
} from "@langchain/core/prompts";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { getVectorStore } from "@/lib/astradb";
import { Message as VercelChatMessage } from "ai/react";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { Redis } from "@upstash/redis";
import { UpstashRedisCache } from "langchain/cache/upstash_redis";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages;

    const chatHistory = messages
      .slice(0, -1)
      .map((m: VercelChatMessage) =>
        m.role === "user"
          ? new HumanMessage(m.content)
          : new AIMessage(m.content),
      );

    const currentMessageContent = messages[messages.length - 1].content;

    const cache = new UpstashRedisCache({
      client: Redis.fromEnv(),
    });

    const { stream, handlers } = LangChainStream();

    const chatModel = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",
      streaming: true,
      callbacks: [handlers],

      cache,
    });

    const rephrasingModel = new ChatOpenAI({
      modelName: "gpt-3.5-turbo",

      cache,
    });
    const retriever = (await getVectorStore()).asRetriever();
    const rephrasePrompt = ChatPromptTemplate.fromMessages([
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
      [
        "user",
        "Given the above conversation, generate a search query to look up in order to get information relevant to the current question. " +
          "Don't leave out any relevant keywords. Only return the query and no other text.",
      ],
    ]);

    const historyAwareRetrieverChain = await createHistoryAwareRetriever({
      llm: rephrasingModel,
      retriever,
      rephrasePrompt,
    });

    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are a chatbot for a personal website. You impresonate the website owner." +
          "Answer the users question based on the below context." +
          "Whenever it makes sense, provide links that contains more information about the given context." +
          "Format your messages in markdown format. \n\n" +
          "Context: \n{context}",
      ],
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
    ]);

    //Context will be a collection of the database and the user inputs vector
    const combineDocsChain = await createStuffDocumentsChain({
      llm: chatModel,
      prompt,
      documentPrompt: PromptTemplate.fromTemplate(
        "Page URL: {url}\n\nPage content: \n{page_content}",
      ),
      documentSeparator: "\n---------\n",
    });

    // Takes user input, turns into vector. Retirever is history chat
    const retrievalChain = await createRetrievalChain({
      combineDocsChain,
      retriever: historyAwareRetrieverChain,
    });

    // So the model can refer to the last message (message above)
    const chain = prompt.pipe(chatModel);
    retrievalChain.invoke({
      input: currentMessageContent,
      chat_history: chatHistory,
    });

    return new StreamingTextResponse(stream);
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Internal Sever Error" }, { status: 500 });
  }
}
