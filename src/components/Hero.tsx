import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { PointerEvent } from "react";
import { contact } from "../data/content";

function DeviceScene() {
  function moveDevice(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - left) / width - 0.5;
    const y = (event.clientY - top) / height - 0.5;
    event.currentTarget.style.setProperty("--tilt-y", `${x * 10}deg`);
    event.currentTarget.style.setProperty("--tilt-x", `${y * -8}deg`);
  }

  function resetDevice(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
  }

  return (
    <div
      className="scene"
      aria-hidden="true"
      onPointerMove={moveDevice}
      onPointerLeave={resetDevice}
    >
      <div className="scene-orbit scene-orbit-one" />
      <div className="scene-orbit scene-orbit-two" />
      <div className="scene-floor" />
      <div className="float-label float-label-top">
        REACT NATIVE / TYPESCRIPT
      </div>
      <div className="float-label float-label-bottom">
        BUILDING FOR REAL LIFE ↗
      </div>
      <div className="phone-shadow" />
      <div className="phone-wrap">
        <div className="phone-back" />
        <div className="phone-edge" />
        <div className="phone-face">
          <div className="phone-camera" />
          <div className="phone-screen">
            <div className="screen-topline">
              <span>09:41</span>
              <span>•••</span>
            </div>
            <div className="screen-label">OSCAR / ENGINEER</div>
            <div className="screen-core">
              <span className="core-ring core-ring-outer" />
              <span className="core-ring core-ring-inner" />
              <span className="core-glyph">
                O<span>U</span>
              </span>
            </div>
            <div className="screen-bottom">
              <span>IDEA → INTERFAZ</span>
              <span>01 / 03</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scene-cross scene-cross-one">+</div>
      <div className="scene-cross scene-cross-two">+</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="hero page-grid"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <div className="hero-eyebrow">
          <span className="signal-square" aria-hidden="true" />
          PORTAFOLIO / MOBILE ENGINEER / {new Date().getFullYear()}
        </div>
        <p className="hero-intro">Hola, soy Oscar Urbáez.</p>
        <h1 id="hero-title">
          Hago que
          <br />
          las ideas <em>vivan</em>
          <br />
          en pantalla<span className="hero-period">.</span>
        </h1>
        <p className="hero-description">
          Desarrollo productos móviles con React Native y TypeScript. En Focus
          Bear trabajo en funcionalidades y mejoras para una app que ya está en
          manos de usuarios.
        </p>
        <div className="hero-actions">
          <a className="action-primary" href="#proyectos">
            VER PROYECTOS <ArrowDownRight size={19} aria-hidden="true" />
          </a>
          <a className="action-text" href={`mailto:${contact.email}`}>
            HABLEMOS <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hero-art">
        <div className="art-header">
          <span>FIG. 01</span>
          <span>FORM / FUNCTION</span>
        </div>
        <DeviceScene />
        <div className="art-footer">
          <span>DISEÑADO PARA EL MUNDO REAL</span>
          <span>↘</span>
        </div>
      </div>
      <div className="hero-bottom">
        <span>
          <b>01</b> / REACT NATIVE
        </span>
        <span>
          <b>02</b> / TYPESCRIPT
        </span>
        <span>
          <b>03</b> / PRODUCT THINKING
        </span>
        <span className="hero-bottom-location">EL SALVADOR ↗ REMOTO</span>
      </div>
    </section>
  );
}
