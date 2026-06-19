import React from 'react';
import { Code2, Sparkles } from 'lucide-react';

import { MagneticElement } from '../../ui/MagneticElement';
import { Reveal } from '../../ui/Reveal';

export function AboutSection({ locale }) {
  return (
    <section id="about" data-gsap-section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter">
              {locale.about.titleStart} <span className="text-gradient-blue">{locale.about.titleAccent}</span>
            </h2>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            <AboutCard icon={Code2} text={locale.about.desc} />
            <AboutCard icon={Sparkles} text={locale.about.extra} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function AboutCard({ icon: Icon, text }) {
  return (
    <MagneticElement strength={0.018} className="h-full">
      <div className="bento-card p-7 min-h-[300px]">
        <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-300 mb-6">
          <Icon size={24} />
        </div>
        <p className="text-gray-300/90 text-lg leading-relaxed font-light">{text}</p>
      </div>
    </MagneticElement>
  );
}
