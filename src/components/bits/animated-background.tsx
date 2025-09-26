"use client";

import * as React from "react";
import { motion, useReducedMotion, type TargetAndTransition } from "framer-motion";

import { cn } from "@/lib/utils";

type BackgroundVariant = "aurora" | "particles" | "mesh";

interface AnimatedBackgroundProps {
  className?: string;
  variant?: BackgroundVariant;
  intensity?: number;
  children?: React.ReactNode;
}

const variantMap: Record<BackgroundVariant, string> = {
  aurora:
    "radial-gradient(at 20% 20%, rgba(120, 176, 255, 0.45) 0, transparent 60%), radial-gradient(at 80% 0%, rgba(178, 132, 255, 0.45) 0, transparent 60%), radial-gradient(at 50% 80%, rgba(121, 228, 184, 0.35) 0, transparent 60%)",
  particles:
    "radial-gradient(circle at 10% 20%, rgba(136, 196, 255, 0.4) 0, transparent 50%), radial-gradient(circle at 90% 30%, rgba(203, 166, 247, 0.35) 0, transparent 50%), radial-gradient(circle at 30% 80%, rgba(134, 239, 172, 0.25) 0, transparent 60%)",
  mesh:
    "linear-gradient(135deg, rgba(88, 101, 242, 0.5), rgba(56, 189, 248, 0.35), rgba(129, 140, 248, 0.45))",
};

export function AnimatedBackground({
  className,
  variant = "aurora",
  intensity = 1,
  children,
}: AnimatedBackgroundProps) {
  const reduceMotion = useReducedMotion();

  const animate = React.useMemo<TargetAndTransition | undefined>(() => {
    if (reduceMotion) return undefined;
    return {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: { duration: 18 * intensity, ease: "linear" as const, repeat: Infinity },
    };
  }, [reduceMotion, intensity]);

  return (
    <div className={cn("relative overflow-hidden rounded-3xl", className)}>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{ backgroundImage: variantMap[variant], filter: "blur(0px)" }}
        animate={animate}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
