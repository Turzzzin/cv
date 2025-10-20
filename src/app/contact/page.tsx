import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Contact - Artur Guimarães",
  description: "Contact information for Artur Guimarães, a Data Platform Engineer.",
};

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8">Contact</h2>
      <p className="text-lg max-w-3xl text-center">
        Feel free to reach out to me via email or social media.
      </p>
      <div className="flex gap-4 mt-8">
        <a href="mailto:artur.fguimaraes1@gmail.com" className="text-custom-blue hover:underline">
          <Image src="/gmail.svg" alt="Gmail" width={32} height={32} className="w-8 h-8 filter invert" />
        </a>
        <a href="https://www.linkedin.com/in/arturguimaraes" className="text-custom-blue hover:underline">
          <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} className="w-8 h-8 filter invert" />
        </a>
        <a href="https://github.com/Turzzzin" className="text-custom-blue hover:underline">
          <Image src="/github.svg" alt="GitHub" width={32} height={32} className="w-8 h-8 filter invert" />
        </a>
      </div>
    </section>
  );
}