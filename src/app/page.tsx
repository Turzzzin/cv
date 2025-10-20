import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Artur",
  description: "Personal website of Artur Guimarães, a Data Platform Engineer.",
};

export default function Home() {
  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-custom-blue to-custom-green text-white px-8">
      <div className="max-w-2xl mx-auto text-left">
        <h1 className="text-5xl font-bold mb-2">Artur Guimarães</h1>
        <p className="text-2xl mb-4">Data Platform Engineer</p>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </section>
  );
}