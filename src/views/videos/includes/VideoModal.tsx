"use client";

import React, { useEffect } from "react";
import { LuX, LuArrowUpRight } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeId: string;
  title?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  youtubeId,
  title,
}: VideoModalProps) {
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
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Title and Actions */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#0A1712] border-b border-white/10 text-white">
              <span className="text-[13px] font-medium tracking-tight truncate max-w-md text-white/90">
                {title || "ECOKlien Video"}
              </span>
              <div className="flex items-center gap-3">
                {youtubeId && (
                  <a
                    href={`https://www.youtube.com/watch?v=${youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11.5px] font-mono uppercase tracking-wider text-white/70 hover:text-[#00A859] transition-colors"
                  >
                    <span>YouTube</span>
                    <LuArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close video"
                >
                  <LuX className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Responsive 16:9 YouTube iframe Container */}
            <div className="relative aspect-[16/9] w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title={title || "YouTube video player"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

