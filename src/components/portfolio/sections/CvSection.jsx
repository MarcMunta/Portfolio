import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';

export function CvSection({ locale }) {
  return (
    <section
      id="cv"
      className="portfolio-section section-muted"
      aria-labelledby="cv-title"
      data-gsap-section
    >
      <div className="section-shell cv-layout" data-gsap-section-heading>
        <div>
          <h2 id="cv-title">{locale.cvSection.title}</h2>
          <p>{locale.cvSection.desc}</p>
        </div>
        <div className="cv-actions">
          <a
            href={locale.cvSection.localizedPath}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            {locale.cvSection.localizedLabel}
            <Download size={18} aria-hidden="true" />
          </a>
          <a
            href={locale.cvSection.generalPath}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-secondary"
          >
            {locale.cvSection.generalLabel}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
