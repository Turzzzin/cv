import "./ContactGrid.css";

function ContactGrid() {
  return (
    <div className="contact-grid">
      <a href="mailto:artur.fguimaraes1@gmail.com" className="contact-item">
        <i className="fas fa-envelope"></i>
        <div>
          <strong>Email</strong><br />
          artur.fguimaraes1@gmail.com
        </div>
      </a>

      <a href="tel:(12)98279-2020" className="contact-item">
        <i className="fas fa-phone"></i>
        <div>
          <strong>Telefone</strong><br />
          (12) 98279-2020
        </div>
      </a>

      <a
        href="https://linkedin.com/in/arturguimaraes"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <i className="fab fa-linkedin"></i>
        <div>
          <strong>LinkedIn</strong><br />
          linkedin.com/in/arturguimaraes
        </div>
      </a>

      <a
        href="https://github.com/turzzzin"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-item"
      >
        <i className="fab fa-github"></i>
        <div>
          <strong>GitHub</strong><br />
          github.com/turzzzin
        </div>
      </a>
    </div>
  );
}

export default ContactGrid;
