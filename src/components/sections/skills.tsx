"use client";

import { AnimatedCard } from "@/components/bits/animated-card";
import { FadeIn } from "@/components/motion/fade-in";
import { useTranslations } from "@/lib/i18n/context";

export function SkillsSection() {
  const { skills } = useTranslations();

  return (
    <section id="skills" className="space-y-10">
      <FadeIn>
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.4em] text-primary/80">{skills.eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{skills.title}</h2>
          <p className="max-w-2xl text-muted-foreground">{skills.headline}</p>
        </div>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-3">
        {skills.stacks.map((stack, index) => (
          <FadeIn key={stack.title} delay={index * 0.1}>
            <AnimatedCard className="h-full">
              <div className="flex h-full flex-col gap-4">
                <div className="text-sm uppercase tracking-[0.3em] text-primary/70">{stack.title}</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {stack.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                      {item}
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
