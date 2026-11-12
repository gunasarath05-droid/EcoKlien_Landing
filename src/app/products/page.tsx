import { Metadata } from "next";
import ProductPage from "@/views/products/ProductPage";
import { defaultProduct } from "@/data/products";

export const metadata: Metadata = {
  title: `${defaultProduct.productname} - EcoKlien`,
  description: defaultProduct.hero.description,
};

export default function ProductsRoutePage() {
  return <ProductPage />;
}

