import React from "react";
import Image from "next/image";
import { images } from "@/data/images";
import { LuMoveDiagonal2, LuLayoutGrid, LuPlug, LuCross } from "react-icons/lu";

export default function TechnologySection() {
  const specs = [
    {
      title: "Compact footprint",
      description:
        "A space-conscious system that brings treatment closer to where liquid waste is generated.",
      icon: <LuMoveDiagonal2 size={24} strokeWidth={1.8} className="text-[#18251E]" />,
    },
    {
      title: "Modular configuration",
      description:
        "Modular by design, with configuration to be discussed around your facility’s treatment needs.",
      icon: <LuLayoutGrid size={24} strokeWidth={1.8} className="text-[#18251E]" />,
    },
    {
      title: "Plug-and-play system",
      description:
        "Designed to make on-site biomedical liquid waste treatment more practical.",
      icon: <LuPlug size={24} strokeWidth={1.8} className="text-[#18251E]" />,
    },
    {
      title: "Purpose-built treatment",
      description:
        "Treatment and disinfection designed for healthcare facilities and laboratories.",
      icon: <LuCross size={24} strokeWidth={1.8} className="text-[#18251E]" />,
    },
  ];

  return (
    <section id="technology" className="relative z-20 max-w-7xl mx-auto border-t border-[#e3e7e5]">
      <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-14">
          <div className="lg:col-span-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-1.5 h-1.5 bg-[#13a538] shrink-0" />
              <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-[#5d6762]">
                Engineered for your facility
              </span>
            </div>
            {/* Title */}
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-normal text-[#0e2a1e] tracking-[-0.01em] leading-[1.05]">
              Serious technology.
              <br />
              Practical proportions.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p className="text-[14px] sm:text-[15px] text-[#5d6762] leading-[1.55] max-w-[360px] font-normal">
              A compact, modular and plug-and-play design — built around the realities of on-site liquid waste treatment.
            </p>
          </div>
        </div>

        {/* Content: Image on Left + 2x2 Feature Grid on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left: Machine in facility visual */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-full lg:min-h-[530px] rounded-[20px] overflow-hidden bg-[#EFF3ED]">
              <Image
                src={images.facility}
                alt="EcoKlien Biomedical Liquid Waste Treatment System"
                fill
                className="object-cover object-center"
                priority
              />

              {/* Tag at bottom */}
              <div className="absolute bottom-5 left-2 md:left-5 bg-white/92 backdrop-blur-sm rounded-[8px] px-2 py-1 md:px-4 md:py-2.5 shadow-sm">
                <span className="text-[9px] md:text-[11px] font-mono tracking-[0.03em] text-[#1b2a22] font-medium block">
                  ECOKlien / Biomedical liquid waste treatment system
                </span>
              </div>
            </div>
          </div>

          {/* Right: 2x2 Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {specs.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-[14px] bg-[#f0f2ef] hover:bg-[#e7ece6] transition-colors flex flex-col justify-start"
              >
                <div className="mb-5 sm:mb-6 text-[#0e2a1e]">
                  {item.icon}
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-normal text-[#0e2a1e] mb-4 leading-[1.2]">
                  {item.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-[#5d6762] leading-[1.55] font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

