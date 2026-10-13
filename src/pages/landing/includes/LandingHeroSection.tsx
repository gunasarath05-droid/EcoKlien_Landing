"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FlaskConical, Minimize2 } from "lucide-react";
import { images } from "@/data/images";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";

export default function LandingHeroSection() {
  const highlights = [
    {
      title: "No added chemicals",
      icon: (
        <FlaskConical className="w-5 h-5 text-white/90" strokeWidth={1.8} />
      ),
    },
    {
      title: "Low sludge production",
      icon: <Minimize2 className="w-5 h-5 text-white/90" strokeWidth={2} />,
    },
    {
      title: "Microbes Free",
      icon: <Minimize2 className="w-5 h-5 text-white/90" strokeWidth={2} />,
    },
    {
      title: "No Odor",
      icon: <Minimize2 className="w-5 h-5 text-white/90" strokeWidth={2} />,
    },
  ];

  return (
    <section className="relative min-h-[94vh] flex flex-col justify-between overflow-hidden bg-[#0A1B14] text-white">
      {/* Full Background Laboratory Photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.landingHero}
          alt="EcoKlien Laboratory Biomedical Liquid Waste Treatment System"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 md:bg-black/15" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-10 sm:pb-12 flex-1 flex flex-col justify-center w-full">
        <div className="max-w-2xl">
          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5 mb-8 sm:mb-12"
          >
            <span className="w-1.5 h-1.5 bg-[#13a538] shrink-0" />
            <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-white/75">
              Advanced biomedical liquid waste treatment
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[34px] sm:text-[44px] lg:text-[50px] font-semibold text-white tracking-[-0.01em] leading-[1.0] sm:leading-[0.95] max-w-[440px] mb-5 sm:mb-6"
          >
            Biomedical
            <br />
            Liquid Waste
            <br />
            Treatment System
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[17px] sm:text-[19px] font-normal text-white mb-8 sm:mb-12"
          >
            Treat biomedical liquid waste. At the source.
          </motion.p>

          {/* Body Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14px] sm:text-[15px] text-white/90 leading-[1.55] max-w-[440px] font-normal mb-8 sm:mb-12"
          >
            ECOKlien uses advanced electrochemical technology to treat and
            disinfect potentially contaminated liquid waste on site — without
            added treatment chemicals, in a compact, modular system designed for
            healthcare facilities and laboratories.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-6 sm:gap-7"
          >
            {/* Buy now button with diagonal arrow */}
            <Link
              href="https://ecoklien.com/products-biomedical-and-hospital-wastewater/"
              className="inline-flex items-center justify-center gap-5 sm:gap-6 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#0a9a3a] hover:bg-[#088231] text-white font-medium text-[14px] transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <span>Buy now</span>
              <FaArrowRight className="w-3.5 h-3.5 -rotate-[45deg] group-hover:rotate-0 transition-all duration-300 ease-in-out" />
            </Link>

            {/* Get a quote link with underline */}
            <Link
              href="https://ecoklien.com/contact/"
              className="text-[14px] text-white/85 underline underline-offset-4 decoration-white/50 hover:text-white transition-colors"
            >
              Get a quote
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom 4 Feature Cards with Staggered Scroll Animation */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: idx * 0.1,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex items-center justify-between sm:justify-start gap-6 sm:gap-8 px-6 sm:px-7 py-5 sm:py-6 rounded-[10px] text-[17px] sm:text-[20px] font-normal text-white bg-gradient-to-r from-black/55 to-white/[0.08] border border-white/22 backdrop-blur-[14px] shadow-lg cursor-default"
            >
              <div className="shrink-0">{item.icon}</div>
              <span className="tracking-tight font-normal">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
