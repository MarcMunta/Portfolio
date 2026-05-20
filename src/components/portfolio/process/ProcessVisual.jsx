import React from 'react';

export function ProcessVisual({ activeProcessStep }) {
  return (
    <div className="process-visual-panel w-full lg:w-1/2 h-[450px] bg-[var(--bg-tertiary)] border border-white/10 rounded-[2.5rem] relative overflow-hidden flex items-center justify-center shadow-2xl">
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
        <DiscoveryVisual active={activeProcessStep === 0} />
        <DesignVisual active={activeProcessStep === 1} />
        <DevelopmentVisual active={activeProcessStep === 2} />
        <DeliveryVisual active={activeProcessStep === 3} />
      </div>
    </div>
  );
}

function VisualLayer({ active, children, className = '' }) {
  return (
    <div
      className={`absolute transition-all duration-700 transform w-full h-full flex items-center justify-center ${
        active ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
}

function DiscoveryVisual({ active }) {
  return (
    <VisualLayer active={active} className={active ? '' : '!translate-y-0'}>
      <svg viewBox="0 0 200 200" fill="none" className="w-64 h-64 anim-float">
        <circle cx="100" cy="100" r="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" />
        <circle cx="100" cy="100" r="40" stroke="url(#grad-blue)" strokeWidth="2" />
        <circle cx="100" cy="100" r="12" fill="url(#grad-blue)" className="anim-pulse" />
        <path d="M100 0 L100 20 M200 100 L180 100 M100 200 L100 180 M0 100 L20 100" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </VisualLayer>
  );
}

function DesignVisual({ active }) {
  return (
    <VisualLayer active={active} className={active ? '' : '!translate-y-0'}>
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
    </VisualLayer>
  );
}

function DevelopmentVisual({ active }) {
  return (
    <VisualLayer active={active} className={active ? '' : '!translate-y-0'}>
      <div className="code-panel font-mono text-sm bg-black/80 border border-blue-500/30 w-72 p-6 rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.15)] anim-float">
        <div className="flex gap-1.5 mb-4 border-b border-white/10 pb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <p className="text-pink-400">
          import <span className="text-white">React</span> from <span className="text-green-300">'react'</span>;
        </p>
        <p className="text-blue-400 mt-4">
          const <span className="text-yellow-200">System</span> = () =&gt; {'{'}
        </p>
        <p className="pl-4 text-gray-400">
          return <span className="text-blue-300">&lt;Masterpiece /&gt;</span>;
        </p>
        <p className="text-blue-400">{'}'};</p>
        <div className="w-2 h-4 bg-white/50 mt-2 animate-pulse" />
      </div>
    </VisualLayer>
  );
}

function DeliveryVisual({ active }) {
  return (
    <VisualLayer active={active}>
      <svg viewBox="0 0 200 200" fill="none" className="w-64 h-64">
        <path d="M100 180 L100 60" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M100 20 L130 70 L100 60 L70 70 Z" fill="url(#grad-blue)" className="anim-float" />
        <circle cx="100" cy="120" r="40" stroke="#c084fc" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" />
        <circle cx="100" cy="120" r="25" fill="rgba(192,132,252,0.2)" className="anim-pulse" />
      </svg>
    </VisualLayer>
  );
}
