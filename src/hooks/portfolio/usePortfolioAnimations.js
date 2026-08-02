import { useEffect } from 'react';

import { gsap } from '../../lib/portfolio/gsap';

export function usePortfolioAnimations({ appRef, mainRef, scrollProgressRef, language }) {
  useEffect(() => {
    if (!appRef.current) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const context = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set('[data-gsap-hero]', { clearProps: 'all' });
        return;
      }

      const heroTargets = gsap.utils.toArray('[data-gsap-hero]');
      gsap.fromTo(
        heroTargets,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          stagger: 0.07,
        }
      );

      if (mainRef.current && scrollProgressRef.current) {
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
    }, appRef);

    return () => context.revert();
  }, [appRef, language, mainRef, scrollProgressRef]);
}
