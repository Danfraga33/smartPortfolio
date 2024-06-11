"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AiChatButton from "./AiChatButton";
import { Button } from "./ui/moving-border";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = usePathname();
  const isWorks = router === "/works";
  return (
    <header className="top-0 bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-3 px-3 py-4">
        <nav className="space-x-4 font-medium uppercase tracking-tighter ">
          <Link
            href="/"
            className={`active:text-[#383595] hover:text-[#183595] dark:active:text-purple-400 dark:hover:text-purple-500 ${!isWorks ? "font-semibold text-[#383595] dark:text-purple-400" : ""}`}
          >
            home
          </Link>
          <Link
            href="/works"
            className={` active:text-[#383595] hover:text-[#183595] dark:active:text-purple-400 dark:hover:text-purple-500 ${isWorks ? "text-[#383595] font-semibold dark:font-semibold dark:text-purple-400" : ""}`}
          >
            works
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <AiChatButton />
          <ThemeToggle />
          <Button className="bg-[#ffef] text-black  dark:bg-[#222] dark:text-white font-medium p-2">
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
