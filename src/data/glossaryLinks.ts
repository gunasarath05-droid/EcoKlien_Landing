/**
 * Auto-links glossary terms inside blog articles, the way the glossary tooltip plugin on
 * ecoklien.com does: the first mention of each glossary term in a post links to /glossary/<slug>.
 *
 * It runs when the article is rendered (server side), so posts never need glossary links written
 * into their text, whether they come from src/data/blog.ts or, later, from the backend.
 * Text that is already a [label](href) link is left alone, and headings are not linked.
 */

import type { Locale } from "@/i18n/config";
import type { BlogPost } from "./blog";
import { getGlossaryTerms } from "./glossary";

const LINK = /\[(?:\[[^\]]+\]|[^\]]+)\]\([^)\s]+\)/g;
const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Phrases that mark a term: its full title and the title without a trailing "(ABBR)". */
function termPhrases(locale: Locale) {
  const phrases = new Map<string, string>(); // lower-cased phrase -> slug
  const locales: Locale[] = locale === "en" ? ["en"] : [locale, "en"]; // untranslated posts are English
  for (const loc of locales) {
    for (const term of getGlossaryTerms(loc)) {
      for (const phrase of [term.title, term.title.replace(/\s*\([^)]*\)\s*$/, "")]) {
        if (phrase && !phrases.has(phrase.toLowerCase())) phrases.set(phrase.toLowerCase(), term.slug);
      }
    }
  }
  return phrases;
}

export function linkGlossaryTerms(post: BlogPost, locale: Locale): BlogPost {
  if (!post.content) return post;

  const phrases = termPhrases(locale);
  // Longest phrase first, so "Hospital Wastewater" wins over "Wastewater".
  const alternation = [...phrases.keys()].sort((a, b) => b.length - a.length).map(escapeRegExp).join("|");
  const termPattern = new RegExp(`(?<![\\p{L}\\p{N}])(?:${alternation})(?![\\p{L}\\p{N}])`, "giu");
  const linked = new Set<string>();

  const linkPlain = (plain: string) =>
    plain.replace(termPattern, (match) => {
      const slug = phrases.get(match.toLowerCase());
      if (!slug || linked.has(slug)) return match;
      linked.add(slug);
      return `[${match}](/glossary/${slug})`;
    });

  // Only touch the text between existing links.
  const link = (text: string) => {
    let out = "";
    let last = 0;
    for (const m of text.matchAll(LINK)) {
      out += linkPlain(text.slice(last, m.index)) + m[0];
      last = (m.index ?? 0) + m[0].length;
    }
    return out + linkPlain(text.slice(last));
  };

  const { content } = post;
  // Same order the article renders: lead, then each section's paragraphs.
  const leadParagraph = link(content.leadParagraph);
  const sections = content.sections.map((section) => ({
    ...section,
    paragraphs: section.paragraphs.map(link),
  }));

  return { ...post, content: { ...content, leadParagraph, sections } };
}
