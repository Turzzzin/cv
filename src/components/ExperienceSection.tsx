"use client";

import dynamic from 'next/dynamic';

const TagDisplay = dynamic(() => import('./TagDisplay'), { ssr: false });

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8">Experience</h2>
      <div className="max-w-3xl">
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold">Data Platform Engineer</h3>
              <p className="text-custom-light text-lg">Johnson&Johnson</p>
            </div>
            <p className="text-gray-400 text-sm">Jan 2024 - Present</p>
          </div>
          <ul className="list-disc list-inside mt-2">
            <li>Helped migrating and maintaining data lake for commercial area of MedTech LATAM.</li>
            <li>Developed integration and ingestion modules at the ETL Framework.</li>
            <li>Implemented FinOps actions - such as Spark on Lambda and Spark on Kubernetes (an alternative to Glue).</li>
          </ul>
          <TagDisplay tags={["Data Lake", "Delta", "Python", "Bitbucket", "JIRA", "Confluence", "CI/CD", "Jenkins", "Docker", "Kubernetes", "Spark", "Glue", "Redshift", "FastAPI", "SQL", "Lambda", "Langchain", "GenAI", "AgenticAI"]} />
        </div>
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold">Intern</h3>
              <p className="text-custom-light text-lg">CompassUOL</p>
            </div>
            <p className="text-gray-400 text-sm">Jul 2023 - Dec 2023</p>
          </div>
          <ul className="list-disc list-inside mt-2">
            <li>Machine Learning and Cognitive Computing Program.</li>
            <li>Developed solutions using AWS services, such as APIs, Chatbots and Prediction models.</li>
          </ul>
          <TagDisplay tags={["FastAPI", "Python", "node.js", "Docker", "Linux", "SageMaker", "Amazon Polly", "Lambda", "Amazon Lex"]} />
        </div>
      </div>
    </section>
  );
}
