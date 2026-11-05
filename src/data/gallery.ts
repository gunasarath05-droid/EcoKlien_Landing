import { images } from "./images";

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
}

export interface PhotoGalleryItem {
  id: string;
  title: string;
  eyebrow: string;
  image: string;
  category: "Systems" | "Healthcare" | "Laboratories" | "Events";
  link?: string;
}

export interface EventVideoItem {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  thumbnail: string;
  youtubeId: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  eyebrow: string;
  image: string;
}

export interface EventCategoryCollection {
  id: string;
  name: string;
  category: "Events" | "Systems" | "Healthcare" | "Laboratories";
  eyebrow: string;
  photos: PhotoGalleryItem[];
  videos?: EventVideoItem[];
  certificates?: CertificateItem[];
}

export const productGalleryItems: ProductGalleryItem[] = [
  {
    id: "v1",
    version: "ECOKLIEN V1",
    title: "Biomedical Liquid Waste Treatment Systems",
    subtitle: "Point of Source System",
    description:
      "For smaller or decentralised biomedical liquid waste sources. Designed to bring treatment closer to where the waste is generated.",
    designedFor: "Laboratories • Procedure areas • Small healthcare facilities",
    image: images.productHeroBg || "/assests/images/landing/Hero.png",
    link: "/products/biomedical-liquid-waste-treatment-system",
    category: "Point of source",
  },
  {
    id: "v2",
    version: "ECOKLIEN V2",
    title: "Hospital Effluent Treatment Systems",
    subtitle: "Decentralised Facility Treatment",
    description:
      "For larger and more continuous wastewater volumes. Designed to integrate treatment into existing healthcare facility infrastructure.",
    designedFor: "Hospitals • Diagnostic centres • Healthcare campuses",
    image: images.product.product1 || "/assests/images/home/Hospital Effluent Treatment Systems.png",
    link: "/products/hospital-effluent-treatment-systems",
    category: "Hospital effluent",
  },
  {
    id: "v3",
    version: "ECOKLIEN V3",
    title: "Biomedical Liquid Waste Disinfection System",
    subtitle: "Point of Source System",
    description:
      "Electrochemical disinfection as a dedicated treatment step or as part of a broader wastewater treatment process.",
    designedFor: "Hospitals • Laboratories • Healthcare facilities",
    image: images.product.product2 || "/assests/images/home/Biomedical Liquid Waste Disinfection System.png",
    link: "/products/biomedical-liquid-waste-disinfection-system",
    category: "Disinfection",
  },
];

export const photoGalleryItems: PhotoGalleryItem[] = [
  {
    id: "photo-1",
    title: "Treatment at the source",
    eyebrow: "SYSTEMS / POINT OF SOURCE",
    image: images.productHeroBg || "/assests/images/landing/Hero.png",
    category: "Systems",
    link: "/products/biomedical-liquid-waste-treatment-system",
  },
  {
    id: "photo-2",
    title: "Engineering meets environment",
    eyebrow: "SYSTEMS / GREEN PERSPECTIVE",
    image: images.facility || "/assests/images/home/Firefly.png",
    category: "Systems",
    link: "/products/biomedical-liquid-waste-treatment-system",
  },
  {
    id: "photo-3",
    title: "Spaces for care",
    eyebrow: "APPLICATION ENVIRONMENTS / HEALTHCARE",
    image: images.application.app1 || "/assests/images/home/Application 1.png",
    category: "Healthcare",
    link: "/applications",
  },
  {
    id: "photo-4",
    title: "Spaces for science",
    eyebrow: "APPLICATION ENVIRONMENTS / LABORATORIES",
    image: images.application.app2 || "/assests/images/home/Application 2.png",
    category: "Laboratories",
    link: "/applications",
  },
  {
    id: "photo-5",
    title: "A closer look at collection",
    eyebrow: "SYSTEMS / POINT OF SOURCE",
    image: images.bloodToWater || "/assests/images/blood to water.png",
    category: "Systems",
    link: "/products/biomedical-liquid-waste-treatment-system",
  },
  {
    id: "photo-6",
    title: "One treatment platform",
    eyebrow: "SYSTEMS / THE COMPLETE RANGE",
    image: images.product.product1 || "/assests/images/home/Hospital Effluent Treatment Systems.png",
    category: "Systems",
    link: "/products/hospital-effluent-treatment-systems",
  },
];

export const eventExhibitionPhotos: PhotoGalleryItem[] = [
  {
    id: "event-photo-1",
    title: "Exhibition booth",
    eyebrow: "EVENTS / EXHIBITIONS",
    image: "/assests/images/events/exhibition_1.png",
    category: "Events",
  },
  {
    id: "event-photo-2",
    title: "Product demonstration",
    eyebrow: "EVENTS / EXHIBITIONS",
    image: "/assests/images/events/exhibition_2.png",
    category: "Events",
  },
  {
    id: "event-photo-3",
    title: "Engaging the industry",
    eyebrow: "EVENTS / EXHIBITIONS",
    image: "/assests/images/events/exhibition_3.png",
    category: "Events",
  },
];

export const eventVideos: EventVideoItem[] = [
  {
    id: "event-video-1",
    title: "Medlab Middle East 2023 — Dubai Expo",
    eyebrow: "MEDLAB MIDDLE EAST 2023",
    description: "Related event video: ECOKlien at Medlab Middle East 2023",
    thumbnail: "/assests/images/events/dubai_expo_video.png",
    youtubeId: "dQw4w9WgXcQ",
  },
];

export const eventCertificates: CertificateItem[] = [
  {
    id: "cert-1",
    title: "East Africa Pharma & Lab Expo 2023",
    eyebrow: "PARTICIPATION / KENYA 2023",
    image: "/assests/images/events/certificate_1.png",
  },
  {
    id: "cert-2",
    title: "Nepal Medical & Healthcare Show 2024",
    eyebrow: "PARTICIPATION / NEPAL 2024",
    image: "/assests/images/events/certificate_2.png",
  },
  {
    id: "cert-3",
    title: "Nepal Medical & Healthcare Show 2025",
    eyebrow: "PARTICIPATION / NEPAL 2025",
    image: "/assests/images/events/certificate_3.png",
  },
];

export const galleryCollections: EventCategoryCollection[] = [
  {
    id: "events",
    name: "Events & Exhibitions",
    category: "Events",
    eyebrow: "EVENTS & EXHIBITIONS",
    photos: eventExhibitionPhotos,
    videos: eventVideos,
    certificates: eventCertificates,
  },
  {
    id: "systems",
    name: "Systems",
    category: "Systems",
    eyebrow: "SYSTEMS / POINT OF SOURCE & EFFLUENT",
    photos: [
      photoGalleryItems[0],
      photoGalleryItems[1],
      photoGalleryItems[4],
      photoGalleryItems[5],
    ],
    // Videos and certificates are optional
    videos: [],
    certificates: [],
  },
  {
    id: "healthcare",
    name: "Healthcare Environments",
    category: "Healthcare",
    eyebrow: "APPLICATION ENVIRONMENTS / HEALTHCARE",
    photos: [photoGalleryItems[2]],
    videos: [],
    certificates: [],
  },
  {
    id: "laboratories",
    name: "Laboratory Environments",
    category: "Laboratories",
    eyebrow: "APPLICATION ENVIRONMENTS / LABORATORIES",
    photos: [photoGalleryItems[3]],
    videos: [],
    certificates: [],
  },
];
