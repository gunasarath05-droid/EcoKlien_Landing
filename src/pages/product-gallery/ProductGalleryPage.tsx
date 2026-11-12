"use client";

import React from "react";
import ProductGalleryHero from "./includes/ProductGalleryHero";
import ProductGalleryGrid from "./includes/ProductGalleryGrid";
import ProductGalleryTechSection from "./includes/ProductGalleryTechSection";
import BottomCtaBanner from "@/components/common/BottomCtaBanner";
import { getProductGalleryItems } from "@/data/gallery";
import { useLocale } from "@/i18n/LocaleProvider";
import { productGalleryMessages } from "@/i18n/messages/gallery";

// Client component: src/pages is also built by the Pages Router, so server-only APIs (cookies) cannot be used here
export default function ProductGalleryPage() {
  const { locale } = useLocale();
  const { cta } = productGalleryMessages[locale];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <ProductGalleryHero />

      {/* 2. Configurations Grid with Filter */}
      <ProductGalleryGrid items={getProductGalleryItems(locale)} />

      {/* 3. Serious Technology / Practical Proportions Section */}
      <ProductGalleryTechSection />

      {/* 4. Bottom CTA Banner (eyebrow, subtitle and button use the default banner text) */}
      <BottomCtaBanner title={cta.title} buttonLink="/contact" />
    </div>
  );
}
