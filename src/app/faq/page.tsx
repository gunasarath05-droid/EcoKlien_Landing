import { Metadata } from "next";
import FaqPage from "@/views/faq/FaqPage";

export const metadata: Metadata = {
  title: "FAQ - EcoKlien | Useful Answers & Practical Guidance",
  description:
    "Useful answers on ECOKlien, its electrochemical treatment approach and practical questions around your facility.",
};

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <FaqPage />
    </div>
  );
}

