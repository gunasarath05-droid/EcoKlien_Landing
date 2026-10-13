"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#D7DED5]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          {images.logo ? (
            <div className="relative w-36 h-9">
              <Image
                src={images.logo}
                alt="ECOKlien"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          ) : (
            <span className="text-2xl font-bold tracking-tight text-[#123D30]">
              ECO<span className="font-semibold text-[#123D30]">Klien</span>
            </span>
          )}
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-9">
          <Link
            href="https://ecoklien.com/products-biomedical-and-hospital-wastewater/"
            className="text-md font-medium text-[#123D30] hover:text-[#00B050] transition-colors"
          >
            The systems
          </Link>
          <Link
            href="https://ecoklien.com/about/"
            className="text-md font-medium text-[#123D30] hover:text-[#00B050] transition-colors"
          >
            About Us
          </Link>
          <Link
            href="https://ecoklien.com/the-biomedical-glossary/"
            className="text-md font-medium text-[#123D30] hover:text-[#00B050] transition-colors"
          >
            Applications
          </Link>
          <Link
            href="https://ecoklien.com/photo-gallery/"
            className="text-md font-medium text-[#123D30] hover:text-[#00B050] transition-colors"
          >
            Media
          </Link>
        </nav>

        {/* Right Section: Language Selector + Get a quote CTA */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language selector: Globe icon + en + chevron */}
          <button
            type="button"
            className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#123D30] hover:text-[#00B050] transition-colors"
          >
            <svg
              className="w-4 h-4 text-[#123D30]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0a13.9 13.9 0 01-4-9 13.9 13.9 0 014-9m0 18a13.9 13.9 0 004-9 13.9 13.9 0 00-4-9m-9 9h18"
              />
            </svg>
            <span>en</span>
            <svg
              className="w-3 h-3 text-[#123D30]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Get a quote button with diagonal arrow ↗ */}
          <Link
            href="https://ecoklien.com/contact/"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full bg-[#123D30] hover:bg-[#009933] text-white text-sm font-medium tracking-normal transition-all duration-300 shadow-sm hover:shadow group"
          >
            <span>Get a quote</span>
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#123D30] hover:bg-[#F0F3ED] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#D7DED5] bg-white px-6 py-5 space-y-4 shadow-lg animate-in fade-in">
          <Link
            href="#technology"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#123D30]"
          >
            The systems
          </Link>
          <Link
            href="#approach"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#647069]"
          >
            About Us
          </Link>
          <Link
            href="#applications"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#647069]"
          >
            Applications
          </Link>
          <Link
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#647069]"
          >
            Media
          </Link>
          <div className="pt-3 border-t border-[#D7DED5] flex flex-col gap-3">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 text-sm font-medium text-white bg-[#123D30] hover:bg-[#009933] rounded-full transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>Get a quote</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

