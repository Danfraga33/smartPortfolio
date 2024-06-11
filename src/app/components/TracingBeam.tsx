"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import starting from "@/assets/landscaping.jpg";
import { LinkPreview } from "./ui/link-preview";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
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

const dummyContent = [
  {
    title: "Embarking on the Tech Path",
    description: (
      <>
        <div>
          In high school, I built a complex website on brain injury, which was
          showcased at the Australian Powerhouse Museum. This project ignited my
          passion for coding pushing me to offer website development services
          for local businesses. During this freelancing experience I began to
          learn more and more about how powerful, fun and useful software
          development is. While earning my Bachelor&apos;s degree in Economics,
          I created a{" "}
          {/* <LinkPreview
            url="https://danfraga33.wixsite.com/my-site-5"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-violet-500  dark:text-purple-400 underline"
          > */}
          portfolio {/* </LinkPreview> */}
          on macroeconomics and investment analysis, blending technology with my
          studies.
        </div>
        <br />
        <p>
          Driven by my passion for technology and web development, I built a
          dynamic ecommerce store on Shopify at the same time. Leveraging
          Javascript and CSS, I carefully crafted and enhanced each page to
          optimize the user experience and boost conversion rates. This project
          allowed me to blend creativity with technical skills, transforming a
          simple store into a seamless online shopping experience.
        </p>
      </>
    ),
    badge: "Start",
    image: starting,
  },
  {
    title: "Tech Journey Through Tough Times",
    description: (
      <>
        <p>
          Following my graduation in late 2019 and the sale of my business, my
          enthusiasm for technology and startups persisted. My passion deepened
          as I immersed myself in constant reading, devouring literature on
          emerging technologies, entrepreneurial strategies, and innovative
          trends. Throughout 2020&apos;s pandemic, my appetite for learning grew
          voracious. I delved into data visualization, mastered SQL, and
          developed custom TradingView indicators and offered their use to other
          investors for sale.
        </p>
        <br />
        <p>
          Additionally, I ventured into HTML, CSS, and even dabbled in
          JavaScript, creating an online portfolio to showcase my skills and
          explore various other business ideas.
        </p>
      </>
    ),
    badge: "Diving Deeper",
  },
  {
    title: "Canada ",
    description: (
      <>
        <p>
          In late 2021, I set off on my own in Canada, Through 2022, I studied
          that basics of computer science and coding through Hardvard&apos;s
          CS50 course, FreeCodeCamp and any other material I can get hold of,
          laying down the basics for my coding journey. In 2023, I worked with
          100Devs, where I refined my skills in Next.js, React, JavaScript,
          Tailwind, and TypeScript.
        </p>
        <br />
        <p>
          Here, I cultivated a diverse network, refined my skills, and engaged
          in various projects.
        </p>
      </>
    ),
    badge: "Engine Starting",
  },
  {
    description: (
      <>
        <p>
          I&apos;m excited to continue my journey, looking for the next
          opportunity!
        </p>
      </>
    ),
    badge: "Present",
  },
];
