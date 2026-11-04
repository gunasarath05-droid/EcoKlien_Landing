import { images } from "./images";

export interface BlogPost {
  slug: string;
  title: string;
  readTime: string;
  category: string;
  filterCategory: "Technology" | "Applications" | "Facility planning";
  excerpt: string;
  image: string;
  isFeatured?: boolean;
  content?: {
    leadParagraph: string;
    sections: {
      id: string;
      title: string;
      paragraphs: string[];
    }[];
    calloutText?: string;
    middleImage?: {
      src: string;
      alt: string;
      badge: string;
    };
    checklist?: {
      title: string;
      description: string;
    }[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-treatment-belongs-closer-to-the-source",
    title: "Why treatment belongs closer to the source",
    readTime: "4 MIN READ",
    category: "ON-SITE TREATMENT",
    filterCategory: "Technology",
    isFeatured: true,
    excerpt:
      "A practical look at biomedical liquid waste, the point of generation and the case for on-site treatment.",
    image: images.landingHero || "/assests/images/Hero1.jpg",
    content: {
      leadParagraph:
        "Biomedical liquid waste doesn't begin at a treatment plant. It begins where care, diagnosis and research happen.",
      sections: [
        {
          id: "point-of-generation",
          title: "Start at the point of generation",
          paragraphs: [
            "Healthcare facilities generate liquid waste across laboratories, diagnostic departments, surgical suites, and procedural rooms. By the time this waste reaches a remote facility STP or municipal drain, biological loads have multiplied, and risks of leakage or exposure during transport increase.",
            "Point-of-source treatment tackles hazardous contaminants at origin — neutralizing infectious agents, denaturing pathogens, and aggregating solids before wastewater mixes with general sewer lines.",
          ],
        },
        {
          id: "electrochemical-approach",
          title: "An electrochemical approach",
          paragraphs: [
            "ECOKlien uses hybrid electrocoagulation and electro-oxidation in a compact footprint. Rather than adding bulk chemical disinfectants that corrode infrastructure and create toxic byproducts, our in-situ treatment uses electrical potential to coagulate and oxidize contaminants rapidly.",
            "Contaminants are destabilised into larger flocs that easily separate, leaving clear, sanitized effluent that complies with environmental standards.",
          ],
        },
        {
          id: "facility-assessment",
          title: "Compact does not mean one-size-fits-all",
          paragraphs: [
            "A small laboratory sink has different hydraulic flow and contaminant characteristics than a central surgical theater washup. The ECOKlien platform is modular, allowing individual modules to be arrayed or sized specifically to the source volume.",
            "Whether positioned directly beneath a laboratory discard sink or inside a departmental utility room, the footprint is designed around reality.",
          ],
        },
        {
          id: "before-discussion",
          title: "Before the next conversation",
          paragraphs: [
            "A useful evaluation starts with understanding your facility's daily liquid volume and primary generation sources.",
          ],
        },
      ],
      calloutText: "Bring treatment closer to care. Build the approach around the waste.",
      middleImage: {
        src: images.productHeroBg || "/assests/images/landing/Hero.png",
        alt: "ECOKlien On-Site System in Facility",
        badge: "ECOKlien / ON-SITE SYSTEM",
      },
      checklist: [
        {
          title: "Map the sources",
          description: "Identify departments and procedural areas producing bio-waste.",
        },
        {
          title: "Understand the flow",
          description: "Daily expected volumes and peak flow periods.",
        },
        {
          title: "Space and utility",
          description: "Determine installation point, power input and drain connections.",
        },
      ],
    },
  },
  {
    slug: "electrocoagulation-and-electro-oxidation-explained",
    title: "Electrocoagulation and electro-oxidation, explained",
    readTime: "4 MIN READ",
    category: "TECHNOLOGY",
    filterCategory: "Technology",
    excerpt:
      "Understanding the complementary stages inside a hybrid electrochemical treatment system.",
    image: images.hero || "/assests/images/home/Hero.png",
  },
  {
    slug: "different-waste-streams-different-treatment-conversations",
    title: "Different waste streams. Different treatment conversations.",
    readTime: "4 MIN READ",
    category: "BIOMEDICAL LIQUID WASTE",
    filterCategory: "Applications",
    excerpt:
      "Why the source and composition of liquid waste matter when discussing a treatment approach.",
    image: images.application.app2 || "/assests/images/home/Application 2.png",
  },
  {
    slug: "what-to-prepare-before-a-facility-assessment",
    title: "What to prepare before a facility assessment",
    readTime: "4 MIN READ",
    category: "FACILITY PLANNING",
    filterCategory: "Facility planning",
    excerpt:
      "Wastewater volumes, available space and operating needs: the starting points for a useful discussion.",
    image: images.application.app1 || "/assests/images/home/Application 1.png",
  },
  {
    slug: "one-platform-three-ways-to-deploy-it",
    title: "One platform, three ways to deploy it",
    readTime: "4 MIN READ",
    category: "SYSTEMS",
    filterCategory: "Technology",
    excerpt:
      "Point-of-source treatment, hospital effluent treatment and dedicated disinfection in context.",
    image: images.product.product1 || "/assests/images/home/Hospital Effluent Treatment Systems.png",
  },
  {
    slug: "the-role-of-separation-in-liquid-waste-treatment",
    title: "The role of separation in liquid waste treatment",
    readTime: "3 MIN READ",
    category: "TECHNOLOGY",
    filterCategory: "Technology",
    excerpt:
      "How separating aggregated contaminants fits into the wider treatment pathway.",
    image: images.bloodToWater || "/assests/images/blood to water.png",
  },
  {
    slug: "designing-around-care-and-science",
    title: "Designing around care and science",
    readTime: "4 MIN READ",
    category: "APPLICATIONS",
    filterCategory: "Applications",
    excerpt:
      "Compact, modular engineering for healthcare facilities and laboratories that cannot stand still.",
    image: images.facility || "/assests/images/home/Firefly.png",
  },
];

