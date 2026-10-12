import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import type { Language, LocaleContent } from "../data/content";

type HeaderProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
  copy: LocaleContent;
  isDetail: boolean;
};

export default function Header({
  language,
  onLanguageChange,
  copy,
  isDetail,
}: HeaderProps) {
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
        href={isDetail ? "./#inicio" : "#inicio"}
        aria-label={copy.brandLabel}
      >
        O<span>U</span>
        <i aria-hidden="true">✳</i>
      </a>
      <span className="header-coordinate" aria-hidden="true">
        {copy.nav.coordinate}
      </span>
      <nav aria-label={copy.navigationLabel} className="header-nav">
        <a href={isDetail ? "./#proyectos" : "#proyectos"}>
          {copy.nav.projects}
        </a>
        <a href="#contacto">{copy.nav.contact}</a>
        <button
          type="button"
          className="language-button"
          onClick={() => onLanguageChange(language === "es" ? "en" : "es")}
          aria-label={copy.languageLabel}
          title={copy.languageLabel}
        >
          {language === "es" ? "EN" : "ES"}
        </button>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? copy.theme.lightLabel : copy.theme.darkLabel}
          title={isDark ? copy.theme.lightLabel : copy.theme.darkLabel}
          className="theme-button"
        >
          {isDark ? (
            <Sun size={17} aria-hidden="true" />
          ) : (
            <Moon size={17} aria-hidden="true" />
          )}
          <span>{isDark ? copy.theme.light : copy.theme.dark}</span>
        </button>
      </nav>
    </header>
  );
}
