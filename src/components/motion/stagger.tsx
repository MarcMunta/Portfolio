"use client";

import * as React from "react";
import { motion, type Variants, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type StaggerComponent = typeof motion.div;

interface StaggerProps {
  as?: StaggerComponent;
  delay?: number;
  className?: string;
  children: React.ReactNode;
  gap?: number;
}

export function Stagger({
  as: Component = motion.div,
  delay = 0,
  className,
  children,
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  const container: Variants = React.useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.12,
          delayChildren: delay,
        },
      },
    }),
    [delay],
  );

  const child: Variants = React.useMemo(
    () => ({
      hidden: { opacity: 0, y: 12 },
      show: { opacity: 1, y: 0, transition: { ease: [0.4, 0, 0.2, 1] } },
    }),
    [],
  );

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className={cn("flex flex-col gap-4", className)}
    >
      {React.Children.map(children, (childNode) => (
        <motion.div variants={child}>{childNode}</motion.div>
      ))}
    </Component>
  );
}
