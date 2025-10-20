import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Artur Guimarães",
  description: "Personal website of Artur Guimarães, a Data Platform Engineer.",
};

export default function Home() {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-r from-custom-blue to-custom-green text-white px-8">
      <h1 className="text-5xl font-bold">Welcome to My Personal Website</h1>
    </section>
  );
}