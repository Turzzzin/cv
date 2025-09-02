import "./SkillGrid.css";

function SkillGrid() {
  return (
    <div className="skill-grid-icons">
      <img
        src="https://skillicons.dev/icons?i=py,aws,git,docker,jenkins,kubernetes,linux,mysql,postman,terraform&perline=12"
        alt="Skill Icons"
        className="skill-icons"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg"
        alt="Spark"
        width="40"
        height="40"
        className="skill-icon"
      />
      <img 
        src="https://spark.apache.org/images/delta-lake-logo.png" 
        alt="Delta Lake" 
        width="40" 
        height="40"/>
    </div>
  );
}

export default SkillGrid;