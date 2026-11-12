"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { LuChevronDown } from "react-icons/lu";
import { images } from "@/data/images";
import { useMessages } from "@/i18n/LocaleProvider";
import { productsOverviewMessages } from "@/i18n/messages/productsOverview";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ProductsOverviewHero() {
  const { hero: t } = useMessages(productsOverviewMessages);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Blood-to-water splash running across the section */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={images.bloodToWater}
          alt={t.splashAlt}
          fill
          sizes="100vw"
          priority
          className="object-cover object-[30%_center] md:object-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-24 pb-16 sm:pb-24 lg:pb-28 flex flex-col items-center text-center min-h-[560px] lg:min-h-[680px]">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="text-[28px] sm:text-[36px] lg:text-[42px] font-normal text-[#0e2a1e] tracking-[-0.01em] leading-[1.12]"
        >
          {t.titleLines.map((line, i) => (
            <React.Fragment key={i}>
              {i > 0 && <br />}
              {line}
            </React.Fragment>
          ))}
        </motion.h1>

        {/* Frosted card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="mt-8 sm:mt-10 w-full max-w-[440px] rounded-[22px] bg-white/45 backdrop-blur-xl border border-white/80 shadow-[0_20px_60px_-20px_rgba(14,42,30,0.25)] px-6 sm:px-10 py-9 sm:py-11"
        >
          <div className="space-y-4 text-[13.5px] sm:text-[14px] text-[#2C3E35] leading-[1.6]">
            {t.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <a
            href="#configurations"
            className="mt-8 sm:mt-10 inline-flex items-center gap-4 ps-6 pe-4 py-3 rounded-full bg-[#8A928E]/90 hover:bg-[#123D30] text-white text-[13px] font-medium transition-all duration-300 shadow-md group"
          >
            <span>{t.cta}</span>
            <LuChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>
      </div>

      {/* Divider into the next section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#D7DED5]" />
      </div>
    </section>
  );
}
