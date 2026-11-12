"use client";

import React, { useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import Image from "next/image";
import { images } from "@/data/images";
import { useMessages } from "@/i18n/LocaleProvider";
import { aboutMessages } from "@/i18n/messages/about";

export default function AboutEnquiryForm() {
  const { enquiry: t } = useMessages(aboutMessages);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Dark Green Water Texture Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[420px] sm:min-h-[480px] h-full p-8 sm:p-12 flex flex-col justify-between text-white shadow-xl">
                {/* Background Fluid Texture */}
                <Image
                  src={images.enquiry}
                  alt={t.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/50 pointer-events-none" />

                {/* Card Top Eyebrow */}
                <div className="relative z-10 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00A859] inline-block" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-white/80">
                    {t.cardEyebrow}
                  </span>
                </div>

                {/* Card Middle Headings */}
                <div className="relative z-10 space-y-4 my-auto py-8">
                  <h3 className="text-[32px] sm:text-[40px] font-normal text-white tracking-tight leading-[1.1]">
                    {t.cardTitleLines[0]}
                    <br />
                    {t.cardTitleLines[1]}
                  </h3>
                  <p className="text-[14px] text-white/85 leading-relaxed max-w-sm font-normal">
                    {t.cardDescription}
                  </p>
                </div>

                {/* Card Bottom Tag */}
                <div className="relative z-10 text-[10.5px] font-mono text-white/70 tracking-widest uppercase">
                  {t.cardFooterTag}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center bg-white p-2 sm:p-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="w-2 h-2 bg-[#00A859] inline-block" />
        <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-[#5D6B62]">
          {t.eyebrow}
        </span>
      </div>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-[#F0F8F3] border border-[#00A859]/30 text-center space-y-3">
          <div className="w-12 h-12 bg-[#00A859] text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
            ✓
          </div>
          <h4 className="text-lg font-semibold text-[#18251E]">
            {t.successTitle}
          </h4>
          <p className="text-sm text-[#5D6B62]">
            {t.successMessage}
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", phone: "" });
            }}
            className="text-xs text-[#00A859] underline hover:text-[#008f4c] cursor-pointer pt-2 inline-block"
          >
            {t.successReset}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-[13px] font-medium text-[#18251E] mb-2">
              {t.name}*
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t.namePlaceholder}
              className="w-full h-12 px-4 rounded-xl border border-[#DCE4DF] bg-white focus:outline-none focus:border-[#00B050] focus:ring-1 focus:ring-[#00B050] transition-all text-[14px] text-[#18251E]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[13px] font-medium text-[#18251E] mb-2">
              {t.email}*
            </label>
            <input
              type="email"
              dir="ltr"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={t.emailPlaceholder}
              className="w-full h-12 px-4 rounded-xl border border-[#DCE4DF] bg-white focus:outline-none focus:border-[#00B050] focus:ring-1 focus:ring-[#00B050] transition-all text-[14px] text-[#18251E] rtl:text-right"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-[13px] font-medium text-[#18251E] mb-2">
              {t.phone}
            </label>
            <input
              type="tel"
              dir="ltr"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={t.phonePlaceholder}
              className="w-full h-12 px-4 rounded-xl border border-[#DCE4DF] bg-white focus:outline-none focus:border-[#00B050] focus:ring-1 focus:ring-[#00B050] transition-all text-[14px] text-[#18251E] rtl:text-right"
            />
          </div>

          {/* Submit Row */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-[12px] text-[#78887F] font-normal">
              {t.requiredFields}
            </span>
            <button
              type="submit"
              className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full bg-[#00A859] hover:bg-[#008f4c] text-white font-medium text-[14px] transition-all duration-300 shadow-sm hover:shadow hover:scale-[1.02] cursor-pointer group"
            >
              <span>{t.submit}</span>
              <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
            </button>
          </div>
        </form>
      )}
    </div>
          </div>
        </div>
      </section>
    
  );
}

