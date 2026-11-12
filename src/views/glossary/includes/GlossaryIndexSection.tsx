"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LuSearch, LuX } from "react-icons/lu";
import { sortedGlossaryTerms, termLetter } from "@/data/glossary";
import GlossaryTermCard from "./GlossaryTermCard";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const TOTAL = sortedGlossaryTerms.length;

export default function GlossaryIndexSection() {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState<string | null>(null);

  const availableLetters = useMemo(
    () => new Set(sortedGlossaryTerms.map(termLetter)),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sortedGlossaryTerms.filter((t) => {
      if (letter && termLetter(t) !== letter) return false;
      if (!q) return true;
      return (
        t.title.toLowerCase().includes(q) ||
        t.cardSummary.toLowerCase().includes(q) ||
        t.intro.toLowerCase().includes(q)
      );
    });
  }, [query, letter]);

  const reset = () => {
    setQuery("");
    setLetter(null);
  };

  return (
    <section className="pb-16 sm:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Input Bar */}
        <div className="relative">
          <LuSearch className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#738479]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the glossary..."
            aria-label="Search the glossary"
            className="w-full h-[52px] pl-12 pr-28 rounded-[10px] bg-white border border-[#E3ECE6] text-[14px] text-[#18251E] placeholder-[#738479] focus:outline-none focus:border-[#00A859] focus:ring-1 focus:ring-[#00A859] transition-all shadow-2xs"
          />
          <div className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 flex items-center gap-3">
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="w-6 h-6 rounded-full flex items-center justify-center text-[#738479] hover:text-[#18251E] cursor-pointer"
              >
                <LuX className="w-3.5 h-3.5" />
              </button>
            )}
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#738479]">
              {filtered.length} TERMS
            </span>
          </div>
        </div>

        {/* Alphabet Filter Pills */}
        <nav
          aria-label="Filter by letter"
          className="mt-6 flex flex-wrap items-center gap-1 sm:gap-1.5"
        >
          <button
            type="button"
            onClick={() => setLetter(null)}
            className={`px-4 py-1.5 mr-2 rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer ${
              letter === null
                ? "bg-[#0E291E] text-white shadow-xs font-semibold"
                : "bg-[#F1F4F2] text-[#4F6055] hover:bg-[#E5ECE7] hover:text-[#18251E]"
            }`}
          >
            All terms
          </button>

          {ALPHABET.map((l) => {
            const enabled = availableLetters.has(l);
            const active = letter === l;
            return (
              <button
                key={l}
                type="button"
                disabled={!enabled}
                onClick={() => setLetter(active ? null : l)}
                aria-pressed={active}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full text-[12px] font-mono flex items-center justify-center transition-all ${
                  active
                    ? "bg-[#0E291E] text-white font-semibold shadow-xs"
                    : enabled
                    ? "text-[#0E291E] hover:bg-[#EBF1ED] hover:text-[#00A859] cursor-pointer font-medium"
                    : "text-[#C4CFC7] cursor-default"
                }`}
              >
                {l}
              </button>
            );
          })}
        </nav>

        {/* Section Heading & Definition Counter */}
        <div className="mt-12 sm:mt-14 mb-6 flex items-end justify-between gap-4 border-b border-[#EAEFEA] pb-4">
          <h2 className="text-[26px] sm:text-[32px] font-semibold text-[#0E291E] tracking-tight">
            Explore the terms.
          </h2>
          <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#738479]">
            A–Z / {TOTAL} DEFINITIONS
          </span>
        </div>

        {/* Glossary Terms 2-Column Grid */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center space-y-3 rounded-2xl border border-dashed border-[#E3ECE6] bg-[#FAFBFA]">
            <p className="text-[16px] font-semibold text-[#0E291E]">
              No terms match your search &ldquo;{query}&rdquo;.
            </p>
            <p className="text-[13px] text-[#738479]">
              Try a different keyword or reset the letter filter.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-2 px-5 py-2 rounded-full bg-[#0E291E] text-white text-[12px] font-medium hover:bg-[#00A859] transition-colors cursor-pointer"
            >
              Show all terms
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
          >
            <AnimatePresence>
              {filtered.map((term, i) => (
                <motion.div
                  key={term.slug}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.35,
                    delay: (i % 2) * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <GlossaryTermCard term={term} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Bottom Footnote */}
        <p className="mt-12 text-center text-[11px] font-mono uppercase tracking-wider text-[#738479]">
          {filtered.length === TOTAL
            ? `Showing all ${TOTAL} terms from the ECOKlien biomedical glossary.`
            : `Showing ${filtered.length} of ${TOTAL} terms from the ECOKlien biomedical glossary.`}
        </p>
      </div>
    </section>
  );
}
