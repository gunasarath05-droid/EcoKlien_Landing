"use client";

import React from "react";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { GlossaryTerm, sortedGlossaryTerms, termLetter } from "@/data/glossary";
import { useMessages } from "@/i18n/LocaleProvider";
import { glossaryMessages } from "@/i18n/messages/glossary";

interface GlossaryTermCardProps {
  term?: GlossaryTerm;
  /** Index style: letter badge + roomy card. Related style: "Read definition" footer. */
  variant?: "index" | "related";
}

export default function GlossaryTermCard({
  term = sortedGlossaryTerms[0],
  variant = "index",
}: GlossaryTermCardProps) {
  const { term: t } = useMessages(glossaryMessages);
  if (!term) return null;
  if (variant === "related") {
    return (
      <Link
        href={`/glossary/${term.slug}`}
        className="group h-full flex flex-col justify-between gap-5 p-6 sm:p-7 rounded-[16px] bg-white border border-[#E5EBE6] hover:bg-[#F4F7F4] hover:border-[#D5DFD7] transition-all duration-300 shadow-xs"
      >
        <div className="space-y-2.5">
          <h3 className="text-[18px] font-semibold text-[#0E291E] tracking-tight group-hover:text-[#00A859] transition-colors">
            {term.title}
          </h3>
          <p className="text-[13px] text-[#55645C] leading-relaxed line-clamp-3">
            {term.cardSummary}
          </p>
        </div>
        <div className="pt-2">
          <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0E291E] group-hover:text-[#00A859] transition-colors">
            <span>{t.readDefinition}</span>
            <LuArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/glossary/${term.slug}`}
      className="group h-full min-h-[130px] flex flex-col justify-between gap-3 p-6 sm:p-7 rounded-[16px] bg-white border border-[#E5EBE6] hover:bg-[#F4F7F4] hover:border-[#D5DFD7] transition-all duration-300 shadow-xs"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <span className="shrink-0 w-6 h-6 rounded-[5px] bg-[#EBF1ED] group-hover:bg-white flex items-center justify-center text-[11px] font-mono text-[#4F6055] font-medium transition-colors border border-[#E0E7E2]">
            {termLetter(term)}
          </span>
          <h3 className="text-[18px] sm:text-[19px] font-semibold text-[#0E291E] tracking-tight group-hover:text-[#00A859] transition-colors leading-snug">
            {term.title}
          </h3>
        </div>
        <LuArrowUpRight className="shrink-0 mt-0.5 w-4 h-4 text-[#18251E] group-hover:text-[#00A859] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
      </div>
      <p className="text-[13px] sm:text-[13.5px] text-[#55645C] leading-relaxed">
        {term.cardSummary}
      </p>
    </Link>
  );
}
