import React from 'react';
import { ArrowUpRight, BrainCircuit, MonitorSmartphone, Server } from 'lucide-react';

import { MagneticElement } from '../../ui/MagneticElement';
import { Reveal } from '../../ui/Reveal';

const ROUTE_ICONS = {
  ai: BrainCircuit,
  ui: MonitorSmartphone,
  java: Server,
};

export function RolePathsSection({ locale, scrollToSection }) {
  return (
    <section
      id="role-paths"
      data-gsap-section
      className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5"
      aria-labelledby="role-paths-title"
    >
      <Reveal>
        <div className="mb-10 max-w-4xl">
          <h2
            id="role-paths-title"
            className="font-display text-4xl md:text-6xl font-bold text-white tracking-tighter mb-5"
          >
            {locale.rolePaths.titleStart}{' '}
            <span className="text-gradient-blue">{locale.rolePaths.titleAccent}</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            {locale.rolePaths.desc}
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {locale.rolePaths.routes.map((route, index) => {
          const Icon = ROUTE_ICONS[route.key] ?? BrainCircuit;

          return (
            <Reveal key={route.key} delay={index * 100}>
              <MagneticElement strength={0.016} className="h-full">
                <article className="bento-card p-6 md:p-7 min-h-[360px] flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-7">
                    <div className="inline-flex p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-bold tracking-[0.28em] text-blue-200/70">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-5">
                    {route.title}
                  </h3>

                  <RolePathLine label={locale.labels.roleFit} text={route.fit} />
                  <RolePathLine label={locale.labels.roleProof} text={route.proof} />
                  <RolePathLine label={locale.labels.roleSignal} text={route.signal} />

                  <a
                    href={`#${route.target}`}
                    onClick={(event) => scrollToSection(route.target, event)}
                    className="cursor-morph mt-auto inline-flex w-fit items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                  >
                    {locale.labels.roleCta}
                    <ArrowUpRight size={16} />
                  </a>
                </article>
              </MagneticElement>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function RolePathLine({ label, text }) {
  return (
    <p className="mb-4 text-sm leading-relaxed text-gray-400">
      <span className="block text-[0.68rem] font-bold uppercase tracking-[0.18em] text-blue-200/80">
        {label}
      </span>
      {text}
    </p>
  );
}
