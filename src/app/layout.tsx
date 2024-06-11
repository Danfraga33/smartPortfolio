import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Daniel Fraga",
    default: "Daniel Fraga",
  },
  description: "SMART Portfolio",
  icons: "/DanielFavicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark:bg-[#000] bg-gradient-to-b from-gray-100 via-purple-200 to-white dark:bg-[url('/laptopClosed.jpg')] bg-contain bg-center bg-no-repeat`}
      >
        <ThemeProvider attribute="class">
          <Navbar />
          <main className="px-3 max-w-5xl mx-auto py-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
