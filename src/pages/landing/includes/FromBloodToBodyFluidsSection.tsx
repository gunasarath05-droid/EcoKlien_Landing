import React from "react";
import Image from "next/image";
import { images } from "@/data/images";
import {
  LuMicroscope,
  LuFlaskConical,
  LuPipette,
  LuTestTube,
  LuDroplet,
} from "react-icons/lu";

export default function FromBloodToBodyFluidsSection() {
  const streams = [
    {
      title: "Laboratory processes",
      icon: <LuMicroscope size={18} strokeWidth={1.8} className="text-[#18251E] shrink-0" />,
      theme: "light",
      position: "top-4 left-4 sm:top-8 sm:left-12 lg:top-8 lg:left-16",
    },
    {
      title: "Dialysis waste",
      icon: <LuFlaskConical size={18} strokeWidth={1.8} className="text-[#18251E] shrink-0" />,
      theme: "light",
      position: "top-14 right-4 sm:top-20 sm:right-10 lg:top-20 lg:right-14",
    },
    {
      title: "Sputum",
      icon: <LuPipette size={18} strokeWidth={1.8} className="text-white shrink-0" />,
      theme: "dark",
      position: "top-[52%] left-2 sm:left-8 lg:left-12",
    },
    {
      title: "Urine",
      icon: <LuTestTube size={18} strokeWidth={1.8} className="text-white shrink-0" />,
      theme: "dark",
      position: "top-[48%] right-4 sm:right-10 lg:right-16",
    },
    {
      title: "Body fluids",
      icon: <LuFlaskConical size={18} strokeWidth={1.8} className="text-white shrink-0" />,
      theme: "dark",
      position: "bottom-24 right-8 sm:bottom-28 sm:right-20 lg:bottom-28 lg:right-28",
    },
    {
      title: "Blood",
      icon: <LuDroplet size={18} strokeWidth={1.8} className="text-white shrink-0" />,
      theme: "dark",
      position: "bottom-8 left-[24%] sm:bottom-10 sm:left-[30%] lg:bottom-12 lg:left-[34%]",
    },
  ];

  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      {/* Fluids Background Image (Split White Top / Dark Fluid Bottom) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={images.fluidbg}
          alt="Fluids background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Tag */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2 h-2 bg-[#00A859] inline-block" />
          <span className="text-xs font-mono font-medium uppercase tracking-[0.16em] text-[#6B7280]">
            WHAT IT TREAT:
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#18251E] mb-8">
          From blood to<br />
          body fluids.
        </h2>

        {/* Central Fluid Splash with Floating Badges */}
        <div className="relative max-w-4xl mx-auto h-[480px] sm:h-[540px] md:h-[580px] flex items-center justify-center">
          {/* Central Fluid Sphere */}
          <div className="relative w-auto sm:h-88 md:h-[120%] aspect-square z-10 drop-shadow-2xl -mt-12">
            <Image
              src={images.liquid1}
              alt="Bio-waste fluid splash"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Floating Badges */}
          {streams.map((item, idx) => {
            const isLight = item.theme === "light";
            return (
              <div
                key={idx}
                className={`absolute z-20 flex items-center gap-3 px-5 py-3 rounded-lg shadow-sm text-xs sm:text-lg font-medium transition-all duration-300 hover:scale-105 ${
                  isLight
                    ? "bg-[#C2C2C2]/10 backdrop-blur-md border border-white/80 text-[#18251E]"
                    : "bg-[#C2C2C2]/10 backdrop-blur-md border border-white/15 text-white/95"
                } ${item.position}`}
              >
                <div>{item.icon}</div>
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Text Over the Dark Fluid Area */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-8 text-center">
        <p className="text-sm sm:text-lg text-white leading-relaxed">
          Treatment can be configured according to the characteristics of the incoming
          <br className="hidden sm:inline" /> wastewater and the requirements of the application.
        </p>
      </div>
    </section>
  );
}
