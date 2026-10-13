import React from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-[#18251E] pt-16 pb-12 border-t border-[#E7ECE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Navigation Columns */}
        <div className="flex justify-between gap-10 lg:gap-14 pb-12 border-b border-[#E7ECE9]">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="relative">
              {images.logo ? (
                <Image
                  src={images.logo}
                  alt="EcoKlien Logo"
                  width={150}
                  height={40}
                  className="object-contain"
                />
              ) : (
                <span className="text-2xl font-bold tracking-tight text-[#18251E]">
                  ECO<span className="text-[#00B050]">Klien</span>
                </span>
              )}
            </div>

            <p className="text-xs sm:text-[13.5px] text-[#526357] max-w-sm leading-relaxed">
              Advanced hybrid reactor based effluent treatment systems manufacturer and supplier. ECO Safe wastewater effluent treatment system.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.16em] text-[#00A859] mb-5">
              CONTACT INFO
            </h4>
            <div className="flex justify-between gap-4">
              {/* Emails */}
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#F0F7F3] border border-[#DCEBE1] flex items-center justify-center text-[#00A859] shrink-0 group-hover:bg-[#00B050] group-hover:text-white group-hover:border-[#00B050] transition-all duration-300 shadow-2xs">
                  <LuMail className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-xs sm:text-[13.5px]">
                  <a
                    href="mailto:sales@ecoklien.com"
                    className="text-[#243329] hover:text-[#00A859] font-medium transition-colors"
                  >
                    sales@ecoklien.com
                  </a>
                  <a
                    href="mailto:captvj@ecoklien.com"
                    className="text-[#55665B] hover:text-[#00A859] mt-0.5 transition-colors"
                  >
                    captvj@ecoklien.com
                  </a>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3 w-[180px] group">
                <div className="w-8 h-8 rounded-lg bg-[#F0F7F3] border border-[#DCEBE1] flex items-center justify-center text-[#00A859] shrink-0 group-hover:bg-[#00B050] group-hover:text-white group-hover:border-[#00B050] transition-all duration-300 shadow-2xs">
                  <LuPhone className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-xs sm:text-[13.5px]">
                  <a
                    href="tel:+917418642999"
                    className="text-[#243329] hover:text-[#00A859] font-medium transition-colors"
                  >
                    +91 7418642999
                  </a>
                  <a
                    href="tel:+6588348223"
                    className="text-[#55665B] hover:text-[#00A859] mt-0.5 transition-colors"
                  >
                    +65 8834 8223
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 group pt-0.5">
                <div className="w-8 h-8 rounded-lg bg-[#F0F7F3] border border-[#DCEBE1] flex items-center justify-center text-[#00A859] shrink-0 group-hover:bg-[#00B050] group-hover:text-white group-hover:border-[#00B050] transition-all duration-300 shadow-2xs mt-0.5">
                  <LuMapPin className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-[13px] text-[#55665B] leading-relaxed">
                  <span className="font-semibold text-[#243329] block mb-0.5">
                    RT SOLUTIONS PTE LTD
                  </span>
                  <span>
                    NO.237, Pandan Loop, #04-07 Westech Building, Singapore – 128424
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#F0F5F2] hover:bg-[#00B050] text-[#18251E] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
              >
                <FaInstagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#F0F5F2] hover:bg-[#00B050] text-[#18251E] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
              >
                <FaLinkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#F0F5F2] hover:bg-[#00B050] text-[#18251E] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
              >
                <FaFacebook className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-[#F0F5F2] hover:bg-[#00B050] text-[#18251E] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
              >
                <FaYoutube className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6C7E74]">
          <p>© 2026 EcoKlien Technologies. All rights reserved.</p>
          <a href="https://ec4you.in/" target="_blank" rel="noopener noreferrer">Developed by ec4you.in</a>
          <div className="flex gap-6">
            <Link href="https://ecoklien.com/privacy-policy/" target="_blank" className="hover:text-[#00A859] transition-colors">
              Privacy Policy
            </Link>
            <Link href="https://ecoklien.com/privacy-policy/" target="_blank" className="hover:text-[#00A859] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
