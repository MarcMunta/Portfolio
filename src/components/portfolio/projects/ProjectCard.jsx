/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ArrowUpRight, FileText, Github } from 'lucide-react';

import { resolveProjectPdfPath } from '../../../lib/portfolio/pdf';

export function ProjectCard({ project, labels }) {
  const repoLinks = Array.isArray(project.repoLinks) ? project.repoLinks : [];

  return (
    <article className="project-card" data-gsap-project-card>
      <div className={`project-media project-media-${project.imageMode}`}>
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
        />
        <div className="project-media-meta" aria-hidden="true">
          <span>{project.year}</span>
          <span>{project.status}</span>
        </div>
      </div>

      <div className="project-content">
        <div className="project-heading-row">
          <div>
            <p className="project-category">
              {project.category}
              {project.isNew ? <span>{labels.newProject}</span> : null}
            </p>
            <h3>{project.title}</h3>
          </div>
        </div>

        <p className="project-summary">{project.summary}</p>

        <div className="project-role">
          <span>{labels.role}</span>
          <p>{project.role}</p>
        </div>

        <ul className="project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="project-tags" aria-label="Stack">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        <div className="project-actions">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-link-primary"
            >
              {labels.liveDemo}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          ) : null}

          {repoLinks.map((repo) => (
            <a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              <Github size={16} aria-hidden="true" />
              {repoLinks.length > 1 ? repo.label : labels.sourceCode}
            </a>
          ))}

          {project.pdfPath ? (
            <a
              href={resolveProjectPdfPath(project.pdfPath)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              <FileText size={16} aria-hidden="true" />
              {labels.technicalDoc}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
