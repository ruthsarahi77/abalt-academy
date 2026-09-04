export const languages = [
  { code: "es", name: "Español" },
  { code: "en", name: "English" },
  { code: "pt", name: "Português" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "ar", name: "العربية" },
  { code: "zh", name: "中文" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

export const countries = [
  { code: "AR", name: "Argentina", defaultLanguage: "es" },
  { code: "AU", name: "Australia", defaultLanguage: "en" },
  { code: "BR", name: "Brasil", defaultLanguage: "pt" },
  { code: "CA", name: "Canadá", defaultLanguage: "en" },
  { code: "CL", name: "Chile", defaultLanguage: "es" },
  { code: "CN", name: "China", defaultLanguage: "zh" },
  { code: "CO", name: "Colombia", defaultLanguage: "es" },
  { code: "KR", name: "Corea del Sur", defaultLanguage: "ko" },
  { code: "CI", name: "Costa de Marfil", defaultLanguage: "fr" },
  { code: "EC", name: "Ecuador", defaultLanguage: "es" },
  { code: "EG", name: "Egipto", defaultLanguage: "ar" },
  { code: "SV", name: "El Salvador", defaultLanguage: "es" },
  { code: "ES", name: "España", defaultLanguage: "es" },
  { code: "US", name: "Estados Unidos", defaultLanguage: "en" },
  { code: "JP", name: "Japón", defaultLanguage: "ja" },
  { code: "MX", name: "México", defaultLanguage: "es" },
  { code: "PA", name: "Panamá", defaultLanguage: "es" },
  { code: "PE", name: "Perú", defaultLanguage: "es" },
  { code: "GB", name: "Reino Unido", defaultLanguage: "en" },
  { code: "SG", name: "Singapur", defaultLanguage: "en" },
  { code: "CH", name: "Suiza", defaultLanguage: "de" },
  { code: "UY", name: "Uruguay", defaultLanguage: "es" },
] as const satisfies ReadonlyArray<{ code: string; name: string; defaultLanguage: LanguageCode }>;

export type CountryCode = (typeof countries)[number]["code"];

export const DEFAULT_COUNTRY: CountryCode = "EC";
export const DEFAULT_LANGUAGE: LanguageCode = "es";
export const COUNTRY_STORAGE_KEY = "abalt-country";
export const LANGUAGE_STORAGE_KEY = "abalt-language";

export function isCountryCode(value: string | null): value is CountryCode {
  return countries.some((country) => country.code === value);
}

export function isLanguageCode(value: string | null): value is LanguageCode {
  return languages.some((language) => language.code === value);
}
