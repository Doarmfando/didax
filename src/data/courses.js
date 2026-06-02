import { images } from "./site.js";

const sharedFaqs = [
  {
    question: "¿Es seguro el pago? ¿Dan boleta o factura?",
    answer:
      "Sí. El equipo confirma tu inscripción por WhatsApp y puede emitir el comprobante correspondiente según tus datos.",
  },
  {
    question: "¿El certificado tiene valor oficial?",
    answer:
      "Recibirás un certificado emitido por DIDAX. Si necesitas requisitos específicos para tu empresa, consúltalo antes de inscribirte.",
  },
  {
    question: "¿Qué necesito para certificarme?",
    answer:
      "Completar las sesiones, desarrollar las actividades prácticas y cumplir los criterios comunicados al iniciar el programa.",
  },
  {
    question: "¿Me sirve para mi trabajo actual o es solo teoría?",
    answer:
      "El enfoque es práctico, con casos aplicados a reportes, control, análisis y decisiones reales de trabajo.",
  },
  {
    question: "¿Qué pasa si no sé nada de Excel o Power BI?",
    answer:
      "Puedes iniciar desde base cero. El programa avanza por módulos para construir una ruta clara de aprendizaje.",
  },
  {
    question: "¿Las clases son grabadas o en vivo?",
    answer:
      "Las clases son en vivo online y se contempla acceso a grabaciones para reforzar lo aprendido.",
  },
  {
    question: "¿Qué es el asesoramiento gratis?",
    answer:
      "Es el acompañamiento para resolver dudas del curso y orientar la aplicación práctica en tus casos de trabajo.",
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
    eyebrow: "Excel a Nivel Elite",
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
      start: "15/06/2026",
      days: "Lunes, miércoles y viernes",
      hours: "Desde las 20:00 hasta las 22:00 horas",
    },
    faqs: sharedFaqs,
  },
  powerbi: {
    slug: "powerbi",
    eyebrow: "Power BI a Nivel Elite",
    title: "Curso de Power BI Nivel Élite",
    summary:
      "Evoluciona tu análisis de datos con una especialización preparada para dashboards gerenciales y decisiones estratégicas.",
    description:
      "Aprende a conectar múltiples fuentes, automatizar tableros interactivos y transformar números complejos en decisiones claras para tu empresa.",
    videoUrl: "https://www.youtube.com/watch?v=VIDEO_POWER_BI_PENDIENTE",
    cover: images.powerbiCoverPlaceholder,
    whatsappMessage: "Hola, quiero más información del Curso de Power BI Nivel Élite",
    editableNotice: "Contenido editable pendiente de validación final del cliente.",
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
      start: "Fecha por confirmar",
      days: "Días por confirmar",
      hours: "Horario por confirmar",
    },
    faqs: sharedFaqs,
  },
};
