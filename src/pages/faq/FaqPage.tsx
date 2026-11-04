import React from "react";
import FaqHeroSection from "./includes/FaqHeroSection";
import FaqAccordionSection from "./includes/FaqAccordionSection";
import BottomCtaBanner from "@/components/common/BottomCtaBanner";

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <FaqHeroSection />

      {/* 2. FAQ Accordion + Sidebar Topics Section */}
      <FaqAccordionSection />

      {/* 3. Bottom CTA Banner */}
      <BottomCtaBanner
        eyebrow="LET'S TALK TREATMENT"
        title="Still have a question? Let's talk."
        subtitle="Tell us your wastewater source, approximate volume and operating requirements. Let's discuss the right approach for your facility."
        buttonText="Talk to an engineer"
        buttonLink="https://ecoklien.com/contact/"
      />
    </div>
  );
}

