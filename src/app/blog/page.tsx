import { Metadata } from "next";
import BlogPage from "@/pages/blog/BlogPage";

export const metadata: Metadata = {
  title: "Blog & Insights - EcoKlien | Clearer Thinking. Better Treatment.",
  description:
    "Ideas and practical perspectives on biomedical liquid waste, electrochemical technology and treatment at the source.",
};

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <BlogPage />
    </div>
  );
}

