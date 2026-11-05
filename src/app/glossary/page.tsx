import { Metadata } from "next";
import GlossaryPage from "@/pages/glossary/GlossaryPage";

export const metadata: Metadata = {
  title: "Glossary - EcoKlien | The Biomedical Glossary",
  description:
    "Key terms around biomedical liquid waste, hospital wastewater, antimicrobial resistance, BOD, sludge and waterborne diseases.",
  alternates: { canonical: "/glossary" },
};

export default function Glossary() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <GlossaryPage />
    </div>
  );
}
