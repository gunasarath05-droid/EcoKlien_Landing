import React from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { LuMail, LuPhone, LuMapPin, LuGlobe } from "react-icons/lu";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#FAFDFB] text-[#18251E] pt-16 pb-10 border-t border-[#E5EFE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#E3ECE6]">
          {/* Brand Info & Socials (Col 1) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="relative">
              {images.logo ? (
                <Image
                  src={images.logo}
                  alt="EcoKlien Logo"
                  width={155}
                  height={42}
                  className="object-contain"
                />
              ) : (
                <span className="text-2xl font-bold tracking-tight text-[#18251E]">
                  ECO<span className="text-[#00B050]">Klien</span>
                </span>
              )}
            </div>

            <p className="text-xs sm:text-[13.5px] text-[#526357] leading-relaxed max-w-sm">
              Advanced hybrid reactor based effluent treatment systems manufacturer and supplier. ECO Safe wastewater effluent treatment system.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#00A859] block mb-3 font-semibold">
                Follow Us
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.instagram.com/ecoklien/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-white border border-[#DCEBE1] hover:border-[#00B050] hover:bg-[#00B050] text-[#33463B] hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs hover:scale-105"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/ecoklien/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white border border-[#DCEBE1] hover:border-[#00B050] hover:bg-[#00B050] text-[#33463B] hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs hover:scale-105"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61550611929208"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-white border border-[#DCEBE1] hover:border-[#00B050] hover:bg-[#00B050] text-[#33463B] hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs hover:scale-105"
                >
                  <FaFacebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/playlist?list=PLtU5RHes_z6Jyu8ZvEszvXwVp5niEC-Hq"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-xl bg-white border border-[#DCEBE1] hover:border-[#00B050] hover:bg-[#00B050] text-[#33463B] hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs hover:scale-105"
                >
                  <FaYoutube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Details (Col 2) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.16em] text-[#00A859] mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B050]" />
              Direct Contacts
            </h4>

            {/* Email Card */}
            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#E3ECE6] shadow-2xs hover:border-[#00B050]/50 transition-colors group">
              <div className="w-9 h-9 rounded-lg bg-[#F0F7F3] border border-[#DCEBE1] flex items-center justify-center text-[#00A859] shrink-0 group-hover:bg-[#00B050] group-hover:text-white group-hover:border-[#00B050] transition-all duration-300">
                <LuMail className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-xs sm:text-[13px]">
                <span className="text-[11px] font-mono text-[#7D9185] uppercase tracking-wider mb-0.5">
                  Email Support
                </span>
                <a
                  href="mailto:sales@ecoklien.com"
                  className="text-[#203126] hover:text-[#00A859] font-medium transition-colors"
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

            {/* Phone Card */}
            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#E3ECE6] shadow-2xs hover:border-[#00B050]/50 transition-colors group">
              <div className="w-9 h-9 rounded-lg bg-[#F0F7F3] border border-[#DCEBE1] flex items-center justify-center text-[#00A859] shrink-0 group-hover:bg-[#00B050] group-hover:text-white group-hover:border-[#00B050] transition-all duration-300">
                <LuPhone className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-xs sm:text-[13px]">
                <span className="text-[11px] font-mono text-[#7D9185] uppercase tracking-wider mb-0.5">
                  Phone Numbers
                </span>
                <a
                  href="tel:+917418642999"
                  className="text-[#203126] hover:text-[#00A859] font-medium transition-colors"
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
          </div>

          {/* Registered Office (Col 3) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.16em] text-[#00A859] mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B050]" />
              Registered Office
            </h4>

            {/* Address Card */}
            <div className="p-4 rounded-xl bg-white border border-[#E3ECE6] shadow-2xs hover:border-[#00B050]/50 transition-colors group">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#F0F7F3] border border-[#DCEBE1] flex items-center justify-center text-[#00A859] shrink-0 group-hover:bg-[#00B050] group-hover:text-white group-hover:border-[#00B050] transition-all duration-300 mt-0.5">
                  <LuMapPin className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-[13px] text-[#55665B] leading-relaxed">
                  <span className="font-semibold text-[#18251E] block text-[13.5px] mb-1">
                    RT SOLUTIONS PTE LTD
                  </span>
                  <p className="text-[#55665B]">
                    NO.237, Pandan Loop, #04-07 Westech Building, Singapore – 128424
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#EEF4F0] flex items-center justify-between text-[11px] font-mono text-[#7D9185]">
                <span className="flex items-center gap-1.5 text-[#00A859] font-medium">
                  <LuGlobe className="w-3.5 h-3.5" /> Singapore Headquarters
                </span>
                <span className="bg-[#F0F7F3] text-[#00A859] px-2 py-0.5 rounded-full font-medium text-[10px]">
                  Global HQ
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6C7E74]">
          <p>© 2026 EcoKlien Technologies. All rights reserved.</p>
          
          <a
            href="https://ec4you.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00A859] transition-colors underline-offset-4 hover:underline"
          >
            Developed by <span className="font-semibold text-[#304337] hover:text-[#00A859]">ec4you.in</span>
          </a>

          <div className="flex items-center gap-5">
            <Link
              href="https://ecoklien.com/privacy-policy/"
              target="_blank"
              className="hover:text-[#00A859] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-[#CAD7CF]">•</span>
            <Link
              href="https://ecoklien.com/privacy-policy/"
              target="_blank"
              className="hover:text-[#00A859] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
