/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ArrowDownRight, Download } from 'lucide-react';

export function HeroSection({ locale, scrollToSection }) {
  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-title">
      <div className="section-shell hero-layout">
        <div className="hero-copy">
          <div data-gsap-hero className="availability-line">
            <span className="availability-dot" aria-hidden="true" />
            {locale.hero.availability}
          </div>

          <p data-gsap-hero className="hero-name">{locale.hero.name}</p>
          <h1 data-gsap-hero id="hero-title" className="hero-title">
            {locale.hero.titleLead}{' '}
            <span>{locale.hero.titleAccent}</span>
          </h1>
          <p data-gsap-hero className="hero-subtitle">{locale.hero.subtitle}</p>
          <p data-gsap-hero className="hero-supporting">{locale.hero.supporting}</p>

          <div data-gsap-hero className="hero-actions">
            <a
              href="#projects"
              onClick={(event) => scrollToSection('projects', event)}
              className="button button-primary"
            >
              {locale.hero.viewProjects}
              <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <a
              href={locale.cvSection.localizedPath}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary"
            >
              {locale.hero.downloadCv}
              <Download size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-visual" data-gsap-portrait>
          <figure className="hero-portrait">
            <span className="portrait-orbit portrait-orbit-outer" aria-hidden="true" />
            <span className="portrait-orbit portrait-orbit-inner" aria-hidden="true" />
            <span className="portrait-node portrait-node-one" aria-hidden="true" />
            <span className="portrait-node portrait-node-two" aria-hidden="true" />

            <div className="portrait-frame" data-cursor-morph>
              <img
                src="images/profile/marc-muntane.jpg"
                alt={locale.hero.portraitAlt}
                width="460"
                height="460"
                decoding="async"
                fetchPriority="high"
              />
            </div>

            <figcaption className="portrait-caption">
              <span>{locale.hero.portraitKicker}</span>
              <strong>{locale.hero.portraitCaption}</strong>
            </figcaption>
          </figure>

          <aside className="hero-proof" aria-label={locale.expertise.title}>
            {locale.hero.proofPoints.map((point, index) => (
              <div key={point} className="proof-row">
                <span aria-hidden="true">0{index + 1}</span>
                <strong>{point}</strong>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
