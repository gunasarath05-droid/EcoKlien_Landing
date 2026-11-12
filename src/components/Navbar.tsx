"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { images } from "@/data/images";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { LuArrowUpRight, LuGlobe, LuChevronDown, LuCheck } from "react-icons/lu";
import { useLocale, useMessages } from "@/i18n/LocaleProvider";
import { navMessages } from "@/i18n/messages/common";
import { localeMeta, locales } from "@/i18n/config";

interface NavLinkItem {
  title: string;
  href: string;
}

/** A nav item is either a page link, or a dropdown parent that only opens its menu (no page of its own). */
type NavItem = (NavLinkItem & { id: string; dropdown?: undefined }) | { id: string; title: string; dropdown: NavLinkItem[] };

const LANGUAGE_MENU = "language";

export default function Navbar() {
  const pathname = usePathname();
  const t = useMessages(navMessages);
  const { locale, setLocale, isPending } = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const navLinks: NavItem[] = [
    { id: "home", title: t.home, href: "/" },
    { id: "about", title: t.about, href: "/about" },
    {
      id: "products",
      title: t.products,
      dropdown: [
        { title: t.productLinks.biomedical, href: "/products/biomedical-liquid-waste-treatment-system" },
        { title: t.productLinks.hospital, href: "/products/hospital-effluent-treatment-systems" },
        { title: t.productLinks.disinfection, href: "/products/biomedical-liquid-waste-disinfection-system" },
      ],
    },
    {
      id: "media",
      title: t.media,
      dropdown: [
        { title: t.mediaLinks.blog, href: "/blog" },
        { title: t.mediaLinks.productGallery, href: "/product-gallery" },
        { title: t.mediaLinks.photoGallery, href: "/photo-gallery" },
        { title: t.mediaLinks.videos, href: "/videos" },
        { title: t.mediaLinks.faq, href: "/faq" },
        { title: t.mediaLinks.glossary, href: "/glossary" },
      ],
    },
    { id: "contact", title: t.contact, href: "/contact" },
  ];

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 15);
  });

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
        setOpenMobileDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close a click-opened desktop dropdown on outside click or Escape
  useEffect(() => {
    if (!openDesktopDropdown) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpenDesktopDropdown(null);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDesktopDropdown(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openDesktopDropdown]);

  // Active on the page itself and on nested pages (e.g. /blog/[slug], /glossary/[slug])
  const isPathActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const languageOpen = openDesktopDropdown === LANGUAGE_MENU;

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "bg-white/92 backdrop-blur-xl border-b border-[#D7DED5]/90 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.07)]"
          : "bg-white border-b border-[#D7DED5]/80"
        }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16 sm:h-[70px]" : "h-20"
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
                sizes="144px"
                priority
                className="object-contain object-left rtl:object-right"
              />
            </div>
          ) : (
            <span className="text-2xl font-bold tracking-tight text-[#123D30]">
              ECO<span className="font-semibold text-[#123D30]">Klien</span>
            </span>
          )}
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-9">
          {navLinks.map((item) => {
            if (item.dropdown) {
              const isParentActive = item.dropdown.some((sub) => isPathActive(sub.href));
              const isOpen = openDesktopDropdown === item.id;
              const menuId = `nav-menu-${item.id}`;

              return (
                <div
                  key={item.id}
                  className="relative group py-2"
                  onMouseLeave={() => isOpen && setOpenDesktopDropdown(null)}
                >
                  {/* Dropdown parent: opens the menu only, it is not a page link */}
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    aria-controls={menuId}
                    onClick={() => setOpenDesktopDropdown(isOpen ? null : item.id)}
                    className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors relative py-1 cursor-pointer whitespace-nowrap ${
                      isParentActive || isOpen
                        ? "text-[#00B050]"
                        : "text-[#123D30] hover:text-[#00B050]"
                    }`}
                  >
                    <span>{item.title}</span>
                    <LuChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#00B050] ${
                        isOpen ? "rotate-180 text-[#00B050]" : isParentActive ? "text-[#00B050]" : "text-[#123D30]"
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 start-0 h-[2px] bg-[#00B050] rounded-full transition-all duration-300 ${
                        isParentActive || isOpen ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>

                  {/* Dropdown menu (hover-bridge via pt-2); opens on hover, keyboard focus or click */}
                  <div
                    id={menuId}
                    className={`absolute top-full start-0 pt-2 transition-all duration-200 ease-out z-50 ${
                      isOpen
                        ? "opacity-100 visible pointer-events-auto"
                        : "opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto"
                    }`}
                  >
                    <div
                      className={`bg-white rounded-xl shadow-[0_12px_40px_-8px_rgba(18,61,48,0.14)] border border-[#E3ECE6] py-2 overflow-hidden ${
                        item.id === "products" ? "w-80 sm:w-96" : "w-56"
                      }`}
                    >
                      {item.dropdown.map((sub, sIdx) => {
                        const isSubActive = isPathActive(sub.href);
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setOpenDesktopDropdown(null)}
                            aria-current={isSubActive ? "page" : undefined}
                            className={`block px-5 py-3 text-[14px] font-medium transition-colors ${
                              isSubActive
                                ? "text-[#00B050] bg-[#F6FAF7] font-semibold"
                                : "text-[#2C3E35] hover:text-[#00B050] hover:bg-[#F6FAF7]"
                            } ${
                              sIdx !== item.dropdown.length - 1
                                ? "border-b border-dashed border-[#D2E4DA]"
                                : ""
                            }`}
                          >
                            {sub.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            const isActive = isPathActive(item.href);
            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-[15px] font-medium transition-colors relative py-1 group whitespace-nowrap ${
                  isActive ? "text-[#00B050]" : "text-[#123D30] hover:text-[#00B050]"
                }`}
              >
                <span>{item.title}</span>
                <span
                  className={`absolute bottom-0 start-0 h-[2px] bg-[#00B050] rounded-full transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Language Selector + Get a quote CTA */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {/* Language selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDesktopDropdown(languageOpen ? null : LANGUAGE_MENU)}
              aria-haspopup="listbox"
              aria-expanded={languageOpen}
              aria-label={t.changeLanguage}
              className={`flex items-center gap-1.5 text-xs font-mono font-medium transition-colors cursor-pointer ${
                languageOpen ? "text-[#00B050]" : "text-[#123D30] hover:text-[#00B050]"
              } ${isPending ? "opacity-60" : ""}`}
            >
              <LuGlobe className="w-4 h-4" />
              <span>{localeMeta[locale].short}</span>
              <LuChevronDown className={`w-3 h-3 transition-transform duration-200 ${languageOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {languageOpen && (
                <motion.ul
                  role="listbox"
                  aria-label={t.language}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full end-0 mt-3 w-44 bg-white rounded-xl shadow-[0_12px_40px_-8px_rgba(18,61,48,0.14)] border border-[#E3ECE6] py-1.5 z-50"
                >
                  {locales.map((code) => {
                    const selected = code === locale;
                    return (
                      <li key={code} role="option" aria-selected={selected}>
                        <button
                          type="button"
                          lang={localeMeta[code].htmlLang}
                          onClick={() => {
                            setOpenDesktopDropdown(null);
                            setLocale(code);
                          }}
                          className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-[14px] transition-colors cursor-pointer ${
                            selected
                              ? "text-[#00B050] font-semibold bg-[#F6FAF7]"
                              : "text-[#2C3E35] hover:text-[#00B050] hover:bg-[#F6FAF7]"
                          }`}
                        >
                          <span>{localeMeta[code].label}</span>
                          <span className="flex items-center gap-2 text-[11px] font-mono uppercase text-[#738479]">
                            {selected && <LuCheck className="w-3.5 h-3.5 text-[#00B050]" />}
                            {localeMeta[code].short}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Get a quote button with diagonal arrow ↗ */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#123D30] hover:bg-[#009933] text-white text-sm font-medium tracking-normal transition-all duration-300 shadow-sm hover:shadow hover:scale-[1.02] group whitespace-nowrap"
          >
            <span>{t.getQuote}</span>
            <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle with Animated Bars */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-1.5 text-[#123D30] hover:bg-[#F0F5F2] transition-colors"
            aria-label={t.toggleMenu}
            aria-expanded={mobileMenuOpen}
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
              {navLinks.map((item, idx) => {
                if (item.dropdown) {
                  const isOpen = openMobileDropdown === item.id;
                  const isParentActive = item.dropdown.some((sub) => isPathActive(sub.href));

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05, duration: 0.25 }}
                      className="border-b border-[#F0F5F2] pb-2"
                    >
                      {/* Whole row toggles the submenu; only sub-items navigate */}
                      <button
                        type="button"
                        onClick={() => setOpenMobileDropdown(isOpen ? null : item.id)}
                        aria-expanded={isOpen}
                        className={`w-full flex items-center justify-between py-1 text-[15.5px] font-medium transition-colors cursor-pointer ${
                          isParentActive || isOpen
                            ? "text-[#00B050] font-semibold"
                            : "text-[#123D30] hover:text-[#00B050]"
                        }`}
                      >
                        <span>{item.title}</span>
                        <LuChevronDown
                          className={`w-4 h-4 m-1.5 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#00B050]" : "text-[#123D30]"
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden ps-3 mt-1.5 flex flex-col space-y-1 border-s-2 border-[#00B050]/40"
                          >
                            {item.dropdown.map((sub) => {
                              const isSubActive = isPathActive(sub.href);
                              return (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={closeMobileMenu}
                                  aria-current={isSubActive ? "page" : undefined}
                                  className={`block py-2 px-2 text-[14px] font-medium transition-colors border-b border-dashed border-[#D2E4DA]/60 last:border-b-0 ${
                                    isSubActive
                                      ? "text-[#00B050] font-semibold"
                                      : "text-[#2C3E35] hover:text-[#00B050]"
                                  }`}
                                >
                                  {sub.title}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                const isActive = isPathActive(item.href);
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      aria-current={isActive ? "page" : undefined}
                      className={`block text-[15.5px] font-medium transition-colors py-1 ${
                        isActive ? "text-[#00B050] font-semibold" : "text-[#123D30] hover:text-[#00B050]"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.25 }}
                className="pt-4 border-t border-[#E3ECE6] flex flex-col gap-3"
              >
                {/* Mobile language switch */}
                <div className="flex items-center justify-between gap-3 pb-1">
                  <span className="flex items-center gap-1.5 text-xs font-mono text-[#526357]">
                    <LuGlobe className="w-3.5 h-3.5" /> {t.language}
                  </span>
                  <div className="flex items-center gap-1 rounded-full bg-[#F0F5F2] p-1" role="radiogroup" aria-label={t.language}>
                    {locales.map((code) => {
                      const selected = code === locale;
                      return (
                        <button
                          key={code}
                          type="button"
                          role="radio"
                          aria-checked={selected}
                          lang={localeMeta[code].htmlLang}
                          onClick={() => setLocale(code)}
                          className={`px-3 py-1 rounded-full text-[12.5px] font-medium transition-colors cursor-pointer ${
                            selected ? "bg-[#123D30] text-white" : "text-[#123D30] hover:text-[#00B050]"
                          }`}
                        >
                          {localeMeta[code].label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="w-full py-3 text-sm font-medium text-white bg-[#123D30] hover:bg-[#009933] rounded-full transition-all shadow-sm flex items-center justify-center gap-2 group"
                >
                  <span>{t.getQuote}</span>
                  <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
