import { defineMessages } from "../messages";

/**
 * Fixed UI text on the product pages (/products, /products/[slug]).
 * Product content itself (titles, descriptions, steps…) lives in src/data/products.ts
 * with translations in src/data/i18n/{es,ar}/products.ts.
 */
export const productMessages = defineMessages(
  {
    technology: {
      headingLines: ["Meet ECOKlien's BML — One system.", "Multiple treatment stages."],
    },
    flow: {
      backgroundAlt: "Fluid ripple treatment background",
      fluidAlt: "Bio-waste fluid splash",
      fluidsHeadingLines: ["From blood to body", "fluids."],
      streams: {
        lab: "Laboratory processes",
        dialysis: "Dialysis waste",
        sputum: "Sputum",
        urine: "Urine",
        blood: "Blood",
        fluids: "Body fluids",
      },
    },
    configurations: {
      model: "Model",
      flowRate: "Flow rate",
      dailyCapacity: "Daily capacity",
      ctaImageAlt: "ECOKlien Custom Application",
    },
  },
  {
    technology: {
      headingLines: ["Conozca el BML de ECOKlien: un sistema.", "Múltiples etapas de tratamiento."],
    },
    flow: {
      backgroundAlt: "Fondo de ondas de fluido para el tratamiento",
      fluidAlt: "Salpicadura de fluido de residuos biológicos",
      fluidsHeadingLines: ["De la sangre a los fluidos", "corporales."],
      streams: {
        lab: "Procesos de laboratorio",
        dialysis: "Residuos de diálisis",
        sputum: "Esputo",
        urine: "Orina",
        blood: "Sangre",
        fluids: "Fluidos corporales",
      },
    },
    configurations: {
      model: "Modelo",
      flowRate: "Caudal",
      dailyCapacity: "Capacidad diaria",
      ctaImageAlt: "Aplicación personalizada de ECOKlien",
    },
  },
  {
    technology: {
      headingLines: ["تعرّف على نظام BML من ECOKlien — نظام واحد.", "مراحل معالجة متعددة."],
    },
    flow: {
      backgroundAlt: "خلفية تموجات سائلة للمعالجة",
      fluidAlt: "رذاذ سائل من النفايات الحيوية",
      fluidsHeadingLines: ["من الدم إلى", "سوائل الجسم."],
      streams: {
        lab: "عمليات المختبر",
        dialysis: "نفايات غسيل الكلى",
        sputum: "البلغم",
        urine: "البول",
        blood: "الدم",
        fluids: "سوائل الجسم",
      },
    },
    configurations: {
      model: "الطراز",
      flowRate: "معدل التدفق",
      dailyCapacity: "السعة اليومية",
      ctaImageAlt: "تطبيق مخصص من ECOKlien",
    },
  }
);
