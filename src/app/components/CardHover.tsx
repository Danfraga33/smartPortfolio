import { HoverEffect } from "./ui/card-hover-effect";
import reactIcon from "@/assets/react.jpeg";
import typescriptIcon from "@/assets/tsIcon.jpg";
import nextIcon from "@/assets/NextIcon.jpg";
import mongoIcon from "@/assets/mongoIcon.jpg";
import nodeIcon from "@/assets/nodeIcon.jpg";
import pythonIcon from "@/assets/pythonIcon.jpeg";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={languages} />
    </div>
  );
}
export const languages = [
  {
    title: "Typescript",
    description:
      "A superset of JavaScript that adds static typing and other advanced features, enhancing developer productivity and code maintainability.",
    link: "https://www.typescriptlang.org/",
    image: typescriptIcon,
  },
  {
    title: "Node.js",
    description:
      "The go-to tool for building fast, scalable server-side applications. Node.js lets you run JavaScript on the server, enabling powerful back-end services.",
    link: "https://nodejs.org/en",
    image: nodeIcon,
  },
  {
    title: "React",
    description:
      "A library for building user interfaces with ease. React simplifies the process of creating interactive and reusable UI components.",
    link: "https://react.dev/",
    image: reactIcon,
  },
  {
    title: "Next.js",
    description:
      "An all-in-one framework for React apps. Next.js offers server-side rendering and static site generation for blazing-fast web experiences.",
    link: "https://nextjs.org/",
    image: nextIcon,
  },
  {
    title: "MongoDB/SQL",
    description:
      "Flexible databases for every application. MongoDB excels at handling unstructured data, while SQL databases are the cornerstone of structured data management.",
    link: "https://www.mongodb.com/",
    image: mongoIcon,
  },
  {
    title: "Python",
    description:
      "A versatile language used in everything from web development to AI. Python's simple syntax and powerful libraries make it a favorite among developers.",
    link: "https://www.python.org/",
    image: pythonIcon,
  },
];
