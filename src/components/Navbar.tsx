"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { LuArrowUpRight, LuGlobe, LuChevronDown } from "react-icons/lu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;

    // Detect scrolled state
    if (latest > 25) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Smart auto-hide on scroll down, reveal on scroll up
    if (latest > 120 && diff > 8 && !mobileMenuOpen) {
      setHidden(true);
    } else if (diff < -8 || latest <= 50) {
      setHidden(false);
    }
  });

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    {
      title: "The systems",
      href: "https://ecoklien.com/products-biomedical-and-hospital-wastewater/",
    },
    {
      title: "About Us",
      href: "https://ecoklien.com/about/",
    },
    {
      title: "Applications",
      href: "https://ecoklien.com/the-biomedical-glossary/",
    },
    {
      title: "Media",
      href: "https://ecoklien.com/photo-gallery/",
    },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[#D7DED5]/90 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.06)]"
          : "bg-white border-b border-[#D7DED5]/80"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16 sm:h-[70px]" : "h-20"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          {images.logo ? (
            <div className="relative w-36 h-9 transition-transform group-hover:scale-[1.02]">
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
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-[15px] font-medium text-[#123D30] hover:text-[#00B050] transition-colors relative py-1 group"
            >
              <span>{item.title}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00B050] rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Section: Language Selector + Get a quote CTA */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language selector: Globe icon + en + chevron */}
          <button
            type="button"
            className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#123D30] hover:text-[#00B050] transition-colors cursor-pointer"
          >
            <LuGlobe className="w-4 h-4 text-[#123D30]" />
            <span>en</span>
            <LuChevronDown className="w-3 h-3 text-[#123D30]" />
          </button>

          {/* Get a quote button with diagonal arrow ↗ */}
          <Link
            href="https://ecoklien.com/contact/"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#123D30] hover:bg-[#009933] text-white text-sm font-medium tracking-normal transition-all duration-300 shadow-sm hover:shadow hover:scale-[1.02] group"
          >
            <span>Get a quote</span>
            <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle with Animated Bars */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-1.5 text-[#123D30] hover:bg-[#F0F5F2] transition-colors"
            aria-label="Toggle mobile menu"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="w-6 h-0.5 bg-[#123D30] rounded-full block"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-0.5 bg-[#123D30] rounded-full block"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="w-6 h-0.5 bg-[#123D30] rounded-full block"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Motion Animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-[#D7DED5]/90 bg-white/95 backdrop-blur-2xl px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.25 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[15.5px] font-medium text-[#123D30] hover:text-[#00B050] transition-colors py-1"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.25 }}
                className="pt-4 border-t border-[#E3ECE6] flex flex-col gap-3"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#526357] pb-1">
                  <span className="flex items-center gap-1.5">
                    <LuGlobe className="w-3.5 h-3.5" /> Language
                  </span>
                  <span className="font-semibold text-[#123D30] uppercase">EN</span>
                </div>

                <Link
                  href="https://ecoklien.com/contact/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 text-sm font-medium text-white bg-[#123D30] hover:bg-[#009933] rounded-full transition-all shadow-sm flex items-center justify-center gap-2 group"
                >
                  <span>Get a quote</span>
                  <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
