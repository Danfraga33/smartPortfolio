"use client";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "../components/ui/tailwind-buttons";

export function TailwindcssButtons() {
  const copy = (button: any) => {
    if (button.code) {
      copyToClipboard(button.code);
      return;
    }
    let buttonString = reactElementToJSXString(button.component);

    if (buttonString) {
      const textToCopy = buttonString;
      copyToClipboard(textToCopy);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success(
          "Downloading... Caution: Contents may cause hiring excitement!",
        );
      })
      .catch((err) => {
        console.error("Error downloading resume:", err);
        toast.error("Error downloading resume");
      });
  };
  return (
    <div className="pb-20 px-4 w-full">
      <Toaster position="top-center" />
      <div>
        {buttons.map((button, idx) => (
          <ButtonsCard key={idx} onClick={() => copy(button)}>
            {button.component}
          </ButtonsCard>
        ))}
      </div>
    </div>
  );
}
export const buttons = [
  {
    name: "Download Resume",
    description: "Sketch button for your website",

    component: (
      <button className="px-4 py-2 rounded-md border border-black bg-violet-400 text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[4px_4px_0px_0px_rgba(238,238,238)] active:bg-violet-500 dark:active:bg-violet-500">
        <a href="/DanielFragaResume2.pdf" download="Daniel Fraga - Resume">
          Download Resume
        </a>
      </button>
    ),
  },
];
