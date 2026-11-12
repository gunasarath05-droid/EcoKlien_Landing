import React from "react";
import Link from "next/link";
import { GlossaryTerm, getRelatedTerms, sortedGlossaryTerms } from "@/data/glossary";
import GlossaryTermCard from "./GlossaryTermCard";

export default function GlossaryRelatedSection({
  term = sortedGlossaryTerms[0],
}: {
  term?: GlossaryTerm;
}) {
  if (!term) return null;
  const related = getRelatedTerms(term).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section className="pt-4 pb-16 sm:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-[26px] sm:text-[30px] font-semibold text-[#0E291E] tracking-tight">
            Keep exploring.
          </h2>
          <Link
            href="/glossary"
            className="pb-1.5 text-[12px] text-[#738479] hover:text-[#00A859] transition-colors"
          >
            ← Back to glossary
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {related.map((t) => (
            <GlossaryTermCard key={t.slug} term={t} variant="related" />
          ))}
        </div>
      </div>
    </section>
  );
}
