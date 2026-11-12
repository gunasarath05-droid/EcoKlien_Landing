"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { LuMoveDiagonal2, LuLayoutGrid, LuPlug, LuCross } from "react-icons/lu";
import { images } from "@/data/images";
import { useMessages } from "@/i18n/LocaleProvider";
import { productsOverviewMessages } from "@/i18n/messages/productsOverview";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ProductsBuiltAroundSection() {
  const { built: t } = useMessages(productsOverviewMessages);

  const features = [
    { ...t.features.compact, Icon: LuMoveDiagonal2 },
    { ...t.features.modular, Icon: LuLayoutGrid },
    { ...t.features.plugAndPlay, Icon: LuPlug },
    { ...t.features.purposeBuilt, Icon: LuCross },
  ];

  return (
    <section className="bg-white py-14 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1.5 h-1.5 bg-[#13a538] shrink-0" />
              <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-[#5d6762]">{t.eyebrow}</span>
            </div>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-normal text-[#0e2a1e] tracking-[-0.01em] leading-[1.12]">
              {t.titleLines.map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br className="hidden sm:block" />}
                  {i > 0 && <span className="sm:hidden"> </span>}
                  {line}
                </React.Fragment>
              ))}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="lg:col-span-4 lg:col-start-9 text-[13.5px] sm:text-[14px] text-[#5d6762] leading-[1.6] lg:pb-1"
          >
            {t.intro}
          </motion.p>
        </div>

        {/* Image + feature cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] rounded-[18px] overflow-hidden bg-gradient-to-br from-[#F1F3F2] via-[#E2E7E4] to-[#C9D1CC]"
          >
            <Image
              src={images.machineBML}
              alt={t.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-center p-8 sm:p-10 pb-14 sm:pb-16"
            />
            <span className="absolute bottom-4 start-4 z-10 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.04em] text-[#2C3E35] shadow-sm">
              {t.imageCaption}
            </span>
          </motion.div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {features.map(({ title, description, Icon }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.08, duration: 0.55, ease }}
                className="rounded-[16px] bg-[#F1F5F2] border border-[#E3ECE6] p-6 sm:p-7 flex flex-col"
              >
                <Icon size={20} strokeWidth={1.8} className="text-[#123D30] mb-5" />
                <h3 className="text-[16px] sm:text-[17px] font-medium text-[#0e2a1e] leading-snug mb-3">{title}</h3>
                <p className="text-[13px] sm:text-[13.5px] text-[#5d6762] leading-[1.6]">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
