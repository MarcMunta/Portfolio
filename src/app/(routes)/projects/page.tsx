import type { Metadata } from "next";

import { ProjectsPageContent } from "@/components/projects/projects-page-content";
import { getDictionary } from "@/lib/data";

const defaultBundle = getDictionary();

export const metadata: Metadata = {
  title: `${defaultBundle.projectsPage.title} · ${defaultBundle.persona.name}`,
  description: defaultBundle.projectsPage.description,
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
