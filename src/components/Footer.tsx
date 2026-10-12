import { ArrowUpRight, Mail } from "lucide-react";
import { contact, type LocaleContent } from "../data/content";
import { GithubMark, LinkedInMark } from "./BrandIcons";

export default function Footer({ copy }: { copy: LocaleContent["footer"] }) {
  return (
    <footer id="contacto" className="site-footer page-grid">
      <div className="section-kicker">
        <span className="signal-square" aria-hidden="true" />
        {copy.kicker}
      </div>
      <div className="footer-main">
        <div>
          <p>{copy.prompt}</p>
          <h2>
            {copy.title} <em>{copy.emphasis}</em>
          </h2>
        </div>
        <a
          className="footer-email"
          href={`mailto:${contact.email}`}
          aria-label={`${copy.emailLabel} ${contact.email}`}
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
          <GithubMark />
          GITHUB
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedInMark />
          LINKEDIN
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} OSCAR URBÁEZ</span>
        <span>{copy.intention}</span>
      </div>
    </footer>
  );
}
