import { useEffect } from 'react';

import { gsap, ScrollTrigger } from '../../lib/portfolio/gsap';

const MOTION_TARGETS = [
  '[data-gsap-nav]',
  '[data-gsap-hero]',
  '[data-gsap-portrait]',
  '[data-gsap-section-heading]',
  '[data-gsap-project-card]',
  '[data-gsap-row]',
  '[data-orbit-layer]',
  '[data-hero-title-line]',
  '[data-hero-calibration-sweep]',
  '[data-project-scan-beam]',
  '[data-project-scan-reticle]',
  '[data-experience-progress]',
  '[data-scroll-progress-marker]',
].join(', ');

export function usePortfolioAnimations({ appRef, mainRef, scrollProgressRef, language }) {
  useEffect(() => {
    if (!appRef.current) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const context = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(MOTION_TARGETS, { clearProps: 'all' });
        gsap.set(scrollProgressRef.current, { clearProps: 'all' });
        return;
      }

      animateHero();
      animateHeroWorkflow();
      animateScrollProgress(mainRef, scrollProgressRef);
      animateAtmosphere(mainRef);
      animateSectionHeadings();
      animateProjectCards();
      animateProjectArchive();
      animateEditorialRows();
      animateExperienceProgress();
      ScrollTrigger.refresh();
    }, appRef);

    return () => context.revert();
  }, [appRef, language, mainRef, scrollProgressRef]);
}

function animateProjectArchive() {
  const cards = gsap.utils.toArray('[data-gsap-project-card]');
  const links = gsap.utils.toArray('[data-project-nav]');
  const progress = document.querySelector('[data-archive-progress]');
  const archive = document.querySelector('.project-archive');

  if (!cards.length || !links.length) return;

  const setActiveProject = (index) => {
    const activeAccent = window.getComputedStyle(cards[index])
      .getPropertyValue('--project-accent')
      .trim();
    const activeText = window.getComputedStyle(cards[index])
      .getPropertyValue('--project-text')
      .trim();

    if (archive && activeAccent) archive.style.setProperty('--archive-accent', activeAccent);
    if (archive && activeText) archive.style.setProperty('--archive-text', activeText);

    links.forEach((link, linkIndex) => {
      const isCurrent = linkIndex === index;
      link.classList.toggle('is-current', isCurrent);

      if (isCurrent) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  setActiveProject(0);

  cards.forEach((card, index) => {
    ScrollTrigger.create({
      trigger: card,
      start: 'top 52%',
      end: 'bottom 52%',
      onEnter: () => setActiveProject(index),
      onEnterBack: () => setActiveProject(index),
    });
  });

  if (progress) {
    gsap.fromTo(
      progress,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 52%',
          end: 'bottom 52%',
          scrub: true,
        },
      }
    );
  }
}

function animateHeroWorkflow() {
  const track = document.querySelector('[data-hero-workflow-track]');

  if (!track) return;

  gsap.fromTo(
    track,
    { xPercent: 0 },
    {
      xPercent: -24,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.7,
      },
    }
  );
}

function animateHero() {
  const timeline = gsap.timeline({ defaults: { ease: 'power4.out' } });
  const heroTargets = gsap.utils.toArray('[data-gsap-hero]');
  const titleLines = gsap.utils.toArray('[data-hero-title-line]');
  const portrait = document.querySelector('[data-gsap-portrait]');
  const nav = document.querySelector('[data-gsap-nav]');
  const calibrationSweep = document.querySelector('[data-hero-calibration-sweep]');

  if (nav) {
    timeline.fromTo(
      nav,
      { y: -24, opacity: 0, filter: 'blur(8px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.7 },
      0
    );
  }

  if (heroTargets.length) {
    timeline.fromTo(
      heroTargets,
      { y: 38, opacity: 0, filter: 'blur(12px)' },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.9,
        stagger: 0.075,
      },
      0.08
    );
  }

  if (titleLines.length) {
    timeline.fromTo(
      titleLines,
      { yPercent: 112, filter: 'blur(5px)' },
      {
        yPercent: 0,
        filter: 'blur(0px)',
        duration: 0.95,
        stagger: 0.1,
      },
      0.16
    );
  }

  if (portrait) {
    timeline.fromTo(
      portrait,
      {
        scale: 0.96,
        opacity: 0.2,
        clipPath: 'inset(0 0 100% 0)',
        filter: 'blur(10px)',
      },
      {
        scale: 1,
        opacity: 1,
        clipPath: 'inset(0 0 0% 0)',
        filter: 'blur(0px)',
        duration: 1.15,
      },
      0.24
    );

    gsap.to(portrait, {
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6,
      },
    });
  }

  if (calibrationSweep) {
    timeline.fromTo(
      calibrationSweep,
      { xPercent: 0, opacity: 0 },
      {
        xPercent: 660,
        opacity: 0.72,
        duration: 1.35,
        ease: 'power2.inOut',
      },
      0.1
    );
    timeline.to(calibrationSweep, { opacity: 0, duration: 0.2 }, 1.28);
  }
}

function animateScrollProgress(mainRef, scrollProgressRef) {
  if (!mainRef.current || !scrollProgressRef.current) return;

  const marker = document.querySelector('[data-scroll-progress-marker]');
  const readout = document.querySelector('[data-scroll-progress-readout]');
  let previousPercent = -1;

  const updateReadout = (progress) => {
    const percent = Math.round(progress * 100);
    if (percent === previousPercent) return;

    previousPercent = percent;
    if (readout) readout.textContent = `${String(percent).padStart(2, '0')}%`;
  };

  gsap.fromTo(
    scrollProgressRef.current,
    { scaleX: 0 },
    {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: mainRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => updateReadout(self.progress),
      },
    }
  );

  if (marker) {
    gsap.fromTo(
      marker,
      { x: 0 },
      {
        x: () => Math.max(0, window.innerWidth - 10),
        ease: 'none',
        scrollTrigger: {
          trigger: mainRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );
  }
}

function animateAtmosphere(mainRef) {
  if (!mainRef.current) return;

  gsap.utils.toArray('[data-orbit-layer]').forEach((layer) => {
    const depth = Number.parseFloat(layer.dataset.orbitLayer || '0');

    gsap.to(layer, {
      y: () => window.innerHeight * depth,
      rotate: depth * 28,
      ease: 'none',
      scrollTrigger: {
        trigger: mainRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  });
}

function animateSectionHeadings() {
  gsap.utils.toArray('[data-gsap-section-heading]').forEach((heading) => {
    gsap.fromTo(
      heading,
      {
        y: 36,
        opacity: 0.45,
        clipPath: 'inset(0 0 18% 0)',
        '--heading-progress': 0,
      },
      {
        y: 0,
        opacity: 1,
        clipPath: 'inset(0 0 0% 0)',
        '--heading-progress': 1,
        duration: 0.78,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 88%',
          once: true,
        },
      }
    );
  });
}

function animateProjectCards() {
  gsap.utils.toArray('[data-gsap-project-card]').forEach((card, index) => {
    const media = card.querySelector('[data-project-media]');
    const identity = card.querySelector('[data-project-identity]');
    const scanBeam = card.querySelector('[data-project-scan-beam]');
    const scanReticle = card.querySelector('[data-project-scan-reticle]');
    const evidenceItems = gsap.utils.toArray(card.querySelectorAll('[data-project-evidence] li'));
    const horizontalOffset = window.innerWidth > 900 ? (index % 2 === 0 ? -38 : 38) : 0;
    const revealFrom = index % 2 === 0 ? 'inset(0 9% 0 0)' : 'inset(0 0 0 9%)';

    gsap.fromTo(
      card,
      {
        x: horizontalOffset,
        y: 64,
        opacity: 0.55,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          end: 'top 62%',
          scrub: 0.45,
        },
      }
    );

    if (media) {
      gsap.fromTo(
        media,
        { scale: 1.045, clipPath: revealFrom },
        {
          scale: 1,
          clipPath: 'inset(0 0 0 0)',
          ease: 'none',
          immediateRender: false,
          scrollTrigger: {
            trigger: card,
            start: 'top 92%',
            end: 'top 34%',
            scrub: 0.8,
          },
        }
      );
    }

    if (identity) {
      gsap.fromTo(
        identity,
        { xPercent: index % 2 === 0 ? -12 : 12, opacity: 0, filter: 'blur(10px)' },
        {
          xPercent: 0,
          opacity: 1,
          filter: 'blur(0px)',
          ease: 'power4.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 78%',
            end: 'top 42%',
            scrub: 0.55,
          },
        }
      );
    }

    if (scanBeam) {
      const scanTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: media,
          start: 'top 86%',
          end: 'bottom 24%',
          scrub: 0.65,
        },
      });

      scanTimeline
        .fromTo(scanBeam, { yPercent: 0, opacity: 0 }, { opacity: 0.78, duration: 0.12 })
        .to(scanBeam, { yPercent: 470, ease: 'none', duration: 0.76 }, 0)
        .to(scanBeam, { opacity: 0, duration: 0.12 }, 0.88);
    }

    if (scanReticle) {
      gsap.fromTo(
        scanReticle,
        { scale: 0.78, rotate: index % 2 === 0 ? -7 : 7, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 0.82,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: media,
            start: 'top 76%',
            end: 'top 42%',
            scrub: 0.5,
          },
        }
      );
    }

    if (evidenceItems.length) {
      gsap.fromTo(
        evidenceItems,
        { y: 22, opacity: 0, clipPath: 'inset(0 0 90% 0)' },
        {
          y: 0,
          opacity: 1,
          clipPath: 'inset(0 0 0% 0)',
          duration: 0.72,
          stagger: 0.08,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: evidenceItems[0],
            start: 'top 90%',
            once: true,
          },
        }
      );
    }
  });
}

function animateEditorialRows() {
  gsap.utils.toArray('[data-gsap-row]').forEach((row, index) => {
    const indexMark = row.querySelector('.experience-index, .education-index, .expertise-index');
    const sigil = row.querySelector('.expertise-sigil');
    const listItems = row.matches('.expertise-item')
      ? gsap.utils.toArray(row.querySelectorAll('li'))
      : [];

    gsap.fromTo(
      row,
      { x: index % 2 === 0 ? -38 : 38, opacity: 0.35 },
      {
        x: 0,
        opacity: 1,
        duration: 0.78,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: row,
          start: 'top 90%',
          once: true,
        },
      }
    );

    if (indexMark) {
      gsap.fromTo(
        indexMark,
        { scale: 1.18, opacity: 0.12 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.9,
          ease: 'power4.out',
          scrollTrigger: { trigger: row, start: 'top 88%', once: true },
        }
      );
    }

    if (sigil) {
      gsap.fromTo(
        sigil,
        { scale: 0.82, rotate: index % 2 === 0 ? -8 : 8, opacity: 0.25 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power4.out',
          scrollTrigger: { trigger: row, start: 'top 86%', once: true },
        }
      );
    }

    if (listItems.length) {
      gsap.fromTo(
        listItems,
        { y: 14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.055,
          ease: 'power3.out',
          scrollTrigger: { trigger: row, start: 'top 82%', once: true },
        }
      );
    }
  });
}

function animateExperienceProgress() {
  const list = document.querySelector('.experience-list');
  const progress = document.querySelector('[data-experience-progress]');

  if (!list || !progress) return;

  gsap.fromTo(
    progress,
    { scaleY: 0 },
    {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: list,
        start: 'top 68%',
        end: 'bottom 42%',
        scrub: true,
      },
    }
  );
}
