import type { Metadata } from "next";
import { Space_Grotesk, Open_Sans, Lora, Raleway } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aivate Catalogue - Premium Solutions",
  description: "Aivate's premium portfolio: Landing Pages, Dashboard Systems, and Workflow Automation.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${openSans.variable} ${lora.variable} ${raleway.variable} scroll-smooth`}>
      <body className="font-sans bg-slate-900 text-white min-h-screen selection:bg-mint selection:text-slate-900">

        {children}
      </body>
    </html>
  );
}
