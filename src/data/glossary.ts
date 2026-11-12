/**
 * Biomedical Glossary content.
 * Source: https://ecoklien.com/the-biomedical-glossary/ and each linked term page,
 * arranged into the "term guide" template (numbered sections + sources).
 *
 * Inline text supports a small markdown subset:
 *   [label](href)  -> link (internal "/glossary/..." links stay in-app)
 *   **bold**
 */

export type GlossaryBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "definition"; label?: string; text: string; note?: string }
  | { type: "bullets"; intro?: string; items: string[] }
  | { type: "numbered"; items: { title: string; text?: string }[] }
  | { type: "cta"; title: string; text?: string; label: string; href: string }
  | { type: "faq"; items: { question: string; answer: string }[] };

export interface GlossarySection {
  id: string;
  title: string;
  /** Shorter label used in the "In this guide" sidebar */
  navTitle?: string;
  blocks: GlossaryBlock[];
}

export interface GlossaryTerm {
  slug: string;
  title: string;
  pronunciation?: string;
  /** One-liner shown on glossary cards */
  cardSummary: string;
  /** Hero intro, right column */
  intro: string;
  /** Hero meta label, e.g. "WASTE STREAMS" */
  category: string;
  /** "In simple terms" highlight box */
  simpleTerms: string;
  sections: GlossarySection[];
  sources: { label: string; href?: string }[];
  /** Slugs for the "Keep exploring" cards */
  related: string[];
}

const BLW_SYSTEM = "https://ecoklien.com/biomedical-liquid-waste-treatment-system/";
const CONTACT = "/contact";

export const glossaryTerms: GlossaryTerm[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "antimicrobial-resistance",
    title: "Antimicrobial Resistance (AMR)",
    cardSummary: "When microorganisms no longer respond to medicines, making infections harder to treat.",
    intro: "Understand what antimicrobial resistance is, what drives it and how hospital waste plays a part.",
    category: "HEALTH RISKS",
    simpleTerms:
      "Antimicrobial resistance occurs when bacteria, viruses, fungi and parasites change over time and no longer respond to medicines, making infections harder to treat and increasing the risk of disease spread, severe illness and death.",
    sections: [
      {
        id: "what-is",
        title: "What is antimicrobial resistance?",
        navTitle: "What is AMR?",
        blocks: [
          {
            type: "p",
            text: "It is one of the top global public health and development threats. It is estimated that bacterial AMR was directly responsible for 1.27 million global deaths in 2019 and contributed to 4.95 million deaths.",
          },
          {
            type: "definition",
            label: "ACCORDING TO WHO",
            text: "Antimicrobial resistance occurs when bacteria, viruses, fungi and parasites change over time and no longer respond to medicines. As a result, the medicines become ineffective and infections persist in the body, increasing the risk of spreading to others.",
            note: "Definition adapted from the World Health Organization.",
          },
          {
            type: "definition",
            label: "ACCORDING TO CDC",
            text: "Antimicrobial resistance happens when germs like bacteria and fungi develop the ability to defeat the drugs designed to kill them. That means the germs are not killed and continue to grow. Resistant infections can be difficult, and sometimes impossible, to treat.",
            note: "Definition from the Centers for Disease Control and Prevention.",
          },
        ],
      },
      {
        id: "antimicrobials",
        title: "What are antimicrobials?",
        navTitle: "Antimicrobials",
        blocks: [
          {
            type: "p",
            text: "Antimicrobials – including antibiotics, antivirals, antifungals and antiparasitics – are medicines used to prevent and treat infections in humans, animals and plants. Microorganisms that develop antimicrobial resistance are sometimes referred to as “superbugs”.",
          },
        ],
      },
      {
        id: "causes",
        title: "Key causes of antimicrobial resistance",
        navTitle: "Key causes",
        blocks: [
          {
            type: "numbered",
            items: [
              { title: "Overuse & misuse of antibiotics" },
              { title: "Untreated or improperly treated hospital waste" },
              { title: "Agricultural use of antibiotics" },
              { title: "Global travel & trade" },
            ],
          },
          {
            type: "cta",
            title: "The role of hospital waste in AMR.",
            text: "Want to know how untreated hospital and biomedical liquid waste contributes to antimicrobial resistance?",
            label: "Read the article",
            href: "https://ecoklien.com/antimicrobial-resistance-biomedical-liquid-waste/",
          },
        ],
      },
    ],
    sources: [
      { label: "World Health Organization — Antimicrobial resistance", href: "https://www.who.int/health-topics/antimicrobial-resistance" },
      { label: "CDC — About antimicrobial resistance", href: "https://www.cdc.gov/drugresistance/about.html" },
    ],
    related: ["biomedical-liquid-waste", "pharmaceutical-waste", "hospital-wastewater"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "biomedical-liquid-waste",
    title: "Biomedical Liquid Waste",
    cardSummary: "Liquid waste from healthcare, laboratories and research that needs specialised treatment.",
    intro: "Understand what it is, where it comes from and why treating it at the source matters.",
    category: "WASTE STREAMS",
    simpleTerms:
      "Liquid waste generated during healthcare, diagnosis, research and related activities. It may contain infectious materials, chemicals or pharmaceutical residues and requires specialised handling and treatment.",
    sections: [
      {
        id: "what-is",
        title: "What is biomedical liquid waste?",
        blocks: [
          {
            type: "p",
            text: "Biomedical liquid waste is often used interchangeably with hospital liquid waste. However, it comes from more than hospitals: diagnostic centres, laboratories, veterinary facilities and research environments can also generate it.",
          },
          {
            type: "definition",
            label: "FIRST, WHAT IS BIOMEDICAL WASTE?",
            text: "Waste generated during the diagnosis, treatment or immunisation of human beings or animals, in related research, or in the production or testing of biologicals.",
            note: "Definition adapted from Vikaspedia and published biomedical waste literature.",
          },
          {
            type: "p",
            text: "Biomedical waste includes anatomical and animal waste, microbiology waste, sharps, discarded medicines, soiled materials, liquid waste from infected areas, incineration ash and chemical waste. Its liquid fraction needs particular care because it can enter waterways and groundwater when improperly handled.",
          },
        ],
      },
      {
        id: "types",
        title: "Types of biomedical liquid waste",
        navTitle: "Types of liquid waste",
        blocks: [
          {
            type: "numbered",
            items: [
              {
                title: "Infectious waste",
                text: "Blood and body fluids; laboratory cultures, discarded vaccines and other potentially infectious liquids.",
              },
              {
                title: "Chemically hazardous waste",
                text: "Formaldehyde, mercury, solvents and radioactive isotopes from clinical, pathology and related activities.",
              },
              { title: "Liquid pharmaceutical waste", text: "Discarded, unused or expired medicines in liquid form." },
              { title: "Photographic chemicals", text: "Fixer and developer solutions from photographic processes." },
              {
                title: "Cleaning and washing water",
                text: "Contaminated water from cleaning activities that is channelled into drains.",
              },
            ],
          },
        ],
      },
      {
        id: "why",
        title: "Why does it need special care?",
        navTitle: "Why it matters",
        blocks: [
          {
            type: "p",
            text: "Untreated biomedical liquid waste can contain infectious microorganisms, pharmaceutical residues and hazardous chemicals. Improper handling can expose healthcare workers and communities, while discharge into the environment can contaminate water sources.",
          },
          {
            type: "bullets",
            items: [
              "Spilling, splashing and aerosol generation can increase exposure during collection and handling.",
              "Antibiotics, resistant bacteria and resistance genes may contribute to the spread of [antimicrobial resistance](/glossary/antimicrobial-resistance).",
              "Unsafe discharge or reuse can carry contaminants into waterways, groundwater and the wider environment.",
            ],
          },
        ],
      },
      {
        id: "handling",
        title: "Handling and treatment",
        blocks: [
          {
            type: "p",
            text: "Biomedical waste should be segregated from other waste streams and managed according to its classification. Collection, handling, treatment and discharge must follow applicable healthcare and environmental requirements.",
          },
          {
            type: "p",
            text: "Some hospitals use their own Sewage Treatment Plants (STPs) or Effluent Treatment Plants (ETPs), with primary, secondary and tertiary treatment followed by sludge treatment. The appropriate process depends on the waste stream and the standards that must be met.",
          },
          {
            type: "cta",
            title: "Turn waste into a sustainability opportunity.",
            text: "Treating at the source can reduce handling risks and support water conservation. With suitable treatment and regulatory approval, reclaimed water can serve non-potable applications.",
            label: "Discover the ECOKlien advantage",
            href: BLW_SYSTEM,
          },
        ],
      },
      {
        id: "faq",
        title: "Commonly asked questions",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "How is it different from regular wastewater?",
                answer:
                  "Unlike domestic wastewater, biomedical liquid waste may contain infectious microorganisms, blood, pharmaceutical residues, chemicals and antimicrobial compounds that require specialised treatment.",
              },
              {
                question: "Can it contribute to antimicrobial resistance (AMR)?",
                answer:
                  "Yes. Antibiotics, antimicrobial residues, antibiotic-resistant bacteria and resistance genes may be present. If released untreated, they can contribute to the spread of resistance in the environment.",
              },
              {
                question: "Can treated biomedical liquid waste be reused?",
                answer:
                  "When treated to the required standards, reclaimed water may be suitable for non-potable uses such as landscaping, toilet flushing and cooling systems, subject to local regulations.",
              },
              {
                question: "What regulations govern its management?",
                answer:
                  "In India, facilities must comply with the Bio-Medical Waste Management Rules, 2016, and guidelines from the Central Pollution Control Board and respective State Pollution Control Boards.",
              },
              {
                question: "Why is source-level treatment important?",
                answer:
                  "Treating waste at the source minimises handling risks, reduces transportation requirements, improves compliance and helps prevent environmental contamination.",
              },
              {
                question: "Can biomedical liquid waste become a resource?",
                answer:
                  "Yes. Proper treatment can recover water for suitable reuse, reducing freshwater consumption and supporting circular economy initiatives within healthcare facilities.",
              },
              {
                question: "Why is it sometimes called “Liquid Gold”?",
                answer:
                  "It contains significant amounts of water that can potentially be recovered after treatment. Viewing it as a resource supports water conservation and sustainability goals.",
              },
            ],
          },
        ],
      },
    ],
    sources: [
      {
        label: "Vikaspedia — Biomedical waste and its segregation",
        href: "https://vikaspedia.in/energy/environment/waste-management/bio-medical-waste-management/bio-medical-waste-and-its-segregation",
      },
      {
        label: "Medical Journal of Dr. D.Y. Patil Vidyapeeth — Liquid biomedical waste management",
        href: "https://journals.lww.com/mjmr/fulltext/2013/04020/liquid_biomedical_waste_management__an_emerging.11.aspx",
      },
      {
        label: "Toxics Link — Biomedical waste: Concerns and management",
        href: "https://toxicslink.org/wp-content/uploads/2022/08/Factsheet_28_BMW%20Concerns%20and%20management%28English%29.pdf",
      },
    ],
    related: ["biomedical-waste", "antimicrobial-resistance", "hospital-wastewater"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "biomedical-waste",
    title: "Biomedical Waste",
    cardSummary: "Waste generated during diagnosis, treatment, immunisation or biomedical research.",
    intro: "Understand what biomedical waste is, the forms it takes and why proper management matters.",
    category: "WASTE STREAMS",
    simpleTerms:
      "Any waste generated during the diagnosis, treatment or immunisation of human beings or animals, related research, or the production or testing of biologicals. It requires specialised handling, segregation, treatment and disposal.",
    sections: [
      {
        id: "what-is",
        title: "What is biomedical waste?",
        blocks: [
          {
            type: "definition",
            label: "CPCB DEFINITION",
            text: "“Biomedical waste” means any waste, which is generated during the diagnosis, treatment or immunization of human beings or animals or research activities pertaining thereto or in the production or testing of biological or in health camps.",
            note: "Definition from the Central Pollution Control Board guidelines.",
          },
          {
            type: "p",
            text: "Biomedical waste is generated wherever healthcare services are provided, including hospitals, clinics, diagnostic laboratories, blood banks, veterinary facilities, research institutions and healthcare camps. Due to its potentially infectious, hazardous or toxic nature, it requires specialised handling, segregation, treatment and disposal procedures to protect public health and the environment.",
          },
          {
            type: "p",
            text: "As healthcare systems continue to expand globally, effective biomedical waste management has become a critical component of infection control, environmental protection and regulatory compliance.",
          },
        ],
      },
      {
        id: "types",
        title: "Types of biomedical waste",
        navTitle: "Types of waste",
        blocks: [
          {
            type: "p",
            text: "Biomedical waste encompasses a wide range of waste streams, each requiring specific treatment and disposal methods.",
          },
          {
            type: "numbered",
            items: [
              {
                title: "Infectious waste",
                text: "Blood, blood products, cultures, stocks and other body fluids that may be contaminated with pathogens capable of causing disease.",
              },
              {
                title: "Sharps",
                text: "Needles, syringes, scalpels and other sharp objects. Needle-stick injuries remain one of the most common occupational hazards faced by healthcare workers.",
              },
              {
                title: "Pathological waste",
                text: "Human anatomical waste, animal carcasses and body parts, which require specialised handling due to ethical, legal and infection control considerations.",
              },
              {
                title: "Chemical waste",
                text: "Solvents, reagents, disinfectants and other discarded chemicals from laboratories and healthcare settings.",
              },
            ],
          },
        ],
      },
      {
        id: "why",
        title: "Why proper management matters",
        navTitle: "Why it matters",
        blocks: [
          {
            type: "p",
            text: "Effective biomedical waste management is about much more than regulatory compliance. It plays a direct role in protecting healthcare workers, patients, communities and natural ecosystems. Waste that is improperly segregated, stored, transported or treated can become a source of disease transmission and environmental contamination.",
          },
          {
            type: "bullets",
            intro: "Proper waste management helps healthcare facilities:",
            items: [
              "Reduce infection risks",
              "Protect staff and patients",
              "Prevent environmental contamination",
              "Support regulatory compliance",
              "Improve operational efficiency",
              "Strengthen sustainability initiatives",
            ],
          },
        ],
      },
      {
        id: "impact",
        title: "Impact on health and the environment",
        navTitle: "Health & environment",
        blocks: [
          { type: "h3", text: "Impact on human health" },
          {
            type: "p",
            text: "Untreated biomedical waste can harbour pathogens that cause serious infections such as HIV, hepatitis B and hepatitis C. Exposure can occur through direct contact, contaminated surfaces, accidental injuries or environmental pathways. Healthcare workers, waste handlers, sanitation personnel and nearby communities are particularly vulnerable.",
          },
          {
            type: "bullets",
            intro: "Improper handling of sharps and infectious materials increases the risk of:",
            items: [
              "Needle-stick injuries",
              "Cuts and puncture wounds",
              "Exposure to [bloodborne pathogens](/glossary/bloodborne-pathogens)",
              "Workplace infections",
            ],
          },
          { type: "h3", text: "Impact on the environment" },
          {
            type: "p",
            text: "Untreated healthcare waste may introduce pathogens, pharmaceutical residues, chemicals and hazardous substances into soil and water. When it enters drainage systems, landfills or water bodies, contaminants can eventually reach groundwater sources, threatening drinking water quality.",
          },
          {
            type: "p",
            text: "One of the most significant emerging concerns is [antimicrobial resistance](/glossary/antimicrobial-resistance). Healthcare waste can contain antibiotic residues and resistant microorganisms that, if released untreated, may contribute to its spread.",
          },
        ],
      },
      {
        id: "treatment",
        title: "How biomedical waste is treated",
        navTitle: "Treatment methods",
        blocks: [
          {
            type: "p",
            text: "Treatment involves multiple processes designed to neutralise hazards and minimise environmental impact. The appropriate method depends on the type of waste generated and applicable regulatory requirements.",
          },
          {
            type: "numbered",
            items: [
              {
                title: "Segregation",
                text: "Separating infectious waste, sharps, chemical waste and liquid waste at the source so each stream receives the appropriate treatment.",
              },
              { title: "Autoclaving", text: "High-pressure steam destroys microorganisms present in infectious waste." },
              { title: "Chemical disinfection", text: "Disinfectants eliminate harmful pathogens in certain waste streams before disposal." },
              { title: "Incineration", text: "Used for specific categories of hazardous biomedical waste that require complete destruction." },
              { title: "Shredding and volume reduction", text: "Reduces volume after treatment and prevents unauthorised reuse." },
              {
                title: "Liquid waste treatment",
                text: "Liquid waste from laboratories, diagnostic procedures, operating theatres and research often requires specialised treatment before discharge.",
              },
            ],
          },
          {
            type: "cta",
            title: "Looking for a simpler way to treat biomedical liquid waste?",
            text: "Source-level treatment can help simplify compliance, reduce handling risks and support sustainable wastewater management practices.",
            label: "Learn how",
            href: BLW_SYSTEM,
          },
        ],
      },
      {
        id: "liquid-waste",
        title: "The growing challenge of liquid waste",
        navTitle: "Liquid waste",
        blocks: [
          {
            type: "p",
            text: "While solid biomedical waste often receives significant attention, [biomedical liquid waste](/glossary/biomedical-liquid-waste) remains one of the most complex challenges facing healthcare facilities today.",
          },
          {
            type: "bullets",
            intro: "It may originate from:",
            items: [
              "Clinical laboratories and pathology departments",
              "Diagnostic centres and blood banks",
              "Operating theatres",
              "Research facilities and healthcare institutions",
            ],
          },
          {
            type: "p",
            text: "Solutions such as ECOKlien help healthcare facilities address these challenges by enabling treatment at the source, reducing dependence on chemical-intensive processes and simplifying treatment operations.",
          },
        ],
      },
      {
        id: "benefits",
        title: "Key benefits of effective treatment",
        navTitle: "Key benefits",
        blocks: [
          {
            type: "numbered",
            items: [
              { title: "Improved infection control", text: "Reduces exposure to infectious agents for workers, patients, waste handlers and communities." },
              { title: "Environmental protection", text: "Helps prevent contamination of water bodies, groundwater reserves and ecosystems." },
              { title: "Regulatory compliance", text: "Helps organisations meet evolving environmental and biomedical waste regulations consistently." },
              { title: "Operational efficiency", text: "Reduces manual intervention and improves process reliability." },
              { title: "Support for sustainability goals", text: "Reduces environmental impact and promotes responsible resource management." },
            ],
          },
          {
            type: "p",
            text: "Biomedical waste management is not merely a regulatory obligation—it is a critical responsibility that directly impacts public health, infection control, environmental protection and community safety.",
          },
        ],
      },
    ],
    sources: [
      {
        label: "CPCB — Guidelines for management of healthcare waste",
        href: "https://cpcb.nic.in/uploads/projects/bio-medical-waste/guidelines_healthcare_june_2018.pdf",
      },
      { label: "World Health Organization — Health-care waste", href: "https://www.who.int/news-room/fact-sheets/detail/health-care-waste" },
      { label: "CDC NIOSH — Bloodborne infectious diseases", href: "https://www.cdc.gov/niosh/topics/bbp/" },
      { label: "UNEP — Healthcare waste management", href: "https://www.unep.org/resources/report/healthcare-waste-management" },
    ],
    related: ["biomedical-liquid-waste", "bloodborne-pathogens", "sludge"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "bloodborne-pathogens",
    title: "Bloodborne Pathogens",
    cardSummary: "Infectious microorganisms carried in blood that can cause disease in humans.",
    intro: "Understand what bloodborne pathogens are, how they spread and how they connect to biomedical liquid waste.",
    category: "HEALTH RISKS",
    simpleTerms:
      "Microorganisms such as viruses or bacteria that are carried in blood and can cause disease in people — most notably Hepatitis B, Hepatitis C and HIV.",
    sections: [
      {
        id: "what-is",
        title: "What are bloodborne pathogens?",
        blocks: [
          {
            type: "definition",
            label: "DEFINITION",
            text: "A pathogen is something that causes disease. Germs that can have a long-lasting presence in human blood and disease in humans are called bloodborne pathogens.",
            note: "Definitions adapted from BCCDC and MedlinePlus.",
          },
          {
            type: "p",
            text: "There are many different bloodborne pathogens, including malaria, syphilis and brucellosis, and most notably Hepatitis B (HBV), Hepatitis C (HCV) and the Human Immunodeficiency Virus (HIV).",
          },
          {
            type: "p",
            text: "Bloodborne pathogens such as HBV and HIV can be transmitted through contact with infected human blood and other potentially infectious body fluids.",
          },
        ],
      },
      {
        id: "liquid-waste",
        title: "The connection to biomedical liquid waste",
        navTitle: "Link to liquid waste",
        blocks: [
          {
            type: "p",
            text: "[Biomedical liquid waste](/glossary/biomedical-liquid-waste), which includes blood, bodily fluids and other potentially infectious materials, can contain bloodborne pathogens. Improper handling and disposal can spread these pathogens, posing significant risks to healthcare workers, patients and the environment.",
          },
          {
            type: "p",
            text: "To mitigate these risks, proper handling and disposal are essential. Effective treatment of biomedical liquid waste before disposal is crucial to inactivate pathogens and reduce their environmental impact.",
          },
          {
            type: "cta",
            title: "Rethink your facility’s waste management.",
            text: "Contact us today to learn how ECOKlien can revolutionise your facility’s waste management practices.",
            label: "Contact us",
            href: CONTACT,
          },
        ],
      },
      {
        id: "faq",
        title: "Commonly asked questions",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "How are bloodborne pathogens transmitted?",
                answer:
                  "Through needle-stick injuries, cuts or punctures from contaminated sharp objects, contact with infected blood through open wounds or mucous membranes (eyes, nose, mouth), and sharing needles. Casual contact like touching, hugging or sharing food does not spread these pathogens.",
              },
              {
                question: "Who is at risk of exposure?",
                answer:
                  "Healthcare workers, lab technicians, sanitation and waste management staff, and emergency responders.",
              },
              {
                question: "What are “Universal Precautions”?",
                answer:
                  "Treating all blood and certain body fluids as potentially infectious, regardless of the source. This includes wearing gloves and protective gear, proper disposal of sharps, and immediate cleaning and disinfection of contaminated surfaces.",
              },
              {
                question: "Can bloodborne pathogens survive outside the body?",
                answer:
                  "Some can. For example, Hepatitis B can survive on surfaces for up to 7 days under certain conditions. This is why surface disinfection is essential, not just visible cleaning.",
              },
              {
                question: "How can surfaces be disinfected?",
                answer:
                  "By using an appropriate chemical disinfectant (i.e. bleach solutions), allowing proper contact time and ensuring coverage of all contaminated areas. Where wastewater or contaminated runoff is a concern, structured treatment systems such as those designed by ECOKlien can help manage biological contaminants before discharge.",
              },
            ],
          },
        ],
      },
    ],
    sources: [
      { label: "BCCDC — Bloodborne diseases", href: "http://www.bccdc.ca/health-info/disease-types/bloodborne-diseases" },
      { label: "MedlinePlus — Bloodborne pathogens", href: "https://medlineplus.gov/ency/patientinstructions/000453.htm" },
    ],
    related: ["biomedical-liquid-waste", "communicable-diseases", "biomedical-waste"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "bod-biochemical-oxygen-demand",
    title: "BOD (Biochemical Oxygen Demand)",
    cardSummary: "The oxygen microorganisms need to break down organic matter in water.",
    intro: "Understand what BOD measures and why it matters in wastewater treatment.",
    category: "WATER QUALITY",
    simpleTerms:
      "The amount of oxygen consumed by bacteria and other microorganisms while they decompose organic matter under aerobic conditions. The higher the BOD, the more polluted the water is with organic waste.",
    sections: [
      {
        id: "what-is",
        title: "What is biochemical oxygen demand?",
        navTitle: "What is BOD?",
        blocks: [
          {
            type: "p",
            text: "When we talk about water quality, one term that frequently comes up is biological oxygen demand, often abbreviated as BOD.",
          },
          {
            type: "definition",
            label: "IN DEFINITION",
            text: "Biochemical oxygen demand is the amount of oxygen consumed by bacteria and other microorganisms while they decompose organic matter under aerobic conditions.",
            note: "Typically expressed in mg/L (milligrams of oxygen per litre of water).",
          },
        ],
      },
      {
        id: "simple-terms",
        title: "BOD in simple terms",
        navTitle: "In simple terms",
        blocks: [
          {
            type: "p",
            text: "A common lake or stream contains small amounts of oxygen in the form of dissolved oxygen — up to about ten molecules of oxygen per million of water. It is a crucial component of natural water bodies, critical to maintaining aquatic life and the aesthetic quality of streams and lakes.",
          },
          {
            type: "p",
            text: "Environmental stresses (hot summer temperatures) and human-induced factors (excess fertilisers) can lessen dissolved oxygen, stressing local aquatic life. BOD helps us understand how much oxygen microorganisms consume as they decompose organic matter.",
          },
        ],
      },
      {
        id: "treatment",
        title: "BOD in wastewater treatment",
        navTitle: "BOD in treatment",
        blocks: [
          {
            type: "p",
            text: "BOD is an essential metric for assessing how effective a treatment process is. High BOD levels indicate insufficient treatment; low levels signify that organic pollutants have been removed, preserving water quality and public health.",
          },
          {
            type: "numbered",
            items: [
              { title: "Clean, non-polluted river", text: "BOD reading should be below 1 PPM." },
              { title: "Sewage", text: "Typically greater than 200 PPM, often reaching up to 600 PPM." },
            ],
          },
          {
            type: "p",
            text: "Industries discharging wastewater into municipal sewers or waterways must follow strict regulations on BOD levels. Solid materials must be reduced by treatment before discharge, otherwise BOD will increase.",
          },
        ],
      },
      {
        id: "ecoklien",
        title: "How ECOKlien tackles BOD balance",
        navTitle: "ECOKlien’s approach",
        blocks: [
          {
            type: "p",
            text: "ECOKlien provides healthcare facilities and the industry with advanced hybrid treatment systems tuned to follow all regulations. The system comes equipped with sensors to ensure seamless processing of biomedical effluents without any human interference — meeting BOD standards while ensuring safe handling of toxic substances.",
          },
          {
            type: "cta",
            title: "Know more about our systems.",
            text: "See how ECOKlien addresses the challenges of biomedical liquid waste treatment.",
            label: "Know more",
            href: "https://ecoklien.com/challenges-of-biomedical-liquid-waste-treatment/",
          },
        ],
      },
    ],
    sources: [
      { label: "BioprocessH2O — Biological oxygen demand", href: "https://www.bioprocessh2o.com/blog/biological-oxygen-demand" },
      { label: "USGS — Dissolved oxygen and water", href: "https://www.usgs.gov/special-topic/water-science-school/science/dissolved-oxygen-and-water" },
      { label: "Atlas Scientific — What is BOD in wastewater?", href: "https://atlas-scientific.com/blog/what-is-bod-in-wastewater/" },
    ],
    related: ["wastewater", "hospital-wastewater", "sludge"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "communicable-diseases",
    title: "Communicable Diseases",
    cardSummary: "Illnesses that can spread between people, animals or through the environment.",
    intro: "Understand how communicable diseases spread and how biomedical liquid waste is connected.",
    category: "HEALTH RISKS",
    simpleTerms:
      "Illnesses that spread from one person to another, from an animal to a person, or from a surface or a food.",
    sections: [
      {
        id: "transmission",
        title: "How are communicable diseases transmitted?",
        navTitle: "Transmission",
        blocks: [
          {
            type: "numbered",
            items: [
              { title: "Direct contact with a sick person" },
              { title: "Respiratory droplet spread from a sick person sneezing or coughing" },
              { title: "Contact with blood or other body fluids" },
              { title: "Breathing in viruses or bacteria in the air" },
              { title: "Contact with a contaminated surface or object" },
              { title: "Bites from insects or animals that can transmit the disease" },
              { title: "Ingestion of contaminated food or water" },
            ],
          },
        ],
      },
      {
        id: "liquid-waste",
        title: "Communicable diseases and liquid waste",
        navTitle: "Further reading",
        blocks: [
          {
            type: "p",
            text: "We have talked more on communicable [diseases spreading through biomedical liquid waste](https://ecoklien.com/spread-communicable-diseases-biomedical-liquid-waste/) and how [communities are affected](https://ecoklien.com/biomedical-waste-and-communities-living-on-the-edge/) by the same.",
          },
        ],
      },
    ],
    sources: [
      { label: "CDC NIOSH — Communicable diseases", href: "https://www.cdc.gov/niosh/topics/aircrew/communicablediseases.html" },
    ],
    related: ["waterborne-diseases", "bloodborne-pathogens", "biomedical-liquid-waste"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "greywater",
    title: "Greywater",
    cardSummary: "Wastewater from washing and similar activities, excluding toilet wastewater.",
    intro: "Understand what greywater is and how reusing it supports water conservation.",
    category: "WATER REUSE",
    simpleTerms:
      "Relatively clean wastewater generated from activities such as bathing, washing hands and laundry. Unlike blackwater from toilets, it can be recycled for non-potable uses.",
    sections: [
      {
        id: "what-is",
        title: "What is greywater?",
        blocks: [
          {
            type: "p",
            text: "Greywater (or graywater) refers to the relatively clean wastewater generated from household activities such as bathing, washing hands and laundry. Unlike blackwater, which comes from toilets and contains significant contaminants, greywater can be recycled and reused — even though it may still contain soap, dirt, food particles and other organic materials.",
          },
          {
            type: "bullets",
            intro: "Since it is not contaminated with fecal matter, greywater can be safely recycled for non-potable purposes such as:",
            items: ["Irrigation", "Toilet flushing", "Cleaning"],
          },
        ],
      },
      {
        id: "why-reuse",
        title: "Why reuse greywater?",
        navTitle: "Why reuse matters",
        blocks: [
          {
            type: "definition",
            label: "BY THE NUMBERS",
            text: "Nearly 80% of household water use comes from activities that generate grey water.",
            note: "According to the Environmental Protection Agency (EPA).",
          },
          {
            type: "p",
            text: "By reusing greywater, households can significantly reduce their reliance on freshwater, a valuable and limited resource. Recycling even a fraction of this water can lead to substantial savings — an essential tool for water conservation, especially in drought-prone areas.",
          },
        ],
      },
    ],
    sources: [
      { label: "Water Wise Group — What is greywater?", href: "https://waterwisegroup.com/blogs/greywater-education/what-is-greywater" },
      { label: "Ion Exchange — What is grey water and how is it recycled?", href: "https://us.ionexchangeglobal.com/what-is-grey-water-and-how-it-recycled/" },
    ],
    related: ["wastewater", "biomedical-liquid-waste", "bod-biochemical-oxygen-demand"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "hospital-wastewater",
    title: "Hospital Wastewater",
    cardSummary: "Wastewater generated by the clinical and everyday operations of a hospital.",
    intro: "Understand what hospital wastewater contains and why it needs treatment.",
    category: "WASTE STREAMS",
    simpleTerms:
      "Wastewater discharged from all hospital activities, both medical and non-medical — from surgery rooms, laboratories and radiology to kitchens and laundry rooms.",
    sections: [
      {
        id: "what-is",
        title: "What is hospital wastewater?",
        blocks: [
          {
            type: "definition",
            label: "DEFINITION",
            text: "Hospital wastewater (HWW) is the wastewater discharged from all hospital activities, both medical and non-medical, including activities in surgery rooms, examination rooms, laboratories, nursery rooms, radiology rooms, kitchens, and laundry rooms.",
            note: "Definition from a Springer published chapter on hospital wastewater.",
          },
        ],
      },
      {
        id: "composition",
        title: "What does it contain?",
        navTitle: "Composition",
        blocks: [
          {
            type: "p",
            text: "Referred to as either Hospital Wastewater (HWW) or Hospital Effluent, it is considered to have similar quality to municipal wastewater, but may also contain potentially hazardous components.",
          },
          {
            type: "bullets",
            items: [
              "Hazardous chemical compounds",
              "Heavy metals",
              "Disinfectants and specific detergents from diagnosis, laboratory and research activities",
              "Higher concentrations of pharmaceutical compounds (PhCs) than municipal effluents",
            ],
          },
        ],
      },
      {
        id: "why-treat",
        title: "Why treat hospital wastewater?",
        navTitle: "Why treat it",
        blocks: [
          {
            type: "p",
            text: "Hospital wastewater has a never-ending list of contaminants that harm not only water bodies, but people and the environment as a whole. A polluted waterbody is the start of a chain reaction: if spread, the contaminants affect the ecosystem critically and cause diseases to those residing nearby.",
          },
          {
            type: "p",
            text: "Read more about the [effects on the environment](https://ecoklien.com/biomedical-liquid-waste-and-hospital-effluent-effects-on-the-environment/) and [communities living on the edge](https://ecoklien.com/biomedical-waste-and-communities-living-on-the-edge/).",
          },
        ],
      },
    ],
    sources: [{ label: "Springer — Hospital wastewater", href: "https://link.springer.com/chapter/10.1007/698_2017_5" }],
    related: ["biomedical-liquid-waste", "pharmaceutical-waste", "wastewater"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "pharmaceutical-waste",
    title: "Pharmaceutical Waste",
    cardSummary: "Discarded, unused or expired medicines and other pharmaceutical materials.",
    intro: "Understand what pharmaceutical waste includes and the risks of improper disposal.",
    category: "WASTE STREAMS",
    simpleTerms:
      "A byproduct of drug manufacturing, research and healthcare that poses significant environmental and health risks if not managed properly.",
    sections: [
      {
        id: "what-is",
        title: "What is pharmaceutical waste?",
        blocks: [
          {
            type: "definition",
            label: "DEFINITION",
            text: "This waste includes discarded pharmaceutical products like prescription and over-the-counter medications, as well as the chemical sludges and wastewaters produced during pharmaceuticals manufacturing. It also includes waste medical items, like used gloves and sharps, that contact pharmaceuticals.",
            note: "Definition from VLS Environmental Solutions.",
          },
          {
            type: "p",
            text: "Because of the health hazards and ecological risks this waste poses, it requires specialised disposal processes that ensure safety.",
          },
        ],
      },
      {
        id: "impact",
        title: "The environmental impact",
        navTitle: "Environmental impact",
        blocks: [
          {
            type: "numbered",
            items: [
              { title: "Water contamination", text: "When pharmaceuticals enter water bodies, they can harm aquatic life and disrupt ecosystems." },
              { title: "Soil contamination", text: "Landfills can release pharmaceutical compounds into the soil, affecting soil quality and groundwater." },
              {
                title: "Antimicrobial resistance",
                text: "The overuse and misuse of antibiotics can contribute to the development of antibiotic-resistant bacteria. [Read more about AMR](/glossary/antimicrobial-resistance).",
              },
            ],
          },
        ],
      },
      {
        id: "ecoklien",
        title: "The role of ECOKlien",
        navTitle: "ECOKlien’s role",
        blocks: [
          {
            type: "p",
            text: "While ECOKlien is primarily designed for treating biomedical liquid waste, it can also be adapted to handle certain types of pharmaceutical waste, particularly liquid pharmaceutical waste — helping mitigate the environmental and health risks associated with pharmaceutical pollution.",
          },
          {
            type: "cta",
            title: "Treat liquid waste at the source.",
            text: "Explore ECOKlien’s biomedical liquid waste treatment systems.",
            label: "View treatment systems",
            href: BLW_SYSTEM,
          },
        ],
      },
    ],
    sources: [{ label: "VLS — Types of pharmaceutical waste", href: "https://www.vlses.com/2022/10/31/types-of-pharmaceutical-waste/" }],
    related: ["antimicrobial-resistance", "biomedical-liquid-waste", "hospital-wastewater"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "sludge",
    title: "Sludge",
    cardSummary: "The residual solids separated from water during wastewater treatment.",
    intro: "Understand what sludge is and why its disposal needs care.",
    category: "TREATMENT BY-PRODUCTS",
    simpleTerms:
      "A semi-solid substance that settles to the bottom of tanks or lagoons during wastewater treatment, including in healthcare facilities.",
    sections: [
      {
        id: "what-is",
        title: "What is sludge?",
        blocks: [
          {
            type: "p",
            text: "Sludge, a byproduct of various industrial and municipal wastewater treatment processes, including those in healthcare facilities, can pose significant environmental and health risks if not managed properly. It is a semi-solid substance that settles to the bottom of tanks or lagoons during wastewater treatment.",
          },
        ],
      },
      {
        id: "impact",
        title: "Environmental impact of sludge",
        navTitle: "Environmental impact",
        blocks: [
          { type: "p", text: "Improper disposal of sludge can lead to a variety of environmental problems:" },
          {
            type: "numbered",
            items: [
              {
                title: "Water pollution",
                text: "Untreated sludge can contain heavy metals, organic compounds and pathogens that degrade water quality and harm aquatic life.",
              },
              {
                title: "Soil contamination",
                text: "Land application of untreated sludge can contaminate soil and groundwater, leading to long-term environmental damage.",
              },
              { title: "Air pollution", text: "Incineration of sludge, if not properly controlled, can release harmful air pollutants." },
            ],
          },
        ],
      },
      {
        id: "ecoklien",
        title: "ECOKlien’s role in sludge management",
        navTitle: "ECOKlien’s role",
        blocks: [
          {
            type: "p",
            text: "While ECOKlien is primarily designed for treating liquid waste, it indirectly contributes to sludge reduction by efficiently treating liquid waste at the source, in healthcare facilities.",
          },
        ],
      },
    ],
    sources: [],
    related: ["biomedical-liquid-waste", "wastewater", "bod-biochemical-oxygen-demand"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "wastewater",
    title: "Wastewater",
    pronunciation: "ˈwāst-ˌwȯ-tər",
    cardSummary: "Water whose quality has been affected by human use and requires treatment.",
    intro: "Understand what wastewater is, how it is categorised and why non-residential sources need extra care.",
    category: "WATER QUALITY",
    simpleTerms:
      "Used water that has been affected by domestic, industrial and commercial use — the polluted form of water generated from rainwater runoff and human activities.",
    sections: [
      {
        id: "definitions",
        title: "Definitions",
        blocks: [
          { type: "definition", label: "MERRIAM-WEBSTER", text: "Water that has been used." },
          {
            type: "definition",
            label: "WASTEWATER DIGEST",
            text: "Wastewater is used water that has been affected by domestic, industrial and commercial use.",
          },
          {
            type: "definition",
            label: "OXFORD DICTIONARY",
            text: "Water that has been used in the home, in a business, or as part of an industrial process.",
          },
        ],
      },
      {
        id: "types",
        title: "Types of wastewater",
        blocks: [
          {
            type: "p",
            text: "Wastewater is typically categorised by the manner in which it is generated — specifically, as domestic sewage, industrial sewage or storm sewage (stormwater).",
          },
          {
            type: "numbered",
            items: [
              { title: "Domestic wastewater", text: "Results from water use in residences, businesses and restaurants." },
              { title: "Industrial wastewater", text: "Comes from discharges by manufacturing and chemical industries." },
              {
                title: "Stormwater",
                text: "Rainwater in urban and agricultural areas picks up debris, grit, nutrients and various chemicals, contaminating surface runoff.",
              },
            ],
          },
        ],
      },
      {
        id: "non-residential",
        title: "Non-residential wastewater",
        navTitle: "Non-residential sources",
        blocks: [
          {
            type: "p",
            text: "Wastewater from non-residential sources generally requires additional treatment steps. Many industries — dairy plants, healthcare facilities and breweries are perfect examples — produce wastewater high in chemical and biological pollutants, so they tend to provide their own treatment or preliminary treatment to protect the main wastewater system.",
          },
          {
            type: "p",
            text: "Wastewater is mostly water by weight, but other materials can be present in large enough quantities to endanger public health and the environment. The components of most concern are those that have the potential to cause disease or detrimental environmental effects.",
          },
        ],
      },
      {
        id: "ecoklien",
        title: "ECOKlien’s role",
        blocks: [
          {
            type: "p",
            text: "ECOKlien plays a pivotal role in wastewater management, particularly in treating biomedical liquid waste. Its systems, such as [BML](https://ecoklien.com/biomedical-liquid-waste-treatment/), are designed to efficiently disinfect and treat hazardous liquid waste generated in healthcare facilities, meeting regulatory standards and contributing to environmental protection and public health.",
          },
        ],
      },
    ],
    sources: [
      { label: "Merriam-Webster — Wastewater", href: "https://www.merriam-webster.com/dictionary/wastewater" },
      { label: "Wastewater Digest — What is wastewater?", href: "https://www.wwdmag.com/wastewater-treatment/article/10938418/what-is-wastewater" },
      { label: "Britannica — Wastewater treatment", href: "https://www.britannica.com/technology/wastewater-treatment" },
    ],
    related: ["hospital-wastewater", "greywater", "bod-biochemical-oxygen-demand"],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "waterborne-diseases",
    title: "Waterborne Diseases",
    cardSummary: "Illnesses caused by pathogens transmitted through contaminated water.",
    intro: "Understand what waterborne diseases are and how safe treatment of liquid waste helps prevent them.",
    category: "HEALTH RISKS",
    simpleTerms:
      "Illnesses caused by pathogenic microorganisms — bacteria, viruses and parasites — transmitted through contaminated water.",
    sections: [
      {
        id: "what-is",
        title: "What are waterborne diseases?",
        blocks: [
          {
            type: "p",
            text: "Waterborne diseases pose a significant threat to public health, especially in areas lacking access to clean and sanitised water sources. They result from various pathogens present in untreated water, causing severe health issues upon ingestion or contact.",
          },
          {
            type: "definition",
            label: "KEY WATERBORNE DISEASES",
            text: "Important waterborne diseases include diarrhoeal diseases, cholera, shigella, typhoid, hepatitis A and E, and poliomyelitis.",
            note: "WHO, 2012, via PreventionWeb.",
          },
        ],
      },
      {
        id: "ecoklien",
        title: "ECOKlien against waterborne diseases",
        navTitle: "ECOKlien’s role",
        blocks: [
          {
            type: "p",
            text: "ECOKlien plays an important role in combating waterborne diseases. Its Biomedical Liquid Waste Treatment Systems provide comprehensive solutions for healthcare facilities, laboratories and research centres, ensuring the safe management and disposal of hazardous liquid waste and the production of sanitised, high-quality treated water.",
          },
          {
            type: "cta",
            title: "Safer water starts at the source.",
            text: "Explore ECOKlien’s biomedical liquid waste treatment systems.",
            label: "View treatment systems",
            href: BLW_SYSTEM,
          },
        ],
      },
    ],
    sources: [
      {
        label: "PreventionWeb — Waterborne diseases",
        href: "https://www.preventionweb.net/understanding-disaster-risk/terminology/hips/bi0018",
      },
    ],
    related: ["communicable-diseases", "wastewater", "biomedical-liquid-waste"],
  },
];

/** Terms sorted A–Z (the order used on the glossary index). */
export const sortedGlossaryTerms = [...glossaryTerms].sort((a, b) => a.title.localeCompare(b.title));

/** Previous / next order, as linked on ecoklien.com term pages. */
const TERM_CHAIN = [
  "antimicrobial-resistance",
  "wastewater",
  "waterborne-diseases",
  "communicable-diseases",
  "hospital-wastewater",
  "pharmaceutical-waste",
  "bloodborne-pathogens",
  "biomedical-waste",
  "sludge",
  "biomedical-liquid-waste",
  "greywater",
  "bod-biochemical-oxygen-demand",
];

export function getGlossaryTerm(slug: string) {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getAdjacentTerms(slug: string) {
  const idx = TERM_CHAIN.indexOf(slug);
  return {
    prev: idx > 0 ? getGlossaryTerm(TERM_CHAIN[idx - 1]) : undefined,
    next: idx >= 0 && idx < TERM_CHAIN.length - 1 ? getGlossaryTerm(TERM_CHAIN[idx + 1]) : undefined,
  };
}

export function getRelatedTerms(term: GlossaryTerm) {
  return term.related.map(getGlossaryTerm).filter((t): t is GlossaryTerm => Boolean(t));
}

export const termLetter = (term: GlossaryTerm) => term.title.charAt(0).toUpperCase();

