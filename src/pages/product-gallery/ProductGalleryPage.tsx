import React from "react";
import ProductGalleryHero from "./includes/ProductGalleryHero";
import ProductGalleryGrid from "./includes/ProductGalleryGrid";
import ProductGalleryTechSection from "./includes/ProductGalleryTechSection";
import BottomCtaBanner from "@/components/common/BottomCtaBanner";
import { productGalleryItems } from "@/data/gallery";

export default function ProductGalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <ProductGalleryHero />

      {/* 2. Configurations Grid with Filter */}
      <ProductGalleryGrid items={productGalleryItems} />

      {/* 3. Serious Technology / Practical Proportions Section */}
      <ProductGalleryTechSection />

      {/* 4. Bottom CTA Banner */}
      <BottomCtaBanner
        eyebrow="LET'S TALK TREATMENT"
        title="Which configuration fits your facility?"
        subtitle="Tell us your wastewater source, approximate volume and operating requirements. Let's discuss the right approach for your facility."
        buttonText="Talk to an engineer"
        buttonLink="https://ecoklien.com/contact/"
      />
    </div>
  );
}

