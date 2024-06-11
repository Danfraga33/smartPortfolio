import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <nav className="mx-auto flex justify-center hover:text-violet-200 transition-all max-w-6xl p-3">
        <Link href="/privacy">Privacy</Link>
      </nav>
    </footer>
  );
}
