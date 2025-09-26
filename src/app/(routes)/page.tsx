import { AboutSection } from "@/components/sections/about";
import { ContactCTASection } from "@/components/sections/contact-cta";
import { HeroSection } from "@/components/sections/hero";
import { MultiplatformSection } from "@/components/sections/multiplatform";
import { ProjectsHighlightSection } from "@/components/sections/projects-highlight";
import { SkillsSection } from "@/components/sections/skills";

export default function HomePage() {
  return (
    <div className="space-y-24">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <MultiplatformSection />
      <ProjectsHighlightSection />
      <ContactCTASection />
    </div>
  );
}
