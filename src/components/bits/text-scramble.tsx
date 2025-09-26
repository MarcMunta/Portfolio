"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type TextScrambleComponent = React.ElementType<{ className?: string; children?: React.ReactNode }>;

interface TextScrambleProps {
  text: string;
  duration?: number;
  interval?: number;
  className?: string;
  as?: TextScrambleComponent;
}

const DEFAULT_CHARS = "!<>-_\/[]{}—=+*^?#";

export function TextScramble({
  text,
  duration = 1000,
  interval = 40,
  className,
  as: Component = "span",
}: TextScrambleProps) {
  const reduceMotion = useReducedMotion();
  const [output, setOutput] = React.useState(text);

  React.useEffect(() => {
    if (reduceMotion) {
      setOutput(text);
      return;
    }

    let frame = 0;
    const totalFrames = Math.max(1, Math.round(duration / interval));
    let raf: number;

    const chars = text.split("");

    const update = () => {
      const progress = Math.min(1, frame / totalFrames);
      const revealCount = Math.floor(progress * chars.length);
      const next = chars.map((letter, index) => {
        if (index < revealCount) return letter;
        const randomIndex = Math.floor(Math.random() * DEFAULT_CHARS.length);
        return DEFAULT_CHARS[randomIndex];
      });

      setOutput(next.join(""));

      frame += 1;
      if (progress < 1) {
        raf = window.setTimeout(update, interval);
      } else {
        setOutput(text);
      }
    };

    update();

    return () => {
      window.clearTimeout(raf);
    };
  }, [text, duration, interval, reduceMotion]);

  return <Component className={cn("font-medium tracking-tight", className)}>{output}</Component>;
}
