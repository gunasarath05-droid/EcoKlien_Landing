"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import {
  LuMicroscope,
  LuFlaskConical,
  LuPipette,
  LuTestTube,
  LuDroplet,
  LuMoveDiagonal2,
  LuLayoutGrid,
  LuPlug,
  LuCross,
  LuArrowUpRight,
} from "react-icons/lu";
import { motion } from "motion/react";

export default function BiomedicalTreatmentFlowSection() {
  const streams = [
    {
      title: "Laboratory processes",
      icon: (
        <LuMicroscope
          size={18}
          strokeWidth={1.8}
          className="text-[#18251E] shrink-0"
        />
      ),
      theme: "light",
      position: "top-4 left-4 sm:top-8 sm:left-12 lg:top-8 lg:left-16",
    },
    {
      title: "Dialysis waste",
      icon: (
        <LuFlaskConical
          size={18}
          strokeWidth={1.8}
          className="text-[#18251E] shrink-0"
        />
      ),
      theme: "light",
      position: "top-18 right-4 sm:top-20 sm:right-10 lg:top-20 lg:right-14",
    },
    {
      title: "Sputum",
      icon: (
        <LuPipette
          size={18}
          strokeWidth={1.8}
          className="text-white shrink-0"
        />
      ),
      theme: "dark",
      position: "top-[52%] left-2 sm:left-8 lg:left-12",
    },
    {
      title: "Urine",
      icon: (
        <LuTestTube
          size={18}
          strokeWidth={1.8}
          className="text-white shrink-0"
        />
      ),
      theme: "dark",
      position: "top-[48%] right-4 sm:right-10 lg:right-16",
    },
    {
      title: "Body fluids",
      icon: (
        <LuFlaskConical
          size={18}
          strokeWidth={1.8}
          className="text-white shrink-0"
        />
      ),
      theme: "dark",
      position:
        "bottom-24 right-8 sm:bottom-28 sm:right-20 lg:bottom-28 lg:right-28",
    },
    {
      title: "Blood",
      icon: (
        <LuDroplet
          size={18}
          strokeWidth={1.8}
          className="text-white shrink-0"
        />
      ),
      theme: "dark",
      position:
        "bottom-8 left-[24%] sm:bottom-10 sm:left-[30%] lg:bottom-12 lg:left-[34%]",
    },
  ];

  const cards = [
    {
      title: "Electrochemical technology",
      description:
        "Contaminants are destabilised and aggregated into larger flocs, making them easier to separate from the liquid.",
      icon: (
        <LuMoveDiagonal2
          size={22}
          strokeWidth={1.8}
          className="text-white mb-4"
        />
      ),
      theme: "dark",
    },
    {
      title: "On-site treatment",
      description:
        "Having an attached sink, the system treats the BML right at it's source, reducing the need to store hazardous liquid waste.",
      icon: (
        <LuLayoutGrid size={22} strokeWidth={1.8} className="text-white mb-4" />
      ),
      theme: "dark",
    },
    {
      title: "No added chemicals",
      description:
        "ECOKlien ensures safe treatment process without the need to handle any hazardous substances.",
      icon: (
        <LuPlug size={22} strokeWidth={1.8} className="text-[#18251E] mb-4" />
      ),
      theme: "light",
    },
    {
      title: "No odor. No noise",
      description:
        "Further electrochemical treatment acts on remaining organic contaminants and microorganisms.",
      icon: (
        <LuCross size={22} strokeWidth={1.8} className="text-[#18251E] mb-4" />
      ),
      theme: "light",
    },
  ];

  return (
    <section className="relative w-full bg-white overflow-visible">
      {/* 
        CONTINUOUS CENTRAL DARK FLUID BAND
      */}
      <div
        className="absolute left-0 right-0 z-0 pointer-events-none"
        style={{
          top: "420px",
          bottom: "310px",
        }}
      >
        <Image
          src={images.bioMedicalBg}
          alt="Biomedical dark fluid background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* ======================================================== */}
      {/* PART 1: FROM BLOOD TO BODY FLUIDS                       */}
      {/* ======================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 text-center">
        {/* Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2 mb-3.5"
        >
          <span className="w-2 h-2 bg-[#00A859] inline-block" />
          <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-[#5d6762]">
            WHAT IT TREAT:
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[28px] sm:text-[34px] lg:text-[38px] font-normal text-[#0e2a1e] tracking-[-0.01em] leading-[1.05]"
        >
          From blood to
          <br />
          body fluids.
        </motion.h2>

        {/* Central Fluid Splash with Floating Badges */}
        <div className="relative max-w-4xl mx-auto h-[480px] sm:h-[540px] md:h-[580px] flex items-center justify-center">
          {/* Central Fluid Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-auto h-[90%] sm:h-[105%] md:h-[115%] aspect-square z-10 drop-shadow-2xl mt-0 sm:-mt-8 md:-mt-16 lg:-mt-32"
          >
            <Image
              src={images.liquid1}
              alt="Bio-waste fluid splash"
              fill
              priority
              className="object-contain"
            />
          </motion.div>

          {/* Floating Badges */}
          {streams.map((item, idx) => {
            const isLight = item.theme === "light";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.15 + idx * 0.08,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className={`absolute z-20 flex items-center gap-3 px-5 py-3 rounded-xl text-xs sm:text-lg font-medium shadow-sm transition-all cursor-default ${
                  isLight
                    ? "bg-[#C2C2C2]/10 backdrop-blur-lg border border-white/15 text-[#18251E]"
                    : "bg-[#C2C2C2]/10 backdrop-blur-lg border border-white/15 text-white"
                } ${item.position}`}
              >
                <div>{item.icon}</div>
                <span>{item.title}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Description Text inside the Dark Fluid Band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto px-4 pt-4 pb-12 sm:pb-16 text-center"
        >
          <p className="text-xs sm:text-base text-[#CBDCD1] font-normal leading-relaxed">
            Treatment can be configured according to the characteristics of the
            incoming
            <br className="hidden sm:inline" /> wastewater and the requirements
            of the application.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mb-12 sm:mb-16">
        <div className="w-full border-t border-white/10" />
      </div>

        {/* Diagonal Transformation Stream (Liquid2.png) */}
        <div className="relative z-10 w-full pt-12 md:pt-20 pb-10 lg:aspect-[1920/1080] mb-0 md:mb-32">
          {/* Splash: full image, no cropping on desktop */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Desktop: natural ratio, full visible */}
            <Image
              src={images.liquid2}
              alt="Transformation liquid stream"
              width={1920}
              height={1080}
              sizes="100vw"
              priority
              className="hidden lg:block w-full h-auto"
            />
            {/* Mobile/tablet: cover, anchored to the splash side */}
            <Image
              src={images.liquid2}
              alt="Transformation liquid stream"
              fill
              sizes="100vw"
              className="lg:hidden object-cover object-[35%_bottom]"
            />
          </div>
        
        <div className="max-w-7xl relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 lg:mb-16">
            {/* Left Column: Eyebrow + Heading */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-1.5 h-1.5 bg-[#13a538] shrink-0" />
                <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-[#5d6762]">
                  THE ECOKLIEN APPROACH
                </span>
              </div>

              <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-normal text-white tracking-tight leading-[1.05]">
                Biomedical liquid waste
                <br />
                treatment, re-imagined
              </h2>
            </motion.div>

            {/* Right Column: Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-7 lg:pt-3"
            >
              <p className="text-[14px] sm:text-[15px] text-white/90 leading-[1.55] max-w-2xl font-normal">
                ECOKlien uses advanced electrochemical technology to treat and
                disinfect potentially contaminated liquid waste on site,
                bringing treatment closer to where the waste is generated, with
                a compact, modular system designed to reduce dependence on
                conventional chemical treatment and large, complex
                infrastructure.
              </p>
            </motion.div>
          </div>

          {/* Lower Content: CTA Button on Left + 2x2 Feature Cards Grid on Right */}
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            {/* Left: Button aligned over liquid splash & white bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 pb-6 lg:pb-8"
            >
              <Link
                href="https://ecoklien.com/products-biomedical-and-hospital-wastewater/"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#871F22] hover:bg-[#9E2428] text-white font-medium text-[14px] shadow-2xl transition-all duration-300 group"
              >
                <span>View Configurations</span>
                <LuArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>

            {/* Right: 2x2 Cards Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {cards.map((card, idx) => {
                const isDark = card.theme === "dark";
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: idx * 0.1,
                        duration: 0.55,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }}
                    viewport={{ once: true, margin: "-40px" }}
                    whileHover={{
                      y: -6,
                      transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                    }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className={`p-6 sm:p-7 rounded-[14px] flex flex-col justify-start cursor-default transition-[border-color,box-shadow] duration-300 ${
                      isDark
                        ? "bg-[#101C15]/80 sm:bg-[#000000]/25 backdrop-blur-xl border border-white/15 hover:border-white/35 text-white hover:shadow-2xl"
                        : "bg-white/95 sm:bg-white/70 backdrop-blur-xl border border-[#E3ECE6]/90 sm:border-white/50 hover:border-white/80 text-[#18251E] shadow-lg hover:shadow-2xl"
                    }`}
                  >
                    <div>{card.icon}</div>
                    <h3
                      className={`text-[18px] sm:text-[20px] font-normal mb-2 leading-[1.2] ${
                        isDark ? "text-white" : "text-[#18251E]"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`text-[14px] sm:text-[15px] leading-[1.55] font-normal ${
                        isDark ? "text-white/85" : "text-[#5d6762]"
                      }`}
                    >
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
