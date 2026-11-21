"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductDetail, defaultProduct } from "@/data/products";
import {
  LuShrink,
  LuBlocks,
  LuCross,
  LuPlug,
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
        return <LuShrink className="w-5 h-5" strokeWidth={1.6} />;
      case "disinfection":
        return <LuBlocks className="w-5 h-5" strokeWidth={1.6} />;
      case "oxidation":
        return <LuCross className="w-5 h-5" strokeWidth={1.6} />;
      case "residual":
        return <LuPlug className="w-5 h-5" strokeWidth={1.6} />;
      default:
        return <LuShrink className="w-5 h-5" strokeWidth={1.6} />;
    }
  };

  return (
    <section id="technology" className="py-16 md:py-20 lg:py-24 bg-[#F2F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,43%)] gap-10 items-stretch">
          {/* ========================================================= */}
          {/* LEFT COLUMN: TITLE + DESCRIPTION + MACHINE IMAGE          */}
          {/* ========================================================= */}
          <div className="flex flex-col">
            {/* Heading & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-1.5 h-1.5 bg-[#13a538] shrink-0" />
                <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-[#5d6762]">{t.eyebrow}</span>
              </div>
              <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] font-medium text-[#0E291E] tracking-[-0.015em] leading-[1.1]">
                {t.headingLines[0]}<br />
                {t.headingLines[1]}
              </h2>
              <p className="mt-6 text-[14px] sm:text-[14.5px] text-[#55645C] leading-relaxed max-w-[640px] font-normal">
                {technologySection.description}
              </p>
            </motion.div>

            {/* Machine Image standing free on the background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-8 lg:mt-auto lg:pt-10 pb-5"
            >
              <div className="relative w-full max-w-[340px] sm:max-w-[560px] aspect-square">
                <Image
                  src={technologySection.image}
                  alt={technologySection.heading}
                  fill
                  sizes="(max-width: 640px) 340px, 560px"
                  className="object-contain object-bottom drop-shadow-[0_24px_30px_rgba(14,42,30,0.12)]"
                  priority
                />
              </div>
              <span className="absolute bottom-0 start-0 sm:start-5 z-10 px-4 py-2 rounded-[10px] bg-white shadow-[0_2px_10px_rgba(14,42,30,0.06)] text-[9px] sm:text-[10.5px] font-mono uppercase tracking-[0.04em] text-[#2C3E35]">
                {t.imageTag}
              </span>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: CTA BUTTON AT TOP + 2x2 COMPACT CARDS GRID  */}
          {/* ========================================================= */}
          <div className="flex flex-col items-end">
            {/* View Configurations CTA Button aligned to the right */}
            {technologySection.ctaText && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:mt-6 mb-8 lg:mb-14"
              >
                <Link
                  href={technologySection.ctaLink}
                  className="inline-flex items-center gap-3 h-12 lg:h-14 px-6 lg:px-[26px] rounded-full bg-[#123D30] hover:bg-[#009933] text-white text-[14px] lg:text-[15px] font-medium transition-all duration-300 shadow-sm hover:shadow hover:scale-[1.02] group whitespace-nowrap"
                >
                  <span>{technologySection.ctaText}</span>
                  <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
                </Link>
              </motion.div>
            )}

            {/* 2x2 Compact Feature Cards Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-[26px] items-stretch">
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
                  className="h-full lg:min-h-[286px] px-6 sm:px-[27px] pt-7 sm:pt-8 pb-7 rounded-[18px] bg-white border border-transparent hover:border-[#00A859]/30 hover:shadow-sm transition-all duration-300 flex flex-col justify-start"
                >
                  {/* Small Rounded Icon Badge */}
                  <div className="mb-5 text-[#123D30]">
                    {getStageIcon(stage.iconType)}
                  </div>

                  {/* Title */}
                  <h3 className="text-[18px] sm:text-[19px] font-medium text-[#0E291E] tracking-[-0.01em] mb-4">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] sm:text-[14.5px] text-[#55645C] leading-[1.65] font-normal">
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
