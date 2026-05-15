import React from 'react';
import { Briefcase } from 'lucide-react';

import { MagneticElement } from '../../ui/MagneticElement';
import { Reveal } from '../../ui/Reveal';

export function ExperienceSection({ locale }) {
  return (
    <section id="experience" data-gsap-section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
      <Reveal>
        <div className="mb-24 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter">
            {locale.experienceSection.titleStart}{' '}
            <span className="text-gradient-blue">{locale.experienceSection.titleAccent}</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-right font-light pb-2">{locale.experienceSection.desc}</p>
        </div>
      </Reveal>

      <div className="relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/20 to-transparent -translate-x-1/2" />

        <div className="space-y-16">
          {locale.experienceItems.map((item, index) => (
            <ExperienceItem key={`${item.year}-${item.role}`} item={item} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ item, delay }) {
  return (
    <Reveal delay={delay}>
      <div className={`relative flex flex-col md:flex-row items-center justify-between group ${item.align === 'left' ? 'md:flex-row-reverse' : ''}`}>
        <div className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full bg-black border-[3px] border-blue-500 -translate-x-1/2 z-10 timeline-node flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${item.align === 'left' ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
          <MagneticElement strength={0.015} className="w-full">
            <div className="bento-card p-8 group-hover:border-blue-500/30 transition-colors shadow-lg">
              <span className="text-blue-400 font-bold text-sm tracking-wider mb-2 block">{item.year}</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">{item.role}</h3>
              <h4 className="text-gray-400 font-medium mb-4 flex items-center gap-2 md:justify-start">
                <Briefcase size={16} /> {item.company}
              </h4>
              <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          </MagneticElement>
        </div>

        <div className="hidden md:block w-5/12" />
      </div>
    </Reveal>
  );
}
