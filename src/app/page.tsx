import { Metadata } from "next";
import Image from "next/image";
import { H1 } from "./components/ui/H1";
import me from ".././assets/AvatarImg.jpg";

import { TabsDemo } from "./components/TabsDemo";
import { MovingBorderDemo } from "./components/MovingBorder";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiArrowDownLine, RiLinkedinFill } from "react-icons/ri";
import { MultiStepLoaderDemo } from "./components/Loader";
import { TextGenerateEffectComponent } from "./components/TextGenerateEffect";
import { H3 } from "./components/ui/H3";
import ChatBotDescription from "./components/ChatBotDescription";
import { SignupForm } from "./components/Form";

export const metadata: Metadata = {
  title: "Daniel Fraga -  Smart Portfolio",
};
export default function Home() {
  return (
    <section className="space-y-16 px-1 py-2">
      <section className="flex flex-col items-center gap-8 sm:grid-cols-2">
        <Image
          src={me}
          width={150}
          height={150}
          alt="Daniel Fraga"
          className="rounded-full aspect-square border-2 object-cover shadow-xl dark:border-foreground"
        />
        <div className="space-y-3 flex flex-col items-center text-center justify-center gap-6">
          <H1 className=" md:text-center sm:text-start  ">
            Hi, I&apos;m Daniel Fraga
          </H1>
          <H3 className="text-justify pt-4 sm:text-start font-medium dark:text-slate-300 ">
            <span className="text-[#3d4d7f] font-semibold dark:text-violet-500">
              Full Stack Developer{" "}
            </span>
            with a dynamic background in e-commerce, web development, and a
            passion for programming, eager to contribute to innovative tech
            companies.
          </H3>
        </div>
      </section>
      <div className="flex justify-center gap-4">
        <MovingBorderDemo>
          <a href="https://github.com/Danfraga33">
            <FaGithub size={16} />
          </a>
        </MovingBorderDemo>

        <MovingBorderDemo>
          <a href="https://x.com/Danfraga3">
            <FaXTwitter size={16} />
          </a>
        </MovingBorderDemo>

        <MovingBorderDemo>
          <a href="https://www.linkedin.com/in/daniel--fraga/">
            <RiLinkedinFill size={16} />
          </a>
        </MovingBorderDemo>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <RiArrowDownLine className="inline animate-bounce text-base" />
        <a href="#tabs-section">
          <span className="pl-2">Scroll Down</span>
        </a>
      </div>
      <section className="pt-16 ">
        <TextGenerateEffectComponent />
      </section>
      <section id="tabs-section">
        <TabsDemo />
        <MultiStepLoaderDemo />
      </section>
      <SignupForm />
      <section className="space-y-3">
        <ChatBotDescription />
      </section>
    </section>
  );
}
