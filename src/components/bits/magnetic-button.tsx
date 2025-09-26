"use client";

import * as React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends ButtonProps {
  strength?: number;
}

export const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ className, strength = 12, children, asChild, variant, size, weight, ...props }, ref) => {
    const reduceMotion = useReducedMotion();
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 200, damping: 20, mass: 0.5 });
    const springY = useSpring(y, { stiffness: 200, damping: 20, mass: 0.5 });

    const pointerX = useMotionValue(50);
    const pointerY = useMotionValue(50);
    const glowX = useSpring(pointerX, { stiffness: 200, damping: 25, mass: 0.4 });
    const glowY = useSpring(pointerY, { stiffness: 200, damping: 25, mass: 0.4 });
    const glowBackground = useMotionTemplate`radial-gradient(140px circle at ${glowX}% ${glowY}%, rgba(56, 189, 248, 0.35), transparent 70%)`;

    const [isHovering, setIsHovering] = React.useState(false);

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
      if (!isHovering) {
        setIsHovering(true);
      }

      if (reduceMotion) {
        pointerX.set(50);
        pointerY.set(50);
        return;
      }

      const bounds = event.currentTarget.getBoundingClientRect();
      const offsetX = event.clientX - (bounds.left + bounds.width / 2);
      const offsetY = event.clientY - (bounds.top + bounds.height / 2);
      x.set(offsetX / strength);
      y.set(offsetY / strength);
      pointerX.set(((offsetX + bounds.width / 2) / bounds.width) * 100);
      pointerY.set(((offsetY + bounds.height / 2) / bounds.height) * 100);
    };

    const reset = () => {
      x.set(0);
      y.set(0);
      pointerX.set(50);
      pointerY.set(50);
      setIsHovering(false);
    };

    const renderContent = (content: React.ReactNode) => (
      <span className="relative inline-flex w-full items-center justify-center">
        <span className="relative z-10 flex items-center gap-2">{content}</span>
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glowBackground, opacity: isHovering ? 1 : 0, mixBlendMode: "plus-lighter" }}
        />
        <span className="pointer-events-none absolute inset-0 rounded-full border border-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </span>
    );

    const buttonChildren =
      asChild && React.isValidElement(children)
        ? (() => {
            const child = children as React.ReactElement<{ className?: string; children?: React.ReactNode }>;
            return React.cloneElement(child, {
              className: cn("relative", child.props.className),
              children: renderContent(child.props.children),
            });
          })()
        : renderContent(children);

    return (
      <motion.div
        className="inline-flex"
        style={{ x: springX, y: springY }}
        onPointerMove={handlePointerMove}
        onPointerEnter={() => setIsHovering(true)}
        onPointerLeave={reset}
        whileTap={{ scale: 0.97 }}
      >
        <Button
          ref={ref}
          className={cn("relative overflow-hidden group", className)}
          variant={variant}
          size={size}
          weight={weight}
          asChild={asChild}
          {...props}
        >
          {buttonChildren}
        </Button>
      </motion.div>
    );
  },
);
MagneticButton.displayName = "MagneticButton";
