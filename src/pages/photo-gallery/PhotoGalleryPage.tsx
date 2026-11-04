import React from "react";
import PhotoGalleryHero from "./includes/PhotoGalleryHero";
import PhotoGalleryGrid from "./includes/PhotoGalleryGrid";
import BottomCtaBanner from "@/components/common/BottomCtaBanner";
import { photoGalleryItems } from "@/data/gallery";

export default function PhotoGalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <PhotoGalleryHero />

      {/* 2. Photo Gallery Grid with Filter */}
      <PhotoGalleryGrid items={photoGalleryItems} />

      {/* 3. Bottom CTA Banner */}
      <BottomCtaBanner
        eyebrow="LET'S TALK TREATMENT"
        title="See how ECOKlien could fit your facility."
        subtitle="Tell us your wastewater source, approximate volume and operating requirements. Let's discuss the right approach for your facility."
        buttonText="Talk to an engineer"
        buttonLink="https://ecoklien.com/contact/"
      />
    </div>
  );
}

