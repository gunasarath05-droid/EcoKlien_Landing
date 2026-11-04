"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { LuArrowUpRight } from "react-icons/lu";
import { motion } from "motion/react";

interface BottomCtaBannerProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function BottomCtaBanner({
  eyebrow = "LET'S TALK TREATMENT",
  title = "Bring your questions. We'll bring the engineering.",
  subtitle = "Tell us your wastewater source, approximate volume and operating requirements. Let's discuss the right approach for your facility.",
  buttonText = "Talk to an engineer",
  buttonLink = "https://ecoklien.com/contact/",
}: BottomCtaBannerProps) {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#0A1F18] border border-white/10 p-8 sm:p-12 lg:p-14 shadow-xl"
        >
          {/* Background Fluid Texture */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src={images.enquiry}
              alt="Treatment fluid background"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
                <span className="text-[10.5px] font-mono tracking-[0.14em] uppercase text-white/70">
                  {eyebrow}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[26px] sm:text-[34px] lg:text-[38px] font-semibold text-white tracking-tight leading-[1.12]">
                {title}
              </h3>

              {/* Subtitle */}
              <p className="text-[13.5px] sm:text-[14.5px] text-white/80 leading-relaxed font-normal">
                {subtitle}
              </p>
            </div>

            {/* CTA Button */}
            <div className="shrink-0">
              <Link
                href={buttonLink}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#00A859] hover:bg-[#00924c] text-white font-medium text-[14px] transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] group whitespace-nowrap"
              >
                <span>{buttonText}</span>
                <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

