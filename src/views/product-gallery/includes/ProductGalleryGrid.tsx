"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductGalleryItem, productGalleryItems } from "@/data/gallery";
import { LuArrowUpRight, LuSearch, LuX, LuMaximize2 } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react";
import PhotoLightboxModal from "@/views/photo-gallery/includes/PhotoLightboxModal";

interface ProductGalleryGridProps {
  items?: ProductGalleryItem[];
}

export default function ProductGalleryGrid({
  items = productGalleryItems,
}: ProductGalleryGridProps) {
  const [selectedProductId, setSelectedProductId] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Lightbox Modal state
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageSrc?: string;
    title?: string;
    eyebrow?: string;
  }>({ isOpen: false });

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

  // Filter products by selected pill & search query
  const filteredProducts = useMemo(() => {
    const list =
      selectedProductId === "all"
        ? items
        : items.filter((p) => p.id === selectedProductId);

    if (!searchQuery.trim()) return list;

    const query = searchQuery.toLowerCase().trim();
    return list
      .map((product) => {
        const matchesProduct =
          product.title.toLowerCase().includes(query) ||
          product.subtitle.toLowerCase().includes(query) ||
          product.version.toLowerCase().includes(query);

        if (matchesProduct) return product;

        // Otherwise filter only views matching the query
        const matchingViews = product.views.filter(
          (v) =>
            v.title.toLowerCase().includes(query) ||
            v.viewTag.toLowerCase().includes(query) ||
            (v.description && v.description.toLowerCase().includes(query))
        );

        if (matchingViews.length > 0) {
          return { ...product, views: matchingViews };
        }

        return null;
      })
      .filter((p): p is ProductGalleryItem => p !== null);
  }, [items, selectedProductId, searchQuery]);

  // Aggregate total views across currently visible products
  const totalViews = useMemo(
    () => filteredProducts.reduce((acc, p) => acc + p.views.length, 0),
    [filteredProducts]
  );

  return (
    <section className="pb-16 sm:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* FILTER ROW & SEARCH BAR                                   */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-[#EAEFEA]">
          {/* Dynamic Product Filter Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto scrollbar-none py-1">
            <button
              onClick={() => setSelectedProductId("all")}
              className={`px-4 sm:px-5 py-2 rounded-full text-[12.5px] sm:text-[13px] font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                selectedProductId === "all"
                  ? "bg-[#0E291E] text-white shadow-sm font-semibold"
                  : "bg-[#F1F4F2] text-[#4F6055] hover:bg-[#E5ECE7] hover:text-[#18251E]"
              }`}
            >
              All products
            </button>

            {items.map((prod) => {
              const isActive = selectedProductId === prod.id;
              return (
                <button
                  key={prod.id}
                  onClick={() => setSelectedProductId(prod.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-[12.5px] sm:text-[13px] font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#0E291E] text-white shadow-sm font-semibold"
                      : "bg-[#F1F4F2] text-[#4F6055] hover:bg-[#E5ECE7] hover:text-[#18251E]"
                  }`}
                >
                  {prod.filterLabel || prod.title}
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
                placeholder="Search views, angles..."
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
              <div>{String(totalViews).padStart(2, "0")} SYSTEM VIEWS</div>
              <div className="text-[10px] text-[#8F9E94]">
                {String(filteredProducts.length).padStart(2, "0")} CONFIGURATIONS
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PRODUCT-WISE MULTI-VIEW SHOWCASE                          */}
        {/* ========================================================= */}
        {filteredProducts.length > 0 ? (
          <div className="space-y-16 sm:space-y-24 pt-10 sm:pt-14">
            {filteredProducts.map((product) => (
              <div key={product.id} className="space-y-8">
                {/* --------------------------------------------------- */}
                {/* PRODUCT SHOWCASE HEADER                             */}
                {/* --------------------------------------------------- */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#EAEFEA] pb-5">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
                      <span className="text-[10.5px] font-mono uppercase tracking-[0.14em] text-[#00A859] font-medium">
                        {product.version} · {product.subtitle.toUpperCase()}
                      </span>
                    </div>
                    <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#0E291E] tracking-tight">
                      {product.title}
                    </h2>
                    <p className="text-[13.5px] text-[#55645C] leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Actions / Metadata */}
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-2 shrink-0 pt-2 md:pt-0">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#738479]">
                      {String(product.views.length).padStart(2, "0")} SYSTEM VIEWS
                    </span>
                    <Link
                      href={product.link}
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0E291E] hover:text-[#00A859] transition-colors group cursor-pointer"
                    >
                      <span>View system specs</span>
                      <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

                {/* --------------------------------------------------- */}
                {/* MULTI-ANGLE VIEWS GRID                              */}
                {/* --------------------------------------------------- */}
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                  <AnimatePresence>
                    {product.views.map((view) => (
                      <motion.div
                        key={view.id}
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        className="group flex flex-col justify-between space-y-3 cursor-pointer"
                        onClick={() =>
                          openLightbox(
                            view.image,
                            view.title,
                            `${product.version} / ${view.viewTag.toUpperCase()}`
                          )
                        }
                      >
                        {/* Image Container with View Tag Badge */}
                        <div className="relative aspect-[16/11] w-full rounded-[18px] sm:rounded-[20px] overflow-hidden bg-[#FAFBFA] border border-[#E3ECE6] shadow-xs flex items-center justify-center p-3">
                          <Image
                            src={view.image}
                            alt={view.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Angle View Badge in Top Left */}
                          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[9.5px] font-mono uppercase tracking-wider text-[#18251E] font-medium border border-[#E0E7E2] shadow-xs">
                            {view.viewTag}
                          </div>

                          {/* Expand Icon in Bottom Right */}
                          <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-[#18251E] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                            <LuMaximize2 className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-1">
                          <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#738479]">
                            {product.version} / {view.viewTag}
                          </div>
                          <div className="flex items-center justify-between text-[15.5px] sm:text-[16.5px] font-semibold text-[#0E291E] tracking-tight group-hover:text-[#00A859] transition-colors">
                            <span>{view.title}</span>
                            <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#738479] group-hover:text-[#00A859]" />
                          </div>
                          {view.description && (
                            <p className="text-[12.5px] text-[#55645C] leading-relaxed line-clamp-2">
                              {view.description}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-20 text-center space-y-3">
            <p className="text-[16px] text-[#0E291E] font-medium">
              No matching system views found for &ldquo;{searchQuery}&rdquo;.
            </p>
            <p className="text-[13px] text-[#738479]">
              Try a different keyword or reset the product filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedProductId("all");
              }}
              className="mt-3 px-5 py-2 rounded-full bg-[#0E291E] text-white text-[12.5px] font-medium hover:bg-[#00A859] transition-colors cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* BOTTOM NOTE & PRODUCT ARCHIVE FOOTER                      */}
        {/* ========================================================= */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#EAEFEA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-[#738479] leading-relaxed max-w-2xl font-normal">
            Product imagery showcases authentic architectural views, internal reactors, front panels, and plumbing connections of ECOKlien&apos;s modular wastewater treatment systems.
          </p>
          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#738479] whitespace-nowrap">
            {String(totalViews).padStart(2, "0")} SYSTEM VIEWS · 03 CONFIGURATIONS
          </div>
        </div>
      </div>

      {/* Lightbox Modal for High-Res View Previews */}
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
