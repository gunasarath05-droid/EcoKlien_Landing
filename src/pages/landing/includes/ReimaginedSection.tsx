import React from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import {
  LuMoveDiagonal2,
  LuLayoutGrid,
  LuPlug,
  LuCross,
  LuArrowUpRight,
} from "react-icons/lu";

export default function ReimaginedSection() {
  const cards = [
    {
      title: "Electrochemical technology",
      description:
        "Contaminants are destabilised and aggregated into larger flocs, making them easier to separate from the liquid.",
      icon: <LuMoveDiagonal2 size={22} strokeWidth={1.8} className="text-white mb-4" />,
      theme: "dark",
    },
    {
      title: "On-site treatment",
      description:
        "Having an attached sink, the system treats the BML right at it's source, reducing the need to store hazardous liquid waste.",
      icon: <LuLayoutGrid size={22} strokeWidth={1.8} className="text-white mb-4" />,
      theme: "dark",
    },
    {
      title: "No added chemicals",
      description:
        "ECOKlien ensures safe treatment process without the need to handle any hazardous substances.",
      icon: <LuPlug size={22} strokeWidth={1.8} className="text-[#18251E] mb-4" />,
      theme: "light",
    },
    {
      title: "No odor. No noise",
      description:
        "Further electrochemical treatment acts on remaining organic contaminants and microorganisms.",
      icon: <LuCross size={22} strokeWidth={1.8} className="text-[#18251E] mb-4" />,
      theme: "light",
    },
  ];

  return (
    <section className="relative py-12 md:py-20 lg:py-24 overflow-hidden">
      {/* Background: Fluids2.png (Dark Fluid Top / White Bottom) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={images.fluidbg2}
          alt="Fluids background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Diagonal Liquid Stream Transition */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Image
          src={images.liquid2}
          alt="Transformation liquid stream"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Top Divider Line */}
        <div className="w-full border-t border-white/10 mb-10 sm:mb-14" />

        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14 lg:mb-20">
          {/* Left Column: Eyebrow + Heading */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3.5">
              <span className="w-2 h-2 bg-[#00A859] inline-block" />
              <span className="text-xs font-mono font-medium tracking-wider uppercase text-[#809187]">
                THE ECOKLIEN APPROACH
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.15]">
              Biomedical liquid waste
              <br />
              treatment, re-imagined
            </h2>
          </div>

          {/* Right Column: Paragraph */}
          <div className="lg:col-span-7 lg:pt-3">
            <p className="text-xs sm:text-[14px] text-[#CBDCD1] leading-relaxed max-w-2xl font-normal">
              ECOKlien uses advanced electrochemical technology to treat and disinfect potentially contaminated liquid waste on site, bringing treatment closer to where the waste is generated, with a compact, modular system designed to reduce dependence on conventional chemical treatment and large, complex infrastructure.
            </p>
          </div>
        </div>

        {/* Lower Content: CTA Button on Left + 2x2 Feature Cards Grid on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          {/* Left: Button aligned over liquid splash */}
          <div className="lg:col-span-5 pb-4 sm:pb-8">
            <Link
              href="#configurations"
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#871F22] hover:bg-[#9E2428] text-white font-medium text-xs sm:text-[13px] shadow-2xl transition-all duration-300 group"
            >
              <span>View Configurations</span>
              <LuArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Right: 2x2 Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {cards.map((card, idx) => {
              const isDark = card.theme === "dark";
              return (
                <div
                  key={idx}
                  className={`p-6 sm:p-7 min-h-[175px] sm:min-h-[195px] rounded-[24px] shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col justify-start ${
                    isDark
                      ? "bg-[#0B1712]/75 backdrop-blur-xl border border-white/10 text-white"
                      : "bg-white/65 backdrop-blur-xl border border-white/70 text-[#18251E]"
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
                      isDark ? "text-[#A6B7AD]" : "text-[#5D6B62]"
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
    </section>
  );
}
