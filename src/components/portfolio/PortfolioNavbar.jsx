import React from 'react';
import { Moon, Sun } from 'lucide-react';

import { FlagIcon } from '../ui/FlagIcon';

export function PortfolioNavbar({
  showNav,
  clickedNav,
  activeSection,
  navItems,
  locale,
  languageOptions,
  language,
  setLanguage,
  theme,
  toggleTheme,
  onNavClick,
}) {
  return (
    <header className={`site-header ${showNav ? 'is-visible' : 'is-hidden'}`}>
      <nav className="site-nav" aria-label="Portfolio" data-gsap-nav>
        <a
          href="#hero"
          onClick={(event) => onNavClick('hero', event)}
          className={`brand-link ${clickedNav === 'hero' ? 'nav-clicked' : ''}`}
          aria-label="Marc Muntané Clarà"
        >
          <span className="brand-monogram">MM</span>
          <span className="brand-copy">
            <strong>Product proof</strong>
            <small>Portfolio / 2026</small>
          </span>
        </a>

        <div className="nav-links">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => onNavClick(item.id, event)}
              aria-label={`${locale.labels.goTo} ${item.label}`}
              aria-current={activeSection === item.id ? 'location' : undefined}
              className={`${activeSection === item.id ? 'is-active' : ''} ${
                clickedNav === item.id ? 'nav-clicked' : ''
              }`}
            >
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <strong>{item.label}</strong>
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <LanguageThemeControls
            languageOptions={languageOptions}
            language={language}
            setLanguage={setLanguage}
            labels={locale.labels}
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <a
            href="#contact"
            onClick={(event) => onNavClick('contact', event)}
            className="nav-contact"
          >
            {locale.labels.talkButton}
          </a>
        </div>
      </nav>
    </header>
  );
}

function LanguageThemeControls({
  languageOptions,
  language,
  setLanguage,
  labels,
  theme,
  toggleTheme,
}) {
  return (
    <div className="control-group">
      <div className="language-controls">
        {languageOptions.map((option) => (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            aria-label={`${labels.switchLanguageTo} ${option.label}`}
            aria-pressed={language === option.code}
            className={language === option.code ? 'is-selected' : ''}
            data-cursor-preserve-color
          >
            <FlagIcon code={option.code} />
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? labels.switchToLight : labels.switchToDark}
        className="theme-toggle"
      >
        {theme === 'dark' ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
      </button>
    </div>
  );
}
