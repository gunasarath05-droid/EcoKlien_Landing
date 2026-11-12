import React from "react";
import HeroSection from "./includes/HeroSection";
import TickerSection from "./includes/TickerSection";
import ClinicalApproachSection from "./includes/ClinicalApproachSection";
import SourcesSection from "./includes/SourcesSection";
import CloserToCareSection from "./includes/CloserToCareSection";
import TechnologySection from "./includes/TechnologySection";
import ApplicationsSection from "./includes/ApplicationsSection";
import FaqSection from "./includes/FaqSection";

export {
  HeroSection,
  TickerSection,
  ClinicalApproachSection,
  SourcesSection,
  CloserToCareSection,
  TechnologySection,
  ApplicationsSection,
  FaqSection,
};

export default function HomePage() {
  return (
    <main className="flex-1 w-full">
      <HeroSection />
      <TickerSection />
      <ClinicalApproachSection />
      <SourcesSection />
      <CloserToCareSection />
      <TechnologySection />
      <ApplicationsSection />
      <FaqSection />
    </main>
  );
}
