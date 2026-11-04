"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductGalleryItem, productGalleryItems } from "@/data/gallery";
import { LuArrowUpRight } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react";

interface ProductGalleryGridProps {
  items?: ProductGalleryItem[];
}

const categories = ["All systems", "Point of source", "Hospital effluent", "Disinfection"] as const;

export default function ProductGalleryGrid({
  items = productGalleryItems,
}: ProductGalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All systems");

  const filteredItems =
    activeCategory === "All systems"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section className="pb-16 sm:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter & Counter Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EAEFEA]">
          <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-[12.5px] sm:text-[13px] font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#0E291E] text-white shadow-sm"
                      : "bg-[#F1F4F2] text-[#4F6055] hover:bg-[#E5ECE7] hover:text-[#18251E]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#738479] shrink-0">
            {String(filteredItems.length).padStart(2, "0")} CONFIGURATIONS
          </div>
        </div>

        {/* 3 Columns Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Image with Version Badge */}
                  <div className="relative aspect-[16/11] w-full rounded-[20px] overflow-hidden bg-[#F0F3F1] border border-[#E5EBE6] shadow-xs">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-[#18251E] font-medium shadow-sm">
                      {item.version}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5">
                    <h3 className="text-[19px] sm:text-[20px] font-semibold text-[#0E291E] tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#00A859] font-medium">
                      {item.subtitle}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[13.5px] text-[#55645C] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Designed For */}
                  <div className="pt-1 space-y-1">
                    <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#738479]">
                      DESIGNED FOR
                    </div>
                    <div className="text-[12.5px] text-[#1E3026] font-medium">
                      {item.designedFor}
                    </div>
                  </div>
                </div>

                {/* View Configuration Link */}
                <div className="pt-6 mt-auto">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#18251E] group-hover:text-[#00A859] transition-colors"
                  >
                    <span>View configuration</span>
                    <LuArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Small Footnote */}
        <div className="mt-12 pt-6 border-t border-[#EAEFEA]">
          <p className="text-[12px] text-[#738479] leading-relaxed font-normal">
            Product imagery illustrates the system range. The appropriate configuration is discussed around wastewater source, composition, volume and facility requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

