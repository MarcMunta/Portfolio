"use client";

import { AnimatedCard } from "@/components/bits/animated-card";
import { FadeIn } from "@/components/motion/fade-in";
import { useTranslations } from "@/lib/i18n/context";

export function AboutPageContent() {
  const { persona, about, aboutPage, milestones, achievements } = useTranslations();

  return (
    <div className="space-y-12">
      <FadeIn>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-primary/80">{about.eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{persona.name}</h1>
          <p className="max-w-3xl text-muted-foreground">{about.description}</p>
        </div>
      </FadeIn>

      <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <FadeIn>
          <AnimatedCard>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">{about.focusTitle}</h2>
              <p className="text-sm text-muted-foreground">{about.focusDescription}</p>
              {about.bioCard.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedCard>
        </FadeIn>
        <FadeIn delay={0.1}>
          <AnimatedCard>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">{about.bioCard.currentTitle}</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {about.bioCard.currentItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedCard>
        </FadeIn>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">{about.timelineTitle}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {milestones.map((milestone, index) => (
            <FadeIn key={milestone.period} delay={index * 0.1}>
              <AnimatedCard className="h-full">
                <div className="flex h-full flex-col gap-3">
                  <p className="text-xs uppercase tracking-[0.4em] text-primary/70">{milestone.period}</p>
                  <h3 className="text-lg font-semibold">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              </AnimatedCard>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">{aboutPage.achievementsTitle}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <FadeIn key={achievement.title} delay={index * 0.1}>
              <AnimatedCard className="h-full">
                <div className="flex h-full flex-col gap-3">
                  <p className="text-xs uppercase tracking-[0.4em] text-primary/70">{achievement.year}</p>
                  <h3 className="text-lg font-semibold">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </AnimatedCard>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
