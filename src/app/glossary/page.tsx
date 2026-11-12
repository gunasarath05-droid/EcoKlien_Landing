import { Metadata } from "next";
import GlossaryPage from "@/pages/glossary/GlossaryPage";
import { getLocale } from "@/i18n/server";
import { glossaryMessages } from "@/i18n/messages/glossary";

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = glossaryMessages[await getLocale()];
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: "/glossary" },
  };
}

export default function Glossary() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <GlossaryPage />
    </div>
  );
}
