import type { TranslationKey } from "./navigation";
import type { ContentType, TopicSlug } from "./content-types";

export type KnowledgeCategory = {
  id: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  href: string;
  image: string;
  contentTypes: ContentType[];
  visual: "report" | "audio" | "learning" | "video" | "article" | "guide";
};

export const knowledgeCategories: KnowledgeCategory[] = [
  { id: "publications", titleKey: "publicationsNav", descriptionKey: "categoryPublications", href: "#ultimas-publicaciones", image: "/images/knowledge/publicaciones.jpg", contentTypes: ["publication", "newsletter"], visual: "report" },
  { id: "podcast", titleKey: "podcast", descriptionKey: "categoryPodcast", href: "#podcast", image: "/images/knowledge/podcast.jpg", contentTypes: ["podcast"], visual: "audio" },
  { id: "courses", titleKey: "courses", descriptionKey: "categoryCourses", href: "/cursos", image: "/images/knowledge/cursos.jpg", contentTypes: ["course", "program"], visual: "learning" },
  { id: "videos", titleKey: "videosWebinars", descriptionKey: "categoryVideos", href: "/videos", image: "/images/knowledge/webinars.jpg", contentTypes: ["video", "webinar"], visual: "video" },
  { id: "articles", titleKey: "articles", descriptionKey: "categoryArticles", href: "/articulos", image: "/images/knowledge/auditoria-informes.jpg", contentTypes: ["article"], visual: "article" },
  { id: "guides", titleKey: "guides", descriptionKey: "categoryGuides", href: "/guias", image: "/images/knowledge/guia-estudiopng.png", contentTypes: ["guide"], visual: "guide" },
];

export type TopicConfig = { slug: TopicSlug; labelKey: TranslationKey; href: string };

export const topics: TopicConfig[] = [
  { slug: "auditoria", labelKey: "topicAudit", href: "/temas/auditoria" },
  { slug: "contabilidad", labelKey: "topicAccounting", href: "/temas/contabilidad-niif" },
  { slug: "tributacion", labelKey: "topicTax", href: "/temas/tributacion" },
  { slug: "finanzas", labelKey: "topicFinance", href: "/temas/finanzas" },
  { slug: "legal", labelKey: "topicLegal", href: "/temas/legal" },
  { slug: "riesgos", labelKey: "topicRisk", href: "/temas/riesgos-compliance" },
  { slug: "sostenibilidad", labelKey: "topicSustainability", href: "/temas/sostenibilidad" },
  { slug: "tecnologia", labelKey: "topicTechnology", href: "/temas/tecnologia-innovacion" },
  { slug: "empresas-familiares", labelKey: "topicFamily", href: "/temas/empresas-familiares" },
  { slug: "talento", labelKey: "topicTalent", href: "/temas/talento-liderazgo" },
];

export const publicationFilters: Array<{ id: "all" | TopicSlug; labelKey: TranslationKey }> = [
  { id: "all", labelKey: "all" },
  { id: "auditoria", labelKey: "filterAudit" },
  { id: "niif", labelKey: "filterIfrs" },
  { id: "tributacion", labelKey: "filterTax" },
  { id: "legal", labelKey: "filterLegal" },
  { id: "sostenibilidad", labelKey: "filterSustainability" },
  { id: "tecnologia", labelKey: "filterTechnology" },
];
