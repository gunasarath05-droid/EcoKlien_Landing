"use client";

import React from "react";
import { useMessages } from "@/i18n/LocaleProvider";
import { homeMessages } from "@/i18n/messages/home";

export default function ClinicalApproachSection() {
  const { clinical: t, purposeBuilt } = useMessages(homeMessages);
  const points = t.points;

  return (
    <section id="approach" className="py-20 md:py-28 bg-white border-b border-[#D7DED5]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Proposition & Key Pillars */}
          <div className="lg:col-span-5 space-y-12">
            {/* Eyebrow and Subtitle */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-[1.5px] bg-[#00B050] shrink-0" />
                <span className="text-xs font-mono font-medium tracking-[0.14em] uppercase text-[#839088]">
                  {t.eyebrow}
                </span>
              </div>
              <p className="text-[15px] sm:text-base text-[#647069] leading-relaxed max-w-sm">
                {purposeBuilt}
              </p>
            </div>

            {/* Pillar Points without boxes */}
            <div className="space-y-8 sm:space-y-10">
              {points.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <h3 className="text-xl sm:text-[22px] font-semibold text-[#123D30] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#647069]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative / Approach */}
          <div className="lg:col-span-7 space-y-7 lg:pt-1">
            <h2 className="text-4xl sm:text-[44px] lg:text-[50px] font-bold text-[#123D30] tracking-tight leading-[1.12]">
              {t.titleLines.map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </h2>

            <div className="space-y-5 text-[15px] sm:text-base text-[#647069] leading-relaxed pt-2">
              <p>{t.paragraphs[0]}</p>

              <p className="font-semibold text-[#123D30]">{t.paragraphs[1]}</p>

              <p>{t.paragraphs[2]}</p>

              <p>{t.paragraphs[3]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

