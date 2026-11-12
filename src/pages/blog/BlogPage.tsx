import React from "react";
import BlogHeroSection from "./includes/BlogHeroSection";
import BlogFeaturedSection from "./includes/BlogFeaturedSection";
import BlogGridSection from "./includes/BlogGridSection";
import BottomCtaBanner from "@/components/common/BottomCtaBanner";
import { BlogPost, blogPosts } from "@/data/blog";

interface BlogPageProps {
  /** Posts in the visitor's language (see getBlogPosts); defaults to English. */
  posts?: BlogPost[];
}

export default function BlogPage({ posts = blogPosts }: BlogPageProps) {
  const featuredPost = posts.find((p) => p.isFeatured) || posts[0];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <BlogHeroSection />

      {/* 2. Featured Insight Section */}
      <BlogFeaturedSection post={featuredPost} />

      {/* 3. Journal Grid Section */}
      <BlogGridSection posts={posts} />

      {/* 4. Bottom CTA Banner (default, translated text) */}
      <BottomCtaBanner buttonLink="/contact" />
    </div>
  );
}
