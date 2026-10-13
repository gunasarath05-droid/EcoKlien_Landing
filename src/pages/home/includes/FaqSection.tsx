"use client";

import React, { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does it work at source?",
      answer:
        "EcoKlien treats liquid biomedical waste right where it is collected or at the utility junction before municipal discharge. The unit uses validated disinfection pathways to eliminate 99.999% of pathogens in an automated closed-cycle process.",
    },
    {
      question: "What types of liquid waste can it treat?",
      answer:
        "The system processes all high-risk clinical effluents including whole blood, serum, dialysate fluids, laboratory stains, body fluid drainage, and surgical suction waste without manual pretreatment.",
    },
    {
      question: "Does it require specialized chemical storage?",
      answer:
        "No bulky external chemical storage is required. EcoKlien incorporates a self-contained, metered biocidal process with leak-proof internal containers, eliminating hazardous spill risks for hospital staff.",
    },
    {
      question: "What certifications does the system hold?",
      answer:
        "Engineered in strict conformity with national Biomedical Waste Management Rules, Pollution Control Board effluent standards, and ISO biosafety containment guidelines.",
    },
    {
      question: "How does onsite treatment save facility costs?",
      answer:
        "By treating liquid waste on premise, healthcare facilities eliminate high per-liter hazardous waste transport tariffs, reduce manifests compliance paperwork, and mitigate catastrophic liability risks.",
    },
    {
      question: "How do we discuss our specific configuration?",
      answer:
        "Our engineering team conducts a rapid waste generation audit of your facility (bed count, lab volume, OT frequency) to size the optimal system capacity ranging from 200L to 5,000L/day.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-t border-[#D7DED5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7F0] border border-[#D7DED5]">
              <span className="w-2 h-2 rounded-full bg-[#00B050]" />
              <span className="text-xs font-mono font-medium uppercase text-[#123D30]">
                FREQUENTLY ASKED
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#123D30] tracking-tight leading-[1.15]">
              A little more clarity.
            </h2>

            <p className="text-base text-[#647069] leading-relaxed">
              Clear answers to how EcoKlien seamlessly integrates into your existing facility infrastructure and regulatory workflow.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-[#F0F3ED] border-[#00B050]/40 shadow-sm"
                      : "bg-white border-[#D7DED5] hover:border-[#00B050]/30"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                  >
                    <span className="text-base font-semibold text-[#123D30]">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-mono text-sm transition-transform duration-200 ${
                        isOpen
                          ? "bg-[#123D30] text-white rotate-45"
                          : "bg-[#F0F3ED] text-[#123D30]"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-[#647069] leading-relaxed border-t border-[#D7DED5]/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
