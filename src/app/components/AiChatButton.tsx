"use client";

import { Bot } from "lucide-react";
import { useState } from "react";
import AIChatbot from "./AIChatbox";

const AiChatButton = () => {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);
  return (
    <>
      <button onClick={() => setChatBoxOpen(true)}>
        <Bot size={24} />
      </button>
      <AIChatbot open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
};

export default AiChatButton;
