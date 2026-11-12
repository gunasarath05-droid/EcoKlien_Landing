"use client";

import React, { useState } from "react";
import VideoHeroSection from "./includes/VideoHeroSection";
import VideoFeaturedSection from "./includes/VideoFeaturedSection";
import VideoGridSection from "./includes/VideoGridSection";
import VideoModal from "./includes/VideoModal";
import BottomCtaBanner from "@/components/common/BottomCtaBanner";
import { VideoItem, getFeaturedVideo, getGridVideos } from "@/data/videos";
import { useLocale, useMessages } from "@/i18n/LocaleProvider";
import { videosMessages } from "@/i18n/messages/videos";

export default function VideosPage() {
  const { locale } = useLocale();
  const { cta } = useMessages(videosMessages);
  const featuredVideo = getFeaturedVideo(locale);
  const gridVideos = getGridVideos(locale);
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
      {/* Eyebrow, subtitle and button use the translated defaults */}
      <BottomCtaBanner title={cta.title} buttonLink="/contact" />

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

