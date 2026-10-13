import React from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-[#18251E] pt-10 pb-6 border-t border-[#EDEDED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 3-Column Content */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8">
          {/* Col 1: Logo & Dealer Button */}
          <div className="space-y-4 shrink-0">
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

            <div>
              <Link
                href="https://ecoklien.com/contact/"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1E2421] hover:bg-[#00B050] text-white text-[13px] font-medium transition-all duration-300 shadow-xs hover:shadow hover:scale-[1.02] group"
              >
                <span>Want To be a Dealer ?</span>
                <LuArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
            </div>
          </div>

          {/* Col 2: Middle Description */}
          <div className="max-w-md">
            <p className="text-[13px] sm:text-[13.5px] text-[#4F5E55] leading-relaxed">
              Advanced hybrid reactor based effluent treatment systems manufacturer and supplier. ECO Safe wastewater effluent treatment system
            </p>
          </div>

          {/* Col 3: Socials */}
          <div className="space-y-3 shrink-0">
            <h4 className="text-[14px] md:text-[18px] font-semibold text-[#18251E] tracking-tight">
              Socials
            </h4>

            <div className="flex items-center gap-3 text-[#26332B]">
              <a
                href="https://www.instagram.com/ecoklien/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#F4F7F5] hover:bg-[#00B050] hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs hover:scale-110"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61550611929208"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#F4F7F5] hover:bg-[#00B050] hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs hover:scale-110"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/playlist?list=PLtU5RHes_z6Jyu8ZvEszvXwVp5niEC-Hq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#F4F7F5] hover:bg-[#00B050] hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs hover:scale-110"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/ecoklien/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-[#F4F7F5] hover:bg-[#00B050] hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs hover:scale-110"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line: Copyright, Credits & Policy */}
        <div className="pt-4 border-t border-[#F0F2F0] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11.5px] text-[#78887F]">
          <p>
            Copyright © 2026 ECOKlien | Powered by ECOKlien
          </p>

          <a
            href="https://ec4you.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00B050] transition-colors"
          >
            Developed by <span className="font-semibold text-[#3D4C43] hover:text-[#00B050]">ec4you.in</span>
          </a>

          <div>
            <Link
              href="https://ecoklien.com/privacy-policy/"
              target="_blank"
              className="hover:text-[#00A859] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
