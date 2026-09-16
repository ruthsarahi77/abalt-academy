"use client";

import * as CookieConsent from "vanilla-cookieconsent";
import { consentConfig } from "@/data/cookie-consent";
import { COUNTRY_STORAGE_KEY, LANGUAGE_STORAGE_KEY } from "@/i18n/config";

let initialization: Promise<void> | undefined;

function clearUnconsentedPreferences() {
  if (!CookieConsent.acceptedCategory("preferences")) {
    try {
      localStorage.removeItem(COUNTRY_STORAGE_KEY);
      localStorage.removeItem(LANGUAGE_STORAGE_KEY);
    } catch {
      // Browsing must still work when browser storage is unavailable.
    }
  }
}

export function initializeCookieConsent() {
  initialization ??= CookieConsent.run({
    ...consentConfig,
    onConsent: clearUnconsentedPreferences,
    onChange: clearUnconsentedPreferences,
  }).then(clearUnconsentedPreferences);
  return initialization;
}

export function canStorePreferences() {
  return CookieConsent.acceptedCategory("preferences");
}

export async function showCookiePreferences() {
  await initializeCookieConsent();
  CookieConsent.showPreferences();
}
