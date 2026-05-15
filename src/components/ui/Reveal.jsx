import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(currentRef, { opacity: 1, y: 0, scale: 1, clearProps: 'transform' });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.set(currentRef, { opacity: 0, y: 56, scale: 0.98 });
      gsap.to(currentRef, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.1,
        delay: delay / 1000,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: currentRef,
          start: 'top 84%',
          once: true,
        },
      });
    }, currentRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={`gsap-reveal ${className}`}>
      {children}
    </div>
  );
};
export { Reveal };
