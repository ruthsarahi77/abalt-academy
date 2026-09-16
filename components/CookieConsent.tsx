"use client";

import { useEffect } from "react";
import { initializeCookieConsent, showCookiePreferences } from "@/lib/cookie-consent";
import { cookieSettingsLabel } from "@/data/cookie-consent";

export function CookieConsent() {
  useEffect(() => {
    void initializeCookieConsent();
  }, []);
  return null;
}

export function CookieSettingsButton() {
  return (
    <button type="button" onClick={() => void showCookiePreferences()} className="inline-flex min-h-8 cursor-pointer items-center font-bold underline decoration-line underline-offset-4 hover:text-abalt">
      {cookieSettingsLabel}
    </button>
  );
}
