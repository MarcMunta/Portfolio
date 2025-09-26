import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { AnimatedCard } from "@/components/bits/animated-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProjectCardLabels {
  detail: string;
  live: string;
  imageAltPrefix: string;
}

interface ProjectCardProps {
  project: Project;
  labels: ProjectCardLabels;
  className?: string;
}

export function ProjectCard({ project, className, labels }: ProjectCardProps) {
  return (
    <AnimatedCard className={cn("group h-full overflow-hidden", className)}>
      <div className="flex h-full flex-col gap-6">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
          <Image
            src={project.cover}
            alt={`${labels.imageAltPrefix} ${project.name}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority={false}
          />
          <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="muted">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary/70">{project.role}</p>
            <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{project.tagline}</p>
          </div>
          <ul className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="rounded-full border border-border/60 px-3 py-1">
                {highlight}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex items-center gap-3">
            <Button asChild variant="outline" size="sm">
              <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2">
                {labels.detail}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            {project.links.live ? (
              <Button asChild size="sm" variant="ghost">
                <Link href={project.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  {labels.live}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
}
