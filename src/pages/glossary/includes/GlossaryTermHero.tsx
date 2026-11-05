"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { GlossaryTerm } from "@/data/glossary";

export default function GlossaryTermHero({ term }: { term: GlossaryTerm }) {
  return (
    <section className="pt-10 sm:pt-12 pb-10 sm:pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-[10.5px] font-mono uppercase text-[#738479] tracking-wider mb-8 sm:mb-10">
          <Link href="/" className="hover:text-[#00B050] transition-colors">
            HOME
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#00B050] transition-colors">
            MEDIA
          </Link>
          <span>/</span>
          <Link href="/glossary" className="hover:text-[#00B050] transition-colors">
            GLOSSARY
          </Link>
          <span>/</span>
          <span className="text-[#18251E]">{term.title}</span>
        </div>

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1 h-1 bg-[#00A859] shrink-0" />
          <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#5D6B62]">THE BIOMEDICAL GLOSSARY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-3"
          >
            <h1 className="text-[34px] sm:text-[42px] lg:text-[46px] font-medium text-[#123D30] tracking-tight leading-[1.05] max-w-[12ch]">
              {term.title}
            </h1>
            {term.pronunciation && (
              <p className="text-[13px] font-mono text-[#738479]">/{term.pronunciation}/</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pt-2 space-y-4"
          >
            <p className="text-[13.5px] sm:text-[14px] text-[#55645C] leading-relaxed max-w-sm">{term.intro}</p>
            <div className="text-[9.5px] font-mono uppercase tracking-wider text-[#738479]">
              {term.category} / TERM GUIDE
            </div>
          </motion.div>
        </div>

        {/* In simple terms */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-12 rounded-[6px] bg-[#EEF3EC] border border-[#E1E9DF] px-5 py-6 sm:px-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6"
        >
          <div className="md:col-span-3 text-[9.5px] font-mono uppercase tracking-wider text-[#5D6B62] pt-1">
            IN SIMPLE TERMS
          </div>
          <p className="md:col-span-9 text-[15px] sm:text-[16px] text-[#123D30] leading-relaxed max-w-3xl">
            {term.simpleTerms}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
