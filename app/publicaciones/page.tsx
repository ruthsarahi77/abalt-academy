import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PublicationsArchive } from "@/components/publications/PublicationsArchive";
import { publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Publicaciones",
  description:
    "Análisis, perspectivas y conocimiento especializado de ABALT Academy para apoyar mejores decisiones empresariales.",
  alternates: { canonical: "/publicaciones" },
};

export default function PublicationsPage() {
  return (
    <>
      <Header />
      <main>
        <PublicationsArchive publications={publications} />
      </main>
      <Footer />
    </>
  );
}
