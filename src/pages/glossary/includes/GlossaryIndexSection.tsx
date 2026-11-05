"use client";

import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import { LuSearch, LuX } from "react-icons/lu";
import { sortedGlossaryTerms, termLetter } from "@/data/glossary";
import GlossaryTermCard from "./GlossaryTermCard";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const TOTAL = sortedGlossaryTerms.length;

export default function GlossaryIndexSection() {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState<string | null>(null);

  const availableLetters = useMemo(() => new Set(sortedGlossaryTerms.map(termLetter)), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sortedGlossaryTerms.filter((t) => {
      if (letter && termLetter(t) !== letter) return false;
      if (!q) return true;
      return t.title.toLowerCase().includes(q) || t.cardSummary.toLowerCase().includes(q);
    });
  }, [query, letter]);

  const reset = () => {
    setQuery("");
    setLetter(null);
  };

  return (
    <section className="pb-16 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search */}
        <div className="relative">
          <LuSearch className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#123D30]" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the glossary..."
            aria-label="Search the glossary"
            className="w-full h-[50px] pl-12 pr-28 rounded-[6px] bg-white border border-[#E1E7E0] text-[13.5px] text-[#123D30] placeholder:text-[#647069] focus:outline-none focus:border-[#00A859]/50 transition-colors [&::-webkit-search-cancel-button]:hidden"
          />
          <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-3">
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="w-6 h-6 rounded-full flex items-center justify-center text-[#5D6B62] hover:text-[#00A859] cursor-pointer"
              >
                <LuX className="w-3.5 h-3.5" />
              </button>
            )}
            <span className="text-[9.5px] font-mono uppercase tracking-wider text-[#738479]">
              {filtered.length} TERMS
            </span>
          </div>
        </div>

        {/* Letter filter */}
        <nav aria-label="Filter by letter" className="mt-5 flex flex-wrap items-center gap-x-1 gap-y-2">
          <button
            type="button"
            onClick={() => setLetter(null)}
            className={`h-8 px-3.5 mr-2 rounded-full text-[11px] font-medium transition-colors cursor-pointer ${
              letter === null ? "bg-[#123D30] text-white" : "text-[#123D30] hover:bg-[#F0F3ED]"
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
                className={`w-7 h-8 rounded-md text-[9.5px] font-mono transition-colors ${
                  active
                    ? "bg-[#123D30] text-white"
                    : enabled
                      ? "text-[#123D30] hover:bg-[#F0F3ED] cursor-pointer"
                      : "text-[#C3CCC5] cursor-default"
                }`}
              >
                {l}
              </button>
            );
          })}
        </nav>

        {/* Heading */}
        <div className="mt-10 sm:mt-12 mb-5 flex items-end justify-between gap-4">
          <h2 className="text-[24px] sm:text-[26px] font-medium text-[#123D30] tracking-tight">Explore the terms.</h2>
          <span className="pb-1.5 text-[9.5px] font-mono uppercase tracking-wider text-[#738479] sm:mr-9">
            A–Z / {TOTAL} DEFINITIONS
          </span>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="py-16 text-center space-y-2 border border-dashed border-[#D7DED5] rounded-[6px]">
            <p className="text-[15px] font-medium text-[#123D30]">No terms match your search.</p>
            <button
              type="button"
              onClick={reset}
              className="text-[11px] font-mono uppercase tracking-wider text-[#00A859] hover:underline cursor-pointer"
            >
              Show all terms
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-[18px]">
            {filtered.map((term, i) => (
              <motion.div
                key={term.slug}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlossaryTermCard term={term} />
              </motion.div>
            ))}
          </div>
        )}

        <p className="mt-6 text-center text-[10px] font-mono text-[#738479]">
          {filtered.length === TOTAL
            ? `Showing all ${TOTAL} terms from the ECOKlien biomedical glossary.`
            : `Showing ${filtered.length} of ${TOTAL} terms from the ECOKlien biomedical glossary.`}
        </p>
      </div>
    </section>
  );
}
