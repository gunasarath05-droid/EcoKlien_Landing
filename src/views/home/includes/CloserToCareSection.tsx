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
    <section id="architecture" className="relative overflow-hidden bg-[#08190f] text-white py-20 md:py-24">
      {/* Fluid backdrop */}
      <Image
        src={images.treatment}
        alt={t.backdropAlt}
        fill
        sizes="100vw"
        className="object-cover object-center pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06140d]/25 via-[#06140d]/10 to-[#06140d]/35 pointer-events-none" />

      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B050] shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.06em] text-white/70">{t.eyebrow}</span>
            </div>
            <h2 className="text-[30px] sm:text-[36px] lg:text-[38px] font-normal text-white tracking-[-0.01em] leading-[1.05]">
              {t.titleLines.map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </h2>
            <p className="mt-6 text-[14px] sm:text-[15px] text-white/80 leading-[1.6] max-w-[410px]">{t.description}</p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-8 ps-5 pe-4 py-3 rounded-full bg-[#00B050] hover:bg-[#009a45] text-white font-medium text-[14px] transition-colors group"
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
          >
            <div className="rounded-[22px] bg-[#0c2a1e]/45 backdrop-blur-md border border-white/15 shadow-[0_30px_60px_rgba(0,0,0,0.35)] px-4 pt-4 pb-5 sm:px-7 sm:pt-5 sm:pb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.08em] text-white/55">
                  {t.withinFacility}
                </span>
                <LuBuilding2 className="w-4 h-4 text-[#38C978]/80" aria-hidden />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { Icon: LuHospital, title: t.healthcareTitle, text: t.healthcareText },
                  { Icon: LuFlaskConical, title: t.laboratoryTitle, text: t.laboratoryText },
                ].map(({ Icon, title, text }) => (
                  <div key={title} className="rounded-[14px] bg-[#071811]/80 border border-white/10 px-4 pt-4 pb-4 sm:px-5 min-h-[120px] flex flex-col">
                    <Icon className="w-5 h-5 text-[#38C978]" aria-hidden />
                    <h3 className="mt-auto pt-5 text-[16px] sm:text-[19px] font-normal text-white leading-tight">{title}</h3>
                    <p className="mt-1 text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.06em] text-white/55">{text}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center py-3 text-[#38C978]">
                <LuArrowDown className="w-4 h-4" aria-hidden />
              </div>

              <div className="rounded-[14px] bg-[#1c4632]/70 border border-[#38C978]/25 px-4 pt-4 pb-4 sm:px-5 min-h-[116px] flex flex-col">
                <LuTarget className="w-5 h-5 text-[#38C978]" aria-hidden />
                <h3 className="mt-auto pt-5 text-[17px] sm:text-[19px] font-normal text-white leading-tight">{t.onSiteTitle}</h3>
                <p className="mt-1 text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.06em] text-white/55">{t.onSiteText}</p>
              </div>

              <p className="mt-3 text-[11px] sm:text-[12px] text-white/60 leading-relaxed">{t.note}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
