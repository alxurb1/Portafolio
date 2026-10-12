import { ExternalLink } from "lucide-react";
import type { LocaleContent, Project } from "../data/content";
import { GithubMark } from "./BrandIcons";

type ProjectCardProps = {
  project: Project;
  copy: LocaleContent["projects"][Project["id"]];
  labels: LocaleContent["projectLabels"];
  number: number;
};

export default function ProjectCard({
  project,
  copy,
  labels,
  number,
}: ProjectCardProps) {
  return (
    <article className="project-row">
      <div className="project-index">{String(number).padStart(2, "0")}</div>
      <a
        className={`project-emblem project-emblem-${number}`}
        href={`?proyecto=${project.slug}`}
        aria-label={`${labels.openReport} ${copy.name}`}
      >
        <span aria-hidden="true">{project.mark}</span>
        <i aria-hidden="true">↗</i>
      </a>
      <div className="project-copy">
        <div className="project-meta">
          <span>{copy.tagline}</span>
          <span>{copy.role}</span>
        </div>
        <h3>
          <a href={`?proyecto=${project.slug}`}>{copy.name}</a>
        </h3>
        <p>{copy.description}</p>
        <ul className="project-stack" aria-label={labels.technologies}>
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
                <ExternalLink size={16} aria-hidden="true" />
                {labels.live}
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubMark size={16} />
                {labels.code}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
