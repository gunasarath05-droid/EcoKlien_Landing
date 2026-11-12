import type { Locale } from "./config";

export type TranslatedLocale = Exclude<Locale, "en">;

/**
 * Translate a list of content items (terms, posts, products…). English is the source of truth:
 * - Order and membership always follow the English list.
 * - A translation holds only the text fields (plus the key); it is merged over the English item,
 *   so images, links and slugs are maintained once, in the English data file.
 * - Items without a translation stay in English — new English content never shows a wrong translation.
 *
 *   localizeList(locale, glossaryTerms, { es: glossaryTermsEs, ar: glossaryTermsAr }, "slug")
 */
export function localizeList<T extends object, K extends keyof T>(
  locale: Locale,
  english: readonly T[],
  translations: Partial<Record<TranslatedLocale, readonly (Partial<T> & Pick<T, K>)[]>>,
  key: K
): T[] {
  if (locale === "en") return [...english];
  const translated = translations[locale];
  if (!translated?.length) return [...english];
  const byKey = new Map(translated.map((item) => [item[key], item]));
  return english.map((item) => {
    const tr = byKey.get(item[key]);
    return tr ? { ...item, ...tr } : item;
  });
}

/**
 * Translate a single content object (shallow merge over English), or a plain value.
 * Missing translations fall back to English.
 */
export function localizeValue<T>(
  locale: Locale,
  english: T,
  translations: Partial<Record<TranslatedLocale, T extends object ? Partial<T> : T>>
): T {
  if (locale === "en") return english;
  const tr = translations[locale];
  if (tr === undefined) return english;
  if (typeof english === "object" && english !== null && !Array.isArray(english)) {
    return { ...english, ...(tr as object) } as T;
  }
  return tr as T;
}
