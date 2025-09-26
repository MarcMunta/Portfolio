"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type TextRevealComponent = React.ElementType<{ className?: string; children?: React.ReactNode }>;

interface TextRevealProps {
  text: string;
  as?: TextRevealComponent;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function TextReveal({
  text,
  as: Component = "span",
  className,
  delay = 0,
  stagger = 0.035,
}: TextRevealProps) {
  const reduceMotion = useReducedMotion();
  const words = React.useMemo(() => text.split(" "), [text]);

  if (reduceMotion) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <Component className={cn("inline-flex flex-wrap gap-2", className)}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="overflow-hidden">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: delay + index * stagger,
              duration: 0.6,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
