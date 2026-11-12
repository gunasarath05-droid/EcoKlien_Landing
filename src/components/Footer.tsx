"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { LuInstagram, LuFacebook, LuYoutube, LuLinkedin, LuArrowUpRight } from "react-icons/lu";
import { useMessages } from "@/i18n/LocaleProvider";
import { footerMessages } from "@/i18n/messages/common";

export default function Footer() {
  const t = useMessages(footerMessages);

  return (
    <footer id="contact" className="bg-white text-[#18251E] pt-14 pb-8 border-t border-[#EDEDED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content: Left Info vs Right Socials & Contact */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-12">
          {/* Left Column: Logo -> Description -> Dealer Button */}
          <div className="max-w-xl space-y-6">
            {/* Logo */}
            <div className="relative">
              {images.logo ? (
                <Image
                  src={images.logo}
                  alt="EcoKlien Logo"
                  width={145}
                  height={38}
                  className="object-contain"
                />
              ) : (
                <span className="text-2xl font-bold tracking-tight text-[#18251E]">
                  ECO<span className="text-[#00B050]">Klien</span>
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-[13.5px] sm:text-[14px] text-[#4F5E55] leading-relaxed max-w-lg font-normal">
              {t.description}
            </p>

            {/* Dealer Button */}
            <Link
              href="/contact#dealer"
              className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-[#133A2E] hover:bg-[#009933] text-white text-[13.5px] font-medium transition-all duration-300 shadow-sm hover:shadow hover:scale-[1.02] group"
            >
              <span>{t.dealer}</span>
              <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
            </Link>
          </div>

          {/* Right Column: Socials Label -> Outline Icons -> Contact Us Button */}
          <div className="flex flex-col items-start space-y-4 shrink-0">
            <span className="text-[12px] font-mono tracking-wider text-[#78887F] uppercase">
              {t.socials}
            </span>

            {/* Outline Social Icons */}
            <div className="flex items-center gap-5 text-[#1E3B2F]">
              <a
                href="https://www.instagram.com/ecoklien/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#1E3B2F] hover:text-[#00B050] transition-all hover:scale-110"
              >
                <LuInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61550611929208"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#1E3B2F] hover:text-[#00B050] transition-all hover:scale-110"
              >
                <LuFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/playlist?list=PLtU5RHes_z6Jyu8ZvEszvXwVp5niEC-Hq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-[#1E3B2F] hover:text-[#00B050] transition-all hover:scale-110"
              >
                <LuYoutube className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/ecoklien/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#1E3B2F] hover:text-[#00B050] transition-all hover:scale-110"
              >
                <LuLinkedin className="w-6 h-6" />
              </a>
            </div>

            {/* Contact Us Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-[#133A2E] hover:bg-[#009933] text-white text-[13.5px] font-medium transition-all duration-300 shadow-sm hover:shadow hover:scale-[1.02] group"
              >
                <span>{t.contactUs}</span>
                <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Line: Copyright, Credits & Policy */}
        <div className="pt-6 border-t border-[#EAEAEA] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#78887F]">
          <p>
            {t.copyright}
          </p>

          <a
            href="https://ec4you.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00B050] transition-colors"
          >
            {t.developedBy} <span className="font-semibold text-[#3D4C43] hover:text-[#00B050]">EC4You</span>
          </a>

          <div>
            <Link
              href="/privacy-policy"
              className="hover:text-[#00A859] transition-colors"
            >
              {t.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
