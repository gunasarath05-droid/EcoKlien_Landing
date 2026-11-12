"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductDetail, defaultProduct } from "@/data/products";
import { LuArrowRight } from "react-icons/lu";
import { motion } from "motion/react";
import { useMessages } from "@/i18n/LocaleProvider";
import { productMessages } from "@/i18n/messages/products";

interface ProductConfigurationsSectionProps {
  configurationsSection?: ProductDetail["configurationsSection"];
}

export default function ProductConfigurationsSection({
  configurationsSection = defaultProduct.configurationsSection,
}: ProductConfigurationsSectionProps) {
  const t = useMessages(productMessages).configurations;
  return (
    <section id="configurations" className="py-16 md:py-24 bg-white border-t border-[#e3e7e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1.5 h-1.5 bg-[#13a538] shrink-0" />
              <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-[#5d6762]">
                {configurationsSection.eyebrow}
              </span>
            </div>
            {/* Title */}
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-semibold text-[#0e2a1e] tracking-tight leading-[1.08]">
              {configurationsSection.heading}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:pb-1"
          >
            <p className="text-[14px] sm:text-[15px] text-[#5d6762] leading-[1.55] font-normal">
              {configurationsSection.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Tables & Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          {/* Left Table (8 Rows) */}
          <div className="lg:col-span-7 overflow-hidden rounded-[16px] border border-[#DCE6E0] shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-start border-collapse">
                <thead>
                  <tr className="bg-[#123D30] text-white text-[13px] font-mono uppercase tracking-wider">
                    <th className="py-3.5 px-5 font-medium">{t.model}</th>
                    <th className="py-3.5 px-5 font-medium text-center">{t.flowRate}</th>
                    <th className="py-3.5 px-5 font-medium text-end">{t.dailyCapacity}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E7EFEA] text-[13.5px] text-[#2C3E35]">
                  {configurationsSection.leftTable.map((row, idx) => (
                    <tr
                      key={idx}
                      className={
                        idx % 2 === 0
                          ? "bg-white hover:bg-[#F2F8F4] transition-colors"
                          : "bg-[#F8FAF8] hover:bg-[#F2F8F4] transition-colors"
                      }
                    >
                      <td className="py-3 px-5 font-medium text-[#18251E] font-mono">
                        {row.model}
                      </td>
                      <td className="py-3 px-5 text-center text-[#55645C] font-mono">
                        {row.flowRate}
                      </td>
                      <td className="py-3 px-5 text-end font-medium text-[#00A859] font-mono">
                        {row.dailyCapacity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Smaller Table (3 Rows) + Sink Image Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Right Table */}
            <div className="overflow-hidden rounded-[16px] border border-[#DCE6E0] shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-start border-collapse">
                  <thead>
                    <tr className="bg-[#123D30] text-white text-[13px] font-mono uppercase tracking-wider">
                      <th className="py-3.5 px-5 font-medium">{t.model}</th>
                      <th className="py-3.5 px-5 font-medium text-center">{t.flowRate}</th>
                      <th className="py-3.5 px-5 font-medium text-end">{t.dailyCapacity}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E7EFEA] text-[13.5px] text-[#2C3E35]">
                    {configurationsSection.rightTable.map((row, idx) => (
                      <tr
                        key={idx}
                        className={
                          idx % 2 === 0
                            ? "bg-white hover:bg-[#F2F8F4] transition-colors"
                            : "bg-[#F8FAF8] hover:bg-[#F2F8F4] transition-colors"
                        }
                      >
                        <td className="py-3 px-5 font-medium text-[#18251E] font-mono">
                          {row.model}
                        </td>
                        <td className="py-3 px-5 text-center text-[#55645C] font-mono">
                          {row.flowRate}
                        </td>
                        <td className="py-3 px-5 text-end font-medium text-[#00A859] font-mono">
                          {row.dailyCapacity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Showcase Image Card with Get Quote CTA */}
            <div className="relative rounded-[20px] overflow-hidden aspect-[16/9] border border-[#DCE6E0] shadow-sm group">
              <Image
                src={configurationsSection.ctaCard.image}
                alt={t.ctaImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

              {/* Bottom End CTA */}
              <div className="absolute bottom-4 end-4 z-10">
                <Link
                  href={configurationsSection.ctaCard.buttonLink}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#123D30] hover:bg-[#009933] text-white text-[13px] font-medium transition-all duration-300 shadow-md hover:scale-[1.02] group"
                >
                  <span>{configurationsSection.ctaCard.buttonText}</span>
                  <LuArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-[12.5px] text-[#76857C] font-mono">
          {configurationsSection.footerNote}
        </p>
      </div>
    </section>
  );
}
