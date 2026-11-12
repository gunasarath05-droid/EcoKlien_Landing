import type { Metadata } from "next";
import LandingPage from "@/pages/landing";
import { getLocale } from "@/i18n/server";
import { landingMessages } from "@/i18n/messages/landing";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { meta } = landingMessages[locale];
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: "https://ecoklien.com/",
      siteName: "EcoKlien",
      images: [{ url: "/icon.png", width: 512, height: 512, alt: "EcoKlien" }],
      locale: { en: "en_US", es: "es_ES", ar: "ar_AR" }[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/icon.png"],
    },
  };
}

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <LandingPage />
    </div>
  );
}
