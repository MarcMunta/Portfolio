import React from 'react';
import { Github, Linkedin } from 'lucide-react';

import { MagneticElement } from '../../ui/MagneticElement';
import { Reveal } from '../../ui/Reveal';

export function ContactSection({ locale }) {
  return (
    <section id="contact" data-gsap-section className="px-6 pt-12 pb-24 text-center relative overflow-visible border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-blue-600/15 rounded-full blur-[180px] pointer-events-none mix-blend-screen" />

      <Reveal>
        <div className="max-w-4xl mx-auto relative z-10 pt-20">
          <h2
            className="font-display font-bold tracking-tight mb-8 text-white leading-[0.95]"
            style={{ fontSize: 'clamp(2.05rem, 8.3vw, 7.8rem)' }}
          >
            {locale.contact.titleTop} <br />
            <span className="text-gradient-blue italic inline-block pr-[0.16em]">
              {locale.contact.titleStart} <span className="block md:inline">{locale.contact.titleAccent}</span>
            </span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl mb-14 max-w-2xl mx-auto font-light">{locale.contact.desc}</p>

          <MagneticElement inline strength={0.15}>
            <a
              href="mailto:marcmclara@gmail.com"
              className="cursor-morph cta-btn inline-flex items-center justify-center px-12 py-6 bg-[var(--cta-bg)] text-[var(--cta-text)] rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 shadow-[var(--cta-shadow)]"
            >
              marcmclara@gmail.com
            </a>
          </MagneticElement>
        </div>
      </Reveal>

      <Footer locale={locale} />
    </section>
  );
}

function Footer({ locale }) {
  return (
    <div className="mt-40 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-6 border-t border-white/5 pt-10 relative z-10">
      <p className="font-semibold tracking-wide">
        &copy; {new Date().getFullYear()} Marc Muntané Clarà.
      </p>
      <div className="flex gap-8">
        <MagneticElement inline strength={0.2}>
          <a
            href="https://github.com/MarcMunta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={locale.footer.githubAria}
            className="cursor-morph hover:text-white transition-colors flex items-center gap-2"
          >
            <Github size={20} /> <span className="block text-sm">GitHub</span>
          </a>
        </MagneticElement>
        <MagneticElement inline strength={0.2}>
          <a
            href="https://www.linkedin.com/in/marc-muntan%C3%A9-clar%C3%A0-ab6a0a276/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={locale.footer.linkedinAria}
            className="cursor-morph hover:text-white transition-colors flex items-center gap-2"
          >
            <Linkedin size={20} /> <span className="block text-sm">LinkedIn</span>
          </a>
        </MagneticElement>
      </div>
    </div>
  );
}
