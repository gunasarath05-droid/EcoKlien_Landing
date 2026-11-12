import { Metadata } from "next";
import AboutPage from "@/views/about/AboutPage";
import { getLocale } from "@/i18n/server";
import { aboutMessages } from "@/i18n/messages/about";

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = aboutMessages[await getLocale()];
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <AboutPage />
    </div>
  );
}
