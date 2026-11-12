import { Metadata } from "next";
import ProductGalleryPage from "@/views/product-gallery/ProductGalleryPage";
import { getLocale } from "@/i18n/server";
import { productGalleryMessages } from "@/i18n/messages/gallery";

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = productGalleryMessages[await getLocale()];
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function ProductGallery() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ProductGalleryPage />
    </div>
  );
}
