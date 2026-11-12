import type { Metadata } from "next";
import HomePage from "@/views/home/HomePage";
import { getLocale } from "@/i18n/server";
import { homeMessages } from "@/i18n/messages/home";

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = homeMessages[await getLocale()];
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HomePage />
    </div>
  );
}
