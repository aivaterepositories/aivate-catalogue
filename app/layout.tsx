import type { Metadata } from "next";
import "./globals.css";
import { DarkModeToggle } from "./components/DarkModeToggle";

export const metadata: Metadata = {
  title: "Aivate Catalogue - Premium Solutions for Modern Digital Business",
  description: "Showcase of Aivate's landing pages, dashboard systems, and workflow automation solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white dark:bg-slate text-black dark:text-white transition-colors duration-300">
        <DarkModeToggle />
        {children}
      </body>
    </html>
  );
}
