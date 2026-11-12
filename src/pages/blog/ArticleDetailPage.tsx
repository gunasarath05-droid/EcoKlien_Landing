import React from "react";
import ArticleDetailHero from "./includes/ArticleDetailHero";
import ArticleDetailBody from "./includes/ArticleDetailBody";
import ArticleRelatedSection from "./includes/ArticleRelatedSection";
import BottomCtaBanner from "@/components/common/BottomCtaBanner";
import { BlogPost, blogPosts } from "@/data/blog";

interface ArticleDetailPageProps {
  post?: BlogPost;
  /** All posts in the visitor's language (see getBlogPosts); defaults to English. */
  posts?: BlogPost[];
}

export default function ArticleDetailPage({
  post = blogPosts[0],
  posts = blogPosts,
}: ArticleDetailPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Article Hero & Banner */}
      <ArticleDetailHero post={post} />

      {/* 2. Article Body (TOC + Content + Checklist) */}
      <ArticleDetailBody post={post} />

      {/* 3. Continue the conversation (Related) */}
      <ArticleRelatedSection currentSlug={post?.slug} posts={posts} />

      {/* 4. Bottom CTA Banner (default, translated text) */}
      <BottomCtaBanner buttonLink="/contact" />
    </div>
  );
}
