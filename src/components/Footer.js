import { Container, Row, Col } from "react-bootstrap";
import { Linkedin, Github, Envelope, Telephone, Whatsapp } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <footer className="footer-modern">
      <Container>
        <Row className="align-items-center py-4 g-3">
          <Col md={6} className="text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
              <div className="brand-badge me-2">SD</div>
              <span className="brand-name">Shweta Dubey</span>
            </div>
            <p className="footer-tagline mb-0">
              Freelance Software Developer • 3+ Years of Software & Mobile Engineering Excellence
            </p>
          </Col>

          <Col md={6} className="text-center text-md-end">
            <div className="footer-social-links mb-2">
              <a
                href="https://www.https://www.linkedin.com/in/shweta-d-b1629a242//"
                target="_blank"
                rel="noreferrer"
                className="footer-icon-btn"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/shwetadubey23"
                target="_blank"
                rel="noreferrer"
                className="footer-icon-btn"
                title="GitHub"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:dubeyshweta0246@gmail.com"
                className="footer-icon-btn"
                title="Email"
                aria-label="Email"
              >
                <Envelope size={18} />
              </a>
              <a
                href="tel:+917071236283"
                className="footer-icon-btn"
                title="Phone"
                aria-label="Phone"
              >
                <Telephone size={18} />
              </a>
              <a
                href="https://wa.me/+917071236283"
                target="_blank"
                rel="noreferrer"
                className="footer-icon-btn whatsapp-btn"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <Whatsapp size={18} />
              </a>
            </div>
            <p className="footer-copyright mb-0">
              © {new Date().getFullYear()} Shweta Dubey. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
