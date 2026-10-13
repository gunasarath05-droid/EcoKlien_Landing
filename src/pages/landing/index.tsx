import React from "react";

import LandingHeroSection from "./includes/LandingHeroSection";
import BiomedicalTreatmentFlowSection from "./includes/BiomedicalTreatmentFlowSection";
import TechnologySection from "@/pages/home/includes/TechnologySection";
import ApplicationsSection from "@/pages/home/includes/ApplicationsSection";
import WasteNotFromOnePlaceSection from "./includes/WasteNotFromOnePlaceSection";
import ConfigurationsSection from "./includes/ConfigurationsSection";

export {
  LandingHeroSection,
  BiomedicalTreatmentFlowSection,
  WasteNotFromOnePlaceSection,
  ConfigurationsSection,
};

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 w-full">
        <LandingHeroSection />
        <BiomedicalTreatmentFlowSection />
        <TechnologySection />
        <ApplicationsSection />
        <WasteNotFromOnePlaceSection />
        <ConfigurationsSection />
      </main>
    </div>
  );
}
