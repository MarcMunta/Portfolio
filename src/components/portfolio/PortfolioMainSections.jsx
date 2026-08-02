import React from 'react';

import { ContactSection } from './sections/ContactSection';
import { CvSection } from './sections/CvSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ExpertiseSection } from './sections/ExpertiseSection';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';

export function PortfolioMainSections({
  mainRef,
  locale,
  projects,
  scrollToSection,
}) {
  return (
    <main ref={mainRef}>
      <HeroSection locale={locale} scrollToSection={scrollToSection} />
      <ProjectsSection locale={locale} projects={projects} />
      <ExpertiseSection locale={locale} />
      <ExperienceSection locale={locale} />
      <CvSection locale={locale} />
      <ContactSection locale={locale} />
    </main>
  );
}
