import React from "react";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { GlossaryTerm, termLetter } from "@/data/glossary";

interface GlossaryTermCardProps {
  term: GlossaryTerm;
  /** Index style: letter badge + roomy card. Related style: "Read definition" footer. */
  variant?: "index" | "related";
}

export default function GlossaryTermCard({ term, variant = "index" }: GlossaryTermCardProps) {
  if (variant === "related") {
    return (
      <Link
        href={`/glossary/${term.slug}`}
        className="group h-full flex flex-col justify-between gap-5 p-5 sm:p-6 rounded-[6px] bg-white border border-[#E1E7E0] hover:bg-[#F0F3ED] hover:border-[#D7DED5] transition-colors duration-300"
      >
        <div className="space-y-2.5">
          <h3 className="text-[15px] sm:text-[16px] font-medium text-[#123D30] leading-snug">{term.title}</h3>
          <p className="text-[13px] text-[#647069] leading-relaxed">{term.cardSummary}</p>
        </div>
        <span className="inline-flex items-center gap-1 text-[12px] font-medium text-[#123D30] group-hover:text-[#009933] transition-colors">
          Read definition
          <LuArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={`/glossary/${term.slug}`}
      className="group h-full min-h-[134px] flex flex-col gap-4 p-5 sm:p-6 rounded-[6px] bg-white border border-[#E1E7E0] hover:bg-[#F0F3ED] hover:border-[#D7DED5] transition-colors duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <span className="shrink-0 w-[22px] h-[22px] rounded-[4px] bg-[#F0F3ED] group-hover:bg-white flex items-center justify-center text-[9.5px] font-mono text-[#647069] transition-colors">
            {termLetter(term)}
          </span>
          <h3 className="text-[16px] sm:text-[17px] font-medium text-[#123D30] leading-snug">{term.title}</h3>
        </div>
        <LuArrowUpRight className="shrink-0 mt-1 w-4 h-4 text-[#123D30] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <p className="text-[13px] sm:text-[13.5px] text-[#647069] leading-relaxed">{term.cardSummary}</p>
    </Link>
  );
}
