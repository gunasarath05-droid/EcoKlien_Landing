import React from "react";
import Link from "next/link";

/**
 * Renders the small inline-markdown subset used in glossary data:
 *   [label](href), [[Source]](href) citation chips, and **bold**.
 */
const TOKEN = /\[((?:\[[^\]]+\])|[^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

export default function GlossaryRichText({ text = "" }: { text?: string }) {
  if (!text) return null;
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const match of text.matchAll(TOKEN)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));

    const [, label, href, bold] = match;

    if (bold) {
      nodes.push(
        <strong key={key++} className="font-semibold text-[#0E291E]">
          {bold}
        </strong>
      );
    } else if (label && href) {
      const isCitation = label.startsWith("[") && label.endsWith("]");
      const isInternal = href.startsWith("/");
      const className = isCitation
        ? "inline-flex items-center align-middle px-1.5 py-0.5 rounded-md bg-[#EEF6F1] border border-[#D9EADF] text-[11px] font-mono uppercase tracking-wider text-[#00A859] hover:bg-[#00A859] hover:text-white transition-colors no-underline"
        : "text-[#00A859] font-medium underline decoration-[#00A859]/30 underline-offset-[3px] hover:decoration-[#00A859] transition-colors";
      const content = isCitation ? label.slice(1, -1) : label;

      nodes.push(
        isInternal ? (
          <Link key={key++} href={href} className={className}>
            {content}
          </Link>
        ) : (
          <a key={key++} href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {content}
          </a>
        )
      );
    }

    last = index + match[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));

  return <>{nodes}</>;
}
