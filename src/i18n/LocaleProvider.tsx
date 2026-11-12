"use client";

import React, { createContext, useCallback, useContext, useTransition } from "react";
import { useRouter } from "next/navigation";
import { LOCALE_COOKIE, defaultLocale, localeMeta, type Locale } from "./config";
import type { Messages } from "./messages";

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isPending: boolean;
}>({ locale: defaultLocale, setLocale: () => {}, isPending: false });

export function LocaleProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return;
      document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
      // Apply direction immediately; the server re-render then confirms it
      document.documentElement.lang = localeMeta[next].htmlLang;
      document.documentElement.dir = localeMeta[next].dir;
      startTransition(() => router.refresh());
    },
    [locale, router]
  );

  return <LocaleContext.Provider value={{ locale, setLocale, isPending }}>{children}</LocaleContext.Provider>;
}

/** Current language in client components. */
export function useLocale() {
  return useContext(LocaleContext);
}

/** Pick the current language's strings from a dictionary made with defineMessages(). */
export function useMessages<T>(messages: Messages<T>): T {
  const { locale } = useLocale();
  return messages[locale];
}
