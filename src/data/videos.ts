import { images } from "./images";

export interface VideoItem {
  id: string;
  title: string;
  subtitle?: string;
  tag: string;
  category: "Technology" | "Systems" | "Applications";
  description: string;
  thumbnail: string;
  youtubeId: string; // YouTube Video ID (e.g. "dQw4w9WgXcQ") or embed code
  isFeatured?: boolean;
}

export const featuredVideo: VideoItem = {
  id: "featured-1",
  title: "Biomedical liquid waste treatment.\nAt the source.",
  tag: "FEATURED / FACILITY OVERVIEW",
  category: "Systems",
  description:
    "Get to know ECOKlien: a compact, modular electrochemical approach to treating and disinfecting potentially contaminated liquid waste within healthcare facilities and laboratories.",
  thumbnail: images.landingHero || "/assests/images/Hero1.jpg",
  // Default YouTube embed ID (can be easily customized by user)
  youtubeId: "dQw4w9WgXcQ",
  isFeatured: true,
};

export const gridVideos: VideoItem[] = [
  {
    id: "video-1",
    title: "Inside the electrochemical approach",
    tag: "TECHNOLOGY",
    category: "Technology",
    description:
      "An introduction to electrocoagulation, separation, electro-oxidation and disinfection.",
    thumbnail: images.productHeroBg || "/assests/images/landing/Hero.png",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "video-2",
    title: "Three configurations. One principle.",
    tag: "SYSTEMS",
    category: "Systems",
    description:
      "Explore point-of-source treatment, hospital effluent treatment and dedicated disinfection.",
    thumbnail: images.product.product1 || "/assests/images/home/Hospital Effluent Treatment Systems.png",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "video-3",
    title: "Treatment in a laboratory context",
    tag: "APPLICATIONS",
    category: "Applications",
    description:
      "A closer look at liquid waste sources and the importance of understanding the incoming stream.",
    thumbnail: images.application.app2 || "/assests/images/home/Application 2.png",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "video-4",
    title: "Start with your facility",
    tag: "FACILITY PLANNING",
    category: "Applications",
    description:
      "The questions that shape a treatment discussion: source, volume, space and operating requirements.",
    thumbnail: images.application.app1 || "/assests/images/home/Application 1.png",
    youtubeId: "dQw4w9WgXcQ",
  },
];

