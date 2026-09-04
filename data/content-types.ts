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
  featured?: boolean;
  translations?: Partial<Record<LanguageCode, ContentTranslation>>;
}

export function localizeContent<T extends AcademyContent>(content: T, language: LanguageCode) {
  return { ...content, ...(content.translations?.[language] ?? {}) };
}

export function getContentUrl(content: AcademyContent) {
  return content.url ?? content.pdfUrl ?? `/contenido/${content.slug}`;
}
