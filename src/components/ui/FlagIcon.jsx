import React, { useRef, useEffect, useState } from 'react';

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
export { FlagIcon };