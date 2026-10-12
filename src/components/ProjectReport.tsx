import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  projectMedia,
  type LocaleContent,
  type Project,
} from "../data/content";

type ProjectReportProps = {
  project: Project;
  copy: LocaleContent;
};

export default function ProjectReport({ project, copy }: ProjectReportProps) {
  const details = copy.projects[project.id];

  return (
    <main id="contenido" className="report-page page-grid">
      <a className="report-back" href="./#proyectos">
        <ArrowLeft size={17} aria-hidden="true" />
        {copy.report.back}
      </a>

      <header className="report-header">
        <div className="section-kicker">
          <span className="signal-square" aria-hidden="true" />
          {copy.report.overview} / {details.tagline}
        </div>
        <h1>{details.name}</h1>
        <div className="report-intro">
          <span>{details.role}</span>
          <p>{details.description}</p>
        </div>
      </header>

      <section
        className="report-features"
        aria-labelledby="report-features-title"
      >
        <div className="section-kicker">
          <span className="signal-square" aria-hidden="true" />
          {copy.report.contribution}
        </div>
        <h2 id="report-features-title">{copy.report.features}</h2>
        <div className="report-feature-list">
          {details.features.map((feature, index) => {
            const images = projectMedia[project.id]?.[feature.id] ?? [];

            return (
              <article className="report-feature" key={feature.id}>
                <span className="report-feature-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="report-feature-body">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  {images.length > 0 && (
                    <div className="report-gallery">
                      {images.map((src, imageIndex) => (
                        <a
                          href={src}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={src}
                          aria-label={`${copy.report.imageLabel}: ${feature.title} ${imageIndex + 1}`}
                        >
                          <img
                            src={src}
                            alt={
                              feature.imageAlts?.[imageIndex] ??
                              `${feature.imageAlt} ${imageIndex + 1}`
                            }
                            loading="lazy"
                          />
                          <ArrowUpRight size={18} aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="report-tech" aria-label={copy.report.stack}>
        <span>{copy.report.stack}</span>
        <ul
          className="project-stack"
          aria-label={copy.projectLabels.technologies}
        >
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
