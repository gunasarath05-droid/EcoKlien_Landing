import React from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-[#18251E] pt-10 pb-6 border-t border-[#EDEDED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content: Left & Right Balanced Minimalist Section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 pb-8">
          {/* Left Column: Brand, Description & Dealer CTA */}
          <div className="max-w-lg space-y-4">
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

            <p className="text-[13px] sm:text-[13.5px] text-[#4A5550] leading-relaxed">
              Advanced hybrid reactor based effluent treatment systems manufacturer and supplier. ECO Safe wastewater effluent treatment system
            </p>

            <div className="pt-1">
              <Link
                href="https://ecoklien.com/contact/"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#262827] hover:bg-[#00B050] text-white text-[13px] font-medium transition-all duration-300 shadow-xs hover:shadow hover:scale-[1.02]"
              >
                Want To be a Dealer ?
              </Link>
            </div>
          </div>

          {/* Right Column: Socials, Contact Button & Policy */}
          <div className="flex flex-col items-start md:items-start space-y-3.5 shrink-0">
            <h4 className="text-[13px] font-semibold text-[#18251E] tracking-tight">
              Socials
            </h4>

            {/* Social Icons Row */}
            <div className="flex items-center gap-4 text-[#262827]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#00B050] hover:scale-115 transition-all duration-200"
              >
                <FaInstagram className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#00B050] hover:scale-115 transition-all duration-200"
              >
                <FaFacebook className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-[#00B050] hover:scale-115 transition-all duration-200"
              >
                <FaYoutube className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#00B050] hover:scale-115 transition-all duration-200"
              >
                <FaLinkedin className="w-[18px] h-[18px]" />
              </a>
            </div>

            {/* Contact Us Button */}
            <div className="pt-1">
              <Link
                href="https://ecoklien.com/contact/"
                className="inline-flex items-center justify-center px-8 py-2.5 rounded-full bg-[#262827] hover:bg-[#00B050] text-white text-[13px] font-medium transition-all duration-300 shadow-xs hover:shadow hover:scale-[1.02]"
              >
                Contact Us
              </Link>
            </div>

            {/* Privacy Policy Link */}
            <div className="pt-0.5">
              <Link
                href="https://ecoklien.com/privacy-policy/"
                target="_blank"
                className="text-[11.5px] text-[#6E7B74] hover:text-[#00B050] transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Line: Copyright & Credits */}
        <div className="pt-4 border-t border-[#F0F2F1] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11.5px] text-[#7E8B84]">
          <p>
            Copyright © 2026 ECOKlien | Powered by ECOKlien
          </p>
          <a
            href="https://ec4you.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00B050] transition-colors"
          >
            Developed by <span className="font-medium text-[#4B5851] hover:text-[#00B050]">ec4you.in</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
