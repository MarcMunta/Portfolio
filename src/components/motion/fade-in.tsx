"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type FadeInComponent = typeof motion.div;

export interface FadeInProps {
  as?: FadeInComponent;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  children: React.ReactNode;
}

export function FadeIn({
  as: Component = motion.div,
  delay = 0,
  duration = 0.6,
  y = 24,
  className,
  children,
}: FadeInProps) {
  const reduceMotion = useReducedMotion();

  const initial = React.useMemo(() => ({ opacity: 0, y }), [y]);

  return (
    <Component
      initial={reduceMotion ? false : initial}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration, ease: [0.4, 0, 0.2, 1] }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </Component>
  );
}
