import { AstraDBVectorStore } from "@langchain/community/vectorstores/astradb";
import { OpenAIEmbeddings } from "@langchain/openai";
import { AstraDB } from "@datastax/astra-db-ts";

const endpoint = process.env.ASTRA_DB_ENDPOINT ?? "";
const token = process.env.ASTRA_DB_APPLICATION_TOKEN ?? "";
const collection = process.env.ASTRA_DB_COLLECTION ?? "";

if (!token || !endpoint || !collection) {
  throw new Error("Please set up ASTRA DB. Env variables wasn't found.");
}

export async function getVectorStore() {
  return AstraDBVectorStore.fromExistingIndex(
    new OpenAIEmbeddings({ modelName: "text-embedding-3-small" }),
    {
      token,
      endpoint,
      collection,
      collectionOptions: {
        vector: {
          dimension: 1536,
          metric: "cosine",
        },
      },
    },
  );
}

export async function generateEmbeddingsCollection() {
  return new AstraDB(token, endpoint).collection(collection);
}
