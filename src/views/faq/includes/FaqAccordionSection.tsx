"use client";

import React, { useState } from "react";
import Link from "next/link";
import { faqCategories, FaqCategory } from "@/data/faq";
import { LuArrowUpRight, LuPlus, LuMinus } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react";

interface FaqAccordionSectionProps {
  categories?: FaqCategory[];
}

export default function FaqAccordionSection({
  categories = faqCategories,
}: FaqAccordionSectionProps) {
  // Track open accordion items by unique key (catId-index)
  // Default first items of Category 0 and 1 open, matching screenshot
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "essentials-0": true,
    "technology-0": true,
  });

  const [activeTopic, setActiveTopic] = useState<string>("essentials");

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const scrollToCategory = (catId: string) => {
    setActiveTopic(catId);
    const element = document.getElementById(catId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="pb-16 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ========================================================= */}
          {/* LEFT SIDEBAR: TOPICS & CONTACT CARD                       */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-28">
            {/* Topic Navigation */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
                <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#5D6B62]">
                  BROWSE BY TOPIC
                </span>
              </div>

              <div className="space-y-2">
                {categories.map((cat) => {
                  const isActive = activeTopic === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => scrollToCategory(cat.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[14px] transition-all text-left cursor-pointer ${
                        isActive
                          ? "bg-[#EAF5EE] text-[#00A859] font-medium border border-[#00A859]/30"
                          : "text-[#55645C] hover:text-[#0E291E] hover:bg-[#F6FAF7]"
                      }`}
                    >
                      <span>{cat.topicName}</span>
                      <span className="text-[11px] font-mono text-[#819288]">
                        {String(cat.items.length).padStart(2, "0")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Specific Question Prompt Card */}
            <div className="pt-6 border-t border-[#EAEFEA] space-y-4">
              <h3 className="text-lg font-semibold text-[#0E291E] leading-snug">
                Your question is specific.<br />So is your facility.
              </h3>
              <p className="text-[13.5px] text-[#55645C] leading-relaxed font-normal">
                For advice on a particular waste stream or operating requirement, speak with our technical team.
              </p>
              <div className="pt-2">
                <Link
                  href="https://ecoklien.com/contact/"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#123D30] hover:bg-[#009933] text-white text-[13.5px] font-medium transition-all duration-300 shadow-sm hover:shadow hover:scale-[1.02] group"
                >
                  <span>Contact Us</span>
                  <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT CONTENT COLUMN: 4 CATEGORIES & ACCORDIONS           */}
          {/* ========================================================= */}
          <div className="lg:col-span-8 space-y-12 sm:space-y-16">
            {categories.map((category) => (
              <div
                key={category.id}
                id={category.id}
                className="scroll-mt-28 space-y-6"
              >
                {/* Category Header */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
                    <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#5D6B62]">
                      {category.topicNumber} / {category.topicName.toUpperCase()}
                    </span>
                  </div>
                  <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#0E291E] tracking-tight">
                    {category.heading}
                  </h2>
                </div>

                {/* Accordion List */}
                <div className="divide-y divide-[#E3ECE6] border-t border-b border-[#E3ECE6]">
                  {category.items.map((item, idx) => {
                    const itemKey = `${category.id}-${idx}`;
                    const isOpen = Boolean(openItems[itemKey]);

                    return (
                      <div
                        key={idx}
                        className={`transition-colors ${
                          isOpen ? "bg-[#F3FAF5] -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-2xl border-none my-2" : ""
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleItem(itemKey)}
                          className="w-full flex items-center justify-between py-4 sm:py-5 text-left cursor-pointer group gap-4"
                        >
                          <span
                            className={`text-[15px] sm:text-[16px] transition-colors ${
                              isOpen
                                ? "font-semibold text-[#0E291E]"
                                : "font-medium text-[#18251E] group-hover:text-[#00A859]"
                            }`}
                          >
                            {item.question}
                          </span>
                          <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[#5D6B62] group-hover:text-[#00A859] transition-colors">
                            {isOpen ? (
                              <LuMinus className="w-4 h-4 text-[#00A859]" />
                            ) : (
                              <LuPlus className="w-4 h-4" />
                            )}
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pb-5 sm:pb-6 text-[14px] sm:text-[14.5px] text-[#55645C] leading-[1.7] whitespace-pre-line font-normal max-w-2xl">
                                {item.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

