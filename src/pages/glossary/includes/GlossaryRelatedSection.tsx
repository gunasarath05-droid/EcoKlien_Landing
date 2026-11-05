import React from "react";
import Link from "next/link";
import { GlossaryTerm, getRelatedTerms } from "@/data/glossary";
import GlossaryTermCard from "./GlossaryTermCard";

export default function GlossaryRelatedSection({ term }: { term: GlossaryTerm }) {
  const related = getRelatedTerms(term);
  if (related.length === 0) return null;

  return (
    <section className="pt-6 pb-10 sm:pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-5">
          <h2 className="text-[22px] sm:text-[24px] font-medium text-[#123D30] tracking-tight">Keep exploring.</h2>
          <Link
            href="/glossary"
            className="pb-1 text-[10px] font-mono text-[#738479] hover:text-[#009933] transition-colors"
          >
            ← Back to glossary
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {related.map((t) => (
            <GlossaryTermCard key={t.slug} term={t} variant="related" />
          ))}
        </div>
      </div>
    </section>
  );
}
