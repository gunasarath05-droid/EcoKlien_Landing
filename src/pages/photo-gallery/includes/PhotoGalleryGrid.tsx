"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  PhotoGalleryItem,
  photoGalleryItems,
  eventExhibitionPhotos,
  eventVideos,
  eventCertificates,
  galleryCollections,
  EventCategoryCollection,
  EventVideoItem,
  CertificateItem,
} from "@/data/gallery";
import { LuArrowUpRight, LuSearch, LuPlay, LuX } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react";
import PhotoLightboxModal from "./PhotoLightboxModal";

interface PhotoGalleryGridProps {
  items?: PhotoGalleryItem[];
}

const filterCategories = [
  "All photos",
  "Systems",
  "Healthcare",
  "Laboratories",
  "Events",
  "Videos",
] as const;

type FilterCategory = (typeof filterCategories)[number];

export default function PhotoGalleryGrid({
  items = photoGalleryItems,
}: PhotoGalleryGridProps) {
  // Default to "All photos" matching the design
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All photos");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Lightbox Modal state
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageSrc?: string;
    title?: string;
    eyebrow?: string;
  }>({ isOpen: false });

  // Video embed playback state
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);

  // Search filter helper
  const matchesSearch = (text: string) => {
    if (!searchQuery.trim()) return true;
    return text.toLowerCase().includes(searchQuery.toLowerCase().trim());
  };

  // Filtered Event Photos
  const filteredEventPhotos = useMemo(() => {
    if (activeCategory !== "All photos" && activeCategory !== "Events") return [];
    return eventExhibitionPhotos.filter(
      (p) => matchesSearch(p.title) || matchesSearch(p.eyebrow)
    );
  }, [activeCategory, searchQuery]);

  // Filtered Event Videos
  const filteredEventVideos = useMemo(() => {
    if (
      activeCategory !== "All photos" &&
      activeCategory !== "Events" &&
      activeCategory !== "Videos"
    )
      return [];
    return eventVideos.filter(
      (v) =>
        matchesSearch(v.title) ||
        matchesSearch(v.eyebrow) ||
        matchesSearch(v.description)
    );
  }, [activeCategory, searchQuery]);

  // Filtered Certificates
  const filteredCertificates = useMemo(() => {
    if (activeCategory !== "All photos" && activeCategory !== "Events") return [];
    return eventCertificates.filter(
      (c) => matchesSearch(c.title) || matchesSearch(c.eyebrow)
    );
  }, [activeCategory, searchQuery]);

  // Filtered Systems & Environment Photos
  const filteredSystemPhotos = useMemo(() => {
    if (activeCategory === "Events" || activeCategory === "Videos") return [];
    return items.filter((p) => {
      const matchCat =
        activeCategory === "All photos" || p.category === activeCategory;
      return matchCat && (matchesSearch(p.title) || matchesSearch(p.eyebrow));
    });
  }, [items, activeCategory, searchQuery]);

  const openLightbox = (imageSrc: string, title?: string, eyebrow?: string) => {
    setLightboxData({
      isOpen: true,
      imageSrc,
      title,
      eyebrow,
    });
  };

  const closeLightbox = () => {
    setLightboxData((prev) => ({ ...prev, isOpen: false }));
  };

  // Dynamic counter calculations
  const totalPhotos = filteredEventPhotos.length + filteredSystemPhotos.length;
  const totalCerts = filteredCertificates.length;
  const totalVids = filteredEventVideos.length;

  return (
    <section className="pb-16 sm:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* FILTER BAR & SEARCH INPUT ROW                             */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-[#EAEFEA]">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto scrollbar-none py-1">
            {filterCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setIsPlayingVideo(false);
                  }}
                  className={`px-4 sm:px-5 py-2 rounded-full text-[12.5px] sm:text-[13px] font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#0E291E] text-white shadow-sm font-semibold"
                      : "bg-[#F1F4F2] text-[#4F6055] hover:bg-[#E5ECE7] hover:text-[#18251E]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Right Side: Search Box + Dynamic Counts */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 lg:gap-6 justify-between lg:justify-end">
            {/* Search Input Field */}
            <div className="relative min-w-[210px] sm:min-w-[240px]">
              <LuSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#738479]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search photos..."
                className="w-full pl-9 pr-8 py-2 rounded-full bg-[#F5F7F5] border border-[#E3ECE6] text-[12.5px] text-[#18251E] placeholder-[#738479] focus:outline-none focus:border-[#00A859] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#738479] hover:text-[#18251E] cursor-pointer"
                  aria-label="Clear search"
                >
                  <LuX className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Counts Badge */}
            <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#738479] text-right shrink-0">
              {activeCategory === "All photos" || activeCategory === "Events" ? (
                <>
                  <div>{String(totalPhotos).padStart(2, "0")} PHOTOGRAPHS</div>
                  <div className="text-[10px] text-[#8F9E94]">
                    {String(totalCerts).padStart(2, "0")} CERTIFICATES · {String(totalVids).padStart(2, "0")} VIDEO
                  </div>
                </>
              ) : (
                <div>
                  {activeCategory === "Videos"
                    ? `${String(totalVids).padStart(2, "0")} VIDEO`
                    : `${String(totalPhotos).padStart(2, "0")} PHOTOGRAPHS`}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* GROUP 1: EVENTS / EXHIBITIONS PHOTOS                      */}
        {/* (Rendered when 'All photos' or 'Events' is active)        */}
        {/* ========================================================= */}
        {filteredEventPhotos.length > 0 && (
          <div className="pt-10 sm:pt-14 space-y-6">
            {/* Group Header */}
            <div className="flex items-center justify-between border-b border-[#EAEFEA] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#5D6B62] font-medium">
                  EVENTS & EXHIBITIONS
                </span>
              </div>
              <div className="text-[10.5px] font-mono uppercase tracking-wider text-[#738479]">
                {String(filteredEventPhotos.length).padStart(2, "0")} PHOTOGRAPHS
              </div>
            </div>

            {/* 3 Columns Photos Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              <AnimatePresence>
                {filteredEventPhotos.map((photo) => (
                  <motion.div
                    key={photo.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="group space-y-3 cursor-pointer"
                    onClick={() =>
                      openLightbox(photo.image, photo.title, photo.eyebrow)
                    }
                  >
                    <div className="relative aspect-[16/11] w-full rounded-[18px] sm:rounded-[20px] overflow-hidden bg-[#F0F3F1] border border-[#E5EBE6] shadow-xs">
                      <Image
                        src={photo.image}
                        alt={photo.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="space-y-0.5">
                      <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#738479]">
                        {photo.eyebrow}
                      </div>
                      <div className="flex items-center justify-between text-[16px] sm:text-[17px] font-semibold text-[#0E291E] tracking-tight group-hover:text-[#00A859] transition-colors">
                        <span>{photo.title}</span>
                        <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#18251E] group-hover:text-[#00A859]" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* ========================================================= */}
        {/* GROUP 2: EVENT VIDEOS                                     */}
        {/* (Only rendered if videos exist for the selected event/all)*/}
        {/* ========================================================= */}
        {filteredEventVideos.length > 0 && (
          <div className="pt-14 sm:pt-16 space-y-6">
            {/* Group Header */}
            <div className="flex items-center justify-between border-b border-[#EAEFEA] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#5D6B62] font-medium">
                  VIDEOS
                </span>
              </div>
              <div className="text-[10.5px] font-mono uppercase tracking-wider text-[#738479]">
                {String(filteredEventVideos.length).padStart(2, "0")} RELATED VIDEO
              </div>
            </div>

            {/* Video Cards */}
            <div className="space-y-8">
              {filteredEventVideos.map((video) => (
                <div key={video.id} className="max-w-2xl space-y-4">
                  {/* Video Box */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-[20px] overflow-hidden bg-black border border-[#E5EBE6] shadow-sm group">
                    {isPlayingVideo ? (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                      />
                    ) : (
                      <div
                        onClick={() => setIsPlayingVideo(true)}
                        className="relative w-full h-full cursor-pointer"
                      >
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 65vw"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-102"
                        />
                        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />

                        {/* Centered Red YouTube-style Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button
                            type="button"
                            aria-label="Play video"
                            className="w-14 h-10 rounded-[12px] bg-[#FF0000] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200"
                          >
                            <LuPlay className="w-5 h-5 fill-current ml-0.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Video Metadata */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#00A859] font-medium">
                        {video.eyebrow}
                      </span>
                    </div>
                    <h3 className="text-[18px] sm:text-[19px] font-semibold text-[#0E291E] tracking-tight">
                      {video.title}
                    </h3>
                    <p className="text-[13px] text-[#55645C] leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* GROUP 3: PARTICIPATION CERTIFICATES                       */}
        {/* (Only rendered if certificates exist for category/all)    */}
        {/* ========================================================= */}
        {filteredCertificates.length > 0 && (
          <div className="pt-14 sm:pt-16 space-y-6">
            {/* Group Header */}
            <div className="flex items-center justify-between border-b border-[#EAEFEA] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#5D6B62] font-medium">
                  PARTICIPATION CERTIFICATES
                </span>
              </div>
              <div className="text-[10.5px] font-mono uppercase tracking-wider text-[#738479]">
                {String(filteredCertificates.length).padStart(2, "0")} CERTIFICATES
              </div>
            </div>

            {/* 3 Columns Certificates Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              <AnimatePresence>
                {filteredCertificates.map((cert) => (
                  <motion.div
                    key={cert.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="group space-y-3 cursor-pointer"
                    onClick={() =>
                      openLightbox(cert.image, cert.title, cert.eyebrow)
                    }
                  >
                    <div className="relative aspect-[16/11] w-full rounded-[18px] overflow-hidden bg-[#FAFBFA] border border-[#E3ECE6] shadow-xs p-3 flex items-center justify-center">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="space-y-0.5">
                      <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#738479]">
                        {cert.eyebrow}
                      </div>
                      <div className="text-[15px] sm:text-[16px] font-semibold text-[#0E291E] tracking-tight group-hover:text-[#00A859] transition-colors">
                        {cert.title}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* ========================================================= */}
        {/* GROUP 4: SYSTEMS & ENVIRONMENT PHOTOS                     */}
        {/* (Rendered when 'All photos' or specific system category)  */}
        {/* ========================================================= */}
        {filteredSystemPhotos.length > 0 && (
          <div className="pt-14 sm:pt-16 space-y-6">
            {/* Group Header */}
            <div className="flex items-center justify-between border-b border-[#EAEFEA] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#5D6B62] font-medium">
                  {activeCategory === "All photos"
                    ? "SYSTEMS & ENVIRONMENTS"
                    : activeCategory.toUpperCase()}
                </span>
              </div>
              <div className="text-[10.5px] font-mono uppercase tracking-wider text-[#738479]">
                {String(filteredSystemPhotos.length).padStart(2, "0")} PHOTOGRAPHS
              </div>
            </div>

            {/* 2-Columns Grid of System Photographs */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12"
            >
              <AnimatePresence>
                {filteredSystemPhotos.map((photo) => (
                  <motion.div
                    key={photo.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="group flex flex-col space-y-4 cursor-pointer"
                    onClick={() =>
                      openLightbox(photo.image, photo.title, photo.eyebrow)
                    }
                  >
                    <div className="block relative aspect-[16/11] w-full rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#F0F3F1] border border-[#E5EBE6] shadow-xs">
                      <Image
                        src={photo.image}
                        alt={photo.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="space-y-1 pt-1">
                      <div className="text-[10.5px] font-mono uppercase tracking-[0.14em] text-[#738479]">
                        {photo.eyebrow}
                      </div>

                      <div className="flex items-center justify-between text-[18px] sm:text-[19px] font-semibold text-[#0E291E] tracking-tight group-hover:text-[#00A859] transition-colors">
                        <span>{photo.title}</span>
                        <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#18251E] group-hover:text-[#00A859]" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* Empty Search Result State */}
        {totalPhotos === 0 && totalCerts === 0 && totalVids === 0 && (
          <div className="py-20 text-center space-y-3">
            <p className="text-[16px] text-[#0E291E] font-medium">
              No matching gallery items found for &ldquo;{searchQuery}&rdquo;.
            </p>
            <p className="text-[13px] text-[#738479]">
              Try a different keyword or reset the category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All photos");
              }}
              className="mt-3 px-5 py-2 rounded-full bg-[#0E291E] text-white text-[12.5px] font-medium hover:bg-[#00A859] transition-colors"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* BOTTOM NOTE & SUMMARY STRIP                               */}
        {/* ========================================================= */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#EAEFEA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-[#738479] leading-relaxed max-w-2xl font-normal">
            System and application imagery illustrates intended environments. Exhibition photographs and participation certificates are drawn from the supplied gallery reference.
          </p>
          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#738479] whitespace-nowrap">
            {String(totalPhotos).padStart(2, "0")} PHOTOGRAPHS · {String(totalCerts).padStart(2, "0")} CERTIFICATES · {String(totalVids).padStart(2, "0")} RELATED VIDEO
          </div>
        </div>
      </div>

      {/* Lightbox Modal for High-Res Previews */}
      <PhotoLightboxModal
        isOpen={lightboxData.isOpen}
        onClose={closeLightbox}
        imageSrc={lightboxData.imageSrc}
        title={lightboxData.title}
        eyebrow={lightboxData.eyebrow}
      />
    </section>
  );
}
