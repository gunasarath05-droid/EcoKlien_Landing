"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  EventItem,
  galleryEvents,
  PhotoGalleryItem,
} from "@/data/gallery";
import { LuArrowUpRight, LuSearch, LuPlay, LuX } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react";
import PhotoLightboxModal from "./PhotoLightboxModal";

interface PhotoGalleryGridProps {
  events?: EventItem[];
}

export default function PhotoGalleryGrid({
  events = galleryEvents,
}: PhotoGalleryGridProps) {
  // Selected filter: 'all' or specific event ID
  const [selectedEventId, setSelectedEventId] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Lightbox Modal state
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageSrc?: string;
    title?: string;
    eyebrow?: string;
  }>({ isOpen: false });

  // Currently playing video ID (inline YouTube embed)
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  // Search filter helper
  const matchesSearch = (text?: string) => {
    if (!text || !searchQuery.trim()) return true;
    return text.toLowerCase().includes(searchQuery.toLowerCase().trim());
  };

  // Filter events based on selected pill & search query
  const filteredEvents = useMemo(() => {
    const list =
      selectedEventId === "all"
        ? events
        : events.filter((e) => e.id === selectedEventId);

    if (!searchQuery.trim()) return list;

    const query = searchQuery.toLowerCase().trim();
    return list.filter((ev) => {
      const matchTitle = ev.title.toLowerCase().includes(query);
      const matchLoc = ev.location.toLowerCase().includes(query);
      const matchEyebrow = ev.eyebrow.toLowerCase().includes(query);
      const matchPhotos = ev.photos.some((p) => p.title.toLowerCase().includes(query));
      const matchVideo =
        ev.video &&
        (ev.video.title.toLowerCase().includes(query) ||
          ev.video.description.toLowerCase().includes(query));
      const matchCerts = (ev.certificates || []).some((c) =>
        c.title.toLowerCase().includes(query)
      );

      return (
        matchTitle ||
        matchLoc ||
        matchEyebrow ||
        matchPhotos ||
        Boolean(matchVideo) ||
        matchCerts
      );
    });
  }, [events, selectedEventId, searchQuery]);

  // Aggregate total counts across visible events
  const totalPhotos = useMemo(
    () => filteredEvents.reduce((acc, ev) => acc + ev.photos.length, 0),
    [filteredEvents]
  );
  const totalCerts = useMemo(
    () =>
      filteredEvents.reduce(
        (acc, ev) => acc + (ev.certificates ? ev.certificates.length : 0),
        0
      ),
    [filteredEvents]
  );
  const totalVids = useMemo(
    () => filteredEvents.reduce((acc, ev) => acc + (ev.video ? 1 : 0), 0),
    [filteredEvents]
  );

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

  return (
    <section className="pb-16 sm:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* EVENT FILTER PILLS & SEARCH BAR                           */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-[#EAEFEA]">
          {/* Dynamic Event Filter Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto scrollbar-none py-1">
            <button
              onClick={() => {
                setSelectedEventId("all");
                setPlayingVideoId(null);
              }}
              className={`px-4 sm:px-5 py-2 rounded-full text-[12.5px] sm:text-[13px] font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                selectedEventId === "all"
                  ? "bg-[#0E291E] text-white shadow-sm font-semibold"
                  : "bg-[#F1F4F2] text-[#4F6055] hover:bg-[#E5ECE7] hover:text-[#18251E]"
              }`}
            >
              All events
            </button>

            {events.map((ev) => {
              const isActive = selectedEventId === ev.id;
              return (
                <button
                  key={ev.id}
                  onClick={() => {
                    setSelectedEventId(ev.id);
                    setPlayingVideoId(null);
                  }}
                  className={`px-4 sm:px-5 py-2 rounded-full text-[12.5px] sm:text-[13px] font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#0E291E] text-white shadow-sm font-semibold"
                      : "bg-[#F1F4F2] text-[#4F6055] hover:bg-[#E5ECE7] hover:text-[#18251E]"
                  }`}
                >
                  {ev.filterLabel || ev.title}
                </button>
              );
            })}
          </div>

          {/* Right: Search Box + Dynamic Counts */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 lg:gap-6 justify-between lg:justify-end">
            {/* Search Input Field */}
            <div className="relative min-w-[210px] sm:min-w-[240px]">
              <LuSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#738479]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events, photos..."
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
              <div>{String(totalPhotos).padStart(2, "0")} PHOTOGRAPHS</div>
              <div className="text-[10px] text-[#8F9E94]">
                {String(totalCerts).padStart(2, "0")} CERTIFICATES · {String(totalVids).padStart(2, "0")} VIDEO
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* EVENT-BASED SHOWCASE: PHOTOS, VIDEO & CERTIFICATES        */}
        {/* ========================================================= */}
        {filteredEvents.length > 0 ? (
          <div className="space-y-16 sm:space-y-20 pt-10 sm:pt-14">
            {filteredEvents.map((event) => (
              <div key={event.id} className="space-y-12">
                {/* --------------------------------------------------- */}
                {/* 1. EVENT PHOTOS (Rendered if event has photos)     */}
                {/* --------------------------------------------------- */}
                {event.photos.length > 0 && (
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-[#EAEFEA] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
                        <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#5D6B62] font-medium">
                          {event.eyebrow || event.title}
                        </span>
                      </div>
                      <div className="text-[10.5px] font-mono uppercase tracking-wider text-[#738479]">
                        {String(event.photos.length).padStart(2, "0")} PHOTOGRAPHS
                      </div>
                    </div>

                    {/* 3-Column Photos Grid */}
                    <motion.div
                      layout
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    >
                      <AnimatePresence>
                        {event.photos.map((photo) => (
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

                {/* --------------------------------------------------- */}
                {/* 2. EVENT VIDEO (Only if video exists for this event)*/}
                {/* --------------------------------------------------- */}
                {event.video && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-[#EAEFEA] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
                        <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#5D6B62] font-medium">
                          VIDEOS
                        </span>
                      </div>
                      <div className="text-[10.5px] font-mono uppercase tracking-wider text-[#738479]">
                        01 RELATED VIDEO
                      </div>
                    </div>

                    <div className="max-w-2xl space-y-4">
                      {/* Video Player Box */}
                      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-[20px] overflow-hidden bg-black border border-[#E5EBE6] shadow-sm group">
                        {playingVideoId === event.video.id ? (
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${event.video.youtubeId}?autoplay=1&rel=0`}
                            title={event.video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full border-0"
                          />
                        ) : (
                          <div
                            onClick={() => setPlayingVideoId(event.video!.id)}
                            className="relative w-full h-full cursor-pointer"
                          >
                            <Image
                              src={event.video.thumbnail}
                              alt={event.video.title}
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
                                className="w-14 h-10 rounded-[12px] bg-[#FF0000] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200 cursor-pointer"
                              >
                                <LuPlay className="w-5 h-5 fill-current ml-0.5" />
                              </button>
                            </div>

                            {/* Direct link to YouTube Shorts */}
                            <a
                              href={
                                event.video.videoUrl ||
                                `https://youtube.com/shorts/${event.video.youtubeId}`
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 hover:bg-black text-white text-[11px] font-medium backdrop-blur-md transition-all shadow-md hover:scale-105"
                            >
                              <span>Watch on YouTube</span>
                              <LuArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Video Info */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
                          <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#00A859] font-medium">
                            {event.video.eyebrow}
                          </span>
                        </div>
                        <a
                          href={
                            event.video.videoUrl ||
                            `https://youtube.com/shorts/${event.video.youtubeId}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[18px] sm:text-[19px] font-semibold text-[#0E291E] tracking-tight hover:text-[#00A859] transition-colors group/title"
                        >
                          <span>{event.video.title}</span>
                          <LuArrowUpRight className="w-4 h-4 text-[#738479] group-hover/title:text-[#00A859] group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-transform" />
                        </a>
                        <p className="text-[13px] text-[#55645C] leading-relaxed">
                          {event.video.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* --------------------------------------------------- */}
                {/* 3. EVENT CERTIFICATES (Only if certificates exist)  */}
                {/* --------------------------------------------------- */}
                {event.certificates && event.certificates.length > 0 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-[#EAEFEA] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
                        <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#5D6B62] font-medium">
                          PARTICIPATION CERTIFICATES
                        </span>
                      </div>
                      <div className="text-[10.5px] font-mono uppercase tracking-wider text-[#738479]">
                        {String(event.certificates.length).padStart(2, "0")} CERTIFICATES
                      </div>
                    </div>

                    {/* 3-Column Certificates Grid */}
                    <motion.div
                      layout
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    >
                      <AnimatePresence>
                        {event.certificates.map((cert) => (
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
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-20 text-center space-y-3">
            <p className="text-[16px] text-[#0E291E] font-medium">
              No matching events found for &ldquo;{searchQuery}&rdquo;.
            </p>
            <p className="text-[13px] text-[#738479]">
              Try a different keyword or reset the event filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedEventId("all");
              }}
              className="mt-3 px-5 py-2 rounded-full bg-[#0E291E] text-white text-[12.5px] font-medium hover:bg-[#00A859] transition-colors"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* BOTTOM NOTE & EVENT SUMMARY STRIP                         */}
        {/* ========================================================= */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#EAEFEA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-[#738479] leading-relaxed max-w-2xl font-normal">
            Exhibition photographs, participation certificates and media are documented from ECOKlien&apos;s global event attendances and industry showcases.
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
