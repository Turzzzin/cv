import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Artur",
  description: "A selection of projects by Artur Guimarães, a Data Platform Engineer.",
};

export default function Projects() {
  return (
    <section id="projects" className="bg-custom-dark py-16 px-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        <div className="bg-custom-dark p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Project One</h3>
          <p className="text-custom-light">A brief description of Project One.</p>
        </div>
        <div className="bg-custom-dark p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Project Two</h3>
          <p className="text-custom-light">A brief description of Project Two.</p>
        </div>
        <div className="bg-custom-dark p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Project Three</h3>
          <p className="text-custom-light">A brief description of Project Three.</p>
        </div>
      </div>
    </section>
  );
}