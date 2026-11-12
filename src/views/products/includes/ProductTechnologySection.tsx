"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductDetail, defaultProduct } from "@/data/products";
import {
  LuSparkles,
  LuShieldCheck,
  LuFlame,
  LuCircleCheck,
  LuArrowUpRight,
} from "react-icons/lu";
import { motion } from "motion/react";
import { useMessages } from "@/i18n/LocaleProvider";
import { productMessages } from "@/i18n/messages/products";

interface ProductTechnologySectionProps {
  technologySection?: ProductDetail["technologySection"];
}

export default function ProductTechnologySection({
  technologySection = defaultProduct.technologySection,
}: ProductTechnologySectionProps) {
  const t = useMessages(productMessages).technology;
  const getStageIcon = (iconType: string) => {
    switch (iconType) {
      case "coagulation":
        return <LuSparkles className="w-[18px] h-[18px]" />;
      case "disinfection":
        return <LuShieldCheck className="w-[18px] h-[18px]" />;
      case "oxidation":
        return <LuFlame className="w-[18px] h-[18px]" />;
      case "residual":
        return <LuCircleCheck className="w-[18px] h-[18px]" />;
      default:
        return <LuSparkles className="w-[18px] h-[18px]" />;
    }
  };

  return (
    <section id="technology" className="py-16 md:py-20 lg:py-24 bg-[#F2F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ========================================================= */}
          {/* LEFT COLUMN: TITLE + DESCRIPTION + MACHINE IMAGE          */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Heading & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 sm:mb-8"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-1.5 h-1.5 bg-[#13a538] shrink-0" />
                <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-[#5d6762]">{t.eyebrow}</span>
              </div>
              <h2 className="text-[28px] sm:text-[32px] lg:text-[34px] font-medium text-[#0E291E] tracking-[-0.01em] leading-[1.12]">
                {t.headingLines[0]}<br />
                {t.headingLines[1]}
              </h2>
              <p className="mt-5 text-[13.5px] sm:text-[14px] text-[#55645C] leading-relaxed max-w-[540px] font-normal">
                {technologySection.description}
              </p>
            </motion.div>

            {/* Machine Image standing free on the background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[460px] aspect-square mt-auto lg:ms-4"
            >
              <Image
                src={technologySection.image}
                alt={technologySection.heading}
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-contain object-bottom drop-shadow-[0_24px_30px_rgba(14,42,30,0.12)]"
                priority
              />
              <span className="absolute bottom-4 start-0 sm:-start-4 z-10 px-3 py-1.5 rounded-full bg-white/95 shadow-sm text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.04em] text-[#2C3E35]">
                {t.imageTag}
              </span>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: CTA BUTTON AT TOP + 2x2 COMPACT CARDS GRID  */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col items-end">
            {/* View Configurations CTA Button aligned to the right */}
            {technologySection.ctaText && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-6 sm:mb-8"
              >
                <Link
                  href={technologySection.ctaLink}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#123D30] hover:bg-[#009933] text-white text-[13.5px] font-medium transition-all duration-300 shadow-sm hover:shadow hover:scale-[1.02] group whitespace-nowrap"
                >
                  <span>{technologySection.ctaText}</span>
                  <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
                </Link>
              </motion.div>
            )}

            {/* 2x2 Compact Feature Cards Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-stretch">
              {technologySection.stages.map((stage, idx) => (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.06,
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-full p-6 rounded-[14px] bg-white border border-transparent hover:border-[#00A859]/30 hover:shadow-sm transition-all duration-300 flex flex-col justify-start"
                >
                  {/* Small Rounded Icon Badge */}
                  <div className="mb-4 text-[#123D30]">
                    {getStageIcon(stage.iconType)}
                  </div>

                  {/* Title */}
                  <h3 className="text-[16px] sm:text-[17px] font-medium text-[#0E291E] tracking-tight mb-3">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] sm:text-[13.5px] text-[#55645C] leading-[1.55] font-normal">
                    {stage.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
