import * as React from "react";

import { cn } from "@/lib/utils";

const Separator = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("h-px w-full bg-border", className)} {...props} />
);
Separator.displayName = "Separator";

export { Separator };
