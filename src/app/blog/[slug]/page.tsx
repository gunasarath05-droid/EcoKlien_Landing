import { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleDetailPage from "@/views/blog/ArticleDetailPage";
import { blogPosts, getBlogPosts } from "@/data/blog";
import { getLocale } from "@/i18n/server";
import { blogMessages } from "@/i18n/messages/blog";

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
  const locale = await getLocale();
  const post = getBlogPosts(locale).find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title}${blogMessages[locale].meta.articleTitleSuffix}`,
    description: post.excerpt,
  };
}

export default async function BlogArticleRoute({ params }: PageProps) {
  const { slug } = await params;
  const posts = getBlogPosts(await getLocale());
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ArticleDetailPage post={post} posts={posts} />
    </div>
  );
}
