/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ArrowUpRight, Download, FileText } from 'lucide-react';

export function CvSection({ locale }) {
  return (
    <section
      id="cv"
      className="portfolio-section section-muted cv-section"
      aria-labelledby="cv-title"
      data-gsap-section
    >
      <div className="section-shell">
        <header className="section-heading" data-gsap-section-heading>
          <h2 id="cv-title">{locale.cvSection.title}</h2>
          <p>{locale.cvSection.desc}</p>
        </header>

        <div className="cv-showcase" data-gsap-row>
          <a
            href={locale.cvSection.localizedPath}
            target="_blank"
            rel="noopener noreferrer"
            className="cv-preview-link"
            aria-label={locale.cvSection.openLabel}
          >
            <div className="cv-preview-toolbar">
              <span>
                <FileText size={16} aria-hidden="true" />
                {locale.cvSection.previewLabel}
              </span>
              <span>{locale.cvSection.previewMeta}</span>
            </div>
            <div className="cv-preview-stage">
              <img
                src={locale.cvSection.previewPath}
                alt={locale.cvSection.previewAlt}
                width="1191"
                height="1685"
                loading="lazy"
                decoding="async"
                draggable="false"
              />
              <span className="cv-preview-open" aria-hidden="true">
                {locale.cvSection.openLabel}
                <ArrowUpRight size={17} />
              </span>
            </div>
          </a>

          <aside className="cv-summary" aria-label={locale.cvSection.summaryKicker}>
            <p className="cv-summary-kicker">{locale.cvSection.summaryKicker}</p>
            <h3>{locale.cvSection.summaryTitle}</h3>
            <ul className="cv-facts">
              {locale.cvSection.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>

            <div className="cv-actions">
              <a
                href={locale.cvSection.localizedPath}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                {locale.cvSection.openLabel}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a
                href={locale.cvSection.localizedPath}
                download
                className="button button-secondary"
              >
                {locale.cvSection.localizedLabel}
                <Download size={18} aria-hidden="true" />
              </a>
            </div>

            <a
              href={locale.cvSection.generalPath}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-general-link"
            >
              {locale.cvSection.generalLabel}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
