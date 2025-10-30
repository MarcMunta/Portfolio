"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ProjectCard } from "@/components/cards/project-card";
import type { ProjectCategory } from "@/lib/data";
import { useTranslations } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

const filters: (ProjectCategory | "todos")[] = ["todos", "web", "multiplataforma"];

export function ProjectsGrid() {
  const { projects: localizedProjects, projectsPage, projectsSection } = useTranslations();
  const [activeFilter, setActiveFilter] = React.useState<(typeof filters)[number]>("todos");

  const handleFilterChange = React.useCallback(
    (filter: (typeof filters)[number]) => {
      if (filter === activeFilter) {
        return;
      }
      setActiveFilter(filter);
    },
    [activeFilter],
  );

  const filtered = React.useMemo(() => {
    if (activeFilter === "todos") return localizedProjects;
    return localizedProjects.filter((project) => project.category === activeFilter);
  }, [localizedProjects, activeFilter]);

  const filterLabels: Record<(typeof filters)[number], string> = {
    todos: projectsPage.filters.all,
    web: projectsPage.filters.web,
    multiplataforma: projectsPage.filters.multiplatform,
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => handleFilterChange(filter)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              activeFilter === filter
                ? "border-primary bg-primary/10 text-primary"
                : "border-border/80 text-muted-foreground hover:text-foreground",
            )}
          >
            {filterLabels[filter]}
          </button>
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="grid gap-8 md:grid-cols-2"
        >
          {filtered.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              labels={{
                detail: projectsSection.detailLabel,
                live: projectsSection.liveLabel,
                imageAltPrefix: projectsSection.imageAltPrefix,
              }}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
