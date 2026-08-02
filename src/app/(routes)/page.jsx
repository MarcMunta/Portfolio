'use client';

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
        <div ref={refs.scrollProgressRef} />
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
