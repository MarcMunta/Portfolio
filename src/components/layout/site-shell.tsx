import * as React from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { BubbleBackground } from "@/components/ui/bubble-background";
import { PdfPreviewer } from "@/components/pdf/pdf-previewer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <BubbleBackground quantity={5} blur="xl" className="-z-10 opacity-70 saturate-[1.25]" />
      <ScrollProgress />
      <SiteHeader />
      <main className="relative z-10 mx-auto mt-12 flex min-h-[calc(100vh-6rem)] w-full max-w-5xl flex-col gap-24 px-4">
        {children}
      </main>
      <SiteFooter />
      {/* Global PDF previewer: intercepts clicks en enlaces .pdf y abre un diálogo de vista previa */}
      <PdfPreviewer />
    </div>
  );
}
