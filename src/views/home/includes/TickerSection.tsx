"use client";

import React from "react";
import { useMessages } from "@/i18n/LocaleProvider";
import { homeMessages } from "@/i18n/messages/home";

export default function TickerSection() {
  const features = useMessages(homeMessages).ticker;

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="border-y border-[#e3e7e5] py-5 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-center lg:justify-between gap-x-8 gap-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-[12px] sm:text-[13px] text-[#0e2a1e]">
              <span className="text-[#13a538] shrink-0 select-none">+</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
