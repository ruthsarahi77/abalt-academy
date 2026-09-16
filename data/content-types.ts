import type { LanguageCode } from "@/i18n/config";

export type ContentType =
  | "publication"
  | "newsletter"
  | "article"
  | "guide"
  | "podcast"
  | "video"
  | "course"
  | "webinar"
  | "program"
  | "news"
  | "event";

export type TopicSlug =
  | "auditoria"
  | "contabilidad"
  | "niif"
  | "tributacion"
  | "finanzas"
  | "legal"
  | "riesgos"
  | "sostenibilidad"
  | "tecnologia"
  | "empresas-familiares"
  | "talento";

export type ContentTranslation = {
  title: string;
  description: string;
  category?: string;
};

export interface AcademyContent extends ContentTranslation {
  id: string;
  slug: string;
  contentType: ContentType;
  topics: TopicSlug[];
  author?: string;
  countries?: string[];
  language: LanguageCode;
  publishedAt: string;
  image?: string;
  imageAlt?: string;
  url?: string;
  pdfUrl?: string;
  translations?: Partial<Record<LanguageCode, ContentTranslation>>;
}

/** Optional editorial metadata shared with the existing content model. */
type EditorialFields = Partial<Omit<AcademyContent, "id" | "title" | "publishedAt" | "url" | "pdfUrl" | "contentType">>;

export type NewsItem = EditorialFields & {
  id: string;
  title: string;
  /** Publication date, YYYY-MM-DD. The only authored date field. */
  date: string;
  pdfUrl: string;
  contentType?: "news" | "publication" | "newsletter";
  code?: string;
};

export type CourseStatus = "draft" | "upcoming" | "open" | "closed" | "completed";
export type Course = EditorialFields & {
  id: string;
  title: string;
  /** Catalog publication date, YYYY-MM-DD; not the course start date. */
  date: string;
  url: string;
  status: CourseStatus;
  startsAt?: string;
};

export type Product = EditorialFields & {
  id: string;
  title: string;
  url: string;
  type: string;
  /** Catalog publication date, YYYY-MM-DD, required for chronological selection. */
  date: string;
};

export function localizeContent<T extends { translations?: AcademyContent["translations"] }>(content: T, language: LanguageCode) {
  return { ...content, ...(content.translations?.[language] ?? {}) };
}

export function getContentUrl(content: AcademyContent) {
  return content.url ?? content.pdfUrl ?? `/contenido/${content.slug}`;
}
