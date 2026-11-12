import type { Locale } from "@/i18n/config";
import { localizeList } from "@/i18n/localize";
import { faqCategories as faqCategoriesEs } from "./i18n/es/faq";
import { faqCategories as faqCategoriesAr } from "./i18n/ar/faq";

// English FAQ content (source of truth). Translations: src/data/i18n/{es,ar}/faq.ts, keyed by category `id`.

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  topicNumber: string;
  topicName: string;
  heading: string;
  items: FaqItem[];
}

/** Translatable fields of a category; `items` replaces the English list wholesale. */
export type FaqCategoryText = Pick<FaqCategory, "id" | "topicName" | "heading" | "items">;

export const faqCategories: FaqCategory[] = [
  {
    id: "essentials",
    topicNumber: "01",
    topicName: "The essentials",
    heading: "Understanding ECOKlien",
    items: [
      {
        question: "What is ECOKlien?",
        answer:
          "ECOKlien is a biomedical liquid waste treatment system for healthcare facilities and laboratories. It uses advanced electrochemical technology to treat and disinfect potentially contaminated liquid waste, with a compact, modular and plug-and-play design for on-site treatment.\n\nThe platform is configured around the source, volume and treatment requirements of the facility, rather than a one-size-fits-all approach.",
      },
      {
        question: "Which facilities is ECOKlien designed for?",
        answer:
          "ECOKlien is purpose-built for hospitals, medical laboratories, diagnostic centres, clinical procedure areas, ambulatory surgical centres, and biomedical research facilities that generate hazardous or potentially infectious liquid waste.",
      },
      {
        question: "What types of liquid waste can ECOKlien treat?",
        answer:
          "The system is configured to treat diverse clinical waste streams including blood, body fluids, urine, sputum, laboratory chemicals, dialysis waste, and procedural washings.",
      },
    ],
  },
  {
    id: "technology",
    topicNumber: "02",
    topicName: "Treatment technology",
    heading: "How the approach works",
    items: [
      {
        question: "How do electrocoagulation and electro-oxidation work together?",
        answer:
          "Electrocoagulation destabilises contaminants and aggregates them into larger flocs, making separation easier. The resulting solids are separated from the liquid, reducing the pollutant load. Further electrochemical treatment and disinfection act on remaining organic contaminants and microorganisms.\n\nThe treatment pathway is discussed in relation to the incoming wastewater and the requirements of the application.",
      },
      {
        question: "Does ECOKlien use conventional chemical dosing?",
        answer:
          "No. ECOKlien operates without dependent chemical dosing. Instead of adding chlorine or chemical coagulants, it utilizes electrochemical reactions to generate in-situ oxidants that sanitize effluent safely.",
      },
      {
        question: "Can treated water be discharged or reused immediately?",
        answer:
          "Yes. Depending on the configuration and specific facility requirements, treated wastewater meets regulatory environmental norms for safe municipal drainage or non-potable on-site utility reuse.",
      },
    ],
  },
  {
    id: "systems",
    topicNumber: "03",
    topicName: "Systems & applications",
    heading: "Finding the right fit",
    items: [
      {
        question: "What are the three system configurations?",
        answer:
          "ECOKlien offers three core configurations: 1) Point-of-Source Biomedical Liquid Waste Treatment Systems for smaller or decentralised departments; 2) Decentralised Hospital Effluent Treatment Systems for large continuous flows; and 3) Dedicated Disinfection Systems for targeted pathogen elimination.",
      },
      {
        question: "Can treatment take place within our facility?",
        answer:
          "Yes. Systems are compact and modular, allowing installation inside utility rooms, basement plant areas, or directly adjacent to departmental discharge points without complex construction.",
      },
      {
        question: "Can a disinfection system form part of a wider treatment process?",
        answer:
          "Yes. ECOKlien can serve as a primary dedicated treatment unit or integrate directly as a pre-treatment or polishing stage within existing central wastewater treatment infrastructure.",
      },
    ],
  },
  {
    id: "planning",
    topicNumber: "04",
    topicName: "Planning & enquiries",
    heading: "Starting a facility discussion",
    items: [
      {
        question: "What information should we share with the technical team?",
        answer:
          "Useful starting points include estimated daily liquid waste volumes, primary source departments (labs, surgery, dialysis), current disposal methods, and available installation footprint.",
      },
      {
        question: "How are installation and utility requirements determined?",
        answer:
          "Our engineering team evaluates your facility layout, electrical supply, gravity drainage channels, and operational hours to recommend a plug-and-play setup tailored to your site.",
      },
      {
        question: "Where can we request a brochure or discuss a configuration?",
        answer:
          "You can request brochures, technical datasheets, or schedule an engineering consultation via the Contact Us button or by submitting an enquiry form on our site.",
      },
    ],
  },
];


/** FAQ categories in the given language (untranslated categories stay in English). */
export function getFaqCategories(locale: Locale): FaqCategory[] {
  return localizeList(locale, faqCategories, { es: faqCategoriesEs, ar: faqCategoriesAr }, "id");
}
