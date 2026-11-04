"use client";

import React, { useState } from "react";
import VideoHeroSection from "./includes/VideoHeroSection";
import VideoFeaturedSection from "./includes/VideoFeaturedSection";
import VideoGridSection from "./includes/VideoGridSection";
import VideoModal from "./includes/VideoModal";
import BottomCtaBanner from "@/components/common/BottomCtaBanner";
import { VideoItem, featuredVideo, gridVideos } from "@/data/videos";

export default function VideosPage() {
  const [activeModalVideo, setActiveModalVideo] = useState<VideoItem | null>(null);

  const handleOpenModal = (video: VideoItem) => {
    setActiveModalVideo(video);
  };

  const handleCloseModal = () => {
    setActiveModalVideo(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <VideoHeroSection />

      {/* 2. Featured Video Section */}
      <VideoFeaturedSection
        video={featuredVideo}
        onPlayModal={handleOpenModal}
      />

      {/* 3. Grid of Video Explainer Cards */}
      <VideoGridSection
        videos={gridVideos}
        onPlayModal={handleOpenModal}
      />

      {/* 4. Bottom CTA Banner */}
      <BottomCtaBanner
        eyebrow="LET'S TALK TREATMENT"
        title="Go from an overview to your application."
        subtitle="Tell us your wastewater source, approximate volume and operating requirements. Let's discuss the right approach for your facility."
        buttonText="Talk to an engineer"
        buttonLink="https://ecoklien.com/contact/"
      />

      {/* 5. Responsive YouTube Iframe Player Modal */}
      <VideoModal
        isOpen={Boolean(activeModalVideo)}
        onClose={handleCloseModal}
        youtubeId={activeModalVideo?.youtubeId || "dQw4w9WgXcQ"}
        title={activeModalVideo?.title.replace("\n", " ")}
      />
    </div>
  );
}

