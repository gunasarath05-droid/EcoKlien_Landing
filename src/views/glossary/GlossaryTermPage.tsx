import React from "react";
import { GlossaryTerm, sortedGlossaryTerms } from "@/data/glossary";
import GlossaryTermHero from "./includes/GlossaryTermHero";
import GlossaryTermBody from "./includes/GlossaryTermBody";
import GlossaryRelatedSection from "./includes/GlossaryRelatedSection";
import BottomCtaBanner from "@/components/common/BottomCtaBanner";

export default function GlossaryTermPage({
  term = sortedGlossaryTerms[0],
}: {
  term?: GlossaryTerm;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero + "In simple terms" */}
      <GlossaryTermHero term={term} />

      {/* 2. Guide nav + numbered sections */}
      <GlossaryTermBody term={term} />

      {/* 3. Related terms */}
      <GlossaryRelatedSection term={term} />

      {/* 4. Bottom CTA Banner */}
      <BottomCtaBanner
        eyebrow="LET'S TALK TREATMENT"
        title="Bring your questions. We'll bring the engineering."
        subtitle="Tell us your wastewater source, approximate volume and operating requirements. Let's discuss the right approach for your facility."
        buttonText="Talk to an engineer"
        buttonLink="/contact"
      />
    </div>
  );
}
