import { images } from "./images";
import type { Locale } from "@/i18n/config";
import type { TranslatedLocale } from "@/i18n/localize";
import { products as productsEs } from "./i18n/es/products";
import { products as productsAr } from "./i18n/ar/products";

export interface TreatmentStage {
  id: string;
  title: string;
  description: string;
  iconType: "coagulation" | "disinfection" | "oxidation" | "residual";
}

export interface CloserStep {
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  iconType:
    | "healthcare"
    | "laboratory"
    | "treatment"
    | "discharge"
    | "generate"
    | "treat"
    | "disinfect"
    | "reuse";
}

/** Model tier shown in the configurations table; the label is translated in src/i18n/messages/products.ts. */
export type ModelType = "economy" | "mini" | "commercial";

export interface ModelRow {
  model: string;
  /** Treatment capacity in litres per day (LPD), formatted for display. */
  capacity: string;
  type?: ModelType;
}

/** Treatment performance: a parameter's value in the incoming liquid waste vs. the treated water. */
export interface ParameterRow {
  parameter: string;
  liquidWaste: string;
  treatedWater: string;
}

export interface FacilityType {
  title: string;
  subtitle: string;
}

export interface FluidStream {
  title: string;
  theme: "light" | "dark";
  position: string;
}

export interface ProductDetail {
  id: number;
  slug: string;
  productname: string;
  eyebrow: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    image: string;
  };
  sourcesSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    sources: string[];
    description: string[];
  };
  technologySection: {
    eyebrow: string;
    heading: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    image: string;
    imageBadge: string;
    stages: TreatmentStage[];
  };
  closerSection: {
    eyebrow: string;
    headingLeft: string;
    headingRight: string;
    steps: CloserStep[];
    footerNote: string;
  };
  fluidsSection: {
    eyebrow: string;
    heading: string;
    footerText: string;
    fluidImage: string;
    streams: FluidStream[];
  };
  applicationsSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    facilities: FacilityType[];
    image1: string;
    image1Title: string;
    image2: string;
    image2Title: string;
  };
  configurationsSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    models: ModelRow[];
    /** Optional performance table (COD, TSS, BOD…); hidden when absent. */
    parameters?: ParameterRow[];
    ctaCard: {
      image: string;
      buttonText: string;
      buttonLink: string;
    };
    footerNote: string;
  };
}

export const products: ProductDetail[] = [
  {
    id: 1,
    slug: "biomedical-liquid-waste-treatment-system",
    productname: "Biomedical Liquid Waste Treatment Systems",
    eyebrow: "ADVANCED BIOMEDICAL LIQUID WASTE TREATMENT",
    hero: {
      eyebrow: "ADVANCED BIOMEDICAL LIQUID WASTE TREATMENT",
      title: "Biomedical Liquid Waste Treatment System",
      subtitle: "Treat biomedical liquid waste. At the source.",
      description:
        "An electrochemical treatment system designed to address biomedical liquid waste containing blood, body fluids, urine, sputum and other potentially contaminated streams, in a compact, automated treatment system.",
      ctaText: "Enquire",
      ctaLink: "/contact",
      secondaryCtaText: "View Brochure + Datasheet",
      secondaryCtaLink: "#configurations",
      image: images.productBML,
    },
    sourcesSection: {
      eyebrow: "The problem",
      heading: "Biomedical liquid waste doesn't come from one place.",
      subtitle: "Purpose-built for the places where care and science happen.",
      sources: [
        "Laboratories",
        "Diagnostic Areas",
        "Procedure Rooms",
        "Clinical Facilities",
      ],
      description: [
        "Hospitals and healthcare facilities generate liquid waste across laboratories, diagnostic areas, operation theatres, dialysis centres and other clinical environments. These streams can contain biological contaminants, organic pollutants and other substances that require appropriate treatment before discharge or reuse.",
        "The challenge isn't simply collecting the waste.",
        "It's treating it safely, effectively and practically.",
      ],
    },
    technologySection: {
      eyebrow: "The technology",
      heading: "Meet ECOKlien's BML — One system. Multiple treatment stages.",
      description:
        "ECOKlien uses advanced electrochemical technology to treat and disinfect potentially contaminated liquid waste on site, with a compact, modular system designed to reduce dependence on conventional chemical treatment and large, complex infrastructure.",
      ctaText: "View Configurations",
      ctaLink: "#configurations",
      image: images.machineBML,
      imageBadge: "ECOKlien / ON-SITE HYBRID SYSTEM",
      stages: [
        {
          id: "coagulation",
          title: "Electrocoagulation",
          description:
            "Contaminants are destabilised and aggregated into larger flocs, making them easier to separate from the liquid.",
          iconType: "coagulation",
        },
        {
          id: "disinfection",
          title: "Disinfection",
          description:
            "Electrochemical disinfection acts on microorganisms, reducing pathogen load without requiring hazardous chemical handling.",
          iconType: "disinfection",
        },
        {
          id: "oxidation",
          title: "Oxidation",
          description:
            "Electrochemical oxidation breaks down stubborn organic contaminants and chemical compounds present in biomedical waste streams.",
          iconType: "oxidation",
        },
        {
          id: "residual",
          title: "Residual reduction",
          description:
            "Advanced multi-stage processing significantly reduces chemical residues and environmental impact before discharge.",
          iconType: "residual",
        },
      ],
    },
    closerSection: {
      eyebrow: "THE APPROACH",
      headingLeft: "Bring treatment closer to where the waste is generated.",
      headingRight:
        "Conventional wastewater treatment can require contaminated liquid waste to be collected and moved through a centralised treatment process. ECOKlien provides another approach.",
      steps: [
        {
          tag: "STEP 1",
          title: "Generate",
          subtitle: "Point of source",
          description:
            "Biomedical liquid waste is produced across the facility.",
          iconType: "generate",
        },
        {
          tag: "STEP 2",
          title: "Treat",
          subtitle: "In-situ entry",
          description:
            "The waste enters the ECOKlien treatment system.",
          iconType: "treat",
        },
        {
          tag: "STEP 3",
          title: "Separate & disinfect",
          subtitle: "Electrochemical stage",
          description:
            "Electrochemical treatment addresses pollutants and microbial contamination.",
          iconType: "disinfect",
        },
        {
          tag: "STEP 4",
          title: "Reuse / discharge / further treatment",
          subtitle: "Eco Safe output",
          description:
            "The treated output proceeds according to the application and applicable requirements.",
          iconType: "reuse",
        },
      ],
      footerNote:
        "A compact treatment pathway designed around the realities of healthcare facilities.",
    },
    fluidsSection: {
      eyebrow: "WHAT IT TREATS",
      heading: "From blood to body fluids.",
      footerText:
        "Treatment can be configured according to the characteristics of the incoming wastewater and the requirements of the application.",
      fluidImage: images.liquid1,
      streams: [
        {
          title: "Laboratory processes",
          theme: "light",
          position: "top-4 left-4 sm:top-8 sm:left-12 lg:top-8 lg:left-16",
        },
        {
          title: "Dialysis waste",
          theme: "light",
          position: "top-14 right-4 sm:top-20 sm:right-10 lg:top-20 lg:right-14",
        },
        {
          title: "Sputum",
          theme: "dark",
          position: "top-[52%] left-2 sm:left-8 lg:left-12",
        },
        {
          title: "Urine",
          theme: "dark",
          position: "top-[48%] right-4 sm:right-10 lg:right-16",
        },
        {
          title: "Body fluids",
          theme: "dark",
          position: "bottom-24 right-8 sm:bottom-28 sm:right-20 lg:bottom-28 lg:right-28",
        },
        {
          title: "Blood",
          theme: "dark",
          position: "bottom-8 left-[24%] sm:bottom-10 sm:left-[30%] lg:bottom-12 lg:left-[34%]",
        },
      ],
    },
    applicationsSection: {
      eyebrow: "Applications",
      heading: "For the environments that can't stand still.",
      subtitle:
        "Designed for healthcare facilities and laboratories generating biomedical liquid waste.",
      image1: images.application.app1,
      image1Title: "Healthcare facilities",
      image2: images.application.app2,
      image2Title: "Medical laboratories",
      facilities: [
        {
          title: "Hospitals & Clinics",
          subtitle: "Biomedical liquid waste from clinical care.",
        },
        {
          title: "Medical laboratories",
          subtitle: "Liquid waste generated by laboratory processes.",
        },
        {
          title: "Diagnostic centres",
          subtitle: "For facilities carrying out diagnostic testing.",
        },
        {
          title: "Surgical facilities",
          subtitle: "Liquid waste from surgical care environments.",
        },
        {
          title: "Research laboratories",
          subtitle: "For biomedical research and laboratory activities.",
        },
        {
          title: "Urgent care clinics",
          subtitle: "Point-of-care environments",
        },
        {
          title: "Specialist care centres",
          subtitle: "Specialised clinical workflows",
        },
        {
          title: "Ambulatory surgical centres",
          subtitle: "For outpatient procedural areas",
        },
        {
          title: "Nursing homes",
          subtitle: "For facilities providing 24/7 medical support",
        },
      ],
    },
    configurationsSection: {
      eyebrow: "SYSTEM CONFIGURATIONS",
      heading: "Choose the system around your application.",
      subtitle:
        "Healthcare facilities differ in their wastewater volume, characteristics and treatment requirements. ECOKlien is available in multiple configurations designed for different applications.",
      models: [
        { model: "ECOKlien BML MINI", capacity: "50", type: "economy" },
        { model: "ECOKlien BML MINI 1", capacity: "100", type: "economy" },
        { model: "ECOKlien BML MINI 2", capacity: "200", type: "economy" },
        { model: "ECOKlien BML 6", capacity: "600", type: "mini" },
        { model: "ECOKlien BML 12", capacity: "1,200", type: "mini" },
        { model: "ECOKlien BML 48", capacity: "4,800", type: "commercial" },
        { model: "ECOKlien BML 72", capacity: "7,200", type: "commercial" },
        { model: "ECOKlien BML 120", capacity: "12,000", type: "commercial" },
        { model: "ECOKlien BML 240", capacity: "24,000", type: "commercial" },
      ],
      parameters: [
        { parameter: "COD (mg/l)", liquidWaste: "600", treatedWater: "250" },
        { parameter: "TSS (mg/l)", liquidWaste: "300", treatedWater: "50" },
        { parameter: "BOD (mg/l)", liquidWaste: "250", treatedWater: "30" },
      ],
      ctaCard: {
        image: images.landingHero,
        buttonText: "Download Brochure",
        buttonLink: "/contact",
      },
      footerNote:
        "Request the brochure and discuss installation, utilities, waste composition and operating requirements with the technical team.",
    },
  },
  {
    id: 2,
    slug: "hospital-effluent-treatment-systems",
    productname: "Hospital Effluent Treatment Systems",
    eyebrow: "DECENTRALISED FACILITY TREATMENT",
    hero: {
      eyebrow: "DECENTRALISED FACILITY TREATMENT",
      title: "Hospital Effluent Treatment Systems",
      subtitle: "Continuous large volume hospital wastewater treatment",
      description:
        "For healthcare facilities generating larger and more continuous volumes of biomedical liquid waste. A compact treatment system designed to integrate into existing facility infrastructure while providing controlled treatment before discharge or further handling.",
      ctaText: "Explore",
      ctaLink: "#technology",
      image: images.product.product1,
    },
    sourcesSection: {
      eyebrow: "The challenge",
      heading: "Treating multi-department continuous wastewater.",
      subtitle: "Engineered for complex hospital wastewater streams.",
      sources: [
        "Inpatient Wards",
        "ICU & Emergency",
        "Central Laboratories",
        "Dialysis Centers",
      ],
      description: [
        "Hospital effluent contains a mixture of organic matter, active pharmaceutical ingredients, and microbiological agents.",
        "Traditional biological STP systems struggle with toxic disinfectants and antibiotics.",
        "ECOKlien hybrid electrochemical systems ensure rapid destabilization and destruction of resistant contaminants.",
      ],
    },
    technologySection: {
      eyebrow: "The technology",
      heading: "Continuous High-Capacity Hybrid Treatment",
      description:
        "Combines electrocoagulation and electro-oxidation to treat complex multi-department hospital effluent reliably.",
      ctaText: "Select System",
      ctaLink: "#configurations",
      image: images.product.product1,
      imageBadge: "ECOKlien / FACILITY TREATMENT SYSTEM",
      stages: [
        {
          id: "coagulation",
          title: "Electrocoagulation",
          description:
            "Destabilises suspended solids, pharmaceuticals, and organic contaminants into separable flocs.",
          iconType: "coagulation",
        },
        {
          id: "disinfection",
          title: "Pathogen Destruction",
          description:
            "In-situ oxidant generation eliminates multi-drug resistant hospital bacteria without dangerous chemicals.",
          iconType: "disinfection",
        },
        {
          id: "oxidation",
          title: "Advanced Oxidation",
          description:
            "Breaks down refractory antibiotics, endocrine disruptors, and chemical residues.",
          iconType: "oxidation",
        },
        {
          id: "residual",
          title: "Sludge Minimization",
          description:
            "Produces up to 70% less sludge compared to conventional chemical coagulation treatment.",
          iconType: "residual",
        },
      ],
    },
    closerSection: {
      eyebrow: "INTEGRATED SYSTEM",
      headingLeft: "Seamless integration into hospital utility infrastructure.",
      headingRight:
        "Modular footprints allow installation in existing basements or utility rooms.",
      steps: [
        {
          tag: "INFLOW",
          title: "Hospital Waste Streams",
          subtitle: "Combined Effluent",
          description: "Effluent collected from clinical and non-clinical hospital wards.",
          iconType: "healthcare",
        },
        {
          tag: "BUFFER",
          title: "Equalization Unit",
          subtitle: "Flow Regulation",
          description: "Homogenizes pH and organic loading before electrochemical reactors.",
          iconType: "laboratory",
        },
        {
          tag: "CORE",
          title: "Hybrid Electrochemical Cell",
          subtitle: "Continuous Processing",
          description: "High-throughput modular reactors treating effluent continuously.",
          iconType: "treatment",
        },
        {
          tag: "OUTFLOW",
          title: "Safe Reuse or Discharge",
          subtitle: "Regulatory Standard",
          description: "Treated water suitable for flushing, horticulture, or drain discharge.",
          iconType: "discharge",
        },
      ],
      footerNote:
        "Custom configurations engineered to meet PCB (Pollution Control Board) standards.",
    },
    fluidsSection: {
      eyebrow: "EFFLUENT SPECTRUM",
      heading: "Comprehensive hospital wastewater treatment.",
      footerText:
        "Capable of neutralizing diverse chemical, biological, and pharmaceutical agents.",
      fluidImage: images.liquid1,
      streams: [
        { title: "Dialysis Waste", theme: "light", position: "top-8 left-16" },
        { title: "Lab Chemical Waste", theme: "light", position: "top-20 right-14" },
        { title: "Disinfectant Washings", theme: "dark", position: "top-[52%] left-12" },
        { title: "Pathology Effluent", theme: "dark", position: "top-[48%] right-16" },
        { title: "OT Liquid Residues", theme: "dark", position: "bottom-28 right-28" },
        { title: "General Bio-effluent", theme: "dark", position: "bottom-12 left-[34%]" },
      ],
    },
    applicationsSection: {
      eyebrow: "Target Facilities",
      heading: "Engineered for scale and continuous operation.",
      subtitle: "Ideal for mid to large tier hospitals, healthcare networks, and medical campuses.",
      image1: images.application.app1,
      image1Title: "Multi-specialty Hospitals",
      image2: images.application.app2,
      image2Title: "Medical Research Campuses",
      facilities: [
        { title: "General Hospitals", subtitle: "100+ to 1000+ bedded facilities" },
        { title: "Multi-specialty Clinics", subtitle: "Surgical and inpatient branches" },
        { title: "Medical Colleges", subtitle: "Hospital and academic laboratories" },
        { title: "Cancer Treatment Centers", subtitle: "Chemotherapy & radiation effluent" },
        { title: "Trauma Centers", subtitle: "Continuous high-load procedural waste" },
        { title: "Dialysis Chains", subtitle: "High-volume saline and acid fluid streams" },
      ],
    },
    configurationsSection: {
      eyebrow: "CAPACITIES",
      heading: "Scalable capacities for facility demands.",
      subtitle: "Tailored to daily effluent generation volume.",
      models: [
        { model: "ECOKlien H-5K", capacity: "5,000" },
        { model: "ECOKlien H-10K", capacity: "10,000" },
        { model: "ECOKlien H-25K", capacity: "25,000" },
        { model: "ECOKlien H-50K", capacity: "50,000" },
        { model: "ECOKlien H-75K", capacity: "75,000" },
        { model: "ECOKlien H-100K", capacity: "100,000" },
      ],
      ctaCard: {
        image: images.landingHero,
        buttonText: "Schedule Facility Audit",
        buttonLink: "/contact",
      },
      footerNote:
        "*Full turnkey civil, electrical, and automation packages provided upon request.",
    },
  },
  {
    id: 3,
    slug: "biomedical-liquid-waste-disinfection-system",
    productname: "Biomedical Liquid Waste Disinfection System",
    eyebrow: "POINT OF SOURCE SYSTEM",
    hero: {
      eyebrow: "POINT OF SOURCE SYSTEM",
      title: "Biomedical Liquid Waste Disinfection System",
      subtitle: "Rapid microbial disinfection without harmful chemicals",
      description:
        "An electrochemical disinfection system for microbial contamination in biomedical liquid waste. Compact and adaptable, where required as a dedicated treatment integrated into a broader wastewater treatment process.",
      ctaText: "Explore",
      ctaLink: "#technology",
      image: images.product.product2,
    },
    sourcesSection: {
      eyebrow: "The microbial risk",
      heading: "Neutralizing pathogen load at point of origin.",
      subtitle: "Eliminating biosafety hazards before drainage.",
      sources: [
        "Microbiology Labs",
        "Infectious Disease Wards",
        "Blood Banks",
        "Sample Preparation Areas",
      ],
      description: [
        "Pathogenic microorganisms present severe infection hazards to plumbing networks and sanitation workers.",
        "Manual chlorine or hypochlorite dosing creates toxic organochlorines and hazardous fumes.",
        "ECOKlien disinfection system uses in-situ electrochemical radicals for immediate pathogen neutralization.",
      ],
    },
    technologySection: {
      eyebrow: "The technology",
      heading: "Electrochemical Microbial Disinfection",
      description:
        "Harnesses mixed oxidant generators to eliminate bacteria, viruses, and fungi with rapid contact times.",
      ctaText: "Select System",
      ctaLink: "#configurations",
      image: images.product.product2,
      imageBadge: "ECOKlien / DISINFECTION UNIT",
      stages: [
        {
          id: "coagulation",
          title: "Pre-clarification",
          description: "Stabilizes suspended bio-load to optimize UV and electrochemical penetration.",
          iconType: "coagulation",
        },
        {
          id: "disinfection",
          title: "Electro-Chlorination",
          description: "Generates active chlorine and hydroxyl radicals from natural salts in the liquid.",
          iconType: "disinfection",
        },
        {
          id: "oxidation",
          title: "Membrane Lysis",
          description: "Electrochemical cell ruptures microbial cell walls, preventing resistance formation.",
          iconType: "oxidation",
        },
        {
          id: "residual",
          title: "Zero Chemical Footprint",
          description: "Leaves no persistent toxic chemical residues in the treated effluent stream.",
          iconType: "residual",
        },
      ],
    },
    closerSection: {
      eyebrow: "BIOSAFETY",
      headingLeft: "Point-of-source disinfection for high-risk zones.",
      headingRight: "Directly connected to laboratory sinks and clinical discharge units.",
      steps: [
        {
          tag: "CAPTURE",
          title: "Sink / Drain Interface",
          subtitle: "Immediate Inflow",
          description: "Direct plumbed connection to laboratory biosafety sinks.",
          iconType: "healthcare",
        },
        {
          tag: "SENSING",
          title: "Automated Level Sensor",
          subtitle: "Instant Trigger",
          description: "System activates automatically upon liquid entry.",
          iconType: "laboratory",
        },
        {
          tag: "DISINFECTION",
          title: "Rapid Contact Cell",
          subtitle: "99.99% Kill Rate",
          description: "Electrochemical radical generation eliminates microbial load in seconds.",
          iconType: "treatment",
        },
        {
          tag: "SAFE DRAIN",
          title: "Sanitized Drain Outflow",
          subtitle: "Neutralized Effluent",
          description: "Non-hazardous liquid flows safely into standard sewer plumbing.",
          iconType: "discharge",
        },
      ],
      footerNote:
        "Complies with WHO and CPCB biomedical waste handling disinfection guidelines.",
    },
    fluidsSection: {
      eyebrow: "MICROBIAL TARGETS",
      heading: "Broad-spectrum pathogen elimination.",
      footerText:
        "Effective against bacteria, spore-formers, lipid and non-lipid viruses.",
      fluidImage: images.liquid1,
      streams: [
        { title: "Bacterial Cultures", theme: "light", position: "top-8 left-16" },
        { title: "Viral Media", theme: "light", position: "top-20 right-14" },
        { title: "Clinical Sputum", theme: "dark", position: "top-[52%] left-12" },
        { title: "Blood Specimens", theme: "dark", position: "top-[48%] right-16" },
        { title: "Centrifuge Waste", theme: "dark", position: "bottom-28 right-28" },
        { title: "Serological Fluids", theme: "dark", position: "bottom-12 left-[34%]" },
      ],
    },
    applicationsSection: {
      eyebrow: "Dedicated Applications",
      heading: "Designed for biosafety-sensitive environments.",
      subtitle: "Where immediate microbial neutralization is paramount.",
      image1: images.application.app1,
      image1Title: "Pathology Departments",
      image2: images.application.app2,
      image2Title: "Microbiology Labs",
      facilities: [
        { title: "Microbiology Labs", subtitle: "Culture preparation & discard sinks" },
        { title: "Blood Bank Washrooms", subtitle: "Component separation & washing" },
        { title: "Virology Testing Units", subtitle: "Bio-containment and sample discard" },
        { title: "Isolation Ward Sinks", subtitle: "Contagious pathogen wastewater" },
      ],
    },
    configurationsSection: {
      eyebrow: "CAPACITIES",
      heading: "Compact plug-and-play disinfection units.",
      subtitle: "Wall-mount and under-counter models available.",
      models: [
        { model: "ECOKlien D-100", capacity: "100" },
        { model: "ECOKlien D-250", capacity: "250" },
        { model: "ECOKlien D-500", capacity: "500" },
        { model: "ECOKlien D-1000", capacity: "1,000" },
        { model: "ECOKlien D-2000", capacity: "2,000" },
      ],
      ctaCard: {
        image: images.landingHero,
        buttonText: "Request Disinfection Demo",
        buttonLink: "/contact",
      },
      footerNote:
        "*Available in IP65 splash-proof medical grade stainless steel enclosures.",
    },
  },
];

export const defaultProduct = products[0];

/* ------------------------------------------------------------------------------------------------
 * Translations (see src/i18n/README.md)
 * English above is the source of truth. src/data/i18n/{es,ar}/products.ts hold only the text of
 * each product, keyed by `slug`. Sections mix text with images/links, so each section is merged
 * over its English counterpart, and lists of objects (stages, steps, streams, facilities) are
 * merged item-by-item by position — images, links, icons and layout values are kept from English.
 * (A deeper merge than localizeList's shallow one, so no image/link has to be repeated per language.)
 * Model and parameter tables (model names, LPD figures, COD/TSS/BOD values) are not translated;
 * model types are translated in src/i18n/messages/products.ts.
 * ---------------------------------------------------------------------------------------------- */

type Text<T, K extends keyof T> = Partial<Pick<T, K>>;
type S = ProductDetail;

/** The translatable text of one product. Every field is optional; missing text stays English. */
export interface ProductTranslation {
  slug: string;
  productname?: string;
  eyebrow?: string;
  hero?: Text<S["hero"], "eyebrow" | "title" | "subtitle" | "description" | "ctaText" | "secondaryCtaText">;
  sourcesSection?: Text<S["sourcesSection"], "eyebrow" | "heading" | "subtitle" | "sources" | "description">;
  technologySection?: Text<S["technologySection"], "eyebrow" | "heading" | "description" | "ctaText" | "imageBadge"> & {
    stages?: Pick<TreatmentStage, "title" | "description">[];
  };
  closerSection?: Text<S["closerSection"], "eyebrow" | "headingLeft" | "headingRight" | "footerNote"> & {
    steps?: Pick<CloserStep, "tag" | "title" | "subtitle" | "description">[];
  };
  fluidsSection?: Text<S["fluidsSection"], "eyebrow" | "heading" | "footerText"> & {
    streams?: Pick<FluidStream, "title">[];
  };
  applicationsSection?: Text<S["applicationsSection"], "eyebrow" | "heading" | "subtitle" | "image1Title" | "image2Title"> & {
    facilities?: FacilityType[];
  };
  configurationsSection?: Text<S["configurationsSection"], "eyebrow" | "heading" | "subtitle" | "footerNote"> & {
    ctaCard?: Pick<S["configurationsSection"]["ctaCard"], "buttonText">;
  };
}

const productTranslations: Record<TranslatedLocale, readonly ProductTranslation[]> = {
  es: productsEs,
  ar: productsAr,
};

/** Merge translated list items over the English ones by position (English order and fields win for anything missing). */
function mergeItems<T extends object>(english: readonly T[], translated?: readonly Partial<T>[]): T[] {
  return english.map((item, i) => ({ ...item, ...(translated?.[i] ?? {}) }));
}

function translateProduct(en: ProductDetail, tr: ProductTranslation): ProductDetail {
  const { technologySection: tech, closerSection: closer, fluidsSection: fluids } = tr;
  const { applicationsSection: apps, configurationsSection: config } = tr;
  return {
    ...en,
    productname: tr.productname ?? en.productname,
    eyebrow: tr.eyebrow ?? en.eyebrow,
    hero: { ...en.hero, ...tr.hero },
    sourcesSection: { ...en.sourcesSection, ...tr.sourcesSection },
    technologySection: {
      ...en.technologySection,
      ...tech,
      stages: mergeItems(en.technologySection.stages, tech?.stages),
    },
    closerSection: {
      ...en.closerSection,
      ...closer,
      steps: mergeItems(en.closerSection.steps, closer?.steps),
    },
    fluidsSection: {
      ...en.fluidsSection,
      ...fluids,
      streams: mergeItems(en.fluidsSection.streams, fluids?.streams),
    },
    applicationsSection: {
      ...en.applicationsSection,
      ...apps,
      facilities: mergeItems(en.applicationsSection.facilities, apps?.facilities),
    },
    configurationsSection: {
      ...en.configurationsSection,
      ...config,
      ctaCard: { ...en.configurationsSection.ctaCard, ...config?.ctaCard },
    },
  };
}

/** All products in the given language (untranslated products/fields fall back to English). */
export function getProducts(locale: Locale): ProductDetail[] {
  if (locale === "en") return [...products];
  const bySlug = new Map(productTranslations[locale].map((t) => [t.slug, t]));
  return products.map((product) => {
    const tr = bySlug.get(product.slug);
    return tr ? translateProduct(product, tr) : product;
  });
}

/** One product by slug in the given language, or undefined if the slug does not exist. */
export function getProduct(slug: string, locale: Locale): ProductDetail | undefined {
  return getProducts(locale).find((p) => p.slug === slug);
}

/** The default product (shown on /products) in the given language. */
export function getDefaultProduct(locale: Locale): ProductDetail {
  return getProduct(defaultProduct.slug, locale) ?? defaultProduct;
}
