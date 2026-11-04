"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost, blogPosts } from "@/data/blog";
import { LuArrowUpRight } from "react-icons/lu";

interface ArticleRelatedSectionProps {
  currentSlug?: string;
  posts?: BlogPost[];
}

export default function ArticleRelatedSection({
  currentSlug = "why-treatment-belongs-closer-to-the-source",
  posts = blogPosts,
}: ArticleRelatedSectionProps) {
  // Show 3 posts excluding current
  const related = posts.filter((p) => p.slug !== currentSlug).slice(0, 3);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between gap-4 pb-6 border-b border-[#EAEFEA] mb-8">
          <h2 className="text-[26px] sm:text-[30px] font-semibold text-[#0E291E] tracking-tight">
            Continue the conversation.
          </h2>
          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#738479]">
            {String(related.length).padStart(2, "0")} INSIGHTS
          </div>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {related.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Image */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="block relative aspect-[16/10] w-full rounded-[18px] overflow-hidden bg-[#F0F3F1] border border-[#E5EBE6]"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                {/* Tag */}
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#738479]">
                  {post.category} <span className="mx-1 text-[#CBD5E1]">|</span> {post.readTime}
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`} className="block">
                  <h3 className="text-[18px] font-semibold text-[#0E291E] tracking-tight leading-snug group-hover:text-[#00A859] transition-colors">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-[13px] text-[#55645C] leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

              {/* Read link */}
              <div className="pt-4 mt-auto">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#18251E] group-hover:text-[#00A859] transition-colors"
                >
                  <span>Read article</span>
                  <LuArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

