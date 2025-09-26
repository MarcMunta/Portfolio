"use client";

import * as React from "react";

import { defaultLocale, getDictionary, locales } from "./dictionary";
import type { Locale, TranslationBundle } from "./types";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  translations: TranslationBundle;
}

const LanguageContext = React.createContext<LanguageContextValue | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
  initialLocale?: Locale;
}

export function LanguageProvider({ children, initialLocale = defaultLocale }: LanguageProviderProps) {
  const [locale, setLocale] = React.useState<Locale>(initialLocale);

  const translations = React.useMemo(() => getDictionary(locale), [locale]);

  const value = React.useMemo(
    () => ({
      locale,
      setLocale: (nextLocale: Locale) => {
        if (locales.includes(nextLocale)) {
          setLocale(nextLocale);
        }
      },
      translations,
    }),
    [locale, translations],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function useTranslations() {
  const { translations } = useLanguage();
  return translations;
}
