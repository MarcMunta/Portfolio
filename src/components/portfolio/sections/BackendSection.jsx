import React from 'react';
import { ArrowUpRight, Database, Layers3, Server } from 'lucide-react';

import { MagneticElement } from '../../ui/MagneticElement';
import { Reveal } from '../../ui/Reveal';

const BACKEND_ICONS = [Layers3, Server, Database];

export function BackendSection({ locale, scrollToSection }) {
  return (
    <section id="backend" data-gsap-section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-8">
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
              {locale.backend.titleStart}{' '}
              <span className="text-gradient-blue">{locale.backend.titleAccent}</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">{locale.backend.desc}</p>
          </div>
          <div className="lg:col-span-4">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">{locale.backend.body}</p>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {locale.backend.cards.map((card, index) => {
          const Icon = BACKEND_ICONS[index] ?? Server;

          return (
            <Reveal key={card.title} delay={index * 100}>
              <MagneticElement strength={0.018} className="h-full">
                <div className="bento-card p-7 min-h-[280px] flex flex-col">
                  <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-300 mb-6 w-fit">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-light">{card.text}</p>
                </div>
              </MagneticElement>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={360}>
        <div className="mt-10 flex justify-center">
          <MagneticElement inline strength={0.15}>
            <a
              href="#java-projects"
              onClick={(event) => scrollToSection('java-projects', event)}
              className="cursor-morph cta-btn inline-flex items-center gap-3 rounded-full bg-[var(--cta-bg)] px-8 py-4 font-bold text-[var(--cta-text)] shadow-[var(--cta-shadow)] transition-transform hover:scale-[1.02]"
            >
              {locale.labels.viewProjects}
              <ArrowUpRight size={18} />
            </a>
          </MagneticElement>
        </div>
      </Reveal>
    </section>
  );
}
