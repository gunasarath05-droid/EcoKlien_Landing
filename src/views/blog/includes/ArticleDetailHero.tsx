"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost, blogPosts } from "@/data/blog";
import { motion } from "motion/react";

interface ArticleDetailHeroProps {
  post?: BlogPost;
}

export default function ArticleDetailHero({
  post = blogPosts[0],
}: ArticleDetailHeroProps) {
  if (!post) return null;

  return (
    <section className="pt-10 sm:pt-14 pb-8 sm:pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono uppercase text-[#738479] tracking-wider mb-6">
          <Link href="/" className="hover:text-[#00B050] transition-colors">
            HOME
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#00B050] transition-colors">
            MEDIA
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#00B050] transition-colors">
            BLOG
          </Link>
          <span>/</span>
          <span className="text-[#18251E] font-medium">{post.category}</span>
        </div>

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 bg-[#00A859] shrink-0" />
          <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#00A859] font-medium">
            {post.category}
          </span>
        </div>

        {/* Title + Author Metadata Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-8"
          >
            <h1 className="text-[32px] sm:text-[44px] lg:text-[48px] font-semibold text-[#0E291E] tracking-tight leading-[1.08]">
              {post.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-4 lg:flex lg:justify-end"
          >
            <div className="text-[11.5px] font-mono uppercase tracking-wider text-[#738479] space-y-1 bg-[#F7F9F7] border border-[#E5EBE6] px-5 py-3.5 rounded-2xl inline-block lg:text-right">
              <div>AUTHOR: <span className="text-[#18251E] font-medium">ECOKLIEN</span></div>
              <div>PUBLISHED: <span className="text-[#18251E] font-medium">24 OCT 2026</span></div>
              <div className="text-[#00A859] font-medium">{post.readTime}</div>
            </div>
          </motion.div>
        </div>

        {/* Big Hero Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="space-y-3"
        >
          <div className="relative aspect-[21/9] sm:aspect-[2.3/1] w-full rounded-[20px] sm:rounded-[30px] overflow-hidden bg-[#F0F3F1] border border-[#E5EBE6] shadow-sm">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <p className="text-[10.5px] font-mono uppercase tracking-[0.16em] text-[#738479]">
            INSIGHT / TREATMENT CLOSER TO THE POINT OF LIQUID WASTE GENERATION
          </p>
        </motion.div>
      </div>
    </section>
  );
}

