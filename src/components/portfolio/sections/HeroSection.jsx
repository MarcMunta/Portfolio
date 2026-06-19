import React from 'react';
import { ArrowUpRight } from 'lucide-react';

import { MagneticElement } from '../../ui/MagneticElement';

export function HeroSection({ locale, scrollToSection }) {
  const heroActions = [
    { label: locale.labels.viewProjects, target: 'java-projects', primary: true },
    { label: locale.labels.viewStack, target: 'expertise' },
    { label: locale.labels.contact, target: 'contact' },
  ];
  const [heroLineOne, heroLineTwo, heroLineThree] = locale.hero.titleLines;

  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-32">
      <div className="flex w-full max-w-5xl flex-col items-center text-center px-5 sm:px-6">
        <div>
          <MagneticElement inline strength={0.1}>
            <div className="cursor-morph inline-flex w-full max-w-[19.5rem] items-center justify-center gap-3 px-4 sm:w-auto sm:max-w-[calc(100vw-2rem)] sm:px-5 py-2.5 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-md mb-8 hover:bg-white/[0.05] transition-colors">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span className="min-w-0 whitespace-normal text-center text-[0.68rem] sm:text-xs font-semibold tracking-[0.12em] sm:tracking-widest text-gray-300 uppercase leading-snug">
                {locale.labels.available}
              </span>
            </div>
          </MagneticElement>
        </div>

        <div className="w-full">
          <MagneticElement strength={0.02} className="w-full justify-center">
            <div className="mb-8 w-full select-none cursor-default text-center">
              <p className="mx-auto max-w-full text-center text-xs sm:text-sm md:text-base uppercase tracking-[0.34em] sm:tracking-[0.42em] text-blue-200/80 font-bold mb-5">
                Marc Muntané Clarà
              </p>
              <h1
                className="font-display font-bold leading-[0.9] drop-shadow-2xl w-full text-center px-0"
                style={{ fontSize: 'clamp(2.58rem, 8.7vw, 8.8rem)', letterSpacing: 0 }}
              >
                <span className="mx-auto block w-fit text-white">{heroLineOne}</span>
                <span className="mx-auto block w-fit name-shimmer pt-2 pb-1">{heroLineTwo}</span>
                <span className="mx-auto block w-fit name-shimmer pb-1">{heroLineThree}</span>
              </h1>
            </div>
          </MagneticElement>
        </div>

        <div className="w-full text-center">
          <p className="mx-auto hidden w-full max-w-3xl text-center text-lg md:block md:text-2xl text-gray-300 font-light leading-relaxed mb-5 [text-wrap:balance]">
            {locale.hero.subtitle}
          </p>
          <p className="mx-auto block w-full max-w-[18rem] text-center text-base text-gray-300 font-light leading-relaxed mb-4 md:hidden [text-wrap:balance]">
            {locale.hero.mobileSubtitle}
          </p>
          <p className="mx-auto hidden w-full max-w-3xl text-center text-sm md:block md:text-base text-gray-400 font-light leading-relaxed mb-12 [text-wrap:balance]">
            {locale.hero.supporting}
          </p>
          <p className="mx-auto block w-full max-w-[18rem] text-center text-[0.82rem] text-gray-400 font-light leading-relaxed mb-10 md:hidden [text-wrap:balance]">
            {locale.hero.mobileSupporting}
          </p>
        </div>

        <div className="flex w-full flex-col sm:flex-row items-center justify-center gap-3">
          {heroActions.map((action) => (
            <MagneticElement inline strength={0.15} key={action.target}>
              <a
                href={`#${action.target}`}
                onClick={(event) => scrollToSection(action.target, event)}
                className={`cursor-morph group relative px-7 py-4 rounded-full font-bold flex items-center gap-3 overflow-hidden transition-transform hover:scale-[1.02] ${
                  action.primary
                    ? 'cta-btn bg-[var(--cta-bg)] text-[var(--cta-text)] shadow-[var(--cta-shadow)]'
                    : 'border border-white/15 text-white bg-white/[0.03] hover:bg-white/[0.07]'
                }`}
              >
                <span className="relative z-10">{action.label}</span>
                <ArrowUpRight size={18} className="relative z-10 transform group-hover:rotate-45 transition-transform duration-300" />
              </a>
            </MagneticElement>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-3 opacity-30 animate-pulse">
        <span className="text-xs tracking-widest uppercase font-medium">{locale.hero.scroll}</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
