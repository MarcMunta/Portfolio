"use client";

import { AnimatedCard } from "@/components/bits/animated-card";
import { FadeIn } from "@/components/motion/fade-in";
import { useTranslations } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

interface DeviceMockupProps {
  label: string;
  accent: string;
}

function DeviceMockup({ label, accent }: DeviceMockupProps) {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className={cn("pointer-events-none absolute inset-x-4 top-2 h-28 rounded-[2.5rem] bg-gradient-to-br blur-2xl", accent)} />
      <div className="relative h-36 w-24 rounded-[1.8rem] border border-border/70 bg-background/80 shadow-[0_16px_40px_-24px_rgba(56,189,248,0.65)]">
        <div className="absolute inset-[6px] rounded-[1.4rem] border border-border/60 bg-card/70 backdrop-blur-xl" />
        <div className="absolute left-1/2 top-3 h-1.5 w-8 -translate-x-1/2 rounded-full bg-border/60" />
        <div className="absolute inset-x-5 bottom-3 h-1.5 rounded-full bg-border/40" />
      </div>
      <span className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
    </div>
  );
}

export function MultiplatformSection() {
  const { multiplatform } = useTranslations();

  return (
    <section id="multiplatform" className="space-y-10">
      <FadeIn>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-primary/80">{multiplatform.eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{multiplatform.title}</h2>
          <p className="max-w-2xl text-muted-foreground">{multiplatform.description}</p>
        </div>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2">
        {multiplatform.capabilities.map((capability, index) => (
          <FadeIn key={capability.title} delay={index * 0.1}>
            <AnimatedCard className="h-full">
              <div className="flex h-full flex-col gap-6">
                <DeviceMockup label={capability.mockupLabel} accent={capability.accent} />
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                </div>
                <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  {capability.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
