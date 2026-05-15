import { useEffect, useRef } from 'react';

import { gsap, ScrollTrigger } from '../../lib/portfolio/gsap';

export function usePortfolioAnimations({
  appRef,
  mainRef,
  scrollProgressRef,
  projectsSectionRef,
  projectsPinRef,
  projectsTrackRef,
  language,
  projectsCount,
  setActiveProcessStep,
  setActiveProjectIndex,
}) {
  const activeProjectIndexRef = useRef(0);

  useEffect(() => {
    if (!appRef.current) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const context = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set('[data-gsap-hero], [data-gsap-nav], [data-gsap-section], [data-gsap-project-card]', {
          clearProps: 'all',
        });
      } else {
        animateIntro();
        animateScrollProgress(mainRef, scrollProgressRef);
        animateSections();
        animateProjectRail({
          projectsSectionRef,
          projectsTrackRef,
          activeProjectIndexRef,
          setActiveProjectIndex,
        });
      }

      wireProcessSteps(setActiveProcessStep);
      ScrollTrigger.refresh();
    }, appRef);

    return () => context.revert();
  }, [
    appRef,
    language,
    mainRef,
    projectsCount,
    projectsSectionRef,
    projectsPinRef,
    projectsTrackRef,
    scrollProgressRef,
    setActiveProcessStep,
    setActiveProjectIndex,
  ]);
}

function animateIntro() {
  gsap.fromTo(
    '[data-gsap-nav]',
    { y: -36, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out', stagger: 0.08 }
  );

  gsap.fromTo(
    '[data-gsap-hero]',
    { y: 46, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.12,
      delay: 0.2,
    }
  );
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

function animateSections() {
  gsap.utils.toArray('[data-gsap-section]:not([data-gsap-projects])').forEach((section) => {
    gsap.fromTo(
      section,
      { y: 70, opacity: 0.35 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 92%',
          end: 'top 65%',
          scrub: 0.8,
        },
      }
    );
  });
}

function animateProjectRail({ projectsSectionRef, projectsTrackRef, activeProjectIndexRef, setActiveProjectIndex }) {
  if (!projectsSectionRef.current || !projectsTrackRef.current) return;

  const slides = gsap.utils.toArray('[data-project-slide]', projectsTrackRef.current);
  if (slides.length <= 1) return;

  const getHorizontalDistance = () => {
    const firstSlide = slides[0];
    const lastSlide = slides[slides.length - 1];

    return Math.max(
      0,
      lastSlide.offsetLeft + lastSlide.offsetWidth / 2 - (firstSlide.offsetLeft + firstSlide.offsetWidth / 2)
    );
  };

  const getPinnedDistance = () => Math.max(getHorizontalDistance(), window.innerWidth * 0.9);

  const updateActiveProject = () => {
    if (!projectsTrackRef.current || slides.length === 0) return;

    const trackX = Number(gsap.getProperty(projectsTrackRef.current, 'x')) || 0;
    const viewportCenter = window.innerWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2 + trackX;
      const distance = Math.abs(viewportCenter - slideCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeProjectIndexRef.current) {
      activeProjectIndexRef.current = closestIndex;
      setActiveProjectIndex(closestIndex);
    }
  };

  activeProjectIndexRef.current = 0;
  setActiveProjectIndex(0);

  gsap.to(projectsTrackRef.current, {
    x: () => -getHorizontalDistance(),
    ease: 'none',
    scrollTrigger: {
      trigger: projectsSectionRef.current,
      start: 'top top',
      end: () => `+=${getPinnedDistance()}`,
      scrub: 0.35,
      pin: projectsSectionRef.current,
      pinSpacing: true,
      pinReparent: true,
      anticipatePin: 1,
      fastScrollEnd: true,
      invalidateOnRefresh: true,
      onUpdate: updateActiveProject,
      onRefresh: updateActiveProject,
      onLeave: updateActiveProject,
      onLeaveBack: updateActiveProject,
    },
  });
}

function wireProcessSteps(setActiveProcessStep) {
  gsap.utils.toArray('[data-process-step]').forEach((stepElement, index) => {
    ScrollTrigger.create({
      trigger: stepElement,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActiveProcessStep(index),
      onEnterBack: () => setActiveProcessStep(index),
    });
  });
}
