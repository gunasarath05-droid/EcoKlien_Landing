import type { Locale } from "./config";

export type Messages<T> = Record<Locale, T>;

/**
 * Define UI strings for every language in one place.
 * The English object sets the shape; Spanish and Arabic must have exactly the same keys,
 * so adding an English string without its translations is a type error.
 *
 *   export const heroMessages = defineMessages(
 *     { title: "Contact Us" },
 *     { title: "Contáctenos" },
 *     { title: "اتصل بنا" },
 *   );
 *   const t = useMessages(heroMessages);   // client
 *   const t = heroMessages[await getLocale()]; // server
 */
export function defineMessages<T>(en: T, es: NoInfer<T>, ar: NoInfer<T>): Messages<T> {
  return { en, es, ar };
}
