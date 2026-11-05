import React from "react";
import GlossaryHeroSection from "./includes/GlossaryHeroSection";
import GlossaryIndexSection from "./includes/GlossaryIndexSection";
import BottomCtaBanner from "@/components/common/BottomCtaBanner";

export default function GlossaryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <GlossaryHeroSection />

      {/* 2. Search, A–Z filter + term grid */}
      <GlossaryIndexSection />

      {/* 3. Bottom CTA Banner */}
      <BottomCtaBanner />
    </div>
  );
}
