import React from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";

export default function HeroSection() {
  return (
    <section id="overview" className="relative py-12 overflow-hidden bg-white min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 flex flex-col self-stretch">
            {/* Eyebrow Tag: Square dot + Monospace text without container box */}
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-[1.5px] bg-[#00B050] shrink-0" />
              <span className="text-xs font-mono font-medium tracking-[0.14em] uppercase text-[#647069]">
                ADVANCED BIOMEDICAL LIQUID WASTE TREATMENT
              </span>
            </div>
            

            <div className="mt-auto">
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-[-0.02em] text-[#123D30] leading-[1.08]">
                Treat biomedical liquid
                <br />
                waste before it leaves
                <br />
                your facility
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-[17px] text-[#647069] leading-relaxed max-w-xl font-normal pt-1">
                Advanced electrochemical treatment. Compact, on-site engineering
                for healthcare facilities and laboratories.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-7">
                {/* Primary Button: Discuss your facility with diagonal arrow ↗ */}
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#00B050] hover:bg-[#009933] text-white font-medium text-sm transition-all duration-300 shadow-sm hover:shadow group"
                >
                  <span>Discuss your facility</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.4}
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </Link>

                {/* Secondary Link: Explore the technology with subtle underline */}
                <Link
                  href="#technology"
                  className="inline-flex items-center text-sm font-medium text-[#123D30] hover:text-[#00B050] underline underline-offset-4 decoration-[#647069]/40 hover:decoration-[#00B050] transition-colors"
                >
                  Explore the technology
                </Link>
              </div>
            </div>

            {/* Bottom Technical Tag Footer */}
            <div className="mt-auto">
              <div className="flex flex-wrap items-center gap-3 text-[11px] sm:text-xs font-mono font-medium tracking-[0.16em] uppercase text-[#839088]">
                <span>ENGINEERING</span>
                <span className="text-[#839088]/70">+</span>
                <span>HEALTHCARE</span>
                <span className="text-[#839088]/70">+</span>
                <span>ENVIRONMENTAL TECHNOLOGY</span>
              </div>
            </div>
          </div>

          {/* Right Column Showcase Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[32px] overflow-hidden bg-[#123D30] shadow-2xl border border-[#D7DED5]/40 group">
              {/* Top Card Badge: Square green bullet + ECOKlien / ON-SITE SYSTEM */}
              <div className="absolute top-6 left-6 z-20 flex items-center gap-2.5 text-white text-xs font-mono tracking-wide">
                <span className="w-2 h-2 rounded-[1.5px] bg-[#00B050]" />
                <span className="text-white/95">ECOKlien / ON-SITE SYSTEM</span>
              </div>

              {/* Machine Image Container */}
              <div className="relative w-full h-[440px] sm:h-[540px] md:h-[580px] lg:h-[720px] overflow-hidden">
                <Image
                  src={images.hero}
                  alt="ECOKlien On-site System Unit"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-102"
                />

                {/* Bottom Spec Overlay Card */}
                <div className="absolute bottom-6 left-6 z-20 bg-[#123D30]/85 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 text-white max-w-[280px] sm:max-w-[320px] shadow-lg">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                      Treatment at the source.
                    </h3>
                    <div className="shrink-0 text-[#38C978]">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          strokeWidth="2"
                          strokeDasharray="3 3"
                        />
                        <circle cx="12" cy="12" r="3.5" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs text-[#D7DED5]/85 mt-1 font-normal">
                    Compact. Modular. Plug-and-play.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
