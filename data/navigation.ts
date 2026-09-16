import type { UiTranslation } from "@/components/LocaleProvider";

export type TranslationKey = keyof UiTranslation;
export type NavItem = { labelKey: TranslationKey; href: string };

export const navItems: NavItem[] = [
  { labelKey: "news", href: "/noticias" },
  { labelKey: "courses", href: "/cursos" },
  { labelKey: "store", href: "/tienda" },
];
