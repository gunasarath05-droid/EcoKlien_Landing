import React from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";

export default function CloserToCareSection() {
  return (
    <section
      id="architecture"
      className="py-24 md:py-32 bg-[#091D16] text-white relative overflow-hidden"
    >
      {/* Background Graphic / Emerald Waves Backdrop */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
        <Image
          src={images.treatment}
          alt="Treatment process backdrop"
          fill
          className="object-cover object-center scale-105"
          priority
        />
      </div>

      {/* Dark gradient overlay for contrast and clarity */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#091D16]/95 via-[#091D16]/80 to-[#091D16]/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading and Messaging */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Tag: Square dot + TREATMENT AT THE SOURCE */}
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-[1.5px] bg-[#00B050] shrink-0" />
              <span className="text-xs font-mono font-medium uppercase tracking-[0.16em] text-[#839088]">
                TREATMENT AT THE SOURCE
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.08]">
              Bring treatment closer<br />
              to care.
            </h2>

            {/* Description */}
            <p className="text-[15px] sm:text-base text-[#D7DED5]/90 leading-relaxed max-w-lg font-normal pt-1">
              ECOKlien enables on-site treatment closer to waste generation. Its compact design offers a practical approach that reduces dependence on large, complex treatment infrastructure.
            </p>

            {/* Action Button: Discuss your facility with diagonal arrow ↗ */}
            <div className="pt-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#00B050] hover:bg-[#009933] text-white font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl group"
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
            </div>
          </div>

          {/* Right Column: Glassmorphic Workflow Box */}
          <div className="lg:col-span-6">
            <div className="bg-[#0B261E]/80 backdrop-blur-xl border border-white/10 rounded-[30px] sm:rounded-[34px] p-6 sm:p-9 shadow-2xl space-y-6">
              {/* Header row: WITHIN YOUR FACILITY + Hospital icon */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium tracking-[0.16em] uppercase text-[#839088]">
                  WITHIN YOUR FACILITY
                </span>
                <svg
                  className="w-5 h-5 text-[#38C978]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M19 21V5a2 2 0 00-2-2H5a2 2 0 00-2 2v16m18 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>

              {/* Top Row: Healthcare & Laboratory Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Healthcare Card */}
                <div className="bg-[#061A14]/90 border border-white/10 rounded-2xl p-5 space-y-3">
                  <svg
                    className="w-6 h-6 text-[#38C978]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M19 21V5a2 2 0 00-2-2H5a2 2 0 00-2 2v16m18 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      Healthcare
                    </h3>
                    <p className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-[#839088] mt-1">
                      CARE &amp; CLINICAL ACTIVITIES
                    </p>
                  </div>
                </div>

                {/* Laboratory Card */}
                <div className="bg-[#061A14]/90 border border-white/10 rounded-2xl p-5 space-y-3">
                  <svg
                    className="w-6 h-6 text-[#38C978]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M5 21h12M11 21v-3M7 15h8M13 3l4 4-7 7-4-4 7-7zM8.5 12l2 2M11 18c-3.2 0-5.2-2.2-5.2-5.5a5.5 5.5 0 012.6-4.5"
                    />
                  </svg>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      Laboratory
                    </h3>
                    <p className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-[#839088] mt-1">
                      TESTING &amp; RESEARCH
                    </p>
                  </div>
                </div>
              </div>

              {/* Central Down Arrow */}
              <div className="flex justify-center py-1">
                <svg
                  className="w-5 h-5 text-[#38C978]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m0 0l-5-5m5 5l5-5"
                  />
                </svg>
              </div>

              {/* Bottom Card: ECOKlien on-site treatment */}
              <div className="bg-[#0C2F24]/95 border border-[#38C978]/40 rounded-2xl p-5 sm:p-6 space-y-3 shadow-lg">
                <svg
                  className="w-6 h-6 text-[#38C978]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M12 3v3m0 12v3M3 12h3m12 0h3"
                  />
                  <circle cx="12" cy="12" r="3" strokeWidth="1.8" />
                </svg>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    ECOKlien on-site treatment
                  </h3>
                  <p className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-[#839088] mt-1">
                    TREATMENT &amp; DISINFECTION / CLOSER TO GENERATION
                  </p>
                </div>
              </div>

              {/* Bottom Note */}
              <p className="text-xs text-[#839088] leading-relaxed pt-1">
                Conceptual placement. The appropriate configuration is a facility-specific discussion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
