"use client";

import * as React from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";

interface MotionProviderProps {
  children: React.ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion={reduceMotion ? "always" : "never"} transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}>
      {children}
    </MotionConfig>
  );
}
