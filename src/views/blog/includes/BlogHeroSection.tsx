"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useMessages } from "@/i18n/LocaleProvider";
import { blogMessages } from "@/i18n/messages/blog";

export default function BlogHeroSection() {
  const t = useMessages(blogMessages);
  return (
    <section className="pt-12 sm:pt-16 pb-8 sm:pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] font-mono uppercase text-[#738479] tracking-wider mb-8">
          <Link href="/" className="hover:text-[#00B050] transition-colors">
            {t.breadcrumb.home}
          </Link>
          <span>/</span>
          <span className="hover:text-[#00B050] transition-colors">
            {t.breadcrumb.media}
          </span>
          <span>/</span>
          <span className="text-[#18251E] font-medium">{t.breadcrumb.blog}</span>
        </div>

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
          <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#5D6B62]">
            {t.hero.eyebrow}
          </span>
        </div>

        {/* Heading + Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h1 className="text-[34px] sm:text-[44px] lg:text-[50px] font-semibold text-[#0E291E] tracking-tight leading-[1.05]">
              {t.hero.titleLines[0]}
              <br />
              {t.hero.titleLines[1]}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pb-1"
          >
            <p className="text-[14px] sm:text-[15px] text-[#55645C] leading-relaxed font-normal">
              {t.hero.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

