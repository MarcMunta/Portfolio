import React from 'react';

export function ExperienceSection({ locale }) {
  return (
    <section
      id="experience"
      className="portfolio-section"
      aria-labelledby="experience-title"
      data-gsap-section
    >
      <div className="section-shell">
        <header className="section-heading" data-gsap-section-heading>
          <h2 id="experience-title">{locale.experienceSection.title}</h2>
          <p>{locale.experienceSection.desc}</p>
        </header>

        <div className="experience-list">
          <span className="experience-progress-rail" aria-hidden="true">
            <span data-experience-progress />
          </span>
          {locale.experienceSection.items.map((item, index) => (
            <article key={`${item.period}-${item.title}`} className="experience-item" data-gsap-row>
              <span className="experience-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <time>{item.period}</time>
              <div>
                <h3>{item.title}</h3>
                <p className="experience-meta">{item.meta}</p>
              </div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
