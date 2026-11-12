import { defineMessages } from "../messages";

/** Arabic plural forms (zero / one / two / few / many / other) picked by Intl.PluralRules. */
const arPlural = (n: number, forms: Record<Intl.LDMLPluralRule, string>) =>
  forms[new Intl.PluralRules("ar").select(n)];

const arTerms = (n: number) =>
  arPlural(n, {
    zero: `${n} مصطلح`,
    one: "مصطلح واحد",
    two: "مصطلحان",
    few: `${n} مصطلحات`,
    many: `${n} مصطلحًا`,
    other: `${n} مصطلح`,
  });

const arDefinitions = (n: number) =>
  arPlural(n, {
    zero: `${n} تعريف`,
    one: "تعريف واحد",
    two: "تعريفان",
    few: `${n} تعريفات`,
    many: `${n} تعريفًا`,
    other: `${n} تعريف`,
  });

/** Number + noun after "من أصل" (out of): 3–10 take the plural, 11–99 the accusative singular. */
const arOutOf = (n: number) =>
  arPlural(n, {
    zero: `${n} مصطلح`,
    one: `${n} مصطلح`,
    two: `${n} مصطلح`,
    few: `${n} مصطلحات`,
    many: `${n} مصطلحًا`,
    other: `${n} مصطلح`,
  });

/** All visible text on the glossary index (/glossary) and term pages (/glossary/[slug]). */
export const glossaryMessages = defineMessages(
  {
    meta: {
      title: "Glossary - EcoKlien | The Biomedical Glossary",
      description:
        "Key terms around biomedical liquid waste, hospital wastewater, antimicrobial resistance, BOD, sludge and waterborne diseases.",
      termTitle: (title: string) => `${title} - EcoKlien Glossary`,
    },
    breadcrumb: {
      home: "HOME",
      media: "MEDIA",
      glossary: "GLOSSARY",
    },
    hero: {
      eyebrow: "GLOSSARY",
      titleLines: ["The biomedical", "glossary."],
      description:
        "A clearer understanding of the words behind safer healthcare. Explore key terms in biomedical waste, water and treatment.",
    },
    index: {
      searchPlaceholder: "Search the glossary...",
      searchLabel: "Search the glossary",
      clearSearch: "Clear search",
      termCount: (n: number) => `${n} TERMS`,
      letterFilterLabel: "Filter by letter",
      allTerms: "All terms",
      title: "Explore the terms.",
      definitionCount: (n: number) => `A–Z / ${n} DEFINITIONS`,
      emptyTitle: (query: string) => `No terms match your search “${query}”.`,
      emptyHint: "Try a different keyword or reset the letter filter.",
      showAll: "Show all terms",
      footnoteAll: (total: number) => `Showing all ${total} terms from the ECOKlien biomedical glossary.`,
      footnoteSome: (shown: number, total: number) =>
        `Showing ${shown} of ${total} terms from the ECOKlien biomedical glossary.`,
    },
    term: {
      eyebrow: "THE BIOMEDICAL GLOSSARY",
      termGuide: "TERM GUIDE",
      inSimpleTerms: "IN SIMPLE TERMS",
      inThisGuide: "IN THIS GUIDE",
      sidebarTitleLines: ["Clarity for your", "facility."],
      sidebarText: "Have a question about your waste stream or treatment requirements? Speak with our team.",
      contactUs: "Contact Us",
      sourcesTitle: "Sources & further reading",
      sourcesNav: "Sources",
      disclaimer:
        "This glossary is for general awareness. Treatment, discharge and reuse must meet applicable local regulations and facility-specific requirements.",
      previousTerm: "PREVIOUS TERM",
      nextTerm: "NEXT TERM",
      keepExploring: "Keep exploring.",
      backToGlossary: "← Back to glossary",
      readDefinition: "Read definition",
    },
  },
  {
    meta: {
      title: "Glosario - EcoKlien | El glosario biomédico",
      description:
        "Términos clave sobre residuos líquidos biomédicos, aguas residuales hospitalarias, resistencia a los antimicrobianos, BOD, lodos y enfermedades transmitidas por el agua.",
      termTitle: (title: string) => `${title} - Glosario de EcoKlien`,
    },
    breadcrumb: {
      home: "INICIO",
      media: "MEDIOS",
      glossary: "GLOSARIO",
    },
    hero: {
      eyebrow: "GLOSARIO",
      titleLines: ["El glosario", "biomédico."],
      description:
        "Una comprensión más clara de las palabras que sustentan una atención sanitaria más segura. Explore los términos clave sobre residuos biomédicos, agua y tratamiento.",
    },
    index: {
      searchPlaceholder: "Buscar en el glosario...",
      searchLabel: "Buscar en el glosario",
      clearSearch: "Borrar búsqueda",
      termCount: (n: number) => (n === 1 ? "1 TÉRMINO" : `${n} TÉRMINOS`),
      letterFilterLabel: "Filtrar por letra",
      allTerms: "Todos los términos",
      title: "Explore los términos.",
      definitionCount: (n: number) => (n === 1 ? "A–Z / 1 DEFINICIÓN" : `A–Z / ${n} DEFINICIONES`),
      emptyTitle: (query: string) => `Ningún término coincide con su búsqueda “${query}”.`,
      emptyHint: "Pruebe con otra palabra clave o restablezca el filtro por letra.",
      showAll: "Mostrar todos los términos",
      footnoteAll: (total: number) => `Se muestran los ${total} términos del glosario biomédico de ECOKlien.`,
      footnoteSome: (shown: number, total: number) =>
        `Se muestran ${shown} de ${total} términos del glosario biomédico de ECOKlien.`,
    },
    term: {
      eyebrow: "EL GLOSARIO BIOMÉDICO",
      termGuide: "GUÍA DEL TÉRMINO",
      inSimpleTerms: "EN POCAS PALABRAS",
      inThisGuide: "EN ESTA GUÍA",
      sidebarTitleLines: ["Claridad para", "su instalación."],
      sidebarText:
        "¿Tiene alguna pregunta sobre su flujo de residuos o sus requisitos de tratamiento? Hable con nuestro equipo.",
      contactUs: "Contáctenos",
      sourcesTitle: "Fuentes y lecturas adicionales",
      sourcesNav: "Fuentes",
      disclaimer:
        "Este glosario tiene fines de información general. El tratamiento, el vertido y la reutilización deben cumplir la normativa local aplicable y los requisitos específicos de cada instalación.",
      previousTerm: "TÉRMINO ANTERIOR",
      nextTerm: "TÉRMINO SIGUIENTE",
      keepExploring: "Siga explorando.",
      backToGlossary: "← Volver al glosario",
      readDefinition: "Leer definición",
    },
  },
  {
    meta: {
      title: "المسرد - EcoKlien | مسرد المصطلحات الطبية الحيوية",
      description:
        "مصطلحات رئيسية حول النفايات الطبية الحيوية السائلة، ومياه الصرف في المستشفيات، ومقاومة مضادات الميكروبات، وBOD، والحمأة، والأمراض المنقولة بالمياه.",
      termTitle: (title: string) => `${title} - مسرد EcoKlien`,
    },
    breadcrumb: {
      home: "الرئيسية",
      media: "الوسائط",
      glossary: "المسرد",
    },
    hero: {
      eyebrow: "المسرد",
      titleLines: ["مسرد المصطلحات", "الطبية الحيوية."],
      description:
        "فهمٌ أوضح للمصطلحات التي تقوم عليها رعاية صحية أكثر أمانًا. استكشف المصطلحات الرئيسية في مجالات النفايات الطبية الحيوية والمياه والمعالجة.",
    },
    index: {
      searchPlaceholder: "ابحث في المسرد...",
      searchLabel: "ابحث في المسرد",
      clearSearch: "مسح البحث",
      termCount: arTerms,
      letterFilterLabel: "التصفية حسب الحرف",
      allTerms: "جميع المصطلحات",
      title: "استكشف المصطلحات.",
      definitionCount: (n: number) => `أ–ي / ${arDefinitions(n)}`,
      emptyTitle: (query: string) => `لا توجد مصطلحات تطابق بحثك «${query}».`,
      // The letter filter is hidden in Arabic, so the hint only mentions the keyword.
      emptyHint: "جرّب كلمة مفتاحية مختلفة.",
      showAll: "عرض جميع المصطلحات",
      footnoteAll: (total: number) => `عرض جميع مصطلحات مسرد ECOKlien الطبي الحيوي (${arTerms(total)}).`,
      footnoteSome: (shown: number, total: number) =>
        `عرض ${shown} من أصل ${arOutOf(total)} من مسرد ECOKlien الطبي الحيوي.`,
    },
    term: {
      eyebrow: "مسرد المصطلحات الطبية الحيوية",
      termGuide: "دليل المصطلح",
      inSimpleTerms: "بعبارات بسيطة",
      inThisGuide: "في هذا الدليل",
      sidebarTitleLines: ["وضوحٌ", "لمنشأتك."],
      sidebarText: "هل لديك سؤال حول تدفّق النفايات لديك أو متطلبات المعالجة؟ تحدّث مع فريقنا.",
      contactUs: "اتصل بنا",
      sourcesTitle: "المصادر وقراءات إضافية",
      sourcesNav: "المصادر",
      disclaimer:
        "هذا المسرد لأغراض التوعية العامة. ويجب أن تستوفي عمليات المعالجة والتصريف وإعادة الاستخدام اللوائح المحلية المعمول بها والمتطلبات الخاصة بكل منشأة.",
      previousTerm: "المصطلح السابق",
      nextTerm: "المصطلح التالي",
      keepExploring: "واصل الاستكشاف.",
      backToGlossary: "→ العودة إلى المسرد",
      readDefinition: "اقرأ التعريف",
    },
  }
);
