import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductPage from "@/pages/products/ProductPage";
import { products } from "@/data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.productname} - EcoKlien`,
    description: product.hero.description,
  };
}

export default async function ProductDetailsRoute({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}

