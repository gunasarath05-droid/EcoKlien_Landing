import { Metadata } from "next";
import FaqPage from "@/views/faq/FaqPage";
import { getLocale } from "@/i18n/server";
import { faqMessages } from "@/i18n/messages/faq";

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = faqMessages[await getLocale()];
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <FaqPage />
    </div>
  );
}
