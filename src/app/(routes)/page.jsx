'use client';

/*
 * DIRECTION CONTRACT — PRODUCT PROOF LAB
 * Thesis: Marc turns product questions into working, inspectable software.
 * First read: identity, availability, portrait, thesis, then selected work.
 * Visual world: an editorial specimen archive—mineral paper mounted on graphite,
 * measured rules, registration marks, condensed display type, and restrained
 * lime/cobalt/orange signals. Real project imagery is always the evidence.
 * Rhythm: one composed hero board followed by three deliberately different
 * project specimens; supporting sections become concise records, not card grids.
 * Motion: a single staged hero reveal, project shutters opening on scroll, and
 * the existing atmospheric/bubble-cursor signature with reduced-motion fallbacks.
 */

import React from 'react';

import { PortfolioMainSections } from '../../components/portfolio/PortfolioMainSections';
import { PortfolioNavbar } from '../../components/portfolio/PortfolioNavbar';
import { BackgroundEffects } from '../../components/ui/BackgroundEffects';
import { CustomCursor } from '../../components/ui/CustomCursor';
import { usePortfolioController } from '../../hooks/usePortfolioController';

export default function PortfolioPage() {
  const { state, refs, data, actions } = usePortfolioController();

  return (
    <div ref={refs.appRef} className="portfolio-app">
      <BackgroundEffects />
      <CustomCursor />

      <div className="scroll-progress" aria-hidden="true">
        <div ref={refs.scrollProgressRef} className="scroll-progress-fill" />
        <span className="scroll-progress-marker" data-scroll-progress-marker />
        <span className="scroll-progress-readout" data-scroll-progress-readout>00%</span>
      </div>

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

      <div ref={refs.contentRef} className="portfolio-content">
        <PortfolioMainSections
          mainRef={refs.mainRef}
          locale={data.locale}
          projects={data.projects}
          scrollToSection={actions.scrollToSection}
        />
      </div>
    </div>
  );
}
