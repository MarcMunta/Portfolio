import React from 'react';
import { ArrowUpRight } from 'lucide-react';

import { MagneticElement } from '../../ui/MagneticElement';

export function HeroSection({ locale, scrollToSection }) {
  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-32">
      <div className="flex flex-col items-center text-center px-6 max-w-5xl">
        <div data-gsap-hero>
          <MagneticElement inline strength={0.1}>
            <div className="cursor-morph inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-md mb-8 hover:bg-white/[0.05] transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">
                {locale.labels.available}
              </span>
            </div>
          </MagneticElement>
        </div>

        <div data-gsap-hero className="w-full">
          <MagneticElement strength={0.02} className="w-full">
            <h1
              className="font-display font-bold leading-[0.9] tracking-tight mb-8 drop-shadow-2xl select-none w-full text-center cursor-default px-[0.04em]"
              style={{ fontSize: 'clamp(3rem, 11.4vw, 10.5rem)' }}
            >
              <span className="block text-white">MARC</span>
              <span className="block name-shimmer pt-2 pb-1">MUNTANÉ</span>
            </h1>
          </MagneticElement>
        </div>

        <div data-gsap-hero>
          <p className="max-w-2xl text-lg md:text-2xl text-gray-300 font-light leading-relaxed mb-12">
            {locale.hero.introStart}{' '}
            <strong className="text-white font-medium">{locale.hero.introHighlight}</strong>{' '}
            {locale.hero.introEnd}
            <br className="hidden md:block" />
            {locale.hero.secondStart}{' '}
            <strong className="text-gradient-blue font-medium">{locale.hero.secondHighlight}</strong>.
          </p>
        </div>

        <div data-gsap-hero>
          <MagneticElement inline strength={0.15}>
            <a
              href="#projects"
              onClick={(event) => scrollToSection('projects', event)}
              className="cursor-morph cta-btn group relative px-10 py-5 bg-[var(--cta-bg)] text-[var(--cta-text)] rounded-full font-bold flex items-center gap-3 overflow-hidden transition-transform hover:scale-[1.02] shadow-[var(--cta-shadow)]"
            >
              <span className="relative z-10">{locale.labels.viewProjects}</span>
              <ArrowUpRight size={20} className="relative z-10 transform group-hover:rotate-45 transition-transform duration-300" />
            </a>
          </MagneticElement>
        </div>
      </div>

      <div data-gsap-hero className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-3 opacity-30 animate-pulse">
        <span className="text-xs tracking-widest uppercase font-medium">{locale.hero.scroll}</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
