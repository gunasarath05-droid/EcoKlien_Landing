import { images } from "./images";

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

export interface CapacityRow {
  model: string;
  flowRate: string;
  dailyCapacity: string;
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
    leftTable: CapacityRow[];
    rightTable: CapacityRow[];
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
      ctaLink: "https://ecoklien.com/contact/",
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
      eyebrow: "SPECIFICATIONS & CAPACITIES",
      heading: "Choose the system around your application.",
      subtitle:
        "Configurations available for different hospital departments, laboratories, diagnostic centres and surgical areas.",
      leftTable: [
        { model: "ECOKlien 250", flowRate: "25 LPH", dailyCapacity: "250 LPD" },
        { model: "ECOKlien 500", flowRate: "50 LPH", dailyCapacity: "500 LPD" },
        { model: "ECOKlien 1000", flowRate: "100 LPH", dailyCapacity: "1,000 LPD" },
        { model: "ECOKlien 2000", flowRate: "200 LPH", dailyCapacity: "2,000 LPD" },
        { model: "ECOKlien 3000", flowRate: "300 LPH", dailyCapacity: "3,000 LPD" },
        { model: "ECOKlien 5000", flowRate: "500 LPH", dailyCapacity: "5,000 LPD" },
        { model: "ECOKlien 7500", flowRate: "750 LPH", dailyCapacity: "7,500 LPD" },
        { model: "ECOKlien 10000", flowRate: "1000 LPH", dailyCapacity: "10,000 LPD" },
      ],
      rightTable: [
        { model: "ECOKlien 15000", flowRate: "1500 LPH", dailyCapacity: "15,000 LPD" },
        { model: "ECOKlien 20000", flowRate: "2000 LPH", dailyCapacity: "20,000 LPD" },
        { model: "ECOKlien 25000", flowRate: "2500 LPH", dailyCapacity: "25,000 LPD" },
      ],
      ctaCard: {
        image: images.bloodToWater || "/assests/images/blood to water.png",
        buttonText: "Get a custom quote",
        buttonLink: "https://ecoklien.com/contact/",
      },
      footerNote:
        "*Custom flow rates and capacities available on request. Talk to our engineering team to evaluate your facility's requirements.",
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
      leftTable: [
        { model: "ECOKlien H-5K", flowRate: "500 LPH", dailyCapacity: "5,000 LPD" },
        { model: "ECOKlien H-10K", flowRate: "1,000 LPH", dailyCapacity: "10,000 LPD" },
        { model: "ECOKlien H-25K", flowRate: "2,500 LPH", dailyCapacity: "25,000 LPD" },
        { model: "ECOKlien H-50K", flowRate: "5,000 LPH", dailyCapacity: "50,000 LPD" },
      ],
      rightTable: [
        { model: "ECOKlien H-75K", flowRate: "7,500 LPH", dailyCapacity: "75,000 LPD" },
        { model: "ECOKlien H-100K", flowRate: "10,000 LPH", dailyCapacity: "100,000 LPD" },
      ],
      ctaCard: {
        image: images.bloodToWater || "/assests/images/blood to water.png",
        buttonText: "Schedule Facility Audit",
        buttonLink: "https://ecoklien.com/contact/",
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
      leftTable: [
        { model: "ECOKlien D-100", flowRate: "10 LPH", dailyCapacity: "100 LPD" },
        { model: "ECOKlien D-250", flowRate: "25 LPH", dailyCapacity: "250 LPD" },
        { model: "ECOKlien D-500", flowRate: "50 LPH", dailyCapacity: "500 LPD" },
      ],
      rightTable: [
        { model: "ECOKlien D-1000", flowRate: "100 LPH", dailyCapacity: "1,000 LPD" },
        { model: "ECOKlien D-2000", flowRate: "200 LPH", dailyCapacity: "2,000 LPD" },
      ],
      ctaCard: {
        image: images.bloodToWater || "/assests/images/blood to water.png",
        buttonText: "Request Disinfection Demo",
        buttonLink: "https://ecoklien.com/contact/",
      },
      footerNote:
        "*Available in IP65 splash-proof medical grade stainless steel enclosures.",
    },
  },
];

export const defaultProduct = products[0];
