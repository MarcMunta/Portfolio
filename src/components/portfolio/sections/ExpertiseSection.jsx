import React from 'react';

export function ExpertiseSection({ locale }) {
  return (
    <section id="expertise" className="portfolio-section section-muted" aria-labelledby="expertise-title">
      <div className="section-shell">
        <header className="section-heading">
          <h2 id="expertise-title">{locale.expertise.title}</h2>
          <p>{locale.expertise.desc}</p>
        </header>

        <div className="expertise-list">
          {locale.expertise.groups.map((group, index) => (
            <article key={group.title} className="expertise-item">
              <span className="expertise-index" aria-hidden="true">0{index + 1}</span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <ul>
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
