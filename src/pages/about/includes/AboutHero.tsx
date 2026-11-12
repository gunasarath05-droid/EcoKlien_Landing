"use client";

import React from "react";
import Image from "next/image";
import { images } from "@/data/images";
import { useMessages } from "@/i18n/LocaleProvider";
import { aboutMessages } from "@/i18n/messages/about";

export default function AboutHero() {
  const { hero } = useMessages(aboutMessages);

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
                {hero.eyebrow}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[32px] sm:text-[44px] lg:text-[50px] font-semibold text-[#0E291E] tracking-tight leading-[1.1]">
              {hero.title}
            </h1>

            {/* Description Paragraph */}
            <p className="text-[14px] sm:text-[15px] text-[#55645C] leading-[1.65] font-normal max-w-xl">
              {hero.description}
            </p>
            <p className="text-[13.5px] sm:text-[14.5px] text-[#2C3E35] font-bold leading-relaxed">
              {hero.tagline}
            </p>

            {/* Breadcrumb Tags */}
            <div className="pt-4 text-[10.5px] sm:text-[11px] font-mono text-[#819288] tracking-widest uppercase flex items-center gap-2 flex-wrap">
              {hero.tags.map((tag, i) => (
                <React.Fragment key={tag}>
                  {i > 0 && <span>•</span>}
                  <span>{tag}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Column: Treatment System Showcase Card */}
          <div className="lg:col-span-6">
            <div className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden aspect-[1536/1024] shadow-xl border border-[#E5ECE7] group">
              <Image
                src={images.facility || "/assests/images/home/Firefly.png"}
                alt={hero.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Pill Badge at bottom start */}
              <div className="absolute bottom-5 sm:bottom-6 start-5 sm:start-6 z-10 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 border border-black/10 shadow-sm">
                <span className="text-[10px] sm:text-[11px] font-mono text-[#18251E] font-medium tracking-wide">
                  {hero.badge}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

