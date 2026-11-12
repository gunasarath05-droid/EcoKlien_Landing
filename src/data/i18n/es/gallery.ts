import type { GalleryTranslations } from "../../gallery";

/**
 * Spanish gallery translations: text fields only, keyed by `id` (see src/i18n/README.md).
 * Images, links, versions and category values come from src/data/gallery.ts.
 * Event names that are proper nouns (Medlab Middle East, certificate show names) stay as written.
 */

export const productGallery: GalleryTranslations["productGallery"] = [
  {
    id: "v1",
    title: "Sistemas de tratamiento de residuos líquidos biomédicos",
    subtitle: "Sistema en el punto de origen",
    filterLabel: "Tratamiento biomédico (V1)",
    description:
      "Para fuentes de residuos líquidos biomédicos más pequeñas o descentralizadas. Reactor electroquímico compacto in situ que acerca el tratamiento al lugar donde se generan los residuos.",
    designedFor: "Laboratorios • Áreas de procedimientos • Pequeños centros de salud",
    views: [
      {
        id: "v1-1",
        title: "El nuevo sistema de tratamiento biomédico",
        viewTag: "Vista frontal",
        description: "Perspectiva frontal de exhibición del sistema compacto de reactor electroquímico in situ.",
      },
      {
        id: "v1-2",
        title: "El nuevo sistema BML — Pantalla de control",
        viewTag: "Panel táctil",
        description: "Panel táctil PLC interactivo para la supervisión en tiempo real y la automatización de ciclos.",
      },
      {
        id: "v1-3",
        title: "Sistema de tratamiento de aguas residuales biomédicas",
        viewTag: "Perspectiva en ángulo",
        description:
          "Gabinete que optimiza el espacio, diseñado para adaptarse a salas de procedimientos y áreas de recolección de laboratorios.",
      },
      {
        id: "v1-4",
        title: "Sistema de tratamiento de aguas residuales biomédicas",
        viewTag: "Disposición del gabinete",
        description:
          "Conexiones de tuberías externas, puertos de entrada/salida e interfaz de aislamiento de emergencia.",
      },
      {
        id: "v1-5",
        title: "Sistema de tratamiento de aguas residuales biomédicas",
        viewTag: "Vista lateral del gabinete",
        description:
          "Rejillas de ventilación laterales y puntos de acceso ergonómicos para un mantenimiento sin complicaciones.",
      },
    ],
  },
  {
    id: "v2",
    title: "Sistemas de tratamiento de efluentes hospitalarios",
    subtitle: "Tratamiento descentralizado en la instalación",
    filterLabel: "Efluentes hospitalarios (V2)",
    description:
      "Para volúmenes de aguas residuales mayores y más continuos. Arquitectura electroquímica modular diseñada para integrarse directamente en las tuberías de aguas residuales de los centros de salud.",
    designedFor: "Hospitales • Centros de diagnóstico • Complejos sanitarios",
    views: [
      {
        id: "v2-1",
        title: "Sistema de tratamiento de efluentes hospitalarios (frente)",
        viewTag: "Vista frontal",
        description:
          "Vista frontal principal que muestra los módulos de la cámara de reacción electroquímica de dos etapas.",
      },
      {
        id: "v2-2",
        title: "Sistema de tratamiento de efluentes hospitalarios (lado derecho)",
        viewTag: "Vista lateral derecha",
        description:
          "Perfil derecho con la tubería del colector hidráulico y el alojamiento de los electrodos de electrooxidación.",
      },
      {
        id: "v2-3",
        title: "Sistema de tratamiento de efluentes hospitalarios (lado izquierdo)",
        viewTag: "Vista lateral izquierda",
        description:
          "Vista del perfil izquierdo que muestra la cámara que evita la dosificación química y los módulos de suministro de energía.",
      },
      {
        id: "v2-4",
        title: "Sistema de tratamiento de efluentes hospitalarios",
        viewTag: "Vista posterior",
        description:
          "Conjunto posterior que muestra las conexiones de la bomba de entrada de efluentes, los puertos de sensores y las líneas de drenaje.",
      },
      {
        id: "v2-5",
        title: "Sistema de tratamiento de efluentes hospitalarios",
        viewTag: "Vista isométrica general",
        description:
          "Conjunto modular industrial completo montado sobre patín, diseñado para cargas continuas del ámbito sanitario.",
      },
    ],
  },
  {
    id: "v3",
    title: "Sistema de desinfección de residuos líquidos biomédicos",
    subtitle: "Sistema en el punto de origen",
    filterLabel: "Sistema de desinfección (V3)",
    description:
      "Desinfección electroquímica como etapa de tratamiento específica o como parte de un proceso más amplio de tratamiento de aguas residuales, que neutraliza los patógenos sin manipular productos químicos peligrosos.",
    designedFor: "Hospitales • Laboratorios • Centros de salud",
    views: [
      {
        id: "v3-1",
        title: "Unidad específica de desinfección electroquímica",
        viewTag: "Vista general del sistema",
        description:
          "Unidad específica de desinfección electroquímica que elimina patógenos bacterianos sin almacenamiento de sustancias peligrosas.",
      },
      {
        id: "v3-2",
        title: "Módulo de reacción electroquímica",
        viewTag: "Núcleo de desinfección",
        description:
          "Generador interno de oxidantes activos in situ y celda de desinfección electroquímica de flujo continuo.",
      },
      {
        id: "v3-3",
        title: "Conjunto de desinfección en el punto de origen",
        viewTag: "Instalación en estación",
        description:
          "Configuración de gabinete ergonómico de acero inoxidable, lista para el tratamiento localizado de efluentes quirúrgicos o de laboratorio.",
      },
    ],
  },
];

export const galleryEvents: GalleryTranslations["galleryEvents"] = [
  {
    id: "medlab-dubai-2023",
    title: "Medlab Middle East 2023 — Exposición de Dubái",
    filterLabel: "Exposición de Dubái 2023",
    location: "Dubai World Trade Centre, EAU",
    eyebrow: "EVENTOS Y EXPOSICIONES · MEDLAB DUBÁI 2023",
  },
  {
    id: "medical-expo-hyderabad-2025",
    title: "Exposición Médica de Hyderabad",
    filterLabel: "Exposición de Hyderabad",
    location: "Centro de Exposiciones HITEX, Hyderabad",
    eyebrow: "EVENTOS Y EXPOSICIONES · EXPOSICIÓN MÉDICA DE HYDERABAD",
  },
  {
    id: "international-expos-nepal-kenya",
    title: "Ferias de salud de África Oriental y Nepal",
    filterLabel: "Ferias de Kenia y Nepal",
    location: "Nairobi, Kenia y Katmandú, Nepal",
    eyebrow: "CERTIFICADOS DE PARTICIPACIÓN · FERIAS INTERNACIONALES",
  },
];

export const galleryPhotos: GalleryTranslations["galleryPhotos"] = [
  { id: "dubai-photo-1", title: "Stand de exhibición", eyebrow: "EVENTOS / EXPOSICIONES" },
  { id: "dubai-photo-2", title: "Demostración de producto", eyebrow: "EVENTOS / EXPOSICIONES" },
  { id: "dubai-photo-3", title: "Interactuando con la industria", eyebrow: "EVENTOS / EXPOSICIONES" },
  { id: "hyd-photo-1", title: "Exhibición en el stand", eyebrow: "EXPOSICIÓN MÉDICA / HYDERABAD" },
  { id: "hyd-photo-2", title: "Diálogo con delegados del sector sanitario", eyebrow: "EXPOSICIÓN MÉDICA / HYDERABAD" },
  { id: "hyd-photo-3", title: "Presentación de la plataforma biomédica", eyebrow: "EXPOSICIÓN MÉDICA / HYDERABAD" },
];

export const galleryVideos: GalleryTranslations["galleryVideos"] = [
  {
    id: "dubai-video-1",
    title: "Medlab Middle East 2023 — Exposición de Dubái",
    description: "Video relacionado con el evento: ECOKlien en Medlab Middle East 2023",
  },
];

export const galleryCertificates: GalleryTranslations["galleryCertificates"] = [
  { id: "cert-1", eyebrow: "PARTICIPACIÓN / KENIA 2023" },
  { id: "cert-2", eyebrow: "PARTICIPACIÓN / NEPAL 2024" },
  { id: "cert-3", eyebrow: "PARTICIPACIÓN / NEPAL 2025" },
];
