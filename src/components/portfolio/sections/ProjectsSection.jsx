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
        <header className="section-heading" data-gsap-section-heading>
          <h2 id="projects-title">{locale.projectsSection.title}</h2>
          <p>{locale.projectsSection.desc}</p>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              labels={locale.labels}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
