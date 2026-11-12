import { Metadata } from "next";
import BlogPage from "@/views/blog/BlogPage";
import { getLocale } from "@/i18n/server";
import { blogMessages } from "@/i18n/messages/blog";
import { getBlogPosts } from "@/data/blog";

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = blogMessages[await getLocale()];
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function Blog() {
  const posts = getBlogPosts(await getLocale());
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <BlogPage posts={posts} />
    </div>
  );
}
