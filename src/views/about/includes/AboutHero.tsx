import React from "react";
import Image from "next/image";
import { images } from "@/data/images";

export default function AboutHero() {
  return (
    <section className="pt-10 md:pt-16 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Description, Tags */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00A859] inline-block" />
              <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-[#5D6B62]">
                ABOUT ECOKLIEN
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[32px] sm:text-[44px] lg:text-[50px] font-semibold text-[#0E291E] tracking-tight leading-[1.1]">
              The Perfect Liquid Waste Solution For Hospitals, Pharmacies &amp; More
            </h1>

            {/* Description Paragraph */}
            <p className="text-[14px] sm:text-[15px] text-[#55645C] leading-[1.65] font-normal max-w-xl">
              We are a manufacturer and supplier of Electrocoagulation and Electro-Oxidation-based Hybrid Biomedical Liquid Waste treatment plant/systems, and offer ECO safe Hospital Wastewater Treatment (HWTP) using electrochemical technologies.
            </p>
            <p className="text-[13.5px] sm:text-[14.5px] text-[#2C3E35] font-bold leading-relaxed">
            Advanced electro-chemical wastewater (effluent) treatment systems for hospitals and biomedical uses.
          </p>

            {/* Breadcrumb Tags */}
            <div className="pt-4 text-[10.5px] sm:text-[11px] font-mono text-[#819288] tracking-widest uppercase flex items-center gap-2 flex-wrap">
              <span>ENGINEERING</span>
              <span>•</span>
              <span>HEALTHCARE</span>
              <span>•</span>
              <span>ENVIRONMENTAL TECHNOLOGY</span>
            </div>
          </div>

          {/* Right Column: Treatment System Showcase Card */}
          <div className="lg:col-span-6">
            <div className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden aspect-[1536/1024] shadow-xl border border-[#E5ECE7] group">
              <Image
                src={images.facility || "/assests/images/home/Firefly.png"}
                alt="ECOKlien Hybrid Treatment System"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Pill Badge at bottom left */}
              <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 z-10 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 border border-black/10 shadow-sm">
                <span className="text-[10px] sm:text-[11px] font-mono text-[#18251E] font-medium tracking-wide">
                  ECOKlien / HYBRID TREATMENT SYSTEM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

