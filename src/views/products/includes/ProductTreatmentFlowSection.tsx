"use client";

import React from "react";
import Image from "next/image";
import { ProductDetail, defaultProduct } from "@/data/products";
import { images } from "@/data/images";
import {
  LuActivity,
  LuCpu,
  LuLayers,
  LuRefreshCw,
  LuHospital,
  LuFlaskConical,
  LuCircleCheck,
  LuMicroscope,
  LuPipette,
  LuTestTube,
  LuDroplet,
} from "react-icons/lu";
import { motion } from "motion/react";
import { useMessages } from "@/i18n/LocaleProvider";
import { productMessages } from "@/i18n/messages/products";

interface ProductTreatmentFlowSectionProps {
  closerSection?: ProductDetail["closerSection"];
  fluidsSection?: ProductDetail["fluidsSection"];
}

export default function ProductTreatmentFlowSection({
  closerSection = defaultProduct.closerSection,
  fluidsSection = defaultProduct.fluidsSection,
}: ProductTreatmentFlowSectionProps) {
  const t = useMessages(productMessages).flow;

  // Step icons for Part 1: The Approach
  const getStepIcon = (iconType?: string) => {
    switch (iconType) {
      case "generate":
        return <LuActivity className="w-4 h-4 text-[#00A859]" />;
      case "treat":
        return <LuCpu className="w-4 h-4 text-[#00A859]" />;
      case "disinfect":
        return <LuLayers className="w-4 h-4 text-[#00A859]" />;
      case "reuse":
        return <LuRefreshCw className="w-4 h-4 text-[#00A859]" />;
      case "healthcare":
        return <LuHospital className="w-4 h-4 text-[#00A859]" />;
      case "laboratory":
        return <LuFlaskConical className="w-4 h-4 text-[#00A859]" />;
      case "discharge":
        return <LuCircleCheck className="w-4 h-4 text-[#00A859]" />;
      default:
        return <LuActivity className="w-4 h-4 text-[#00A859]" />;
    }
  };

  // Badges for Part 2: What It Treats
  const streamBadges = [
    {
      id: "lab",
      title: t.streams.lab,
      icon: <LuMicroscope className="w-4 h-4 text-white" />,
      theme: "dark",
      position: "top-[28%] start-0 sm:start-auto sm:end-[68%]",
    },
    {
      id: "dialysis",
      title: t.streams.dialysis,
      icon: <LuFlaskConical className="w-4 h-4 text-white" />,
      theme: "dark",
      position: "top-[18%] end-0 sm:end-auto sm:start-[60%]",
    },
    {
      id: "sputum",
      title: t.streams.sputum,
      icon: <LuPipette className="w-4 h-4 text-[#18251E]" />,
      theme: "light",
      position: "top-[48%] start-0 sm:start-auto sm:end-[74%]",
    },
    {
      id: "urine",
      title: t.streams.urine,
      icon: <LuTestTube className="w-4 h-4 text-[#18251E]" />,
      theme: "light",
      position: "top-[41%] end-0 sm:end-auto sm:start-[74%]",
    },
    {
      id: "blood",
      title: t.streams.blood,
      icon: <LuDroplet className="w-4 h-4 text-[#18251E]" />,
      theme: "light",
      position: "top-[78%] start-[8%] sm:start-[26%]",
    },
    {
      id: "fluids",
      title: t.streams.fluids,
      icon: <LuFlaskConical className="w-4 h-4 text-[#18251E]" />,
      theme: "light",
      position: "top-[63%] end-0 sm:end-auto sm:start-[62%]",
    },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* ========================================================= */}
      {/* CONTINUOUS DARK GREEN FLUID BACKGROUND WRAPPER            */}
      {/* ========================================================= */}
      <div className="absolute top-0 left-0 right-0 h-[72%] sm:h-[75%] lg:h-[78%] z-0 pointer-events-none">
        <Image
          src={images.enquiry}
          alt={t.backgroundAlt}
          fill
          sizes="100vw"
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061912] via-[#061912]/25 to-[#061912]/60" />
      </div>

      {/* ========================================================= */}
      {/* PART 1: THE APPROACH                                      */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20 text-white">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
          <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-white/70">
            {closerSection.eyebrow}
          </span>
        </motion.div>

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-start mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-semibold text-white tracking-tight leading-[1.1]">
              {closerSection.headingLeft}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pt-2"
          >
            <p className="text-[14px] sm:text-[15px] text-white/80 leading-relaxed font-normal">
              {closerSection.headingRight}
            </p>
          </motion.div>
        </div>

        {/* Big Frosted Glass Capsule containing 4 Step Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[24px] sm:rounded-[32px] bg-black/40 backdrop-blur-xl border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl"
        >
          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {closerSection.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.45,
                }}
                className="rounded-[20px] bg-white/[0.04] backdrop-blur-md border border-white/10 p-5 sm:p-6 flex flex-col justify-between hover:bg-white/[0.08] hover:border-[#00A859]/50 transition-all duration-300 group"
              >
                <div>
                  {/* Small Rounded Icon Badge */}
                  <div className="w-8 h-8 rounded-lg bg-[#00A859]/20 border border-[#00A859]/30 flex items-center justify-center text-[#00A859] mb-4 group-hover:scale-105 transition-transform">
                    {getStepIcon(step.iconType)}
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] sm:text-[18px] font-semibold text-white tracking-tight leading-snug mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] sm:text-[13.5px] text-white/75 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Footnote inside Container */}
          {closerSection.footerNote && (
            <div className="mt-6 pt-4 border-t border-white/5">
              <p className="text-[12.5px] sm:text-[13px] text-white/60 font-normal leading-relaxed">
                {closerSection.footerNote}
              </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* ========================================================= */}
      {/* PART 2: FROM BLOOD TO BODY FLUIDS                         */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-3"
        >
          <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
          <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-white/70">
            {fluidsSection.eyebrow}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[32px] sm:text-[44px] lg:text-[48px] font-semibold text-white tracking-tight leading-[1.08] mb-4"
        >
          {t.fluidsHeadingLines[0]}<br />
          {t.fluidsHeadingLines[1]}
        </motion.h2>

        {/* Central Fluid Splash with Floating Frosted Badges */}
        <div className="relative max-w-3xl mx-auto h-[480px] sm:h-[540px] md:h-[580px] flex items-center justify-center my-4">
          {/* Central Fluid Splash Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-auto h-[88%] sm:h-[95%] md:h-[105%] aspect-square z-10 max-sm:w-full max-sm:h-auto"
          >
            <Image
              src={fluidsSection.fluidImage || images.liquid1}
              alt={t.fluidAlt}
              fill
              sizes="(max-width: 768px) 100vw, 650px"
              priority
              className="object-contain drop-shadow-2xl"
            />

          {/* Floating badges: placed on the blob's own box so every badge overlaps it */}
          {streamBadges.map((badge, idx) => {
            const isDark = badge.theme === "dark";
            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.88, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.15 + idx * 0.08,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className={`absolute z-20 flex items-center gap-2 sm:gap-2.5 px-3 sm:px-5 py-2 sm:py-3 rounded-full text-[12.5px] sm:text-[14px] font-medium shadow-md transition-all cursor-default whitespace-nowrap ${
                  isDark
                    ? "bg-[#C2C2C2]/10 max-sm:bg-[#0E291E]/80 backdrop-blur-lg border border-white/15 text-white"
                    : "bg-white/50 backdrop-blur-lg border border-white/15 text-[#18251E] shadow-sm"
                } ${badge.position}`}
              >
                <div>{badge.icon}</div>
                <span>{badge.title}</span>
              </motion.div>
            );
          })}
          </motion.div>
        </div>

        {/* Bottom Description Paragraph on pure white */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-4 pt-6 pb-16 sm:pb-24 text-center"
        >
          <p className="text-[14px] sm:text-[15px] text-[#55645C] leading-relaxed font-normal">
            {fluidsSection.footerText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

