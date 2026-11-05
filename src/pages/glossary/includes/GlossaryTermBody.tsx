"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { LuArrowLeft, LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import { GlossaryBlock, GlossaryTerm, getAdjacentTerms } from "@/data/glossary";
import GlossaryRichText from "./GlossaryRichText";

const P_CLASS = "text-[13.5px] sm:text-[14px] text-[#647069] leading-[1.75]";
const pad = (n: number) => String(n).padStart(2, "0");

/* ---------------------------------------------------------------- */
/* Block renderer                                                   */
/* ---------------------------------------------------------------- */
function Block({ block }: { block: GlossaryBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className={P_CLASS}>
          <GlossaryRichText text={block.text} />
        </p>
      );

    case "h3":
      return <h3 className="pt-2 text-[16px] sm:text-[17px] font-medium text-[#123D30]">{block.text}</h3>;

    case "definition":
      return (
        <figure className="rounded-[6px] bg-[#F3F7F2] border border-[#E1E9DF] px-5 py-5 sm:px-6 space-y-2.5">
          {block.label && (
            <div className="text-[9.5px] font-mono uppercase tracking-wider text-[#738479]">{block.label}</div>
          )}
          <blockquote className="text-[14px] sm:text-[14.5px] text-[#123D30] leading-relaxed">
            <GlossaryRichText text={block.text} />
          </blockquote>
          {block.note && <figcaption className="text-[11.5px] text-[#738479]">{block.note}</figcaption>}
        </figure>
      );

    case "bullets":
      return (
        <div className="space-y-4">
          {block.intro && (
            <p className={P_CLASS}>
              <GlossaryRichText text={block.intro} />
            </p>
          )}
          <ul className="space-y-3.5">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A859] shrink-0 mt-[9px]" />
                <span className={P_CLASS}>
                  <GlossaryRichText text={item} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "numbered":
      return (
        <ol className="space-y-7 pt-1">
          {block.items.map((item, i) => (
            <li key={i} className="grid grid-cols-[32px_1fr] sm:grid-cols-[40px_1fr] gap-2">
              <span className="pt-[3px] text-[9.5px] font-mono text-[#738479]">{pad(i + 1)}</span>
              <div className="space-y-1.5">
                <div className="text-[14.5px] sm:text-[15px] font-medium text-[#123D30] leading-snug">{item.title}</div>
                {item.text && (
                  <p className="text-[13px] sm:text-[13.5px] text-[#647069] leading-relaxed">
                    <GlossaryRichText text={item.text} />
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      );

    case "cta":
      return (
        <div className="rounded-[6px] bg-[#EEF3EC] border border-[#E1E9DF] px-5 py-6 sm:px-6 sm:py-7 space-y-3">
          <p className="text-[18px] sm:text-[20px] font-medium text-[#123D30] tracking-tight leading-snug">{block.title}</p>
          {block.text && <p className="text-[13px] sm:text-[13.5px] text-[#647069] leading-relaxed max-w-2xl">{block.text}</p>}
          <a
            href={block.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[13px] font-medium text-[#009933] hover:text-[#123D30] transition-colors group"
          >
            {block.label}
            <LuArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      );

    case "faq":
      return (
        <div className="divide-y divide-[#E6ECE5]">
          {block.items.map((item, i) => (
            <div key={i} className="py-6 first:pt-1 space-y-2">
              <h3 className="text-[14.5px] sm:text-[15px] font-medium text-[#123D30]">{item.question}</h3>
              <p className="text-[13px] sm:text-[13.5px] text-[#647069] leading-relaxed">
                <GlossaryRichText text={item.answer} />
              </p>
            </div>
          ))}
        </div>
      );
  }
}

/* ---------------------------------------------------------------- */
/* Body                                                             */
/* ---------------------------------------------------------------- */
export default function GlossaryTermBody({ term }: { term: GlossaryTerm }) {
  const { prev, next } = getAdjacentTerms(term.slug);

  const sections = useMemo(() => {
    const list = term.sections.map((s) => ({ id: s.id, title: s.title, navTitle: s.navTitle ?? s.title }));
    if (term.sources.length) list.push({ id: "sources", title: "Sources & further reading", navTitle: "Sources" });
    return list;
  }, [term]);

  const [active, setActive] = useState(sections[0]?.id);

  // Highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="pb-14 sm:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* LEFT: sticky guide nav */}
          <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-28 space-y-10">
            <div className="space-y-4">
              <div className="text-[9.5px] font-mono uppercase tracking-wider text-[#738479]">IN THIS GUIDE</div>
              <nav className="space-y-2.5">
                {sections.map((s, i) => {
                  const isActive = active === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => scrollTo(s.id)}
                      className={`flex items-start gap-2 text-left text-[12px] leading-snug transition-colors cursor-pointer ${
                        isActive ? "text-[#009933]" : "text-[#647069] hover:text-[#123D30]"
                      }`}
                    >
                      <span className="font-mono text-[11px] shrink-0">{pad(i + 1)}</span>
                      <span>{s.navTitle}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="pt-8 border-t border-[#E6ECE5] space-y-3">
              <h3 className="text-[18px] font-medium text-[#123D30] leading-tight tracking-tight">
                Clarity for your
                <br />
                facility.
              </h3>
              <p className="text-[12px] text-[#647069] leading-relaxed max-w-[220px]">
                Have a question about your waste stream or treatment requirements? Speak with our team.
              </p>
              <div className="pt-2">
                <a
                  href="https://ecoklien.com/contact/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#123D30] hover:bg-[#009933] text-white text-[12px] font-medium transition-colors group"
                >
                  Contact Us
                  <LuArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT: guide content */}
          <article className="lg:col-span-8 lg:col-start-5 space-y-14 sm:space-y-16">
            {term.sections.map((section, i) => (
              <div key={section.id} id={section.id} className="scroll-mt-28 space-y-5">
                <div className="space-y-2">
                  <div className="text-[9.5px] font-mono uppercase tracking-wider text-[#738479]">
                    {pad(i + 1)} / TERM GUIDE
                  </div>
                  <h2 className="text-[22px] sm:text-[24px] font-medium text-[#123D30] tracking-tight">{section.title}</h2>
                </div>
                {section.blocks.map((block, j) => (
                  <Block key={j} block={block} />
                ))}
              </div>
            ))}

            {term.sources.length > 0 && (
              <div id="sources" className="scroll-mt-28 space-y-5">
                <div className="space-y-2">
                  <div className="text-[9.5px] font-mono uppercase tracking-wider text-[#738479]">
                    {pad(term.sections.length + 1)} / TERM GUIDE
                  </div>
                  <h2 className="text-[22px] sm:text-[24px] font-medium text-[#123D30] tracking-tight">Sources &amp; further reading</h2>
                </div>
                <ul className="space-y-2.5">
                  {term.sources.map((s) => (
                    <li key={s.label}>
                      {s.href ? (
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-start gap-1 text-[12px] text-[#647069] hover:text-[#009933] transition-colors"
                        >
                          {s.label}
                          <LuArrowUpRight className="w-3 h-3 mt-0.5 shrink-0" />
                        </a>
                      ) : (
                        <span className="text-[12px] text-[#647069]">{s.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
                <p className="text-[11.5px] text-[#738479] leading-relaxed max-w-2xl">
                  This glossary is for general awareness. Treatment, discharge and reuse must meet applicable local regulations and facility-specific requirements.
                </p>
              </div>
            )}

            {/* Prev / Next */}
            <div className="pt-8 border-t border-[#E6ECE5] flex items-start justify-between gap-6">
              {prev ? (
                <Link href={`/glossary/${prev.slug}`} className="group space-y-1.5">
                  <span className="block text-[9px] font-mono uppercase tracking-wider text-[#738479]">PREVIOUS TERM</span>
                  <span className="flex items-center gap-1.5 text-[14px] sm:text-[15px] font-medium text-[#123D30] group-hover:text-[#009933] transition-colors">
                    <LuArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link href={`/glossary/${next.slug}`} className="group space-y-1.5 text-right">
                  <span className="block text-[9px] font-mono uppercase tracking-wider text-[#738479]">NEXT TERM</span>
                  <span className="flex items-center justify-end gap-1.5 text-[14px] sm:text-[15px] font-medium text-[#123D30] group-hover:text-[#009933] transition-colors">
                    {next.title}
                    <LuArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
