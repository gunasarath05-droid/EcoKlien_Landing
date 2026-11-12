"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductDetail, defaultProduct } from "@/data/products";
import { LuArrowUpRight } from "react-icons/lu";
import { motion } from "motion/react";

interface ProductHeroSectionProps {
  hero?: ProductDetail["hero"];
}

export default function ProductHeroSection({
  hero = defaultProduct.hero,
}: ProductHeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[94vh] flex flex-col justify-center overflow-hidden bg-[#0A1B14] text-white">
      {/* Full Background Photo: Machine on dark floor with natural shadows */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.image}
          alt={hero.title}
          fill
          sizes="100vw"
          priority
          className="object-cover object-right lg:object-center"
        />
        {/* Dark Gradient Overlay for optimal text readability */}
        <div className="absolute inset-0 w-full lg:w-[45%] bg-[#0e2a1e]/35 lg:bg-white/15 backdrop-blur-md pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-2xl lg:ps-6">
          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5 mb-8 sm:mb-12 lg:mb-20"
          >
            <span className="w-1.5 h-1.5 bg-[#13a538] shrink-0" />
            <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-white/75">
              {hero.eyebrow}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[34px] sm:text-[42px] lg:text-[46px] font-semibold text-white tracking-[-0.01em] leading-[1.05] max-w-[420px] mb-3 sm:mb-4"
          >
            {hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16px] sm:text-[18px] font-medium text-white leading-snug max-w-[340px] mb-8 sm:mb-12"
          >
            {hero.subtitle}
          </motion.p>

          {/* Body Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13.5px] sm:text-[14px] text-white/85 leading-[1.6] max-w-[400px] font-normal mb-8 sm:mb-12"
          >
            {hero.description}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-6 sm:gap-7"
          >
            {/* Primary Enquire button with diagonal arrow */}
            <Link
              href={hero.ctaLink}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-[#00A859] hover:bg-[#008f4c] text-white font-medium text-[14px] transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] group"
            >
              <span>{hero.ctaText}</span>
              <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
            </Link>

            {/* Secondary Link */}
            {hero.secondaryCtaText && (
              <Link
                href={hero.secondaryCtaLink || "#configurations"}
                className="text-[14px] text-white/80 underline underline-offset-4 decoration-white/40 hover:text-white transition-colors"
              >
                {hero.secondaryCtaText}
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
