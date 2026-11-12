import { Metadata } from "next";
import AboutPage from "@/views/about/AboutPage";

export const metadata: Metadata = {
  title: "About Us - EcoKlien | Biomedical Liquid Waste Treatment",
  description:
    "We are a manufacturer and supplier of Electrocoagulation and Electro-Oxidation-based Hybrid Biomedical Liquid Waste treatment plant/systems.",
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <AboutPage />
    </div>
  );
}
