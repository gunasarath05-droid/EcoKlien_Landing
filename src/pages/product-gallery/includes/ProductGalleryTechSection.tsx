"use client";

import React from "react";
import Image from "next/image";
import { images } from "@/data/images";
import { LuMaximize2, LuBoxes, LuPlug } from "react-icons/lu";
import { motion } from "motion/react";

export default function ProductGalleryTechSection() {
  const features = [
    {
      icon: LuMaximize2,
      title: "Compact footprint",
      description: "Space-conscious engineering for treatment closer to generation.",
    },
    {
      icon: LuBoxes,
      title: "Modular configuration",
      description: "An approach shaped around your facility's treatment needs.",
    },
    {
      icon: LuPlug,
      title: "Plug-and-play design",
      description: "Making on-site biomedical liquid waste treatment more practical.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAF8] border-y border-[#EAEFEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#00A859] font-medium">
              ENGINEERING FOR YOUR FACILITY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-end">
            <div className="lg:col-span-7">
              <h2 className="text-[32px] sm:text-[42px] font-semibold text-[#0E291E] tracking-tight leading-[1.08]">
                Serious technology.<br />
                Practical proportions.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-1">
              <p className="text-[14px] sm:text-[15px] text-[#55645C] leading-relaxed font-normal">
                A compact, modular and plug-and-play approach to treatment within the facility.
              </p>
            </div>
          </div>
        </div>

        {/* Two Side-by-Side Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-14 sm:mb-16">
          {/* Left: System Family */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-3"
          >
            <div className="relative aspect-[16/11] w-full rounded-[20px] overflow-hidden bg-[#10241B] border border-[#E5EBE6] shadow-xs">
              <Image
                src={images.product.product1 || "/assests/images/home/Hospital Effluent Treatment Systems.png"}
                alt="ECOKlien System Family"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-[#18251E] font-medium shadow-sm">
                ECOKlien / SYSTEM FAMILY
              </div>
            </div>
            <div className="text-[10.5px] font-mono uppercase tracking-[0.16em] text-[#738479]">
              HYBRID ELECTROCHEMICAL TREATMENT APPROACH
            </div>
          </motion.div>

          {/* Right: Point of Source Collection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-3"
          >
            <div className="relative aspect-[16/11] w-full rounded-[20px] overflow-hidden bg-[#F0F3F1] border border-[#E5EBE6] shadow-xs">
              <Image
                src={images.bloodToWater || "/assests/images/blood to water.png"}
                alt="Point of Source Collection Sink"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="text-[10.5px] font-mono uppercase tracking-[0.16em] text-[#738479]">
              POINT-OF-SOURCE / LIQUID WASTE COLLECTION
            </div>
          </motion.div>
        </div>

        {/* 3 Columns Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pt-4">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E5EBE6] flex items-center justify-center text-[#00A859] shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-[17px] font-semibold text-[#0E291E] tracking-tight">
                  {feat.title}
                </h3>
                <p className="text-[13.5px] text-[#55645C] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

