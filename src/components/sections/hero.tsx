"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { useReducedMotion } from "framer-motion";

import { AnimatedBackground } from "@/components/bits/animated-background";
import { MagneticButton } from "@/components/bits/magnetic-button";
import { TextReveal } from "@/components/bits/text-reveal";
import { TextScramble } from "@/components/bits/text-scramble";
import { FadeIn } from "@/components/motion/fade-in";
import { useTranslations } from "@/lib/i18n/context";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { persona, hero } = useTranslations();

  return (
    <section className="relative overflow-hidden">
      <AnimatedBackground className="rounded-[2.5rem] border border-border/80 bg-background/60 p-10 md:p-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-primary/80">{persona.location}</p>
            <FadeIn>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                <TextReveal text={hero.headline} />
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="max-w-xl text-pretty text-lg text-muted-foreground">{hero.description}</p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton asChild>
                  <Link href="/projects?category=web" className="inline-flex items-center gap-2">
                    {hero.primaryAction}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </MagneticButton>
                <MagneticButton asChild variant="secondary">
                  <Link href="/projects?category=multiplataforma" className="inline-flex items-center gap-2">
                    {hero.secondaryAction}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </MagneticButton>
                <MagneticButton asChild variant="outline">
                  <Link
                    href="/Marc-Muntane-Clara-CV.pdf"
                    download="Marc-Muntane-Clara-CV.pdf"
                    className="inline-flex items-center gap-2"
                  >
                    {hero.tertiaryAction}
                    <Download className="h-4 w-4" />
                  </Link>
                </MagneticButton>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <TextScramble text={persona.availability} className="text-sm text-muted-foreground" />
            </FadeIn>
          </div>
          <FadeIn delay={0.25}>
            <div className="relative flex items-center justify-center">
              <div className="relative flex h-[320px] w-full max-w-sm items-center justify-center overflow-hidden rounded-[2rem] border border-border/70 bg-card/70 p-8 shadow-glow">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20" />
                <div className="relative z-10 flex flex-col items-center gap-6 text-center">
                  <div className="rounded-full border border-border/80 bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                    {hero.cardLabel}
                  </div>
                  <p className="text-balance text-lg font-medium text-muted-foreground">{hero.cardStack}</p>
                  <p className="text-sm text-muted-foreground">{hero.cardDescription}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.5}>
          <div className="mt-12 flex items-center gap-3 text-sm text-muted-foreground">
            <ArrowDown className="h-4 w-4" />
            {reduceMotion ? hero.scrollHintReduced : hero.scrollHintActive}
          </div>
        </FadeIn>
      </AnimatedBackground>
    </section>
  );
}
