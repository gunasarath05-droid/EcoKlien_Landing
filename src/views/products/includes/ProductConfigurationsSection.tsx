"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductDetail, defaultProduct } from "@/data/products";
import { LuDownload } from "react-icons/lu";
import { motion } from "motion/react";
import { useMessages } from "@/i18n/LocaleProvider";
import { productMessages } from "@/i18n/messages/products";

interface ProductConfigurationsSectionProps {
  configurationsSection?: ProductDetail["configurationsSection"];
}

const fadeUp = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};
const ease = [0.16, 1, 0.3, 1] as const;

export default function ProductConfigurationsSection({
  configurationsSection = defaultProduct.configurationsSection,
}: ProductConfigurationsSectionProps) {
  const t = useMessages(productMessages).configurations;
  const { models, parameters } = configurationsSection;
  const hasTypes = models.some((row) => row.type);

  return (
    <section id="configurations" className="py-16 md:py-24 bg-white border-t border-[#e3e7e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-10 lg:mb-14">
          <motion.div {...fadeUp} transition={{ duration: 0.6, ease }} className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1.5 h-1.5 bg-[#13a538] shrink-0" />
              <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-[#5d6762]">
                {configurationsSection.eyebrow}
              </span>
            </div>
            {/* Title */}
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#0e2a1e] tracking-[-0.01em] leading-[1.1] max-w-[560px]">
              {configurationsSection.heading}
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="lg:col-span-5 lg:pt-8"
          >
            <p className="text-[14px] sm:text-[15px] text-[#5d6762] leading-[1.6] font-normal">
              {configurationsSection.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Model table · parameters table + brochure card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8">
          {/* Models */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-7 rounded-[14px] overflow-hidden bg-white shadow-[0_6px_24px_-10px_rgba(14,42,30,0.18)]"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-start border-collapse">
                <thead>
                  <tr className="bg-[#0F3B2E] text-white text-[11px] font-mono uppercase tracking-[0.04em]">
                    <th className="py-4 ps-5 pe-3 font-normal text-start">{t.modelName}</th>
                    <th className="py-4 px-3 font-normal text-start">{t.capacity}</th>
                    {hasTypes && <th className="py-4 ps-3 pe-5 font-normal text-start">{t.modelType}</th>}
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  {models.map((row, idx) => {
                    // A darker rule marks where one model type ends and the next begins
                    const startsGroup = hasTypes && idx > 0 && row.type !== models[idx - 1].type;
                    return (
                      <tr
                        key={row.model}
                        className={`${idx % 2 === 0 ? "bg-[#F6F8F7]" : "bg-white"} border-t ${
                          startsGroup ? "border-[#AEB9B3]" : "border-[#E3E8E5]"
                        } first:border-t-0 hover:bg-[#EEF4F0] transition-colors`}
                      >
                        <td className="py-3.5 sm:py-4 ps-5 pe-3 text-[#5d6762] whitespace-nowrap">{row.model}</td>
                        <td className="py-3.5 sm:py-4 px-3 text-[#0e2a1e] tabular-nums">
                          <span dir="ltr">{row.capacity}</span>
                        </td>
                        {hasTypes && (
                          <td className="py-3.5 sm:py-4 ps-3 pe-5 text-[#0F3B2E] uppercase tracking-[0.02em]">
                            {row.type ? t.types[row.type] : ""}
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Parameters + brochure card */}
          <div className="lg:col-span-5 space-y-6">
            {parameters && parameters.length > 0 && (
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.1, ease }}
                className="rounded-[14px] overflow-hidden bg-white shadow-[0_6px_24px_-10px_rgba(14,42,30,0.18)]"
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-start border-collapse">
                    <thead>
                      <tr className="bg-[#0E5A45] text-white text-[11px] font-mono uppercase tracking-[0.04em]">
                        <th className="py-4 ps-5 pe-3 font-normal text-start">{t.parameters}</th>
                        <th className="py-4 px-3 font-normal text-start">{t.liquidWaste}</th>
                        <th className="py-4 ps-3 pe-5 font-normal text-start">{t.treatedWater}</th>
                      </tr>
                    </thead>
                    <tbody className="text-[14px]">
                      {parameters.map((row, idx) => (
                        <tr
                          key={row.parameter}
                          className={`${idx % 2 === 0 ? "bg-[#F6F8F7]" : "bg-white"} border-t border-[#E3E8E5] first:border-t-0`}
                        >
                          <td className="py-3.5 sm:py-4 ps-5 pe-3 text-[#5d6762] whitespace-nowrap">
                            <span dir="ltr">{row.parameter}</span>
                          </td>
                          <td className="py-3.5 sm:py-4 px-3 text-[#0e2a1e] tabular-nums">{row.liquidWaste}</td>
                          <td className="py-3.5 sm:py-4 ps-3 pe-5 text-[#0e2a1e] tabular-nums">{row.treatedWater}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* Image card with brochure CTA */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="relative rounded-[16px] overflow-hidden aspect-[16/10] group shadow-[0_6px_24px_-10px_rgba(14,42,30,0.25)]"
            >
              <Image
                src={configurationsSection.ctaCard.image}
                alt={t.ctaImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 end-4 sm:bottom-5 sm:end-5 z-10">
                <Link
                  href={configurationsSection.ctaCard.buttonLink}
                  className="inline-flex items-center gap-4 sm:gap-6 ps-5 pe-4 sm:ps-6 sm:pe-5 py-3 sm:py-3.5 rounded-full bg-[#0F3B2E] hover:bg-[#0a5a3a] text-white text-[13px] sm:text-[14px] font-medium transition-all duration-300 shadow-lg hover:scale-[1.02] group/cta"
                >
                  <span>{configurationsSection.ctaCard.buttonText}</span>
                  <LuDownload className="w-4 h-4 transition-transform group-hover/cta:translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-[13px] text-[#5d6762] leading-[1.6]">{configurationsSection.footerNote}</p>
      </div>
    </section>
  );
}
