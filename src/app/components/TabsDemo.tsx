"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { Button } from "./ui/moving-border";
import { useEffect, useRef } from "react";

export function TabsDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);
  const tabs = [
    {
      title: "React",
      value: "react",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="flex gap-2">
            <p>React</p>
            <Button className="font-medium p-1 rounded-lg">
              <a
                href="https://wealthwisenavigator.netlify.app/SideHustle"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wealthwise
              </a>
            </Button>
          </div>
          <Image
            src="/tablet-in-hand-mockup.png"
            alt="wealthwisenavigator"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "NextJS",
      value: "nextjs",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="flex gap-2">
            <p>NextJS </p>
            <Button className="font-medium p-1 rounded-lg">
              <a
                href="https://github.com/Danfraga33/investment_hub"
                target="_blank"
                rel="noopener noreferrer"
              >
                InvestmentHub
              </a>
            </Button>
          </div>
          <Image
            src="/InvestmentHub.jpg"
            alt="InvestmentHub"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "NodeJS",
      value: "nodejs",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="flex gap-2">
            <p>NodeJS tab </p>
            <Button className="font-medium p-1 rounded-lg">
              <a
                href="https://mapfit123.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MapFit
              </a>
            </Button>
          </div>
          <Image
            src="/Mapfit.png"
            alt="Mapfit"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "JavaScript",
      value: "javascript",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="flex gap-2">
            <p>JavaScript </p>
            <Button className="font-medium p-1 px-2 rounded-lg">
              <a
                href="https://theaudiovisualizer.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Audio Visualizer
              </a>
            </Button>
          </div>
          <video
            ref={videoRef}
            aria-label="theaudiovisualizer"
            height="700"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
            autoPlay
            loop
            muted
          >
            <source src="/Balls.mp4" />
          </video>
        </div>
      ),
    },
    {
      title: "Python",
      value: "python",

      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="flex gap-2">
            <p>Python tab</p>
            <Button className="font-medium p-1 px-2 rounded-lg">
              <a
                href="https://github.com/Danfraga33/Software-Engineer-Interview-Bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                Software Engineer Interview Bot
              </a>
            </Button>
          </div>

          <video
            aria-label="Interview Bot"
            height="700"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
            autoPlay
            loop
            muted
          >
            <source src="/RachelChat.mp4" />
          </video>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-30">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/laptop.jpg"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
