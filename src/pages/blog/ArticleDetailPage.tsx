import React from "react";
import ArticleDetailHero from "./includes/ArticleDetailHero";
import ArticleDetailBody from "./includes/ArticleDetailBody";
import ArticleRelatedSection from "./includes/ArticleRelatedSection";
import BottomCtaBanner from "@/components/common/BottomCtaBanner";
import { BlogPost, blogPosts } from "@/data/blog";

interface ArticleDetailPageProps {
  post?: BlogPost;
}

export default function ArticleDetailPage({
  post = blogPosts[0],
}: ArticleDetailPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Article Hero & Banner */}
      <ArticleDetailHero post={post} />

      {/* 2. Article Body (TOC + Content + Checklist) */}
      <ArticleDetailBody post={post} />

      {/* 3. Continue the conversation (Related) */}
      <ArticleRelatedSection currentSlug={post?.slug} />

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

