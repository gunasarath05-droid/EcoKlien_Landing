import type { FaqCategoryText } from "../../faq";

/** Spanish FAQ translations: text fields only, keyed by category `id` (see src/i18n/README.md). */
export const faqCategories: FaqCategoryText[] = [
  {
    id: "essentials",
    topicName: "Lo esencial",
    heading: "Comprender ECOKlien",
    items: [
      {
        question: "¿Qué es ECOKlien?",
        answer:
          "ECOKlien es un sistema de tratamiento de residuos líquidos biomédicos para centros sanitarios y laboratorios. Utiliza tecnología electroquímica avanzada para tratar y desinfectar residuos líquidos potencialmente contaminados, con un diseño compacto, modular y plug-and-play para el tratamiento in situ.\n\nLa plataforma se configura en función del origen, el volumen y los requisitos de tratamiento de la instalación, en lugar de seguir un enfoque único para todos.",
      },
      {
        question: "¿Para qué instalaciones está diseñado ECOKlien?",
        answer:
          "ECOKlien está diseñado específicamente para hospitales, laboratorios médicos, centros de diagnóstico, áreas de procedimientos clínicos, centros de cirugía ambulatoria e instalaciones de investigación biomédica que generan residuos líquidos peligrosos o potencialmente infecciosos.",
      },
      {
        question: "¿Qué tipos de residuos líquidos puede tratar ECOKlien?",
        answer:
          "El sistema se configura para tratar diversos flujos de residuos clínicos, como sangre, fluidos corporales, orina, esputo, productos químicos de laboratorio, residuos de diálisis y aguas de lavado de procedimientos.",
      },
    ],
  },
  {
    id: "technology",
    topicName: "Tecnología de tratamiento",
    heading: "Cómo funciona el enfoque",
    items: [
      {
        question: "¿Cómo actúan conjuntamente la electrocoagulación y la electrooxidación?",
        answer:
          "La electrocoagulación desestabiliza los contaminantes y los agrega en flóculos de mayor tamaño, lo que facilita su separación. Los sólidos resultantes se separan del líquido, lo que reduce la carga contaminante. Un tratamiento electroquímico y una desinfección adicionales actúan sobre los contaminantes orgánicos y los microorganismos restantes.\n\nLa vía de tratamiento se analiza en relación con las aguas residuales entrantes y los requisitos de la aplicación.",
      },
      {
        question: "¿Utiliza ECOKlien la dosificación química convencional?",
        answer:
          "No. ECOKlien funciona sin depender de la dosificación de productos químicos. En lugar de añadir cloro o coagulantes químicos, utiliza reacciones electroquímicas para generar oxidantes in situ que higienizan el efluente de forma segura.",
      },
      {
        question: "¿Puede el agua tratada verterse o reutilizarse de inmediato?",
        answer:
          "Sí. Según la configuración y los requisitos específicos de la instalación, las aguas residuales tratadas cumplen las normas ambientales reglamentarias para su vertido seguro al alcantarillado municipal o para su reutilización in situ en usos de servicio no potables.",
      },
    ],
  },
  {
    id: "systems",
    topicName: "Sistemas y aplicaciones",
    heading: "Encontrar la solución adecuada",
    items: [
      {
        question: "¿Cuáles son las tres configuraciones del sistema?",
        answer:
          "ECOKlien ofrece tres configuraciones principales: 1) Sistemas de tratamiento de residuos líquidos biomédicos en el punto de origen, para departamentos más pequeños o descentralizados; 2) Sistemas descentralizados de tratamiento de efluentes hospitalarios, para grandes caudales continuos; y 3) Sistemas de desinfección dedicados, para la eliminación selectiva de patógenos.",
      },
      {
        question: "¿Puede realizarse el tratamiento dentro de nuestra instalación?",
        answer:
          "Sí. Los sistemas son compactos y modulares, lo que permite instalarlos en salas técnicas, zonas de equipos en sótanos o directamente junto a los puntos de descarga de los departamentos, sin obras complejas.",
      },
      {
        question: "¿Puede un sistema de desinfección formar parte de un proceso de tratamiento más amplio?",
        answer:
          "Sí. ECOKlien puede funcionar como unidad principal de tratamiento dedicada o integrarse directamente como etapa de pretratamiento o de afino dentro de la infraestructura central de tratamiento de aguas residuales existente.",
      },
    ],
  },
  {
    id: "planning",
    topicName: "Planificación y consultas",
    heading: "Iniciar el diálogo sobre su instalación",
    items: [
      {
        question: "¿Qué información debemos compartir con el equipo técnico?",
        answer:
          "Algunos puntos de partida útiles son el volumen diario estimado de residuos líquidos, los principales departamentos de origen (laboratorios, cirugía, diálisis), los métodos de eliminación actuales y el espacio disponible para la instalación.",
      },
      {
        question: "¿Cómo se determinan los requisitos de instalación y de servicios?",
        answer:
          "Nuestro equipo de ingeniería evalúa la distribución de su instalación, el suministro eléctrico, los canales de drenaje por gravedad y el horario de operación para recomendar una configuración plug-and-play adaptada a su emplazamiento.",
      },
      {
        question: "¿Dónde podemos solicitar un folleto o hablar sobre una configuración?",
        answer:
          "Puede solicitar folletos, fichas técnicas o programar una consulta de ingeniería mediante el botón Contáctenos o enviando un formulario de consulta en nuestro sitio web.",
      },
    ],
  },
];
