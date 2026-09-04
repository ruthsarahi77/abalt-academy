import type { AcademyContent } from "./content-types";
import { publications } from "./publications";

export const podcastEpisodes: AcademyContent[] = [
  {
    id: "podcast-empresas-que-trascienden",
    slug: "empresas-que-trascienden-familia-sostenibilidad-legado",
    title: "Empresas que trascienden: familia, sostenibilidad y legado",

    description:
      "Conversaciones con especialistas, empresarios y líderes sobre los desafíos que están transformando las organizaciones.",
    category: "ABALT Podcast",
    contentType: "podcast",
    topics: ["empresas-familiares", "sostenibilidad", "talento"],
    language: "es",
    countries: ["EC"],
    publishedAt: "2026-09-02",
    featured: true,
    
    url: "#podcast",
    translations: {
      en: {
        title: "Companies that transcend: family, sustainability and legacy",
        description:
          "Conversations with specialists, entrepreneurs and leaders about the challenges transforming organizations.",
        category: "ABALT Podcast",
      },
    },
  },
];

export const academyContent: AcademyContent[] = [
  ...publications,
  ...podcastEpisodes,
];
