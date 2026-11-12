import { defineMessages } from "../messages";

/**
 * Fixed UI text on the product pages (/products, /products/[slug]).
 * Product content itself (titles, descriptions, steps…) lives in src/data/products.ts
 * with translations in src/data/i18n/{es,ar}/products.ts.
 */
export const productMessages = defineMessages(
  {
    technology: {
      eyebrow: "THE PRODUCT",
      headingLines: ["Meet ECOKlien's BML — One system.", "Multiple treatment stages."],
      imageTag: "ECOKlien / Biomedical liquid waste treatment system",
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
      modelName: "Model name",
      capacity: "Treatment capacity (LPD)",
      modelType: "Model type",
      types: { economy: "Economy", mini: "Mini", commercial: "Commercial" },
      parameters: "Parameters",
      liquidWaste: "Liquid waste",
      treatedWater: "Treated water",
      ctaImageAlt: "ECOKlien system in a laboratory setting",
    },
  },
  {
    technology: {
      eyebrow: "EL PRODUCTO",
      headingLines: ["Conozca el BML de ECOKlien: un sistema.", "Múltiples etapas de tratamiento."],
      imageTag: "ECOKlien / Sistema de tratamiento de residuos líquidos biomédicos",
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
      modelName: "Nombre del modelo",
      capacity: "Capacidad de tratamiento (LPD)",
      modelType: "Tipo de modelo",
      types: { economy: "Económico", mini: "Mini", commercial: "Comercial" },
      parameters: "Parámetros",
      liquidWaste: "Residuo líquido",
      treatedWater: "Agua tratada",
      ctaImageAlt: "Sistema ECOKlien en un laboratorio",
    },
  },
  {
    technology: {
      eyebrow: "المنتج",
      headingLines: ["تعرّف على نظام BML من ECOKlien — نظام واحد.", "مراحل معالجة متعددة."],
      imageTag: "ECOKlien / نظام معالجة النفايات الطبية الحيوية السائلة",
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
      modelName: "اسم الطراز",
      capacity: "سعة المعالجة (لتر/يوم)",
      modelType: "نوع الطراز",
      types: { economy: "اقتصادي", mini: "ميني", commercial: "تجاري" },
      parameters: "المعايير",
      liquidWaste: "النفايات السائلة",
      treatedWater: "المياه المعالجة",
      ctaImageAlt: "نظام ECOKlien في مختبر",
    },
  }
);
