import { Metadata } from "next";
import VideosPage from "@/pages/videos/VideosPage";

export const metadata: Metadata = {
  title: "Videos & Explainers - EcoKlien | See the Approach. Understand the System.",
  description:
    "Explore visual explainers on ECOKlien's treatment technology, system configurations and on-site applications.",
};

export default function VideosRoute() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <VideosPage />
    </div>
  );
}

