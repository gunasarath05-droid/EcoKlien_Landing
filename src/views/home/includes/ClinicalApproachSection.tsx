"use client";

import React from "react";
import { motion } from "motion/react";
import { useMessages } from "@/i18n/LocaleProvider";
import { homeMessages } from "@/i18n/messages/home";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ClinicalApproachSection() {
  const { clinical: t, purposeBuilt } = useMessages(homeMessages);

  return (
    <section id="approach" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 border-b border-[#e3e7e5] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: proposition */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1.5 h-1.5 bg-[#13a538] shrink-0" />
              <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-[#5d6762]">{t.eyebrow}</span>
            </div>
            <p className="text-[14px] text-[#5d6762] leading-[1.6] max-w-[280px]">{purposeBuilt}</p>

            <div className="mt-12 lg:mt-16 space-y-7">
              {t.points.map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-[16px] sm:text-[17px] font-normal text-[#0e2a1e] leading-snug">{item.title}</h3>
                  <p className="text-[13px] sm:text-[14px] text-[#5d6762] leading-[1.55] mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: narrative */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="lg:col-span-8 lg:ps-6"
          >
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-normal text-[#0e2a1e] tracking-[-0.01em] leading-[1.1]">
              {t.titleLines.map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </h2>

            <div className="mt-8 space-y-5 text-[14px] sm:text-[15px] text-[#5d6762] leading-[1.65] max-w-[640px]">
              <p>{t.paragraphs[0]}</p>
              <p className="font-medium text-[#0e2a1e]">{t.paragraphs[1]}</p>
              <p>{t.paragraphs[2]}</p>
              <p>{t.paragraphs[3]}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
