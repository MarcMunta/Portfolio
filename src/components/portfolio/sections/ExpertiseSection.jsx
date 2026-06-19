import React from 'react';
import { BrainCircuit, Database, Layers, Server, Wrench } from 'lucide-react';

import { MagneticElement } from '../../ui/MagneticElement';
import { Reveal } from '../../ui/Reveal';

const GROUP_ICONS = [Server, Layers, BrainCircuit, Database, Wrench];

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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {locale.expertise.groups.map((group, index) => {
          const Icon = GROUP_ICONS[index] ?? Server;
          const isPrimary = index === 0;

          return (
            <Reveal
              key={group.title}
              delay={index * 90}
              className={isPrimary ? 'lg:col-span-7' : 'lg:col-span-5'}
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
      <div className={`bento-card p-7 md:p-9 min-h-[320px] flex flex-col ${isPrimary ? 'border-blue-400/30' : ''}`}>
        <div className="flex items-start justify-between gap-5 mb-7">
          <div>
            <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-300 mb-5">
              <Icon size={24} />
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">{group.title}</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">{group.description}</p>
          </div>
          <span className="hidden sm:inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-200/80">
            {group.accent}
          </span>
        </div>

        <div className="mt-auto flex flex-wrap gap-2.5">
          {group.skills.map((skill) => (
            <span
              key={skill}
              className={`rounded-full border px-4 py-2 text-sm font-semibold ${
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
