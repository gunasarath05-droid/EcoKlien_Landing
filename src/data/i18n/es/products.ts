import type { ProductTranslation } from "../../products";

/**
 * Spanish product translations: text fields only, keyed by `slug` (see src/i18n/README.md).
 * Lists (stages, steps, streams, facilities) follow the English order item by item.
 */
export const products: ProductTranslation[] = [
  {
    slug: "biomedical-liquid-waste-treatment-system",
    productname: "Sistemas de tratamiento de residuos líquidos biomédicos",
    eyebrow: "TRATAMIENTO AVANZADO DE RESIDUOS LÍQUIDOS BIOMÉDICOS",
    hero: {
      eyebrow: "TRATAMIENTO AVANZADO DE RESIDUOS LÍQUIDOS BIOMÉDICOS",
      title: "Sistema de tratamiento de residuos líquidos biomédicos",
      subtitle: "Trate los residuos líquidos biomédicos. En el origen.",
      description:
        "Un sistema de tratamiento electroquímico diseñado para tratar residuos líquidos biomédicos que contienen sangre, fluidos corporales, orina, esputo y otras corrientes potencialmente contaminadas, en un sistema de tratamiento compacto y automatizado.",
      ctaText: "Consultar",
      secondaryCtaText: "Ver folleto + ficha técnica",
    },
    sourcesSection: {
      eyebrow: "El problema",
      heading: "Los residuos líquidos biomédicos no provienen de un solo lugar.",
      subtitle: "Diseñado específicamente para los lugares donde se brinda atención y se hace ciencia.",
      sources: ["Laboratorios", "Áreas de diagnóstico", "Salas de procedimientos", "Instalaciones clínicas"],
      description: [
        "Los hospitales y centros de salud generan residuos líquidos en laboratorios, áreas de diagnóstico, quirófanos, centros de diálisis y otros entornos clínicos. Estas corrientes pueden contener contaminantes biológicos, contaminantes orgánicos y otras sustancias que requieren un tratamiento adecuado antes de su vertido o reutilización.",
        "El desafío no es simplemente recoger los residuos.",
        "Es tratarlos de forma segura, eficaz y práctica.",
      ],
    },
    technologySection: {
      eyebrow: "La tecnología",
      heading: "Conozca el BML de ECOKlien: un sistema. Múltiples etapas de tratamiento.",
      description:
        "ECOKlien utiliza tecnología electroquímica avanzada para tratar y desinfectar in situ residuos líquidos potencialmente contaminados, con un sistema compacto y modular diseñado para reducir la dependencia del tratamiento químico convencional y de infraestructuras grandes y complejas.",
      ctaText: "Ver configuraciones",
      imageBadge: "ECOKlien / SISTEMA HÍBRIDO IN SITU",
      stages: [
        {
          title: "Electrocoagulación",
          description:
            "Los contaminantes se desestabilizan y se agregan en flóculos más grandes, lo que facilita su separación del líquido.",
        },
        {
          title: "Desinfección",
          description:
            "La desinfección electroquímica actúa sobre los microorganismos y reduce la carga de patógenos sin necesidad de manipular productos químicos peligrosos.",
        },
        {
          title: "Oxidación",
          description:
            "La oxidación electroquímica descompone los contaminantes orgánicos persistentes y los compuestos químicos presentes en las corrientes de residuos biomédicos.",
        },
        {
          title: "Reducción de residuales",
          description:
            "Un procesamiento avanzado de varias etapas reduce significativamente los residuos químicos y el impacto ambiental antes del vertido.",
        },
      ],
    },
    closerSection: {
      eyebrow: "EL ENFOQUE",
      headingLeft: "Acerque el tratamiento al lugar donde se generan los residuos.",
      headingRight:
        "El tratamiento convencional de aguas residuales puede requerir que los residuos líquidos contaminados se recojan y se trasladen a través de un proceso de tratamiento centralizado. ECOKlien ofrece otro enfoque.",
      steps: [
        {
          tag: "PASO 1",
          title: "Generar",
          subtitle: "Punto de origen",
          description: "Los residuos líquidos biomédicos se producen en toda la instalación.",
        },
        {
          tag: "PASO 2",
          title: "Tratar",
          subtitle: "Entrada in situ",
          description: "Los residuos ingresan en el sistema de tratamiento ECOKlien.",
        },
        {
          tag: "PASO 3",
          title: "Separar y desinfectar",
          subtitle: "Etapa electroquímica",
          description: "El tratamiento electroquímico actúa sobre los contaminantes y la contaminación microbiana.",
        },
        {
          tag: "PASO 4",
          title: "Reutilización / vertido / tratamiento adicional",
          subtitle: "Salida Eco Safe",
          description: "El efluente tratado continúa según la aplicación y los requisitos aplicables.",
        },
      ],
      footerNote: "Una vía de tratamiento compacta diseñada en torno a las realidades de los centros de salud.",
    },
    fluidsSection: {
      eyebrow: "QUÉ TRATA",
      heading: "De la sangre a los fluidos corporales.",
      footerText:
        "El tratamiento puede configurarse según las características de las aguas residuales entrantes y los requisitos de la aplicación.",
      streams: [
        { title: "Procesos de laboratorio" },
        { title: "Residuos de diálisis" },
        { title: "Esputo" },
        { title: "Orina" },
        { title: "Fluidos corporales" },
        { title: "Sangre" },
      ],
    },
    applicationsSection: {
      eyebrow: "Aplicaciones",
      heading: "Para los entornos que no pueden detenerse.",
      subtitle: "Diseñado para centros de salud y laboratorios que generan residuos líquidos biomédicos.",
      image1Title: "Centros de salud",
      image2Title: "Laboratorios médicos",
      facilities: [
        { title: "Hospitales y clínicas", subtitle: "Residuos líquidos biomédicos de la atención clínica." },
        { title: "Laboratorios médicos", subtitle: "Residuos líquidos generados por procesos de laboratorio." },
        { title: "Centros de diagnóstico", subtitle: "Para instalaciones que realizan pruebas diagnósticas." },
        { title: "Instalaciones quirúrgicas", subtitle: "Residuos líquidos de entornos de atención quirúrgica." },
        { title: "Laboratorios de investigación", subtitle: "Para actividades de investigación biomédica y de laboratorio." },
        { title: "Clínicas de atención urgente", subtitle: "Entornos de atención en el punto de servicio" },
        { title: "Centros de atención especializada", subtitle: "Flujos de trabajo clínicos especializados" },
        { title: "Centros quirúrgicos ambulatorios", subtitle: "Para áreas de procedimientos ambulatorios" },
        { title: "Residencias de ancianos", subtitle: "Para instalaciones que brindan apoyo médico 24/7" },
      ],
    },
    configurationsSection: {
      eyebrow: "ESPECIFICACIONES Y CAPACIDADES",
      heading: "Elija el sistema en función de su aplicación.",
      subtitle:
        "Configuraciones disponibles para diferentes departamentos hospitalarios, laboratorios, centros de diagnóstico y áreas quirúrgicas.",
      ctaCard: { buttonText: "Solicite una cotización personalizada" },
      footerNote:
        "*Caudales y capacidades personalizados disponibles bajo pedido. Hable con nuestro equipo de ingeniería para evaluar los requisitos de su instalación.",
    },
  },
  {
    slug: "hospital-effluent-treatment-systems",
    productname: "Sistemas de tratamiento de efluentes hospitalarios",
    eyebrow: "TRATAMIENTO DESCENTRALIZADO EN LA INSTALACIÓN",
    hero: {
      eyebrow: "TRATAMIENTO DESCENTRALIZADO EN LA INSTALACIÓN",
      title: "Sistemas de tratamiento de efluentes hospitalarios",
      subtitle: "Tratamiento continuo de grandes volúmenes de aguas residuales hospitalarias",
      description:
        "Para centros de salud que generan volúmenes mayores y más continuos de residuos líquidos biomédicos. Un sistema de tratamiento compacto diseñado para integrarse en la infraestructura existente de la instalación, a la vez que proporciona un tratamiento controlado antes del vertido o de una manipulación posterior.",
      ctaText: "Explorar",
    },
    sourcesSection: {
      eyebrow: "El desafío",
      heading: "Tratamiento de aguas residuales continuas de múltiples departamentos.",
      subtitle: "Diseñado para corrientes complejas de aguas residuales hospitalarias.",
      sources: ["Salas de hospitalización", "UCI y Urgencias", "Laboratorios centrales", "Centros de diálisis"],
      description: [
        "Los efluentes hospitalarios contienen una mezcla de materia orgánica, principios activos farmacéuticos y agentes microbiológicos.",
        "Los sistemas STP biológicos tradicionales tienen dificultades con los desinfectantes tóxicos y los antibióticos.",
        "Los sistemas electroquímicos híbridos de ECOKlien garantizan una rápida desestabilización y destrucción de los contaminantes resistentes.",
      ],
    },
    technologySection: {
      eyebrow: "La tecnología",
      heading: "Tratamiento híbrido continuo de alta capacidad",
      description:
        "Combina electrocoagulación y electrooxidación para tratar de forma fiable efluentes hospitalarios complejos procedentes de múltiples departamentos.",
      ctaText: "Seleccionar sistema",
      imageBadge: "ECOKlien / SISTEMA DE TRATAMIENTO PARA INSTALACIONES",
      stages: [
        {
          title: "Electrocoagulación",
          description:
            "Desestabiliza los sólidos en suspensión, los fármacos y los contaminantes orgánicos y los convierte en flóculos separables.",
        },
        {
          title: "Destrucción de patógenos",
          description:
            "La generación de oxidantes in situ elimina las bacterias hospitalarias multirresistentes sin productos químicos peligrosos.",
        },
        {
          title: "Oxidación avanzada",
          description: "Descompone antibióticos refractarios, disruptores endocrinos y residuos químicos.",
        },
        {
          title: "Minimización de lodos",
          description:
            "Produce hasta un 70% menos de lodos en comparación con el tratamiento convencional de coagulación química.",
        },
      ],
    },
    closerSection: {
      eyebrow: "SISTEMA INTEGRADO",
      headingLeft: "Integración fluida en la infraestructura de servicios del hospital.",
      headingRight: "Su huella modular permite la instalación en sótanos o salas técnicas existentes.",
      steps: [
        {
          tag: "ENTRADA",
          title: "Corrientes de residuos hospitalarios",
          subtitle: "Efluente combinado",
          description: "Efluente recogido de las áreas clínicas y no clínicas del hospital.",
        },
        {
          tag: "AMORTIGUACIÓN",
          title: "Unidad de ecualización",
          subtitle: "Regulación del caudal",
          description: "Homogeneiza el pH y la carga orgánica antes de los reactores electroquímicos.",
        },
        {
          tag: "NÚCLEO",
          title: "Celda electroquímica híbrida",
          subtitle: "Procesamiento continuo",
          description: "Reactores modulares de alto rendimiento que tratan el efluente de forma continua.",
        },
        {
          tag: "SALIDA",
          title: "Reutilización o vertido seguros",
          subtitle: "Estándar normativo",
          description: "Agua tratada apta para descarga de inodoros, horticultura o vertido al desagüe.",
        },
      ],
      footerNote:
        "Configuraciones personalizadas diseñadas para cumplir las normas del PCB (Pollution Control Board, Junta de Control de la Contaminación).",
    },
    fluidsSection: {
      eyebrow: "ESPECTRO DE EFLUENTES",
      heading: "Tratamiento integral de aguas residuales hospitalarias.",
      footerText: "Capaz de neutralizar diversos agentes químicos, biológicos y farmacéuticos.",
      streams: [
        { title: "Residuos de diálisis" },
        { title: "Residuos químicos de laboratorio" },
        { title: "Aguas de lavado con desinfectantes" },
        { title: "Efluentes de patología" },
        { title: "Residuos líquidos de quirófano" },
        { title: "Bioefluentes generales" },
      ],
    },
    applicationsSection: {
      eyebrow: "Instalaciones objetivo",
      heading: "Diseñado para la escala y el funcionamiento continuo.",
      subtitle: "Ideal para hospitales de tamaño mediano a grande, redes de atención sanitaria y campus médicos.",
      image1Title: "Hospitales multiespecialidad",
      image2Title: "Campus de investigación médica",
      facilities: [
        { title: "Hospitales generales", subtitle: "Instalaciones de más de 100 a más de 1000 camas" },
        { title: "Clínicas multiespecialidad", subtitle: "Unidades quirúrgicas y de hospitalización" },
        { title: "Facultades de medicina", subtitle: "Laboratorios hospitalarios y académicos" },
        { title: "Centros de tratamiento oncológico", subtitle: "Efluentes de quimioterapia y radioterapia" },
        { title: "Centros de traumatología", subtitle: "Residuos continuos de procedimientos de alta carga" },
        { title: "Cadenas de diálisis", subtitle: "Corrientes de fluidos salinos y ácidos de gran volumen" },
      ],
    },
    configurationsSection: {
      eyebrow: "CAPACIDADES",
      heading: "Capacidades escalables para las demandas de cada instalación.",
      subtitle: "Adaptado al volumen diario de generación de efluentes.",
      ctaCard: { buttonText: "Programar auditoría de la instalación" },
      footerNote: "*Paquetes llave en mano completos de obra civil, electricidad y automatización disponibles bajo pedido.",
    },
  },
  {
    slug: "biomedical-liquid-waste-disinfection-system",
    productname: "Sistema de desinfección de residuos líquidos biomédicos",
    eyebrow: "SISTEMA EN EL PUNTO DE ORIGEN",
    hero: {
      eyebrow: "SISTEMA EN EL PUNTO DE ORIGEN",
      title: "Sistema de desinfección de residuos líquidos biomédicos",
      subtitle: "Desinfección microbiana rápida sin productos químicos nocivos",
      description:
        "Un sistema de desinfección electroquímica para la contaminación microbiana en residuos líquidos biomédicos. Compacto y adaptable, cuando se requiere como tratamiento dedicado integrado en un proceso más amplio de tratamiento de aguas residuales.",
      ctaText: "Explorar",
    },
    sourcesSection: {
      eyebrow: "El riesgo microbiano",
      heading: "Neutralización de la carga de patógenos en el punto de origen.",
      subtitle: "Eliminación de los riesgos de bioseguridad antes del drenaje.",
      sources: [
        "Laboratorios de microbiología",
        "Salas de enfermedades infecciosas",
        "Bancos de sangre",
        "Áreas de preparación de muestras",
      ],
      description: [
        "Los microorganismos patógenos representan graves riesgos de infección para las redes de tuberías y los trabajadores de saneamiento.",
        "La dosificación manual de cloro o hipoclorito genera organoclorados tóxicos y vapores peligrosos.",
        "El sistema de desinfección de ECOKlien utiliza radicales electroquímicos generados in situ para la neutralización inmediata de patógenos.",
      ],
    },
    technologySection: {
      eyebrow: "La tecnología",
      heading: "Desinfección microbiana electroquímica",
      description:
        "Aprovecha generadores de oxidantes mixtos para eliminar bacterias, virus y hongos con tiempos de contacto rápidos.",
      ctaText: "Seleccionar sistema",
      imageBadge: "ECOKlien / UNIDAD DE DESINFECCIÓN",
      stages: [
        {
          title: "Preclarificación",
          description: "Estabiliza la biocarga en suspensión para optimizar la penetración UV y electroquímica.",
        },
        {
          title: "Electrocloración",
          description: "Genera cloro activo y radicales hidroxilo a partir de las sales naturales presentes en el líquido.",
        },
        {
          title: "Lisis de membrana",
          description:
            "La celda electroquímica rompe las paredes celulares microbianas, lo que impide la formación de resistencias.",
        },
        {
          title: "Cero huella química",
          description: "No deja residuos químicos tóxicos persistentes en la corriente de efluente tratado.",
        },
      ],
    },
    closerSection: {
      eyebrow: "BIOSEGURIDAD",
      headingLeft: "Desinfección en el punto de origen para zonas de alto riesgo.",
      headingRight: "Conectado directamente a los lavabos de laboratorio y a las unidades de descarga clínica.",
      steps: [
        {
          tag: "CAPTURA",
          title: "Interfaz de lavabo / desagüe",
          subtitle: "Entrada inmediata",
          description: "Conexión directa por tubería a los lavabos de bioseguridad del laboratorio.",
        },
        {
          tag: "DETECCIÓN",
          title: "Sensor de nivel automatizado",
          subtitle: "Activación instantánea",
          description: "El sistema se activa automáticamente al entrar el líquido.",
        },
        {
          tag: "DESINFECCIÓN",
          title: "Celda de contacto rápido",
          subtitle: "Tasa de eliminación del 99.99%",
          description: "La generación electroquímica de radicales elimina la carga microbiana en segundos.",
        },
        {
          tag: "DRENAJE SEGURO",
          title: "Salida de drenaje higienizada",
          subtitle: "Efluente neutralizado",
          description: "El líquido no peligroso fluye de forma segura hacia la red de alcantarillado estándar.",
        },
      ],
      footerNote:
        "Cumple las directrices de desinfección para la gestión de residuos biomédicos de la OMS y del CPCB.",
    },
    fluidsSection: {
      eyebrow: "OBJETIVOS MICROBIANOS",
      heading: "Eliminación de patógenos de amplio espectro.",
      footerText: "Eficaz contra bacterias, organismos formadores de esporas y virus lipídicos y no lipídicos.",
      streams: [
        { title: "Cultivos bacterianos" },
        { title: "Medios virales" },
        { title: "Esputo clínico" },
        { title: "Muestras de sangre" },
        { title: "Residuos de centrífuga" },
        { title: "Fluidos serológicos" },
      ],
    },
    applicationsSection: {
      eyebrow: "Aplicaciones específicas",
      heading: "Diseñado para entornos sensibles en materia de bioseguridad.",
      subtitle: "Donde la neutralización microbiana inmediata es primordial.",
      image1Title: "Departamentos de patología",
      image2Title: "Laboratorios de microbiología",
      facilities: [
        { title: "Laboratorios de microbiología", subtitle: "Preparación de cultivos y lavabos de descarte" },
        { title: "Lavaderos de bancos de sangre", subtitle: "Separación y lavado de componentes" },
        { title: "Unidades de pruebas virológicas", subtitle: "Biocontención y descarte de muestras" },
        { title: "Lavabos de salas de aislamiento", subtitle: "Aguas residuales con patógenos contagiosos" },
      ],
    },
    configurationsSection: {
      eyebrow: "CAPACIDADES",
      heading: "Unidades de desinfección compactas plug-and-play.",
      subtitle: "Modelos disponibles para montaje en pared y bajo encimera.",
      ctaCard: { buttonText: "Solicitar demostración de desinfección" },
      footerNote: "*Disponible en carcasas de acero inoxidable de grado médico a prueba de salpicaduras IP65.",
    },
  },
];
