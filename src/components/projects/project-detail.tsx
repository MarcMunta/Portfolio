"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { AnimatedCard } from "@/components/bits/animated-card";
import { FadeIn } from "@/components/motion/fade-in";
import { StickySection } from "@/components/motion/sticky-section";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/data";
import { useTranslations } from "@/lib/i18n/context";

import { ProjectGallery } from "./project-gallery";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { projects, projectDetail } = useTranslations();
  const localizedProject = projects.find((item) => item.slug === project.slug) ?? project;

  const galleryItems = localizedProject.gallery.length
    ? localizedProject.gallery
    : [{ src: localizedProject.cover, alt: localizedProject.name }];

  return (
    <div className="space-y-10">
      <FadeIn>
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.4em] text-primary/80">{localizedProject.categoryLabel}</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{localizedProject.name}</h1>
          <p className="max-w-3xl text-muted-foreground">{localizedProject.summary}</p>
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
            {localizedProject.stack.map((tech) => (
              <span key={tech} className="rounded-full border border-border/70 px-3 py-1 uppercase tracking-[0.3em]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>

      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <StickySection top="6rem" stickyClassName="flex flex-col gap-6">
          <AnimatedCard className="overflow-hidden p-0">
            <ProjectGallery
              items={galleryItems}
              labels={{
                previous: projectDetail.gallery.previous,
                next: projectDetail.gallery.next,
                goTo: projectDetail.gallery.goTo,
              }}
            />
          </AnimatedCard>
        </StickySection>
        <div className="space-y-6">
          {localizedProject.description.map((paragraph, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <p className="text-muted-foreground">{paragraph}</p>
            </FadeIn>
          ))}
          <div className="mt-6 flex flex-wrap gap-3">
            {localizedProject.links.live ? (
              <Button asChild>
                <Link href={localizedProject.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  {projectDetail.live}
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            ) : null}
            {localizedProject.links.repo ? (
              <Button asChild variant="outline">
                <Link href={localizedProject.links.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  {projectDetail.code}
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            ) : null}
            {localizedProject.links.case ? (
              <Button asChild variant="ghost">
                <Link href={localizedProject.links.case} className="inline-flex items-center gap-2">
                  {projectDetail.case}
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
