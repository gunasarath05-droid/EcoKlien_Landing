// Spanish text of the blog posts in src/data/blog.ts (matched by slug).
// Only text fields live here; images and filter values come from the English file.
import type { BlogPostTranslation } from "../../blog";

export const blogPostsEs: BlogPostTranslation[] = [
  {
    slug: "why-treatment-belongs-closer-to-the-source",
    title: "Por qué el tratamiento debe estar más cerca del origen",
    readTime: "4 MIN DE LECTURA",
    category: "TRATAMIENTO IN SITU",
    excerpt:
      "Una mirada práctica a los residuos líquidos biomédicos, el punto de generación y los argumentos a favor del tratamiento in situ.",
    content: {
      leadParagraph:
        "Los residuos líquidos biomédicos no comienzan en una planta de tratamiento. Comienzan donde se brinda atención, se realizan diagnósticos y se lleva a cabo investigación.",
      sections: [
        {
          id: "point-of-generation",
          title: "Empezar en el punto de generación",
          paragraphs: [
            "Los centros de salud generan residuos líquidos en laboratorios, departamentos de diagnóstico, quirófanos y salas de procedimientos. Para cuando estos residuos llegan a una STP remota de la instalación o al drenaje municipal, las cargas biológicas se han multiplicado y aumentan los riesgos de fugas o de exposición durante el transporte.",
            "El tratamiento en el punto de origen aborda los contaminantes peligrosos desde su origen: neutraliza los agentes infecciosos, desnaturaliza los patógenos y aglomera los sólidos antes de que las aguas residuales se mezclen con las líneas generales de alcantarillado.",
          ],
        },
        {
          id: "electrochemical-approach",
          title: "Un enfoque electroquímico",
          paragraphs: [
            "ECOKlien utiliza electrocoagulación y electrooxidación híbridas en un espacio compacto. En lugar de añadir grandes cantidades de desinfectantes químicos que corroen la infraestructura y generan subproductos tóxicos, nuestro tratamiento in situ utiliza potencial eléctrico para coagular y oxidar rápidamente los contaminantes.",
            "Los contaminantes se desestabilizan y forman flóculos más grandes que se separan con facilidad, lo que deja un efluente transparente y saneado que cumple con las normas ambientales.",
          ],
        },
        {
          id: "facility-assessment",
          title: "Compacto no significa una solución única para todos",
          paragraphs: [
            "Un pequeño lavabo de laboratorio tiene un caudal hidráulico y unas características de contaminantes distintos de los de una zona central de lavado de quirófanos. La plataforma ECOKlien es modular, lo que permite agrupar los módulos individuales o dimensionarlos específicamente según el volumen de la fuente.",
            "Ya sea que se ubique directamente debajo de un lavabo de descarte de laboratorio o dentro de un cuarto de servicios de un departamento, el espacio que ocupa está diseñado en función de la realidad.",
          ],
        },
        {
          id: "before-discussion",
          title: "Antes de la próxima conversación",
          paragraphs: [
            "Una evaluación útil comienza por comprender el volumen diario de líquidos de su instalación y sus principales fuentes de generación.",
          ],
        },
      ],
      calloutText: "Acerque el tratamiento al lugar de atención. Diseñe el enfoque en torno a los residuos.",
      middleImage: {
        alt: "Sistema in situ de ECOKlien en una instalación",
        badge: "ECOKlien / SISTEMA IN SITU",
      },
      checklist: [
        {
          title: "Ubique las fuentes",
          description: "Identifique los departamentos y las áreas de procedimientos que producen residuos biológicos.",
        },
        {
          title: "Comprenda el caudal",
          description: "Volúmenes diarios previstos y períodos de caudal máximo.",
        },
        {
          title: "Espacio y servicios",
          description: "Determine el punto de instalación, la alimentación eléctrica y las conexiones de drenaje.",
        },
      ],
    },
  },
  {
    slug: "electrocoagulation-and-electro-oxidation-explained",
    title: "La electrocoagulación y la electrooxidación, explicadas",
    readTime: "4 MIN DE LECTURA",
    category: "TECNOLOGÍA",
    excerpt:
      "Comprender las etapas complementarias dentro de un sistema híbrido de tratamiento electroquímico.",
  },
  {
    slug: "different-waste-streams-different-treatment-conversations",
    title: "Distintos flujos de residuos. Distintas conversaciones sobre tratamiento.",
    readTime: "4 MIN DE LECTURA",
    category: "RESIDUOS LÍQUIDOS BIOMÉDICOS",
    excerpt:
      "Por qué el origen y la composición de los residuos líquidos son importantes al analizar un enfoque de tratamiento.",
  },
  {
    slug: "what-to-prepare-before-a-facility-assessment",
    title: "Qué preparar antes de una evaluación de la instalación",
    readTime: "4 MIN DE LECTURA",
    category: "PLANIFICACIÓN DE INSTALACIONES",
    excerpt:
      "Volúmenes de aguas residuales, espacio disponible y necesidades operativas: los puntos de partida para una conversación útil.",
  },
  {
    slug: "one-platform-three-ways-to-deploy-it",
    title: "Una plataforma, tres formas de implementarla",
    readTime: "4 MIN DE LECTURA",
    category: "SISTEMAS",
    excerpt:
      "Tratamiento en el punto de origen, tratamiento de efluentes hospitalarios y desinfección dedicada, en contexto.",
  },
  {
    slug: "the-role-of-separation-in-liquid-waste-treatment",
    title: "El papel de la separación en el tratamiento de residuos líquidos",
    readTime: "3 MIN DE LECTURA",
    category: "TECNOLOGÍA",
    excerpt:
      "Cómo encaja la separación de los contaminantes aglomerados en el proceso de tratamiento más amplio.",
  },
  {
    slug: "designing-around-care-and-science",
    title: "Diseñar en torno a la atención y la ciencia",
    readTime: "4 MIN DE LECTURA",
    category: "APLICACIONES",
    excerpt:
      "Ingeniería compacta y modular para centros de salud y laboratorios que no pueden detenerse.",
  },
];
