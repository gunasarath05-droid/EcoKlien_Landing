"use client";

import React from "react";
import FaqHeroSection from "./includes/FaqHeroSection";
import FaqAccordionSection from "./includes/FaqAccordionSection";
import BottomCtaBanner from "@/components/common/BottomCtaBanner";
import { useMessages } from "@/i18n/LocaleProvider";
import { faqMessages } from "@/i18n/messages/faq";

export default function FaqPage() {
  const { cta } = useMessages(faqMessages);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <FaqHeroSection />

      {/* 2. FAQ Accordion + Sidebar Topics Section */}
      <FaqAccordionSection />

      {/* 3. Bottom CTA Banner (eyebrow, subtitle and button use the translated defaults) */}
      <BottomCtaBanner title={cta.title} buttonLink="/contact" />
    </div>
  );
}
