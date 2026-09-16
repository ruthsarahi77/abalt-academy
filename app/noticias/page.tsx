import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsletterContact } from "@/components/NewsletterContact";
import { NewsArchive } from "@/components/news/NewsArchive";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "Noticias",
  description:
    "Análisis, perspectivas y conocimiento especializado de ABALT Academy para apoyar mejores decisiones empresariales.",
  alternates: { canonical: "/noticias" },
};

export default function NewsPage() {
  return (
    <>
      <Header />
      <main>
        <NewsArchive news={news} />
        <NewsletterContact />
      </main>
      <Footer />
    </>
  );
}
