import React from "react";
import { ProductDetail, defaultProduct } from "@/data/products";
import ProductHeroSection from "./includes/ProductHeroSection";
import ProductTechnologySection from "./includes/ProductTechnologySection";
import ProductTreatmentFlowSection from "./includes/ProductTreatmentFlowSection";
import ProductConfigurationsSection from "./includes/ProductConfigurationsSection";
import { WasteNotFromOnePlaceSection } from "../landing/LandingPage";
import { ApplicationsSection } from "../home/HomePage";

export {
  ProductHeroSection,
  ProductTechnologySection,
  ProductTreatmentFlowSection,
  ProductConfigurationsSection,
};

interface ProductPageProps {
  product?: ProductDetail;
}

export default function ProductPage({ product = defaultProduct }: ProductPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 w-full">
        <ProductHeroSection hero={product.hero} />
        <WasteNotFromOnePlaceSection />
        <ProductTechnologySection technologySection={product.technologySection} />
        <ProductTreatmentFlowSection
          closerSection={product.closerSection}
          fluidsSection={product.fluidsSection}
        />
        <ApplicationsSection />
        <ProductConfigurationsSection configurationsSection={product.configurationsSection} />
      </main>
    </div>
  );
}
