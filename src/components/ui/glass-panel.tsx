"use client";
import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * GlassPanel
 * Reusable translucent glassmorphism container.
 * Applies backdrop blur, subtle gradient, border + inner highlight.
 * Use for nav bars, cards overlays, floating panels.
 */
export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: "sm" | "md" | "lg";
  animated?: boolean;
  contentClassName?: string;
}

const intensityMap: Record<NonNullable<GlassPanelProps["intensity"]>, string> = {
  sm: "backdrop-blur-md",
  md: "backdrop-blur-xl",
  lg: "backdrop-blur-2xl",
};

export function GlassPanel({
  className,
  contentClassName,
  children,
  intensity = "md",
  animated = false,
  ...rest
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden transition-all duration-500",
        // Solid mode tweaks for header (overridden via parent classes). Keep defaults translucent.
        "border border-border/50 bg-background/70 text-foreground",
        "dark:border-white/15 dark:bg-white/5",
        intensityMap[intensity],
        // layered gradients & subtle noise
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]",
        // Allow parent to disable gradient by forcing before:opacity-0
        "before:bg-[linear-gradient(135deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_40%),radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_60%)]",
        "before:opacity-50 dark:before:opacity-60",
        "dark:before:bg-[linear-gradient(135deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_40%),radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_60%)]",
        animated && "before:bg-[length:200%_200%] before:animate-glass-gradient",
        // inner hairline highlight
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit]",
        "after:opacity-50 after:ring-1 after:ring-inset after:ring-white/40",
        "dark:after:opacity-60 dark:after:ring-white/40",
        animated && "after:animate-glass-pulse",
        // shadow & subtle elevation
        "shadow-[0_8px_32px_-16px_rgba(15,23,42,0.25)]",
        "hover:shadow-[0_16px_48px_-18px_rgba(15,23,42,0.35)]",
        "dark:shadow-[0_8px_32px_-16px_rgba(15,23,42,0.65)]",
        "dark:hover:shadow-[0_16px_48px_-18px_rgba(15,23,42,0.75)]",
        "hover:border-border/70 hover:before:opacity-70",
        "dark:hover:border-white/40 dark:hover:before:opacity-80",
        className
      )}
      {...rest}
    >
      {/* content layer ensures pseudo elements sit below */}
      <div className={cn("relative z-10", contentClassName)}>{children}</div>
    </div>
  );
}
