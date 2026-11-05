export interface VideoItem {
  id: string;
  title: string;
  subtitle?: string;
  tag: string;
  category: "Technology" | "Systems" | "Applications";
  description: string;
  thumbnail: string;
  youtubeId: string;
  videoUrl?: string;
  isFeatured?: boolean;
}

export const featuredVideo: VideoItem = {
  id: "video-1",
  title: "Redefining Biomedical Liquid Waste Treatment",
  tag: "FEATURED / HYBRID SYSTEMS",
  category: "Technology",
  description:
    "A compilation of videos detailing ECOKlien's advanced hybrid electrochemical treatment systems and decentralised point-of-source approach for healthcare and laboratories.",
  thumbnail: "/assests/images/videos/video_1.jpg",
  youtubeId: "dEqYjJIZciQ",
  videoUrl: "https://www.youtube.com/watch?v=dEqYjJIZciQ&list=PLtU5RHes_z6Jyu8ZvEszvXwVp5niEC-Hq&index=1",
  isFeatured: true,
};

export const gridVideos: VideoItem[] = [
  {
    id: "video-1",
    title: "Redefining Biomedical Liquid Waste Treatment",
    tag: "HYBRID SYSTEMS",
    category: "Technology",
    description:
      "A comprehensive look at ECOKlien's advanced hybrid electrochemical systems, bringing point-of-source treatment directly to healthcare facilities.",
    thumbnail: "/assests/images/videos/video_1.jpg",
    youtubeId: "dEqYjJIZciQ",
    videoUrl: "https://www.youtube.com/watch?v=dEqYjJIZciQ&list=PLtU5RHes_z6Jyu8ZvEszvXwVp5niEC-Hq&index=1",
  },
  {
    id: "video-2",
    title: "Biomedical Liquid Waste & Communities Living on the Edge",
    tag: "COMMUNITY IMPACT",
    category: "Applications",
    description:
      "Examining public health and environmental vulnerabilities when untreated medical wastewater reaches residential communities and shared water sources.",
    thumbnail: "/assests/images/videos/video_2.jpg",
    youtubeId: "klqtfiKQceo",
    videoUrl: "https://youtu.be/klqtfiKQceo?si=nm8X4UyyOU4jG-Ad",
  },
  {
    id: "video-3",
    title: "Effects of Biomedical Liquid Waste and Hospital Effluent on Environment",
    tag: "ENVIRONMENTAL IMPACT",
    category: "Applications",
    description:
      "How persistent chemical compounds, pathogens, and laboratory effluents disrupt ecosystems and pollute regional groundwater tables.",
    thumbnail: "/assests/images/videos/video_3.jpg",
    youtubeId: "YhEMz7XjUas",
    videoUrl: "https://youtu.be/YhEMz7XjUas?si=_8xWhsNdowdvjPqX",
  },
  {
    id: "video-4",
    title: "Redefining Hospital Effluent Treatment",
    tag: "FACILITY SYSTEMS",
    category: "Systems",
    description:
      "Moving beyond conventional massive civil infrastructure to compact, decentralised on-site electrochemical effluent treatment.",
    thumbnail: "/assests/images/videos/video_4.jpg",
    youtubeId: "f0R-hbv9BFI",
    videoUrl: "https://youtu.be/f0R-hbv9BFI?si=5WtPKpTIajVctpMm",
  },
  {
    id: "video-5",
    title: "Challenges In Biomedical Liquid Waste Treatment",
    tag: "TECHNICAL CHALLENGES",
    category: "Technology",
    description:
      "Addressing variable chemical loads, disinfection resistance, and hazardous reagent storage in healthcare facility operations.",
    thumbnail: "/assests/images/videos/video_5.jpg",
    youtubeId: "0WJVXbKnf1k",
    videoUrl: "https://youtu.be/0WJVXbKnf1k?si=iO20dEFjuohZy5Li",
  },
  {
    id: "video-6",
    title: "Legalities for Liquid Biomedical Waste Treatment",
    tag: "REGULATORY COMPLIANCE",
    category: "Applications",
    description:
      "Navigating pollution control board guidelines, biomedical waste management rules, and mandatory discharge standards.",
    thumbnail: "/assests/images/videos/video_6.jpg",
    youtubeId: "_rd-ubDDOs8",
    videoUrl: "https://youtu.be/_rd-ubDDOs8?si=H2s58rD0aQ2Nkkrx",
  },
  {
    id: "video-7",
    title: "Biomedical Liquid Waste - A Global Threat to Water Bodies",
    tag: "GLOBAL WATER SECURITY",
    category: "Applications",
    description:
      "Why antimicrobial resistance and pharmaceutical trace residues in open water bodies have become an urgent global challenge.",
    thumbnail: "/assests/images/videos/video_7.jpg",
    youtubeId: "ubAav2RIFPQ",
    videoUrl: "https://youtu.be/ubAav2RIFPQ?si=w5RFiLEhvXzOob6E",
  },
  {
    id: "video-8",
    title: "Dubai Expo | Biomedical Liquid Waste Technology",
    tag: "GLOBAL SHOWCASE",
    category: "Systems",
    description:
      "ECOKlien demonstrating live electrochemical disinfection and point-of-source treatment at Medlab Middle East, Dubai World Trade Centre.",
    thumbnail: "/assests/images/videos/video_8.jpg",
    youtubeId: "ce_dhnb_mPE",
    videoUrl: "https://youtube.com/shorts/ce_dhnb_mPE?si=af9KhRiMquZp7TxW",
  },
  {
    id: "video-9",
    title: "Why Hospitals Need Liquid Waste Management",
    tag: "HOSPITAL GOVERNANCE",
    category: "Systems",
    description:
      "How reliable effluent treatment protects hospital personnel, meets accreditation requirements, and prevents secondary infections.",
    thumbnail: "/assests/images/videos/video_9.jpg",
    youtubeId: "tC3UGVpqyA8",
    videoUrl: "https://youtu.be/tC3UGVpqyA8?si=j2ffIdp316_1x1X6",
  },
  {
    id: "video-10",
    title: "Surprising Secrets of Microbes: Hospital Effluent Treatment",
    tag: "MICROBIAL SCIENCE",
    category: "Technology",
    description:
      "Understanding biofilm persistence, spore defenses, and how multi-stage electrochemical oxidation neutralizes resistant organisms.",
    thumbnail: "/assests/images/videos/video_10.jpg",
    youtubeId: "kCPpecFo0xA",
    videoUrl: "https://youtu.be/kCPpecFo0xA?si=_fCv5Je6x0btcPrp",
  },
  {
    id: "video-11",
    title: "Reclaimed Water from Hospital Effluent Wastewater",
    tag: "CIRCULAR WATER REUSE",
    category: "Technology",
    description:
      "Reclaiming treated healthcare wastewater for non-potable utility purposes, flushing, cooling, and landscape irrigation.",
    thumbnail: "/assests/images/videos/video_11.jpg",
    youtubeId: "HAJFotyg6pY",
    videoUrl: "https://youtu.be/HAJFotyg6pY?si=zi3X_fKCRiCh80lO",
  },
  {
    id: "video-12",
    title: "COVID JN.1 Spread Through Wastewater",
    tag: "PANDEMIC SURVEILLANCE",
    category: "Applications",
    description:
      "Wastewater epidemiology insights into viral shedding pathways and why source decontamination is vital for public health security.",
    thumbnail: "/assests/images/videos/video_12.jpg",
    youtubeId: "yWBmmu3qC9o",
    videoUrl: "https://youtu.be/yWBmmu3qC9o?list=PLtU5RHes_z6Jyu8ZvEszvXwVp5niEC-Hq",
  },
];
