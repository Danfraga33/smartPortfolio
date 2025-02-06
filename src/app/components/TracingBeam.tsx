"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import { storyContent } from "@/lib/constant/story";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {storyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className=" dark:text-black dark:font-semibold text-white rounded-full text-sm w-fit px-4 py-1 mb-4 shadow-lg bg-gradient-to-br from-purple-700 to-violet-900 dark:to-violet-400">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg h-32 mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
        <Image
          src="/bottomAbout.jpg"
          alt="blog thumbnail"
          height="1000"
          width="1000"
          className="rounded-lg h-32 mb-10 object-cover   "
        />
      </div>
    </TracingBeam>
  );
}
