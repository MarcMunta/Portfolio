import type { Metadata } from "next";

import { AboutPageContent } from "@/components/about/about-page-content";
import { getDictionary } from "@/lib/data";

const defaultBundle = getDictionary();

export const metadata: Metadata = {
  title: `${defaultBundle.about.title} · ${defaultBundle.persona.name}`,
  description: defaultBundle.about.description,
};

export default function AboutPage() {
  return <AboutPageContent />;
}
