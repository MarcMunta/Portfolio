import { useMemo, useRef, useState } from 'react';

import {
  CV_PREVIEW_PAGES,
  CONTENT_BY_LANGUAGE,
  LANGUAGE_OPTIONS,
} from '../data/portfolioContent';
import { DEFAULT_LANGUAGE } from '../lib/portfolio/constants';
import { useImagePreload } from './portfolio/useImagePreload';
import { useLanguagePreference } from './portfolio/useLanguagePreference';
import { useNavigationState } from './portfolio/useNavigationState';
import { usePdfPreview } from './portfolio/usePdfPreview';
import { usePortfolioAnimations } from './portfolio/usePortfolioAnimations';
import { useThemePreference } from './portfolio/useThemePreference';

export function usePortfolioController() {
  const appRef = useRef(null);
  const mainRef = useRef(null);
  const scrollProgressRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const projectsPinRef = useRef(null);
  const projectsTrackRef = useRef(null);

  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const navigation = useNavigationState();
  const { language, setLanguage, contentRef } = useLanguagePreference();
  const { theme, toggleTheme } = useThemePreference();

  const locale = CONTENT_BY_LANGUAGE[language] || CONTENT_BY_LANGUAGE[DEFAULT_LANGUAGE];
  const navItems = locale.navItems;
  const projects = locale.projects;
  const cvGeneralPreviewPages = CV_PREVIEW_PAGES.general;
  const cvLocalizedPreviewPages = CV_PREVIEW_PAGES[language] || CV_PREVIEW_PAGES[DEFAULT_LANGUAGE];
  const pdfPreview = usePdfPreview(projects);

  const previewUrls = useMemo(
    () => [...cvGeneralPreviewPages, ...cvLocalizedPreviewPages],
    [cvGeneralPreviewPages, cvLocalizedPreviewPages]
  );

  useImagePreload(previewUrls);
  usePortfolioAnimations({
    appRef,
    mainRef,
    scrollProgressRef,
    projectsSectionRef,
    projectsPinRef,
    projectsTrackRef,
    language,
    projectsCount: projects.length,
    setActiveProcessStep,
    setActiveProjectIndex,
  });

  return {
    state: {
      showNav: navigation.showNav,
      activeSection: navigation.activeSection,
      clickedNav: navigation.clickedNav,
      activeProcessStep,
      activeProjectIndex,
      language,
      theme,
      activePdfProjectId: pdfPreview.activePdfProjectId,
    },
    refs: {
      appRef,
      contentRef,
      mainRef,
      scrollProgressRef,
      modalCardRef: pdfPreview.modalCardRef,
      projectsSectionRef,
      projectsPinRef,
      projectsTrackRef,
    },
    data: {
      locale,
      navItems,
      projects,
      cvGeneralPreviewPages,
      cvLocalizedPreviewPages,
      languageOptions: LANGUAGE_OPTIONS,
    },
    modal: {
      activePdfProject: pdfPreview.activePdfProject,
      activePdfPath: pdfPreview.activePdfPath,
      activePdfPreviewPath: pdfPreview.activePdfPreviewPath,
    },
    actions: {
      toggleTheme,
      setLanguage,
      setActiveProcessStep,
      setActivePdfProjectId: pdfPreview.setActivePdfProjectId,
      closePdfModal: pdfPreview.closePdfModal,
      scrollToSection: navigation.scrollToSection,
      handleNavClick: navigation.handleNavClick,
    },
  };
}
