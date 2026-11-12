# Translations (English · Español · العربية)

The site supports English (`en`, default), Spanish (`es`) and Arabic (`ar`, right-to-left).
The language is chosen from the globe dropdown in the navbar and stored in the `lang` cookie;
URLs are the same in every language.

English is always the source of truth. Spanish and Arabic are careful, meaning-preserving
translations — never machine-translated text pasted in unchecked.

## Where text lives

| Kind of text | Where | How it is used |
|---|---|---|
| Short UI text: headings, labels, buttons, page metadata | `src/i18n/messages/<area>.ts`, written with `defineMessages(en, es, ar)` | client: `const t = useMessages(xMessages)` · server: `xMessages[await getLocale()]` |
| Long content lists (glossary terms, blog posts, products, FAQ, …) | English in `src/data/<name>.ts`; translations in `src/data/i18n/es/<name>.ts` and `src/data/i18n/ar/<name>.ts` | an accessor in the English file, e.g. `getGlossaryTerms(locale)`, built with `localizeList()` |
| Values that never change by language: images, links, slugs, emails, phone numbers | the English data file only | — |

## Updating content

- **Change English UI text** → edit the `en` object in the messages file, then update the same key
  in `es` and `ar`. Adding or removing a key in only one language is a TypeScript error, so nothing is missed.
- **Add a new item to a content list** (a new glossary term, post, product…) → add it to the English
  data file. Until a translation is added, Spanish and Arabic visitors see that item in English
  (never a wrong translation). Then add the translated text fields, with the same `slug`/`id`,
  to `src/data/i18n/es/…` and `src/data/i18n/ar/…`.
- **Edit an existing item's text** → edit English, then the matching `es` and `ar` entries.
- **Change an image, link or slug** → English data file only; translations inherit it.

A translated item contains only its key and the fields that are text. It is merged over the
English item, so non-text fields are maintained once.

## Right-to-left (Arabic)

- `<html dir="rtl">` is set automatically for Arabic.
- Use logical Tailwind classes so layouts mirror: `ms-/me-` (not `ml-/mr-`), `ps-/pe-`, `start-/end-`
  (not `left-/right-`), `text-start/text-end`, `border-s/border-e`, `rounded-s/rounded-e`.
- Directional icons (→ ↗ ←) get `rtl:-scale-x-100`.
- Phone numbers, emails, URLs and IDs keep `dir="ltr"`.
- Letter-spacing is switched off for Arabic in `globals.css` (it breaks the joined script).
