import "./Professional.css";
import SkillGrid from "../components/SkillGrid";
import jnjLogo from "../assets/jnj.png";
import compassoLogo from "../assets/compasso-uol.png";

const experiences = [
  {
    company: "Johnson&Johnson",
    logo: jnjLogo,
    location: "São José dos Campos, SP",
    duration: "Jan 2024 - Present",
    description: "Part of the Data & Analytics Chapter at E.D.G.E (Johnson & Johnson), supporting the MedTech Latam commercial area. I work on the Data Lake, handling data processing, ETL standardization with Python and PySpark, and implementing Spark on AWS Lambda for performance and cost optimization. I’ve contributed to a Python framework for the Medallion Architecture, integrated the Data Lake with Salesforce, and automated pipelines using Git, Terraform, Jenkins, Docker, and Kubernetes (EKS). I also maintain documentation on Confluence and support FinOps initiatives like Spark on Lambda, Spark on Kubernetes, and Karpenter on EKS."
  },
  {
    company: "Compass UOL",
    logo: compassoLogo,
    location: "Remote",
    duration: "Jun 2023 - Dec 2023",
    description: "I participated in a scholarship program focused on Machine Learning and Computer Vision using AWS, where I developed practical projects to apply the knowledge acquired and contributed to Machine Learning projects aimed at prediction and data analysis."
  }
];

function Professional() {
  return (
    <div className="professional">
      <div className="professional-header">
        <h2>🏢 Professional Experience</h2>
      </div>
      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <div className="experience-item" key={idx}>
            <div className="company-logo">
              <img src={exp.logo} alt={exp.company + " logo"} />
            </div>
            <div className="company-details">
              <h3 className="company-name">{exp.company}</h3>
              <div className="company-location">{exp.location}</div>
              <div className="company-duration">{exp.duration}</div>
              <div className="company-description">{exp.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="skill-grid">
        <h2>🧠 Hard Skills</h2>
        <SkillGrid />
      </div>
    </div>
  );
}

export default Professional;
