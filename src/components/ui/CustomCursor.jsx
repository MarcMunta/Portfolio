import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const particleContainerRef = useRef(null);
  
  const target = useRef({ x: -100, y: -100, w: 10, h: 10, r: 999 });
  const current = useRef({ x: -100, y: -100, w: 10, h: 10, r: 999 });
  const requestRef = useRef();
  
  const isHoveringBtn = useRef(false);
  const currentInteractive = useRef(null);

  const spawnBubbles = (el, x, y) => {
    if (!el || !particleContainerRef.current) return;
    const rect = el.getBoundingClientRect();
    const area = rect.width * rect.height;
    const minBubbles = 4;
    const maxBubbles = 12;
    const weight = Math.min(Math.max(area / 1500, minBubbles), maxBubbles);
    const count = Math.floor(weight);

    for (let i = 0; i < count; i++) {
      const dot = document.createElement('div');
      const size = Math.random() * 5 + 3;
      const tx = (Math.random() - 0.5) * (70 + weight * 3);
      const ty = (Math.random() - 0.5) * (70 + weight * 3);
      const dur = Math.random() * 0.3 + 0.3;
      dot.className = 'portfolio-cursor-particle fixed bg-white rounded-full pointer-events-none z-[99] mix-blend-difference hidden md:block';
      dot.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px;--tx:${tx}px;--ty:${ty}px;animation:bubble-pop ${dur}s cubic-bezier(0.16,1,0.3,1) forwards`;
      particleContainerRef.current.appendChild(dot);
      setTimeout(() => dot.remove(), 800);
    }
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      // Usamos '.cursor-morph' estrictamente solo para botones reales, links y tabs. 
      // Ignora tarjetas grandes para no hacer un hover masivo blanco.
      const targetEl = e.target;
      const interactiveEl =
        targetEl instanceof Element ? targetEl.closest('.cursor-morph') : null;

      if (interactiveEl) {
        if (currentInteractive.current !== interactiveEl) {
          currentInteractive.current = interactiveEl;
          isHoveringBtn.current = true;
        }
      } else {
        if (isHoveringBtn.current) {
          spawnBubbles(currentInteractive.current, e.clientX, e.clientY);
          isHoveringBtn.current = false;
          currentInteractive.current = null;
        }
        target.current.x = e.clientX - 5;
        target.current.y = e.clientY - 5;
        target.current.w = 10;
        target.current.h = 10;
        target.current.r = 999; 
      }
    };

    const updatePhysics = () => {
      if (isHoveringBtn.current && currentInteractive.current) {
        // Al calcular en requestAnimationFrame, se mantiene pegado aunque hagas scroll con la rueda.
        const rect = currentInteractive.current.getBoundingClientRect();
        const style = window.getComputedStyle(currentInteractive.current);
        const rx = parseInt(style.borderRadius) || 12;
        const padding = 12; 

        target.current.x = rect.left - padding/2;
        target.current.y = rect.top - padding/2;
        target.current.w = rect.width + padding;
        target.current.h = rect.height + padding;
        target.current.r = rx === 0 ? 12 : rx;
      }

      // Salto rápido al entrar, suavidad al salir.
      const lerpFactor = isHoveringBtn.current ? 0.4 : 0.25; 
      
      current.current.x += (target.current.x - current.current.x) * lerpFactor;
      current.current.y += (target.current.y - current.current.y) * lerpFactor;
      current.current.w += (target.current.w - current.current.w) * lerpFactor;
      current.current.h += (target.current.h - current.current.h) * lerpFactor;
      current.current.r += (target.current.r - current.current.r) * lerpFactor;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
        cursorRef.current.style.width = `${current.current.w}px`;
        cursorRef.current.style.height = `${current.current.h}px`;
        cursorRef.current.style.borderRadius = `${current.current.r}px`;
      }
      requestRef.current = requestAnimationFrame(updatePhysics);
    };

    window.addEventListener('mousemove', onMouseMove);
    requestRef.current = requestAnimationFrame(updatePhysics);
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="portfolio-cursor fixed top-0 left-0 pointer-events-none z-[100] hidden md:block bg-white mix-blend-difference shadow-[0_0_15px_rgba(255,255,255,0.4)]"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
      <div ref={particleContainerRef} />
    </>
  );
};
export { CustomCursor };
