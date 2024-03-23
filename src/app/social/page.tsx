import { Metadata } from "next";
import { H1 } from "../components/ui/H1";
import { H2 } from "../components/ui/H2";

export const metadata: Metadata = {
  title: "Social Media",
  description: "My social media channels and how to work with me.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Social Media</H1>
      <section className="space-y-3">
        <H2>My channels</H2>
        <p>I love coding</p>
        <p>Links to all my social accounts:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="https://www.twitter.com/"
              className="text-primary hover:underline"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              className="text-primary hover:underline"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/daniel--fraga/"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://danielfraga.dev/"
              className="text-primary hover:underline"
            >
              Blog
            </a>
          </li>
        </ul>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <H2>Discord server</H2>
        <p>
          I welcome you to{" "}
          <a
            href="https://.com/discord"
            className="text-primary hover:underline"
          >
            join my Discord server
          </a>{" "}
          where you can chat with me and other developers. We are already more
          than <span className="font-bold">7000 members</span> and growing more
          every day!
        </p>
        <p>
          We have discussion forums, job boards, and even a meme channel. You
          can climb a ranking system by posting and helping others. It&apos;s a
          ton of fun!
        </p>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <H2>Business inquiries</H2>
        <p>
          If you want to work with me on a project please contact me via email
          at{" "}
          <a
            href="dan.fraga33@gmail.com"
            className="text-primary hover:underline"
          >
            dan.fraga33@gmail.com
          </a>
        </p>
        <p>
          I&apos;ve worked with many different companies in the past, including{" "}
          <a
            href="https://getstream.io/"
            className="text-primary hover:underline"
          >
            Stream
          </a>
          ,{" "}
          <a href="https://clerk.com/" className="text-primary hover:underline">
            Clerk
          </a>
          ,{" "}
          <a
            href="https://www.packtpub.com/"
            className="text-primary hover:underline"
          >
            Packt
          </a>
          ,{" "}
          <a
            href="https://brilliant.org/"
            className="text-primary hover:underline"
          >
            Brilliant
          </a>
          and many more.
        </p>
      </section>
    </section>
  );
}
