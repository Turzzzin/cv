import { useState } from "react";
import "./Projects.css";
import GitHubPreview from "../components/GithubPreview";

function Projects() {
  const repos = [
    "turzzzin/cv",
    "turzzzin/tts_aws_serverless",
    "turzzzin/mv-windows-files",
    "turzzzin/spark-on-aws-lambda",
    "turzzzin/price-predicition-machine-learning",
    "turzzzin/chatbot-matricula"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % repos.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + repos.length) % repos.length);
  };

  return (
    <div className="projects">
      <div className="projects-header">
        <h2>💻 Projects & Contributions</h2>
      </div>

      <div className="project-showcase">
        <GitHubPreview repo={repos[currentIndex]} />
      </div>

      <div className="project-navigation">
        <button className="nav-button" onClick={prev}>
          ← Previous
        </button>
        
        <div className="project-counter">
          {currentIndex + 1} / {repos.length}
        </div>
        
        <button className="nav-button" onClick={next}>
          Next →
        </button>
      </div>
    </div>
  );
}

export default Projects;