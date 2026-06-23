import React from 'react';
import { BrainCircuit, Layers3, Sparkles } from 'lucide-react';

import { MagneticElement } from '../../ui/MagneticElement';
import { Reveal } from '../../ui/Reveal';

const SIGNAL_ICONS = [BrainCircuit, Sparkles, Layers3];

export function CandidateSignalSection({ locale }) {
  return (
    <section
      id="candidate-signal"
      data-gsap-section
      data-candidate-signal
      className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5"
      aria-labelledby="candidate-signal-title"
    >
      <Reveal>
        <div className="mb-10 max-w-4xl">
          <h2
            id="candidate-signal-title"
            className="font-display text-4xl md:text-6xl font-bold text-white tracking-tighter mb-5"
          >
            {locale.candidateSignal.titleStart}{' '}
            <span className="text-gradient-blue">{locale.candidateSignal.titleAccent}</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            {locale.candidateSignal.desc}
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {locale.candidateSignal.signals.map((signal, index) => {
          const Icon = SIGNAL_ICONS[index] ?? Sparkles;

          return (
            <Reveal key={signal.title} delay={index * 90}>
              <MagneticElement strength={0.016} className="h-full">
                <article className="bento-card p-6 min-h-[230px] flex flex-col">
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <div className="inline-flex p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300">
                      <Icon size={23} />
                    </div>
                    <span className="text-xs font-bold tracking-[0.28em] text-blue-200/70">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">{signal.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400 font-light">{signal.text}</p>
                </article>
              </MagneticElement>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
