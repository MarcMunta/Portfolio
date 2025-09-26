"use client";

import Link from "next/link";

import { useTranslations } from "@/lib/i18n/context";
import { cn, isExternalUrl } from "@/lib/utils";

export function SiteFooter() {
  const { persona, contactChannels, footer } = useTranslations();

  return (
    <footer className="mt-24 border-t border-border/70 bg-background/80">
      <div className="container mx-auto flex flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80">{persona.title}</p>
          <h2 className="mt-2 text-2xl font-semibold">{persona.name}</h2>
          <p className="mt-2 max-w-lg text-muted-foreground">{persona.shortBio}</p>
        </div>
        <div className="flex flex-col items-start gap-4 text-sm text-muted-foreground md:items-end">
          {contactChannels.map((channel) => (
            <Link
              key={channel.label}
              href={channel.href}
              target={isExternalUrl(channel.href) ? "_blank" : undefined}
              rel={isExternalUrl(channel.href) ? "noreferrer" : undefined}
              className={cn("transition-colors hover:text-foreground")}
            >
              <span className="font-medium text-foreground">{channel.label}</span>
              <span className="ml-2">{channel.value}</span>
            </Link>
          ))}
          <p className="text-xs text-muted-foreground/70">{footer.updated} {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
