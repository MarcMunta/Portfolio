'use client';

import React from 'react';

import { PdfPreviewModal } from '../../components/portfolio/PdfPreviewModal';
import { PortfolioMainSections } from '../../components/portfolio/PortfolioMainSections';
import { PortfolioNavbar } from '../../components/portfolio/PortfolioNavbar';
import { BackgroundEffects } from '../../components/ui/BackgroundEffects';
import { CustomCursor } from '../../components/ui/CustomCursor';
import { usePortfolioController } from '../../hooks/usePortfolioController';

export default function PortfolioPage() {
  const { state, refs, data, modal, actions } = usePortfolioController();

  return (
    <div
      ref={refs.appRef}
      className="bg-[var(--bg-primary)] min-h-screen text-white relative"
    >
      <div className="fixed top-0 left-0 right-0 z-[130] h-[3px] pointer-events-none" aria-hidden="true">
        <div
          ref={refs.scrollProgressRef}
          className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 shadow-[0_0_20px_rgba(56,189,248,0.55)]"
        />
      </div>

      <CustomCursor />
      <BackgroundEffects />

      <PortfolioNavbar
        showNav={state.showNav}
        clickedNav={state.clickedNav}
        activeSection={state.activeSection}
        navItems={data.navItems}
        locale={data.locale}
        languageOptions={data.languageOptions}
        language={state.language}
        setLanguage={actions.setLanguage}
        theme={state.theme}
        toggleTheme={actions.toggleTheme}
        onNavClick={actions.handleNavClick}
      />

      <div ref={refs.contentRef}>
        <PortfolioMainSections
          mainRef={refs.mainRef}
          locale={data.locale}
          theme={state.theme}
          activeProcessStep={state.activeProcessStep}
          setActiveProcessStep={actions.setActiveProcessStep}
          activeProjectIndex={state.activeProjectIndex}
          projects={data.projects}
          setActivePdfProjectId={actions.setActivePdfProjectId}
          scrollToSection={actions.scrollToSection}
          projectsSectionRef={refs.projectsSectionRef}
          projectsPinRef={refs.projectsPinRef}
          projectsTrackRef={refs.projectsTrackRef}
          cvGeneralPreviewPages={data.cvGeneralPreviewPages}
          cvLocalizedPreviewPages={data.cvLocalizedPreviewPages}
        />
      </div>

      <PdfPreviewModal
        activePdfProject={modal.activePdfProject}
        activePdfPath={modal.activePdfPath}
        activePdfPreviewPath={modal.activePdfPreviewPath}
        closePdfModal={actions.closePdfModal}
        modalCardRef={refs.modalCardRef}
        labels={data.locale.labels}
      />
    </div>
  );
}
