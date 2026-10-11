import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/content";

type ProjectCardProps = { project: Project; number: number };

export default function ProjectCard({ project, number }: ProjectCardProps) {
  return (
    <article className="project-row">
      <div className="project-index">{String(number).padStart(2, "0")}</div>
      <div
        className={`project-emblem project-emblem-${number}`}
        aria-hidden={project.screenshot ? undefined : true}
      >
        {project.screenshot ? (
          <img
            className="project-screenshot"
            src={project.screenshot.src}
            alt={project.screenshot.alt}
            loading="lazy"
          />
        ) : (
          <>
            <span>{project.mark}</span>
            <i>↗</i>
          </>
        )}
      </div>
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.tagline}</span>
          <span>{project.role}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="project-stack" aria-label="Tecnologías utilizadas">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {(project.links.github || project.links.live) && (
          <div className="project-links">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                VER PROYECTO <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                VER CÓDIGO <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
