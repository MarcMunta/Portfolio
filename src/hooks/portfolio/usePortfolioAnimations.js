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
      animateScrollProgress(mainRef, scrollProgressRef);
      animateAtmosphere(mainRef);
      animateSectionHeadings();
      animateProjectCards();
      animateEditorialRows();
      ScrollTrigger.refresh();
    }, appRef);

    return () => context.revert();
  }, [appRef, language, mainRef, scrollProgressRef]);
}

function animateHero() {
  const timeline = gsap.timeline({ defaults: { ease: 'power4.out' } });
  const heroTargets = gsap.utils.toArray('[data-gsap-hero]');
  const portrait = document.querySelector('[data-gsap-portrait]');
  const nav = document.querySelector('[data-gsap-nav]');

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

  if (portrait) {
    timeline.fromTo(
      portrait,
      {
        scale: 0.88,
        opacity: 0,
        rotate: 2.5,
        clipPath: 'inset(12% 7% 10% 7% round 48% 48% 26px 26px)',
        filter: 'blur(16px)',
      },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        clipPath: 'inset(0% 0% 0% 0% round 48% 48% 26px 26px)',
        filter: 'blur(0px)',
        duration: 1.2,
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
}

function animateScrollProgress(mainRef, scrollProgressRef) {
  if (!mainRef.current || !scrollProgressRef.current) return;

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
      },
    }
  );
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
        y: 54,
        opacity: 0.15,
        filter: 'blur(10px)',
        clipPath: 'inset(0 0 24% 0)',
      },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        clipPath: 'inset(0 0 0% 0)',
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });
}

function animateProjectCards() {
  gsap.utils.toArray('[data-gsap-project-card]').forEach((card, index) => {
    const media = card.querySelector('[data-project-media]');
    const horizontalOffset = window.innerWidth > 900 ? (index % 2 === 0 ? -54 : 54) : 0;

    gsap.fromTo(
      card,
      {
        x: horizontalOffset,
        y: 64,
        opacity: 0.25,
        clipPath: 'inset(7% 0 7% 0 round 16px)',
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        clipPath: 'inset(0% 0 0% 0 round 16px)',
        ease: 'power4.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          end: 'top 54%',
          scrub: 0.7,
        },
      }
    );

    if (media) {
      gsap.fromTo(
        media,
        { scale: 1.08 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        }
      );
    }
  });
}

function animateEditorialRows() {
  gsap.utils.toArray('[data-gsap-row]').forEach((row, index) => {
    gsap.fromTo(
      row,
      { x: index % 2 === 0 ? -34 : 34, opacity: 0.2 },
      {
        x: 0,
        opacity: 1,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: row,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });
}
