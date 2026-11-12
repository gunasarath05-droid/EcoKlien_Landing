import type { GlossaryTerm } from "../../glossary";

/**
 * Spanish glossary translations: text fields only, keyed by `slug` (see src/i18n/README.md).
 * `sections` and `sources` replace the English arrays as a whole, so their ids and hrefs are
 * repeated here unchanged. Neutral international Spanish, formal "usted".
 */

const BLW_SYSTEM = "/products/biomedical-liquid-waste-treatment-system";
const CONTACT = "/contact";

export const glossaryTerms: (Partial<GlossaryTerm> & Pick<GlossaryTerm, "slug">)[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "antimicrobial-resistance",
    title: "Resistencia a los antimicrobianos (AMR)",
    cardSummary:
      "Cuando los microorganismos dejan de responder a los medicamentos, lo que hace que las infecciones sean más difíciles de tratar.",
    intro:
      "Comprenda qué es la resistencia a los antimicrobianos, qué la impulsa y qué papel desempeñan los residuos hospitalarios.",
    category: "RIESGOS PARA LA SALUD",
    simpleTerms:
      "La resistencia a los antimicrobianos se produce cuando las bacterias, los virus, los hongos y los parásitos cambian con el tiempo y dejan de responder a los medicamentos, lo que hace que las infecciones sean más difíciles de tratar y aumenta el riesgo de propagación de enfermedades, de enfermedad grave y de muerte.",
    sections: [
      {
        id: "what-is",
        title: "¿Qué es la resistencia a los antimicrobianos?",
        navTitle: "¿Qué es la AMR?",
        blocks: [
          {
            type: "p",
            text: "Es una de las principales amenazas mundiales para la salud pública y el desarrollo. Se estima que la AMR bacteriana fue directamente responsable de 1.27 millones de muertes en el mundo en 2019 y que contribuyó a 4.95 millones de muertes.",
          },
          {
            type: "definition",
            label: "SEGÚN LA OMS",
            text: "La resistencia a los antimicrobianos se produce cuando las bacterias, los virus, los hongos y los parásitos cambian con el tiempo y dejan de responder a los medicamentos. Como resultado, los medicamentos se vuelven ineficaces y las infecciones persisten en el organismo, lo que aumenta el riesgo de que se propaguen a otras personas.",
            note: "Definición adaptada de la Organización Mundial de la Salud.",
          },
          {
            type: "definition",
            label: "SEGÚN LOS CDC",
            text: "La resistencia a los antimicrobianos ocurre cuando gérmenes como las bacterias y los hongos desarrollan la capacidad de vencer a los medicamentos diseñados para eliminarlos. Esto significa que los gérmenes no mueren y siguen creciendo. Las infecciones resistentes pueden ser difíciles, y a veces imposibles, de tratar.",
            note: "Definición de los Centros para el Control y la Prevención de Enfermedades (CDC).",
          },
        ],
      },
      {
        id: "antimicrobials",
        title: "¿Qué son los antimicrobianos?",
        navTitle: "Antimicrobianos",
        blocks: [
          {
            type: "p",
            text: "Los antimicrobianos —entre ellos los antibióticos, los antivirales, los antifúngicos y los antiparasitarios— son medicamentos que se utilizan para prevenir y tratar infecciones en seres humanos, animales y plantas. A los microorganismos que desarrollan resistencia a los antimicrobianos se les denomina a veces “superbacterias”.",
          },
        ],
      },
      {
        id: "causes",
        title: "Principales causas de la resistencia a los antimicrobianos",
        navTitle: "Principales causas",
        blocks: [
          {
            type: "numbered",
            items: [
              { title: "Uso excesivo e indebido de antibióticos" },
              { title: "Residuos hospitalarios sin tratar o tratados de forma inadecuada" },
              { title: "Uso de antibióticos en la agricultura" },
              { title: "Viajes y comercio internacionales" },
            ],
          },
          {
            type: "cta",
            title: "El papel de los residuos hospitalarios en la AMR.",
            text: "¿Desea saber cómo contribuyen los residuos hospitalarios y los residuos líquidos biomédicos sin tratar a la resistencia a los antimicrobianos?",
            label: "Lea el artículo",
            href: "/blog",
          },
        ],
      },
    ],
    sources: [
      {
        label: "Organización Mundial de la Salud — Resistencia a los antimicrobianos",
        href: "https://www.who.int/health-topics/antimicrobial-resistance",
      },
      { label: "CDC — Acerca de la resistencia a los antimicrobianos", href: "https://www.cdc.gov/drugresistance/about.html" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "biomedical-liquid-waste",
    title: "Residuos líquidos biomédicos",
    cardSummary:
      "Residuos líquidos procedentes de la atención sanitaria, los laboratorios y la investigación que requieren un tratamiento especializado.",
    intro: "Comprenda qué son, de dónde proceden y por qué es importante tratarlos en el origen.",
    category: "FLUJOS DE RESIDUOS",
    simpleTerms:
      "Residuos líquidos generados durante la atención sanitaria, el diagnóstico, la investigación y actividades relacionadas. Pueden contener materiales infecciosos, sustancias químicas o residuos farmacéuticos, y requieren una manipulación y un tratamiento especializados.",
    sections: [
      {
        id: "what-is",
        title: "¿Qué son los residuos líquidos biomédicos?",
        blocks: [
          {
            type: "p",
            text: "El término residuos líquidos biomédicos suele utilizarse como sinónimo de residuos líquidos hospitalarios. Sin embargo, no proceden solo de los hospitales: los centros de diagnóstico, los laboratorios, las instalaciones veterinarias y los entornos de investigación también pueden generarlos.",
          },
          {
            type: "definition",
            label: "PRIMERO, ¿QUÉ SON LOS RESIDUOS BIOMÉDICOS?",
            text: "Residuos generados durante el diagnóstico, el tratamiento o la inmunización de seres humanos o animales, en la investigación relacionada, o en la producción o el ensayo de productos biológicos.",
            note: "Definición adaptada de Vikaspedia y de la literatura publicada sobre residuos biomédicos.",
          },
          {
            type: "p",
            text: "Los residuos biomédicos incluyen residuos anatómicos y animales, residuos de microbiología, objetos punzocortantes, medicamentos desechados, materiales sucios, residuos líquidos de áreas infectadas, cenizas de incineración y residuos químicos. Su fracción líquida requiere especial cuidado porque, cuando se manipula de forma inadecuada, puede llegar a los cursos de agua y a las aguas subterráneas.",
          },
        ],
      },
      {
        id: "types",
        title: "Tipos de residuos líquidos biomédicos",
        navTitle: "Tipos de residuos líquidos",
        blocks: [
          {
            type: "numbered",
            items: [
              {
                title: "Residuos infecciosos",
                text: "Sangre y fluidos corporales; cultivos de laboratorio, vacunas desechadas y otros líquidos potencialmente infecciosos.",
              },
              {
                title: "Residuos químicamente peligrosos",
                text: "Formaldehído, mercurio, disolventes e isótopos radiactivos procedentes de actividades clínicas, de patología y relacionadas.",
              },
              {
                title: "Residuos farmacéuticos líquidos",
                text: "Medicamentos desechados, no utilizados o caducados en forma líquida.",
              },
              {
                title: "Productos químicos fotográficos",
                text: "Soluciones fijadoras y reveladoras procedentes de procesos fotográficos.",
              },
              {
                title: "Agua de limpieza y lavado",
                text: "Agua contaminada procedente de las actividades de limpieza que se canaliza hacia los desagües.",
              },
            ],
          },
        ],
      },
      {
        id: "why",
        title: "¿Por qué requieren un cuidado especial?",
        navTitle: "Por qué es importante",
        blocks: [
          {
            type: "p",
            text: "Los residuos líquidos biomédicos sin tratar pueden contener microorganismos infecciosos, residuos farmacéuticos y sustancias químicas peligrosas. Una manipulación inadecuada puede exponer al personal sanitario y a las comunidades, mientras que su vertido al medio ambiente puede contaminar las fuentes de agua.",
          },
          {
            type: "bullets",
            items: [
              "Los derrames, las salpicaduras y la generación de aerosoles pueden aumentar la exposición durante la recogida y la manipulación.",
              "Los antibióticos, las bacterias resistentes y los genes de resistencia pueden contribuir a la propagación de la [resistencia a los antimicrobianos](/glossary/antimicrobial-resistance).",
              "Un vertido o una reutilización inseguros pueden arrastrar contaminantes a los cursos de agua, a las aguas subterráneas y al medio ambiente en general.",
            ],
          },
        ],
      },
      {
        id: "handling",
        title: "Manipulación y tratamiento",
        blocks: [
          {
            type: "p",
            text: "Los residuos biomédicos deben segregarse de otros flujos de residuos y gestionarse según su clasificación. La recogida, la manipulación, el tratamiento y el vertido deben cumplir los requisitos sanitarios y ambientales aplicables.",
          },
          {
            type: "p",
            text: "Algunos hospitales utilizan sus propias plantas de tratamiento de aguas residuales (STP) o plantas de tratamiento de efluentes (ETP), con tratamiento primario, secundario y terciario seguido del tratamiento de lodos. El proceso adecuado depende del flujo de residuos y de las normas que deban cumplirse.",
          },
          {
            type: "cta",
            title: "Convierta los residuos en una oportunidad de sostenibilidad.",
            text: "Tratar en el origen puede reducir los riesgos de manipulación y favorecer la conservación del agua. Con un tratamiento adecuado y la aprobación reglamentaria, el agua recuperada puede destinarse a usos no potables.",
            label: "Descubra la ventaja de ECOKlien",
            href: BLW_SYSTEM,
          },
        ],
      },
      {
        id: "faq",
        title: "Preguntas frecuentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "¿En qué se diferencian de las aguas residuales convencionales?",
                answer:
                  "A diferencia de las aguas residuales domésticas, los residuos líquidos biomédicos pueden contener microorganismos infecciosos, sangre, residuos farmacéuticos, sustancias químicas y compuestos antimicrobianos que requieren un tratamiento especializado.",
              },
              {
                question: "¿Pueden contribuir a la resistencia a los antimicrobianos (AMR)?",
                answer:
                  "Sí. Pueden contener antibióticos, residuos antimicrobianos, bacterias resistentes a los antibióticos y genes de resistencia. Si se liberan sin tratar, pueden contribuir a la propagación de la resistencia en el medio ambiente.",
              },
              {
                question: "¿Se pueden reutilizar los residuos líquidos biomédicos tratados?",
                answer:
                  "Cuando se tratan conforme a las normas exigidas, el agua recuperada puede ser apta para usos no potables, como el paisajismo, la descarga de inodoros y los sistemas de refrigeración, con sujeción a la normativa local.",
              },
              {
                question: "¿Qué normativa regula su gestión?",
                answer:
                  "En la India, las instalaciones deben cumplir las Normas de Gestión de Residuos Biomédicos de 2016 (Bio-Medical Waste Management Rules, 2016) y las directrices de la Junta Central de Control de la Contaminación (Central Pollution Control Board) y de las respectivas Juntas Estatales de Control de la Contaminación (State Pollution Control Boards).",
              },
              {
                question: "¿Por qué es importante el tratamiento en el origen?",
                answer:
                  "Tratar los residuos en el origen minimiza los riesgos de manipulación, reduce las necesidades de transporte, mejora el cumplimiento normativo y ayuda a prevenir la contaminación ambiental.",
              },
              {
                question: "¿Pueden los residuos líquidos biomédicos convertirse en un recurso?",
                answer:
                  "Sí. Un tratamiento adecuado permite recuperar agua para una reutilización apropiada, lo que reduce el consumo de agua dulce y respalda las iniciativas de economía circular en los centros sanitarios.",
              },
              {
                question: "¿Por qué se les llama a veces “oro líquido”?",
                answer:
                  "Contienen cantidades importantes de agua que potencialmente pueden recuperarse tras el tratamiento. Considerarlos un recurso favorece los objetivos de conservación del agua y de sostenibilidad.",
              },
            ],
          },
        ],
      },
    ],
    sources: [
      {
        label: "Vikaspedia — Los residuos biomédicos y su segregación",
        href: "https://vikaspedia.in/energy/environment/waste-management/bio-medical-waste-management/bio-medical-waste-and-its-segregation",
      },
      {
        label: "Medical Journal of Dr. D.Y. Patil Vidyapeeth — Gestión de los residuos biomédicos líquidos",
        href: "https://journals.lww.com/mjmr/fulltext/2013/04020/liquid_biomedical_waste_management__an_emerging.11.aspx",
      },
      {
        label: "Toxics Link — Residuos biomédicos: problemas y gestión",
        href: "https://toxicslink.org/wp-content/uploads/2022/08/Factsheet_28_BMW%20Concerns%20and%20management%28English%29.pdf",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "biomedical-waste",
    title: "Residuos biomédicos",
    cardSummary: "Residuos generados durante el diagnóstico, el tratamiento, la inmunización o la investigación biomédica.",
    intro:
      "Comprenda qué son los residuos biomédicos, las formas que adoptan y por qué es importante gestionarlos adecuadamente.",
    category: "FLUJOS DE RESIDUOS",
    simpleTerms:
      "Cualquier residuo generado durante el diagnóstico, el tratamiento o la inmunización de seres humanos o animales, la investigación relacionada, o la producción o el ensayo de productos biológicos. Requiere una manipulación, segregación, tratamiento y eliminación especializados.",
    sections: [
      {
        id: "what-is",
        title: "¿Qué son los residuos biomédicos?",
        blocks: [
          {
            type: "definition",
            label: "DEFINICIÓN DEL CPCB",
            text: "Por “residuos biomédicos” se entiende cualquier residuo que se genere durante el diagnóstico, el tratamiento o la inmunización de seres humanos o animales, o en las actividades de investigación correspondientes, o en la producción o el ensayo de productos biológicos, o en campamentos de salud.",
            note: "Definición tomada de las directrices de la Junta Central de Control de la Contaminación (Central Pollution Control Board).",
          },
          {
            type: "p",
            text: "Los residuos biomédicos se generan dondequiera que se presten servicios sanitarios, incluidos hospitales, clínicas, laboratorios de diagnóstico, bancos de sangre, instalaciones veterinarias, instituciones de investigación y campamentos de salud. Debido a su naturaleza potencialmente infecciosa, peligrosa o tóxica, requieren procedimientos especializados de manipulación, segregación, tratamiento y eliminación para proteger la salud pública y el medio ambiente.",
          },
          {
            type: "p",
            text: "A medida que los sistemas sanitarios siguen expandiéndose en todo el mundo, la gestión eficaz de los residuos biomédicos se ha convertido en un componente fundamental del control de infecciones, la protección del medio ambiente y el cumplimiento normativo.",
          },
        ],
      },
      {
        id: "types",
        title: "Tipos de residuos biomédicos",
        navTitle: "Tipos de residuos",
        blocks: [
          {
            type: "p",
            text: "Los residuos biomédicos abarcan una amplia variedad de flujos de residuos, cada uno de los cuales requiere métodos específicos de tratamiento y eliminación.",
          },
          {
            type: "numbered",
            items: [
              {
                title: "Residuos infecciosos",
                text: "Sangre, hemoderivados, cultivos, cepas y otros fluidos corporales que pueden estar contaminados con patógenos capaces de causar enfermedades.",
              },
              {
                title: "Objetos punzocortantes",
                text: "Agujas, jeringas, bisturíes y otros objetos cortantes. Las lesiones por pinchazo de aguja siguen siendo uno de los riesgos laborales más comunes a los que se enfrenta el personal sanitario.",
              },
              {
                title: "Residuos patológicos",
                text: "Residuos anatómicos humanos, cadáveres de animales y partes del cuerpo, que requieren una manipulación especializada por consideraciones éticas, legales y de control de infecciones.",
              },
              {
                title: "Residuos químicos",
                text: "Disolventes, reactivos, desinfectantes y otras sustancias químicas desechadas procedentes de laboratorios y entornos sanitarios.",
              },
            ],
          },
        ],
      },
      {
        id: "why",
        title: "Por qué es importante una gestión adecuada",
        navTitle: "Por qué es importante",
        blocks: [
          {
            type: "p",
            text: "La gestión eficaz de los residuos biomédicos va mucho más allá del cumplimiento normativo. Desempeña un papel directo en la protección del personal sanitario, los pacientes, las comunidades y los ecosistemas naturales. Los residuos que se segregan, almacenan, transportan o tratan de forma inadecuada pueden convertirse en una fuente de transmisión de enfermedades y de contaminación ambiental.",
          },
          {
            type: "bullets",
            intro: "Una gestión adecuada de los residuos ayuda a los centros sanitarios a:",
            items: [
              "Reducir los riesgos de infección",
              "Proteger al personal y a los pacientes",
              "Prevenir la contaminación ambiental",
              "Facilitar el cumplimiento normativo",
              "Mejorar la eficiencia operativa",
              "Reforzar las iniciativas de sostenibilidad",
            ],
          },
        ],
      },
      {
        id: "impact",
        title: "Impacto en la salud y el medio ambiente",
        navTitle: "Salud y medio ambiente",
        blocks: [
          { type: "h3", text: "Impacto en la salud humana" },
          {
            type: "p",
            text: "Los residuos biomédicos sin tratar pueden albergar patógenos que causan infecciones graves como el VIH, la hepatitis B y la hepatitis C. La exposición puede producirse por contacto directo, superficies contaminadas, lesiones accidentales o vías ambientales. El personal sanitario, los manipuladores de residuos, el personal de saneamiento y las comunidades cercanas son especialmente vulnerables.",
          },
          {
            type: "bullets",
            intro: "La manipulación inadecuada de objetos punzocortantes y materiales infecciosos aumenta el riesgo de:",
            items: [
              "Lesiones por pinchazo de aguja",
              "Cortes y heridas punzantes",
              "Exposición a [patógenos transmitidos por la sangre](/glossary/bloodborne-pathogens)",
              "Infecciones en el lugar de trabajo",
            ],
          },
          { type: "h3", text: "Impacto en el medio ambiente" },
          {
            type: "p",
            text: "Los residuos sanitarios sin tratar pueden introducir patógenos, residuos farmacéuticos, sustancias químicas y sustancias peligrosas en el suelo y el agua. Cuando llegan a los sistemas de drenaje, los vertederos o las masas de agua, los contaminantes pueden acabar alcanzando las fuentes de agua subterránea y amenazar la calidad del agua potable.",
          },
          {
            type: "p",
            text: "Una de las preocupaciones emergentes más importantes es la [resistencia a los antimicrobianos](/glossary/antimicrobial-resistance). Los residuos sanitarios pueden contener residuos de antibióticos y microorganismos resistentes que, si se liberan sin tratar, pueden contribuir a su propagación.",
          },
        ],
      },
      {
        id: "treatment",
        title: "Cómo se tratan los residuos biomédicos",
        navTitle: "Métodos de tratamiento",
        blocks: [
          {
            type: "p",
            text: "El tratamiento comprende varios procesos diseñados para neutralizar los peligros y minimizar el impacto ambiental. El método adecuado depende del tipo de residuo generado y de los requisitos reglamentarios aplicables.",
          },
          {
            type: "numbered",
            items: [
              {
                title: "Segregación",
                text: "Separar en el origen los residuos infecciosos, los objetos punzocortantes, los residuos químicos y los residuos líquidos para que cada flujo reciba el tratamiento adecuado.",
              },
              {
                title: "Esterilización en autoclave",
                text: "El vapor a alta presión destruye los microorganismos presentes en los residuos infecciosos.",
              },
              {
                title: "Desinfección química",
                text: "Los desinfectantes eliminan los patógenos nocivos en determinados flujos de residuos antes de su eliminación.",
              },
              {
                title: "Incineración",
                text: "Se utiliza para categorías específicas de residuos biomédicos peligrosos que requieren su destrucción completa.",
              },
              {
                title: "Trituración y reducción de volumen",
                text: "Reduce el volumen después del tratamiento e impide la reutilización no autorizada.",
              },
              {
                title: "Tratamiento de residuos líquidos",
                text: "Los residuos líquidos procedentes de laboratorios, procedimientos de diagnóstico, quirófanos e investigación a menudo requieren un tratamiento especializado antes de su vertido.",
              },
            ],
          },
          {
            type: "cta",
            title: "¿Busca una forma más sencilla de tratar los residuos líquidos biomédicos?",
            text: "El tratamiento en el origen puede ayudar a simplificar el cumplimiento normativo, reducir los riesgos de manipulación y favorecer prácticas sostenibles de gestión de las aguas residuales.",
            label: "Descubra cómo",
            href: BLW_SYSTEM,
          },
        ],
      },
      {
        id: "liquid-waste",
        title: "El creciente desafío de los residuos líquidos",
        navTitle: "Residuos líquidos",
        blocks: [
          {
            type: "p",
            text: "Aunque los residuos biomédicos sólidos suelen recibir una atención considerable, los [residuos líquidos biomédicos](/glossary/biomedical-liquid-waste) siguen siendo uno de los desafíos más complejos a los que se enfrentan hoy los centros sanitarios.",
          },
          {
            type: "bullets",
            intro: "Pueden proceder de:",
            items: [
              "Laboratorios clínicos y departamentos de patología",
              "Centros de diagnóstico y bancos de sangre",
              "Quirófanos",
              "Instalaciones de investigación e instituciones sanitarias",
            ],
          },
          {
            type: "p",
            text: "Soluciones como ECOKlien ayudan a los centros sanitarios a afrontar estos desafíos al permitir el tratamiento en el origen, reducir la dependencia de procesos con uso intensivo de sustancias químicas y simplificar las operaciones de tratamiento.",
          },
        ],
      },
      {
        id: "benefits",
        title: "Principales beneficios de un tratamiento eficaz",
        navTitle: "Principales beneficios",
        blocks: [
          {
            type: "numbered",
            items: [
              {
                title: "Mejor control de infecciones",
                text: "Reduce la exposición a agentes infecciosos de trabajadores, pacientes, manipuladores de residuos y comunidades.",
              },
              {
                title: "Protección del medio ambiente",
                text: "Ayuda a prevenir la contaminación de masas de agua, reservas de agua subterránea y ecosistemas.",
              },
              {
                title: "Cumplimiento normativo",
                text: "Ayuda a las organizaciones a cumplir de manera sistemática una normativa ambiental y de residuos biomédicos en evolución.",
              },
              {
                title: "Eficiencia operativa",
                text: "Reduce la intervención manual y mejora la fiabilidad del proceso.",
              },
              {
                title: "Apoyo a los objetivos de sostenibilidad",
                text: "Reduce el impacto ambiental y promueve una gestión responsable de los recursos.",
              },
            ],
          },
          {
            type: "p",
            text: "La gestión de los residuos biomédicos no es una mera obligación reglamentaria: es una responsabilidad fundamental que repercute directamente en la salud pública, el control de infecciones, la protección del medio ambiente y la seguridad de la comunidad.",
          },
        ],
      },
    ],
    sources: [
      {
        label: "CPCB — Directrices para la gestión de los residuos sanitarios",
        href: "https://cpcb.nic.in/uploads/projects/bio-medical-waste/guidelines_healthcare_june_2018.pdf",
      },
      {
        label: "Organización Mundial de la Salud — Desechos de las actividades de atención sanitaria",
        href: "https://www.who.int/news-room/fact-sheets/detail/health-care-waste",
      },
      { label: "CDC NIOSH — Enfermedades infecciosas transmitidas por la sangre", href: "https://www.cdc.gov/niosh/topics/bbp/" },
      { label: "UNEP — Gestión de los residuos sanitarios", href: "https://www.unep.org/resources/report/healthcare-waste-management" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "bloodborne-pathogens",
    title: "Patógenos transmitidos por la sangre",
    cardSummary: "Microorganismos infecciosos presentes en la sangre que pueden causar enfermedades en los seres humanos.",
    intro:
      "Comprenda qué son los patógenos transmitidos por la sangre, cómo se propagan y qué relación tienen con los residuos líquidos biomédicos.",
    category: "RIESGOS PARA LA SALUD",
    simpleTerms:
      "Microorganismos, como virus o bacterias, que se transportan en la sangre y pueden causar enfermedades en las personas; los más destacados son la hepatitis B, la hepatitis C y el VIH.",
    sections: [
      {
        id: "what-is",
        title: "¿Qué son los patógenos transmitidos por la sangre?",
        blocks: [
          {
            type: "definition",
            label: "DEFINICIÓN",
            text: "Un patógeno es algo que causa una enfermedad. Los gérmenes que pueden tener una presencia duradera en la sangre humana y causar enfermedades en los seres humanos se denominan patógenos transmitidos por la sangre.",
            note: "Definiciones adaptadas del BCCDC y de MedlinePlus.",
          },
          {
            type: "p",
            text: "Existen muchos patógenos transmitidos por la sangre, entre ellos los de la malaria, la sífilis y la brucelosis y, sobre todo, el virus de la hepatitis B (VHB), el virus de la hepatitis C (VHC) y el virus de la inmunodeficiencia humana (VIH).",
          },
          {
            type: "p",
            text: "Los patógenos transmitidos por la sangre, como el VHB y el VIH, pueden transmitirse por contacto con sangre humana infectada y con otros fluidos corporales potencialmente infecciosos.",
          },
        ],
      },
      {
        id: "liquid-waste",
        title: "La relación con los residuos líquidos biomédicos",
        navTitle: "Relación con los residuos líquidos",
        blocks: [
          {
            type: "p",
            text: "Los [residuos líquidos biomédicos](/glossary/biomedical-liquid-waste), que incluyen sangre, fluidos corporales y otros materiales potencialmente infecciosos, pueden contener patógenos transmitidos por la sangre. Una manipulación y una eliminación inadecuadas pueden propagar estos patógenos y suponer riesgos importantes para el personal sanitario, los pacientes y el medio ambiente.",
          },
          {
            type: "p",
            text: "Para mitigar estos riesgos, es esencial una manipulación y una eliminación adecuadas. Un tratamiento eficaz de los residuos líquidos biomédicos antes de su eliminación es crucial para inactivar los patógenos y reducir su impacto ambiental.",
          },
          {
            type: "cta",
            title: "Replantee la gestión de residuos de su instalación.",
            text: "Contáctenos hoy mismo para saber cómo ECOKlien puede revolucionar las prácticas de gestión de residuos de su instalación.",
            label: "Contáctenos",
            href: CONTACT,
          },
        ],
      },
      {
        id: "faq",
        title: "Preguntas frecuentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "¿Cómo se propagan los patógenos transmitidos por la sangre?",
                answer:
                  "A través de lesiones por pinchazo de aguja, cortes o punciones con objetos punzocortantes contaminados, el contacto con sangre infectada a través de heridas abiertas o membranas mucosas (ojos, nariz, boca) y el uso compartido de agujas. El contacto casual, como tocarse, abrazarse o compartir alimentos, no propaga estos patógenos.",
              },
              {
                question: "¿Quién corre riesgo de exposición?",
                answer:
                  "El personal sanitario, los técnicos de laboratorio, el personal de saneamiento y de gestión de residuos, y el personal de los servicios de emergencia.",
              },
              {
                question: "¿Qué son las “precauciones universales”?",
                answer:
                  "Consisten en tratar toda la sangre y determinados fluidos corporales como potencialmente infecciosos, independientemente de su origen. Esto incluye usar guantes y equipo de protección, eliminar adecuadamente los objetos punzocortantes y limpiar y desinfectar de inmediato las superficies contaminadas.",
              },
              {
                question: "¿Pueden los patógenos transmitidos por la sangre sobrevivir fuera del cuerpo?",
                answer:
                  "Algunos sí. Por ejemplo, el virus de la hepatitis B puede sobrevivir en superficies hasta 7 días en determinadas condiciones. Por eso es esencial desinfectar las superficies, y no solo limpiar la suciedad visible.",
              },
              {
                question: "¿Cómo se pueden desinfectar las superficies?",
                answer:
                  "Utilizando un desinfectante químico adecuado (es decir, soluciones de lejía), respetando el tiempo de contacto apropiado y asegurándose de cubrir todas las zonas contaminadas. Cuando preocupan las aguas residuales o la escorrentía contaminada, los sistemas de tratamiento estructurados, como los diseñados por ECOKlien, pueden ayudar a gestionar los contaminantes biológicos antes de su vertido.",
              },
            ],
          },
        ],
      },
    ],
    sources: [
      { label: "BCCDC — Enfermedades transmitidas por la sangre", href: "http://www.bccdc.ca/health-info/disease-types/bloodborne-diseases" },
      { label: "MedlinePlus — Patógenos transmitidos por la sangre", href: "https://medlineplus.gov/ency/patientinstructions/000453.htm" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "bod-biochemical-oxygen-demand",
    title: "BOD (demanda bioquímica de oxígeno)",
    cardSummary: "El oxígeno que necesitan los microorganismos para descomponer la materia orgánica presente en el agua.",
    intro: "Comprenda qué mide la BOD y por qué es importante en el tratamiento de aguas residuales.",
    category: "CALIDAD DEL AGUA",
    simpleTerms:
      "La cantidad de oxígeno que consumen las bacterias y otros microorganismos mientras descomponen la materia orgánica en condiciones aerobias. Cuanto mayor es la BOD, más contaminada está el agua por residuos orgánicos.",
    sections: [
      {
        id: "what-is",
        title: "¿Qué es la demanda bioquímica de oxígeno?",
        navTitle: "¿Qué es la BOD?",
        blocks: [
          {
            type: "p",
            text: "Cuando se habla de calidad del agua, un término que aparece con frecuencia es la demanda biológica de oxígeno, a menudo abreviada como BOD.",
          },
          {
            type: "definition",
            label: "DEFINICIÓN",
            text: "La demanda bioquímica de oxígeno es la cantidad de oxígeno que consumen las bacterias y otros microorganismos mientras descomponen la materia orgánica en condiciones aerobias.",
            note: "Suele expresarse en mg/L (miligramos de oxígeno por litro de agua).",
          },
        ],
      },
      {
        id: "simple-terms",
        title: "La BOD en pocas palabras",
        navTitle: "En pocas palabras",
        blocks: [
          {
            type: "p",
            text: "Un lago o arroyo corriente contiene pequeñas cantidades de oxígeno en forma de oxígeno disuelto: hasta unas diez moléculas de oxígeno por cada millón de moléculas de agua. Es un componente crucial de las masas de agua naturales, fundamental para mantener la vida acuática y la calidad estética de arroyos y lagos.",
          },
          {
            type: "p",
            text: "Las presiones ambientales (las altas temperaturas del verano) y los factores de origen humano (el exceso de fertilizantes) pueden reducir el oxígeno disuelto y someter a estrés a la vida acuática local. La BOD nos ayuda a entender cuánto oxígeno consumen los microorganismos al descomponer la materia orgánica.",
          },
        ],
      },
      {
        id: "treatment",
        title: "La BOD en el tratamiento de aguas residuales",
        navTitle: "La BOD en el tratamiento",
        blocks: [
          {
            type: "p",
            text: "La BOD es un indicador esencial para evaluar la eficacia de un proceso de tratamiento. Unos niveles altos de BOD indican un tratamiento insuficiente; unos niveles bajos significan que se han eliminado los contaminantes orgánicos, lo que preserva la calidad del agua y la salud pública.",
          },
          {
            type: "numbered",
            items: [
              { title: "Río limpio, no contaminado", text: "La lectura de BOD debe ser inferior a 1 PPM." },
              { title: "Aguas negras", text: "Normalmente superior a 200 PPM, y a menudo llega hasta 600 PPM." },
            ],
          },
          {
            type: "p",
            text: "Las industrias que vierten aguas residuales al alcantarillado municipal o a cursos de agua deben cumplir una normativa estricta sobre los niveles de BOD. Los materiales sólidos deben reducirse mediante tratamiento antes del vertido; de lo contrario, la BOD aumentará.",
          },
        ],
      },
      {
        id: "ecoklien",
        title: "Cómo aborda ECOKlien el equilibrio de la BOD",
        navTitle: "El enfoque de ECOKlien",
        blocks: [
          {
            type: "p",
            text: "ECOKlien ofrece a los centros sanitarios y a la industria sistemas avanzados de tratamiento híbrido ajustados para cumplir toda la normativa. El sistema está equipado con sensores que garantizan un procesamiento fluido de los efluentes biomédicos sin ninguna intervención humana, cumpliendo las normas de BOD y garantizando a la vez una manipulación segura de las sustancias tóxicas.",
          },
          {
            type: "cta",
            title: "Conozca más sobre nuestros sistemas.",
            text: "Vea cómo ECOKlien aborda los desafíos del tratamiento de los residuos líquidos biomédicos.",
            label: "Más información",
            href: "/products",
          },
        ],
      },
    ],
    sources: [
      { label: "BioprocessH2O — Demanda biológica de oxígeno", href: "https://www.bioprocessh2o.com/blog/biological-oxygen-demand" },
      {
        label: "USGS — El oxígeno disuelto y el agua",
        href: "https://www.usgs.gov/special-topic/water-science-school/science/dissolved-oxygen-and-water",
      },
      {
        label: "Atlas Scientific — ¿Qué es la BOD en las aguas residuales?",
        href: "https://atlas-scientific.com/blog/what-is-bod-in-wastewater/",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "communicable-diseases",
    title: "Enfermedades transmisibles",
    cardSummary: "Enfermedades que pueden propagarse entre personas y animales, o a través del medio ambiente.",
    intro:
      "Comprenda cómo se propagan las enfermedades transmisibles y qué relación tienen con los residuos líquidos biomédicos.",
    category: "RIESGOS PARA LA SALUD",
    simpleTerms:
      "Enfermedades que se propagan de una persona a otra, de un animal a una persona, o a partir de una superficie o de un alimento.",
    sections: [
      {
        id: "transmission",
        title: "¿Cómo se transmiten las enfermedades transmisibles?",
        navTitle: "Transmisión",
        blocks: [
          {
            type: "numbered",
            items: [
              { title: "Contacto directo con una persona enferma" },
              { title: "Propagación por gotículas respiratorias cuando una persona enferma estornuda o tose" },
              { title: "Contacto con sangre u otros fluidos corporales" },
              { title: "Inhalación de virus o bacterias presentes en el aire" },
              { title: "Contacto con una superficie o un objeto contaminados" },
              { title: "Picaduras o mordeduras de insectos o animales que pueden transmitir la enfermedad" },
              { title: "Ingestión de alimentos o agua contaminados" },
            ],
          },
        ],
      },
      {
        id: "liquid-waste",
        title: "Las enfermedades transmisibles y los residuos líquidos",
        navTitle: "Lecturas adicionales",
        blocks: [
          {
            type: "p",
            text: "Hemos hablado con más detalle sobre las [enfermedades transmisibles que se propagan a través de los residuos líquidos biomédicos](/blog) y sobre cómo [se ven afectadas las comunidades](/blog) por ello.",
          },
        ],
      },
    ],
    sources: [
      {
        label: "CDC NIOSH — Enfermedades transmisibles",
        href: "https://www.cdc.gov/niosh/topics/aircrew/communicablediseases.html",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "greywater",
    title: "Aguas grises",
    cardSummary:
      "Aguas residuales procedentes del lavado y de actividades similares, excluidas las aguas residuales de los inodoros.",
    intro: "Comprenda qué son las aguas grises y cómo su reutilización contribuye a la conservación del agua.",
    category: "REUTILIZACIÓN DEL AGUA",
    simpleTerms:
      "Aguas residuales relativamente limpias generadas por actividades como bañarse, lavarse las manos y lavar la ropa. A diferencia de las aguas negras de los inodoros, pueden reciclarse para usos no potables.",
    sections: [
      {
        id: "what-is",
        title: "¿Qué son las aguas grises?",
        blocks: [
          {
            type: "p",
            text: "Las aguas grises (en inglés, greywater o graywater) son las aguas residuales relativamente limpias generadas por actividades domésticas como bañarse, lavarse las manos y lavar la ropa. A diferencia de las aguas negras, que proceden de los inodoros y contienen contaminantes importantes, las aguas grises pueden reciclarse y reutilizarse, aunque todavía pueden contener jabón, suciedad, partículas de alimentos y otras materias orgánicas.",
          },
          {
            type: "bullets",
            intro:
              "Como no están contaminadas con materia fecal, las aguas grises pueden reciclarse de forma segura para fines no potables como:",
            items: ["Riego", "Descarga de inodoros", "Limpieza"],
          },
        ],
      },
      {
        id: "why-reuse",
        title: "¿Por qué reutilizar las aguas grises?",
        navTitle: "Por qué reutilizarlas",
        blocks: [
          {
            type: "definition",
            label: "EN CIFRAS",
            text: "Casi el 80% del uso doméstico de agua procede de actividades que generan aguas grises.",
            note: "Según la Agencia de Protección Ambiental (EPA).",
          },
          {
            type: "p",
            text: "Al reutilizar las aguas grises, los hogares pueden reducir significativamente su dependencia del agua dulce, un recurso valioso y limitado. Reciclar incluso una fracción de esta agua puede generar un ahorro considerable: una herramienta esencial para la conservación del agua, especialmente en zonas propensas a la sequía.",
          },
        ],
      },
    ],
    sources: [
      {
        label: "Water Wise Group — ¿Qué son las aguas grises?",
        href: "https://waterwisegroup.com/blogs/greywater-education/what-is-greywater",
      },
      {
        label: "Ion Exchange — ¿Qué son las aguas grises y cómo se reciclan?",
        href: "https://us.ionexchangeglobal.com/what-is-grey-water-and-how-it-recycled/",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "hospital-wastewater",
    title: "Aguas residuales hospitalarias",
    cardSummary: "Aguas residuales generadas por las operaciones clínicas y cotidianas de un hospital.",
    intro: "Comprenda qué contienen las aguas residuales hospitalarias y por qué necesitan tratamiento.",
    category: "FLUJOS DE RESIDUOS",
    simpleTerms:
      "Aguas residuales vertidas por todas las actividades de un hospital, tanto médicas como no médicas: desde quirófanos, laboratorios y radiología hasta cocinas y lavanderías.",
    sections: [
      {
        id: "what-is",
        title: "¿Qué son las aguas residuales hospitalarias?",
        blocks: [
          {
            type: "definition",
            label: "DEFINICIÓN",
            text: "Las aguas residuales hospitalarias (HWW) son las aguas residuales vertidas por todas las actividades de un hospital, tanto médicas como no médicas, incluidas las actividades en quirófanos, salas de exploración, laboratorios, salas de neonatos, salas de radiología, cocinas y lavanderías.",
            note: "Definición de un capítulo sobre aguas residuales hospitalarias publicado por Springer.",
          },
        ],
      },
      {
        id: "composition",
        title: "¿Qué contienen?",
        navTitle: "Composición",
        blocks: [
          {
            type: "p",
            text: "Denominadas aguas residuales hospitalarias (HWW, por sus siglas en inglés) o efluente hospitalario, se considera que tienen una calidad similar a la de las aguas residuales municipales, pero también pueden contener componentes potencialmente peligrosos.",
          },
          {
            type: "bullets",
            items: [
              "Compuestos químicos peligrosos",
              "Metales pesados",
              "Desinfectantes y detergentes específicos procedentes de actividades de diagnóstico, laboratorio e investigación",
              "Concentraciones de compuestos farmacéuticos (PhCs) más altas que las de los efluentes municipales",
            ],
          },
        ],
      },
      {
        id: "why-treat",
        title: "¿Por qué tratar las aguas residuales hospitalarias?",
        navTitle: "Por qué tratarlas",
        blocks: [
          {
            type: "p",
            text: "Las aguas residuales hospitalarias contienen una lista interminable de contaminantes que dañan no solo las masas de agua, sino también a las personas y al medio ambiente en su conjunto. Una masa de agua contaminada es el inicio de una reacción en cadena: si se propagan, los contaminantes afectan gravemente al ecosistema y causan enfermedades a quienes viven en las proximidades.",
          },
          {
            type: "p",
            text: "Lea más sobre los [efectos en el medio ambiente](/blog) y sobre las [comunidades que viven al límite](/blog).",
          },
        ],
      },
    ],
    sources: [
      { label: "Springer — Aguas residuales hospitalarias", href: "https://link.springer.com/chapter/10.1007/698_2017_5" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "pharmaceutical-waste",
    title: "Residuos farmacéuticos",
    cardSummary: "Medicamentos desechados, no utilizados o caducados y otros materiales farmacéuticos.",
    intro: "Comprenda qué incluyen los residuos farmacéuticos y los riesgos de su eliminación inadecuada.",
    category: "FLUJOS DE RESIDUOS",
    simpleTerms:
      "Un subproducto de la fabricación de medicamentos, la investigación y la atención sanitaria que plantea importantes riesgos ambientales y para la salud si no se gestiona adecuadamente.",
    sections: [
      {
        id: "what-is",
        title: "¿Qué son los residuos farmacéuticos?",
        blocks: [
          {
            type: "definition",
            label: "DEFINICIÓN",
            text: "Estos residuos incluyen productos farmacéuticos desechados, como medicamentos con receta y de venta libre, así como los lodos químicos y las aguas residuales que se producen durante la fabricación de productos farmacéuticos. También incluyen artículos médicos de desecho, como guantes usados y objetos punzocortantes, que han estado en contacto con productos farmacéuticos.",
            note: "Definición de VLS Environmental Solutions.",
          },
          {
            type: "p",
            text: "Debido a los peligros para la salud y los riesgos ecológicos que plantean estos residuos, requieren procesos de eliminación especializados que garanticen la seguridad.",
          },
        ],
      },
      {
        id: "impact",
        title: "El impacto ambiental",
        navTitle: "Impacto ambiental",
        blocks: [
          {
            type: "numbered",
            items: [
              {
                title: "Contaminación del agua",
                text: "Cuando los productos farmacéuticos llegan a las masas de agua, pueden dañar la vida acuática y alterar los ecosistemas.",
              },
              {
                title: "Contaminación del suelo",
                text: "Los vertederos pueden liberar compuestos farmacéuticos al suelo, lo que afecta a la calidad del suelo y a las aguas subterráneas.",
              },
              {
                title: "Resistencia a los antimicrobianos",
                text: "El uso excesivo e indebido de antibióticos puede contribuir a la aparición de bacterias resistentes a los antibióticos. [Lea más sobre la AMR](/glossary/antimicrobial-resistance).",
              },
            ],
          },
        ],
      },
      {
        id: "ecoklien",
        title: "El papel de ECOKlien",
        navTitle: "El papel de ECOKlien",
        blocks: [
          {
            type: "p",
            text: "Aunque ECOKlien está diseñado principalmente para tratar residuos líquidos biomédicos, también puede adaptarse para tratar ciertos tipos de residuos farmacéuticos, en particular los residuos farmacéuticos líquidos, lo que ayuda a mitigar los riesgos ambientales y para la salud asociados a la contaminación farmacéutica.",
          },
          {
            type: "cta",
            title: "Trate los residuos líquidos en el origen.",
            text: "Explore los sistemas de tratamiento de residuos líquidos biomédicos de ECOKlien.",
            label: "Ver sistemas de tratamiento",
            href: BLW_SYSTEM,
          },
        ],
      },
    ],
    sources: [
      {
        label: "VLS — Tipos de residuos farmacéuticos",
        href: "https://www.vlses.com/2022/10/31/types-of-pharmaceutical-waste/",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "sludge",
    title: "Lodos",
    cardSummary: "Los sólidos residuales que se separan del agua durante el tratamiento de aguas residuales.",
    intro: "Comprenda qué son los lodos y por qué su eliminación requiere cuidado.",
    category: "SUBPRODUCTOS DEL TRATAMIENTO",
    simpleTerms:
      "Una sustancia semisólida que se deposita en el fondo de los tanques o lagunas durante el tratamiento de aguas residuales, también en los centros sanitarios.",
    sections: [
      {
        id: "what-is",
        title: "¿Qué son los lodos?",
        blocks: [
          {
            type: "p",
            text: "Los lodos, un subproducto de diversos procesos de tratamiento de aguas residuales industriales y municipales, incluidos los de los centros sanitarios, pueden plantear importantes riesgos ambientales y para la salud si no se gestionan adecuadamente. Son una sustancia semisólida que se deposita en el fondo de los tanques o lagunas durante el tratamiento de aguas residuales.",
          },
        ],
      },
      {
        id: "impact",
        title: "Impacto ambiental de los lodos",
        navTitle: "Impacto ambiental",
        blocks: [
          { type: "p", text: "Una eliminación inadecuada de los lodos puede provocar diversos problemas ambientales:" },
          {
            type: "numbered",
            items: [
              {
                title: "Contaminación del agua",
                text: "Los lodos sin tratar pueden contener metales pesados, compuestos orgánicos y patógenos que degradan la calidad del agua y dañan la vida acuática.",
              },
              {
                title: "Contaminación del suelo",
                text: "La aplicación al suelo de lodos sin tratar puede contaminar el suelo y las aguas subterráneas y provocar daños ambientales a largo plazo.",
              },
              {
                title: "Contaminación del aire",
                text: "La incineración de lodos, si no se controla adecuadamente, puede liberar contaminantes atmosféricos nocivos.",
              },
            ],
          },
        ],
      },
      {
        id: "ecoklien",
        title: "El papel de ECOKlien en la gestión de lodos",
        navTitle: "El papel de ECOKlien",
        blocks: [
          {
            type: "p",
            text: "Aunque ECOKlien está diseñado principalmente para tratar residuos líquidos, contribuye indirectamente a la reducción de lodos al tratar de forma eficiente los residuos líquidos en el origen, en los centros sanitarios.",
          },
        ],
      },
    ],
    sources: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "wastewater",
    title: "Aguas residuales",
    // The English pronunciation guide does not apply to the Spanish term; clear it explicitly
    // (an omitted field would fall back to the English value).
    pronunciation: undefined,
    cardSummary: "Agua cuya calidad se ha visto afectada por el uso humano y que requiere tratamiento.",
    intro:
      "Comprenda qué son las aguas residuales, cómo se clasifican y por qué las de fuentes no residenciales requieren un cuidado especial.",
    category: "CALIDAD DEL AGUA",
    simpleTerms:
      "Agua usada que se ha visto afectada por el uso doméstico, industrial y comercial: la forma contaminada del agua que generan la escorrentía de la lluvia y las actividades humanas.",
    sections: [
      {
        id: "definitions",
        title: "Definiciones",
        blocks: [
          { type: "definition", label: "MERRIAM-WEBSTER", text: "Agua que ha sido utilizada." },
          {
            type: "definition",
            label: "WASTEWATER DIGEST",
            text: "Las aguas residuales son agua usada que se ha visto afectada por el uso doméstico, industrial y comercial.",
          },
          {
            type: "definition",
            label: "DICCIONARIO OXFORD",
            text: "Agua que se ha utilizado en el hogar, en un negocio o como parte de un proceso industrial.",
          },
        ],
      },
      {
        id: "types",
        title: "Tipos de aguas residuales",
        blocks: [
          {
            type: "p",
            text: "Las aguas residuales suelen clasificarse según la forma en que se generan; concretamente, como aguas residuales domésticas, aguas residuales industriales o aguas residuales de tormenta (aguas pluviales).",
          },
          {
            type: "numbered",
            items: [
              {
                title: "Aguas residuales domésticas",
                text: "Resultan del uso del agua en viviendas, comercios y restaurantes.",
              },
              {
                title: "Aguas residuales industriales",
                text: "Proceden de los vertidos de las industrias manufactureras y químicas.",
              },
              {
                title: "Aguas pluviales",
                text: "El agua de lluvia en zonas urbanas y agrícolas arrastra residuos, arenilla, nutrientes y diversas sustancias químicas, y contamina la escorrentía superficial.",
              },
            ],
          },
        ],
      },
      {
        id: "non-residential",
        title: "Aguas residuales no residenciales",
        navTitle: "Fuentes no residenciales",
        blocks: [
          {
            type: "p",
            text: "Las aguas residuales procedentes de fuentes no residenciales generalmente requieren etapas de tratamiento adicionales. Muchas industrias —las plantas lácteas, los centros sanitarios y las cervecerías son ejemplos perfectos— producen aguas residuales con un alto contenido de contaminantes químicos y biológicos, por lo que tienden a contar con su propio tratamiento o con un tratamiento preliminar para proteger el sistema principal de aguas residuales.",
          },
          {
            type: "p",
            text: "Las aguas residuales son, en su mayor parte, agua en peso, pero pueden contener otros materiales en cantidades suficientes para poner en peligro la salud pública y el medio ambiente. Los componentes que más preocupan son aquellos que pueden causar enfermedades o efectos perjudiciales para el medio ambiente.",
          },
        ],
      },
      {
        id: "ecoklien",
        title: "El papel de ECOKlien",
        blocks: [
          {
            type: "p",
            text: "ECOKlien desempeña un papel fundamental en la gestión de las aguas residuales, en particular en el tratamiento de los residuos líquidos biomédicos. Sus sistemas, como [BML](/products/biomedical-liquid-waste-treatment-system), están diseñados para desinfectar y tratar de forma eficiente los residuos líquidos peligrosos generados en los centros sanitarios, cumpliendo las normas reglamentarias y contribuyendo a la protección del medio ambiente y de la salud pública.",
          },
        ],
      },
    ],
    sources: [
      { label: "Merriam-Webster — Wastewater", href: "https://www.merriam-webster.com/dictionary/wastewater" },
      {
        label: "Wastewater Digest — ¿Qué son las aguas residuales?",
        href: "https://www.wwdmag.com/wastewater-treatment/article/10938418/what-is-wastewater",
      },
      { label: "Britannica — Tratamiento de aguas residuales", href: "https://www.britannica.com/technology/wastewater-treatment" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "waterborne-diseases",
    title: "Enfermedades transmitidas por el agua",
    cardSummary: "Enfermedades causadas por patógenos que se transmiten a través del agua contaminada.",
    intro:
      "Comprenda qué son las enfermedades transmitidas por el agua y cómo el tratamiento seguro de los residuos líquidos ayuda a prevenirlas.",
    category: "RIESGOS PARA LA SALUD",
    simpleTerms:
      "Enfermedades causadas por microorganismos patógenos —bacterias, virus y parásitos— que se transmiten a través del agua contaminada.",
    sections: [
      {
        id: "what-is",
        title: "¿Qué son las enfermedades transmitidas por el agua?",
        blocks: [
          {
            type: "p",
            text: "Las enfermedades transmitidas por el agua representan una amenaza importante para la salud pública, especialmente en zonas sin acceso a fuentes de agua limpia y saneada. Se deben a diversos patógenos presentes en el agua sin tratar y causan graves problemas de salud por ingestión o contacto.",
          },
          {
            type: "definition",
            label: "PRINCIPALES ENFERMEDADES TRANSMITIDAS POR EL AGUA",
            text: "Entre las enfermedades transmitidas por el agua más importantes figuran las enfermedades diarreicas, el cólera, la shigelosis, la fiebre tifoidea, la hepatitis A y E, y la poliomielitis.",
            note: "OMS, 2012, a través de PreventionWeb.",
          },
        ],
      },
      {
        id: "ecoklien",
        title: "ECOKlien contra las enfermedades transmitidas por el agua",
        navTitle: "El papel de ECOKlien",
        blocks: [
          {
            type: "p",
            text: "ECOKlien desempeña un papel importante en la lucha contra las enfermedades transmitidas por el agua. Sus sistemas de tratamiento de residuos líquidos biomédicos ofrecen soluciones integrales para centros sanitarios, laboratorios y centros de investigación, y garantizan la gestión y la eliminación seguras de los residuos líquidos peligrosos y la producción de agua tratada saneada y de alta calidad.",
          },
          {
            type: "cta",
            title: "Un agua más segura empieza en el origen.",
            text: "Explore los sistemas de tratamiento de residuos líquidos biomédicos de ECOKlien.",
            label: "Ver sistemas de tratamiento",
            href: BLW_SYSTEM,
          },
        ],
      },
    ],
    sources: [
      {
        label: "PreventionWeb — Enfermedades transmitidas por el agua",
        href: "https://www.preventionweb.net/understanding-disaster-risk/terminology/hips/bi0018",
      },
    ],
  },
];
