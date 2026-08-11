/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ArrowDownRight, Download } from 'lucide-react';

export function HeroSection({ locale, scrollToSection }) {
  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-title">
      <div className="section-shell hero-shell">
        <div className="hero-board">
          <span className="hero-calibration-sweep" data-hero-calibration-sweep aria-hidden="true" />
          <div className="hero-board-meta" data-gsap-hero>
            <span>MM—01 / BCN</span>
            <span>{locale.hero.boardLabel}</span>
            <span>2026.08</span>
          </div>

          <figure className="hero-portrait" data-gsap-portrait>
            <span className="registration-mark registration-mark-top" aria-hidden="true" />
            <span className="registration-mark registration-mark-bottom" aria-hidden="true" />
            <div className="portrait-frame">
              <img
                src="images/profile/marc-muntane.jpg"
                alt={locale.hero.portraitAlt}
                width="460"
                height="460"
                decoding="async"
                fetchPriority="high"
                draggable="false"
              />
            </div>
            <figcaption className="portrait-caption">
              <span>{locale.hero.name}</span>
              <strong>{locale.hero.portraitKicker}</strong>
            </figcaption>
          </figure>

          <div className="hero-copy">
            <div data-gsap-hero className="availability-line">
              <span className="availability-dot" aria-hidden="true" />
              {locale.hero.availability}
            </div>

            <p data-gsap-hero className="hero-name">{locale.hero.thesisLabel}</p>
            <h1 id="hero-title" className="hero-title">
              <span className="hero-title-mask">
                <span data-hero-title-line>{locale.hero.titleLead}</span>
              </span>
              <span className="hero-title-mask hero-title-mask-accent">
                <span data-hero-title-line>{locale.hero.titleAccent}</span>
              </span>
            </h1>
            <p data-gsap-hero className="hero-subtitle">{locale.hero.subtitle}</p>

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
                href={locale.cvSection.formats.visual.path}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                {locale.hero.downloadCv}
                <Download size={17} aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="hero-proof" aria-label={locale.expertise.title} data-gsap-hero>
            {locale.hero.proofPoints.map((point, index) => (
              <div key={point} className="proof-row">
                <span aria-hidden="true">0{index + 1}</span>
                <strong>{point}</strong>
              </div>
            ))}
          </aside>
        </div>

        <div className="hero-transition" data-gsap-hero>
          <div className="hero-afterword">
            <span>{locale.hero.supporting}</span>
            <span aria-hidden="true">↓</span>
          </div>

          <div className="hero-workflow" aria-hidden="true">
            <div className="hero-workflow-track" data-hero-workflow-track>
              {[...locale.hero.proofPoints, ...locale.hero.proofPoints].map((point, index) => (
                <span key={`${point}-${index}`} className="hero-workflow-item">
                  <small>{String((index % locale.hero.proofPoints.length) + 1).padStart(2, '0')}</small>
                  <strong>{point}</strong>
                  <i>↗</i>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
