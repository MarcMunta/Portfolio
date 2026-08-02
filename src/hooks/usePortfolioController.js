import { useRef } from 'react';

import { CONTENT_BY_LANGUAGE, LANGUAGE_OPTIONS } from '../data/portfolioContent';
import { DEFAULT_LANGUAGE } from '../lib/portfolio/constants';
import { useLanguagePreference } from './portfolio/useLanguagePreference';
import { useNavigationState } from './portfolio/useNavigationState';
import { usePortfolioAnimations } from './portfolio/usePortfolioAnimations';
import { useThemePreference } from './portfolio/useThemePreference';

export function usePortfolioController() {
  const appRef = useRef(null);
  const mainRef = useRef(null);
  const scrollProgressRef = useRef(null);

  const navigation = useNavigationState();
  const { language, setLanguage, contentRef } = useLanguagePreference();
  const { theme, toggleTheme } = useThemePreference();

  const locale = CONTENT_BY_LANGUAGE[language] || CONTENT_BY_LANGUAGE[DEFAULT_LANGUAGE];

  usePortfolioAnimations({
    appRef,
    mainRef,
    scrollProgressRef,
    language,
  });

  return {
    state: {
      showNav: navigation.showNav,
      activeSection: navigation.activeSection,
      clickedNav: navigation.clickedNav,
      language,
      theme,
    },
    refs: {
      appRef,
      contentRef,
      mainRef,
      scrollProgressRef,
    },
    data: {
      locale,
      navItems: locale.navItems,
      projects: locale.projects,
      languageOptions: LANGUAGE_OPTIONS,
    },
    actions: {
      toggleTheme,
      setLanguage,
      scrollToSection: navigation.scrollToSection,
      handleNavClick: navigation.handleNavClick,
    },
  };
}
