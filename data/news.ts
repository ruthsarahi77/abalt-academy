import type { NewsItem, ContentTranslation } from "./content-types";

const en = (
  title: string,
  description: string,
  category: string,
): ContentTranslation => ({ title, description, category });

// Sustituir estas URL (pdfUrl) por los enlaces públicos definitivos cuando estén disponibles.
export const news: NewsItem[] = [
  {
    id: "publication-niif-18-2026",
    slug: "niif-18-presentacion-desempeno-financiero",
    contentType: "publication",
    image: "/images/niif-18.png",
    imageAlt: "Publicación ABALT sobre NIIF 18",

    code: "Informe 02-26",
    title:
      "NIIF 18: La nueva forma de presentar los Estados Financieros",
    description:
      "Criterios técnicos y recomendaciones prácticas para anticipar los cambios en la presentación del reporte financiero.",
    category: "NIIF",
    topics: ["contabilidad", "niif", "auditoria"],
    language: "es",
    countries: ["EC"],
    date: "2026-09-01",
    pdfUrl: "https://mega.nz/",
    translations: {
      en: en(
        "IFRS 18: Preparing for a new way to present financial performance",
        "Technical criteria and practical recommendations to anticipate changes in financial reporting presentation.",
        "IFRS",
      ),
    },
  },
  {
    id: "publication-tax-update-2026",
    slug: "actualizacion-tributaria-2026",
    contentType: "newsletter",
image: "/images/actualizacion-tributaria.jpg",
    imageAlt: "Publicación ABALT sobre impuestos",

    code: "Boletín 01-26",
    title: "Actualización tributaria para el ejercicio fiscal 2026",
    description:
      "Una síntesis ejecutiva de los principales cambios normativos y sus implicaciones para las organizaciones en Ecuador.",
    category: "Tributación",
    topics: ["tributacion", "legal"],
    language: "es",
    countries: ["EC"],
    date: "2026-08-28",
    pdfUrl: "https://mega.nz/",
    translations: {
      en: en(
        "Tax update for fiscal year 2026",
        "An executive summary of the main regulatory changes and their implications for organizations in Ecuador.",
        "Tax",
      ),
    },
  },
  {
    id: "publication-risk-management-2026",
    slug: "gestion-riesgos-entorno-regulatorio",
    contentType: "publication",
image: "/images/gestion-riesgos.jpg",
    imageAlt: "Publicación ABALT sobre Gestión de riesgos",

    code: "Análisis 03-26",
    title: "Gestión de riesgos en un entorno regulatorio cambiante",
    description:
      "Claves para anticipar riesgos, robustecer controles internos y tomar decisiones con mayor confianza.",
    category: "Riesgos y Compliance",
    topics: ["riesgos", "legal"],
    language: "es",
    countries: ["EC"],
    date: "2026-08-12",
    pdfUrl: "https://mega.nz/",
    translations: {
      en: en(
        "Risk management in a changing regulatory environment",
        "Keys to anticipating risks, strengthening internal controls and making decisions with greater confidence.",
        "Risk & Compliance",
      ),
    },
  },
  {
    id: "publication-audit-trends-2026",
    slug: "tendencias-auditoria-2027",
    contentType: "publication",
    code: "Perspectiva 04-26",
    image: "/images/auditoria.jpg",
    imageAlt: "Publicación ABALT sobre auditoría",
    title: "Tendencias de auditoría para 2027",
    description:
      "Tecnología, calidad y nuevas expectativas que están redefiniendo el trabajo de auditoría.",
    category: "Auditoría",
    topics: ["auditoria", "tecnologia"],
    language: "es",
    countries: ["EC"],
    date: "2026-07-30",
    pdfUrl: "https://mega.nz/",
    translations: {
      en: en(
        "Audit trends for 2027",
        "Technology, quality and new expectations redefining the work of audit.",
        "Audit",
      ),
    },
  },
  {
    id: "publication-tax-closing-2025",
    slug: "cierre-tributario-2025",
    contentType: "newsletter",
    code: "Boletín 08-25",
image: "/images/aspectos-tributarios.png",
    imageAlt: "Aspectos relevantes para cierre tributario",

    title: "Consideraciones para el cierre tributario 2025",
    description:
      "Aspectos relevantes que las empresas deben revisar para preparar su cierre tributario anual.",
    category: "Tributación",
    topics: ["tributacion"],
    language: "es",
    countries: ["EC"],
    date: "2025-12-04",
    pdfUrl: "https://mega.nz/",
    translations: {
      en: en(
        "Considerations for the 2025 tax closing",
        "Key matters companies should review when preparing their annual tax closing.",
        "Tax",
      ),
    },
  },
  {
    id: "publication-governance-2025",
    slug: "buenas-practicas-gobierno-corporativo",
    contentType: "publication",
    image: "/images/international.webp",
    imageAlt: "Publicación ABALT sobre gobierno corporativo",
    code: "Informe 05-25",
    title: "Buenas prácticas de gobierno corporativo",
    description:
      "Lineamientos para promover una gestión responsable, transparente y orientada a la creación de valor sostenible.",
    category: "Sostenibilidad",
    topics: ["sostenibilidad", "empresas-familiares"],
    language: "es",
    countries: ["EC"],
    date: "2025-10-15",
    pdfUrl: "https://mega.nz/",
    translations: {
      en: en(
        "Corporate governance best practices",
        "Guidelines for responsible, transparent management focused on creating sustainable value.",
        "Sustainability",
      ),
    },
  },
];
