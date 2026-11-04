"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VideoItem, featuredVideo as defaultFeatured } from "@/data/videos";
import { LuPlay, LuArrowUpRight } from "react-icons/lu";
import { motion } from "motion/react";

interface VideoFeaturedSectionProps {
  video?: VideoItem;
  onPlayModal?: (video: VideoItem) => void;
}

export default function VideoFeaturedSection({
  video = defaultFeatured,
  onPlayModal,
}: VideoFeaturedSectionProps) {
  const [isPlayingInline, setIsPlayingInline] = useState(false);

  const handlePlay = () => {
    if (onPlayModal) {
      onPlayModal(video);
    } else {
      setIsPlayingInline(true);
    }
  };

  return (
    <section className="pb-16 sm:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Video Frame */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#0A1712] border border-[#E5EBE6] shadow-sm group"
        >
          {isPlayingInline ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          ) : (
            <div
              onClick={handlePlay}
              className="relative w-full h-full cursor-pointer"
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors duration-300" />

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Play video"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 text-[#0E291E] flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-white transition-all duration-300 cursor-pointer pl-0.5"
                >
                  <LuPlay className="w-6 h-6 fill-current text-[#0E291E]" />
                </button>
              </div>

              {/* Bottom Left Badge */}
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10.5px] font-mono uppercase tracking-wider text-[#18251E] font-medium shadow-sm">
                {video.tag}
              </div>
            </div>
          )}
        </motion.div>

        {/* Video Info: Start Here + Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-10 pb-4">
          {/* Left: Start Here & Title */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
              <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#00A859] font-medium">
                START HERE
              </span>
            </div>
            <h2 className="text-[26px] sm:text-[32px] font-semibold text-[#0E291E] tracking-tight leading-[1.15]">
              Biomedical liquid waste treatment.<br />
              At the source.
            </h2>
          </div>

          {/* Right: Description & Action */}
          <div className="lg:col-span-6 space-y-4 lg:pt-6">
            <p className="text-[14px] sm:text-[15px] text-[#55645C] leading-relaxed">
              {video.description}
            </p>
            <div>
              <button
                type="button"
                onClick={handlePlay}
                className="inline-flex items-center gap-2 text-[13.5px] font-medium text-[#18251E] hover:text-[#00A859] transition-colors cursor-pointer group"
              >
                <span>Watch overview</span>
                <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

