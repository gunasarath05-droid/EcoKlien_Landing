import { defineMessages } from "../messages";

/**
 * All visible text on the home/landing page ("/") that lives in src/pages/landing/**.
 * Sections reused from src/pages/home/** use homeMessages (./home.ts);
 * waste-stream names are shared via wasteStreamMessages (./home.ts).
 */
export const landingMessages = defineMessages(
  {
    meta: {
      title: "Biomedical Liquid Waste Treatment system - Hospital wastewater treatment system",
      description:
        "Biomedical Liquid Waste Treatment system-Using advanced hybrid electrochemical technology for hospital effluent treatment and biomedical liquid waste treatment",
    },
    hero: {
      imageAlt: "EcoKlien Laboratory Biomedical Liquid Waste Treatment System",
      eyebrow: "Advanced biomedical liquid waste treatment",
      titleLines: ["Biomedical", "Liquid Waste", "Treatment System"],
      subtitle: "Treat biomedical liquid waste. At the source.",
      description:
        "ECOKlien uses advanced electrochemical technology to treat and disinfect potentially contaminated liquid waste on site — without added treatment chemicals, in a compact, modular system designed for healthcare facilities and laboratories.",
      buyNow: "Buy now",
      getQuote: "Get a quote",
      highlights: {
        noChemicals: "No added chemicals",
        lowSludge: "Low sludge production",
        microbeFree: "Microbes Free",
        noOdor: "No Odor",
      },
    },
    treatmentFlow: {
      bandAlt: "Biomedical dark fluid background",
      eyebrow: "WHAT IT TREAT:",
      titleLines: ["From blood to", "body fluids."],
      splashAlt: "Bio-waste fluid splash",
      fluidsBgAlt: "Fluids background",
      configurableNote: [
        "Treatment can be configured according to the characteristics of the incoming",
        "wastewater and the requirements of the application.",
      ],
      streamAlt: "Transformation liquid stream",
      approachEyebrow: "THE ECOKLIEN APPROACH",
      approachTitleLines: ["Biomedical liquid waste", "treatment, re-imagined"],
      approachText:
        "ECOKlien uses advanced electrochemical technology to treat and disinfect potentially contaminated liquid waste on site, bringing treatment closer to where the waste is generated, with a compact, modular system designed to reduce dependence on conventional chemical treatment and large, complex infrastructure.",
      viewConfigurations: "View Configurations",
      cards: {
        electrochemical: {
          title: "Electrochemical technology",
          description:
            "Contaminants are destabilised and aggregated into larger flocs, making them easier to separate from the liquid.",
        },
        onSite: {
          title: "On-site treatment",
          description:
            "Having an attached sink, the system treats the BML right at it's source, reducing the need to store hazardous liquid waste.",
        },
        noChemicals: {
          title: "No added chemicals",
          description:
            "ECOKlien ensures safe treatment process without the need to handle any hazardous substances.",
        },
        noOdor: {
          title: "No odor. No noise",
          description:
            "Further electrochemical treatment acts on remaining organic contaminants and microorganisms.",
        },
      },
    },
    configurations: {
      backdropAlt: "Biomedical fluid backdrop",
      eyebrow: "The systems",
      titleLines: ["Three configurations.", "One treatment principle."],
      intro:
        "Biomedical liquid waste doesn't come from one source, and healthcare facilities don't operate at one scale. ECOKlien uses the same core electrochemical treatment approach across three configurations, allowing the system to be matched to the volume, source and treatment requirements of the facility.",
      items: {
        v1: {
          title: "Biomedical Liquid Waste Treatment Systems",
          subtitle: "(Point of Source System)",
          description:
            "For smaller or decentralised sources of biomedical liquid waste. Designed for treating liquid waste closer to where it is generated, reducing the need to collect and transport contaminated wastewater across the facility.",
          bestSuited:
            "LABORATORIES · PROCEDURE AREAS · SMALL HEALTHCARE FACILITIES · SPECIFIC WASTE STREAMS",
        },
        v2: {
          title: "Hospital Effluent Treatment Systems",
          subtitle: "(Decentralised facility treatment)",
          description:
            "For healthcare facilities generating larger and more continuous volumes of biomedical liquid waste. A compact treatment system designed to integrate into existing facility infrastructure while providing controlled treatment before discharge or further handling.",
          bestSuited:
            "HOSPITALS · DIAGNOSTIC CENTRES · MULTI-DEPARTMENT FACILITIES · HEALTHCARE CAMPUSES",
        },
        v3: {
          title: "Biomedical Liquid Waste Disinfection System",
          subtitle: "(Point of Source System)",
          description:
            "An electrochemical disinfection system for microbial contamination in biomedical liquid waste. Compact and adaptable, where required as a dedicated treatment integrated into a broader wastewater treatment process.",
          bestSuited: "HOSPITALS · LABORATORIES · DIAGNOSTIC CENTRES · HEALTHCARE FACILITIES",
        },
      },
      viewDetailsFor: "View details for",
      bestSuitedFor: "Best suited for:",
      viewConfiguration: "View configuration",
      ctaTitle: "Not sure which configuration fits your facility?",
      ctaText:
        "Tell us your approximate wastewater volume, source and operating requirements. We'll help identify the appropriate ECOKlien configuration.",
      ctaButton: "Talk to an engineer",
    },
    wasteSources: {
      eyebrow: "The problem",
      subtitle: "Purpose-built for the places where care and science happen.",
      places: ["Laboratories", "Diagnostic Areas", "Procedure Rooms", "Clinical Facilities"],
      title: "Biomedical liquid waste doesn't come from one place.",
      paragraphs: [
        "Hospitals and healthcare facilities generate liquid waste across laboratories, diagnostic areas, operation theatres, dialysis centres and other clinical environments. These streams can contain biological contaminants, organic pollutants and other substances that require appropriate treatment before discharge or reuse.",
        "The challenge isn't simply collecting the waste.",
      ],
      conclusion: "It's treating it safely, effectively and practically.",
    },
  },
  {
    meta: {
      title:
        "Sistema de tratamiento de residuos líquidos biomédicos - Sistema de tratamiento de aguas residuales hospitalarias",
      description:
        "Sistema de tratamiento de residuos líquidos biomédicos: utiliza tecnología electroquímica híbrida avanzada para el tratamiento de efluentes hospitalarios y de residuos líquidos biomédicos",
    },
    hero: {
      imageAlt: "Sistema de tratamiento de residuos líquidos biomédicos para laboratorio EcoKlien",
      eyebrow: "Tratamiento avanzado de residuos líquidos biomédicos",
      titleLines: ["Sistema de", "tratamiento de residuos", "líquidos biomédicos"],
      subtitle: "Trate los residuos líquidos biomédicos. En el origen.",
      description:
        "ECOKlien utiliza tecnología electroquímica avanzada para tratar y desinfectar in situ los residuos líquidos potencialmente contaminados, sin productos químicos de tratamiento añadidos, en un sistema compacto y modular diseñado para centros de salud y laboratorios.",
      buyNow: "Comprar ahora",
      getQuote: "Solicitar una cotización",
      highlights: {
        noChemicals: "Sin productos químicos añadidos",
        lowSludge: "Baja producción de lodos",
        microbeFree: "Libre de microbios",
        noOdor: "Sin olores",
      },
    },
    treatmentFlow: {
      bandAlt: "Fondo de fluido biomédico oscuro",
      eyebrow: "QUÉ TRATA:",
      titleLines: ["De la sangre a", "los fluidos corporales."],
      splashAlt: "Salpicadura de fluido de residuos biológicos",
      fluidsBgAlt: "Fondo de fluidos",
      configurableNote: [
        "El tratamiento puede configurarse según las características de las aguas residuales",
        "entrantes y los requisitos de la aplicación.",
      ],
      streamAlt: "Corriente líquida de transformación",
      approachEyebrow: "EL ENFOQUE DE ECOKLIEN",
      approachTitleLines: ["El tratamiento de residuos líquidos", "biomédicos, reinventado"],
      approachText:
        "ECOKlien utiliza tecnología electroquímica avanzada para tratar y desinfectar in situ los residuos líquidos potencialmente contaminados, acercando el tratamiento al lugar donde se generan los residuos, con un sistema compacto y modular diseñado para reducir la dependencia del tratamiento químico convencional y de infraestructuras grandes y complejas.",
      viewConfigurations: "Ver configuraciones",
      cards: {
        electrochemical: {
          title: "Tecnología electroquímica",
          description:
            "Los contaminantes se desestabilizan y se agregan en flóculos más grandes, lo que facilita su separación del líquido.",
        },
        onSite: {
          title: "Tratamiento in situ",
          description:
            "Al contar con un lavabo acoplado, el sistema trata los residuos líquidos biomédicos (BML) directamente en su origen, lo que reduce la necesidad de almacenar residuos líquidos peligrosos.",
        },
        noChemicals: {
          title: "Sin productos químicos añadidos",
          description:
            "ECOKlien garantiza un proceso de tratamiento seguro sin necesidad de manipular sustancias peligrosas.",
        },
        noOdor: {
          title: "Sin olores. Sin ruido",
          description:
            "Un tratamiento electroquímico adicional actúa sobre los contaminantes orgánicos y microorganismos restantes.",
        },
      },
    },
    configurations: {
      backdropAlt: "Fondo de fluido biomédico",
      eyebrow: "Los sistemas",
      titleLines: ["Tres configuraciones.", "Un único principio de tratamiento."],
      intro:
        "Los residuos líquidos biomédicos no proceden de una sola fuente, y los centros de salud no operan a una sola escala. ECOKlien utiliza el mismo enfoque central de tratamiento electroquímico en tres configuraciones, lo que permite adaptar el sistema al volumen, la fuente y los requisitos de tratamiento de la instalación.",
      items: {
        v1: {
          title: "Sistemas de tratamiento de residuos líquidos biomédicos",
          subtitle: "(Sistema en el punto de origen)",
          description:
            "Para fuentes más pequeñas o descentralizadas de residuos líquidos biomédicos. Diseñado para tratar los residuos líquidos más cerca de donde se generan, lo que reduce la necesidad de recoger y transportar aguas residuales contaminadas por toda la instalación.",
          bestSuited:
            "LABORATORIOS · ÁREAS DE PROCEDIMIENTOS · PEQUEÑOS CENTROS DE SALUD · FLUJOS DE RESIDUOS ESPECÍFICOS",
        },
        v2: {
          title: "Sistemas de tratamiento de efluentes hospitalarios",
          subtitle: "(Tratamiento descentralizado en la instalación)",
          description:
            "Para centros de salud que generan volúmenes mayores y más continuos de residuos líquidos biomédicos. Un sistema de tratamiento compacto diseñado para integrarse en la infraestructura existente de la instalación, a la vez que proporciona un tratamiento controlado antes del vertido o de una manipulación posterior.",
          bestSuited:
            "HOSPITALES · CENTROS DE DIAGNÓSTICO · INSTALACIONES CON VARIOS DEPARTAMENTOS · CAMPUS SANITARIOS",
        },
        v3: {
          title: "Sistema de desinfección de residuos líquidos biomédicos",
          subtitle: "(Sistema en el punto de origen)",
          description:
            "Un sistema de desinfección electroquímica para la contaminación microbiana de los residuos líquidos biomédicos. Compacto y adaptable, cuando se requiere como tratamiento específico integrado en un proceso más amplio de tratamiento de aguas residuales.",
          bestSuited: "HOSPITALES · LABORATORIOS · CENTROS DE DIAGNÓSTICO · CENTROS DE SALUD",
        },
      },
      viewDetailsFor: "Ver detalles de",
      bestSuitedFor: "Ideal para:",
      viewConfiguration: "Ver configuración",
      ctaTitle: "¿No está seguro de qué configuración se adapta a su instalación?",
      ctaText:
        "Indíquenos el volumen aproximado de aguas residuales, su fuente y sus requisitos operativos. Le ayudaremos a identificar la configuración de ECOKlien adecuada.",
      ctaButton: "Hable con un ingeniero",
    },
    wasteSources: {
      eyebrow: "El problema",
      subtitle: "Diseñado específicamente para los lugares donde se presta atención y se hace ciencia.",
      places: ["Laboratorios", "Áreas de diagnóstico", "Salas de procedimientos", "Instalaciones clínicas"],
      title: "Los residuos líquidos biomédicos no proceden de un solo lugar.",
      paragraphs: [
        "Los hospitales y centros de salud generan residuos líquidos en laboratorios, áreas de diagnóstico, quirófanos, centros de diálisis y otros entornos clínicos. Estos flujos pueden contener contaminantes biológicos, contaminantes orgánicos y otras sustancias que requieren un tratamiento adecuado antes de su vertido o reutilización.",
        "El reto no consiste simplemente en recoger los residuos.",
      ],
      conclusion: "Consiste en tratarlos de forma segura, eficaz y práctica.",
    },
  },
  {
    meta: {
      title: "نظام معالجة النفايات الطبية الحيوية السائلة - نظام معالجة مياه الصرف في المستشفيات",
      description:
        "نظام معالجة النفايات الطبية الحيوية السائلة - يستخدم تقنية كهروكيميائية هجينة متقدمة لمعالجة مياه صرف المستشفيات ومعالجة النفايات الطبية الحيوية السائلة",
    },
    hero: {
      imageAlt: "نظام EcoKlien لمعالجة النفايات الطبية الحيوية السائلة في المختبرات",
      eyebrow: "معالجة متقدمة للنفايات الطبية الحيوية السائلة",
      titleLines: ["نظام معالجة", "النفايات الطبية", "الحيوية السائلة"],
      subtitle: "عالِج النفايات الطبية الحيوية السائلة. عند المصدر.",
      description:
        "يستخدم ECOKlien تقنية كهروكيميائية متقدمة لمعالجة النفايات السائلة التي يُحتمل أن تكون ملوثة وتطهيرها في الموقع — دون إضافة مواد كيميائية للمعالجة، ضمن نظام مدمج ومعياري مصمم لمنشآت الرعاية الصحية والمختبرات.",
      buyNow: "اشترِ الآن",
      getQuote: "اطلب عرض سعر",
      highlights: {
        noChemicals: "دون مواد كيميائية مضافة",
        lowSludge: "إنتاج منخفض للحمأة",
        microbeFree: "خالٍ من الميكروبات",
        noOdor: "بلا روائح",
      },
    },
    treatmentFlow: {
      bandAlt: "خلفية سائل طبي حيوي داكن",
      eyebrow: "ما الذي يعالجه:",
      titleLines: ["من الدم", "إلى سوائل الجسم."],
      splashAlt: "رذاذ سائل من النفايات الحيوية",
      fluidsBgAlt: "خلفية سوائل",
      configurableNote: [
        "يمكن تهيئة المعالجة وفقًا لخصائص مياه الصرف",
        "الواردة ومتطلبات التطبيق.",
      ],
      streamAlt: "تيار سائل يعبّر عن التحوّل",
      approachEyebrow: "نهج ECOKlien",
      approachTitleLines: ["إعادة تصوّر معالجة", "النفايات الطبية الحيوية السائلة"],
      approachText:
        "يستخدم ECOKlien تقنية كهروكيميائية متقدمة لمعالجة النفايات السائلة التي يُحتمل أن تكون ملوثة وتطهيرها في الموقع، مما يقرّب المعالجة من مكان توليد النفايات، وذلك عبر نظام مدمج ومعياري مصمم لتقليل الاعتماد على المعالجة الكيميائية التقليدية والبنى التحتية الكبيرة والمعقدة.",
      viewConfigurations: "عرض التكوينات",
      cards: {
        electrochemical: {
          title: "التقنية الكهروكيميائية",
          description: "يُزعزَع استقرار الملوثات فتتجمّع في ندف أكبر، مما يسهّل فصلها عن السائل.",
        },
        onSite: {
          title: "المعالجة في الموقع",
          description:
            "بفضل حوض ملحق به، يعالج النظام النفايات الطبية الحيوية السائلة (BML) مباشرةً عند مصدرها، مما يقلل الحاجة إلى تخزين النفايات السائلة الخطرة.",
        },
        noChemicals: {
          title: "دون مواد كيميائية مضافة",
          description: "يضمن ECOKlien عملية معالجة آمنة دون الحاجة إلى التعامل مع أي مواد خطرة.",
        },
        noOdor: {
          title: "بلا روائح. بلا ضوضاء",
          description: "تعمل معالجة كهروكيميائية إضافية على ما تبقّى من ملوثات عضوية وكائنات دقيقة.",
        },
      },
    },
    configurations: {
      backdropAlt: "خلفية سائل طبي حيوي",
      eyebrow: "الأنظمة",
      titleLines: ["ثلاثة تكوينات.", "مبدأ معالجة واحد."],
      intro:
        "لا تأتي النفايات الطبية الحيوية السائلة من مصدر واحد، ولا تعمل منشآت الرعاية الصحية بحجم واحد. يستخدم ECOKlien نهج المعالجة الكهروكيميائية الأساسي نفسه عبر ثلاثة تكوينات، مما يتيح مواءمة النظام مع الكميات والمصدر ومتطلبات المعالجة الخاصة بالمنشأة.",
      items: {
        v1: {
          title: "أنظمة معالجة النفايات الطبية الحيوية السائلة",
          subtitle: "(نظام عند نقطة المصدر)",
          description:
            "للمصادر الأصغر أو اللامركزية للنفايات الطبية الحيوية السائلة. مصمم لمعالجة النفايات السائلة بالقرب من مكان توليدها، مما يقلل الحاجة إلى جمع مياه الصرف الملوثة ونقلها عبر أرجاء المنشأة.",
          bestSuited: "المختبرات · مناطق الإجراءات الطبية · منشآت الرعاية الصحية الصغيرة · تيارات نفايات محددة",
        },
        v2: {
          title: "أنظمة معالجة مياه صرف المستشفيات",
          subtitle: "(معالجة لامركزية داخل المنشأة)",
          description:
            "لمنشآت الرعاية الصحية التي تولّد كميات أكبر وأكثر استمرارية من النفايات الطبية الحيوية السائلة. نظام معالجة مدمج مصمم للاندماج في البنية التحتية القائمة للمنشأة مع توفير معالجة مضبوطة قبل التصريف أو أي مناولة لاحقة.",
          bestSuited: "المستشفيات · مراكز التشخيص · المنشآت متعددة الأقسام · المجمّعات الصحية",
        },
        v3: {
          title: "نظام تطهير النفايات الطبية الحيوية السائلة",
          subtitle: "(نظام عند نقطة المصدر)",
          description:
            "نظام تطهير كهروكيميائي للتلوث الميكروبي في النفايات الطبية الحيوية السائلة. مدمج وقابل للتكيّف، حيثما يلزم كمعالجة مخصصة مدمجة ضمن عملية أوسع لمعالجة مياه الصرف.",
          bestSuited: "المستشفيات · المختبرات · مراكز التشخيص · منشآت الرعاية الصحية",
        },
      },
      viewDetailsFor: "عرض تفاصيل",
      bestSuitedFor: "الأنسب لـ:",
      viewConfiguration: "عرض التكوين",
      ctaTitle: "لست متأكدًا من التكوين المناسب لمنشأتك؟",
      ctaText:
        "أخبرنا بالحجم التقريبي لمياه الصرف لديك ومصدرها ومتطلبات التشغيل. وسنساعدك في تحديد تكوين ECOKlien المناسب.",
      ctaButton: "تحدّث إلى مهندس",
    },
    wasteSources: {
      eyebrow: "المشكلة",
      subtitle: "مصمم خصيصًا للأماكن التي تُقدَّم فيها الرعاية ويُمارَس فيها العلم.",
      places: ["المختبرات", "مناطق التشخيص", "غرف الإجراءات الطبية", "المنشآت السريرية"],
      title: "لا تأتي النفايات الطبية الحيوية السائلة من مكان واحد.",
      paragraphs: [
        "تولّد المستشفيات ومنشآت الرعاية الصحية نفايات سائلة في المختبرات ومناطق التشخيص وغرف العمليات ومراكز غسيل الكلى وغيرها من البيئات السريرية. وقد تحتوي هذه التيارات على ملوثات بيولوجية وملوثات عضوية ومواد أخرى تتطلب معالجة مناسبة قبل تصريفها أو إعادة استخدامها.",
        "لا يقتصر التحدي على مجرد جمع النفايات.",
      ],
      conclusion: "بل يكمن في معالجتها بأمان وفعالية وبطريقة عملية.",
    },
  }
);
