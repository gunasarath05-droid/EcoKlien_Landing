"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { LuArrowDown, LuBuilding2, LuFlaskConical, LuHospital, LuTarget } from "react-icons/lu";
import { images } from "@/data/images";
import { useMessages } from "@/i18n/LocaleProvider";
import { homeMessages } from "@/i18n/messages/home";

const ease = [0.16, 1, 0.3, 1] as const;

export default function CloserToCareSection() {
  const { closerToCare: t, discussFacility } = useMessages(homeMessages);
  return (
    <section id="architecture" className="relative overflow-hidden bg-[#0a2219] text-white py-20 md:py-28">
      {/* Fluid backdrop */}
      <Image
        src={images.treatment}
        alt={t.backdropAlt}
        fill
        sizes="100vw"
        className="object-cover object-center opacity-80 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a2219]/70 via-[#0a2219]/35 to-[#0a2219]/70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1.5 h-1.5 bg-[#00B050] shrink-0" />
              <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-white/70">{t.eyebrow}</span>
            </div>
            <h2 className="text-[30px] sm:text-[38px] lg:text-[42px] font-normal text-white tracking-[-0.01em] leading-[1.08]">
              {t.titleLines.map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </h2>
            <p className="mt-6 text-[14px] sm:text-[15px] text-white/75 leading-[1.65] max-w-[460px]">{t.description}</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#00B050] hover:bg-[#009a45] text-white font-medium text-[14px] transition-colors group"
            >
              <span>{discussFacility}</span>
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </motion.div>

          {/* Glass panel: facility → on-site treatment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="lg:col-span-6"
          >
            <div className="rounded-[20px] bg-white/[0.06] backdrop-blur-md border border-white/12 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.06em] text-white/60">
                  {t.withinFacility}
                </span>
                <LuBuilding2 className="w-4 h-4 text-[#38C978]" aria-hidden />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { Icon: LuHospital, title: t.healthcareTitle, text: t.healthcareText },
                  { Icon: LuFlaskConical, title: t.laboratoryTitle, text: t.laboratoryText },
                ].map(({ Icon, title, text }) => (
                  <div key={title} className="rounded-[14px] bg-[#1d4a37]/70 border border-white/10 p-4 sm:p-5">
                    <Icon className="w-5 h-5 text-[#38C978]" aria-hidden />
                    <h3 className="mt-5 text-[15px] sm:text-[17px] font-normal text-white">{title}</h3>
                    <p className="mt-1 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.04em] text-white/55">{text}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center py-2 text-[#38C978]">
                <LuArrowDown className="w-4 h-4" aria-hidden />
              </div>

              <div className="rounded-[14px] bg-[#1d4a37]/80 border border-[#38C978]/30 p-4 sm:p-5">
                <LuTarget className="w-5 h-5 text-[#38C978]" aria-hidden />
                <h3 className="mt-4 text-[16px] sm:text-[18px] font-normal text-white">{t.onSiteTitle}</h3>
                <p className="mt-1 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.04em] text-white/55">{t.onSiteText}</p>
              </div>

              <p className="mt-4 text-[11px] sm:text-[12px] text-white/55 leading-relaxed">{t.note}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
