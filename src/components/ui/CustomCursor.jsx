import React, { useEffect, useRef } from 'react';

const DEFAULT_CURSOR_SIZE = 16;
const CURSOR_PADDING = 10;
const INTERACTIVE_SELECTOR = 'a, button, [data-cursor-morph], [data-cursor-preserve-color]';

const preservesColor = (element) => element?.hasAttribute('data-cursor-preserve-color') ?? false;

export function CustomCursor() {
  const cursorRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine) and (min-width: 769px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!finePointer.matches || reducedMotion.matches || !cursorRef.current) return undefined;

    const root = document.documentElement;
    const cursor = cursorRef.current;
    const target = { x: -80, y: -80, width: DEFAULT_CURSOR_SIZE, height: DEFAULT_CURSOR_SIZE, radius: 999 };
    const current = { ...target };
    let frameId = 0;
    let activeElement = null;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;

    const setDefaultTarget = (x, y) => {
      target.x = x - DEFAULT_CURSOR_SIZE / 2;
      target.y = y - DEFAULT_CURSOR_SIZE / 2;
      target.width = DEFAULT_CURSOR_SIZE;
      target.height = DEFAULT_CURSOR_SIZE;
      target.radius = 999;
    };

    const spawnBubbles = (x, y, amount = 6, preserveColor = false) => {
      if (!particlesRef.current) return;

      for (let index = 0; index < amount; index += 1) {
        const bubble = document.createElement('span');
        const angle = (Math.PI * 2 * index) / amount + Math.random() * 0.35;
        const distance = 22 + Math.random() * 38;
        const size = 3 + Math.random() * 6;

        bubble.className = `cursor-bubble-particle${preserveColor ? ' is-color-preserving' : ''}`;
        bubble.style.cssText = [
          `left:${x}px`,
          `top:${y}px`,
          `width:${size}px`,
          `height:${size}px`,
          `--bubble-x:${Math.cos(angle) * distance}px`,
          `--bubble-y:${Math.sin(angle) * distance}px`,
          `--bubble-rotate:${Math.round(Math.random() * 120 - 60)}deg`,
        ].join(';');

        particlesRef.current.appendChild(bubble);
        bubble.addEventListener('animationend', () => bubble.remove(), { once: true });
      }
    };

    const handlePointerMove = (event) => {
      if (event.pointerType && event.pointerType !== 'mouse') return;

      pointerX = event.clientX;
      pointerY = event.clientY;
      root.classList.add('custom-cursor-active');

      const nextInteractive = event.target instanceof Element
        ? event.target.closest(INTERACTIVE_SELECTOR)
        : null;

      if (activeElement && !nextInteractive) {
        spawnBubbles(event.clientX, event.clientY, 5, preservesColor(activeElement));
      }
      activeElement = nextInteractive;
      cursor.classList.toggle('is-color-preserving', preservesColor(activeElement));

      if (!activeElement) setDefaultTarget(event.clientX, event.clientY);
    };

    const handlePointerDown = (event) => {
      if (event.pointerType !== 'mouse') return;

      const pressedInteractive = event.target instanceof Element
        ? event.target.closest(INTERACTIVE_SELECTOR)
        : null;

      spawnBubbles(event.clientX, event.clientY, 8, preservesColor(pressedInteractive));
    };

    const handlePointerLeave = () => {
      root.classList.remove('custom-cursor-active');
      activeElement = null;
      cursor.classList.remove('is-color-preserving');
    };

    const handleKeyboardNavigation = (event) => {
      if (event.key === 'Tab') root.classList.remove('custom-cursor-active');
    };

    const animate = () => {
      if (activeElement) {
        const rect = activeElement.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(activeElement);

        target.x = rect.left - CURSOR_PADDING / 2;
        target.y = rect.top - CURSOR_PADDING / 2;
        target.width = rect.width + CURSOR_PADDING;
        target.height = rect.height + CURSOR_PADDING;
        target.radius = Math.max(10, Number.parseFloat(computedStyle.borderRadius) || 10);
      }

      const ease = activeElement ? 0.28 : 0.2;
      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;
      current.width += (target.width - current.width) * ease;
      current.height += (target.height - current.height) * ease;
      current.radius += (target.radius - current.radius) * ease;

      cursor.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      cursor.style.width = `${current.width}px`;
      cursor.style.height = `${current.height}px`;
      cursor.style.borderRadius = `${current.radius}px`;
      root.style.setProperty('--pointer-x', `${pointerX}px`);
      root.style.setProperty('--pointer-y', `${pointerY}px`);

      frameId = window.requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);
    window.addEventListener('keydown', handleKeyboardNavigation);
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('keydown', handleKeyboardNavigation);
      root.classList.remove('custom-cursor-active');
      cursor.classList.remove('is-color-preserving');
      root.style.removeProperty('--pointer-x');
      root.style.removeProperty('--pointer-y');
      particlesRef.current?.replaceChildren();
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="portfolio-cursor" aria-hidden="true">
        <span />
      </div>
      <div ref={particlesRef} className="cursor-particle-layer" aria-hidden="true" />
    </>
  );
}
