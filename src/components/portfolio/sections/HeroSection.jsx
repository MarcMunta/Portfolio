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

        <aside data-gsap-hero className="hero-proof" aria-label={locale.expertise.title}>
          {locale.hero.proofPoints.map((point, index) => (
            <div key={point} className="proof-row">
              <span aria-hidden="true">0{index + 1}</span>
              <strong>{point}</strong>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
