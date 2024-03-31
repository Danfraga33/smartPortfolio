import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "next-themes";
// import { ThemeProvider } from "./components/ThemeProvider";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { 
  title: {
    template: "%s | Daniel Fraga",
    default: "Daniel Fraga",
  },
  description: "SMART Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <main className="px-3 max-w-3xl mx-auto py-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
