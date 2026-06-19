import React from 'react';
import { ArrowUpRight, CheckCircle2, Clock3, Github } from 'lucide-react';

import { MagneticElement } from '../../ui/MagneticElement';
import { Reveal } from '../../ui/Reveal';

export function JavaProjectsSection({ locale }) {
  return (
    <section id="java-projects" data-gsap-section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
      <Reveal>
        <div className="mb-14">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter mb-5">
            {locale.javaProjectsSection.titleStart}{' '}
            <span className="text-gradient-blue">{locale.javaProjectsSection.titleAccent}</span>
          </h2>
          <p className="text-gray-400 max-w-3xl text-lg font-light leading-relaxed">
            {locale.javaProjectsSection.desc}
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {locale.javaProjectsSection.projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 90}>
            <JavaProjectCard project={project} labels={locale.labels} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function JavaProjectCard({ project, labels }) {
  const isTodo = project.status === 'todo';
  const StatusIcon = isTodo ? Clock3 : CheckCircle2;

  return (
    <MagneticElement strength={0.018} className="h-full">
      <article className={`bento-card p-7 md:p-8 min-h-[360px] flex flex-col ${isTodo ? 'border-white/10' : 'border-blue-400/25'}`}>
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-blue-200/80 font-bold mb-3">{project.category}</p>
            <h3 className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight">{project.name}</h3>
          </div>
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold ${
              isTodo
                ? 'border-white/10 bg-white/[0.03] text-gray-300'
                : 'border-blue-400/25 bg-blue-500/10 text-blue-100'
            }`}
          >
            <StatusIcon size={15} />
            {isTodo ? labels.todoProject : labels.verifiedProject}
          </span>
        </div>

        <p className="text-gray-300/90 leading-relaxed mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-7">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-gray-200">
              {tech}
            </span>
          ))}
        </div>

        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-morph mt-auto inline-flex w-fit items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors"
          >
            <Github size={17} />
            {labels.repo}
            <ArrowUpRight size={16} />
          </a>
        ) : null}
      </article>
    </MagneticElement>
  );
}
