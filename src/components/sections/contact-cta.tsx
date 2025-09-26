"use client";

import Link from "next/link";
import { Send } from "lucide-react";

import { MagneticButton } from "@/components/bits/magnetic-button";
import { FadeIn } from "@/components/motion/fade-in";
import { useTranslations } from "@/lib/i18n/context";

export function ContactCTASection() {
  const { contactCTA, persona } = useTranslations();

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/70 px-8 py-12">
      <FadeIn>
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-primary/80">{contactCTA.eyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{contactCTA.title}</h2>
            <p className="max-w-xl text-muted-foreground">{contactCTA.description}</p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="text-sm text-muted-foreground">{contactCTA.emailLabel}</p>
            <Link href={`mailto:${persona.social.email}`} className="text-lg font-semibold text-primary">
              {persona.social.email}
            </Link>
            <MagneticButton asChild size="lg">
              <Link href="/contact" className="inline-flex items-center gap-2">
                {contactCTA.button}
                <Send className="h-4 w-4" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
