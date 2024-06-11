"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "./ui/mutli-step-loader";
import { CiCircleCheck } from "react-icons/ci";

const loadingStates = [
  {
    text: "Server Side Rendering",
  },
  {
    text: "Synchronizing data with Prisma ORM",
  },
  {
    text: "Aggregation pipelines in MongoDB",
  },
  {
    text: "Code-splitting and lazy loading in React",
  },
  {
    text: "Connecting APIs",
  },
  {
    text: "Implementing user roles and permissions with NextAuth",
  },
  {
    text: "Securing API routes with middleware in Next.js",
  },
  {
    text: "Spinning up Docker",
  },
  {
    text: "Managing complex state with Redux",
  },
  {
    text: "Designing schemas with Mongoose ODM",
  },
  {
    text: "Implementing OAuth with NextAuth APIs",
  },
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full h-[20vh] flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
      <button
        onClick={() => setLoading(true)}
        className="bg-gradient-to-br from-purple-500 to-violet-500 hover:bg-[#39C3EF]/90 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}
      >
        Explore my skills..
      </button>

      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <CiCircleCheck className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
