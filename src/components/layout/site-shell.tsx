import * as React from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ScrollProgress } from "@/components/layout/scroll-progress";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <ScrollProgress />
      <SiteHeader />
      <main className="mx-auto mt-12 flex min-h-[calc(100vh-6rem)] w-full max-w-5xl flex-col gap-24 px-4">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
