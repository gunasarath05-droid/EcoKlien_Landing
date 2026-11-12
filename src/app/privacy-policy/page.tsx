import type { Metadata } from "next";
import PrivacyPolicyPage from "@/views/privacy/PrivacyPolicyPage";
import { getLocale } from "@/i18n/server";
import { privacyMessages } from "@/i18n/messages/privacy";

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = privacyMessages[await getLocale()];
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PrivacyPolicyPage />
    </div>
  );
}
