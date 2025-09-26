"use client";

import { Suspense } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { useTranslations } from "@/lib/i18n/context";

import { ProjectsGrid } from "./projects-grid";

function ProjectsContent() {
  const { projectsPage } = useTranslations();

  return (
    <div className="space-y-10">
      <FadeIn>
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.4em] text-primary/80">{projectsPage.eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{projectsPage.title}</h1>
          <p className="max-w-2xl text-muted-foreground">{projectsPage.description}</p>
        </div>
      </FadeIn>
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/30 rounded-lg" />}>
        <ProjectsGrid />
      </Suspense>
    </div>
  );
}

export function ProjectsPageContent() {
  return <ProjectsContent />;
}
