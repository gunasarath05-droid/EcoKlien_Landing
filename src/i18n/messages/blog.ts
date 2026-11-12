import { defineMessages } from "../messages";

/** All fixed UI text on the blog index (/blog) and article pages (/blog/[slug]).
 *  Post titles, excerpts and article bodies live in src/data/blog.ts (+ src/data/i18n/{es,ar}/blog.ts). */
export const blogMessages = defineMessages(
  {
    meta: {
      title: "Blog & Insights - EcoKlien | Clearer Thinking. Better Treatment.",
      description:
        "Ideas and practical perspectives on biomedical liquid waste, electrochemical technology and treatment at the source.",
      articleTitleSuffix: " - EcoKlien Insights",
    },
    breadcrumb: {
      home: "HOME",
      media: "MEDIA",
      blog: "BLOG",
    },
    hero: {
      eyebrow: "BLOG",
      titleLines: ["Clearer thinking.", "Better treatment."],
      description:
        "Ideas and practical perspectives on biomedical liquid waste, electrochemical technology and treatment at the source.",
    },
    featured: {
      eyebrow: "FEATURED INSIGHT",
    },
    readArticle: "Read article",
    grid: {
      title: "From the journal.",
      articleCount: (count: string) => `${count} ARTICLES`,
      filters: {
        all: "All insights",
        Technology: "Technology",
        Applications: "Applications",
        "Facility planning": "Facility planning",
      },
      stripText: "TRENDING ALL ESSENTIALS / EXPLORE THE SYSTEMS TO LEARN MORE",
      discoverPlatforms: "DISCOVER PLATFORMS",
    },
    article: {
      authorLabel: "AUTHOR:",
      author: "ECOKLIEN",
      publishedLabel: "PUBLISHED:",
      publishedDate: "24 OCT 2026",
      heroCaption: "INSIGHT / TREATMENT CLOSER TO THE POINT OF LIQUID WASTE GENERATION",
      onThisPage: "ON THIS PAGE",
      share: "SHARE THIS INSIGHT",
      linkCopied: "Link copied!",
      copyLink: "Copy link",
      calloutLabel: "PERSPECTIVE / IN-SITU",
      tagsLabel: "TAGS:",
      tags: ["ON-SITE TREATMENT", "ELECTROCHEMICAL", "HOSPITALS"],
      backToBlog: "Back to Blog",
    },
    related: {
      title: "Continue the conversation.",
      insightCount: (count: string) => `${count} INSIGHTS`,
    },
  },
  {
    meta: {
      title: "Blog y perspectivas - EcoKlien | Pensamiento más claro. Mejor tratamiento.",
      description:
        "Ideas y perspectivas prácticas sobre los residuos líquidos biomédicos, la tecnología electroquímica y el tratamiento en el origen.",
      articleTitleSuffix: " - Perspectivas de EcoKlien",
    },
    breadcrumb: {
      home: "INICIO",
      media: "MEDIOS",
      blog: "BLOG",
    },
    hero: {
      eyebrow: "BLOG",
      titleLines: ["Pensamiento más claro.", "Mejor tratamiento."],
      description:
        "Ideas y perspectivas prácticas sobre los residuos líquidos biomédicos, la tecnología electroquímica y el tratamiento en el origen.",
    },
    featured: {
      eyebrow: "PERSPECTIVA DESTACADA",
    },
    readArticle: "Leer artículo",
    grid: {
      title: "De la revista.",
      articleCount: (count: string) => `${count} ARTÍCULOS`,
      filters: {
        all: "Todas las perspectivas",
        Technology: "Tecnología",
        Applications: "Aplicaciones",
        "Facility planning": "Planificación de instalaciones",
      },
      stripText: "TENDENCIAS: TODO LO ESENCIAL / EXPLORE LOS SISTEMAS PARA SABER MÁS",
      discoverPlatforms: "DESCUBRA LAS PLATAFORMAS",
    },
    article: {
      authorLabel: "AUTOR:",
      author: "ECOKLIEN",
      publishedLabel: "PUBLICADO:",
      publishedDate: "24 OCT 2026",
      heroCaption: "PERSPECTIVA / TRATAMIENTO MÁS CERCA DEL PUNTO DE GENERACIÓN DE LOS RESIDUOS LÍQUIDOS",
      onThisPage: "EN ESTA PÁGINA",
      share: "COMPARTA ESTA PERSPECTIVA",
      linkCopied: "¡Enlace copiado!",
      copyLink: "Copiar enlace",
      calloutLabel: "PERSPECTIVA / IN SITU",
      tagsLabel: "ETIQUETAS:",
      tags: ["TRATAMIENTO IN SITU", "ELECTROQUÍMICA", "HOSPITALES"],
      backToBlog: "Volver al blog",
    },
    related: {
      title: "Continúe la conversación.",
      insightCount: (count: string) => `${count} PERSPECTIVAS`,
    },
  },
  {
    meta: {
      title: "المدونة والرؤى - EcoKlien | تفكير أوضح. معالجة أفضل.",
      description:
        "أفكار ورؤى عملية حول النفايات الطبية الحيوية السائلة والتقنية الكهروكيميائية والمعالجة عند المصدر.",
      articleTitleSuffix: " - رؤى EcoKlien",
    },
    breadcrumb: {
      home: "الرئيسية",
      media: "الوسائط",
      blog: "المدونة",
    },
    hero: {
      eyebrow: "المدونة",
      titleLines: ["تفكير أوضح.", "معالجة أفضل."],
      description:
        "أفكار ورؤى عملية حول النفايات الطبية الحيوية السائلة والتقنية الكهروكيميائية والمعالجة عند المصدر.",
    },
    featured: {
      eyebrow: "رؤية مميزة",
    },
    readArticle: "اقرأ المقال",
    grid: {
      title: "من مجلتنا.",
      articleCount: (count: string) => `عدد المقالات: ${count}`,
      filters: {
        all: "جميع الرؤى",
        Technology: "التقنية",
        Applications: "التطبيقات",
        "Facility planning": "تخطيط المنشآت",
      },
      stripText: "الأكثر رواجاً: كل الأساسيات / استكشف الأنظمة لمعرفة المزيد",
      discoverPlatforms: "اكتشف المنصات",
    },
    article: {
      authorLabel: "الكاتب:",
      author: "ECOKLIEN",
      publishedLabel: "تاريخ النشر:",
      publishedDate: "24 أكتوبر 2026",
      heroCaption: "رؤية / معالجة أقرب إلى نقطة توليد النفايات السائلة",
      onThisPage: "في هذه الصفحة",
      share: "شارك هذه الرؤية",
      linkCopied: "تم نسخ الرابط!",
      copyLink: "نسخ الرابط",
      calloutLabel: "منظور / في الموقع",
      tagsLabel: "الوسوم:",
      tags: ["المعالجة في الموقع", "كهروكيميائي", "المستشفيات"],
      backToBlog: "العودة إلى المدونة",
    },
    related: {
      title: "تابع الحوار.",
      insightCount: (count: string) => `عدد الرؤى: ${count}`,
    },
  }
);
