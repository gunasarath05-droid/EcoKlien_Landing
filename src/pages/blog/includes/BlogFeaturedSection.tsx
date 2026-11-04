"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost, blogPosts } from "@/data/blog";
import { LuArrowUpRight } from "react-icons/lu";
import { motion } from "motion/react";

interface BlogFeaturedSectionProps {
  post?: BlogPost;
}

export default function BlogFeaturedSection({
  post = blogPosts[0],
}: BlogFeaturedSectionProps) {
  if (!post) return null;

  return (
    <section className="pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F9FAF9] border border-[#E5EBE6] rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 lg:p-10"
        >
          {/* Left: Featured Image */}
          <div className="lg:col-span-7">
            <Link
              href={`/blog/${post.slug}`}
              className="block relative aspect-[16/10] sm:aspect-[16/10] w-full rounded-[20px] sm:rounded-[24px] overflow-hidden group shadow-sm"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Right: Featured Info */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5 lg:pr-4">
            {/* Tag & Meta */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
                <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#00A859] font-medium">
                  FEATURED INSIGHT
                </span>
              </div>

              <div className="text-[11.5px] font-mono uppercase tracking-wider text-[#738479]">
                {post.category} <span className="mx-1 text-[#CBD5E1]">|</span> {post.readTime}
              </div>
            </div>

            {/* Title */}
            <Link href={`/blog/${post.slug}`} className="group block">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[34px] font-semibold text-[#0E291E] tracking-tight leading-[1.14] group-hover:text-[#00A859] transition-colors">
                {post.title}
              </h2>
            </Link>

            {/* Excerpt */}
            <p className="text-[14px] sm:text-[15px] text-[#55645C] leading-relaxed font-normal">
              {post.excerpt}
            </p>

            {/* Read Article Button */}
            <div className="pt-2">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#00A859] hover:bg-[#00924c] text-white font-medium text-[13.5px] transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] group"
              >
                <span>Read article</span>
                <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

