import React from 'react';
import { Bug, Code2, Compass, GitBranch, Layers3, Server } from 'lucide-react';

import { Reveal } from '../../ui/Reveal';
import { ProcessVisual } from '../process/ProcessVisual';

const PROCESS_ICONS = [Compass, Layers3, Server, Code2, Bug, GitBranch];

export function ProcessSection({ locale, activeProcessStep, setActiveProcessStep }) {
  const processSteps = locale.process.steps.map((step, index) => ({
    ...step,
    Icon: PROCESS_ICONS[index],
  }));

  return (
    <section id="process" data-gsap-section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
      <Reveal>
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            {locale.process.titleStart} <span className="text-gradient-blue">{locale.process.titleAccent}</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-lg font-light">{locale.process.desc}</p>
        </div>
      </Reveal>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        <ProcessSteps
          steps={processSteps}
          activeProcessStep={activeProcessStep}
          setActiveProcessStep={setActiveProcessStep}
        />
        <ProcessVisual activeProcessStep={activeProcessStep} />
      </div>
    </section>
  );
}

function ProcessSteps({ steps, activeProcessStep, setActiveProcessStep }) {
  const stepHeight = 100 / steps.length;

  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-2 relative border-l border-white/10 pl-6 py-2">
      <div
        className="absolute left-[-1px] w-[2px] bg-blue-500 transition-all duration-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
        style={{ top: `${activeProcessStep * stepHeight}%`, height: `${stepHeight}%` }}
      />

      {steps.map(({ Icon, title, desc }, index) => (
        <Reveal key={title} delay={index * 100}>
          <div
            data-process-step
            onMouseEnter={() => setActiveProcessStep(index)}
            className={`process-tab cursor-morph p-6 rounded-2xl border border-transparent flex gap-6 items-center ${
              activeProcessStep === index ? 'active' : 'hover:bg-white/[0.02]'
            }`}
          >
            <div
              className={`p-4 rounded-xl transition-colors duration-500 ${
                activeProcessStep === index
                  ? 'bg-blue-500/10 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                  : 'bg-white/5 text-gray-500'
              }`}
            >
              <Icon size={24} />
            </div>
            <div>
              <h4
                className={`text-xl md:text-2xl font-bold font-display transition-colors duration-500 ${
                  activeProcessStep === index ? 'text-white' : 'text-gray-500'
                }`}
              >
                {title}
              </h4>
              <div
                className={`grid transition-all duration-500 ${
                  activeProcessStep === index ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <p className="overflow-hidden text-gray-400 font-light text-sm md:text-base pr-4">{desc}</p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
