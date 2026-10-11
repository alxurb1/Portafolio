import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/content";

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />

        <section
          id="proyectos"
          className="work-section page-grid"
          aria-labelledby="work-title"
        >
          <div className="section-kicker">
            <span className="signal-square" aria-hidden="true" />
            01 / TRABAJO SELECCIONADO
          </div>
          <div className="work-heading">
            <h2 id="work-title">
              Del concepto <em>al producto.</em>
            </h2>
            <p>
              Proyectos donde el código tuvo un propósito: resolver problemas,
              mejorar flujos y llevar ideas a producción.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                number={index + 1}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
