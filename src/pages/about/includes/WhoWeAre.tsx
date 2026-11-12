"use client";

import React from "react";
import { useMessages } from "@/i18n/LocaleProvider";
import { aboutMessages } from "@/i18n/messages/about";

export default function WhoWeAre() {
  const { whoWeAre } = useMessages(aboutMessages);

  return (
    <div className="bg-white text-[#18251E]">
      {/* <section className="w-full border-y border-[#E5EBE7] py-6 sm:py-7 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-10">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 bg-[#00A859] inline-block" />
            <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-[#5D6B62]">
              ECOKLIEN
            </span>
          </div>
          <p className="text-[13.5px] sm:text-[14.5px] text-[#2C3E35] font-normal leading-relaxed">
            Advanced electro-chemical wastewater (effluent) treatment systems for hospitals and biomedical uses.
          </p>
        </div>
      </section> */}

      <section className="py-14 md:py-24 border-t border-[#E5EBE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Column: Who We Are Eyebrow + Subtext */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00A859] inline-block" />
                <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-[#5D6B62]">
                  {whoWeAre.eyebrow}
                </span>
              </div>
              <div className="space-y-1 text-[14px] md:text-[15px] text-[#5D6B62] font-normal leading-relaxed pt-1">
                {whoWeAre.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            {/* Right Column: Large Impactful Statement */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-[16px] sm:text-[24px] lg:text-[28px] font-normal text-[#0E291E] tracking-tight leading-[1.2]">
                {whoWeAre.statement}
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#5D6B62] font-normal leading-relaxed max-w-2xl">
                {whoWeAre.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
