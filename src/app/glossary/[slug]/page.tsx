import { Metadata } from "next";
import { notFound } from "next/navigation";
import GlossaryTermPage from "@/views/glossary/GlossaryTermPage";
import { glossaryTerms, getGlossaryTerm } from "@/data/glossary";
import { getLocale } from "@/i18n/server";
import { glossaryMessages } from "@/i18n/messages/glossary";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return glossaryTerms.map((term) => ({ slug: term.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const term = getGlossaryTerm(slug, locale);
  if (!term) return {};

  return {
    title: glossaryMessages[locale].meta.termTitle(term.title),
    description: term.cardSummary,
    alternates: { canonical: `/glossary/${term.slug}` },
  };
}

export default async function GlossaryTermRoute({ params }: PageProps) {
  const { slug } = await params;
  const term = getGlossaryTerm(slug, await getLocale());

  if (!term) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <GlossaryTermPage term={term} />
    </div>
  );
}
