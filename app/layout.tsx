import type { Metadata } from "next";
import { Open_Sans, Geist } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
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
    <html lang="en" className={cn("scroll-smooth", openSans.variable, "font-sans", geist.variable)}>
      <body className="font-sans bg-slate-900 text-white min-h-screen selection:bg-mint selection:text-slate-900">
        {children}
      </body>
    </html>
  );
}
