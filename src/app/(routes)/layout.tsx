import * as React from "react";

import { SiteShell } from "@/components/layout/site-shell";

export default function RoutesLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
