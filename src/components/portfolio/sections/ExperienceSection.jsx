import React from 'react';

export function ExperienceSection({ locale }) {
  return (
    <section id="experience" className="portfolio-section" aria-labelledby="experience-title">
      <div className="section-shell">
        <header className="section-heading">
          <h2 id="experience-title">{locale.experienceSection.title}</h2>
          <p>{locale.experienceSection.desc}</p>
        </header>

        <div className="experience-list">
          {locale.experienceSection.items.map((item) => (
            <article key={`${item.period}-${item.title}`} className="experience-item">
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
