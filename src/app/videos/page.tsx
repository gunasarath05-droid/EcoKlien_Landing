import { Metadata } from "next";
import VideosPage from "@/views/videos/VideosPage";
import { getLocale } from "@/i18n/server";
import { videosMessages } from "@/i18n/messages/videos";

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = videosMessages[await getLocale()];
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function VideosRoute() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <VideosPage />
    </div>
  );
}
