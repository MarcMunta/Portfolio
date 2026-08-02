import React from 'react';

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

        <ol className="education-list">
          {locale.educationSection.items.map((item) => (
            <li key={`${item.period}-${item.title}`} className="education-item" data-gsap-row>
              <time>{item.period}</time>
              <div>
                <h3>{item.title}</h3>
                <p className="education-institution">{item.institution}</p>
                <p className="education-description">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
