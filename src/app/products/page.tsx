import { Metadata } from "next";
import ProductPage from "@/views/products/ProductPage";
import { getDefaultProduct } from "@/data/products";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const product = getDefaultProduct(await getLocale());
  return {
    title: `${product.productname} - EcoKlien`,
    description: product.hero.description,
  };
}

export default async function ProductsRoutePage() {
  const product = getDefaultProduct(await getLocale());
  return <ProductPage product={product} />;
}
