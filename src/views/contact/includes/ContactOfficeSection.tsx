"use client";

import React from "react";
import { motion } from "motion/react";
import { LuArrowUpRight } from "react-icons/lu";
import { office } from "@/data/contact";

export default function ContactOfficeSection() {
  return (
    <section className="pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[24px] bg-[#EEF3EE] p-7 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#00A859] inline-block" />
              <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-[#5D6B62]">
                {office.eyebrow}
              </span>
            </div>
            <h2 className="text-[24px] sm:text-[28px] font-medium text-[#0E291E] tracking-tight leading-tight mb-4">
              {office.title}
            </h2>
            <p className="text-[14px] text-[#55645C] leading-[1.9]">
              {office.description.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div>
            <h3 className="text-[20px] sm:text-[24px] font-medium text-[#0E291E] tracking-tight mb-4">
              {office.company}
            </h3>
            <address className="not-italic text-[14px] text-[#55645C] leading-[1.9] mb-6">
              {office.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a
              href={office.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#123D30] hover:bg-[#009933] text-white font-medium text-[14px] transition-all duration-300 shadow-sm hover:shadow hover:scale-[1.02] group"
            >
              <span>Get directions</span>
              <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
