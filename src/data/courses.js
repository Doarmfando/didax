import { images } from "./site.js";

const sharedFaqs = [
  {
    question: "¿Es seguro el pago? ¿Dan boleta o factura?",
    answer:
      "Somos una empresa formalmente constituida con RUC 20615366022, inscrita en Registros Públicos. Emitimos boleta o factura (con IGV ya incluido) según lo necesites para tu empresa o uso personal. Los pagos son vía pasarelas seguras (Niubiz) o transferencia directa a nuestra cuenta corriente: 310-7360564-0-42.",
  },
  {
    question: "¿El certificado tiene valor oficial?",
    answer:
      "Entregamos un certificado a nombre de DIDAX con un código QR de verificación único. Esto garantiza a cualquier reclutador que realmente dominas las herramientas.",
  },
  {
    question: "¿Qué necesito para certificarme?",
    answer:
      "Nos tomamos muy en serio tu enseñanza. Para acceder a la Certificación DIDAX se desarrollan 4 entregables oficiales, cada uno con un peso de 25%, y la nota mínima de aprobación es 14 (en escala de 0 a 20). Las asistencias también son importantes: solo se permite un máximo de 35% de inasistencias (si necesitas justificar alguna, se coordina directamente con el docente).",
  },
  {
    question: "¿Me sirve para mi trabajo actual o es solo teoría?",
    answer:
      "Es 100% práctico. Trabajamos con bases de datos reales. El objetivo es que lo que aprendas un martes, lo apliques en tu oficina el miércoles.",
  },
  {
    question: "¿Qué pasa si no sé nada de Excel o Power BI?",
    answer:
      "Sí puedes llevar la especialización. Nuestra metodología está diseñada para nivelar a todos en las primeras sesiones y escalar rápidamente hacia la automatización pro. No necesitas ser un experto previo, solo tener hambre de aprender.",
  },
  {
    question: "¿Las clases son grabadas o en vivo?",
    answer:
      "Son en vivo. Valoramos la interacción en tiempo real para resolver tus dudas en el acto, pero todas las sesiones se graban y se suben a tu aula virtual para que las repases de por vida.",
  },
  {
    question: "¿Qué es el asesoramiento gratis?",
    answer:
      "Es una mentoría casi personal para nuestros alumnos. Cuando no estamos en clases y tienes un problema, puedes coordinar con tu docente para que te ayude con cualquier duda de lo visto en clase. Solo debes coordinarlo previamente, preferiblemente por WhatsApp.",
  },
];

const teachers = [
  {
    name: "Julio Montenegro",
    role: "CEO & Fundador de DIDAX",
    photo: images.julioPhoto,
    bio: "Consultor experto en costos, presupuestos, proyección financiera, procesos e indicadores de gestión. Más de 15 años de experiencia en el sector privado y más de 5 años como docente.",
  },
  {
    name: "Arturo Avila",
    role: "Consultor & Docente",
    photo: images.arturoPhoto,
    bio: "Experto en gestión de datos, ERP, Power BI, Python, SAP, SQL, C#, Java, control de costos y estadística. Más de 20 años en el sector privado.",
  },
];

const benefits = [
  "Clases 100% en vivo online",
  "Casos prácticos reales",
  "Soporte y asesoramiento gratis",
  "Plataforma virtual",
  "Grabación de clases",
  "Certificado",
];

export const courses = {
  excel: {
    slug: "excel",
    eyebrow: "Excel",
    title: "Curso de Excel Nivel Élite",
    summary:
      "Domina Excel desde cero hasta el nivel avanzado con una especialización práctica de 48 horas y una ruta intensiva de 24 horas.",
    description:
      "Aprende a automatizar procesos, gestionar grandes volúmenes de datos y crear reportes profesionales de alto impacto para potenciar tu perfil laboral.",
    videoUrl:
      "https://www.youtube.com/watch?v=ErFAYPCLJ4I&time_continue=0&source_ve_path=MjM4NTE",
    cover: images.excelCoverPlaceholder,
    whatsappMessage: "Hola, quiero inscribirme al Curso de Excel Nivel Élite",
    modules: [
      {
        title: "Sem 01 - Módulo Básico",
        detail:
          "Fundamentos, entorno de trabajo, formatos, fórmulas iniciales y buenas prácticas para trabajar con orden.",
      },
      {
        title: "Sem 02 - Módulo Intermedio",
        detail:
          "Funciones lógicas, búsqueda, validación de datos, organización de información y manejo eficiente de archivos.",
      },
      {
        title: "Sem 03 - Tablas Dinámicas",
        detail:
          "Análisis resumido, segmentadores, agrupaciones, métricas y reportes rápidos para toma de decisiones.",
      },
      {
        title: "Sem 04 - Dashboard y Herramientas",
        detail:
          "Diseño de tableros, gráficos, indicadores, controles visuales y presentación ejecutiva de resultados.",
      },
      {
        title: "Sem 05 - Macros / VBA 1",
        detail:
          "Automatización inicial, grabadora de macros, estructura de procedimientos y tareas repetitivas.",
      },
      {
        title: "Sem 06 - Macros / VBA 2",
        detail:
          "Formularios, condicionales, ciclos, depuración y automatizaciones aplicadas a casos de negocio.",
      },
      {
        title: "Sem 07 - Power Query",
        detail:
          "Limpieza, transformación y conexión de datos para construir procesos repetibles y auditables.",
      },
      {
        title: "Sem 08 - Power Pivot",
        detail:
          "Modelo de datos, relaciones, medidas y análisis avanzado para reportes robustos.",
      },
    ],
    teachers,
    benefits,
    pricing: [
      {
        name: "Programa Maestro - 2 meses",
        listPrice: "Precio de lista: S/616",
        promoPrice: "Precio promoción: S/220 x mes",
        usd: "USD 65 aprox.",
        includes: "Incluye semanas 1 a 8.",
      },
      {
        name: "Taller Intensivo - 1 mes",
        listPrice: "Precio de lista: S/336",
        promoPrice: "Precio promoción: S/240",
        usd: "USD 72 aprox.",
        includes: "Incluye semanas 1 a 4.",
      },
    ],
    schedule: {
      start: "Consulte nuestro canal de WhatSapp",
      days: "Consulte nuestro canal de WhatSapp",
      hours: "Consulte nuestro canal de WhatSapp",
    },
    faqs: sharedFaqs,
  },
  powerbi: {
    slug: "powerbi",
    eyebrow: "Power BI",
    title: "Curso de Power BI Nivel Élite",
    summary:
      "Evoluciona tu análisis de datos con una especialización preparada para dashboards gerenciales y decisiones estratégicas.",
    description:
      "Aprende a conectar múltiples fuentes, automatizar tableros interactivos y transformar números complejos en decisiones claras para tu empresa.",
    videoUrl: "https://www.youtube.com/watch?v=45wLevkbIB4",
    cover: images.powerbiCoverPlaceholder,
    whatsappMessage: "Hola, quiero más información del Curso de Power BI Nivel Élite",
    modules: [
      {
        title: "Módulo 01 - Fundamentos de Power BI",
        detail:
          "Interfaz, flujo de trabajo, conexión de datos y criterios para construir reportes ordenados.",
      },
      {
        title: "Módulo 02 - Power Query",
        detail:
          "Extracción, limpieza, transformación y automatización de datos desde diferentes fuentes.",
      },
      {
        title: "Módulo 03 - Modelo de datos",
        detail:
          "Relaciones, tablas calendario, estructura del modelo y preparación para análisis confiable.",
      },
      {
        title: "Módulo 04 - DAX aplicado",
        detail:
          "Medidas, columnas calculadas, indicadores, contexto de filtro y métricas de gestión.",
      },
      {
        title: "Módulo 05 - Visualización ejecutiva",
        detail:
          "Diseño de dashboards, storytelling, segmentadores e indicadores para gerencia.",
      },
      {
        title: "Módulo 06 - Publicación y automatización",
        detail:
          "Publicación, actualización, permisos y buenas prácticas para entornos empresariales.",
      },
    ],
    teachers,
    benefits,
    pricing: [
      {
        name: "Programa Power BI Nivel Élite",
        listPrice: "Precio de lista: por confirmar",
        promoPrice: "Precio promoción: por confirmar",
        usd: "USD aprox.: por confirmar",
        includes: "Incluye módulos completos del programa.",
      },
      {
        name: "Taller Intensivo Power BI",
        listPrice: "Precio de lista: por confirmar",
        promoPrice: "Precio promoción: por confirmar",
        usd: "USD aprox.: por confirmar",
        includes: "Incluye módulos iniciales e intermedios.",
      },
    ],
    schedule: {
      start: "Consulte nuestro canal de WhatSapp",
      days: "Consulte nuestro canal de WhatSapp ",
      hours: "Consulte nuestro canal de WhatSapp",
    },
    faqs: sharedFaqs,
  },
};
