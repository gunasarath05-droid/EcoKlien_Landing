import { Metadata } from "next";
import PhotoGalleryPage from "@/pages/photo-gallery/PhotoGalleryPage";
import { getLocale } from "@/i18n/server";
import { photoGalleryMessages } from "@/i18n/messages/gallery";

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = photoGalleryMessages[await getLocale()];
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function PhotoGallery() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PhotoGalleryPage />
    </div>
  );
}
