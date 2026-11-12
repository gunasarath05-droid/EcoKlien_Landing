import React from "react";
import ProductsOverviewHero from "./includes/ProductsOverviewHero";
import ProductsBuiltAroundSection from "./includes/ProductsBuiltAroundSection";
import ConfigurationsSection from "../landing/includes/ConfigurationsSection";

/** /products: the platform overview with the three configurations (each links to its product page). */
export default function ProductsOverviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 w-full">
        <ProductsOverviewHero />
        <ProductsBuiltAroundSection />
        <ConfigurationsSection />
      </main>
    </div>
  );
}
