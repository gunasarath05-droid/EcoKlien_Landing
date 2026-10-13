"use client";

import React from "react";
import { motion } from "motion/react";

export default function WasteNotFromOnePlaceSection() {
  const sources = [
    "Laboratories",
    "Diagnostic Areas",
    "Procedure Rooms",
    "Clinical Facilities",
  ];

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
            className="lg:col-span-5"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-1.5 h-1.5 bg-[#13a538] shrink-0" />
              <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-[#5d6762]">
                The problem
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-[14px] sm:text-[15px] text-[#5d6762] leading-[1.55] max-w-[250px] my-6 font-normal">
              Purpose-built for the places where care and science happen.
            </p>

            {/* List of generation locations */}
            <div className="space-y-5 sm:space-y-6">
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
                  <span className="text-[18px] sm:text-[20px] font-normal text-[#0e2a1e] block hover:text-[#00B050] transition-colors cursor-default">
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
            className="lg:col-span-7 lg:pt-1"
          >
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-medium text-[#0f3d2a] leading-[1.05] tracking-[-0.005em] mb-6 sm:mb-8">
              Biomedical liquid waste doesn&apos;t come from
              <br />
              one place.
            </h2>

            <div className="space-y-5 sm:space-y-6 text-[14px] sm:text-[15px] leading-[1.55] font-normal">
              <p className="text-[#5d6762]">
                Hospitals and healthcare facilities generate liquid waste across laboratories, diagnostic areas, operation theatres, dialysis centres and other clinical environments. These streams can contain biological contaminants, organic pollutants and other substances that require appropriate treatment before discharge or reuse.
              </p>

              <p className="text-[#5d6762]">
                The challenge isn&apos;t simply collecting the waste.
              </p>

              <p className="font-semibold text-[#0e2a1e] pt-2">
                It&apos;s treating it safely, effectively and practically.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
