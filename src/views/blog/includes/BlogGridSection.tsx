"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost, blogPosts } from "@/data/blog";
import { LuArrowUpRight } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react";
import { useMessages } from "@/i18n/LocaleProvider";
import { blogMessages } from "@/i18n/messages/blog";

interface BlogGridSectionProps {
  posts?: BlogPost[];
}

type FilterValue = "all" | BlogPost["filterCategory"];
const categories: FilterValue[] = ["all", "Technology", "Applications", "Facility planning"];

export default function BlogGridSection({
  posts = blogPosts,
}: BlogGridSectionProps) {
  const t = useMessages(blogMessages);
  const [activeCategory, setActiveCategory] = useState<FilterValue>("all");

  // Filter out featured post for the journal grid, and apply category filter
  const journalPosts = posts.filter((p) => !p.isFeatured);
  const filteredPosts =
    activeCategory === "all"
      ? journalPosts
      : journalPosts.filter((p) => p.filterCategory === activeCategory);

  return (
    <section className="pb-16 sm:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#EAEFEA]">
          <div>
            <h2 className="text-[26px] sm:text-[32px] font-semibold text-[#0E291E] tracking-tight">
              {t.grid.title}
            </h2>
          </div>

          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#738479]">
            {t.grid.articleCount(String(filteredPosts.length).padStart(2, "0"))}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2.5 sm:gap-3 py-6 overflow-x-auto scrollbar-none">
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
                {t.grid.filters[cat]}
              </button>
            );
          })}
        </div>

        {/* Posts Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-4"
        >
          <AnimatePresence>
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Card Image */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block relative aspect-[16/10] w-full rounded-[18px] overflow-hidden bg-[#F0F3F1] border border-[#E5EBE6] shadow-xs"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>

                  {/* Metadata Tag */}
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#738479]">
                    {post.category} <span className="mx-1 text-[#CBD5E1]">|</span> {post.readTime}
                  </div>

                  {/* Title */}
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h3 className="text-[18px] sm:text-[19px] font-semibold text-[#0E291E] tracking-tight leading-snug group-hover:text-[#00A859] transition-colors">
                      {post.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-[13px] sm:text-[13.5px] text-[#55645C] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read Article Link */}
                <div className="pt-5 mt-auto">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#18251E] group-hover:text-[#00A859] transition-colors"
                  >
                    <span>{t.readArticle}</span>
                    <LuArrowUpRight className="w-3.5 h-3.5 rtl:-scale-x-100 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Ticker / Strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#EAEFEA] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#738479]">
            {t.grid.stripText}
          </div>
          <Link
            href="/products/biomedical-liquid-waste-treatment-system"
            className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#00A859] hover:underline"
          >
            {t.grid.discoverPlatforms} <span className="inline-block rtl:-scale-x-100">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

