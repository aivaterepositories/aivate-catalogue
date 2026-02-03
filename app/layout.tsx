import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
