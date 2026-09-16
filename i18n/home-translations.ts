import type { LanguageCode } from "./config";

export type HomeTranslation = {
  knowledge: string;
  academy: string;
  articles: string;
  guides: string;
  podcast: string;
  videos: string;
  courses: string;
  webinars: string;
  programs: string;
  calendar: string;
  news: string;
  store: string;
  mainNavigation: string;
  events: string;
  about: string;
  openMenu: string;
  closeMenu: string;
  searchTitle: string;
  searchPlaceholder: string;
  searchLabel: string;
  searchEmpty: string;
  searchResults: string;
  readNews: string;
  viewNews: string;
  latestCourses: string;
  latestProducts: string;
  viewAllCourses: string;
  viewAllProducts: string;
  viewContent: string;
  contentComingSoon: string;
  courseStatusdraft: string;
  courseStatusupcoming: string;
  courseStatusopen: string;
  courseStatusclosed: string;
  courseStatuscompleted: string;
  explore: string;
  latestNews: string;
  all: string;
  read: string;
  viewAllNews: string;
  internationalEyebrow: string;
  internationalTitle: string;
  internationalText: string;
  internationalCta: string;
  footerKnowledge: string;
  footerAcademy: string;
  footerCompany: string;
  footerContact: string;
  networkDisclaimer: string;
  privacy: string;
  accessibility: string;
  imageFallback: string;
  newsPageTitle: string;
  newsHeroImageAlt: string;
  exploreByYear: string;
  allYears: string;
};

const en: HomeTranslation = {
  latestCourses: "Latest courses",
  latestProducts: "Latest store products",
  viewAllCourses: "View all courses",
  viewAllProducts: "View store",
  viewContent: "View details",
  contentComingSoon: "New content coming soon.",
  courseStatusdraft: "Draft",
  courseStatusupcoming: "Coming soon",
  courseStatusopen: "Registration open",
  courseStatusclosed: "Registration closed",
  courseStatuscompleted: "Completed",
  knowledge: "Knowledge",
  academy: "Academy",
  articles: "Articles",
  guides: "Guides & studies",
  podcast: "Podcast",
  videos: "Videos",
  courses: "Courses",
  webinars: "Webinars",
  programs: "Programs",
  calendar: "Coming soon / Calendar",
  events: "Events",
  about: "About us",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  searchTitle: "What are you looking for?",
  searchPlaceholder: "Search news, courses, podcasts...",
  searchLabel: "Search ABALT Academy",
  searchEmpty: "No content matches your search.",
  searchResults: "Search results",
  explore: "Explore",
  all: "All",
  read: "Read",
  internationalEyebrow: "ABALT INTERNATIONAL",
  internationalTitle: "Local knowledge. Global perspective.",
  internationalText:
    "ABALT Academy brings together knowledge and perspectives developed by professionals across our international network.",
  internationalCta: "Discover ABALT International",
  footerKnowledge: "Knowledge",
  footerAcademy: "Academy",
  footerCompany: "ABALT",
  footerContact: "Contact",
  networkDisclaimer:
    "ABALT Auditors & Consultants is a network of independent professional services firms. Each member firm is a separate and independent legal entity, solely responsible for its own acts and omissions, with no partnership, agency, branch or representation relationship existing among its members.",
  privacy: "Privacy",
  accessibility: "Accessibility",
  imageFallback: "Editorial image",
  newsHeroImageAlt:
    "Professional reviewing business publications and analysis",
  exploreByYear: "Explore by year",
  allYears: "All",
  news: "News",
  store: "Store",
  mainNavigation: "Main navigation",
  newsPageTitle: "News",
  latestNews: "Latest news",
  viewAllNews: "View all news",
  readNews: "Read news",
  viewNews: "View news",
};
const es: HomeTranslation = {
  latestCourses: "Últimos cursos",
  latestProducts: "Últimos productos de Tienda",
  viewAllCourses: "Ver todos los cursos",
  viewAllProducts: "Ver tienda",
  viewContent: "Ver detalle",
  contentComingSoon: "Próximamente encontrarás nuevos contenidos.",
  courseStatusdraft: "Borrador",
  courseStatusupcoming: "Próximamente",
  courseStatusopen: "Inscripciones abiertas",
  courseStatusclosed: "Inscripciones cerradas",
  courseStatuscompleted: "Finalizado",
  knowledge: "Conocimiento",
  academy: "Academy",
  articles: "Artículos",
  guides: "Guías y estudios",
  podcast: "Podcast",
  videos: "Videos",
  courses: "Cursos",
  webinars: "Webinars",
  programs: "Programas",
  calendar: "Próximamente / Calendario",
  events: "Eventos",
  about: "Nosotros",
  openMenu: "Abrir menú",
  closeMenu: "Cerrar menú",
  searchTitle: "¿Qué estás buscando?",
  searchPlaceholder: "Buscar noticias, cursos, podcasts...",
  searchLabel: "Buscar en ABALT Academy",
  searchEmpty: "No encontramos contenidos para tu búsqueda.",
  searchResults: "Resultados de búsqueda",
  explore: "Explorar",
  all: "Todos",
  read: "Leer",
  internationalEyebrow: "ABALT INTERNATIONAL",
  internationalTitle: "Conocimiento local. Perspectiva global.",
  internationalText:
    "ABALT Academy reúne conocimiento y perspectivas desarrolladas por profesionales de nuestra red internacional.",
  internationalCta: "Conoce ABALT International",
  footerKnowledge: "Conocimiento",
  footerAcademy: "Academy",
  footerCompany: "ABALT",
  footerContact: "Contacto",
  networkDisclaimer:
    "ABALT Auditores & Consultores es una red de firmas independientes de servicios profesionales. Cada firma miembro es una entidad legal separada e independiente, responsable exclusivamente de sus propios actos y omisiones, sin que exista relación de sociedad, agencia, sucursal o representación entre sus integrantes.",
  privacy: "Privacidad",
  accessibility: "Accesibilidad",
  imageFallback: "Imagen editorial",
  newsHeroImageAlt:
    "Profesional revisando publicaciones y análisis empresariales",
  exploreByYear: "Explorar por año",
  allYears: "Todas",
  news: "Noticias",
  store: "Tienda",
  mainNavigation: "Navegación principal",
  newsPageTitle: "Noticias",
  latestNews: "Últimas noticias",
  viewAllNews: "Ver todas las noticias",
  readNews: "Leer noticia",
  viewNews: "Ver noticia",
};

const localized = (overrides: Partial<HomeTranslation>): HomeTranslation => ({
  ...en,
  ...overrides,
});
export const homeTranslations: Record<LanguageCode, HomeTranslation> = {
  es,
  en,
  pt: localized({
    knowledge: "Conhecimento",
    articles: "Artigos",
    guides: "Guias e estudos",
    courses: "Cursos",
    events: "Eventos",
    about: "Sobre nós",
    searchTitle: "O que você está procurando?",
    read: "Ler",
    explore: "Explorar",
  news: "Notícias",
  store: "Loja",
  mainNavigation: "Navegação principal",
  newsPageTitle: "Notícias",
  latestNews: "Últimas notícias",
  viewAllNews: "Ver todas as notícias",
  readNews: "Ler notícia",
  viewNews: "Ver notícia",
  }),
  fr: localized({
    knowledge: "Connaissances",
    articles: "Articles",
    guides: "Guides et études",
    courses: "Cours",
    events: "Événements",
    about: "À propos",
    searchTitle: "Que recherchez-vous ?",
    read: "Lire",
    explore: "Explorer",
  news: "Actualités",
  store: "Boutique",
  mainNavigation: "Navigation principale",
  newsPageTitle: "Actualités",
  latestNews: "Dernières actualités",
  viewAllNews: "Voir toutes les actualités",
  readNews: "Lire l’actualité",
  viewNews: "Voir l’actualité",
  }),
  de: localized({
    knowledge: "Wissen",
    articles: "Artikel",
    guides: "Leitfäden und Studien",
    courses: "Kurse",
    events: "Veranstaltungen",
    about: "Wir über uns",
    searchTitle: "Wonach suchen Sie?",
    read: "Lesen",
    explore: "Entdecken",
  news: "Nachrichten",
  store: "Shop",
  mainNavigation: "Hauptnavigation",
  newsPageTitle: "Nachrichten",
  latestNews: "Neueste Nachrichten",
  viewAllNews: "Alle Nachrichten ansehen",
  readNews: "Nachricht lesen",
  viewNews: "Nachricht ansehen",
  }),
  ar: localized({
    knowledge: "المعرفة",
    articles: "مقالات",
    guides: "أدلة ودراسات",
    courses: "دورات",
    events: "فعاليات",
    about: "من نحن",
    searchTitle: "عمّ تبحث؟",
  news: "أخبار",
  store: "المتجر",
  mainNavigation: "التنقل الرئيسي",
  newsPageTitle: "أخبار",
  latestNews: "أحدث الأخبار",
  viewAllNews: "عرض جميع الأخبار",
  readNews: "قراءة الخبر",
  viewNews: "عرض الخبر",
  }),
  zh: localized({
    knowledge: "知识",
    articles: "文章",
    guides: "指南与研究",
    courses: "课程",
    events: "活动",
    about: "关于我们",
    searchTitle: "您在寻找什么？",
  news: "资讯",
  store: "商店",
  mainNavigation: "主导航",
  newsPageTitle: "资讯",
  latestNews: "最新资讯",
  viewAllNews: "查看所有资讯",
  readNews: "阅读资讯",
  viewNews: "查看资讯",
  }),
  ja: localized({
    knowledge: "知識",
    articles: "記事",
    guides: "ガイドと調査",
    courses: "コース",
    events: "イベント",
    about: "私たちについて",
    searchTitle: "何をお探しですか？",
  news: "ニュース",
  store: "ストア",
  mainNavigation: "メインナビゲーション",
  newsPageTitle: "ニュース",
  latestNews: "最新ニュース",
  viewAllNews: "すべてのニュースを見る",
  readNews: "ニュースを読む",
  viewNews: "ニュースを見る",
  }),
  ko: localized({
    knowledge: "지식",
    articles: "글",
    guides: "가이드 및 연구",
    courses: "강좌",
    events: "이벤트",
    about: "회사 소개",
    searchTitle: "무엇을 찾고 계신가요?",
  news: "소식",
  store: "스토어",
  mainNavigation: "주 탐색",
  newsPageTitle: "소식",
  latestNews: "최신 소식",
  viewAllNews: "모든 소식 보기",
  readNews: "소식 읽기",
  viewNews: "소식 보기",
  }),
};
