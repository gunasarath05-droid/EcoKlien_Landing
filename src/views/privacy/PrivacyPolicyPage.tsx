"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { LuArrowUpRight } from "react-icons/lu";
import { useMessages } from "@/i18n/LocaleProvider";
import { privacyMessages } from "@/i18n/messages/privacy";

export default function PrivacyPolicyPage() {
  const t = useMessages(privacyMessages);

  return (
    <main className="flex-1 w-full bg-white">
      <section className="pt-12 sm:pt-16 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase text-[#738479] tracking-wider mb-8">
            <Link href="/" className="hover:text-[#00B050] transition-colors">
              {t.breadcrumbHome}
            </Link>
            <span>/</span>
            <span className="text-[#18251E] font-medium">{t.breadcrumbCurrent}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1.5 h-1.5 bg-[#13a538] shrink-0" />
              <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-[#5d6762]">{t.eyebrow}</span>
            </div>
            <h1 className="text-[34px] sm:text-[44px] lg:text-[50px] font-semibold text-[#0E291E] tracking-tight leading-[1.05]">
              {t.title}
            </h1>

            <div className="mt-8 space-y-5 text-[15px] sm:text-[16px] text-[#5d6762] leading-[1.7]">
              {t.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#00B050] hover:bg-[#009a45] text-white font-medium text-[14px] transition-colors group"
            >
              <span>{t.cta}</span>
              <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
