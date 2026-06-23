import React from 'react';
import { BrainCircuit, Layers, Server } from 'lucide-react';

import { MagneticElement } from '../../ui/MagneticElement';
import { Reveal } from '../../ui/Reveal';

const GROUP_ICONS = [BrainCircuit, Layers, Server];

export function ExpertiseSection({ locale }) {
  return (
    <section id="expertise" data-gsap-section className="max-w-7xl mx-auto px-6 py-32">
      <Reveal>
        <div className="mb-16">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-5 text-white tracking-tighter">
            {locale.expertise.titleStart} <span className="text-gradient-blue">{locale.expertise.titleAccent}</span>
          </h2>
          <p className="text-gray-400 max-w-3xl text-lg font-light leading-relaxed">{locale.expertise.desc}</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {locale.expertise.groups.map((group, index) => {
          const Icon = GROUP_ICONS[index] ?? Server;
          const isPrimary = index === 0;

          return (
            <Reveal
              key={group.title}
              delay={index * 90}
              className="h-full"
            >
              <SkillGroupCard group={group} Icon={Icon} isPrimary={isPrimary} />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function SkillGroupCard({ group, Icon, isPrimary }) {
  return (
    <MagneticElement strength={0.02} spring="cubic-bezier(0.16, 1, 0.3, 1)" className="w-full h-full">
      <div className={`bento-card p-6 md:p-7 min-h-[250px] flex flex-col ${isPrimary ? 'border-blue-400/30' : ''}`}>
        <div className="mb-6">
          <div>
            <div className="inline-flex p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 mb-4">
              <Icon size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">{group.title}</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">{group.description}</p>
          </div>
          <span className="mt-5 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-blue-200/80">
            {group.accent}
          </span>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span
              key={skill}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                isPrimary
                  ? 'border-blue-400/25 bg-blue-500/10 text-blue-100'
                  : 'border-white/10 bg-white/[0.04] text-gray-200'
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </MagneticElement>
  );
}
