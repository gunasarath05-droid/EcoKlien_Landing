import { Metadata } from "next";
import ContactPage from "@/pages/contact/ContactPage";
import { getLocale } from "@/i18n/server";
import { contactMessages } from "@/i18n/messages/contact";

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = contactMessages[await getLocale()];
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: "https://ecoklien.com/contact/",
    },
  };
}

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ContactPage />
    </div>
  );
}
