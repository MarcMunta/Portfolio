import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MagneticElement = ({ children, className = "", inline = false, strength = 0.1, spring = 'cubic-bezier(0.2, 0.8, 0.2, 1)' }) => {
  const ref = useRef(null);
  const xToRef = useRef(null);
  const yToRef = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    xToRef.current = gsap.quickTo(ref.current, 'x', {
      duration: 0.45,
      ease: 'power3.out',
    });
    yToRef.current = gsap.quickTo(ref.current, 'y', {
      duration: 0.45,
      ease: 'power3.out',
    });

    return () => {
      if (xToRef.current) xToRef.current(0);
      if (yToRef.current) yToRef.current(0);
    };
  }, []);

  const handleMouse = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const mx = (clientX - (left + width / 2)) * strength;
    const my = (clientY - (top + height / 2)) * strength;

    if (xToRef.current && yToRef.current) {
      xToRef.current(mx);
      yToRef.current(my);
      return;
    }

    ref.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
    ref.current.style.transition = 'transform 0.1s linear';
  };

  const reset = () => {
    if (!ref.current) return;

    if (xToRef.current && yToRef.current) {
      xToRef.current(0);
      yToRef.current(0);
      return;
    }

    ref.current.style.transform = 'translate3d(0, 0, 0)';
    ref.current.style.transition = `transform 1s ${spring}`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={`${inline ? 'inline-flex' : 'flex'} ${className}`}
    >
      {children}
    </div>
  );
};
export { MagneticElement };
