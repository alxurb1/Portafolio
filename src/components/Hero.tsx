import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { PointerEvent } from "react";
import { contact, type LocaleContent } from "../data/content";

type HeroCopy = LocaleContent["hero"];

function DeviceScene({ copy }: { copy: HeroCopy }) {
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
      <div className="float-label float-label-bottom">{copy.artFloating}</div>
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
            <div className="screen-label">{copy.screenLabel}</div>
            <div className="screen-core">
              <span className="core-ring core-ring-outer" />
              <span className="core-ring core-ring-inner" />
              <span className="core-glyph">
                O<span>U</span>
              </span>
            </div>
            <div className="screen-bottom">
              <span>{copy.screenBottom}</span>
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

export default function Hero({ copy }: { copy: HeroCopy }) {
  return (
    <section
      id="inicio"
      className="hero page-grid"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <div className="hero-eyebrow">
          <span className="signal-square" aria-hidden="true" />
          {copy.eyebrow} / {new Date().getFullYear()}
        </div>
        <p className="hero-intro">{copy.intro}</p>
        <h1 id="hero-title">
          {copy.titleLine1}
          <br />
          {copy.titleLine2} <em>{copy.titleEmphasis}</em>
          <br />
          {copy.titleLine3}
          <span className="hero-period">.</span>
        </h1>
        <p className="hero-description">{copy.description}</p>
        <div className="hero-actions">
          <a className="action-primary" href="#proyectos">
            {copy.projectsAction}{" "}
            <ArrowDownRight size={19} aria-hidden="true" />
          </a>
          <a className="action-text" href={`mailto:${contact.email}`}>
            {copy.contactAction} <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hero-art">
        <div className="art-header">
          <span>FIG. 01</span>
          <span>{copy.artForm}</span>
        </div>
        <DeviceScene copy={copy} />
        <div className="art-footer">
          <span>{copy.artFooter}</span>
          <span>↘</span>
        </div>
      </div>
      <div className="hero-bottom">
        {copy.skills.map((skill, index) => (
          <span key={skill}>
            <b>{String(index + 1).padStart(2, "0")}</b> / {skill}
          </span>
        ))}
        <span className="hero-bottom-location">{copy.location}</span>
      </div>
    </section>
  );
}
