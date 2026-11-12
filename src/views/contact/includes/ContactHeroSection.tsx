"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { LuArrowUpRight } from "react-icons/lu";
import { salesEmailHref } from "@/data/contact";
import { useMessages } from "@/i18n/LocaleProvider";
import { contactMessages } from "@/i18n/messages/contact";

export default function ContactHeroSection() {
  const { hero } = useMessages(contactMessages);

  return (
    <section className="pt-12 sm:pt-16 pb-10 sm:pb-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] font-mono uppercase text-[#738479] tracking-wider mb-8">
          <Link href="/" className="hover:text-[#00B050] transition-colors">
            {hero.breadcrumbHome}
          </Link>
          <span>/</span>
          <span className="text-[#18251E] font-medium">{hero.breadcrumbCurrent}</span>
        </div>

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
          <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#5D6B62]">
            {hero.eyebrow}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <h1 className="text-[34px] sm:text-[44px] lg:text-[50px] font-semibold text-[#0E291E] tracking-tight leading-[1.05] max-w-2xl">
              {hero.title}
            </h1>
            <a
              href={salesEmailHref}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#00A859] hover:bg-[#008f4c] text-white font-medium text-[14px] transition-all duration-300 shadow-sm hover:shadow hover:scale-[1.02] group"
            >
              <span>{hero.emailCta}</span>
              <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pb-3"
          >
            <p className="text-[14px] sm:text-[15px] text-[#55645C] leading-relaxed font-normal max-w-md lg:ms-auto">
              {hero.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
