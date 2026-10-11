import { ArrowUpRight, Mail } from "lucide-react";
import { contact } from "../data/content";

export default function Footer() {
  return (
    <footer id="contacto" className="site-footer page-grid">
      <div className="section-kicker">
        <span className="signal-square" aria-hidden="true" />
        02 / SIGUIENTE PASO
      </div>
      <div className="footer-main">
        <div>
          <p>¿TIENES UN PROYECTO EN MENTE?</p>
          <h2>
            Hagámoslo <em>real.</em>
          </h2>
        </div>
        <a
          className="footer-email"
          href={`mailto:${contact.email}`}
          aria-label={`Enviar correo a ${contact.email}`}
        >
          <ArrowUpRight size={38} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>
      <div className="footer-links">
        <a href={`mailto:${contact.email}`}>
          <Mail size={16} aria-hidden="true" />
          {contact.email}
        </a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          GITHUB <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          LINKEDIN <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} OSCAR URBÁEZ</span>
        <span>HECHO CON INTENCIÓN · SV</span>
      </div>
    </footer>
  );
}
