import { H2 } from "../components/ui/H2";
import { Metadata } from "next";
import { CardHoverEffect } from "../components/CardHover";
import { H1 } from "../components/ui/H1";
import { TracingBeamDemo } from "../components/TracingBeam";
import { TailwindcssButtons } from "../components/TailwindButtons";
export const metadata: Metadata = {
  title: "My Skills",
  description: "Learn more about me.",
};

export default function Page() {
  return (
    <>
      <section className="flex gap-4 flex-col">
        <TracingBeamDemo />
      </section>
      <hr className="border-muted my-4" />
      <section>
        <H1 className="text-center">Dev Stack</H1>
        <CardHoverEffect />
      </section>
      <hr className="border-muted py-4" />
      <section className="flex flex-col gap-8">
        <H1 className="text-center">Resume</H1>
        <TailwindcssButtons />
      </section>

      <section className="space-y-3 ">
        <H2>Hobbies</H2>
        <p>
          Besides programming 🙌, I enjoy going to the gym 🏋️, travelling
          (I&apos;ve lived in more than 4 countries... 🤯), exploring new
          restaurant&apos;s 🍝 and enjoy reading about startups, business,
          economics and technology 📖.
        </p>
      </section>
    </>
  );
}
