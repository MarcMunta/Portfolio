/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ArrowUpRight, FileText, Github } from 'lucide-react';

import { MagneticElement } from '../../ui/MagneticElement';

export function ProjectCard({ project, isActive, labels, onOpenPdf }) {
  const repoLinks = getRepoLinks(project);

  return (
    <div data-gsap-project-card data-project-slide className={`projects-horizontal-slide ${isActive ? 'is-active' : ''}`}>
      <MagneticElement
        strength={0.015}
        spring="cubic-bezier(0.16, 1, 0.3, 1)"
        className={`project-card-shell w-full h-full bg-[var(--bg-secondary)] border rounded-[2.5rem] overflow-hidden transition-all duration-500 ${
          isActive ? 'border-white/25 shadow-[0_25px_70px_rgba(0,0,0,0.42)]' : 'border-white/10 shadow-[var(--shadow-card)]'
        }`}
      >
        <div className="flex flex-col lg:flex-row h-full pointer-events-none w-full">
          <ProjectInfo project={project} labels={labels} repoLinks={repoLinks} onOpenPdf={onOpenPdf} />
          <ProjectImage project={project} isActive={isActive} />
        </div>
      </MagneticElement>
    </div>
  );
}

function ProjectInfo({ project, labels, repoLinks, onOpenPdf }) {
  return (
    <div className="project-info-panel w-full lg:w-5/12 p-7 md:p-9 flex flex-col justify-center border-r border-white/5 relative bg-gradient-to-br from-[var(--bg-elevated)] to-[var(--bg-primary)] min-h-0">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.03),transparent_50%)]" />

      <ProjectMeta project={project} />
      <ProjectTitle project={project} />
      <p className="text-gray-300/90 text-sm md:text-[0.95rem] leading-relaxed mb-4 relative z-10">{project.summary}</p>

      <TagList tags={project.tags} />
      <StackIconGrid items={project.stackIcons} />
      <FullStackList items={project.fullStack} />

      <ProjectActions project={project} labels={labels} repoLinks={repoLinks} onOpenPdf={onOpenPdf} />
    </div>
  );
}

function ProjectMeta({ project }) {
  return (
    <>
      <div className="flex items-center gap-4 mb-5 text-xs md:text-sm font-bold tracking-widest uppercase text-gray-500 relative z-10">
        <span>{project.year}</span>
        <div className="w-12 h-[1px] bg-gray-700" />
        <span className="text-blue-400">{project.category}</span>
      </div>

      <p className="text-xs md:text-sm text-blue-200/80 tracking-wide mb-3 relative z-10 uppercase">
        {project.duration}
      </p>
    </>
  );
}

function ProjectTitle({ project }) {
  const sizeClass = project.compactTitle
    ? 'text-xl sm:text-2xl lg:text-4xl xl:text-5xl'
    : 'text-2xl sm:text-3xl lg:text-5xl xl:text-6xl';

  return (
    <h3 className={`font-display font-bold mb-6 text-white relative z-10 tracking-tight leading-[1] break-normal ${sizeClass}`}>
      {project.title}
    </h3>
  );
}

function TagList({ tags }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4 relative z-10 max-h-28 overflow-y-hidden hover:overflow-y-auto overscroll-y-contain pr-1 pointer-events-auto">
      {tags.map((tag) => (
        <span key={tag} className="px-5 py-2.5 text-xs font-bold rounded-full bg-white/5 border border-white/10 text-gray-300 tracking-wide">
          {tag}
        </span>
      ))}
    </div>
  );
}

function StackIconGrid({ items }) {
  if (!items) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 relative z-10 max-h-28 overflow-y-hidden hover:overflow-y-auto overscroll-y-contain pr-1 pointer-events-auto">
      {items.map((stackItem) => (
        <div key={stackItem.label} className="inline-flex items-center gap-2 text-xs text-gray-300 bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2">
          <span className="text-blue-300">{stackItem.icon}</span>
          <span className="leading-tight">{stackItem.label}</span>
        </div>
      ))}
    </div>
  );
}

function FullStackList({ items }) {
  if (!items) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-5 relative z-10 max-h-28 overflow-y-hidden hover:overflow-y-auto overscroll-y-contain pr-1 pointer-events-auto">
      {items.map((tech) => (
        <span
          key={tech.name}
          className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1.5 bg-white/[0.04] border border-white/10 text-gray-200 tracking-wide hover:bg-white/[0.08] transition-colors"
        >
          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: tech.color }} />
          {tech.name}
        </span>
      ))}
    </div>
  );
}

function ProjectActions({ project, labels, repoLinks, onOpenPdf }) {
  return (
    <div className="mt-auto relative z-10 pointer-events-auto w-fit flex items-center gap-3">
      <MagneticElement inline strength={0.2}>
        {project.pdfPath ? (
          <button
            type="button"
            onClick={() => onOpenPdf(project.id)}
            aria-label={`${labels.openPdfPreviewOf} ${project.title}`}
            className="cursor-morph cta-btn flex items-center justify-center w-14 h-14 rounded-full bg-[var(--cta-bg)] text-[var(--cta-text)] hover:scale-110 hover:bg-[var(--cta-hover-bg)] transition-all shadow-[var(--cta-shadow)]"
          >
            <FileText size={22} />
          </button>
        ) : (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${labels.openProjectOf} ${project.title}`}
            className="cursor-morph cta-btn flex items-center justify-center w-14 h-14 rounded-full bg-[var(--cta-bg)] text-[var(--cta-text)] hover:scale-110 hover:bg-[var(--cta-hover-bg)] transition-all shadow-[var(--cta-shadow)]"
          >
            {project.ctaIcon === 'github' ? <Github size={22} /> : <ArrowUpRight size={24} />}
          </a>
        )}
      </MagneticElement>

      {repoLinks.map((repoItem, repoIndex) => (
        <MagneticElement inline strength={0.2} key={`${project.id}-repo-${repoItem.url}-${repoIndex}`}>
          <a
            href={repoItem.url}
            target="_blank"
            rel="noopener noreferrer"
            title={repoItem.label || 'GitHub'}
            aria-label={`${labels.openRepoOf} ${project.title}${repoItem.label ? ` (${repoItem.label})` : ''}`}
            className="cursor-morph flex items-center justify-center w-14 h-14 rounded-full border border-white/20 text-white hover:scale-110 hover:bg-white/10 transition-all"
          >
            <Github size={22} />
          </a>
        </MagneticElement>
      ))}
    </div>
  );
}

function ProjectImage({ project, isActive }) {
  return (
    <div className="w-full lg:w-7/12 relative overflow-hidden group">
      <div className={`absolute inset-0 transition-colors duration-700 z-10 pointer-events-auto ${isActive ? 'bg-black/10 group-hover:bg-transparent' : 'bg-black/35'}`} />
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        decoding="async"
        style={{ transitionDuration: '1000ms' }}
        className={`absolute inset-0 w-full h-full object-cover transition-all ease-out pointer-events-none ${isActive ? 'grayscale-[8%] scale-105' : 'grayscale-[38%] scale-100'}`}
      />
    </div>
  );
}

function getRepoLinks(project) {
  if (Array.isArray(project.repoLinks)) return project.repoLinks;
  if (project.repoUrl) return [{ label: 'GitHub', url: project.repoUrl }];
  return [];
}
