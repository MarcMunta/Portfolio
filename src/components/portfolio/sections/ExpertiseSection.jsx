import React from 'react';

export function ExpertiseSection({ locale }) {
  return (
    <section
      id="expertise"
      className="portfolio-section section-muted"
      aria-labelledby="expertise-title"
      data-gsap-section
    >
      <div className="section-shell">
        <header className="section-heading" data-gsap-section-heading>
          <h2 id="expertise-title">{locale.expertise.title}</h2>
          <p>{locale.expertise.desc}</p>
        </header>

        <div className="expertise-list">
          {locale.expertise.groups.map((group, index) => (
            <article key={group.title} className="expertise-item" data-gsap-row>
              <span className="expertise-index" aria-hidden="true">0{index + 1}</span>
              <div className="expertise-copy">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <ul>
                {group.skills.map((skill, skillIndex) => (
                  <li key={skill}>
                    <span aria-hidden="true">{String(skillIndex + 1).padStart(2, '0')}</span>
                    {skill}
                  </li>
                ))}
              </ul>
              <span className={`expertise-sigil expertise-sigil-${index + 1}`} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
