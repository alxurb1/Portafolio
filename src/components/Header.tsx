import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  function toggleTheme() {
    const nextTheme = !isDark;
    document.documentElement.classList.toggle("dark", nextTheme);
    document.documentElement.style.colorScheme = nextTheme ? "dark" : "light";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", nextTheme ? "#11121b" : "#e9e9e5");
    try {
      localStorage.setItem("theme", nextTheme ? "dark" : "light");
    } catch {
      // El tema sigue funcionando durante esta visita.
    }
    setIsDark(nextTheme);
  }

  return (
    <header className="site-header page-grid">
      <a
        className="wordmark"
        href="#inicio"
        aria-label="Oscar Urbáez, volver al inicio"
      >
        O<span>U</span>
        <i aria-hidden="true">✳</i>
      </a>
      <span className="header-coordinate" aria-hidden="true">
        DESARROLLO / DESDE SV
      </span>
      <nav aria-label="Navegación principal" className="header-nav">
        <a href="#proyectos">PROYECTOS</a>
        <a href="#contacto">CONTACTO</a>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? "Activar tema claro" : "Activar tema oscuro"}
          title={isDark ? "Activar tema claro" : "Activar tema oscuro"}
          className="theme-button"
        >
          {isDark ? (
            <Sun size={17} aria-hidden="true" />
          ) : (
            <Moon size={17} aria-hidden="true" />
          )}
          <span>{isDark ? "CLARO" : "OSCURO"}</span>
        </button>
      </nav>
    </header>
  );
}
