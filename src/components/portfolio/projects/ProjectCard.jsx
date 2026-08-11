/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ArrowUpRight, FileText, Github } from 'lucide-react';

import { resolveProjectPdfPath } from '../../../lib/portfolio/pdf';

export function ProjectCard({ project, labels, index, total }) {
  const repoLinks = Array.isArray(project.repoLinks) ? project.repoLinks : [];
  const primaryUrl = project.demoUrl
    || repoLinks[0]?.url
    || (project.pdfPath ? resolveProjectPdfPath(project.pdfPath) : '#projects');

  return (
    <article
      id={`project-${project.id}`}
      className={`project-card project-card-${project.id}`}
      data-gsap-project-card
      data-project-index={index}
    >
      <header className="project-specimen-bar">
        <span className="project-sequence" aria-hidden="true">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <span>{project.category}</span>
        <span className="project-status"><i aria-hidden="true" />{project.status}</span>
        <span>{project.year}</span>
      </header>

      <div className="project-specimen-layout">
        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`project-media project-media-${project.imageMode}`}
          data-project-media
          aria-label={`${labels.inspectProject}: ${project.title}`}
        >
          <span className="registration-mark registration-mark-top" aria-hidden="true" />
          <span className="registration-mark registration-mark-bottom" aria-hidden="true" />
          <img
            src={project.image}
            alt={project.imageAlt}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
          <span className="project-scan-beam" data-project-scan-beam aria-hidden="true" />
          <span className="project-scan-reticle" data-project-scan-reticle aria-hidden="true">
            <i />
            <i />
          </span>
          <span className="project-media-identity" data-project-identity aria-hidden="true">
            <small>{project.category}</small>
            <strong>{project.title}</strong>
          </span>
          <span className="project-media-action" aria-hidden="true">
            {labels.inspectProject} <ArrowUpRight size={17} />
          </span>
        </a>

        <div className="project-content">
          <div className="project-heading-row">
            <p className="project-category">
              {project.isNew ? <span>{labels.newProject}</span> : null}
              {project.role}
            </p>
            <h3>{project.title}</h3>
          </div>

          <p className="project-summary">{project.summary}</p>

          <div className="project-evidence" data-project-evidence>
            <p>{labels.evidence}</p>
            <ol className="project-highlights">
              {project.highlights.map((highlight, highlightIndex) => (
                <li key={highlight}>
                  <span aria-hidden="true">0{highlightIndex + 1}</span>
                  {highlight}
                </li>
              ))}
            </ol>
          </div>

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
      </div>
    </article>
  );
}
