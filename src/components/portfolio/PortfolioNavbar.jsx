import React from 'react';
import { Moon, Sun } from 'lucide-react';

import { FlagIcon } from '../ui/FlagIcon';
import { MagneticElement } from '../ui/MagneticElement';

export function PortfolioNavbar(props) {
  return (
    <>
      <DesktopNavbar {...props} />
      <MobileNavbar {...props} />
    </>
  );
}

function DesktopNavbar({
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
    <>
      <div
        data-gsap-nav
        className={`hidden md:flex fixed top-6 left-0 w-full justify-center z-50 pointer-events-none transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
          showNav ? 'translate-y-0 opacity-100' : '-translate-y-32 opacity-0'
        }`}
      >
        <nav className="portfolio-nav pointer-events-auto flex items-center justify-between gap-6 md:gap-14 px-8 py-3.5 rounded-full bg-[var(--bg-nav)] backdrop-blur-xl border border-[var(--border-primary)] shadow-[var(--shadow-nav)] hover:border-[var(--border-primary)] transition-all duration-500">
          <BrandLink clicked={clickedNav === 'hero'} onClick={(event) => onNavClick('hero', event)} />

          <div className="flex gap-8 md:gap-10 text-sm md:text-base font-semibold text-gray-100">
            {navItems.map((item) => (
              <DesktopNavItem
                key={item.id}
                item={item}
                labels={locale.labels}
                clicked={clickedNav === item.id}
                active={activeSection === item.id}
                onNavClick={onNavClick}
              />
            ))}
          </div>

          <MagneticElement inline strength={0.1}>
            <a
              href="#contact"
              aria-label={locale.labels.goToContact}
              onClick={(event) => onNavClick('contact', event)}
              className={`cursor-morph cta-btn block bg-[var(--cta-bg)] text-[var(--cta-text)] px-6 py-2.5 rounded-full text-sm font-bold shadow-[var(--cta-shadow)] hover:bg-[var(--cta-hover-bg)] transition-all ${
                clickedNav === 'contact' ? 'nav-clicked' : ''
              }`}
            >
              {locale.labels.talkButton}
            </a>
          </MagneticElement>
        </nav>
      </div>

      <div
        data-gsap-nav
        className={`hidden md:block fixed top-6 right-6 z-50 pointer-events-auto transition-all duration-700 ${
          showNav ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
        }`}
      >
        <LanguageThemeControls
          languageOptions={languageOptions}
          language={language}
          setLanguage={setLanguage}
          labels={locale.labels}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>
    </>
  );
}

function MobileNavbar({
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
    <div
      data-gsap-nav
      className={`md:hidden fixed top-4 left-4 right-4 z-50 pointer-events-auto transition-all duration-700 ${
        showNav ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0'
      }`}
    >
      <nav className="portfolio-nav rounded-[1.6rem] border border-[var(--border-primary)] bg-[var(--bg-nav)] backdrop-blur-xl shadow-[var(--shadow-nav)] p-2.5">
        <div className="flex items-center justify-between gap-3">
          <BrandLink clicked={clickedNav === 'hero'} onClick={(event) => onNavClick('hero', event)} />
          <LanguageThemeControls
            compact
            languageOptions={languageOptions}
            language={language}
            setLanguage={setLanguage}
            labels={locale.labels}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </div>

        <div className="mt-2 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-label={`${locale.labels.goTo} ${item.label}`}
              onClick={(event) => onNavClick(item.id, event)}
              className={`cursor-morph shrink-0 rounded-full px-3.5 py-2 text-xs font-semibold transition-colors ${
                activeSection === item.id
                  ? 'bg-[var(--cta-bg)] text-[var(--cta-text)]'
                  : 'bg-white/[0.04] text-gray-200 hover:bg-white/10'
              } ${clickedNav === item.id ? 'nav-clicked' : ''}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            aria-label={locale.labels.goToContact}
            onClick={(event) => onNavClick('contact', event)}
            className={`cursor-morph shrink-0 rounded-full px-3.5 py-2 text-xs font-semibold bg-[var(--cta-bg)] text-[var(--cta-text)] ${
              clickedNav === 'contact' ? 'nav-clicked' : ''
            }`}
          >
            {locale.labels.talkButton}
          </a>
        </div>
      </nav>
    </div>
  );
}

function BrandLink({ clicked, onClick }) {
  return (
    <MagneticElement inline strength={0.15}>
      <a
        href="#hero"
        onClick={onClick}
        className={`font-display font-bold text-2xl tracking-tighter block cursor-morph px-2 ${clicked ? 'nav-clicked' : ''}`}
      >
        M<span className="text-blue-500">.</span>
      </a>
    </MagneticElement>
  );
}

function DesktopNavItem({ item, labels, clicked, active, onNavClick }) {
  return (
    <MagneticElement inline strength={0.1}>
      <a
        href={`#${item.id}`}
        aria-label={`${labels.goTo} ${item.label}`}
        onClick={(event) => onNavClick(item.id, event)}
        className={`portfolio-nav-link relative block px-3 py-1 cursor-morph tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.12)] transition-colors duration-300 ${
          clicked ? 'nav-clicked' : ''
        } ${active ? 'is-active text-white' : 'text-gray-100 hover:text-white'}`}
      >
        {item.label}
        <span
          className={`absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full -translate-x-1/2 transition-all duration-300 ${
            active ? 'opacity-100 scale-100 shadow-[0_0_10px_rgba(59,130,246,0.8)]' : 'opacity-0 scale-0'
          }`}
        />
      </a>
    </MagneticElement>
  );
}

function LanguageThemeControls({
  compact = false,
  languageOptions,
  language,
  setLanguage,
  labels,
  theme,
  toggleTheme,
}) {
  const buttonSize = compact ? 'w-8 h-8' : 'w-9 h-9';

  return (
    <div className={`portfolio-control-group flex items-center gap-1.5 rounded-full border border-[var(--border-primary)] bg-[var(--bg-nav)] backdrop-blur-xl px-1.5 py-1 shadow-[var(--shadow-nav)]`}>
      {languageOptions.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => setLanguage(option.code)}
          aria-label={`${labels.switchLanguageTo} ${option.label}`}
          className={`portfolio-control-button cursor-morph ${buttonSize} rounded-full flex items-center justify-center transition-all ${
            language === option.code ? 'is-selected bg-[var(--process-active-bg)] scale-105' : 'bg-transparent hover:bg-[var(--process-active-bg)]'
          }`}
        >
          <FlagIcon code={option.code} />
        </button>
      ))}
      <div className="w-px h-5 bg-[var(--border-secondary)]" />
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        className={`portfolio-control-button cursor-morph ${buttonSize} rounded-full flex items-center justify-center transition-all hover:bg-[var(--process-active-bg)]`}
      >
        {theme === 'dark' ? <Sun size={16} className="text-[var(--text-primary)]" /> : <Moon size={16} className="text-[var(--text-primary)]" />}
      </button>
    </div>
  );
}
