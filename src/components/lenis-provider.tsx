"use client";

import * as React from "react";
import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";

interface LenisProviderProps {
  children: React.ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      lerp: 0.12,
    });

    let rafId: number;

    const onRaf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(onRaf);
    };

    rafId = requestAnimationFrame(onRaf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [reduceMotion]);

  return <div data-lenis={reduceMotion ? "disabled" : "enabled"}>{children}</div>;
}
