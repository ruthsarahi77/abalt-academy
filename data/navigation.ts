import type { UiTranslation } from "@/components/LocaleProvider";

export type TranslationKey = keyof UiTranslation;

export type NavItem = {
  labelKey: TranslationKey;
  href?: string;
  children?: Array<{ labelKey: TranslationKey; href: string }>;
};

export const navItems: NavItem[] = [
  {
    labelKey: "knowledge",
    children: [
      { labelKey: "publicationsNav", href: "#ultimas-publicaciones" },
      { labelKey: "articles", href: "/articulos" },
      { labelKey: "guides", href: "/guias" },
      { labelKey: "podcast", href: "#podcast" },
      { labelKey: "videos", href: "/videos" },
    ],
  },
  {
    labelKey: "academy",
    children: [
      { labelKey: "courses", href: "/cursos" },
      { labelKey: "webinars", href: "/webinars" },
      { labelKey: "programs", href: "/programas" },
      { labelKey: "calendar", href: "/calendario" },
    ],
  },
  { labelKey: "news", href: "/actualidad" },
  { labelKey: "events", href: "/eventos" },
  { labelKey: "about", href: "/nosotros" },
];
