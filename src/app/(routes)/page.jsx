'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  ArrowUpRight, 
  X,
  FileText,
  Smartphone,
  Terminal,
  Layers,
  Compass,
  PenTool,
  Code2,
  Rocket,
  Briefcase
} from 'lucide-react';

// --- ESTILOS GLOBALES Y ANIMACIONES COMPLEJAS ---
const globalStyles = `
  html {
    scroll-behavior: smooth;
  }

  :root {
    --bg-color: #030303;
    --card-bg: #080808;
    --border-color: rgba(255, 255, 255, 0.05);
  }

  body {
    background-color: var(--bg-color);
    color: #ffffff;
    font-family: 'Plus Jakarta Sans', sans-serif;
    overflow-x: hidden;
    cursor: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .font-display { 
    font-family: 'Space Grotesk', sans-serif; 
    letter-spacing: -0.03em;
  }

  ::selection { background: rgba(255, 255, 255, 0.2); color: white; }

  /* Scrollbar Suavizado */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #000; }
  ::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }

  /* Malla Animada de Fondo */
  .grid-bg {
    position: fixed;
    inset: 0;
    background-size: 120px 120px;
    background-image: linear-gradient(to right, rgba(255,255,255,0.015) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.015) 1px, transparent 1px);
    mask-image: radial-gradient(ellipse at center, black 20%, transparent 80%);
    pointer-events: none;
    z-index: 0;
  }

  /* Gradientes de Texto */
  .text-gradient {
    background: linear-gradient(135deg, #ffffff 0%, #71717a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .text-gradient-blue {
    background: linear-gradient(135deg, #60a5fa, #3b82f6, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Efecto de Brillo Premium para el Nombre */
  .name-shimmer {
    background: linear-gradient(
      to right,
      #ffffff 20%,
      #60a5fa 40%,
      #c084fc 60%,
      #ffffff 80%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    background-size: 200% auto;
    animation: shine 5s linear infinite;
  }
  @keyframes shine {
    to { background-position: 200% center; }
  }

  /* Animaciones de Carga Inicial (Hero) */
  @keyframes hero-reveal {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-hero-1 { animation: hero-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; animation-delay: 0.1s; }
  .animate-hero-2 { animation: hero-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; animation-delay: 0.25s; }
  .animate-hero-3 { animation: hero-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; animation-delay: 0.4s; }
  .animate-hero-4 { animation: hero-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; animation-delay: 0.55s; }
  .animate-hero-5 { animation: hero-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; animation-delay: 0.7s; }

  /* Tarjetas Bento */
  .bento-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 2rem;
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    width: 100%;
    height: 100%;
  }
  .bento-card:hover {
    border-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255,255,255,0.05);
    transform: translateY(-4px);
  }
  
  .bento-card::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 2rem;
    box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }

  /* Nodo de LÃ­nea de Tiempo */
  .timeline-node {
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .group:hover .timeline-node {
    background-color: #3b82f6;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
    transform: scale(1.5);
  }

  /* InteracciÃ³n de PestaÃ±as del Proceso */
  .process-tab {
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .process-tab.active {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateX(10px);
  }

  /* Animaciones SVG Flotantes */
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(2deg); }
  }
  @keyframes float-reverse {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(15px) rotate(-2deg); }
  }
  @keyframes pulse-glow {
    0%, 100% { opacity: 0.1; transform: scale(1); filter: blur(2px); }
    50% { opacity: 0.5; transform: scale(1.3); filter: blur(4px); }
  }
  .anim-float { animation: float 10s ease-in-out infinite; }
  .anim-float-rev { animation: float-reverse 12s ease-in-out infinite; }
  .anim-pulse { animation: pulse-glow 5s ease-in-out infinite; }

  /* Orbes Respirando */
  @keyframes breath {
    0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.4; }
    50% { transform: scale(1.1) translate(20px, -20px); opacity: 0.7; }
  }
  .orb-breath { animation: breath 18s ease-in-out infinite; }

  /* Estrellas Fugaces / Cometas */
  .comet-wrapper {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    pointer-events: none;
    transform: rotate(35deg);
    z-index: 1;
  }
  .comet {
    position: absolute;
    height: 1.5px;
    background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,1));
    border-radius: 999px;
    filter: drop-shadow(4px 0 8px rgba(255,255,255,0.6));
    animation: shooting-star linear infinite;
    opacity: 0;
  }
  @keyframes shooting-star {
    0% { transform: translateX(0); opacity: 0; }
    5% { opacity: 1; }
    15% { transform: translateX(120vw); opacity: 0; }
    100% { transform: translateX(120vw); opacity: 0; }
  }
  .comet-1 { top: 15%; left: -20%; width: 120px; animation-duration: 12s; animation-delay: 2s; }
  .comet-2 { top: 40%; left: -10%; width: 180px; animation-duration: 18s; animation-delay: 8s; }
  .comet-3 { top: -10%; left: 10%; width: 90px; animation-duration: 15s; animation-delay: 14s; }
  .comet-4 { top: 70%; left: -30%; width: 220px; animation-duration: 22s; animation-delay: 5s; }

  /* Marquee */
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .animate-marquee { animation: marquee 35s linear infinite; width: max-content; }

  /* Fix de Apilamiento de Proyectos */
  .sticky-card-wrapper {
    position: sticky;
    will-change: transform;
  }

  /* MUY IMPORTANTE: Evita que la burbuja parpadee o se pierda al pasar por el texto de los botones */
  .cursor-morph * {
    pointer-events: none !important;
  }

  /* AnimaciÃ³n de Burbuja de Slime */
  @keyframes bubble-pop {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
    100% { transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0); opacity: 0; }
  }

  /* AnimaciÃ³n de Clic en el MenÃº */
  @keyframes nav-click {
    0% { transform: scale(1); }
    50% { transform: scale(0.9); }
    100% { transform: scale(1); }
  }
  .nav-clicked {
    animation: nav-click 0.3s ease;
  }
`;

// --- COMPONENTES AUXILIARES ---

// 1. Cursor MagnÃ©tico (Morphing sin bugs y anclado al Scroll) â€" partÃ­culas via DOM directo
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
      dot.className = 'fixed bg-white rounded-full pointer-events-none z-[99] mix-blend-difference hidden md:block';
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
        // Al calcular en el loop de requestAnimationFrame, se mantiene pegado aunque hagas scroll con la rueda del ratÃ³n
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

      // Salto rÃ¡pido al entrar, suavidad al salir
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
        className="fixed top-0 left-0 pointer-events-none z-[100] hidden md:block bg-white mix-blend-difference shadow-[0_0_15px_rgba(255,255,255,0.4)]"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
      <div ref={particleContainerRef} />
    </>
  );
};

// 2. Elemento MagnÃ©tico â€" optimizado con useRef + DOM directo (sin re-renders)
const MagneticElement = ({ children, className = "", inline = false, strength = 0.1, spring = 'cubic-bezier(0.2, 0.8, 0.2, 1)' }) => {
  const ref = useRef(null);

  const handleMouse = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const mx = (clientX - (left + width / 2)) * strength;
    const my = (clientY - (top + height / 2)) * strength;
    ref.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
    ref.current.style.transition = 'transform 0.1s linear';
  };

  const reset = () => {
    if (!ref.current) return;
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

// 3. Fondo Reactivo con Orbes y GeometrÃ­a â€" optimizado con useRef + DOM directo (sin re-renders)
const BackgroundEffects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sy = window.scrollY;
          const container = containerRef.current;
          if (!container) { ticking = false; return; }
          const els = container.querySelectorAll('[data-parallax]');
          els.forEach(el => {
            const speed = parseFloat(el.dataset.parallax) || 0;
            const rot = el.dataset.rotate ? parseFloat(el.dataset.rotate) * sy : 0;
            el.style.transform = rot
              ? `translateY(${sy * speed}px) rotate(${rot}deg)`
              : `translateY(${sy * speed}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="grid-bg" data-parallax="0.05" />
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

// 4. Scroll Reveal
const Reveal = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (currentRef) observer.unobserve(currentRef);
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: "1200ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-[0.98]'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const FlagIcon = ({ code }) => {
  if (code === 'ca') {
    return (
      <svg viewBox="0 0 20 14" className="w-5 h-3.5 rounded-[2px] border border-white/20 overflow-hidden" aria-hidden="true">
        <rect width="20" height="14" fill="#f4c430" />
        <rect y="2" width="20" height="2" fill="#c8102e" />
        <rect y="6" width="20" height="2" fill="#c8102e" />
        <rect y="10" width="20" height="2" fill="#c8102e" />
      </svg>
    );
  }

  if (code === 'es') {
    return (
      <svg viewBox="0 0 20 14" className="w-5 h-3.5 rounded-[2px] border border-white/20 overflow-hidden" aria-hidden="true">
        <rect width="20" height="14" fill="#aa151b" />
        <rect y="3" width="20" height="8" fill="#f1bf00" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 20 14" className="w-5 h-3.5 rounded-[2px] border border-white/20 overflow-hidden" aria-hidden="true">
      <rect width="20" height="14" fill="#ffffff" />
      <rect y="0" width="20" height="1.08" fill="#b22234" />
      <rect y="2.16" width="20" height="1.08" fill="#b22234" />
      <rect y="4.32" width="20" height="1.08" fill="#b22234" />
      <rect y="6.48" width="20" height="1.08" fill="#b22234" />
      <rect y="8.64" width="20" height="1.08" fill="#b22234" />
      <rect y="10.8" width="20" height="1.08" fill="#b22234" />
      <rect y="12.96" width="20" height="1.04" fill="#b22234" />
      <rect width="9" height="7.56" fill="#3c3b6e" />
      <circle cx="1.4" cy="1.4" r="0.32" fill="#ffffff" />
      <circle cx="3.1" cy="1.4" r="0.32" fill="#ffffff" />
      <circle cx="4.8" cy="1.4" r="0.32" fill="#ffffff" />
      <circle cx="6.5" cy="1.4" r="0.32" fill="#ffffff" />
      <circle cx="8.2" cy="1.4" r="0.32" fill="#ffffff" />
      <circle cx="2.25" cy="2.55" r="0.32" fill="#ffffff" />
      <circle cx="3.95" cy="2.55" r="0.32" fill="#ffffff" />
      <circle cx="5.65" cy="2.55" r="0.32" fill="#ffffff" />
      <circle cx="7.35" cy="2.55" r="0.32" fill="#ffffff" />
      <circle cx="1.4" cy="3.7" r="0.32" fill="#ffffff" />
      <circle cx="3.1" cy="3.7" r="0.32" fill="#ffffff" />
      <circle cx="4.8" cy="3.7" r="0.32" fill="#ffffff" />
      <circle cx="6.5" cy="3.7" r="0.32" fill="#ffffff" />
      <circle cx="8.2" cy="3.7" r="0.32" fill="#ffffff" />
      <circle cx="2.25" cy="4.85" r="0.32" fill="#ffffff" />
      <circle cx="3.95" cy="4.85" r="0.32" fill="#ffffff" />
      <circle cx="5.65" cy="4.85" r="0.32" fill="#ffffff" />
      <circle cx="7.35" cy="4.85" r="0.32" fill="#ffffff" />
      <circle cx="1.4" cy="6" r="0.32" fill="#ffffff" />
      <circle cx="3.1" cy="6" r="0.32" fill="#ffffff" />
      <circle cx="4.8" cy="6" r="0.32" fill="#ffffff" />
      <circle cx="6.5" cy="6" r="0.32" fill="#ffffff" />
      <circle cx="8.2" cy="6" r="0.32" fill="#ffffff" />
    </svg>
  );
};

// --- COMPONENTE PRINCIPAL (APP) ---
export default function App() {
  const [showNav, setShowNav] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [clickedNav, setClickedNav] = useState(null);
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [activePdfProjectId, setActivePdfProjectId] = useState(null);
  const [language, setLanguage] = useState('es');
  
  const lastScrollY = useRef(0);
  const navTimeout = useRef(null);

  const closePdfModal = () => setActivePdfProjectId(null);

  // LÃ³gica de ScrollSpy y Ocultar Navbar
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setShowNav(false); 
          } else {
            setShowNav(true);  
          }
          lastScrollY.current = currentScrollY;

          const sections = ['hero', 'expertise', 'process', 'experience', 'projects', 'contact'];
          for (const section of sections.reverse()) {
            const el = document.getElementById(section);
            if (el && currentScrollY >= el.offsetTop - window.innerHeight / 2.5) {
              setActiveSection(section);
              break;
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e) => {
      if (e.clientY < 120) {
        setShowNav(true);
        if (navTimeout.current) clearTimeout(navTimeout.current);
        navTimeout.current = setTimeout(() => {
          if (window.scrollY > 100) setShowNav(false);
        }, 4000); 
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (navTimeout.current) clearTimeout(navTimeout.current);
    };
  }, []);

  useEffect(() => {
    const onEsc = (event) => {
      if (event.key === 'Escape') {
        closePdfModal();
      }
    };

    if (activePdfProjectId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onEsc);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onEsc);
    };
  }, [activePdfProjectId]);

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('portfolio-language');
    if (storedLanguage && ['ca', 'es', 'en'].includes(storedLanguage)) {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const handleNavClick = (section) => {
    setClickedNav(section);
    setTimeout(() => setClickedNav(null), 300);
  };

  const languageOptions = [
    { code: 'ca', label: 'Catala' },
    { code: 'es', label: 'Espanol' },
    { code: 'en', label: 'English' },
  ];

  const commonFullStack = [
    { name: "HTML5", color: "#E34F26" },
    { name: "CSS3", color: "#1572B6" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "React", color: "#61DAFB" },
    { name: "Node.js", color: "#339933" },
    { name: "PHP", color: "#777BB4" },
    { name: "Laravel", color: "#FF2D20" },
    { name: "Symfony", color: "#000000" },
    { name: "Java", color: "#ED8B00" },
    { name: "Python", color: "#3776AB" },
    { name: "Kotlin", color: "#7F52FF" },
    { name: "Dart", color: "#0175C2" },
    { name: "Flutter", color: "#02569B" },
    { name: "MySQL", color: "#4479A1" },
    { name: "MongoDB", color: "#47A248" },
    { name: "Git", color: "#F05032" },
    { name: "Unity", color: "#FFFFFF" },
    { name: "Mapbox", color: "#4264FB" },
    { name: "WordPress", color: "#21759B" },
    { name: "PrestaShop", color: "#DF0067" },
    { name: "Hostinger", color: "#673DE6" },
    { name: "pfSense", color: "#212121" },
    { name: "Ubuntu Server", color: "#E95420" },
    { name: "Windows Server", color: "#0078D6" },
  ];

  const contentByLanguage = {
    ca: {
      navItems: [
        { id: 'expertise', label: 'Especialitat' },
        { id: 'process', label: 'Proces' },
        { id: 'experience', label: 'Trajectoria' },
        { id: 'projects', label: 'Projectes' },
      ],
      labels: {
        goTo: 'Anar a',
        goToContact: 'Anar a contacte',
        talkButton: 'Parlar',
        switchLanguageTo: 'Canviar idioma a',
        available: 'Disponible per a practiques i rol junior',
        viewProjects: 'Veure projectes reals',
        openPdfPreviewOf: 'Obrir vista previa PDF de',
        openProjectOf: 'Obrir projecte',
        openRepoOf: 'Obrir repositori de',
        pdfPreviewOf: 'Vista previa PDF de',
        openPdf: 'Obrir PDF',
        closePreview: 'Tancar vista previa',
      },
      hero: {
        introStart: 'Desenvolupador',
        introHighlight: 'Web i Multiplataforma',
        introEnd: 'en formacio a STUCOM.',
        secondStart: 'Connecto documentacio tecnica, UI/UX i desenvolupament en',
        secondHighlight: 'React, WordPress i Flutter',
        scroll: 'Scroll',
      },
      expertise: {
        titleStart: 'El meu Stack',
        titleAccent: 'Tecnic.',
        uiuxTitle: 'Disseny UI/UX',
        uiuxDesc: 'Interficies clares, prototips d alta fidelitat i documentacio funcional per a cada lliurament.',
        frontendTitle: 'Frontend',
        frontendDesc: 'Arquitectura web mantenible amb React, WordPress i CSS modern.',
        mobileTitle: 'Mobile',
        mobileDesc: 'Aplicacions multiplataforma amb focus en rendiment i UX.',
        infraTitle: 'Infra i Documentacio',
        infraDesc: 'Experiencia en xarxes i sistemes: pfSense, Active Directory, DHCP/DNS i documentacio tecnica completa.',
      },
      process: {
        titleStart: 'El',
        titleAccent: 'Proces.',
        desc: 'Metodologia orientada a construir interficies utils i lliuraments mantenibles.',
        steps: [
          { title: 'Descobriment', desc: 'Analisi de requisits, fluxos dusuari i arquitectura dinformacio abans de construir.' },
          { title: 'Disseny UI/UX', desc: 'Sistemes visuals d alta fidelitat centrats en claredat, accessibilitat i consistencia.' },
          { title: 'Desenvolupament', desc: 'Construccio web i multiplataforma amb React, Flutter i codi mantenible.' },
          { title: 'Lliurament', desc: 'Optimitzacio, documentacio tecnica i desplegament amb focus en continuitat.' },
        ],
      },
      experienceSection: {
        titleStart: 'Evolucio',
        titleAccent: 'Professional.',
        desc: 'Erasmus + practiques, mes de 850 hores.',
      },
      projectsSection: {
        titleTop: 'Projectes',
        titleBottom: 'Destacats.',
        desc: 'Quatre projectes clau: aquest portfolio interactiu, un proxim projecte web del cole, una entrega web rapida i un cas full stack amb PDF.',
      },
      contact: {
        titleTop: 'PARLEM',
        titleStart: 'DEL TEU',
        titleAccent: 'PROJECTE.',
        desc: 'Estic obert a practiques i oportunitats junior en desenvolupament web i apps multiplataforma.',
      },
      footer: {
        copyright: 'Dissenyat i desenvolupat per mi.',
        githubAria: 'GitHub de Marc Muntane',
        linkedinAria: 'LinkedIn de Marc Muntane',
      },
      experienceItems: [
        {
          year: '2026 - 2027',
          role: 'Pla destudi dIA',
          company: 'Formacio de tardes + feina activa',
          desc: 'Formacio en intel.ligencia artificial en horari de tarda, mantenint activitat laboral durant el periode.',
          align: 'left',
        },
        {
          year: '2025 - 2026',
          role: 'Erasmus+ - M5 Studios (Irlanda)',
          company: 'Flutter i frontend',
          desc: 'Mes de 350 hores creant apps multiplataforma amb Flutter i integracio de Mapbox.',
          align: 'right',
        },
        {
          year: '2023 - 2025',
          role: 'Practiques DAW - Viascooter',
          company: 'WordPress, PrestaShop, Shopify',
          desc: 'Manteniment web, gestio de hosting Nominalia, comptes de correu i suport a clients en entorn real.',
          align: 'left',
        },
        {
          year: '2022 - 2023',
          role: 'Practiques SMX - Gestinet',
          company: 'Suport IT',
          desc: 'Mes de 340 hores en suport tecnic: hardware, servidors, impressores i Active Directory per a pimes locals.',
          align: 'right',
        },
        {
          year: '2021 - 2026',
          role: 'Formacio tecnica a STUCOM',
          company: 'SMX, DAW i DAM',
          desc: 'Recorregut formatiu en sistemes, desenvolupament web i aplicacions multimedia amb enfocament practic.',
          align: 'left',
        },
      ],
      projects: [
        {
          id: 1,
          title: 'Portfolio Interactiu',
          category: 'Projecte Personal',
          image: 'images/projects/firewall-cover.jpg',
          tags: ['React', 'Next.js', 'Tailwind CSS'],
          year: '2026',
          duration: 'Projecte personal · actualitzat el 2026 i en evolucio constant',
          summary: 'Aquest portfolio: cursor personalitzat amb particules, animacions de scroll reactives, fons interactiu amb SVG i cometes, targetes magnetiques i desplegament automatic a GitHub Pages.',
          url: 'https://github.com/MarcMunta/Portfolio',
          fullStack: commonFullStack,
        },
        {
          id: 2,
          title: 'Reptes Socials',
          category: 'Web · Proxim',
          image: 'images/projects/sostenibilidad-actions.jpg',
          tags: ['HTML', 'CSS', 'JavaScript'],
          year: '2026',
          duration: 'Proxim projecte · objectiu: 1 setmana · treball del cole',
          summary: 'Seguent lliurament academic centrat en reptes socials: desenvolupament web en una setmana amb focus en claredat, responsive i entrega completa.',
          url: 'https://marcmunta.github.io/Retos-Sociales/',
          repoUrl: 'https://github.com/MarcMunta/Retos-Sociales',
        },
        {
          id: 3,
          title: 'Sostenibilitat',
          category: 'Web',
          image: 'images/projects/sostenibilidad-cover.jpg',
          tags: ['HTML', 'CSS', 'JavaScript'],
          year: '2025',
          duration: 'Completat en 1 setmana · treball del grau superior',
          summary: 'Landing informativa sobre habits sostenibles, dissenyada i desenvolupada en una setmana amb focus en claredat de contingut, responsive i accessibilitat base.',
          url: 'https://marcmunta.github.io/Sostenibilidad_v1/',
          compactTitle: true,
        },
        {
          id: 4,
          title: 'Pr08 Front-end & Back-end',
          category: 'Full Stack',
          image: 'images/projects/curriculum-cover.jpg',
          tags: ['Angular', 'PHP', 'API', 'Auth'],
          year: '2024',
          duration: 'Practica tecnica completa',
          summary: 'Projecte integrat amb frontend en Angular, backend en PHP amb endpoints, autenticacio amb localStorage i integracio frontend-backend sobre API.',
          pdfPath: 'docs/pr08-front-end-back-end.pdf',
          stackIcons: [
            { label: 'Angular Forms & Login', icon: <Layers size={14} /> },
            { label: 'Llistat & UI', icon: <Smartphone size={14} /> },
            { label: 'Backend PHP Endpoints', icon: <Terminal size={14} /> },
            { label: 'Auth + localStorage', icon: <Briefcase size={14} /> },
            { label: 'Integracio API', icon: <Rocket size={14} /> },
            { label: 'Flux Front/Back', icon: <Code2 size={14} /> },
          ],
        },
      ],
    },
    es: {
      navItems: [
        { id: 'expertise', label: 'Especialidad' },
        { id: 'process', label: 'Proceso' },
        { id: 'experience', label: 'Trayectoria' },
        { id: 'projects', label: 'Proyectos' },
      ],
      labels: {
        goTo: 'Ir a',
        goToContact: 'Ir a contacto',
        talkButton: 'Hablar',
        switchLanguageTo: 'Cambiar idioma a',
        available: 'Disponible para practicas y rol junior',
        viewProjects: 'Ver proyectos reales',
        openPdfPreviewOf: 'Abrir vista previa PDF de',
        openProjectOf: 'Abrir proyecto',
        openRepoOf: 'Abrir repositorio de',
        pdfPreviewOf: 'Vista previa PDF de',
        openPdf: 'Abrir PDF',
        closePreview: 'Cerrar vista previa',
      },
      hero: {
        introStart: 'Desarrollador',
        introHighlight: 'Web y Multiplataforma',
        introEnd: 'en formacion en STUCOM.',
        secondStart: 'Conecto documentacion tecnica, UI/UX y desarrollo en',
        secondHighlight: 'React, WordPress y Flutter',
        scroll: 'Scroll',
      },
      expertise: {
        titleStart: 'Mi Stack',
        titleAccent: 'Tecnico.',
        uiuxTitle: 'Diseno UI/UX',
        uiuxDesc: 'Interfaces claras, prototipos de alta fidelidad y documentacion funcional para cada entrega.',
        frontendTitle: 'Frontend',
        frontendDesc: 'Arquitectura web mantenible con React, WordPress y CSS moderno.',
        mobileTitle: 'Mobile',
        mobileDesc: 'Aplicaciones multiplataforma con foco en rendimiento y UX.',
        infraTitle: 'Infra y Documentacion',
        infraDesc: 'Experiencia en redes y sistemas: pfSense, Active Directory, DHCP/DNS y documentacion tecnica completa.',
      },
      process: {
        titleStart: 'El',
        titleAccent: 'Proceso.',
        desc: 'Metodologia orientada a construir interfaces utiles y entregas mantenibles.',
        steps: [
          { title: 'Descubrimiento', desc: 'Analisis de requisitos, flujos de usuario y arquitectura de informacion antes de construir.' },
          { title: 'Diseno UI/UX', desc: 'Sistemas visuales de alta fidelidad centrados en claridad, accesibilidad y consistencia.' },
          { title: 'Desarrollo', desc: 'Construccion web y multiplataforma con React, Flutter y codigo mantenible.' },
          { title: 'Entrega', desc: 'Optimizacion, documentacion tecnica y despliegue con foco en continuidad.' },
        ],
      },
      experienceSection: {
        titleStart: 'Evolucion',
        titleAccent: 'Profesional.',
        desc: 'Erasmus + practicas, mas de 850 horas.',
      },
      projectsSection: {
        titleTop: 'Proyectos',
        titleBottom: 'Destacados.',
        desc: 'Cuatro proyectos clave: este portfolio interactivo, un proximo proyecto web del cole, una entrega web rapida y un caso full stack con PDF.',
      },
      contact: {
        titleTop: 'HABLEMOS',
        titleStart: 'DE TU',
        titleAccent: 'PROYECTO.',
        desc: 'Estoy abierto a practicas y oportunidades junior en desarrollo web y apps multiplataforma.',
      },
      footer: {
        copyright: 'Disenado y desarrollado por mi.',
        githubAria: 'GitHub de Marc Muntane',
        linkedinAria: 'LinkedIn de Marc Muntane',
      },
      experienceItems: [
        {
          year: '2026 - 2027',
          role: 'Plan de estudio de IA',
          company: 'Formacion de tardes + trabajo activo',
          desc: 'Formacion en inteligencia artificial en horario de tarde, manteniendo actividad laboral durante el periodo.',
          align: 'left',
        },
        {
          year: '2025 - 2026',
          role: 'Erasmus+ - M5 Studios (Irlanda)',
          company: 'Flutter y frontend',
          desc: 'Mas de 350 horas creando apps multiplataforma con Flutter e integracion de Mapbox, con foco en UI/UX y frontend.',
          align: 'right',
        },
        {
          year: '2023 - 2025',
          role: 'Practicas DAW - Viascooter',
          company: 'WordPress, PrestaShop, Shopify',
          desc: 'Mantenimiento web, gestion de hosting Nominalia, cuentas de correo y soporte a clientes en entorno real.',
          align: 'left',
        },
        {
          year: '2022 - 2023',
          role: 'Practicas SMX - Gestinet',
          company: 'Soporte IT',
          desc: 'Mas de 340 horas en soporte tecnico: hardware, servidores, impresoras y Active Directory para pymes locales.',
          align: 'right',
        },
        {
          year: '2021 - 2026',
          role: 'Formacion tecnica en STUCOM',
          company: 'SMX, DAW y DAM',
          desc: 'Recorrido formativo en sistemas, desarrollo web y aplicaciones multimedia con enfoque practico.',
          align: 'left',
        },
      ],
      projects: [
        {
          id: 1,
          title: 'Portfolio Interactivo',
          category: 'Proyecto Personal',
          image: 'images/projects/firewall-cover.jpg',
          tags: ['React', 'Next.js', 'Tailwind CSS'],
          year: '2026',
          duration: 'Proyecto personal · actualizado en 2026 y en evolucion constante',
          summary: 'Este portfolio: cursor personalizado con particulas, animaciones de scroll reactivas, fondo interactivo con SVG y cometas, cards magneticas y despliegue automatico en GitHub Pages.',
          url: 'https://github.com/MarcMunta/Portfolio',
          fullStack: commonFullStack,
        },
        {
          id: 2,
          title: 'Retos Sociales',
          category: 'Web · Proximo',
          image: 'images/projects/sostenibilidad-actions.jpg',
          tags: ['HTML', 'CSS', 'JavaScript'],
          year: '2026',
          duration: 'Proximo proyecto · objetivo: 1 semana · trabajo del cole',
          summary: 'Siguiente entrega academica centrada en retos sociales: desarrollo web en una semana, siguiendo una metodologia similar a Sostenibilidad con foco en claridad, responsive y entrega completa.',
          url: 'https://marcmunta.github.io/Retos-Sociales/',
          repoUrl: 'https://github.com/MarcMunta/Retos-Sociales',
        },
        {
          id: 3,
          title: 'Sostenibilidad',
          category: 'Web',
          image: 'images/projects/sostenibilidad-cover.jpg',
          tags: ['HTML', 'CSS', 'JavaScript'],
          year: '2025',
          duration: 'Completado en 1 semana · trabajo del grado superior',
          summary: 'Landing informativa sobre habitos sostenibles, disenada y desarrollada en una semana con enfoque en claridad de contenido, responsive y accesibilidad base.',
          url: 'https://marcmunta.github.io/Sostenibilidad_v1/',
          compactTitle: true,
        },
        {
          id: 4,
          title: 'Pr08 Front-end & Back-end',
          category: 'Full Stack',
          image: 'images/projects/curriculum-cover.jpg',
          tags: ['Angular', 'PHP', 'API', 'Auth'],
          year: '2024',
          duration: 'Practica tecnica completa',
          summary: 'Proyecto integrado con frontend en Angular (formularios, login, listado), backend en PHP con endpoints, autenticacion con localStorage e integracion frontend-backend sobre API.',
          pdfPath: 'docs/pr08-front-end-back-end.pdf',
          stackIcons: [
            { label: 'Angular Forms & Login', icon: <Layers size={14} /> },
            { label: 'Listado & UI', icon: <Smartphone size={14} /> },
            { label: 'Backend PHP Endpoints', icon: <Terminal size={14} /> },
            { label: 'Auth + localStorage', icon: <Briefcase size={14} /> },
            { label: 'Integracion API', icon: <Rocket size={14} /> },
            { label: 'Flujo Front/Back', icon: <Code2 size={14} /> },
          ],
        },
      ],
    },
    en: {
      navItems: [
        { id: 'expertise', label: 'Expertise' },
        { id: 'process', label: 'Process' },
        { id: 'experience', label: 'Journey' },
        { id: 'projects', label: 'Projects' },
      ],
      labels: {
        goTo: 'Go to',
        goToContact: 'Go to contact',
        talkButton: 'Talk',
        switchLanguageTo: 'Change language to',
        available: 'Open to internships and junior roles',
        viewProjects: 'View real projects',
        openPdfPreviewOf: 'Open PDF preview of',
        openProjectOf: 'Open project',
        openRepoOf: 'Open repository of',
        pdfPreviewOf: 'PDF preview of',
        openPdf: 'Open PDF',
        closePreview: 'Close preview',
      },
      hero: {
        introStart: 'Web and Cross-platform',
        introHighlight: 'Developer',
        introEnd: 'in training at STUCOM.',
        secondStart: 'I connect technical documentation, UI/UX, and development in',
        secondHighlight: 'React, WordPress, and Flutter',
        scroll: 'Scroll',
      },
      expertise: {
        titleStart: 'My Tech',
        titleAccent: 'Stack.',
        uiuxTitle: 'UI/UX Design',
        uiuxDesc: 'Clear interfaces, high-fidelity prototypes, and functional documentation for each delivery.',
        frontendTitle: 'Frontend',
        frontendDesc: 'Maintainable web architecture with React, WordPress, and modern CSS.',
        mobileTitle: 'Mobile',
        mobileDesc: 'Cross-platform applications focused on performance and UX.',
        infraTitle: 'Infra & Documentation',
        infraDesc: 'Experience in networks and systems: pfSense, Active Directory, DHCP/DNS, and full technical documentation.',
      },
      process: {
        titleStart: 'The',
        titleAccent: 'Process.',
        desc: 'A methodology focused on building useful interfaces and maintainable deliveries.',
        steps: [
          { title: 'Discovery', desc: 'Requirements analysis, user flows, and information architecture before building.' },
          { title: 'UI/UX Design', desc: 'High-fidelity visual systems focused on clarity, accessibility, and consistency.' },
          { title: 'Development', desc: 'Web and cross-platform implementation with React, Flutter, and maintainable code.' },
          { title: 'Delivery', desc: 'Optimization, technical documentation, and deployment focused on continuity.' },
        ],
      },
      experienceSection: {
        titleStart: 'Professional',
        titleAccent: 'Evolution.',
        desc: 'Erasmus + internships, over 850 hours.',
      },
      projectsSection: {
        titleTop: 'Featured',
        titleBottom: 'Projects.',
        desc: 'Four key projects: this interactive portfolio, an upcoming school web project, a one-week web delivery, and a full-stack case with PDF.',
      },
      contact: {
        titleTop: 'LET US',
        titleStart: 'TALK ABOUT',
        titleAccent: 'YOUR PROJECT.',
        desc: 'I am open to internships and junior opportunities in web development and cross-platform apps.',
      },
      footer: {
        copyright: 'Designed and developed by me.',
        githubAria: 'Marc Muntane GitHub',
        linkedinAria: 'Marc Muntane LinkedIn',
      },
      experienceItems: [
        {
          year: '2026 - 2027',
          role: 'AI Study Plan',
          company: 'Evening training + active work',
          desc: 'Artificial intelligence training in evening hours while keeping active work throughout the period.',
          align: 'left',
        },
        {
          year: '2025 - 2026',
          role: 'Erasmus+ - M5 Studios (Ireland)',
          company: 'Flutter and frontend',
          desc: 'Over 350 hours building cross-platform apps with Flutter and Mapbox integration, focused on UI/UX and frontend.',
          align: 'right',
        },
        {
          year: '2023 - 2025',
          role: 'DAW Internship - Viascooter',
          company: 'WordPress, PrestaShop, Shopify',
          desc: 'Web maintenance, Nominalia hosting management, email account handling, and client support in a real environment.',
          align: 'left',
        },
        {
          year: '2022 - 2023',
          role: 'SMX Internship - Gestinet',
          company: 'IT Support',
          desc: 'Over 340 hours in technical support: hardware, servers, printers, and Active Directory for local SMBs.',
          align: 'right',
        },
        {
          year: '2021 - 2026',
          role: 'Technical training at STUCOM',
          company: 'SMX, DAW and DAM',
          desc: 'Training journey in systems, web development, and multimedia applications with a practical approach.',
          align: 'left',
        },
      ],
      projects: [
        {
          id: 1,
          title: 'Interactive Portfolio',
          category: 'Personal Project',
          image: 'images/projects/firewall-cover.jpg',
          tags: ['React', 'Next.js', 'Tailwind CSS'],
          year: '2026',
          duration: 'Personal project · updated in 2026 and constantly evolving',
          summary: 'This portfolio: custom particle cursor, reactive scroll animations, interactive SVG/comet background, magnetic cards, and automatic deployment on GitHub Pages.',
          url: 'https://github.com/MarcMunta/Portfolio',
          fullStack: commonFullStack,
        },
        {
          id: 2,
          title: 'Social Challenges',
          category: 'Web · Upcoming',
          image: 'images/projects/sostenibilidad-actions.jpg',
          tags: ['HTML', 'CSS', 'JavaScript'],
          year: '2026',
          duration: 'Upcoming project · goal: 1 week · school assignment',
          summary: 'Next academic delivery focused on social challenges: one-week web development with emphasis on clarity, responsive behavior, and complete delivery.',
          url: 'https://marcmunta.github.io/Retos-Sociales/',
          repoUrl: 'https://github.com/MarcMunta/Retos-Sociales',
        },
        {
          id: 3,
          title: 'Sustainability',
          category: 'Web',
          image: 'images/projects/sostenibilidad-cover.jpg',
          tags: ['HTML', 'CSS', 'JavaScript'],
          year: '2025',
          duration: 'Completed in 1 week · higher-degree assignment',
          summary: 'Informative landing page about sustainable habits, designed and developed in one week with focus on content clarity, responsive layout, and base accessibility.',
          url: 'https://marcmunta.github.io/Sostenibilidad_v1/',
          compactTitle: true,
        },
        {
          id: 4,
          title: 'Pr08 Front-end & Back-end',
          category: 'Full Stack',
          image: 'images/projects/curriculum-cover.jpg',
          tags: ['Angular', 'PHP', 'API', 'Auth'],
          year: '2024',
          duration: 'Complete technical practice',
          summary: 'Integrated project with Angular frontend (forms, login, list), PHP backend endpoints, localStorage auth, and frontend-backend API integration.',
          pdfPath: 'docs/pr08-front-end-back-end.pdf',
          stackIcons: [
            { label: 'Angular Forms & Login', icon: <Layers size={14} /> },
            { label: 'List & UI', icon: <Smartphone size={14} /> },
            { label: 'PHP Backend Endpoints', icon: <Terminal size={14} /> },
            { label: 'Auth + localStorage', icon: <Briefcase size={14} /> },
            { label: 'API Integration', icon: <Rocket size={14} /> },
            { label: 'Front/Back Flow', icon: <Code2 size={14} /> },
          ],
        },
      ],
    },
  };

  const locale = contentByLanguage[language] || contentByLanguage.es;
  const navItems = locale.navItems;
  const projects = locale.projects;
  const processSteps = [
    { icon: <Compass size={24} />, ...locale.process.steps[0] },
    { icon: <PenTool size={24} />, ...locale.process.steps[1] },
    { icon: <Code2 size={24} />, ...locale.process.steps[2] },
    { icon: <Rocket size={24} />, ...locale.process.steps[3] },
  ];
  const experienceItems = locale.experienceItems;
  const activePdfProject = activePdfProjectId
    ? projects.find((project) => project.id === activePdfProjectId) || null
    : null;

  return (
    <div className="bg-[#030303] min-h-screen text-white relative selection:bg-blue-500/30 selection:text-white">
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <CustomCursor />
      <BackgroundEffects />

      {/* --- SMART NAVBAR --- */}
      <div 
        className={`fixed top-6 left-0 w-full flex justify-center z-50 pointer-events-none transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) animate-hero-1 ${
          showNav ? 'translate-y-0 opacity-100' : '-translate-y-32 opacity-0'
        }`}
      >
        <nav className="pointer-events-auto flex items-center justify-between gap-6 md:gap-14 px-8 py-3.5 rounded-full bg-[#070707]/90 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.7)] hover:border-white/30 transition-all duration-500">
          <MagneticElement inline strength={0.15}>
            <a href="#hero" onClick={() => handleNavClick('hero')} className={`font-display font-bold text-2xl tracking-tighter block cursor-morph ${clickedNav === 'hero' ? 'nav-clicked' : ''}`}>
              M<span className="text-blue-500">.</span>
            </a>
          </MagneticElement>
          
          <div className="flex gap-8 md:gap-10 text-sm md:text-base font-semibold text-gray-100">
            {navItems.map((item) => (
              <MagneticElement key={item.id} inline strength={0.1}>
                <a 
                  href={`#${item.id}`} 
                  aria-label={`${locale.labels.goTo} ${item.label}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative block px-3 py-1 cursor-morph tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.12)] transition-colors duration-300 ${clickedNav === item.id ? 'nav-clicked' : ''} ${activeSection === item.id ? 'text-white' : 'text-gray-100 hover:text-white'}`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full -translate-x-1/2 transition-all duration-300 ${activeSection === item.id ? 'opacity-100 scale-100 shadow-[0_0_10px_rgba(59,130,246,0.8)]' : 'opacity-0 scale-0'}`} />
                </a>
              </MagneticElement>
            ))}
          </div>
          
          <MagneticElement inline strength={0.1}>
            <a href="#contact" aria-label={locale.labels.goToContact} onClick={() => handleNavClick('contact')} className={`cursor-morph block bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-gray-200 transition-all ${clickedNav === 'contact' ? 'nav-clicked' : ''}`}>
              {locale.labels.talkButton}
            </a>
          </MagneticElement>
        </nav>
      </div>

      <div
        className={`fixed top-6 right-6 z-50 pointer-events-auto transition-all duration-700 ${
          showNav ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
        }`}
      >
        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-[#070707]/90 backdrop-blur-xl px-2 py-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.55)]">
          {languageOptions.map((option) => (
            <button
              key={option.code}
              type="button"
              onClick={() => setLanguage(option.code)}
              aria-label={`${locale.labels.switchLanguageTo} ${option.label}`}
              className={`cursor-morph w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                language === option.code ? 'bg-white/20 scale-105' : 'bg-transparent hover:bg-white/10'
              }`}
            >
              <FlagIcon code={option.code} />
            </button>
          ))}
        </div>
      </div>

      <main className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-32">
          <div className="flex flex-col items-center text-center px-6 max-w-5xl">
            
            <div className="animate-hero-2">
              <MagneticElement inline strength={0.1}>
                <div className="cursor-morph inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-md mb-8 hover:bg-white/[0.05] transition-colors">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">{locale.labels.available}</span>
                </div>
              </MagneticElement>
            </div>

            <div className="animate-hero-3 w-full">
              <MagneticElement strength={0.02} className="w-full">
                <h1
                  className="font-display font-bold leading-[0.9] tracking-tight mb-8 drop-shadow-2xl select-none w-full text-center cursor-default px-[0.04em]"
                  style={{ fontSize: 'clamp(3rem, 11.4vw, 10.5rem)' }}
                >
                  <span className="block text-white">MARC</span>
                  <span className="block name-shimmer pt-2 pb-1">MUNTANÉ</span>
                </h1>
              </MagneticElement>
            </div>

            <div className="animate-hero-4">
              <p className="max-w-2xl text-lg md:text-2xl text-gray-300 font-light leading-relaxed mb-12">
                {locale.hero.introStart} <strong className="text-white font-medium">{locale.hero.introHighlight}</strong> {locale.hero.introEnd}<br className="hidden md:block"/> 
                {locale.hero.secondStart} <strong className="text-gradient-blue font-medium">{locale.hero.secondHighlight}</strong>.
              </p>
            </div>

            <div className="animate-hero-5">
              <MagneticElement inline strength={0.15}>
                <a href="#projects" className="cursor-morph group relative px-10 py-5 bg-white text-black rounded-full font-bold flex items-center gap-3 overflow-hidden transition-transform hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                  <span className="relative z-10">{locale.labels.viewProjects}</span>
                  <ArrowUpRight size={20} className="relative z-10 transform group-hover:rotate-45 transition-transform duration-300"/>
                </a>
              </MagneticElement>
            </div>

          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30 animate-pulse animate-hero-5">
            <span className="text-xs tracking-widest uppercase font-medium">{locale.hero.scroll}</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
          </div>
        </section>

        {/* --- MARQUEE --- */}
        <div className="py-8 border-y border-white/5 bg-[#010101] overflow-hidden flex relative select-none">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#010101] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#010101] to-transparent z-10" />
          <div className="animate-marquee flex gap-12 items-center font-display text-3xl md:text-5xl font-bold tracking-tighter text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
            <span className="text-white" style={{ WebkitTextStroke: '0px' }}>REACT</span> <span>*</span>
            <span>WORDPRESS</span> <span>*</span>
            <span className="text-blue-500" style={{ WebkitTextStroke: '0px' }}>FLUTTER</span> <span>*</span>
            <span>PFSENSE</span> <span>*</span>
            <span className="text-white" style={{ WebkitTextStroke: '0px' }}>MYSQL</span> <span>*</span>
            <span>UI/UX</span> <span>*</span>
            <span className="text-white" style={{ WebkitTextStroke: '0px' }}>REACT</span> <span>*</span>
            <span>WORDPRESS</span> <span>*</span>
            <span className="text-blue-500" style={{ WebkitTextStroke: '0px' }}>FLUTTER</span> <span>*</span>
            <span>PFSENSE</span> <span>*</span>
            <span className="text-white" style={{ WebkitTextStroke: '0px' }}>MYSQL</span> <span>*</span>
            <span>UI/UX</span> <span>*</span>
          </div>
        </div>

        {/* --- ESPECIALIDAD TECNICA --- */}
        <section id="expertise" className="max-w-7xl mx-auto px-6 py-32">
          <Reveal>
            <h2 className="font-display text-5xl md:text-7xl font-bold mb-16 text-white tracking-tighter">
              {locale.expertise.titleStart} <span className="text-gradient-blue">{locale.expertise.titleAccent}</span>
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[380px]">
            
            <Reveal delay={100} className="md:col-span-8 h-full">
              <MagneticElement strength={0.02} spring="cubic-bezier(0.16, 1, 0.3, 1)" className="w-full h-full">
                <div className="bento-card p-10 flex flex-col md:flex-row justify-between items-center group">
                  <div className="md:w-1/2 z-10 pointer-events-none">
                    <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-white mb-6">
                      <Layers size={24} />
                    </div>
                    <h3 className="text-4xl font-display font-bold text-white mb-4">{locale.expertise.uiuxTitle}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {locale.expertise.uiuxDesc}
                    </p>
                  </div>
                  
                  <div className="md:w-1/2 h-full flex justify-center items-center relative mt-8 md:mt-0 pointer-events-none">
                    <svg viewBox="0 0 200 200" className="w-full max-w-[280px] overflow-visible">
                      <defs>
                        <linearGradient id="glass" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                          <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
                        </linearGradient>
                        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#000" floodOpacity="0.5"/>
                        </filter>
                      </defs>
                      <g className="anim-float-rev" style={{ transformOrigin: 'center' }}>
                        <rect x="50" y="30" width="120" height="80" rx="12" fill="url(#glass)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                        <rect x="60" y="40" width="30" height="10" rx="4" fill="rgba(255,255,255,0.2)" />
                      </g>
                      <g className="anim-float group-hover:scale-105 transition-transform duration-700" style={{ transformOrigin: 'center' }}>
                        <rect x="20" y="70" width="140" height="100" rx="16" fill="url(#glass)" stroke="rgba(59,130,246,0.5)" strokeWidth="2" className="backdrop-blur-xl" />
                        <circle cx="45" cy="95" r="12" fill="rgba(59,130,246,0.6)" />
                        <rect x="65" y="90" width="70" height="10" rx="4" fill="rgba(255,255,255,0.4)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </MagneticElement>
            </Reveal>

            <Reveal delay={200} className="md:col-span-4 h-full">
              <MagneticElement strength={0.03} spring="cubic-bezier(0.16, 1, 0.3, 1)" className="w-full h-full">
                <div className="bento-card p-10 flex flex-col justify-between group">
                  <div className="z-10 pointer-events-none">
                    <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
                      <Terminal size={24} />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white mb-3">{locale.expertise.frontendTitle}</h3>
                    <p className="text-gray-400 text-base mb-6">{locale.expertise.frontendDesc}</p>
                  </div>
                  <div className="bg-black/60 rounded-xl p-4 border border-white/5 font-mono text-xs text-gray-400 relative overflow-hidden group-hover:border-white/20 transition-colors pointer-events-none">
                    <div className="flex gap-1.5 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    </div>
                    <p><span className="text-blue-400">const</span> <span className="text-yellow-200">stack</span> = [</p>
                    <p className="pl-4 text-white font-medium">"React", "WordPress",</p>
                    <p className="pl-4 text-white font-medium">"JavaScript", "PHP"</p>
                    <p>];</p>
                  </div>
                </div>
              </MagneticElement>
            </Reveal>

            <Reveal delay={300} className="md:col-span-4 h-full">
              <MagneticElement strength={0.03} spring="cubic-bezier(0.16, 1, 0.3, 1)" className="w-full h-full">
                <div className="bento-card p-10 flex flex-col justify-between group overflow-hidden relative">
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[60px] group-hover:bg-emerald-500/20 transition-colors pointer-events-none" />
                  <div className="z-10 pointer-events-none">
                    <div className="inline-flex p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
                      <Smartphone size={24} />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white mb-3">{locale.expertise.mobileTitle}</h3>
                    <p className="text-gray-400 text-base mb-6">{locale.expertise.mobileDesc}</p>
                  </div>
                  <div className="flex flex-col gap-2 z-10 font-semibold pointer-events-none">
                    <div className="px-4 py-3 bg-black/40 border border-white/5 rounded-xl text-emerald-300 flex justify-between group-hover:border-white/10 transition-colors">
                      <span>Flutter</span> <span>Dart</span>
                    </div>
                    <div className="px-4 py-3 bg-black/40 border border-white/5 rounded-xl text-white flex justify-between opacity-70 group-hover:border-white/10 transition-colors">
                      <span>Flutter Web</span> <span>Mapbox</span>
                    </div>
                  </div>
                </div>
              </MagneticElement>
            </Reveal>

            <Reveal delay={400} className="md:col-span-8 h-full">
              <MagneticElement strength={0.02} spring="cubic-bezier(0.16, 1, 0.3, 1)" className="w-full h-full">
                <div className="bento-card p-10 flex flex-col md:flex-row items-center justify-between group">
                  <div className="md:w-5/12 z-10 pointer-events-none">
                    <h3 className="text-4xl font-display font-bold text-white mb-4">{locale.expertise.infraTitle}</h3>
                    <p className="text-gray-400 text-lg">
                      {locale.expertise.infraDesc}
                    </p>
                  </div>
                  <div className="md:w-7/12 h-full w-full flex items-center justify-center relative pointer-events-none pt-8 md:pt-0">
                    <svg viewBox="0 0 300 150" className="w-full h-full overflow-visible">
                      <path d="M 0 75 Q 75 25 150 75 T 300 75" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2">
                        <animate attributeName="d" values="M 0 75 Q 75 25 150 75 T 300 75; M 0 75 Q 75 125 150 75 T 300 75; M 0 75 Q 75 25 150 75 T 300 75" dur="4s" repeatCount="indefinite" ease="ease-in-out"/>
                      </path>
                      <path d="M 0 75 Q 75 50 150 75 T 300 75" fill="none" stroke="rgba(59,130,246,0.6)" strokeWidth="3" filter="drop-shadow(0 0 8px rgba(59,130,246,0.5))">
                        <animate attributeName="d" values="M 0 75 Q 75 50 150 75 T 300 75; M 0 75 Q 75 100 150 75 T 300 75; M 0 75 Q 75 50 150 75 T 300 75" dur="6s" repeatCount="indefinite" ease="ease-in-out"/>
                      </path>
                    </svg>
                  </div>
                </div>
              </MagneticElement>
            </Reveal>

          </div>
        </section>

        {/* --- PROCESO CREATIVO MEJORADO --- */}
        <section id="process" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
          <Reveal>
            <div className="mb-16">
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
                {locale.process.titleStart} <span className="text-gradient-blue">{locale.process.titleAccent}</span>
              </h2>
              <p className="text-gray-400 max-w-xl text-lg font-light">{locale.process.desc}</p>
            </div>
          </Reveal>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Lista de PestaÃ±as con Progreso Vertical */}
            <div className="w-full lg:w-1/2 flex flex-col gap-2 relative border-l border-white/10 pl-6 py-2">
              {/* Indicador de Progreso Azul */}
              <div 
                className="absolute left-[-1px] w-[2px] bg-blue-500 transition-all duration-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" 
                style={{ top: `${activeProcessStep * 25}%`, height: '25%' }} 
              />
              
              {processSteps.map((step, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div 
                    onMouseEnter={() => setActiveProcessStep(index)}
                    className={`process-tab cursor-morph p-6 rounded-2xl border border-transparent flex gap-6 items-center ${activeProcessStep === index ? 'active' : 'hover:bg-white/[0.02]'}`}
                  >
                    <div className={`p-4 rounded-xl transition-colors duration-500 ${activeProcessStep === index ? 'bg-blue-500/10 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]' : 'bg-white/5 text-gray-500'}`}>
                      {step.icon}
                    </div>
                    <div>
                      <h4 className={`text-xl md:text-2xl font-bold font-display transition-colors duration-500 ${activeProcessStep === index ? 'text-white' : 'text-gray-500'}`}>
                        {step.title}
                      </h4>
                      <div className={`grid transition-all duration-500 ${activeProcessStep === index ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                        <p className="overflow-hidden text-gray-400 font-light text-sm md:text-base pr-4">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Visuales Interactivos Mejorados */}
            <div className="w-full lg:w-1/2 h-[450px] bg-[#050505] border border-white/10 rounded-[2.5rem] relative overflow-hidden flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
              
              <svg style={{ width: 0, height: 0, position: 'absolute' }}>
                <defs>
                  <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#c084fc" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="relative w-full h-full flex items-center justify-center transition-all duration-700">
                {/* 0: Descubrimiento (Radar) */}
                <div className={`absolute transition-all duration-700 transform w-full h-full flex items-center justify-center ${activeProcessStep === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <svg viewBox="0 0 200 200" fill="none" className="w-64 h-64 anim-float">
                    <circle cx="100" cy="100" r="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" />
                    <circle cx="100" cy="100" r="40" stroke="url(#grad-blue)" strokeWidth="2" />
                    <circle cx="100" cy="100" r="12" fill="url(#grad-blue)" className="anim-pulse" />
                    <path d="M100 0 L100 20 M200 100 L180 100 M100 200 L100 180 M0 100 L20 100" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                
                {/* 1: DiseÃ±o UI (Wireframes) */}
                <div className={`absolute transition-all duration-700 transform w-full h-full flex items-center justify-center ${activeProcessStep === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <svg viewBox="0 0 240 200" fill="none" className="w-80 h-auto anim-float-rev">
                    <rect x="20" y="20" width="160" height="100" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                    <rect x="40" y="40" width="40" height="40" rx="8" fill="rgba(255,255,255,0.1)" />
                    <rect x="90" y="45" width="70" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
                    <rect x="90" y="65" width="50" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
                    <rect x="80" y="80" width="140" height="90" rx="12" fill="rgba(192,132,252,0.1)" stroke="#c084fc" strokeWidth="1.5" className="backdrop-blur-md" />
                    <circle cx="110" cy="125" r="16" fill="#c084fc" />
                    <rect x="140" y="115" width="60" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
                    <rect x="140" y="130" width="40" height="4" rx="2" fill="rgba(255,255,255,0.15)" />
                  </svg>
                </div>

                {/* 2: Desarrollo (Terminal) */}
                <div className={`absolute transition-all duration-700 transform w-full h-full flex items-center justify-center ${activeProcessStep === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="font-mono text-sm bg-black/80 border border-blue-500/30 w-72 p-6 rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.15)] anim-float">
                    <div className="flex gap-1.5 mb-4 border-b border-white/10 pb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <p className="text-pink-400">import <span className="text-white">React</span> from <span className="text-green-300">'react'</span>;</p>
                    <p className="text-blue-400 mt-4">const <span className="text-yellow-200">System</span> = () =&gt; {'{'}</p>
                    <p className="pl-4 text-gray-400">return <span className="text-blue-300">&lt;Masterpiece /&gt;</span>;</p>
                    <p className="text-blue-400">{'}'};</p>
                    <div className="w-2 h-4 bg-white/50 mt-2 animate-pulse" />
                  </div>
                </div>

                {/* 3: Lanzamiento (Rocket Abstract) */}
                <div className={`absolute transition-all duration-700 transform w-full h-full flex items-center justify-center ${activeProcessStep === 3 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10'}`}>
                  <svg viewBox="0 0 200 200" fill="none" className="w-64 h-64">
                    <path d="M100 180 L100 60" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M100 20 L130 70 L100 60 L70 70 Z" fill="url(#grad-blue)" className="anim-float" />
                    <circle cx="100" cy="120" r="40" stroke="#c084fc" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" />
                    <circle cx="100" cy="120" r="25" fill="rgba(192,132,252,0.2)" className="anim-pulse" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- TRAYECTORIA (TIMELINE) --- */}
        <section id="experience" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
          <Reveal>
            <div className="mb-24 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6">
              <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter">
                {locale.experienceSection.titleStart} <span className="text-gradient-blue">{locale.experienceSection.titleAccent}</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-right font-light pb-2">{locale.experienceSection.desc}</p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/20 to-transparent -translate-x-1/2" />

            <div className="space-y-16">
              {experienceItems.map((item, index) => (
                <Reveal key={index} delay={index * 150}>
                  <div className={`relative flex flex-col md:flex-row items-center justify-between group ${item.align === 'left' ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Timeline Node */}
                    <div className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full bg-black border-[3px] border-blue-500 -translate-x-1/2 z-10 timeline-node flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Content Card (Sin clase interactive, solo magnetico sutil) */}
                    <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${item.align === 'left' ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                      <MagneticElement strength={0.015} className="w-full">
                        <div className="bento-card p-8 group-hover:border-blue-500/30 transition-colors shadow-lg">
                          <span className="text-blue-400 font-bold text-sm tracking-wider mb-2 block">{item.year}</span>
                          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">{item.role}</h3>
                          <h4 className="text-gray-400 font-medium mb-4 flex items-center gap-2 md:justify-start">
                            <Briefcase size={16}/> {item.company}
                          </h4>
                          <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                        </div>
                      </MagneticElement>
                    </div>

                    {/* Espacio para balancear */}
                    <div className="hidden md:block w-5/12" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* --- TRABAJOS DESTACADOS --- */}
        <section id="projects" className="w-full relative z-10 pt-10 pb-48 border-t border-white/5">
          <div className="sticky top-0 z-30 w-full bg-[#030303]/90 backdrop-blur-xl border-b border-white/10 pt-20 pb-8 mb-16">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-6">
              <Reveal>
                <h2 className="font-display text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                  {locale.projectsSection.titleTop}<br/>{locale.projectsSection.titleBottom}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-gray-400 max-w-sm text-lg md:text-right pb-3 font-light">
                  {locale.projectsSection.desc}
                </p>
              </Reveal>
            </div>
            <div className="absolute top-full left-0 w-full h-16 bg-gradient-to-b from-[#030303]/90 to-transparent pointer-events-none" />
          </div>

          <div className="max-w-7xl mx-auto px-6 flex flex-col pb-32">
            {projects.map((project, index) => (
              <div key={project.id} className="sticky-card-wrapper w-full" style={{ zIndex: index, top: `calc(28vh + ${index * 35}px)`, marginBottom: '3rem' }}>
                <MagneticElement strength={0.015} spring="cubic-bezier(0.16, 1, 0.3, 1)" className="w-full h-full bg-[#080808] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_-15px_40px_rgba(0,0,0,0.8)] transition-colors hover:border-white/20">
                  <div className="flex flex-col lg:flex-row min-h-[65vh] pointer-events-none w-full">
                    
                    <div className="w-full lg:w-5/12 p-10 md:p-16 flex flex-col justify-center border-r border-white/5 relative bg-gradient-to-br from-[#0a0a0a] to-[#000]">
                      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.03),transparent_50%)]" />
                      
                      <div className="flex items-center gap-4 mb-8 text-sm font-bold tracking-widest uppercase text-gray-500 relative z-10">
                        <span>{project.year}</span>
                        <div className="w-12 h-[1px] bg-gray-700" />
                        <span className="text-blue-400">{project.category}</span>
                      </div>

                      <p className="text-xs md:text-sm text-blue-200/80 tracking-wide mb-3 relative z-10 uppercase">
                        {project.duration}
                      </p>
                      
                      <h3
                        className={`font-display font-bold mb-6 text-white relative z-10 tracking-tight leading-[1] break-normal ${
                          project.compactTitle
                            ? 'text-xl sm:text-2xl lg:text-4xl xl:text-5xl'
                            : 'text-2xl sm:text-3xl lg:text-5xl xl:text-6xl'
                        }`}
                      >
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300/90 text-sm md:text-base leading-relaxed mb-6 relative z-10">
                        {project.summary}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-8 relative z-10">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-5 py-2.5 text-xs font-bold rounded-full bg-white/5 border border-white/10 text-gray-300 tracking-wide">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.stackIcons ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 relative z-10">
                          {project.stackIcons.map((stackItem) => (
                            <div key={stackItem.label} className="inline-flex items-center gap-2 text-xs text-gray-300 bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2">
                              <span className="text-blue-300">{stackItem.icon}</span>
                              <span className="leading-tight">{stackItem.label}</span>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {project.fullStack ? (
                        <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                          {project.fullStack.map((tech) => (
                            <span
                              key={tech.name}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1.5 bg-white/[0.04] border border-white/10 text-gray-200 tracking-wide hover:bg-white/[0.08] transition-colors"
                            >
                              <span
                                className="w-2 h-2 rounded-full flex-shrink-0"
                                style={{ backgroundColor: tech.color }}
                              />
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      ) : null}
                      
                      <div className="mt-auto relative z-10 pointer-events-auto w-fit flex items-center gap-3">
                        <MagneticElement inline strength={0.2}>
                          {project.pdfPath ? (
                            <button
                              type="button"
                              onClick={() => setActivePdfProjectId(project.id)}
                              aria-label={`${locale.labels.openPdfPreviewOf} ${project.title}`}
                              className="cursor-morph flex items-center justify-center w-14 h-14 rounded-full bg-white text-black hover:scale-110 hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                            >
                              <FileText size={22} />
                            </button>
                          ) : (
                            <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${locale.labels.openProjectOf} ${project.title}`} className="cursor-morph flex items-center justify-center w-14 h-14 rounded-full bg-white text-black hover:scale-110 hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                              <ArrowUpRight size={24} />
                            </a>
                          )}
                        </MagneticElement>
                        {project.repoUrl ? (
                          <MagneticElement inline strength={0.2}>
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${locale.labels.openRepoOf} ${project.title}`}
                              className="cursor-morph flex items-center justify-center w-14 h-14 rounded-full border border-white/20 text-white hover:scale-110 hover:bg-white/10 transition-all"
                            >
                              <Github size={22} />
                            </a>
                          </MagneticElement>
                        ) : null}
                      </div>
                    </div>

                    <div className="w-full lg:w-7/12 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-auto" />
                      <img src={project.image} alt={project.title} loading="lazy" decoding="async" style={{ transitionDuration: "1000ms" }} className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all ease-out pointer-events-none" />
                    </div>

                  </div>
                </MagneticElement>
              </div>
            ))}
          </div>
        </section>

        {/* --- FOOTER / CTA --- */}
        <section id="contact" className="px-6 pt-12 pb-24 text-center relative overflow-visible border-t border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-blue-600/15 rounded-full blur-[180px] pointer-events-none mix-blend-screen" />
          
          <Reveal>
            <div className="max-w-4xl mx-auto relative z-10 pt-20">
              <h2
                className="font-display font-bold tracking-tight mb-8 text-white leading-[0.95]"
                style={{ fontSize: 'clamp(2.05rem, 8.3vw, 7.8rem)' }}
              >
                {locale.contact.titleTop} <br />
                <span className="text-gradient-blue italic inline-block pr-[0.16em]">
                  {locale.contact.titleStart} <span className="block md:inline">{locale.contact.titleAccent}</span>
                </span>
              </h2>
              <p className="text-gray-400 text-xl md:text-2xl mb-14 max-w-2xl mx-auto font-light">
                {locale.contact.desc}
              </p>
              
              <MagneticElement inline strength={0.15}>
                <a href="mailto:marcmclara@gmail.com" className="cursor-morph inline-flex items-center justify-center px-12 py-6 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                  marcmclara@gmail.com
                </a>
              </MagneticElement>
            </div>
          </Reveal>

          <div className="mt-40 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-6 border-t border-white/5 pt-10 relative z-10">
            <p className="font-semibold tracking-wide">© {new Date().getFullYear()} Marc Muntané Clara. {locale.footer.copyright}</p>
            <div className="flex gap-8">
              <MagneticElement inline strength={0.2}>
                <a href="https://github.com/MarcMunta" target="_blank" rel="noopener noreferrer" aria-label={locale.footer.githubAria} className="cursor-morph hover:text-white transition-colors flex items-center gap-2">
                  <Github size={20} /> <span className="block text-sm">GitHub</span>
                </a>
              </MagneticElement>
              <MagneticElement inline strength={0.2}>
                <a href="https://www.linkedin.com/in/marc-muntan%C3%A9-clar%C3%A0-ab6a0a276/" target="_blank" rel="noopener noreferrer" aria-label={locale.footer.linkedinAria} className="cursor-morph hover:text-white transition-colors flex items-center gap-2">
                  <Linkedin size={20} /> <span className="block text-sm">LinkedIn</span>
                </a>
              </MagneticElement>
            </div>
          </div>
        </section>

        {activePdfProject ? (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${locale.labels.pdfPreviewOf} ${activePdfProject.title}`}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 backdrop-blur-md px-4 py-8"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                closePdfModal();
              }
            }}
          >
            <div className="w-full max-w-6xl h-[88vh] bg-[#090909] border border-white/15 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
              <div className="h-16 border-b border-white/10 px-5 md:px-7 flex items-center justify-between bg-black/40">
                <div className="min-w-0">
                  <p className="text-sm text-blue-300/80 uppercase tracking-widest">{activePdfProject.category}</p>
                  <h3 className="text-base md:text-lg text-white font-semibold truncate">{activePdfProject.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={activePdfProject.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white text-black hover:bg-gray-200 transition-colors"
                  >
                    <ArrowUpRight size={16} />
                    {locale.labels.openPdf}
                  </a>
                  <button
                    type="button"
                    onClick={closePdfModal}
                    aria-label={locale.labels.closePreview}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="h-[calc(88vh-4rem)] bg-[#050505]">
                <iframe
                  src={activePdfProject.pdfPath}
                  title={`PDF ${activePdfProject.title}`}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        ) : null}

      </main>
    </div>
  );
}

