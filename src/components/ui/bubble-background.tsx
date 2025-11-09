"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * BubbleBackground
 * Animated softly moving blurred color blobs for a modern glassmorphism backdrop.
 * NOTE: Uses Tailwind arbitrary values to avoid inline styles while keeping visuals customizable.
 */
export interface BubbleBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  quantity?: number;
  colors?: string[]; // tailwind arbitrary values or css colors
  blur?: string; // tailwind blur utility e.g. 'blur-3xl'
  animate?: boolean;
}

const defaultColors = ["bg-primary/25", "bg-accent/30", "bg-blue-500/20", "bg-violet-500/20"];
const sizeClasses = ["w-[28vw] h-[28vw]", "w-[32vw] h-[32vw]", "w-[36vw] h-[36vw]", "w-[40vw] h-[40vw]"];
const topClasses = ["top-[-5%]", "top-[5%]", "top-[15%]", "top-[25%]", "top-[35%]", "top-[45%]"];
const leftClasses = ["left-[-5%]", "left-[5%]", "left-[20%]", "left-[35%]", "left-[50%]", "left-[65%]"];
const durationClasses = [
  "animate-[float-slow_20s_ease-in-out_infinite]",
  "animate-[float-slow_24s_ease-in-out_infinite]",
  "animate-[float-slow_28s_ease-in-out_infinite]",
  "animate-[float-slow_32s_ease-in-out_infinite]",
];

export function BubbleBackground({
  className,
  quantity = 5,
  colors = defaultColors,
  blur = "blur-3xl",
  animate = true,
  ...rest
}: BubbleBackgroundProps) {
  const bubbles = React.useMemo(() => Array.from({ length: quantity }).map((_, i) => ({
    size: sizeClasses[i % sizeClasses.length],
    top: topClasses[(i * 2) % topClasses.length],
    left: leftClasses[(i * 3) % leftClasses.length],
    duration: durationClasses[(i * 5) % durationClasses.length],
  })), [quantity]);

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} {...rest}>
      {bubbles.map((b, i) => (
        <span
          key={i}
          className={cn(
            "absolute rounded-full mix-blend-screen will-change-transform",
            colors[i % colors.length],
            blur,
            animate && b.duration,
            b.size,
            b.top,
            b.left
          )}
          // visual blur uses Tailwind class above; extra heavy blur via filter property is avoided
        />
      ))}
    </div>
  );
}
