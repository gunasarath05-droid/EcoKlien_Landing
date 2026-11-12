"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { images } from "@/data/images";
import { useMessages } from "@/i18n/LocaleProvider";
import { homeMessages } from "@/i18n/messages/home";

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  const { hero: t, discussFacility } = useMessages(homeMessages);
  return (
    <section id="overview" className="relative bg-white pt-6 pb-10 md:pt-8 md:pb-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left column: eyebrow at the top, copy in the middle, tags at the bottom */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-6 flex flex-col gap-10 lg:gap-0 lg:py-2"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-[#13a538] shrink-0" />
              <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-[#5d6762]">
                {t.eyebrow}
              </span>
            </div>

            <div className="lg:my-auto lg:py-10">
              <h1 className="text-[34px] sm:text-[44px] lg:text-[52px] font-normal tracking-[-0.02em] text-[#0e2a1e] leading-[1.06]">
                {t.titleLines.map((line, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <br className="hidden sm:block" />}
                    {i > 0 && <span className="sm:hidden"> </span>}
                    {line}
                  </React.Fragment>
                ))}
              </h1>

              <p className="mt-6 text-[14px] sm:text-[15px] text-[#5d6762] leading-[1.6] max-w-[440px]">
                {t.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#00B050] hover:bg-[#009a45] text-white font-medium text-[14px] transition-colors group"
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

                <Link
                  href="#technology"
                  className="text-[14px] font-medium text-[#0e2a1e] hover:text-[#00B050] underline underline-offset-[6px] decoration-[#0e2a1e]/40 hover:decoration-[#00B050] transition-colors"
                >
                  {t.exploreTechnology}
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.06em] text-[#5d6762]">
              {t.tags.map((tag, i) => (
                <React.Fragment key={tag}>
                  {i > 0 && <span className="text-[#13a538]">+</span>}
                  <span>{tag}</span>
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* Right column: machine photo card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="lg:col-span-6"
          >
            <div className="relative h-[440px] sm:h-[560px] lg:h-[620px] rounded-[22px] overflow-hidden bg-[#123D30] group">
              <Image
                src={images.hero}
                alt={t.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />

              <div className="absolute top-5 start-5 z-10 flex items-center gap-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.04em] text-white/90">
                <span className="w-1.5 h-1.5 bg-[#00B050]" />
                <span>{t.badge}</span>
              </div>

              <div className="absolute bottom-5 start-5 end-5 sm:end-auto z-10 sm:min-w-[300px] sm:max-w-[340px] flex items-center justify-between gap-4 rounded-[14px] bg-white/15 backdrop-blur-md border border-white/20 px-4 py-3.5 text-white">
                <div>
                  <h3 className="text-[14px] font-medium leading-snug text-white">{t.cardTitle}</h3>
                  <p className="text-[12px] text-white/75 mt-0.5">{t.cardText}</p>
                </div>
                <span className="shrink-0 w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-[#38C978]">
                  <span className="w-2 h-2 rounded-full bg-current" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
