"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost, blogPosts } from "@/data/blog";
import { LuArrowUpRight, LuCheck, LuCopy } from "react-icons/lu";

interface ArticleDetailBodyProps {
  post?: BlogPost;
}

export default function ArticleDetailBody({
  post = blogPosts[0],
}: ArticleDetailBodyProps) {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("point-of-generation");

  const content = post?.content || blogPosts[0].content!;
  const sections = content.sections || [];

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-8 sm:py-12 bg-white border-b border-[#EAEFEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ========================================================= */}
          {/* LEFT: STICKY TABLE OF CONTENTS & SHARE                    */}
          {/* ========================================================= */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-8 order-2 lg:order-1">
            {/* TOC */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
                <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#5D6B62]">
                  ON THIS PAGE
                </span>
              </div>

              <nav className="space-y-2 border-l border-[#E5EBE6] pl-4">
                {sections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollTo(sec.id)}
                      className={`block text-left text-[13.5px] transition-colors py-1 cursor-pointer ${
                        isActive
                          ? "text-[#00A859] font-medium"
                          : "text-[#55645C] hover:text-[#18251E]"
                      }`}
                    >
                      {sec.title}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Divider */}
            <hr className="border-[#EAEFEA]" />

            {/* Share Links */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
                <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#5D6B62]">
                  SHARE THIS INSIGHT
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] text-[#55645C] hover:text-[#00A859] transition-colors"
                >
                  <span>LinkedIn</span>
                  <LuArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 text-[13px] text-[#55645C] hover:text-[#00A859] transition-colors cursor-pointer text-left"
                >
                  {copied ? (
                    <>
                      <LuCheck className="w-3.5 h-3.5 text-[#00A859]" />
                      <span className="text-[#00A859]">Link copied!</span>
                    </>
                  ) : (
                    <>
                      <LuCopy className="w-3.5 h-3.5" />
                      <span>Copy link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </aside>

          {/* ========================================================= */}
          {/* RIGHT: MAIN ARTICLE CONTENT                               */}
          {/* ========================================================= */}
          <div className="lg:col-span-8 space-y-10 order-1 lg:order-2">
            {/* Lead Paragraph */}
            {content.leadParagraph && (
              <p className="text-[17px] sm:text-[19px] text-[#1E3026] leading-relaxed font-medium">
                {content.leadParagraph}
              </p>
            )}

            {/* Section 1: Start at the point of generation */}
            {sections[0] && (
              <div id={sections[0].id} className="space-y-4 scroll-mt-28">
                <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#0E291E] tracking-tight">
                  {sections[0].title}
                </h2>
                {sections[0].paragraphs.map((p, i) => (
                  <p key={i} className="text-[14.5px] sm:text-[15.5px] text-[#4F6055] leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {/* Callout Box */}
            {content.calloutText && (
              <div className="bg-[#F2F7F4] border-l-4 border-[#00A859] rounded-r-[20px] rounded-l-[4px] p-6 sm:p-8 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
                  <span className="text-[10.5px] font-mono uppercase tracking-[0.14em] text-[#00A859] font-medium">
                    PERSPECTIVE / IN-SITU
                  </span>
                </div>
                <p className="text-[20px] sm:text-[23px] font-semibold text-[#0E291E] tracking-tight leading-snug">
                  &ldquo;{content.calloutText}&rdquo;
                </p>
              </div>
            )}

            {/* Section 2: An electrochemical approach */}
            {sections[1] && (
              <div id={sections[1].id} className="space-y-4 scroll-mt-28">
                <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#0E291E] tracking-tight">
                  {sections[1].title}
                </h2>
                {sections[1].paragraphs.map((p, i) => (
                  <p key={i} className="text-[14.5px] sm:text-[15.5px] text-[#4F6055] leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {/* Middle Product Image Card */}
            {content.middleImage && (
              <div className="space-y-2">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-[20px] overflow-hidden bg-[#10241B] border border-[#E5EBE6]">
                  <Image
                    src={content.middleImage.src}
                    alt={content.middleImage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10.5px] font-mono uppercase tracking-wider text-[#18251E] shadow-sm">
                    {content.middleImage.badge}
                  </div>
                </div>
              </div>
            )}

            {/* Section 3: Compact does not mean one-size-fits-all */}
            {sections[2] && (
              <div id={sections[2].id} className="space-y-4 scroll-mt-28">
                <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#0E291E] tracking-tight">
                  {sections[2].title}
                </h2>
                {sections[2].paragraphs.map((p, i) => (
                  <p key={i} className="text-[14.5px] sm:text-[15.5px] text-[#4F6055] leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {/* Section 4: Before the next conversation */}
            {sections[3] && (
              <div id={sections[3].id} className="space-y-5 scroll-mt-28">
                <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#0E291E] tracking-tight">
                  {sections[3].title}
                </h2>
                {sections[3].paragraphs.map((p, i) => (
                  <p key={i} className="text-[14.5px] sm:text-[15.5px] text-[#4F6055] leading-relaxed">
                    {p}
                  </p>
                ))}

                {/* Checklist */}
                {content.checklist && (
                  <div className="space-y-3.5 pt-2">
                    {content.checklist.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8FAF8] border border-[#E9EFEA]"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#00A859] shrink-0 mt-2" />
                        <div>
                          <div className="text-[14.5px] font-semibold text-[#0E291E]">
                            {item.title}
                          </div>
                          <div className="text-[13.5px] text-[#55645C] mt-0.5">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Bottom Meta & Back Link */}
            <div className="pt-8 border-t border-[#EAEFEA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#738479]">
                TAGS: <span className="text-[#18251E]">ON-SITE TREATMENT</span> / <span className="text-[#18251E]">ELECTROCHEMICAL</span> / <span className="text-[#18251E]">HOSPITALS</span>
              </div>
              <Link
                href="/blog"
                className="text-[12px] font-mono uppercase tracking-wider text-[#00A859] hover:underline"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

