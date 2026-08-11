/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Download, FileText } from 'lucide-react';

const CV_LANGUAGES = {
  visual: [
    { code: 'ES', path: 'docs/cv/marc-muntane-clara-cv-es.pdf' },
    { code: 'CA', path: 'docs/cv/marc-muntane-clara-cv-ca.pdf' },
    { code: 'EN', path: 'docs/cv/marc-muntane-clara-cv-en.pdf' },
  ],
  ats: [
    { code: 'ES', path: 'docs/cv/marc-muntane-clara-cv-es-ats.pdf' },
    { code: 'CA', path: 'docs/cv/marc-muntane-clara-cv-ca-ats.pdf' },
    { code: 'EN', path: 'docs/cv/marc-muntane-clara-cv-en-ats.pdf' },
  ],
};

export function CvSection({ locale }) {
  const [activeFormat, setActiveFormat] = useState('visual');
  const selectedFormat = locale.cvSection.formats[activeFormat];
  const formatEntries = Object.entries(locale.cvSection.formats);

  const handleFormatKeyDown = (event, index) => {
    const lastIndex = formatEntries.length - 1;
    let nextIndex = index;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = index === lastIndex ? 0 : index + 1;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = index === 0 ? lastIndex : index - 1;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = lastIndex;
    } else {
      return;
    }

    event.preventDefault();
    const nextFormat = formatEntries[nextIndex][0];
    setActiveFormat(nextFormat);
    requestAnimationFrame(() => document.getElementById(`cv-format-${nextFormat}`)?.focus());
  };

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

        <div className={`cv-showcase cv-showcase-${activeFormat}`} data-gsap-row>
          <div className="cv-specimen-bar">
            <span aria-hidden="true">MM—CV / 2026</span>
            <span aria-live="polite">{selectedFormat.meta}</span>
            <nav className="cv-language-links" aria-label={locale.cvSection.languageLabel}>
              {CV_LANGUAGES[activeFormat].map((option) => {
                const isCurrent = selectedFormat.path === option.path;

                return (
                  <a
                    key={option.code}
                    href={option.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-current={isCurrent ? 'page' : undefined}
                  >
                    {option.code}
                  </a>
                );
              })}
            </nav>
          </div>

          <div
            id="cv-preview-panel"
            className="cv-preview-panel"
            role="tabpanel"
            aria-labelledby={`cv-format-${activeFormat}`}
            data-cursor-preserve-color
          >
            <a
              href={selectedFormat.path}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-preview-link"
              aria-label={`${locale.cvSection.openLabel}: ${selectedFormat.label}`}
            >
              <div className="cv-preview-toolbar">
                <span>
                  <FileText size={16} aria-hidden="true" />
                  {selectedFormat.previewLabel}
                </span>
                <span>{selectedFormat.meta}</span>
              </div>
              <div className="cv-preview-stage">
                <span className="cv-preview-format-stamp" aria-hidden="true">
                  {selectedFormat.shortLabel}
                </span>
                <img
                  key={selectedFormat.previewPath}
                  src={selectedFormat.previewPath}
                  alt={selectedFormat.previewAlt}
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
          </div>

          <aside className="cv-summary" aria-label={locale.cvSection.summaryKicker}>
            <p className="cv-summary-kicker">{locale.cvSection.summaryKicker}</p>
            <h3>{locale.cvSection.summaryTitle}</h3>
            <p className="cv-summary-intro">{locale.cvSection.summaryIntro}</p>

            <div className="cv-format-selector" role="tablist" aria-label={locale.cvSection.formatLabel}>
              {formatEntries.map(([formatKey, format], index) => {
                const isActive = activeFormat === formatKey;

                return (
                  <button
                    key={formatKey}
                    id={`cv-format-${formatKey}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="cv-preview-panel"
                    tabIndex={isActive ? 0 : -1}
                    className={isActive ? 'is-active' : undefined}
                    onClick={() => setActiveFormat(formatKey)}
                    onKeyDown={(event) => handleFormatKeyDown(event, index)}
                  >
                    <span aria-hidden="true">0{index + 1}</span>
                    <span>
                      <strong>{format.label}</strong>
                      <small>{format.description}</small>
                    </span>
                    <em>{format.badge}</em>
                  </button>
                );
              })}
            </div>

            <ul className="cv-facts">
              {locale.cvSection.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>

            <div className="cv-actions">
              <a
                href={selectedFormat.path}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                {locale.cvSection.openLabel}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a href={selectedFormat.path} download className="button button-secondary">
                {locale.cvSection.downloadLabel}
                <Download size={18} aria-hidden="true" />
              </a>
            </div>

            <a
              href={selectedFormat.generalPath}
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
