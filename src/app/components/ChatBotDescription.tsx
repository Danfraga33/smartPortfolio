import React from "react";
import { H2 } from "./ui/H2";
import { Bot } from "lucide-react";

const ChatBotDescription = () => {
  return (
    <div>
      <H2 className="text-center py-4 text-[#383595] dark:text-[#fd9106]">
        Ask the chatbot anything about me
      </H2>
      <p className="text-center">
        Click the little{" "}
        <Bot className="inline pb-1 text-[#383595] dark:text-[#fd9106] " /> icon
        in the top bar to activate the AI chat. You can ask the chatbot any
        question about me and it will find the relevant info on this website.
        The bot can even provide links to pages you&apos;re looking for.
      </p>
    </div>
  );
};

export default ChatBotDescription;
