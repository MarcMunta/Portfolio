import React from 'react';

import { ProjectCard } from '../projects/ProjectCard';

export function ProjectsSection({
  locale,
  projects,
  activeProjectIndex,
  setActivePdfProjectId,
  projectsSectionRef,
  projectsPinRef,
  projectsTrackRef,
}) {
  return (
    <section
      ref={projectsSectionRef}
      id="projects"
      data-gsap-section
      data-gsap-projects
      className="w-full relative z-10 border-t border-white/5 overflow-hidden"
    >
      <div ref={projectsPinRef} className="projects-horizontal-pin">
        <ProjectsHeader locale={locale} activeProjectIndex={activeProjectIndex} projectCount={projects.length} />

        <div className="projects-horizontal-viewport pb-1">
          <div ref={projectsTrackRef} className="projects-horizontal-track">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                isActive={index === activeProjectIndex}
                labels={locale.labels}
                onOpenPdf={setActivePdfProjectId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsHeader({ locale, activeProjectIndex, projectCount }) {
  return (
    <div className="max-w-7xl w-full mx-auto px-6 pt-16 pb-3">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
          {locale.projectsSection.titleTop}
          <br />
          {locale.projectsSection.titleBottom}
        </h2>
        <p className="text-gray-400 max-w-sm text-base md:text-right font-light">{locale.projectsSection.desc}</p>
      </div>

      <div className="mt-5 flex justify-center md:justify-end">
        <div data-project-counter className="px-4 py-2 rounded-full border border-white/15 bg-white/[0.03] text-xs tracking-[0.24em] font-semibold text-blue-200/80">
          {String(activeProjectIndex + 1).padStart(2, '0')} / {String(projectCount).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}
