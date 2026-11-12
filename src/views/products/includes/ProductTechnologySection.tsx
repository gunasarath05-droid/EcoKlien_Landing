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

interface ProductTechnologySectionProps {
  technologySection?: ProductDetail["technologySection"];
}

export default function ProductTechnologySection({
  technologySection = defaultProduct.technologySection,
}: ProductTechnologySectionProps) {
  const getStageIcon = (iconType: string) => {
    switch (iconType) {
      case "coagulation":
        return <LuSparkles className="w-4 h-4 text-[#00A859]" />;
      case "disinfection":
        return <LuShieldCheck className="w-4 h-4 text-[#00A859]" />;
      case "oxidation":
        return <LuFlame className="w-4 h-4 text-[#00A859]" />;
      case "residual":
        return <LuCircleCheck className="w-4 h-4 text-[#00A859]" />;
      default:
        return <LuSparkles className="w-4 h-4 text-[#00A859]" />;
    }
  };

  return (
    <section id="technology" className="py-16 md:py-20 lg:py-24 bg-[#F2F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ========================================================= */}
          {/* LEFT COLUMN: TITLE + DESCRIPTION + MACHINE IMAGE          */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            {/* Heading & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 mb-8 sm:mb-10"
            >
              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-semibold text-[#0E291E] tracking-tight leading-[1.12]">
                Meet ECOKlien&apos;s BML — One system.<br />
                Multiple treatment stages.
              </h2>
              <p className="text-[13.5px] sm:text-[14px] text-[#55645C] leading-relaxed max-w-xl font-normal">
                {technologySection.description}
              </p>
            </motion.div>

            {/* Machine Image standing free on the background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[520px] aspect-[16/11] sm:aspect-[4/3] -ml-2 sm:-ml-4 mt-auto"
            >
              <Image
                src={technologySection.image}
                alt={technologySection.heading}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-left-bottom drop-shadow-md"
                priority
              />
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: CTA BUTTON AT TOP + 2x2 COMPACT CARDS GRID  */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col items-end">
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
                  <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            )}

            {/* 2x2 Compact Feature Cards Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-start">
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
                  className="p-6 sm:p-7 rounded-[22px] bg-white border border-[#E3ECE6] hover:border-[#00A859]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-start"
                >
                  {/* Small Rounded Icon Badge */}
                  <div className="w-9 h-9 rounded-xl bg-[#E8F6EE] flex items-center justify-center mb-4 text-[#00A859]">
                    {getStageIcon(stage.iconType)}
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#0E291E] tracking-tight mb-2.5">
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
