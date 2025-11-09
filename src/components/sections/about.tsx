"use client";

import { Boxes, Cpu, Network, NotebookPen } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { useTranslations } from "@/lib/i18n/context";

const iconMap = {
  NotebookPen,
  Network,
  Boxes,
  Cpu,
};

export function AboutSection() {
  const { about, milestones, skills } = useTranslations();

  return (
    <section id="about" className="space-y-16">
      <FadeIn>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="space-y-10 lg:col-span-7">
            <div className="space-y-4">
              <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary/90">
                {about.eyebrow}
              </span>
              <h2 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
                {about.title}
              </h2>
              <p className="text-lg text-primary/80">{about.tagline}</p>
              <p className="max-w-2xl text-muted-foreground">{about.description}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {about.focusAreas.map((area) => {
                const Icon = iconMap[area.icon];
                return (
                  <div
                    key={area.title}
                    className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-5 shadow-[0_12px_40px_-24px_rgba(56,189,248,0.4)]"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10 space-y-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/80 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground">{area.title}</h3>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-primary/10 via-background/80 to-secondary/10 p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.3)_0,transparent_55%)]" />
              <div className="relative z-10 space-y-6">
                <p className="text-xs uppercase tracking-[0.4em] text-primary/80">{about.signature.ribbon}</p>
                <h3 className="text-pretty text-2xl font-semibold text-foreground">{about.signature.title}</h3>
                <p className="max-w-2xl text-sm text-muted-foreground">{about.signature.description}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {about.signature.highlights.map((highlight) => (
                    <div
                      key={highlight.label}
                      className="rounded-2xl border border-border/60 bg-background/70 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-primary/60">{highlight.label}</p>
                      <p className="mt-2 text-sm font-medium text-foreground">{highlight.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.25)_0,transparent_60%)]" />
              <div className="relative z-10 space-y-6">
                <p className="text-xs uppercase tracking-[0.4em] text-primary/80">{about.bioCard.label}</p>
                <h3 className="text-pretty text-2xl font-semibold text-foreground">{about.bioCard.highlight}</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  {about.bioCard.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {about.bioCard.quickFacts.map((fact) => (
                    <div key={fact.label} className="rounded-2xl border border-border/60 bg-background/70 p-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-primary/60">{fact.label}</p>
                      <p className="mt-2 text-sm font-medium text-foreground">{fact.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border/60 bg-card/70 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-primary/70">{about.bioCard.currentTitle}</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {about.bioCard.currentItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border/60 bg-card/60 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-primary/70">{about.bioCard.marqueeLabel}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.primary.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(14,165,233,0.25)_0,transparent_60%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[0.45fr_1.55fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-primary/80">{about.timelineTitle}</p>
              <p className="text-sm text-muted-foreground">{about.timelineDescription}</p>
            </div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={`${milestone.period}-${milestone.title}-${index}`}
                  className="relative pl-12"
                >
                  <span className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {index + 1}
                  </span>
                  {index < milestones.length - 1 ? (
                    <span className="absolute left-[1.125rem] top-9 h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-primary/40 via-border/50 to-transparent" />
                  ) : null}
                  <p className="text-xs uppercase tracking-[0.4em] text-primary/70">{milestone.period}</p>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{milestone.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
