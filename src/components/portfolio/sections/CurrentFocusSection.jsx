import React from 'react';
import { Target } from 'lucide-react';

import { MagneticElement } from '../../ui/MagneticElement';
import { Reveal } from '../../ui/Reveal';

export function CurrentFocusSection({ locale }) {
  return (
    <section id="current-focus" data-gsap-section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
      <Reveal>
        <MagneticElement strength={0.015}>
          <div className="bento-card p-6 md:p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-7">
              <div className="max-w-3xl">
                <div className="inline-flex p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 mb-5">
                  <Target size={24} />
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4">
                  {locale.currentFocus.titleStart}{' '}
                  <span className="text-gradient-blue">{locale.currentFocus.titleAccent}</span>
                </h2>
                <p className="text-gray-400 text-base leading-relaxed font-light">{locale.currentFocus.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2.5 lg:max-w-[500px] w-full">
                {locale.currentFocus.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold text-gray-200">
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
