"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  countries,
  COUNTRY_STORAGE_KEY,
  DEFAULT_COUNTRY,
  DEFAULT_LANGUAGE,
  isCountryCode,
  isLanguageCode,
  LANGUAGE_STORAGE_KEY,
  type CountryCode,
  type LanguageCode,
} from "@/i18n/config";
import { translations, type Translation } from "@/i18n/translations";
import {
  homeTranslations,
  type HomeTranslation,
} from "@/i18n/home-translations";

export type UiTranslation = Translation & HomeTranslation;
type LocaleContextValue = {
  country: CountryCode;
  language: LanguageCode;
  setCountry: (country: CountryCode) => void;
  setLanguage: (language: LanguageCode) => void;
  t: UiTranslation;
};
const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [country, setCountryState] = useState<CountryCode>(DEFAULT_COUNTRY);
  const [language, setLanguageState] = useState<LanguageCode>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const savedCountry = localStorage.getItem(COUNTRY_STORAGE_KEY);
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    queueMicrotask(() => {
      if (isCountryCode(savedCountry)) setCountryState(savedCountry);
      if (isLanguageCode(savedLanguage)) setLanguageState(savedLanguage);
    });
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  function setCountry(nextCountry: CountryCode) {
    const nextLanguage = countries.find(
      (item) => item.code === nextCountry,
    )!.defaultLanguage;
    setCountryState(nextCountry);
    setLanguageState(nextLanguage);
    localStorage.setItem(COUNTRY_STORAGE_KEY, nextCountry);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  }

  function setLanguage(nextLanguage: LanguageCode) {
    setLanguageState(nextLanguage);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  }

  const t = { ...translations[language], ...homeTranslations[language] };
  return (
    <LocaleContext.Provider
      value={{ country, language, setCountry, setLanguage, t }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used inside LocaleProvider");
  return context;
}
