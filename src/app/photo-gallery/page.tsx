import { Metadata } from "next";
import PhotoGalleryPage from "@/pages/photo-gallery/PhotoGalleryPage";

export const metadata: Metadata = {
  title: "Photo Gallery - EcoKlien | Systems & Facility Environments",
  description:
    "A visual collection of ECOKlien systems and the healthcare and laboratory environments they are designed to serve.",
};

export default function PhotoGallery() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PhotoGalleryPage />
    </div>
  );
}

