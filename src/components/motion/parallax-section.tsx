"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

type ParallaxComponent = typeof motion.section;

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  as?: ParallaxComponent;
  offset?: number;
}

export function ParallaxSection({
  children,
  className,
  as: Component = motion.section,
  offset = 120,
}: ParallaxSectionProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [offset, offset * -1]);

  return (
    <Component
      ref={ref}
      style={reduceMotion ? undefined : { y: translateY }}
      className={cn("relative overflow-visible will-change-transform", className)}
    >
      {children}
    </Component>
  );
}
