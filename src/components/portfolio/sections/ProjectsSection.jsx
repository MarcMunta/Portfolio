import React from 'react';

import { ProjectCard } from '../projects/ProjectCard';

export function ProjectsSection({ locale, projects }) {
  return (
    <section
      id="projects"
      className="portfolio-section"
      aria-labelledby="projects-title"
      data-gsap-section
    >
      <div className="section-shell">
        <header className="section-heading projects-heading" data-gsap-section-heading>
          <div>
            <p className="section-kicker">{locale.projectsSection.kicker}</p>
            <h2 id="projects-title">{locale.projectsSection.title}</h2>
          </div>
          <div className="projects-heading-copy">
            <p>{locale.projectsSection.desc}</p>
            <span>{locale.projectsSection.countLabel}</span>
          </div>
        </header>

        <div className="project-archive">
          <aside className="archive-index" aria-label={locale.projectsSection.indexLabel}>
            <p>{locale.projectsSection.indexLabel}</p>
            <div className="archive-index-list">
              <span className="archive-progress-rail" aria-hidden="true">
                <span data-archive-progress />
              </span>
              <ol>
                {projects.map((project, index) => (
                  <li key={project.id}>
                    <a
                      href={`#project-${project.id}`}
                      data-project-nav={project.id}
                      aria-current={index === 0 ? 'true' : undefined}
                      className={index === 0 ? 'is-current' : undefined}
                    >
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <strong>{project.title}</strong>
                      <small>{project.category}</small>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
            <p className="archive-principle">{locale.projectsSection.principle}</p>
          </aside>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                labels={locale.labels}
                index={index}
                total={projects.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
