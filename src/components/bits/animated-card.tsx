"use client";

import * as React from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function AnimatedCard({ children, className, intensity = 20 }: AnimatedCardProps) {
  const reduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 120, damping: 12 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 12 });
  const glare = useTransform([springX, springY], ([x, y]) => {
    const base = (x as number) + (y as number);
    return `linear-gradient(135deg, rgba(255,255,255,${Math.abs(base) / 90}) 0%, transparent 60%)`;
  });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const percentX = (event.clientX - centerX) / (bounds.width / 2);
    const percentY = (event.clientY - centerY) / (bounds.height / 2);
    rotateX.set(percentY * -intensity);
    rotateY.set(percentX * intensity);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      className={cn(
        "group relative rounded-2xl border border-border bg-card/70 p-6 shadow-lg transition-shadow duration-300 hover:shadow-glow",
        className,
      )}
      style={reduceMotion ? undefined : { rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-60"
        style={reduceMotion ? undefined : { background: glare }}
      />
      <div className="relative z-10 space-y-4">{children}</div>
    </motion.div>
  );
}
