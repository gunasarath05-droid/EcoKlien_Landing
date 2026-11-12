import { Metadata } from "next";
import ContactPage from "@/views/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact - EcoKlien | Talk to Our Team or Become a Dealer",
  description:
    "Contact ECOKlien for hospital effluent and biomedical liquid waste treatment systems. Call, email, visit our Singapore office or apply to become a dealer.",
  alternates: {
    canonical: "https://ecoklien.com/contact/",
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ContactPage />
    </div>
  );
}
