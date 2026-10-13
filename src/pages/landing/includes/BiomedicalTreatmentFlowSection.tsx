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
      position: "top-14 right-4 sm:top-20 sm:right-10 lg:top-20 lg:right-14",
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
    <section className="relative w-full bg-white ">
      {/* 
        CONTINUOUS CENTRAL DARK FLUID BAND
        Starts across the middle of the fluid sphere and extends 
        down through the top row of the 2x2 cards.
      */}
      <div
        className="absolute left-0 right-0 z-0 pointer-events-none "
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
        <div className="flex items-center justify-center gap-2 mb-3.5">
          <span className="w-2 h-2 bg-[#00A859] inline-block" />
          <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-[#5d6762]">
            WHAT IT TREAT:
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-normal text-[#0e2a1e] tracking-[-0.01em] leading-[1.05]">
          From blood to
          <br />
          body fluids.
        </h2>

        {/* Central Fluid Splash with Floating Badges */}
        <div className="relative max-w-4xl mx-auto h-[480px] sm:h-[540px] md:h-[580px] flex items-center justify-center">
          {/* Central Fluid Sphere */}
          <div className="relative w-auto h-[90%] sm:h-[105%] md:h-[115%] aspect-square z-10 drop-shadow-2xl mt-0 sm:-mt-8 md:-mt-16 lg:-mt-32">
            <Image
              src={images.liquid1}
              alt="Bio-waste fluid splash"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Floating Badges */}
          {streams.map((item, idx) => {
            const isLight = item.theme === "light";
            return (
              <div
                key={idx}
                className={`absolute z-20 flex items-center gap-3 px-5 py-3 rounded-xl text-xs sm:text-lg font-medium shadow-sm ${
                  isLight
                    ? "bg-[#C2C2C2]/10 backdrop-blur-lg border border-white/15 text-[#18251E]"
                    : "bg-[#C2C2C2]/10 backdrop-blur-lg border border-white/15 text-white"
                } ${item.position}`}
              >
                <div>{item.icon}</div>
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>

        {/* Description Text inside the Dark Fluid Band */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 pt-4 pb-12 sm:pb-16 text-center">
          <p className="text-xs sm:text-base text-[#CBDCD1] font-normal leading-relaxed">
            Treatment can be configured according to the characteristics of the
            incoming
            <br className="hidden sm:inline" /> wastewater and the requirements
            of the application.
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SEAMLESS DIVIDER LINE INSIDE DARK FLUID BAND            */}
      {/* ======================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto mb-12 sm:mb-16">
        <div className="w-full border-t border-white/10" />
      </div>
      {/* ======================================================== */}
      {/* PART 2: BIOMEDICAL LIQUID WASTE TREATMENT, RE-IMAGINED  */}
      {/* ======================================================== */}
      <div className="relative z-10 w-full pb-16 md:pb-24">
        {/* Diagonal Transformation Stream (Liquid2.png) */}
        <div className="absolute w-full h-full left-0 right-0 bottom-0 top-0 z-0 pointer-events-none">
          <Image
            src={images.liquid2}
            alt="Transformation liquid stream"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Header Row */}
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 lg:mb-16">
            {/* Left Column: Eyebrow + Heading */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-3.5">
                <span className="w-2 h-2 bg-[#00A859] inline-block" />
                <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-[#5d6762]">
                  THE ECOKLIEN APPROACH
                </span>
              </div>

              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-normal text-white tracking-[-0.01em] leading-[1.05]">
                Biomedical liquid waste
                <br />
                treatment, re-imagined
              </h2>
            </div>

            {/* Right Column: Paragraph */}
            <div className="lg:col-span-7 lg:pt-3">
              <p className="text-xs sm:text-[14px] md:text-base text-[#CBDCD1] leading-relaxed max-w-2xl font-normal">
                ECOKlien uses advanced electrochemical technology to treat and
                disinfect potentially contaminated liquid waste on site,
                bringing treatment closer to where the waste is generated, with
                a compact, modular system designed to reduce dependence on
                conventional chemical treatment and large, complex
                infrastructure.
              </p>
            </div>
          </div>

          {/* Lower Content: CTA Button on Left + 2x2 Feature Cards Grid on Right */}
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            {/* Left: Button aligned over liquid splash & white bottom */}
            <div className="lg:col-span-6 pb-4 sm:pb-8">
              <Link
                href="#configurations"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#871F22] hover:bg-[#9E2428] text-white font-medium text-xs sm:text-[13px] shadow-2xl transition-all duration-300 group"
              >
                <span>View Configurations</span>
                <LuArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Right: 2x2 Cards Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {cards.map((card, idx) => {
                const isDark = card.theme === "dark";
                return (
                  <div
                    key={idx}
                    className={`p-6 sm:p-7 min-h-[175px] sm:min-h-[195px] rounded-[24px] shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col justify-start ${
                      isDark
                        ? "bg-[#000000]/21 backdrop-blur-xl border border-white/10 text-white"
                        : "bg-[#000000]/0 backdrop-blur-xl border border-white/50 text-[#18251E]"
                    }`}
                  >
                    <div>{card.icon}</div>
                    <h3
                      className={`text-base sm:text-[17px] font-semibold mb-2 leading-snug ${
                        isDark ? "text-white" : "text-[#18251E]"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-[13px] leading-relaxed ${
                        isDark ? "text-white" : "text-[#5D6B62]"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
