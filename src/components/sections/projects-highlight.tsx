"use client";

import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { ProjectCard } from "@/components/cards/project-card";
import { useTranslations } from "@/lib/i18n/context";

export function ProjectsHighlightSection() {
  const { projectsSection, featuredProjects } = useTranslations();

  return (
    <section id="projects" className="space-y-10">
      <FadeIn>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-primary/80">{projectsSection.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{projectsSection.title}</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">{projectsSection.description}</p>
          </div>
          <Link href="/projects" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
            {projectsSection.viewAll}
          </Link>
        </div>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.1}>
            <ProjectCard
              project={project}
              labels={{
                detail: projectsSection.detailLabel,
                live: projectsSection.liveLabel,
                imageAltPrefix: projectsSection.imageAltPrefix,
              }}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
