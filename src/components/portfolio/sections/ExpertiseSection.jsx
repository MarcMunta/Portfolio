import React from 'react';
import { BrainCircuit, Layers, Smartphone, Terminal } from 'lucide-react';

import { MagneticElement } from '../../ui/MagneticElement';
import { Reveal } from '../../ui/Reveal';

export function ExpertiseSection({ locale }) {
  return (
    <section id="expertise" data-gsap-section className="max-w-7xl mx-auto px-6 py-32">
      <Reveal>
        <h2 className="font-display text-5xl md:text-7xl font-bold mb-16 text-white tracking-tighter">
          {locale.expertise.titleStart} <span className="text-gradient-blue">{locale.expertise.titleAccent}</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[380px]">
        <UiUxCard locale={locale} />
        <FrontendCard locale={locale} />
        <MobileCard locale={locale} />
        <InfraCard locale={locale} />
      </div>

      <AiCard locale={locale} />
    </section>
  );
}

function UiUxCard({ locale }) {
  return (
    <Reveal delay={100} className="md:col-span-8 h-full">
      <MagneticElement strength={0.02} spring="cubic-bezier(0.16, 1, 0.3, 1)" className="w-full h-full">
        <div className="bento-card p-10 flex flex-col md:flex-row justify-between items-center group">
          <div className="md:w-1/2 z-10 pointer-events-none">
            <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-white mb-6">
              <Layers size={24} />
            </div>
            <h3 className="text-4xl font-display font-bold text-white mb-4">{locale.expertise.uiuxTitle}</h3>
            <p className="text-gray-400 text-lg leading-relaxed">{locale.expertise.uiuxDesc}</p>
          </div>

          <div className="md:w-1/2 h-full flex justify-center items-center relative mt-8 md:mt-0 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full max-w-[280px] overflow-visible">
              <defs>
                <linearGradient id="glass" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
                </linearGradient>
              </defs>
              <g className="anim-float-rev" style={{ transformOrigin: 'center' }}>
                <rect x="50" y="30" width="120" height="80" rx="12" fill="url(#glass)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <rect x="60" y="40" width="30" height="10" rx="4" fill="rgba(255,255,255,0.2)" />
              </g>
              <g className="anim-float group-hover:scale-105 transition-transform duration-700" style={{ transformOrigin: 'center' }}>
                <rect x="20" y="70" width="140" height="100" rx="16" fill="url(#glass)" stroke="rgba(59,130,246,0.5)" strokeWidth="2" className="backdrop-blur-xl" />
                <circle cx="45" cy="95" r="12" fill="rgba(59,130,246,0.6)" />
                <rect x="65" y="90" width="70" height="10" rx="4" fill="rgba(255,255,255,0.4)" />
              </g>
            </svg>
          </div>
        </div>
      </MagneticElement>
    </Reveal>
  );
}

function FrontendCard({ locale }) {
  return (
    <Reveal delay={200} className="md:col-span-4 h-full">
      <MagneticElement strength={0.03} spring="cubic-bezier(0.16, 1, 0.3, 1)" className="w-full h-full">
        <div className="bento-card p-10 flex flex-col justify-between group">
          <div className="z-10 pointer-events-none">
            <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
              <Terminal size={24} />
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-3">{locale.expertise.frontendTitle}</h3>
            <p className="text-gray-400 text-base mb-6">{locale.expertise.frontendDesc}</p>
          </div>
          <div className="code-panel bg-black/60 rounded-xl p-4 border border-white/5 font-mono text-xs text-gray-400 relative overflow-hidden group-hover:border-white/20 transition-colors pointer-events-none">
            <div className="flex gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <p>
              <span className="text-blue-400">const</span> <span className="text-yellow-200">stack</span> = [
            </p>
            <p className="pl-4 text-white font-medium">"React", "WordPress",</p>
            <p className="pl-4 text-white font-medium">"JavaScript", "PHP"</p>
            <p>];</p>
          </div>
        </div>
      </MagneticElement>
    </Reveal>
  );
}

function MobileCard({ locale }) {
  return (
    <Reveal delay={300} className="md:col-span-4 h-full">
      <MagneticElement strength={0.03} spring="cubic-bezier(0.16, 1, 0.3, 1)" className="w-full h-full">
        <div className="bento-card p-10 flex flex-col justify-between group overflow-hidden relative">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[60px] group-hover:bg-emerald-500/20 transition-colors pointer-events-none" />
          <div className="z-10 pointer-events-none">
            <div className="inline-flex p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
              <Smartphone size={24} />
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-3">{locale.expertise.mobileTitle}</h3>
            <p className="text-gray-400 text-base mb-6">{locale.expertise.mobileDesc}</p>
          </div>
          <div className="flex flex-col gap-2 z-10 font-semibold pointer-events-none">
            <div className="mobile-stack-chip px-4 py-3 bg-black/40 border border-white/5 rounded-xl text-emerald-300 flex justify-between group-hover:border-white/10 transition-colors">
              <span>Flutter</span> <span>Dart</span>
            </div>
            <div className="mobile-stack-chip px-4 py-3 bg-black/40 border border-white/5 rounded-xl text-white flex justify-between opacity-70 group-hover:border-white/10 transition-colors">
              <span>Flutter Web</span> <span>Mapbox</span>
            </div>
          </div>
        </div>
      </MagneticElement>
    </Reveal>
  );
}

function InfraCard({ locale }) {
  return (
    <Reveal delay={400} className="md:col-span-8 h-full">
      <MagneticElement strength={0.02} spring="cubic-bezier(0.16, 1, 0.3, 1)" className="w-full h-full">
        <div className="bento-card p-10 flex flex-col md:flex-row items-center justify-between group">
          <div className="md:w-5/12 z-10 pointer-events-none">
            <h3 className="text-4xl font-display font-bold text-white mb-4">{locale.expertise.infraTitle}</h3>
            <p className="text-gray-400 text-lg">{locale.expertise.infraDesc}</p>
          </div>
          <div className="md:w-7/12 h-full w-full flex items-center justify-center relative pointer-events-none pt-8 md:pt-0">
            <svg viewBox="0 0 300 150" className="w-full h-full overflow-visible">
              <path d="M 0 75 Q 75 25 150 75 T 300 75" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2">
                <animate attributeName="d" values="M 0 75 Q 75 25 150 75 T 300 75; M 0 75 Q 75 125 150 75 T 300 75; M 0 75 Q 75 25 150 75 T 300 75" dur="4s" repeatCount="indefinite" />
              </path>
              <path d="M 0 75 Q 75 50 150 75 T 300 75" fill="none" stroke="rgba(59,130,246,0.6)" strokeWidth="3" filter="drop-shadow(0 0 8px rgba(59,130,246,0.5))">
                <animate attributeName="d" values="M 0 75 Q 75 50 150 75 T 300 75; M 0 75 Q 75 100 150 75 T 300 75; M 0 75 Q 75 50 150 75 T 300 75" dur="6s" repeatCount="indefinite" />
              </path>
            </svg>
          </div>
        </div>
      </MagneticElement>
    </Reveal>
  );
}

function AiCard({ locale }) {
  return (
    <Reveal delay={460} className="mt-8">
      <MagneticElement strength={0.015} className="w-full">
        <div className="bento-card p-8 md:p-10 bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)]">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-5">
                <BrainCircuit size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{locale.expertise.aiTitle}</h3>
              <p className="text-gray-300/90 text-base md:text-lg leading-relaxed">{locale.expertise.aiDesc}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:max-w-[440px] w-full">
              {locale.expertise.aiSkills.map((skill) => (
                <div key={skill} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-200 font-semibold tracking-wide">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </MagneticElement>
    </Reveal>
  );
}
