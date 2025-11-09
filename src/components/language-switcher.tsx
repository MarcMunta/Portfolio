"use client";

import { cn } from "@/lib/utils";
import { locales, type Locale } from "@/lib/data";
import { useLanguage, useTranslations } from "@/lib/i18n/context";
import { HoverBubbleGroup, HoverBubbleItem } from "@/components/ui/hover-bubble-group";

const orderedLocales: Locale[] = ["es", "ca", "en"];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const { languageNames } = useTranslations();

  return (
    <HoverBubbleGroup
      className="rounded-full border border-black/10 bg-white px-1.5 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl transition-colors duration-500 dark:border-white/15 dark:bg-neutral-900/70 dark:shadow-none"
      bubbleClassName="rounded-full bg-primary/15 backdrop-blur-sm border border-primary/40 shadow-[0_4px_18px_-4px_rgba(59,130,246,0.45)] dark:bg-primary/25 dark:border-white/20 dark:shadow-[0_12px_34px_-14px_rgba(59,130,246,0.7)]"
      padding={0}
    >
      {orderedLocales.map((code) => {
        if (!locales.includes(code)) {
          return null;
        }
        const isActive = locale === code;

        return (
          <HoverBubbleItem key={code} active={isActive}>
            <button
              type="button"
              onClick={() => setLocale(code)}
              className={cn(
                "relative block rounded-full px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.3em] transition-colors duration-300",
                isActive
                  ? "font-semibold text-black dark:text-white"
                  : "text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white",
              )}
              {...(isActive ? { "aria-pressed": "true" as const } : {})}
              aria-label={languageNames[code]}
              title={languageNames[code]}
            >
              <span className="relative z-10">{code}</span>
            </button>
          </HoverBubbleItem>
        );
      })}
    </HoverBubbleGroup>
  );
}
