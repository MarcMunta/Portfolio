import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { STAR_POINTS } from '../../data/constants';

const BackgroundEffects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const ctx = gsap.context(() => {
      const parallaxElements = gsap.utils.toArray('[data-parallax]');

      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax') || '0') || 0;
        const rotationFactor = parseFloat(el.getAttribute('data-rotate') || '0') || 0;

        gsap.to(el, {
          yPercent: speed * 120,
          rotation: rotationFactor ? rotationFactor * 120 : 0,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="grid-bg" data-parallax="0.05" />
      <div className="starfield" aria-hidden="true">
        {STAR_POINTS.map((star) => (
          <span
            key={`${star.top}-${star.left}`}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size + 0.35}px`,
              height: `${star.size + 0.35}px`,
              '--star-opacity': Math.min(star.opacity + 0.15, 0.56),
              '--twinkle-dur': `${star.duration}s`,
              '--twinkle-delay': `${star.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="comet-wrapper">
        <div className="comet comet-1"></div>
        <div className="comet comet-2"></div>
        <div className="comet comet-3"></div>
        <div className="comet comet-4"></div>
      </div>
      <div className="absolute w-[45vw] h-[45vw] rounded-full bg-blue-600/10 blur-[130px] mix-blend-screen orb-breath" style={{ top: '15%', right: '-15%' }} data-parallax="-0.1" />
      <div className="absolute w-[55vw] h-[55vw] rounded-full bg-purple-600/5 blur-[150px] mix-blend-screen orb-breath" style={{ bottom: '-15%', left: '-15%', animationDelay: '2s' }} data-parallax="-0.05" />

      <svg className="absolute opacity-10 stroke-white/50 fill-none anim-float" style={{ top: '15%', left: '10%', width: '120px', height: '120px' }} viewBox="0 0 100 100" data-parallax="-0.12" data-rotate="0.05">
        <circle cx="20" cy="50" r="3" fill="rgba(255,255,255,0.5)" />
        <circle cx="80" cy="20" r="2" fill="rgba(255,255,255,0.5)" />
        <circle cx="60" cy="80" r="4" fill="rgba(255,255,255,0.5)" />
        <path d="M20 50 L80 20 L60 80 Z" strokeWidth="0.5" strokeDasharray="3 3" />
      </svg>
      <svg className="absolute opacity-[0.04] stroke-white fill-none anim-float-rev" style={{ top: '55%', right: '5%', width: '250px', height: '250px' }} viewBox="0 0 100 100" data-parallax="-0.08" data-rotate="-0.03">
        <circle cx="50" cy="50" r="45" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="35" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="50" cy="50" r="25" strokeWidth="0.5" opacity="0.5" />
        <line x1="50" y1="0" x2="50" y2="100" strokeWidth="0.5" opacity="0.3" />
        <line x1="0" y1="50" x2="100" y2="50" strokeWidth="0.5" opacity="0.3" />
      </svg>
      <svg className="absolute opacity-10 stroke-blue-400/40 fill-none anim-float" style={{ top: '80%', left: '15%', width: '150px', height: '60px' }} viewBox="0 0 150 60" data-parallax="-0.15">
        <path d="M0 30 Q 37.5 5 75 30 T 150 30" strokeWidth="1" />
        <path d="M0 40 Q 37.5 15 75 40 T 150 40" strokeWidth="0.5" opacity="0.6" />
        <path d="M0 50 Q 37.5 25 75 50 T 150 50" strokeWidth="0.25" opacity="0.3" />
      </svg>
      
      <div className="absolute w-1.5 h-1.5 rounded-full bg-blue-300/60 anim-pulse" style={{ top: '40%', right: '25%' }} data-parallax="-0.25" />
      <div className="absolute w-2 h-2 rounded-full bg-purple-300/50 anim-pulse" style={{ top: '75%', left: '35%', animationDelay: '1.5s' }} data-parallax="-0.18" />
      <div className="absolute w-1 h-1 rounded-full bg-white/70 anim-pulse" style={{ top: '25%', left: '45%', animationDelay: '3s' }} data-parallax="-0.3" />
    </div>
  );
};
export { BackgroundEffects };
