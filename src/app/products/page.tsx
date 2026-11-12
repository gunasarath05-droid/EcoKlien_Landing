import { Metadata } from "next";
import ProductsOverviewPage from "@/views/products/ProductsOverviewPage";
import { productsOverviewMessages } from "@/i18n/messages/productsOverview";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = productsOverviewMessages[await getLocale()];
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function ProductsRoutePage() {
  return <ProductsOverviewPage />;
}
