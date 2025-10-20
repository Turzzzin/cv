"use client";

import { Fira_Code, Plus_Jakarta_Sans, Lato } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { LoadingProvider } from "../components/LoadingContext";
import ProgressBar from "../components/ProgressBar";

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta-sans" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${firaCode.variable} ${plusJakartaSans.variable} ${lato.variable} flex bg-custom-dark`}
      >
        <LoadingProvider>
          <ProgressBar />
          <Navbar />
          <div className="flex-1 pt-16">{children}</div>
        </LoadingProvider>
      </body>
    </html>
  );
}
