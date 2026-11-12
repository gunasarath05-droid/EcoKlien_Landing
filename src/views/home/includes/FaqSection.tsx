"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useMessages } from "@/i18n/LocaleProvider";
import { homeMessages } from "@/i18n/messages/home";

const ease = [0.16, 1, 0.3, 1] as const;

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { faq: t } = useMessages(homeMessages);

  return (
    <section id="faq" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 border-t border-[#e3e7e5] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Heading */}
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
            <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] font-normal text-[#0e2a1e] tracking-[-0.01em] leading-[1.1]">
              {t.title}
            </h2>
            <p className="mt-5 text-[14px] text-[#5d6762] leading-[1.6] max-w-[300px]">{t.intro}</p>
          </motion.div>

          {/* Accordion */}
          <motion.ul
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="lg:col-span-8"
          >
            {t.items.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `home-faq-${index}`;
              return (
                <li
                  key={index}
                  className={`transition-colors duration-300 ${
                    isOpen ? "rounded-[14px] bg-[#eef1ec] mb-2" : "border-b border-[#e3e7e5]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className={`w-full flex items-center justify-between gap-6 text-start py-5 ${isOpen ? "px-5 sm:px-6" : "px-1"}`}
                  >
                    <span className={`text-[14px] sm:text-[15px] text-[#0e2a1e] ${isOpen ? "font-medium" : "font-normal"}`}>
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className={`shrink-0 text-[18px] leading-none font-light text-[#5d6762] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 sm:px-6 pb-6 text-[13px] sm:text-[14px] text-[#5d6762] leading-[1.65] max-w-[620px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
