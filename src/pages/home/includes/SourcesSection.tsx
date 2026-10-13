import React from "react";
import Image from "next/image";
import { images } from "@/data/images";

export default function SourcesSection() {
  const sources = [
    {
      title: "Blood",
      icon: (
        <svg
          className="w-5 h-5 text-[#123D30]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M12 3C12 3 6.5 9.8 6.5 14.8A5.5 5.5 0 0017.5 14.8C17.5 9.8 12 3 12 3z"
          />
        </svg>
      ),
    },
    {
      title: "Body fluids",
      icon: (
        <svg
          className="w-5 h-5 text-[#123D30]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M10 2.5h4M11 2.5v5L5.5 18.5a2 2 0 001.7 3h9.6a2 2 0 001.7-3L13 7.5v-5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.6}
            d="M7.8 16h8.4"
          />
        </svg>
      ),
    },
    {
      title: "Dialysis waste",
      icon: (
        <svg
          className="w-5 h-5 text-[#123D30]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M10 2.5h4M11 2.5v5L5.5 18.5a2 2 0 001.7 3h9.6a2 2 0 001.7-3L13 7.5v-5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.6}
            d="M7.8 16h8.4"
          />
        </svg>
      ),
    },
    {
      title: "Urine",
      icon: (
        <svg
          className="w-5 h-5 text-[#123D30]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M8.5 2.5h7M9.5 2.5v15a2.5 2.5 0 005 0v-15"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.5 11h5"
          />
        </svg>
      ),
    },
    {
      title: "Sputum",
      icon: (
        <svg
          className="w-5 h-5 text-[#123D30]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M15.5 3.5a2.1 2.1 0 013 3l-1.5 1.5-3-3 1.5-1.5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M13.5 5.5l4 4"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M13.8 8.2L7.2 14.8a2 2 0 00-.5 1l-.7 2.7 2.7-.7c.4-.1.7-.3 1-.5l6.6-6.6"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.5 14l1.5 1.5"
          />
        </svg>
      ),
    },
    {
      title: "Laboratory processes",
      icon: (
        <svg
          className="w-5 h-5 text-[#123D30]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M5 21h12M11 21v-3"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M7 15h8"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M13 3l4 4-7 7-4-4 7-7z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M8.5 12l2 2"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M11 18c-3.2 0-5.2-2.2-5.2-5.5a5.5 5.5 0 012.6-4.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="sources" className="py-24 md:py-32 bg-white overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Outer wrapper: provides room on the left for the splash image to overflow outside the card */}
        <div className="relative pl-0 lg:pl-28 xl:pl-36">
          {/* Splash Image: positioned so its left side sits outside the box on the white background */}
          <div className="lg:absolute lg:-left-28 xl:-left-36 lg:top-1/2 lg:-translate-y-1/2 z-20 flex items-center justify-center mb-8 lg:mb-0">
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-[350px] xl:w-[380px] aspect-square">
              {/* Soft subtle green ground reflection under the splash */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[#38C978]/25 rounded-full blur-2xl pointer-events-none" />
              <Image
                src={images.source}
                alt="Liquid Biomedical Waste Splash"
                fill
                priority
                className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>

          {/* Light-green rounded card: starts behind the splash and extends to the right */}
          <div className="relative bg-[#EEF2EB] rounded-[32px] sm:rounded-[36px] p-8 sm:p-12 lg:p-14 lg:pl-56 xl:pl-64 border border-[#D7DED5]/50 shadow-sm">
            <div className="space-y-8">
              {/* Tag: square dot + WHAT IT TREATS */}
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-[1.5px] bg-[#123D30] shrink-0" />
                <span className="text-xs font-mono font-medium tracking-[0.16em] uppercase text-[#839088]">
                  WHAT IT TREATS
                </span>
              </div>

              {/* Title & Description side by side */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#123D30] tracking-tight leading-[1.12]">
                  Different sources.<br />
                  One focused purpose.
                </h2>

                <p className="text-sm sm:text-[15px] text-[#647069] leading-relaxed max-w-sm lg:pb-1">
                  Treatment and disinfection of potentially contaminated liquid waste generated by healthcare and laboratory activities.
                </p>
              </div>

              {/* 3x2 Grid of White Source Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {sources.map((src, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between px-6 py-4.5 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-200"
                  >
                    <div className="shrink-0">{src.icon}</div>
                    <span className="text-sm font-medium text-[#123D30] text-right">
                      {src.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
