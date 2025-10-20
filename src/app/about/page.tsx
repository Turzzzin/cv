import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Artur",
  description: "About Artur Guimarães, a Data Platform Engineer.",
};

export default function About() {
  return (
    <section id="about" className="py-16 px-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
      <p className="text-lg max-w-3xl text-center">
        This is where I&apos;ll tell you a bit about myself. My passions, my journey, and what drives me.
      </p>
    </section>
  );
}