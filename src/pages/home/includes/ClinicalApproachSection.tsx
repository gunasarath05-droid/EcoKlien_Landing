import React from "react";

export default function ClinicalApproachSection() {
  const points = [
    {
      title: "Closer to generation",
      description: "Bring treatment into the facility.",
    },
    {
      title: "Less chemical dependence",
      description: "An electrochemical approach to liquid waste.",
    },
    {
      title: "Practical by design",
      description: "Compact, modular and plug-and-play.",
    },
  ];

  return (
    <section id="approach" className="py-20 md:py-28 bg-white border-b border-[#D7DED5]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Proposition & Key Pillars */}
          <div className="lg:col-span-5 space-y-12">
            {/* Eyebrow and Subtitle */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-[1.5px] bg-[#00B050] shrink-0" />
                <span className="text-xs font-mono font-medium tracking-[0.14em] uppercase text-[#839088]">
                  THE PROPOSITION
                </span>
              </div>
              <p className="text-[15px] sm:text-base text-[#647069] leading-relaxed max-w-sm">
                Purpose-built for the places where care and science happen.
              </p>
            </div>

            {/* Pillar Points without boxes */}
            <div className="space-y-8 sm:space-y-10">
              {points.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <h3 className="text-xl sm:text-[22px] font-semibold text-[#123D30] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#647069]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative / Approach */}
          <div className="lg:col-span-7 space-y-7 lg:pt-1">
            <h2 className="text-4xl sm:text-[44px] lg:text-[50px] font-bold text-[#123D30] tracking-tight leading-[1.12]">
              Clinical waste.<br />
              A clearer treatment approach.
            </h2>

            <div className="space-y-5 text-[15px] sm:text-base text-[#647069] leading-relaxed pt-2">
              <p>
                Healthcare facilities generate liquid waste that requires careful treatment before it can move beyond the point of generation. Conventional approaches can involve chemical dosing, multiple handling steps and infrastructure that is difficult to adapt to every facility.
              </p>

              <p className="font-semibold text-[#123D30]">
                ECOKlien takes a different approach.
              </p>

              <p>
                An engineering-led treatment system that brings treatment closer to where the waste is generated — treating and disinfecting potentially contaminated liquid waste on site, through a compact and modular system.
              </p>

              <p>
                Less complexity. More control. A more practical way to treat clinical liquid waste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

