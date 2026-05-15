import React from 'react';

import { ContactSection } from './sections/ContactSection';
import { CvSection } from './sections/CvSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ExpertiseSection } from './sections/ExpertiseSection';
import { HeroSection } from './sections/HeroSection';
import { ProcessSection } from './sections/ProcessSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsMarquee } from './sections/SkillsMarquee';

export function PortfolioMainSections({
  mainRef,
  locale,
  theme,
  activeProcessStep,
  setActiveProcessStep,
  activeProjectIndex,
  projects,
  setActivePdfProjectId,
  scrollToSection,
  projectsSectionRef,
  projectsPinRef,
  projectsTrackRef,
  cvGeneralPreviewPages,
  cvLocalizedPreviewPages,
}) {
  return (
    <main ref={mainRef} className="relative z-10">
      <HeroSection locale={locale} scrollToSection={scrollToSection} />
      <SkillsMarquee theme={theme} />
      <ExpertiseSection locale={locale} />
      <ProcessSection
        locale={locale}
        activeProcessStep={activeProcessStep}
        setActiveProcessStep={setActiveProcessStep}
      />
      <ExperienceSection locale={locale} />
      <ProjectsSection
        locale={locale}
        projects={projects}
        activeProjectIndex={activeProjectIndex}
        setActivePdfProjectId={setActivePdfProjectId}
        projectsSectionRef={projectsSectionRef}
        projectsPinRef={projectsPinRef}
        projectsTrackRef={projectsTrackRef}
      />
      <CvSection
        locale={locale}
        cvGeneralPreviewPages={cvGeneralPreviewPages}
        cvLocalizedPreviewPages={cvLocalizedPreviewPages}
      />
      <ContactSection locale={locale} />
    </main>
  );
}
