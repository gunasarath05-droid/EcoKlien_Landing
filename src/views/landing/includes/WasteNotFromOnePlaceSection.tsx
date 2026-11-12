"use client";

import React from "react";
import { motion } from "motion/react";
import { useMessages } from "@/i18n/LocaleProvider";
import { landingMessages } from "@/i18n/messages/landing";

export default function WasteNotFromOnePlaceSection() {
  const { wasteSources: t } = useMessages(landingMessages);
  const sources = t.places;

  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto bg-white border-t border-[#e3e7e5]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-1.5 h-1.5 bg-[#13a538] shrink-0" />
              <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-[#5d6762]">
                {t.eyebrow}
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-[13.5px] sm:text-[14px] text-[#5d6762] leading-[1.55] max-w-[250px] mt-4 mb-8 font-normal">
              {t.subtitle}
            </p>

            {/* List of generation locations */}
            <div className="space-y-3.5 sm:space-y-4">
              {sources.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.1,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <span className="text-[16px] sm:text-[17px] font-medium text-[#0e2a1e] block hover:text-[#00B050] transition-colors cursor-default">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 lg:pt-1"
          >
            <h2 className="text-[26px] sm:text-[32px] lg:text-[34px] font-medium text-[#0f3d2a] leading-[1.1] tracking-[-0.005em] mb-6 sm:mb-8 max-w-[760px]">
              {t.title}
            </h2>

            <div className="space-y-4 text-[13.5px] sm:text-[14px] leading-[1.6] font-normal max-w-[720px]">
              {t.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-[#5d6762]">
                  {paragraph}
                </p>
              ))}

              <p className="font-semibold text-[#0e2a1e] pt-2">
                {t.conclusion}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
