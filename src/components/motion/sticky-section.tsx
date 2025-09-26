import * as React from "react";

import { cn } from "@/lib/utils";

type StickySectionComponent = React.ElementType<{ className?: string; children?: React.ReactNode }>;

interface StickySectionProps {
  children: React.ReactNode;
  className?: string;
  stickyClassName?: string;
  as?: StickySectionComponent;
  top?: string;
}

export function StickySection({
  children,
  className,
  stickyClassName,
  as: Component = "section",
  top = "calc(var(--header-height, 4rem) + 2rem)",
}: StickySectionProps) {
  return (
    <Component className={cn("relative", className)}>
      <div className={cn("sticky", stickyClassName)} style={{ top }}>
        {children}
      </div>
    </Component>
  );
}
