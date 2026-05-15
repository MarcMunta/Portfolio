import React from 'react';

import { MARQUEE_ITEMS } from '../../../lib/portfolio/constants';

export function SkillsMarquee({ theme }) {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  const strokeColor = theme === 'dark' ? 'rgba(255,255,255,0.22)' : 'rgba(15,23,42,0.14)';

  return (
    <div className="py-8 border-y border-white/5 bg-[var(--bg-marquee)] overflow-hidden flex relative select-none">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-marquee)] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-marquee)] to-transparent z-10" />
      <div
        className="animate-marquee flex gap-12 items-center font-display text-3xl md:text-5xl font-bold tracking-tighter"
        style={{
          color: theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(15,23,42,0.34)',
          WebkitTextStroke: `0.55px ${strokeColor}`,
          textShadow: theme === 'dark' ? '0 0 12px rgba(255,255,255,0.05)' : '0 0 10px rgba(15,23,42,0.05)',
        }}
      >
        {items.map((item, index) => (
          <React.Fragment key={`${item.label}-${index}`}>
            <span
              className={item.accent ? 'text-blue-500' : item.highlighted ? 'text-white' : undefined}
              style={item.accent || item.highlighted ? { WebkitTextStroke: '0px' } : undefined}
            >
              {item.label}
            </span>
            <span>*</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
