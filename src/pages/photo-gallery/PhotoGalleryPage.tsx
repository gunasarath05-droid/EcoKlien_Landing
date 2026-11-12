"use client";

import React from "react";
import PhotoGalleryHero from "./includes/PhotoGalleryHero";
import PhotoGalleryGrid from "./includes/PhotoGalleryGrid";
import BottomCtaBanner from "@/components/common/BottomCtaBanner";
import { getGalleryEvents } from "@/data/gallery";
import { useLocale } from "@/i18n/LocaleProvider";
import { photoGalleryMessages } from "@/i18n/messages/gallery";

// Client component: src/pages is also built by the Pages Router, so server-only APIs (cookies) cannot be used here
export default function PhotoGalleryPage() {
  const { locale } = useLocale();
  const { cta } = photoGalleryMessages[locale];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <PhotoGalleryHero />

      {/* 2. Photo Gallery Grid with Filter */}
      <PhotoGalleryGrid events={getGalleryEvents(locale)} />

      {/* 3. Bottom CTA Banner (eyebrow, subtitle and button use the default banner text) */}
      <BottomCtaBanner title={cta.title} buttonLink="/contact" />
    </div>
  );
}
