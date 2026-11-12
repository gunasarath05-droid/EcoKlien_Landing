import { Metadata } from "next";
import ProductGalleryPage from "@/views/product-gallery/ProductGalleryPage";

export const metadata: Metadata = {
  title: "Product Gallery - EcoKlien | System Configurations & Models",
  description:
    "Explore ECOKlien's electrochemical systems, from point-of-source biomedical liquid waste treatment to hospital effluent treatment.",
};

export default function ProductGallery() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ProductGalleryPage />
    </div>
  );
}

