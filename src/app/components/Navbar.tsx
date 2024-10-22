"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AiChatButton from "./AiChatButton";
import { Button } from "./ui/moving-border";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = usePathname();
  const isWorks = router === "/works";
  const isBlog = router === "/blog";
  return (
    <header className="top-0 bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-3 px-3 py-4">
        <nav className="space-x-4 font-medium uppercase tracking-tighter ">
          <Link
            href="/"
            className={`active:text-[#383595] dark:hover:text-gray-300 hover:text-gray-500/65 transition-all dark:active:text-[#da9106]]  ${!isWorks ? "font-semibold text-[#383595] dark:text-[#fd9106]" : ""}`}
          >
            home
          </Link>
          <Link
            href="/works"
            className={` active:text-[#383595]  dark:active:text-[#da9106] hover:text-gray-500/65 ${isWorks ? "text-[#383595] font-semibold dark:font-semibold dark:text-[#fd9106]" : ""}`}
          >
            works
          </Link>
          <a
            href="https://stoic-dev-blogger.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={` active:text-[#383595]  dark:active:text-[#da9106] hover:text-gray-500/65 ${isBlog ? "text-[#383595] font-semibold dark:font-semibold dark:text-[#fd9106]" : ""}`}
          >
            blog
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <AiChatButton />
          <ThemeToggle />
          <Button className="bg-[#ffef] text-black  dark:bg-[#222] dark:text-white font-medium p-2">
            <a
              href="https://danielfraga.dev/#contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
