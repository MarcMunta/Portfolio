import React from 'react';

const EDUCATION_PATH = ['SMX', 'DAW', 'DAM', 'IA'];

export function EducationSection({ locale }) {
  return (
    <section
      id="education"
      className="portfolio-section education-section"
      aria-labelledby="education-title"
      data-gsap-section
    >
      <div className="section-shell education-layout">
        <header className="education-heading" data-gsap-section-heading>
          <h2 id="education-title">{locale.educationSection.title}</h2>
          <p>{locale.educationSection.desc}</p>
        </header>

        <div className="education-dossier">
          <div className="education-dossier-bar" aria-hidden="true">
            <span>MM—EDU</span>
            <span>04 / 04</span>
            <span>2021—2027</span>
          </div>
          <ol className="education-list">
            {locale.educationSection.items.map((item, index) => (
              <li key={`${item.period}-${item.title}`} className="education-item" data-gsap-row>
                <span className="education-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <time>{item.period}</time>
                <div>
                  <h3>{item.title}</h3>
                  <p className="education-institution">{item.institution}</p>
                  <p className="education-description">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="education-path" data-gsap-row>
            <p>{locale.educationSection.pathLabel}</p>
            <ol>
              {EDUCATION_PATH.map((code, index) => (
                <li key={code}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <strong>{code}</strong>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
