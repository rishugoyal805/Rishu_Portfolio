import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Background pattern */}
      <div className="footer-pattern">
        <div className="footer-blur"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <Link href="/" className="footer-logo">
              Rishu<span className="text-primary">Goyal</span>
            </Link>
            <p className="footer-description">
              "Building digital experiences that make a real impact. Let's collaborate and bring your ideas to life."
            </p>
            <div className="footer-icons">
              <Link
                href="https://github.com/rishugoyal805"
                target="_blank"
                className="footer-icon"
              >
                <Github className="icon-size" />
              </Link>
              <Link
                href="https://linkedin.com/in/rishu0405"
                target="_blank"
                className="footer-icon"
              >
                <Linkedin className="icon-size" />
              </Link>
              <Link
                href="mailto:rishugoyal16800@gmail.com"
                className="footer-icon"
              >
                <Mail className="icon-size" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <Link href="#home" className="footer-link">Home</Link>
                </li>
                <li>
                  <Link href="#about" className="footer-link">About</Link>
                </li>
                <li>
                  <Link href="#skills" className="footer-link">Skills</Link>
                </li>
                <li>
                  <Link href="#projects" className="footer-link">Projects</Link>
                </li>
                <li>
                  <Link href="#contact" className="footer-link">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="footer-heading">Contact</h3>
              <ul className="footer-links">
                <li className="footer-text">Noida, Uttar Pradesh, India</li>
                <li>
                  <Link href="mailto:rishugoyal@gmail.com" className="footer-link">
                    rishugoyal@gmail.com
                  </Link>
                </li>
                <li>
                  <Link href="tel:+918059870163" className="footer-link">
                    +91 8059870163
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
