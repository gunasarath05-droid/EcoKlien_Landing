"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { GlossaryTerm, sortedGlossaryTerms } from "@/data/glossary";
import { useMessages } from "@/i18n/LocaleProvider";
import { glossaryMessages } from "@/i18n/messages/glossary";

export default function GlossaryTermHero({
  term = sortedGlossaryTerms[0],
}: {
  term?: GlossaryTerm;
}) {
  const { breadcrumb, term: t } = useMessages(glossaryMessages);
  if (!term) return null;

  return (
    <section className="pt-10 sm:pt-14 pb-8 sm:pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono uppercase text-[#738479] tracking-wider mb-8">
          <Link href="/" className="hover:text-[#00B050] transition-colors">
            {breadcrumb.home}
          </Link>
          <span>/</span>
          <span>{breadcrumb.media}</span>
          <span>/</span>
          <Link href="/glossary" className="hover:text-[#00B050] transition-colors">
            {breadcrumb.glossary}
          </Link>
          <span>/</span>
          <span className="text-[#18251E] font-medium">{term.title}</span>
        </div>

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
          <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#5D6B62]">
            {t.eyebrow}
          </span>
        </div>

        {/* Title + Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-2"
          >
            <h1 className="text-[34px] sm:text-[44px] lg:text-[50px] font-semibold text-[#0E291E] tracking-tight leading-[1.05] max-w-xl">
              {term.title}
            </h1>
            {term.pronunciation && (
              <p className="text-[13px] font-mono text-[#738479]">
                <span dir="ltr">/{term.pronunciation}/</span>
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pb-1 space-y-4"
          >
            <p className="text-[14px] sm:text-[15px] text-[#55645C] leading-relaxed font-normal max-w-md">
              {term.intro}
            </p>
            <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#738479]">
              {term.category} / {t.termGuide}
            </div>
          </motion.div>
        </div>

        {/* In simple terms */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-12 rounded-[18px] sm:rounded-[20px] bg-[#EEF3EC] border border-[#DCE4DA] p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start"
        >
          <div className="md:col-span-3 text-[11px] font-mono uppercase tracking-[0.14em] text-[#738479] pt-1.5">
            {t.inSimpleTerms}
          </div>
          <p className="md:col-span-9 text-[17px] sm:text-[19px] font-medium text-[#0E291E] leading-relaxed">
            {term.simpleTerms}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
