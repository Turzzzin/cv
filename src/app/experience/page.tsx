import type { Metadata } from "next";
import ExperienceSection from "../../components/ExperienceSection";

export const metadata: Metadata = {
  title: "Experience - Artur Guimarães",
  description: "The work experience of Artur Guimarães, a Data Platform Engineer.",
};

export default function Experience() {
  return <ExperienceSection />;
}