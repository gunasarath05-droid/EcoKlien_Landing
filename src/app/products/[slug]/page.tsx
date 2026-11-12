import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductPage from "@/views/products/ProductPage";
import { products, getProduct } from "@/data/products";
import { getLocale } from "@/i18n/server";

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
  const product = getProduct(slug, await getLocale());
  if (!product) return {};

  return {
    title: `${product.productname} - EcoKlien`,
    description: product.hero.description,
  };
}

export default async function ProductDetailsRoute({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug, await getLocale());

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}
