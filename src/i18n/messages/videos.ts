import { defineMessages } from "../messages";

/** Visible UI text on the Videos page (/videos). Video titles/descriptions live in src/data/videos.ts (+ src/data/i18n). */
export const videosMessages = defineMessages(
  {
    meta: {
      title: "Videos & Explainers - EcoKlien | See the Approach. Understand the System.",
      description:
        "Explore visual explainers on ECOKlien's treatment technology, system configurations and on-site applications.",
    },
    hero: {
      breadcrumbHome: "HOME",
      breadcrumbMedia: "MEDIA",
      breadcrumbCurrent: "VIDEO",
      eyebrow: "VIDEO",
      titleLines: ["See the approach.", "Understand the system."],
      description:
        "Explore visual explainers on ECOKlien's treatment technology, system configurations and on-site applications.",
    },
    featured: {
      playAria: "Play video",
      startHere: "START HERE",
      watchVideo: "Watch video",
      openOnYouTube: "Open on YouTube",
    },
    grid: {
      filters: {
        all: "All videos",
        Technology: "Technology",
        Systems: "Systems",
        Applications: "Applications",
      },
      count: (n: string) => `${n} VIDEOS`,
      showingAll: (n: string) => `SHOWING ALL ${n} VIDEOS`,
      watchVideo: "Watch video",
      youtube: "YouTube",
      openOnYouTube: "Open on YouTube",
    },
    modal: {
      defaultTitle: "ECOKlien Video",
      playerTitle: "YouTube video player",
      youtube: "YouTube",
      close: "Close video",
    },
    cta: {
      title: "Go from an overview to your application.",
    },
  },
  {
    meta: {
      title: "Videos y explicaciones - EcoKlien | Vea el enfoque. Comprenda el sistema.",
      description:
        "Explore explicaciones visuales sobre la tecnología de tratamiento, las configuraciones del sistema y las aplicaciones in situ de ECOKlien.",
    },
    hero: {
      breadcrumbHome: "INICIO",
      breadcrumbMedia: "MEDIOS",
      breadcrumbCurrent: "VIDEO",
      eyebrow: "VIDEO",
      titleLines: ["Vea el enfoque.", "Comprenda el sistema."],
      description:
        "Explore explicaciones visuales sobre la tecnología de tratamiento, las configuraciones del sistema y las aplicaciones in situ de ECOKlien.",
    },
    featured: {
      playAria: "Reproducir video",
      startHere: "EMPIECE AQUÍ",
      watchVideo: "Ver video",
      openOnYouTube: "Abrir en YouTube",
    },
    grid: {
      filters: {
        all: "Todos los videos",
        Technology: "Tecnología",
        Systems: "Sistemas",
        Applications: "Aplicaciones",
      },
      count: (n: string) => `${n} VIDEOS`,
      showingAll: (n: string) => `MOSTRANDO LOS ${n} VIDEOS`,
      watchVideo: "Ver video",
      youtube: "YouTube",
      openOnYouTube: "Abrir en YouTube",
    },
    modal: {
      defaultTitle: "Video de ECOKlien",
      playerTitle: "Reproductor de video de YouTube",
      youtube: "YouTube",
      close: "Cerrar video",
    },
    cta: {
      title: "Pase de una visión general a su aplicación.",
    },
  },
  {
    meta: {
      title: "مقاطع الفيديو والشروحات - EcoKlien | شاهدوا النهج. افهموا النظام.",
      description:
        "استكشفوا شروحات مرئية حول تقنية المعالجة لدى ECOKlien وتهيئات النظام والتطبيقات في الموقع.",
    },
    hero: {
      breadcrumbHome: "الرئيسية",
      breadcrumbMedia: "الوسائط",
      breadcrumbCurrent: "الفيديو",
      eyebrow: "الفيديو",
      titleLines: ["شاهدوا النهج.", "افهموا النظام."],
      description:
        "استكشفوا شروحات مرئية حول تقنية المعالجة لدى ECOKlien وتهيئات النظام والتطبيقات في الموقع.",
    },
    featured: {
      playAria: "تشغيل الفيديو",
      startHere: "ابدأ من هنا",
      watchVideo: "مشاهدة الفيديو",
      openOnYouTube: "فتح على YouTube",
    },
    grid: {
      filters: {
        all: "جميع مقاطع الفيديو",
        Technology: "التقنية",
        Systems: "الأنظمة",
        Applications: "التطبيقات",
      },
      count: (n: string) => `مقاطع الفيديو: ${n}`,
      showingAll: (n: string) => `عرض جميع مقاطع الفيديو: ${n}`,
      watchVideo: "مشاهدة الفيديو",
      youtube: "YouTube",
      openOnYouTube: "فتح على YouTube",
    },
    modal: {
      defaultTitle: "فيديو ECOKlien",
      playerTitle: "مشغّل فيديو YouTube",
      youtube: "YouTube",
      close: "إغلاق الفيديو",
    },
    cta: {
      title: "انتقلوا من النظرة العامة إلى تطبيقكم.",
    },
  }
);
