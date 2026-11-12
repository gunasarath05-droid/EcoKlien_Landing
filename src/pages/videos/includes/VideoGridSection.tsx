"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VideoItem, getGridVideos } from "@/data/videos";
import { LuPlay, LuArrowUpRight } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react";
import { useLocale, useMessages } from "@/i18n/LocaleProvider";
import { videosMessages } from "@/i18n/messages/videos";

interface VideoGridSectionProps {
  videos?: VideoItem[];
  onPlayModal?: (video: VideoItem) => void;
}

/** Filter keys: "all" or a VideoItem category (English values; labels are translated). */
const filterCategories = ["all", "Technology", "Systems", "Applications"] as const;
type FilterCategory = (typeof filterCategories)[number];

export default function VideoGridSection({
  videos: videosProp,
  onPlayModal,
}: VideoGridSectionProps) {
  const { locale } = useLocale();
  const { grid } = useMessages(videosMessages);
  const videos = videosProp ?? getGridVideos(locale);
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");

  const filteredVideos =
    activeCategory === "all"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <section className="pb-16 sm:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Pills & Counter Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EAEFEA]">
          <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto scrollbar-none">
            {filterCategories.map((cat) => {
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
                  {grid.filters[cat]}
                </button>
              );
            })}
          </div>

          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#738479] shrink-0">
            {grid.count(String(filteredVideos.length).padStart(2, "0"))}
          </div>
        </div>

        {/* 2x2 Grid of Video Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 pt-8"
        >
          <AnimatePresence>
            {filteredVideos.map((video, idx) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Thumbnail Container with Center Play Button & Badge */}
                  <div
                    onClick={() => onPlayModal && onPlayModal(video)}
                    className="relative aspect-[16/10] w-full rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#0A1712] border border-[#E5EBE6] shadow-xs cursor-pointer"
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

                    {/* Centered Circular Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 text-[#0E291E] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-300 pl-0.5">
                        <LuPlay className="w-5 h-5 fill-current text-[#0E291E]" />
                      </div>
                    </div>

                    {/* Bottom-left Pill Badge */}
                    <div className="absolute bottom-4 start-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-[#18251E] font-medium shadow-sm">
                      {video.tag}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onPlayModal && onPlayModal(video)}
                    className="text-[19px] sm:text-[20px] font-semibold text-[#0E291E] tracking-tight leading-snug cursor-pointer group-hover:text-[#00A859] transition-colors"
                  >
                    {video.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] sm:text-[14px] text-[#55645C] leading-relaxed">
                    {video.description}
                  </p>
                </div>

                {/* Watch Video Link with Diagonal Arrow + Direct YouTube Link */}
                <div className="pt-4 mt-auto flex items-center justify-between border-t border-[#F0F4F1]">
                  <button
                    type="button"
                    onClick={() => onPlayModal && onPlayModal(video)}
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#18251E] group-hover:text-[#00A859] transition-colors cursor-pointer"
                  >
                    <LuPlay className="w-3.5 h-3.5 fill-current" />
                    <span>{grid.watchVideo}</span>
                  </button>

                  {video.videoUrl && (
                    <a
                      href={video.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11.5px] font-mono uppercase tracking-wider text-[#738479] hover:text-[#00A859] transition-colors"
                      title={grid.openOnYouTube}
                    >
                      <span>{grid.youtube}</span>
                      <LuArrowUpRight className="w-3.5 h-3.5 rtl:-scale-x-100" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Centered Ticker / Footer Strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#EAEFEA] text-center">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#738479]">
            {grid.showingAll(String(filteredVideos.length).padStart(2, "0"))}
          </span>
        </div>
      </div>
    </section>
  );
}

