import React from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { LuArrowUpRight } from "react-icons/lu";

export default function ConfigurationsSection() {
  const configs = [
    {
      version: "ECOKlien V1",
      title: "Biomedical Liquid Waste Treatment Systems",
      subtitle: "(Point of Source System)",
      description:
        "For smaller or decentralised sources of biomedical liquid waste. Designed for treating liquid waste closer to where it is generated, reducing the need to collect and transport contaminated wastewater across the facility.",
      bestSuited:
        "LABORATORIES · PROCEDURE AREAS · SMALL HEALTHCARE FACILITIES · SPECIFIC WASTE STREAMS",
      image: images.product.product3,
      link:"https://ecoklien.com/biomedical-liquid-waste-treatment-system/"
    },
    {
      version: "ECOKlien V2",
      title: "Hospital Effluent Treatment Systems",
      subtitle: "(Decentralised facility treatment)",
      description:
        "For healthcare facilities generating larger and more continuous volumes of biomedical liquid waste. A compact treatment system designed to integrate into existing facility infrastructure while providing controlled treatment before discharge or further handling.",
      bestSuited:
        "HOSPITALS · DIAGNOSTIC CENTRES · MULTI-DEPARTMENT FACILITIES · HEALTHCARE CAMPUSES",
      image: images.product.product1,
      link:"https://ecoklien.com/hospital-effluent-treatment-systems/"
    },
    {
      version: "ECOKlien V3",
      title: "Biomedical Liquid Waste Disinfection System",
      subtitle: "(Point of Source System)",
      description:
        "An electrochemical disinfection system for microbial contamination in biomedical liquid waste. Compact and adaptable, where required as a dedicated treatment integrated into a broader wastewater treatment process.",
      bestSuited:
        "HOSPITALS · LABORATORIES · DIAGNOSTIC CENTRES · HEALTHCARE FACILITIES",
      image: images.product.product2,
      link:"https://ecoklien.com/biomedical-liquid-disinfection-system/"
    },
  ];

  return (
    <section
      id="configurations"
      className="text-white relative overflow-hidden py-12 md:py-24 w-full border-t border-[#D7DED5]"
    >
      {/* Background Emerald Fluid Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={images.bioMedicalBg}
          alt="Biomedical fluid backdrop"
          fill
          priority
          className="object-cover object-center"
        />
        
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-5">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 bg-[#13a538] shrink-0" />
              <span className="text-[11px] font-mono uppercase tracking-[0.04em] text-white/75">
                The systems
              </span>
            </div>
            {/* Title */}
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-normal text-white leading-[1.02]">
              Three configurations.
              <br />
              One treatment principle.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pb-1">
            <p className="text-[14px] sm:text-[15px] text-white/90 leading-[1.55] font-normal">
              Biomedical liquid waste doesn&apos;t come from one source, and
              healthcare facilities don&apos;t operate at one scale. ECOKlien
              uses the same core electrochemical treatment approach across three
              configurations, allowing the system to be matched to the volume,
              source and treatment requirements of the facility.
            </p>
          </div>
        </div>

        {/* 3 Product Configuration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 items-stretch">
          {configs.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-[10px] border border-white/[0.18] rounded-[24px] p-3 sm:p-3.5 flex flex-col justify-between group hover:border-white/30 transition-all duration-300"
            >
              <div className="flex flex-col flex-1">
                {/* Image Container with Floating Badge, Overlay Title and Arrow Button */}
                <div className="relative w-full h-[260px] sm:h-[300px] rounded-[14px] overflow-hidden bg-[#0e1410] mb-6 shrink-0">
                  {/* Top-left Pill Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10 bg-[#f3f3f1] rounded-full px-4 py-1.5 shadow-sm">
                    <span className="text-[10px] font-mono text-[#111] font-medium items-center justify-center flex">
                      {item.version}
                    </span>
                  </div>

                  {/* Machine Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark Gradient Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

                  {/* Bottom Content inside image box: Title on Left, Green Circular Button on Right */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between gap-3">
                    <div>
                      <h3 className="text-[18px] sm:text-[20px] font-semibold text-white leading-[1.2] max-w-[280px]">
                        {item.title}
                        <span className="font-normal text-[13.5px] sm:text-[14px] text-white/90 block mt-0.5">
                          {item.subtitle}
                        </span>
                      </h3>
                    </div>

                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0a9a3a] text-white flex items-center justify-center shrink-0 shadow-md group-hover:rotate-45 transition-transform duration-300">
                      <LuArrowUpRight size={18} strokeWidth={2.2} />
                    </div>
                  </div>
                </div>

                <div className="p-3 flex flex-col flex-1 justify-between">
                  {/* Body Description */}
                  <div className="min-h-[110px] mb-6">
                    <p className="text-[14px] sm:text-[15px] text-white/85 leading-[1.55] font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Best Suited For Section */}
                  <div className="min-h-[80px] mb-6 sm:mb-8 text-[14px] sm:text-[15px] leading-[1.55]">
                    <b className="font-medium text-white block mb-1">
                      Best suited for:
                    </b>
                    <span className="text-white/85 uppercase text-[12.5px] sm:text-[13.5px] tracking-wide">
                      {item.bestSuited}
                    </span>
                  </div>

                  {/* Bottom Link */}
                  <div className="mt-auto pt-2">
                    <Link
                      href={item.link}
                      className="text-[14px] sm:text-[15px] font-semibold text-white hover:text-[#7fe09a] transition-colors inline-block"
                    >
                      [View configuration →]
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Assessment Callout Bar */}
        <div className="pt-10 border-t border-white/[0.18] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-[18px] sm:text-[20px] font-medium text-white">
              Not sure which configuration fits your facility?
            </h4>
            <p className="text-[14px] sm:text-[15px] text-white/90 leading-[1.55] font-normal">
              Tell us your approximate wastewater volume, source and operating
              requirements. We&apos;ll help identify the appropriate ECOKlien
              configuration.
            </p>
          </div>

          <Link
            href="https://ecoklien.com/contact/"
            className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-black hover:bg-neutral-900 text-white text-[14px] font-medium transition-all duration-300 shadow-md shrink-0 inline-flex items-center gap-6 group"
          >
            <span>Talk to an engineer</span>
            <LuArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
