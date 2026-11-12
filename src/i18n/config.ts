/**
 * Site languages.
 *
 * How translation works (see src/i18n/README.md):
 * - The chosen language is stored in the `lang` cookie; URLs stay the same.
 * - UI text lives in typed dictionaries (src/i18n/messages/*.ts) — en/es/ar must have the same keys.
 * - Long content lives in src/data/*.ts (English, the source of truth) with translations in
 *   src/data/i18n/{es,ar}/*.ts. Untranslated items fall back to English, never to a guess.
 */

export const locales = ["en", "es", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const LOCALE_COOKIE = "lang";

export const localeMeta: Record<Locale, { label: string; short: string; dir: "ltr" | "rtl"; htmlLang: string }> = {
  en: { label: "English", short: "en", dir: "ltr", htmlLang: "en" },
  es: { label: "Español", short: "es", dir: "ltr", htmlLang: "es" },
  ar: { label: "العربية", short: "ar", dir: "rtl", htmlLang: "ar" },
};

export const isLocale = (value: unknown): value is Locale =>
  typeof value === "string" && (locales as readonly string[]).includes(value);
