import { defineMessages } from "../messages";

/**
 * All visible UI text on the photo gallery (/photo-gallery).
 * Gallery content (event titles, photo captions…) lives in src/data/gallery.ts
 * with translations in src/data/i18n/{es,ar}/gallery.ts.
 * Count labels use a "{count}" placeholder; search messages use "{query}".
 */
export const photoGalleryMessages = defineMessages(
  {
    meta: {
      title: "Photo Gallery - EcoKlien | Systems & Facility Environments",
      description:
        "A visual collection of ECOKlien systems and the healthcare and laboratory environments they are designed to serve.",
    },
    hero: {
      breadcrumbHome: "HOME",
      breadcrumbMedia: "MEDIA",
      breadcrumbCurrent: "PHOTO GALLERY",
      eyebrow: "PHOTO GALLERY",
      titleLine1: "Engineering,",
      titleLine2: "in perspective.",
      description:
        "A visual collection of ECOKlien systems and the healthcare and laboratory environments they are designed to serve.",
    },
    grid: {
      allEvents: "All events",
      searchPlaceholder: "Search events, photos...",
      clearSearch: "Clear search",
      photosCount: "{count} PHOTOGRAPHS",
      certificatesCount: "{count} CERTIFICATES",
      videoCount: "{count} VIDEO",
      relatedVideoCount: "{count} RELATED VIDEO",
      videos: "VIDEOS",
      playVideo: "Play video",
      watchOnYoutube: "Watch on YouTube",
      participationCertificates: "PARTICIPATION CERTIFICATES",
      noResults: "No matching events found for “{query}”.",
      noResultsHint: "Try a different keyword or reset the event filter.",
      resetFilters: "Reset filters",
      footerNote:
        "Exhibition photographs, participation certificates and media are documented from ECOKlien's global event attendances and industry showcases.",
    },
    cta: {
      title: "See how ECOKlien could fit your facility.",
    },
  },
  {
    meta: {
      title: "Galería de fotos - EcoKlien | Sistemas y entornos de las instalaciones",
      description:
        "Una colección visual de los sistemas ECOKlien y de los entornos sanitarios y de laboratorio a los que están diseñados para servir.",
    },
    hero: {
      breadcrumbHome: "INICIO",
      breadcrumbMedia: "MEDIOS",
      breadcrumbCurrent: "GALERÍA DE FOTOS",
      eyebrow: "GALERÍA DE FOTOS",
      titleLine1: "Ingeniería,",
      titleLine2: "en perspectiva.",
      description:
        "Una colección visual de los sistemas ECOKlien y de los entornos sanitarios y de laboratorio a los que están diseñados para servir.",
    },
    grid: {
      allEvents: "Todos los eventos",
      searchPlaceholder: "Buscar eventos, fotos...",
      clearSearch: "Borrar búsqueda",
      photosCount: "{count} FOTOGRAFÍAS",
      certificatesCount: "{count} CERTIFICADOS",
      videoCount: "{count} VIDEO",
      relatedVideoCount: "{count} VIDEO RELACIONADO",
      videos: "VIDEOS",
      playVideo: "Reproducir video",
      watchOnYoutube: "Ver en YouTube",
      participationCertificates: "CERTIFICADOS DE PARTICIPACIÓN",
      noResults: "No se encontraron eventos que coincidan con «{query}».",
      noResultsHint: "Pruebe con otra palabra clave o restablezca el filtro de eventos.",
      resetFilters: "Restablecer filtros",
      footerNote:
        "Las fotografías de exposiciones, los certificados de participación y el material multimedia documentan la asistencia de ECOKlien a eventos internacionales y muestras del sector.",
    },
    cta: {
      title: "Descubra cómo ECOKlien podría adaptarse a su instalación.",
    },
  },
  {
    meta: {
      title: "معرض الصور - EcoKlien | الأنظمة وبيئات المنشآت",
      description:
        "مجموعة مرئية من أنظمة ECOKlien وبيئات الرعاية الصحية والمختبرات التي صُمّمت لخدمتها.",
    },
    hero: {
      breadcrumbHome: "الرئيسية",
      breadcrumbMedia: "الوسائط",
      breadcrumbCurrent: "معرض الصور",
      eyebrow: "معرض الصور",
      titleLine1: "الهندسة،",
      titleLine2: "في سياقها.",
      description:
        "مجموعة مرئية من أنظمة ECOKlien وبيئات الرعاية الصحية والمختبرات التي صُمّمت لخدمتها.",
    },
    grid: {
      allEvents: "جميع الفعاليات",
      searchPlaceholder: "ابحث في الفعاليات والصور...",
      clearSearch: "مسح البحث",
      photosCount: "الصور: {count}",
      certificatesCount: "الشهادات: {count}",
      videoCount: "الفيديو: {count}",
      relatedVideoCount: "مقاطع الفيديو ذات الصلة: {count}",
      videos: "مقاطع الفيديو",
      playVideo: "تشغيل الفيديو",
      watchOnYoutube: "المشاهدة على YouTube",
      participationCertificates: "شهادات المشاركة",
      noResults: "لم يتم العثور على فعاليات مطابقة لـ «{query}».",
      noResultsHint: "جرّب كلمة مفتاحية مختلفة أو أعد ضبط عامل تصفية الفعاليات.",
      resetFilters: "إعادة ضبط عوامل التصفية",
      footerNote:
        "وُثّقت صور المعارض وشهادات المشاركة والمواد الإعلامية من مشاركات ECOKlien في الفعاليات العالمية ومعارض القطاع.",
    },
    cta: {
      title: "اكتشف كيف يمكن أن يتلاءم ECOKlien مع منشأتك.",
    },
  }
);

/** All visible UI text on the product gallery (/product-gallery). */
export const productGalleryMessages = defineMessages(
  {
    meta: {
      title: "Product Gallery - EcoKlien | System Configurations & Models",
      description:
        "Explore ECOKlien's electrochemical systems, from point-of-source biomedical liquid waste treatment to hospital effluent treatment.",
    },
    hero: {
      breadcrumbHome: "HOME",
      breadcrumbMedia: "MEDIA",
      breadcrumbCurrent: "PRODUCT GALLERY",
      eyebrow: "PRODUCT GALLERY",
      titleLine1: "One platform.",
      titleLine2: "A closer look.",
      description:
        "Explore ECOKlien's electrochemical systems, from point-of-source biomedical liquid waste treatment to hospital effluent treatment.",
    },
    grid: {
      allProducts: "All products",
      searchPlaceholder: "Search views, angles...",
      clearSearch: "Clear search",
      systemViewsCount: "{count} SYSTEM VIEWS",
      configurationsCount: "{count} CONFIGURATIONS",
      viewSpecs: "View system specs",
      noResults: "No matching system views found for “{query}”.",
      noResultsHint: "Try a different keyword or reset the product filter.",
      resetFilters: "Reset filters",
      footerNote:
        "Product imagery showcases authentic architectural views, internal reactors, front panels, and plumbing connections of ECOKlien's modular wastewater treatment systems.",
    },
    tech: {
      eyebrow: "ENGINEERING FOR YOUR FACILITY",
      titleLine1: "Serious technology.",
      titleLine2: "Practical proportions.",
      description: "A compact, modular and plug-and-play approach to treatment within the facility.",
      familyAlt: "ECOKlien System Family",
      familyBadge: "ECOKlien / SYSTEM FAMILY",
      familyCaption: "HYBRID ELECTROCHEMICAL TREATMENT APPROACH",
      sinkAlt: "Point of Source Collection Sink",
      sinkCaption: "POINT-OF-SOURCE / LIQUID WASTE COLLECTION",
      features: {
        compact: {
          title: "Compact footprint",
          description: "Space-conscious engineering for treatment closer to generation.",
        },
        modular: {
          title: "Modular configuration",
          description: "An approach shaped around your facility's treatment needs.",
        },
        plugAndPlay: {
          title: "Plug-and-play design",
          description: "Making on-site biomedical liquid waste treatment more practical.",
        },
      },
    },
    cta: {
      title: "Which configuration fits your facility?",
    },
  },
  {
    meta: {
      title: "Galería de productos - EcoKlien | Configuraciones y modelos de sistemas",
      description:
        "Explore los sistemas electroquímicos de ECOKlien, desde el tratamiento de residuos líquidos biomédicos en el punto de origen hasta el tratamiento de efluentes hospitalarios.",
    },
    hero: {
      breadcrumbHome: "INICIO",
      breadcrumbMedia: "MEDIOS",
      breadcrumbCurrent: "GALERÍA DE PRODUCTOS",
      eyebrow: "GALERÍA DE PRODUCTOS",
      titleLine1: "Una plataforma.",
      titleLine2: "Una mirada más cercana.",
      description:
        "Explore los sistemas electroquímicos de ECOKlien, desde el tratamiento de residuos líquidos biomédicos en el punto de origen hasta el tratamiento de efluentes hospitalarios.",
    },
    grid: {
      allProducts: "Todos los productos",
      searchPlaceholder: "Buscar vistas, ángulos...",
      clearSearch: "Borrar búsqueda",
      systemViewsCount: "{count} VISTAS DEL SISTEMA",
      configurationsCount: "{count} CONFIGURACIONES",
      viewSpecs: "Ver especificaciones del sistema",
      noResults: "No se encontraron vistas del sistema que coincidan con «{query}».",
      noResultsHint: "Pruebe con otra palabra clave o restablezca el filtro de productos.",
      resetFilters: "Restablecer filtros",
      footerNote:
        "Las imágenes de los productos muestran vistas arquitectónicas reales, reactores internos, paneles frontales y conexiones de tuberías de los sistemas modulares de tratamiento de aguas residuales de ECOKlien.",
    },
    tech: {
      eyebrow: "INGENIERÍA PARA SU INSTALACIÓN",
      titleLine1: "Tecnología seria.",
      titleLine2: "Proporciones prácticas.",
      description:
        "Un enfoque compacto, modular y plug-and-play (listo para usar) para el tratamiento dentro de la instalación.",
      familyAlt: "Familia de sistemas ECOKlien",
      familyBadge: "ECOKlien / FAMILIA DE SISTEMAS",
      familyCaption: "ENFOQUE DE TRATAMIENTO ELECTROQUÍMICO HÍBRIDO",
      sinkAlt: "Lavabo de recolección en el punto de origen",
      sinkCaption: "PUNTO DE ORIGEN / RECOLECCIÓN DE RESIDUOS LÍQUIDOS",
      features: {
        compact: {
          title: "Tamaño compacto",
          description: "Ingeniería que optimiza el espacio para tratar más cerca del punto de generación.",
        },
        modular: {
          title: "Configuración modular",
          description: "Un enfoque adaptado a las necesidades de tratamiento de su instalación.",
        },
        plugAndPlay: {
          title: "Diseño plug-and-play",
          description: "Hace más práctico el tratamiento in situ de residuos líquidos biomédicos.",
        },
      },
    },
    cta: {
      title: "¿Qué configuración se adapta a su instalación?",
    },
  },
  {
    meta: {
      title: "معرض المنتجات - EcoKlien | تهيئات الأنظمة وطرازاتها",
      description:
        "استكشف أنظمة ECOKlien الكهروكيميائية، بدءًا من معالجة النفايات الطبية الحيوية السائلة عند نقطة المصدر وصولًا إلى معالجة مياه الصرف في المستشفيات.",
    },
    hero: {
      breadcrumbHome: "الرئيسية",
      breadcrumbMedia: "الوسائط",
      breadcrumbCurrent: "معرض المنتجات",
      eyebrow: "معرض المنتجات",
      titleLine1: "منصة واحدة.",
      titleLine2: "نظرة أقرب.",
      description:
        "استكشف أنظمة ECOKlien الكهروكيميائية، بدءًا من معالجة النفايات الطبية الحيوية السائلة عند نقطة المصدر وصولًا إلى معالجة مياه الصرف في المستشفيات.",
    },
    grid: {
      allProducts: "جميع المنتجات",
      searchPlaceholder: "ابحث في المناظر والزوايا...",
      clearSearch: "مسح البحث",
      systemViewsCount: "مناظر النظام: {count}",
      configurationsCount: "التهيئات: {count}",
      viewSpecs: "عرض مواصفات النظام",
      noResults: "لم يتم العثور على مناظر للنظام مطابقة لـ «{query}».",
      noResultsHint: "جرّب كلمة مفتاحية مختلفة أو أعد ضبط عامل تصفية المنتجات.",
      resetFilters: "إعادة ضبط عوامل التصفية",
      footerNote:
        "تعرض صور المنتجات مناظر معمارية حقيقية والمفاعلات الداخلية واللوحات الأمامية وتوصيلات السباكة لأنظمة ECOKlien المعيارية لمعالجة مياه الصرف.",
    },
    tech: {
      eyebrow: "هندسة مصمّمة لمنشأتك",
      titleLine1: "تقنية جادّة.",
      titleLine2: "أبعاد عملية.",
      description: "نهج مدمج ومعياري وجاهز للتشغيل الفوري (plug-and-play) للمعالجة داخل المنشأة.",
      familyAlt: "عائلة أنظمة ECOKlien",
      familyBadge: "ECOKlien / عائلة الأنظمة",
      familyCaption: "نهج المعالجة الكهروكيميائية الهجينة",
      sinkAlt: "حوض التجميع عند نقطة المصدر",
      sinkCaption: "نقطة المصدر / تجميع النفايات السائلة",
      features: {
        compact: {
          title: "حيّز صغير",
          description: "هندسة موفّرة للمساحة لمعالجة أقرب إلى مكان توليد النفايات.",
        },
        modular: {
          title: "تهيئة معيارية",
          description: "نهج مصمّم وفق احتياجات المعالجة في منشأتك.",
        },
        plugAndPlay: {
          title: "تصميم جاهز للتشغيل الفوري",
          description: "يجعل معالجة النفايات الطبية الحيوية السائلة في الموقع أكثر عملية.",
        },
      },
    },
    cta: {
      title: "ما التهيئة المناسبة لمنشأتك؟",
    },
  }
);

/** Image preview modal shared by both galleries. */
export const galleryLightboxMessages = defineMessages(
  {
    fallbackTitle: "Gallery Preview",
    fallbackAlt: "Gallery preview",
    close: "Close image",
  },
  {
    fallbackTitle: "Vista previa de la galería",
    fallbackAlt: "Vista previa de la galería",
    close: "Cerrar imagen",
  },
  {
    fallbackTitle: "معاينة المعرض",
    fallbackAlt: "معاينة المعرض",
    close: "إغلاق الصورة",
  }
);

/** Fill a "{count}" label with a zero-padded number (e.g. "05 PHOTOGRAPHS"). */
export function formatCount(label: string, count: number): string {
  return label.replace("{count}", String(count).padStart(2, "0"));
}
