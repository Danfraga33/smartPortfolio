import { H1 } from "../components/ui/H1";
import { H2 } from "../components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Daniel Fraga and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
          My name is Daniel Fraga and I am a self-taught software developer from
          Germany. I started programming in 2021, at the age of 24
        </p>
        <p>
          I&apos;m passionate about building cool apps and websites and I love
          sharing the things I learn.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
          I&apos;m a full-stack web developer specializing in{" "}
          <strong>React</strong>, <strong>Next.js</strong>, and{" "}
          <strong>Node.js</strong>.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Side projects</H2>
        <p>AI + SaaS</p>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://smartdiary.co"
              className="text-primary hover:underline"
            >
              SmartDiary.co
            </a>{" "}
            - An AI-powered journaling app
          </li>
          <li>
            <Link
              href="https://books-ai.app"
              className="text-primary hover:underline"
            >
              Books-AI.app
            </Link>{" "}
            - An AI book recommendation app
          </li>
        </ul>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p>
          Besides programming, I love doing sports. I lift weight, travel and
          enjoy learn about global macro trends. I think having hobbies other
          than coding is important for mental health.
        </p>
        <p>
          I&apos;m also very much into self-improvement, nutrition, and positive
          psychology.
        </p>
        {/* <Image src="./" width={20} height={20} alt="" className="rounded-md" /> */}
      </section>
    </section>
  );
}
