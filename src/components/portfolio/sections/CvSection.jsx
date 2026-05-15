import React from 'react';

import { InlineCvPreview } from '../../ui/InlineCvPreview';
import { Reveal } from '../../ui/Reveal';

export function CvSection({ locale, cvGeneralPreviewPages, cvLocalizedPreviewPages }) {
  return (
    <section id="cv" data-gsap-section className="max-w-7xl mx-auto px-6 pt-6 pb-32 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <Reveal>
          <h2 className="font-display text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none">
            {locale.cvSection.titleStart}{' '}
            <span className="text-gradient-blue">{locale.cvSection.titleAccent}</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-gray-400 max-w-sm text-lg md:text-right font-light">{locale.cvSection.desc}</p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CvPreviewCard
          label={locale.cvSection.generalLabel}
          title="Marc Muntané Clarà"
          helper="Precargado desde el proyecto"
          pages={cvGeneralPreviewPages}
          previewTitle="CV general"
        />
        <CvPreviewCard
          label={locale.cvSection.localizedLabel}
          title={`Marc Muntané Clarà - ${locale.cvSection.langName}`}
          helper="Precargado desde el proyecto"
          pages={cvLocalizedPreviewPages}
          previewTitle={`CV ${locale.cvSection.langName}`}
          delay={150}
        />
      </div>
    </section>
  );
}

function CvPreviewCard({ label, title, helper, pages, previewTitle, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="bg-[var(--bg-secondary)] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all">
        <div className="p-6 border-b border-white/10 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-sm text-blue-300/80 uppercase tracking-widest mb-1">{label}</p>
            <h3 className="text-white font-semibold text-lg truncate">{title}</h3>
          </div>
          <span className="text-xs md:text-sm text-gray-400 font-medium shrink-0">{helper}</span>
        </div>
        <div className="h-[500px] bg-[var(--bg-tertiary)]">
          <InlineCvPreview pages={pages} title={previewTitle} />
        </div>
      </div>
    </Reveal>
  );
}
