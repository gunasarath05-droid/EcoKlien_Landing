import { Metadata } from "next";
import { notFound } from "next/navigation";
import GlossaryTermPage from "@/pages/glossary/GlossaryTermPage";
import { glossaryTerms, getGlossaryTerm } from "@/data/glossary";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return glossaryTerms.map((term) => ({ slug: term.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) return {};

  return {
    title: `${term.title} - EcoKlien Glossary`,
    description: term.cardSummary,
    alternates: { canonical: `/glossary/${term.slug}` },
  };
}

export default async function GlossaryTermRoute({ params }: PageProps) {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);

  if (!term) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <GlossaryTermPage term={term} />
    </div>
  );
}
