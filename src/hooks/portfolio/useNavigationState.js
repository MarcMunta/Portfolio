import { useCallback, useEffect, useRef, useState } from 'react';

import { SECTION_IDS } from '../../lib/portfolio/constants';
import { gsap } from '../../lib/portfolio/gsap';

export function useNavigationState() {
  const [showNav, setShowNav] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [clickedNav, setClickedNav] = useState(null);

  const lastScrollY = useRef(0);
  const navTimeoutRef = useRef(null);
  const clickTimeoutRef = useRef(null);
  const mouseInHoverZone = useRef(false);

  const scrollToSection = useCallback((section, event) => {
    if (event) event.preventDefault();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (section === 'hero') {
      if (prefersReducedMotion) {
        window.scrollTo({ top: 0, behavior: 'auto' });
      } else {
        gsap.to(window, { duration: 1.1, ease: 'power3.inOut', scrollTo: 0 });
      }

      return;
    }

    const target = document.getElementById(section);
    if (!target) return;

    if (prefersReducedMotion) {
      target.scrollIntoView({ behavior: 'auto', block: 'start' });
      return;
    }

    gsap.to(window, {
      duration: 1.1,
      ease: 'power3.inOut',
      scrollTo: {
        y: target,
        offsetY: section === 'projects' ? 0 : 95,
      },
    });
  }, []);

  const handleNavClick = useCallback(
    (section, event) => {
      setClickedNav(section);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = setTimeout(() => setClickedNav(null), 300);
      scrollToSection(section, event);
    },
    [scrollToSection]
  );

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          if (!mouseInHoverZone.current) setShowNav(false);
        } else {
          if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
          setShowNav(true);
        }

        lastScrollY.current = currentScrollY;

        const activationLine = window.innerHeight * 0.4;
        let nearestSection = 'hero';
        let nearestDistance = Number.POSITIVE_INFINITY;

        for (const section of SECTION_IDS) {
          const element = document.getElementById(section);
          if (!element) continue;

          const rect = element.getBoundingClientRect();
          if (rect.top <= activationLine && rect.bottom > activationLine) {
            setActiveSection(section);
            nearestSection = null;
            break;
          }

          const distance = Math.abs(rect.top - activationLine);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestSection = section;
          }
        }

        if (nearestSection) setActiveSection(nearestSection);

        ticking = false;
      });

      ticking = true;
    };

    const handleMouseMove = (event) => {
      const inZone = event.clientY < 90;

      if (inZone && !mouseInHoverZone.current) {
        mouseInHoverZone.current = true;
        setShowNav(true);
        if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
        return;
      }

      if (!inZone && mouseInHoverZone.current) {
        mouseInHoverZone.current = false;
        if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
        navTimeoutRef.current = setTimeout(() => {
          if (window.scrollY > 100) setShowNav(false);
        }, 600);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  return {
    showNav,
    activeSection,
    clickedNav,
    handleNavClick,
    scrollToSection,
  };
}
