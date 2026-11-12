import { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleDetailPage from "@/views/blog/ArticleDetailPage";
import { blogPosts } from "@/data/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} - EcoKlien Insights`,
    description: post.excerpt,
  };
}

export default async function BlogArticleRoute({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ArticleDetailPage post={post} />
    </div>
  );
}

