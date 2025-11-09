"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface BubbleState {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface HoverBubbleContextValue {
  showBubble: (element: HTMLElement) => void;
  hideBubble: () => void;
  registerActive: (element: HTMLElement | null) => void;
}

const HoverBubbleContext = React.createContext<HoverBubbleContextValue | null>(null);

export interface HoverBubbleGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  bubbleClassName?: string;
  padding?: number;
  disable?: boolean;
}

export function HoverBubbleGroup({
  children,
  className,
  bubbleClassName,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  padding = 0,
  disable = false,
  ...rest
}: HoverBubbleGroupProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);
  const [bubble, setBubble] = React.useState<BubbleState>({ x: 0, y: 0, width: 0, height: 0 });
  const activeRef = React.useRef<HTMLElement | null>(null);
  const hideTimeout = React.useRef<number | null>(null);

  const showBubble = React.useCallback(
    (element: HTMLElement) => {
      if (disable) {
        return;
      }

      const container = containerRef.current;
      if (!container) {
        return;
      }
      
      // Get the positioned parent (relative container)
      const containerRect = container.getBoundingClientRect();
      const rect = element.getBoundingClientRect();
      
      // Calculate offset from the container's content area
      const scrollLeft = container.scrollLeft || 0;
      const scrollTop = container.scrollTop || 0;
      
      const offsetX = rect.left - containerRect.left + scrollLeft;
      const offsetY = rect.top - containerRect.top + scrollTop;

      setBubble({
        x: offsetX,
        y: offsetY,
        width: rect.width,
        height: rect.height,
      });
      setVisible(true);
    },
    [disable],
  );

  const hideBubble = React.useCallback(() => {
    if (disable) {
      return;
    }
    setVisible(false);
  }, [disable]);

  const registerActive = React.useCallback(
    (element: HTMLElement | null) => {
      activeRef.current = element;
    },
    [],
  );

  React.useEffect(() => {
    return () => {
      if (hideTimeout.current) {
        window.clearTimeout(hideTimeout.current);
      }
    };
  }, []);

  const handlePointerEnter = React.useCallback(() => {
    if (hideTimeout.current) {
      window.clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
  }, []);

  const handlePointerLeave = React.useCallback(() => {
    if (hideTimeout.current) {
      window.clearTimeout(hideTimeout.current);
    }
    hideTimeout.current = window.setTimeout(() => {
      if (activeRef.current) {
        showBubble(activeRef.current);
      } else {
        hideBubble();
      }
    }, 80);
  }, [hideBubble, showBubble]);

  const contextValue = React.useMemo<HoverBubbleContextValue>(
    () => ({
      showBubble,
      hideBubble,
      registerActive,
    }),
    [hideBubble, registerActive, showBubble],
  );

  return (
    <HoverBubbleContext.Provider value={contextValue}>
      <div
        ref={containerRef}
        className={cn("relative isolate flex items-center", className)}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        {...rest}
      >
        {!disable ? (
          <motion.span
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-0 z-0 rounded-full",
              "bg-white/20 backdrop-blur-2xl",
              "border border-white/30 shadow-[0_16px_45px_-28px_rgba(15,23,42,0.7)]",
              "transition-colors",
              bubbleClassName,
            )}
            initial={false}
            animate={{
              opacity: visible ? 1 : 0,
              left: bubble.x,
              top: bubble.y,
              width: Math.max(bubble.width, 0),
              height: Math.max(bubble.height, 0),
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 30,
              mass: 0.6,
            }}
          />
        ) : null}
        {children}
      </div>
    </HoverBubbleContext.Provider>
  );
}

type HoverBubbleChildProps = React.HTMLAttributes<HTMLElement> & {
  className?: string;
};

export interface HoverBubbleItemProps {
  children: React.ReactElement<HoverBubbleChildProps>;
  className?: string;
  active?: boolean;
}

export const HoverBubbleItem = React.forwardRef<HTMLElement, HoverBubbleItemProps>(
  ({ children, className, active = false }, forwardedRef) => {
    const context = React.useContext(HoverBubbleContext);
    if (!context) {
      throw new Error("HoverBubbleItem must be used within a HoverBubbleGroup");
    }

    const { showBubble, hideBubble, registerActive } = context;
    const localRef = React.useRef<HTMLElement | null>(null);

    const childProps = children.props as HoverBubbleChildProps;
    const composedRef = React.useCallback(
      (node: HTMLElement | null) => {
        localRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }
        const childRef = (children as unknown as { ref?: React.Ref<HTMLElement> }).ref;
        if (childRef) {
          if (typeof childRef === "function") {
            childRef(node);
          } else {
            (childRef as React.MutableRefObject<HTMLElement | null>).current = node;
          }
        }
      },
      [children, forwardedRef],
    );

    const handlePointerEnter = React.useCallback(
      (event: React.PointerEvent<HTMLElement>) => {
        if (localRef.current) {
          showBubble(localRef.current);
        }
        if (childProps.onPointerEnter) {
          childProps.onPointerEnter(event);
        }
      },
      [childProps, showBubble],
    );

    const handleFocus = React.useCallback(
      (event: React.FocusEvent<HTMLElement>) => {
        if (localRef.current) {
          showBubble(localRef.current);
        }
        if (childProps.onFocus) {
          childProps.onFocus(event);
        }
      },
      [childProps, showBubble],
    );

    const handleBlur = React.useCallback(
      (event: React.FocusEvent<HTMLElement>) => {
        if (childProps.onBlur) {
          childProps.onBlur(event);
        }
        hideBubble();
      },
      [childProps, hideBubble],
    );

    React.useEffect(() => {
      if (active && localRef.current) {
        registerActive(localRef.current);
        showBubble(localRef.current);
      }
      return () => {
        if (active) {
          registerActive(null);
        }
      };
    }, [active, registerActive, showBubble]);

    return React.cloneElement(children, {
      ref: composedRef,
      className: cn(childProps.className, className),
      onPointerEnter: handlePointerEnter,
      onFocus: handleFocus,
      onBlur: handleBlur,
    } as HoverBubbleChildProps);
  },
);

HoverBubbleItem.displayName = "HoverBubbleItem";
