"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

export default function GlossaryHeroSection() {
  return (
    <section className="pt-10 sm:pt-12 pb-10 sm:pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10.5px] font-mono uppercase text-[#738479] tracking-wider mb-8 sm:mb-10">
          <Link href="/" className="hover:text-[#00B050] transition-colors">
            HOME
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#00B050] transition-colors">
            MEDIA
          </Link>
          <span>/</span>
          <span className="text-[#18251E]">GLOSSARY</span>
        </div>

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-5">
          <span className="w-1 h-1 bg-[#00A859] shrink-0" />
          <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#5D6B62]">GLOSSARY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h1 className="text-[36px] sm:text-[44px] lg:text-[46px] font-medium text-[#123D30] tracking-tight leading-[1.02]">
              The biomedical
              <br />
              glossary.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pt-2"
          >
            <p className="text-[13.5px] sm:text-[14px] text-[#55645C] leading-relaxed max-w-sm">
              A clearer understanding of the words behind safer healthcare. Explore key terms in biomedical waste, water and treatment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
