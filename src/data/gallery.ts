import { images } from "./images";

export interface ProductViewItem {
  id: string;
  title: string;
  viewTag: string; // e.g. "Front View", "Right Side", "Left Side", "Rear View", "Control Screen", "Overview"
  image: string;
  description?: string;
}

export interface ProductGalleryItem {
  id: string;
  version: string;
  title: string;
  subtitle: string;
  description: string;
  designedFor: string;
  image: string;
  link: string;
  category: "Point of source" | "Hospital effluent" | "Disinfection";
  filterLabel: string;
  views: ProductViewItem[];
}

export interface PhotoGalleryItem {
  id: string;
  title: string;
  eyebrow: string;
  image: string;
  category?: string;
  link?: string;
}

export interface EventVideoItem {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  thumbnail: string;
  youtubeId: string;
  videoUrl?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  eyebrow: string;
  image: string;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  filterLabel: string;
  location: string;
  year: string;
  eyebrow: string;
  photos: PhotoGalleryItem[];
  video?: EventVideoItem; // Optional: videos illatha event-kum support
  certificates?: CertificateItem[]; // Optional: certificates illatha event-kum support
}

export const productGalleryItems: ProductGalleryItem[] = [
  {
    id: "v1",
    version: "ECOKLIEN V1",
    title: "Biomedical Liquid Waste Treatment Systems",
    subtitle: "Point of Source System",
    filterLabel: "Biomedical Treatment (V1)",
    description:
      "For smaller or decentralised biomedical liquid waste sources. Compact, on-site electrochemical reactor bringing treatment closer to where the waste is generated.",
    designedFor: "Laboratories • Procedure areas • Small healthcare facilities",
    image: "/assests/images/Product Gallery/DSC05762-Comp-236x300.webp",
    link: "/products/biomedical-liquid-waste-treatment-system",
    category: "Point of source",
    views: [
      {
        id: "v1-1",
        title: "The New Biomedical Treatment System",
        viewTag: "Front View",
        image: "/assests/images/Product Gallery/DSC05762-Comp-236x300.webp",
        description: "Front showcase perspective of the compact on-site electrochemical reactor system.",
      },
      {
        id: "v1-2",
        title: "The New BML System — Control Screen",
        viewTag: "Touchscreen Panel",
        image: "/assests/images/Product Gallery/DSC05792-Comp-261x300.webp",
        description: "Interactive PLC touchscreen panel for real-time monitoring and cycle automation.",
      },
      {
        id: "v1-3",
        title: "Biomedical Wastewater Treatment System",
        viewTag: "Angled Perspective",
        image: "/assests/images/Product Gallery/bml2-Copy-300x169.webp",
        description: "Space-conscious enclosure designed to fit procedure rooms and laboratory collection areas.",
      },
      {
        id: "v1-4",
        title: "Biomedical Wastewater Treatment System",
        viewTag: "Cabinet Layout",
        image: "/assests/images/Product Gallery/Biomedical-Liquid-Waste-300x278.webp",
        description: "External plumbing connections, inlet/outlet ports and emergency isolation interface.",
      },
      {
        id: "v1-5",
        title: "Biomedical Wastewater Treatment System",
        viewTag: "Side Enclosure View",
        image: "/assests/images/Product Gallery/IMG_0005_edited-300x200.webp",
        description: "Side ventilation louvers and ergonomic access points for hassle-free maintenance.",
      },
    ],
  },
  {
    id: "v2",
    version: "ECOKLIEN V2",
    title: "Hospital Effluent Treatment Systems",
    subtitle: "Decentralised Facility Treatment",
    filterLabel: "Hospital Effluent (V2)",
    description:
      "For larger and more continuous wastewater volumes. Modular electrochemical architecture designed to integrate directly into healthcare facility wastewater plumbing.",
    designedFor: "Hospitals • Diagnostic centres • Healthcare campuses",
    image: "/assests/images/Product Gallery/3-1-300x200.webp",
    link: "/products/hospital-effluent-treatment-systems",
    category: "Hospital effluent",
    views: [
      {
        id: "v2-1",
        title: "Hospital Effluent Treatment System (front)",
        viewTag: "Front View",
        image: "/assests/images/Product Gallery/3-1-300x200.webp",
        description: "Primary frontal view showing dual-stage electrochemical reaction chamber modules.",
      },
      {
        id: "v2-2",
        title: "Hospital Effluent Treatment System (right side)",
        viewTag: "Right Side View",
        image: "/assests/images/Product Gallery/Image-9-300x200.webp",
        description: "Right profile featuring hydraulic manifold piping and electro-oxidation electrode housing.",
      },
      {
        id: "v2-3",
        title: "Hospital Effluent Treatment System (left side)",
        viewTag: "Left Side View",
        image: "/assests/images/Product Gallery/Image-5-300x200.webp",
        description: "Left profile view showing chemical feed avoidance chamber and power delivery modules.",
      },
      {
        id: "v2-4",
        title: "Hospital Effluent Treatment System",
        viewTag: "Back View",
        image: "/assests/images/Product Gallery/IMG_0016_edited-300x200.webp",
        description: "Rear assembly showing effluent inlet pump connections, sensor ports and drainage lines.",
      },
      {
        id: "v2-5",
        title: "Hospital Effluent Treatment System",
        viewTag: "Isometric Overview",
        image: "/assests/images/Product Gallery/Hospital-wastewater-300x282.webp",
        description: "Complete industrial modular skidded assembly engineered for continuous healthcare loads.",
      },
    ],
  },
  {
    id: "v3",
    version: "ECOKLIEN V3",
    title: "Biomedical Liquid Waste Disinfection System",
    subtitle: "Point of Source System",
    filterLabel: "Disinfection System (V3)",
    description:
      "Electrochemical disinfection as a dedicated treatment step or as part of a broader wastewater treatment process, neutralizing pathogens without hazardous chemical handling.",
    designedFor: "Hospitals • Laboratories • Healthcare facilities",
    image: images.product.product2 || "/assests/images/home/Biomedical Liquid Waste Disinfection System.png",
    link: "/products/biomedical-liquid-waste-disinfection-system",
    category: "Disinfection",
    views: [
      {
        id: "v3-1",
        title: "Dedicated Electrochemical Disinfection Unit",
        viewTag: "System Overview",
        image: images.product.product2 || "/assests/images/home/Biomedical Liquid Waste Disinfection System.png",
        description: "Dedicated electrochemical disinfection unit eliminating bacterial pathogens without hazardous storage.",
      },
      {
        id: "v3-2",
        title: "Electrochemical Reaction Module",
        viewTag: "Disinfection Core",
        image: images.treatment || "/assests/images/home/Treatment.png",
        description: "Internal in-situ active oxidant generator and flow-through electrochemical disinfection cell.",
      },
      {
        id: "v3-3",
        title: "Point-of-Source Disinfection Assembly",
        viewTag: "Station Installation",
        image: images.productBML || "/assests/images/products/BML.png",
        description: "Ergonomic stainless-steel cabinet configuration ready for localized surgical or lab effluent treatment.",
      },
    ],
  },
];

// Medlab Middle East 2023 - Dubai Expo Photos
export const dubaiExpoPhotos: PhotoGalleryItem[] = [
  {
    id: "dubai-photo-1",
    title: "Exhibition booth",
    eyebrow: "EVENTS / EXHIBITIONS",
    image: "/assests/images/events/exhibition_1.jpeg",
  },
  {
    id: "dubai-photo-2",
    title: "Product demonstration",
    eyebrow: "EVENTS / EXHIBITIONS",
    image: "/assests/images/events/exhibition_2.jpeg",
  },
  {
    id: "dubai-photo-3",
    title: "Engaging the industry",
    eyebrow: "EVENTS / EXHIBITIONS",
    image: "/assests/images/events/exhibition_3.jpeg",
  },
];

// Medical Expo Hyderabad Photos (Downloaded directly from ecoklien.com)
export const hyderabadExpoPhotos: PhotoGalleryItem[] = [
  {
    id: "hyd-photo-1",
    title: "Exhibition Stall Showcase",
    eyebrow: "MEDICAL EXPO / HYDERABAD",
    image: "/assests/images/events/hyderabad_expo_1.jpg",
  },
  {
    id: "hyd-photo-2",
    title: "Healthcare Delegates Discussion",
    eyebrow: "MEDICAL EXPO / HYDERABAD",
    image: "/assests/images/events/hyderabad_expo_2.jpg",
  },
  {
    id: "hyd-photo-3",
    title: "Biomedical Platform Presentation",
    eyebrow: "MEDICAL EXPO / HYDERABAD",
    image: "/assests/images/events/hyderabad_expo_3.jpg",
  },
];

// International Participation Certificates
export const eventCertificates: CertificateItem[] = [
  {
    id: "cert-1",
    title: "East Africa Pharma & Lab Expo 2023",
    eyebrow: "PARTICIPATION / KENYA 2023",
    image: "/assests/images/events/certificate_1.jpg",
  },
  {
    id: "cert-2",
    title: "Nepal Medical & Healthcare Show 2024",
    eyebrow: "PARTICIPATION / NEPAL 2024",
    image: "/assests/images/events/certificate_2.jpg",
  },
  {
    id: "cert-3",
    title: "Nepal Medical & Healthcare Show 2025",
    eyebrow: "PARTICIPATION / NEPAL 2025",
    image: "/assests/images/events/certificate_3.jpg",
  },
];

// Events list - Photo Gallery strictly contains events only!
export const galleryEvents: EventItem[] = [
  {
    id: "medlab-dubai-2023",
    slug: "medlab-middle-east-2023",
    title: "Medlab Middle East 2023 — Dubai Expo",
    filterLabel: "Dubai Expo 2023",
    location: "Dubai World Trade Centre, UAE",
    year: "2023",
    eyebrow: "EVENTS & EXHIBITIONS · MEDLAB DUBAI 2023",
    photos: dubaiExpoPhotos,
    video: {
      id: "dubai-video-1",
      title: "Medlab Middle East 2023 — Dubai Expo",
      eyebrow: "MEDLAB MIDDLE EAST 2023",
      description: "Related event video: ECOKlien at Medlab Middle East 2023",
      thumbnail: "/assests/images/events/dubai_expo_video.png",
      youtubeId: "ce_dhnb_mPE",
      videoUrl: "https://youtube.com/shorts/ce_dhnb_mPE?si=af9KhRiMquZp7TxW",
    },
  },
  {
    id: "medical-expo-hyderabad-2025",
    slug: "medical-expo-hyderabad",
    title: "Medical Expo Hyderabad",
    filterLabel: "Hyderabad Expo",
    location: "HITEX Exhibition Centre, Hyderabad",
    year: "2025",
    eyebrow: "EVENTS & EXHIBITIONS · MEDICAL EXPO HYDERABAD",
    photos: hyderabadExpoPhotos,
    // Video and certificates are optional (not present for this event)
  },
  {
    id: "international-expos-nepal-kenya",
    slug: "nepal-kenya-shows",
    title: "East Africa & Nepal Healthcare Shows",
    filterLabel: "Kenya & Nepal Shows",
    location: "Nairobi, Kenya & Kathmandu, Nepal",
    year: "2023 - 2025",
    eyebrow: "PARTICIPATION CERTIFICATES · INTERNATIONAL SHOWS",
    photos: [],
    certificates: eventCertificates,
  },
];

// Backwards-compatible exports for existing imports
export const photoGalleryItems = dubaiExpoPhotos;
export const eventExhibitionPhotos = dubaiExpoPhotos;
export const eventVideos = [
  {
    id: "dubai-video-1",
    title: "Medlab Middle East 2023 — Dubai Expo",
    eyebrow: "MEDLAB MIDDLE EAST 2023",
    description: "Related event video: ECOKlien at Medlab Middle East 2023",
    thumbnail: "/assests/images/events/dubai_expo_video.png",
    youtubeId: "ce_dhnb_mPE",
    videoUrl: "https://youtube.com/shorts/ce_dhnb_mPE?si=af9KhRiMquZp7TxW",
  },
];
