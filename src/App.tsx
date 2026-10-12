import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import ProjectReport from "./components/ProjectReport";
import { content, projects, type Language } from "./data/content";

function initialLanguage(): Language {
  try {
    return localStorage.getItem("language") === "en" ? "en" : "es";
  } catch {
    return "es";
  }
}

export default function App() {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const copy = content[language];
  const requestedSlug = new URLSearchParams(window.location.search).get(
    "proyecto",
  );
  const selectedProject = projects.find(
    (project) => project.slug === requestedSlug,
  );
  const projectCopy = selectedProject && copy.projects[selectedProject.id];

  useEffect(() => {
    document.documentElement.lang = language;
    const title = projectCopy
      ? `${projectCopy.name} — Oscar Urbáez`
      : copy.metadata.title;
    const description = projectCopy?.description ?? copy.metadata.description;
    document.title = title;
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", title);
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute(
        "content",
        projectCopy?.description ?? copy.metadata.socialDescription,
      );
    try {
      localStorage.setItem("language", language);
    } catch {
      // El cambio de idioma sigue funcionando durante esta visita.
    }
  }, [copy, language, projectCopy]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">
        {copy.skipLink}
      </a>
      <Header
        language={language}
        onLanguageChange={setLanguage}
        copy={copy}
        isDetail={Boolean(selectedProject)}
      />
      {selectedProject ? (
        <ProjectReport project={selectedProject} copy={copy} />
      ) : (
        <main id="contenido">
          <Hero copy={copy.hero} />
          <section
            id="proyectos"
            className="work-section page-grid"
            aria-labelledby="work-title"
          >
            <div className="section-kicker">
              <span className="signal-square" aria-hidden="true" />
              {copy.work.kicker}
            </div>
            <div className="work-heading">
              <h2 id="work-title">
                {copy.work.title} <em>{copy.work.emphasis}</em>
              </h2>
              <p>{copy.work.intro}</p>
            </div>
            <div className="project-list">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  copy={copy.projects[project.id]}
                  labels={copy.projectLabels}
                  number={index + 1}
                />
              ))}
            </div>
          </section>
        </main>
      )}
      <Footer copy={copy.footer} />
    </div>
  );
}
