"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { LuArrowLeft, LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import { GlossaryBlock, GlossaryTerm, getAdjacentTerms, sortedGlossaryTerms } from "@/data/glossary";
import GlossaryRichText from "./GlossaryRichText";

const pad = (n: number) => String(n).padStart(2, "0");

const H2_CLASS = "text-[22px] sm:text-[26px] font-semibold text-[#0E291E] tracking-tight";
const P_CLASS = "text-[14.5px] sm:text-[15.5px] text-[#4F6055] leading-relaxed";
const SMALL_P_CLASS = "text-[14px] sm:text-[14.5px] text-[#55645C] leading-relaxed";
const MONO_LABEL_CLASS = "text-[11px] font-mono uppercase tracking-[0.14em] text-[#738479]";

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
      return (
        <h3 className="pt-2 text-[18px] sm:text-[19px] font-semibold text-[#0E291E] tracking-tight">
          {block.text}
        </h3>
      );

    case "definition":
      return (
        <figure className="rounded-[14px] bg-[#F2F6F1] border border-[#DEE7DD] p-5 sm:p-6 space-y-3">
          {block.label && <div className={MONO_LABEL_CLASS}>{block.label}</div>}
          <blockquote className="text-[15px] sm:text-[16px] font-medium text-[#0E291E] leading-relaxed">
            <GlossaryRichText text={block.text} />
          </blockquote>
          {block.note && <figcaption className="text-[12.5px] text-[#738479]">{block.note}</figcaption>}
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
          <ul className="space-y-4">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A859] shrink-0 mt-[9px]" />
                <span className={SMALL_P_CLASS}>
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
            <li key={i} className="grid grid-cols-[32px_1fr] sm:grid-cols-[40px_1fr] gap-2 items-start">
              <span className="pt-[3px] text-[11px] font-mono text-[#738479]">{pad(i + 1)}</span>
              <div className="space-y-1.5">
                <div className="text-[16px] sm:text-[17px] font-semibold text-[#0E291E] leading-snug">
                  {item.title}
                </div>
                {item.text && (
                  <p className={SMALL_P_CLASS}>
                    <GlossaryRichText text={item.text} />
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      );

    case "cta": {
      const isInternal = block.href.startsWith("/");
      return (
        <div className="rounded-[16px] bg-[#EEF3EC] border border-[#DCE4DA] p-6 sm:p-8 space-y-3">
          <p className="text-[19px] sm:text-[22px] font-semibold text-[#0E291E] tracking-tight leading-snug">
            {block.title}
          </p>
          {block.text && <p className={`${SMALL_P_CLASS} max-w-2xl`}>{block.text}</p>}
          <div className="pt-1">
            <Link
              href={block.href}
              {...(isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#00A859] hover:text-[#0E291E] transition-colors group"
            >
              <span>{block.label}</span>
              <LuArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      );
    }

    case "faq":
      return (
        <div className="divide-y divide-[#EAEFEA]">
          {block.items.map((item, i) => (
            <div key={i} className="py-6 first:pt-1 space-y-2">
              <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#0E291E] tracking-tight">
                {item.question}
              </h3>
              <p className={SMALL_P_CLASS}>
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
export default function GlossaryTermBody({
  term = sortedGlossaryTerms[0],
}: {
  term?: GlossaryTerm;
}) {
  const { prev, next } = getAdjacentTerms(term?.slug || "");

  const sections = useMemo(() => {
    if (!term) return [];
    const list = term.sections.map((s) => ({ id: s.id, title: s.title, navTitle: s.navTitle ?? s.title }));
    if (term.sources.length) {
      list.push({ id: "sources", title: "Sources & further reading", navTitle: "Sources" });
    }
    return list;
  }, [term]);

  const [active, setActive] = useState(sections[0]?.id);

  // Highlight the section currently in view
  useEffect(() => {
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    // The last (short) section never reaches the observer band, so mark it once its end is in view
    const lastId = sections[sections.length - 1].id;
    const onScroll = () => {
      const last = document.getElementById(lastId);
      if (last && last.getBoundingClientRect().bottom <= window.innerHeight) setActive(lastId);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [sections]);

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!term) return null;

  return (
    <section className="pb-16 sm:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT: sticky guide nav + contact card */}
          <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-28 space-y-8">
            <div className="space-y-4">
              <div className={MONO_LABEL_CLASS}>IN THIS GUIDE</div>
              <nav className="space-y-3">
                {sections.map((s, i) => {
                  const isActive = active === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => scrollTo(s.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={`flex items-start gap-2.5 text-left text-[13.5px] leading-snug transition-colors cursor-pointer w-full ${
                        isActive ? "text-[#00A859] font-medium" : "text-[#55645C] hover:text-[#0E291E]"
                      }`}
                    >
                      <span className="font-mono text-[11px] shrink-0 pt-0.5">{pad(i + 1)}</span>
                      <span>{s.navTitle}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="pt-8 border-t border-[#EAEFEA] space-y-3.5">
              <h3 className="text-[20px] font-semibold text-[#0E291E] leading-tight tracking-tight">
                Clarity for your
                <br />
                facility.
              </h3>
              <p className="text-[13px] text-[#55645C] leading-relaxed max-w-[240px]">
                Have a question about your waste stream or treatment requirements? Speak with our team.
              </p>
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#123D30] hover:bg-[#009933] text-white text-[13px] font-medium transition-all shadow-xs group"
                >
                  <span>Contact Us</span>
                  <LuArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* RIGHT: guide content */}
          <article className="lg:col-span-9 space-y-14 sm:space-y-16">
            {term.sections.map((section, i) => (
              <div key={section.id} id={section.id} className="scroll-mt-28 space-y-5">
                <div className="space-y-2">
                  <div className={MONO_LABEL_CLASS}>{pad(i + 1)} / TERM GUIDE</div>
                  <h2 className={H2_CLASS}>{section.title}</h2>
                </div>
                {section.blocks.map((block, j) => (
                  <Block key={j} block={block} />
                ))}
              </div>
            ))}

            {term.sources.length > 0 && (
              <div id="sources" className="scroll-mt-28 space-y-5">
                <div className="space-y-2">
                  <div className={MONO_LABEL_CLASS}>{pad(term.sections.length + 1)} / TERM GUIDE</div>
                  <h2 className={H2_CLASS}>Sources &amp; further reading</h2>
                </div>
                <ul className="space-y-3">
                  {term.sources.map((s) => (
                    <li key={s.label}>
                      {s.href ? (
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[13.5px] text-[#55645C] hover:text-[#00A859] transition-colors"
                        >
                          <span>{s.label}</span>
                          <LuArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                        </a>
                      ) : (
                        <span className="text-[13.5px] text-[#55645C]">{s.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
                <p className="text-[12.5px] text-[#738479] leading-relaxed max-w-2xl pt-2">
                  This glossary is for general awareness. Treatment, discharge and reuse must meet applicable local
                  regulations and facility-specific requirements.
                </p>
              </div>
            )}

            {/* Previous / Next */}
            <div className="pt-6 flex items-center justify-between gap-6">
              {prev ? (
                <Link href={`/glossary/${prev.slug}`} className="group space-y-1.5">
                  <span className={`block ${MONO_LABEL_CLASS}`}>PREVIOUS TERM</span>
                  <span className="flex items-center gap-1.5 text-[15px] sm:text-[16px] font-semibold text-[#0E291E] group-hover:text-[#00A859] transition-colors">
                    <LuArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                    <span>{prev.title}</span>
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link href={`/glossary/${next.slug}`} className="group space-y-1.5 text-right">
                  <span className={`block ${MONO_LABEL_CLASS}`}>NEXT TERM</span>
                  <span className="flex items-center justify-end gap-1.5 text-[15px] sm:text-[16px] font-semibold text-[#0E291E] group-hover:text-[#00A859] transition-colors">
                    <span>{next.title}</span>
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
