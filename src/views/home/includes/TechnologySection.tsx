"use client";

import React from "react";
import Image from "next/image";
import { images } from "@/data/images";
import { LuMoveDiagonal2, LuLayoutGrid, LuPlug, LuCross } from "react-icons/lu";
import { motion } from "motion/react";
import { useMessages } from "@/i18n/LocaleProvider";
import { homeMessages } from "@/i18n/messages/home";

export default function TechnologySection() {
  const { technology: t } = useMessages(homeMessages);
  const specs = [
    {
      ...t.specs.compact,
      icon: <LuMoveDiagonal2 size={24} strokeWidth={1.8} className="text-[#18251E]" />,
    },
    {
      ...t.specs.modular,
      icon: <LuLayoutGrid size={24} strokeWidth={1.8} className="text-[#18251E]" />,
    },
    {
      ...t.specs.plugAndPlay,
      icon: <LuPlug size={24} strokeWidth={1.8} className="text-[#18251E]" />,
    },
    {
      ...t.specs.purposeBuilt,
      icon: <LuCross size={24} strokeWidth={1.8} className="text-[#18251E]" />,
    },
  ];

  return (
    <section id="technology" className="relative z-20 max-w-7xl mx-auto border-t border-[#e3e7e5]">
      <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1.5 h-1.5 bg-[#13a538] shrink-0" />
              <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-[#5d6762]">
                {t.eyebrow}
              </span>
            </div>
            {/* Title */}
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-normal text-[#0e2a1e] tracking-[-0.01em] leading-[1.05]">
              {t.titleLines.map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:pb-1"
          >
            <p className="text-[14px] sm:text-[15px] text-[#5d6762] leading-[1.55] max-w-[360px] font-normal">
              {t.intro}
            </p>
          </motion.div>
        </div>

        {/* Content: Image on Left + 2x2 Feature Grid on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left: Machine in facility visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[650px] rounded-[20px] overflow-hidden bg-[#EFF3ED]">
              <Image
                src={images.facility}
                alt={t.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 58vw, 750px"
                className="object-cover object-center"
                priority
              />

              {/* Tag at bottom */}
              <div className="absolute bottom-5 start-2 md:start-5 bg-white/92 backdrop-blur-sm rounded-[8px] px-2 py-1 md:px-4 md:py-2.5 shadow-sm">
                <span className="text-[9px] md:text-[11px] font-mono tracking-[0.03em] text-[#1b2a22] font-medium block">
                  {t.imageTag}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: 2x2 Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:auto-rows-fr lg:min-h-[650px] gap-4 sm:gap-5">
            {specs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-[14px] bg-[#f0f2ef] hover:bg-[#e7ece6] transition-colors flex flex-col justify-start cursor-default"
              >
                <div className="mb-5 text-[#0e2a1e]">
                  {item.icon}
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-normal text-[#0e2a1e] mb-3 leading-[1.2]">
                  {item.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#5d6762] leading-[1.55] font-normal">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
