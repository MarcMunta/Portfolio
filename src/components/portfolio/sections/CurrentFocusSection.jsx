import React from 'react';
import { Target } from 'lucide-react';

import { MagneticElement } from '../../ui/MagneticElement';
import { Reveal } from '../../ui/Reveal';

export function CurrentFocusSection({ locale }) {
  return (
    <section id="current-focus" data-gsap-section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
      <Reveal>
        <MagneticElement strength={0.015}>
          <div className="bento-card p-8 md:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-9">
              <div className="max-w-3xl">
                <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-300 mb-6">
                  <Target size={24} />
                </div>
                <h2 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tighter mb-5">
                  {locale.currentFocus.titleStart}{' '}
                  <span className="text-gradient-blue">{locale.currentFocus.titleAccent}</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed font-light">{locale.currentFocus.desc}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:max-w-[500px] w-full">
                {locale.currentFocus.items.map((item) => (
                  <span key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-gray-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </MagneticElement>
      </Reveal>
    </section>
  );
}
