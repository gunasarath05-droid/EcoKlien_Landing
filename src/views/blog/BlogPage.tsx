import React from "react";
import BlogHeroSection from "./includes/BlogHeroSection";
import BlogFeaturedSection from "./includes/BlogFeaturedSection";
import BlogGridSection from "./includes/BlogGridSection";
import BottomCtaBanner from "@/components/common/BottomCtaBanner";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  const featuredPost = blogPosts.find((p) => p.isFeatured) || blogPosts[0];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <BlogHeroSection />

      {/* 2. Featured Insight Section */}
      <BlogFeaturedSection post={featuredPost} />

      {/* 3. Journal Grid Section */}
      <BlogGridSection posts={blogPosts} />

      {/* 4. Bottom CTA Banner */}
      <BottomCtaBanner
        eyebrow="LET'S TALK TREATMENT"
        title="Bring your questions. We'll bring the engineering."
        subtitle="Tell us your wastewater source, approximate volume and operating requirements. Let's discuss the right approach for your facility."
        buttonText="Talk to an engineer"
        buttonLink="https://ecoklien.com/contact/"
      />
    </div>
  );
}

