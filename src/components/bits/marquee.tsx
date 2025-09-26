"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: React.ReactNode[];
  className?: string;
  speed?: number;
}

export function Marquee({ items, className, speed = 30 }: MarqueeProps) {
  const reduceMotion = useReducedMotion();
  const style = reduceMotion
    ? undefined
    : ({
        animationDuration: `${speed}s`,
      } as React.CSSProperties);

  const content = React.useMemo(() => [...items, ...items], [items]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="marquee animate-skills-marquee" style={style}>
        {content.map((item, index) => (
          <span key={index} className="mx-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
