import type { LanguageCode } from "@/i18n/config";

const localeByLanguage: Record<LanguageCode, string> = { es: "es-EC", en: "en-US", pt: "pt-BR", fr: "fr-FR", de: "de-DE", ar: "ar", zh: "zh-CN", ja: "ja-JP", ko: "ko-KR" };
export function formatContentDate(date: string, language: LanguageCode, style: "long" | "month" = "long") {
  return new Intl.DateTimeFormat(localeByLanguage[language], style === "month" ? { month: "long", year: "numeric" } : { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${date}T12:00:00`));
}
export function normalizeSearch(value: string) { return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim() }
