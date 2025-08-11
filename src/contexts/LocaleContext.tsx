"use client";
import React, { createContext, useContext, useMemo, useState } from "react";
import { translations, SupportedLocale } from "@/i18n/locales";

interface LocaleContextValue {
  locale: SupportedLocale;
  t: (key: string) => string;
  setLocale: (locale: SupportedLocale) => void;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children, initialLocale = "tr" as SupportedLocale }: { children: React.ReactNode; initialLocale?: SupportedLocale }) {
  const [locale, setLocale] = useState<SupportedLocale>(initialLocale);

  // Locale is controlled by the URL via [locale]/layout; avoid client-side overrides to prevent flicker

  const t = useMemo(() => {
    const dict = translations[locale] ?? translations.tr;
    return (key: string) => dict[key] ?? key;
  }, [locale]);

  const value = useMemo<LocaleContextValue>(() => ({
    locale,
    t,
    setLocale,
    toggleLocale: () => setLocale((prev) => (prev === "tr" ? "en" : "tr")),
  }), [locale, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
