"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { LuX } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react";
import { useMessages } from "@/i18n/LocaleProvider";
import { galleryLightboxMessages } from "@/i18n/messages/gallery";

interface PhotoLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc?: string;
  title?: string;
  eyebrow?: string;
}

export default function PhotoLightboxModal({
  isOpen,
  onClose,
  imageSrc,
  title,
  eyebrow,
}: PhotoLightboxModalProps) {
  const t = useMessages(galleryLightboxMessages);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!imageSrc) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-[#0A1712] shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Title & Close button */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#0A1712] border-b border-white/10 text-white">
              <div>
                {eyebrow && (
                  <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#00A859]">
                    {eyebrow}
                  </div>
                )}
                <div className="text-[13.5px] font-medium tracking-tight text-white/90">
                  {title || t.fallbackTitle}
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label={t.close}
              >
                <LuX className="w-5 h-5" />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#050D0A]">
              <Image
                src={imageSrc}
                alt={title || t.fallbackAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain p-2"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

