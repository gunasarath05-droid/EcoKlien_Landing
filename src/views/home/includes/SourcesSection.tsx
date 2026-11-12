"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { images } from "@/data/images";
import { useMessages } from "@/i18n/LocaleProvider";
import { homeMessages, wasteStreamMessages } from "@/i18n/messages/home";

const ease = [0.16, 1, 0.3, 1] as const;

export default function SourcesSection() {
  const { sources: t } = useMessages(homeMessages);
  const streamNames = useMessages(wasteStreamMessages);
  const sources = [
    {
      title: streamNames.blood,
      icon: (
        <svg
          className="w-5 h-5 text-[#123D30]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M12 3C12 3 6.5 9.8 6.5 14.8A5.5 5.5 0 0017.5 14.8C17.5 9.8 12 3 12 3z"
          />
        </svg>
      ),
    },
    {
      title: streamNames.bodyFluids,
      icon: (
        <svg
          className="w-5 h-5 text-[#123D30]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M10 2.5h4M11 2.5v5L5.5 18.5a2 2 0 001.7 3h9.6a2 2 0 001.7-3L13 7.5v-5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.6}
            d="M7.8 16h8.4"
          />
        </svg>
      ),
    },
    {
      title: streamNames.dialysis,
      icon: (
        <svg
          className="w-5 h-5 text-[#123D30]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M10 2.5h4M11 2.5v5L5.5 18.5a2 2 0 001.7 3h9.6a2 2 0 001.7-3L13 7.5v-5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.6}
            d="M7.8 16h8.4"
          />
        </svg>
      ),
    },
    {
      title: streamNames.urine,
      icon: (
        <svg
          className="w-5 h-5 text-[#123D30]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M8.5 2.5h7M9.5 2.5v15a2.5 2.5 0 005 0v-15"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.5 11h5"
          />
        </svg>
      ),
    },
    {
      title: streamNames.sputum,
      icon: (
        <svg
          className="w-5 h-5 text-[#123D30]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M15.5 3.5a2.1 2.1 0 013 3l-1.5 1.5-3-3 1.5-1.5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M13.5 5.5l4 4"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M13.8 8.2L7.2 14.8a2 2 0 00-.5 1l-.7 2.7 2.7-.7c.4-.1.7-.3 1-.5l6.6-6.6"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.5 14l1.5 1.5"
          />
        </svg>
      ),
    },
    {
      title: streamNames.laboratory,
      icon: (
        <svg
          className="w-5 h-5 text-[#123D30]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M5 21h12M11 21v-3"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M7 15h8"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M13 3l4 4-7 7-4-4 7-7z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M8.5 12l2 2"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M11 18c-3.2 0-5.2-2.2-5.2-5.5a5.5 5.5 0 012.6-4.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="sources" className="py-16 md:py-24 bg-white overflow-hidden lg:overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative lg:ps-[150px] xl:ps-[180px]">
          {/* Liquid splash: sits half outside the panel, overlapping its start edge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease }}
            className="relative mx-auto -mb-16 sm:-mb-20 lg:mb-0 lg:mx-0 z-20 w-56 sm:w-64 lg:absolute lg:start-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[300px] xl:w-[340px] aspect-square pointer-events-none"
          >
            <Image
              src={images.source}
              alt={t.splashAlt}
              fill
              sizes="(max-width: 1024px) 256px, 340px"
              className="object-contain drop-shadow-[0_24px_30px_rgba(60,10,10,0.18)]"
            />
          </motion.div>

          {/* Sage panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="relative rounded-[20px] bg-[#eef1ec] px-6 pt-20 pb-8 sm:px-10 sm:pt-24 sm:pb-10 lg:py-12 lg:pe-12 lg:ps-[170px] xl:ps-[190px]"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1.5 h-1.5 bg-[#13a538] shrink-0" />
              <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-[#5d6762]">{t.eyebrow}</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 lg:gap-10">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-normal text-[#0e2a1e] tracking-[-0.01em] leading-[1.1]">
                {t.titleLines.map((line, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              </h2>
              <p className="text-[13px] sm:text-[14px] text-[#5d6762] leading-[1.6] max-w-[340px] lg:pb-1">
                {t.description}
              </p>
            </div>

            <ul className="mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {sources.map((src, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: 0.15 + idx * 0.05, ease }}
                  className="flex items-center justify-between gap-4 rounded-full bg-white px-5 py-3 border border-[#e3e7e5] hover:border-[#00B050]/40 transition-colors"
                >
                  <span className="shrink-0">{src.icon}</span>
                  <span className="text-[13px] sm:text-[14px] text-[#0e2a1e] text-end">{src.title}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
