"use client";

import { cn } from "@/lib/utils";
import { locales, type Locale } from "@/lib/data";
import { useLanguage, useTranslations } from "@/lib/i18n/context";

const orderedLocales: Locale[] = ["es", "ca", "en"];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const { languageNames } = useTranslations();

  return (
    <div className="flex items-center gap-1 rounded-full border border-border/70 bg-background/80 p-1 shadow-inner backdrop-blur">
      {orderedLocales.map((code) => {
        if (!locales.includes(code)) {
          return null;
        }
        const isActive = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-medium uppercase tracking-[0.2em] transition-colors",
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
            aria-pressed={isActive}
            aria-label={languageNames[code]}
            title={languageNames[code]}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
