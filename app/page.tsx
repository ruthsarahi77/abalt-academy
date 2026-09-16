import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ContentSection } from "@/components/home/ContentSection";
import { InternationalSection } from "@/components/home/InternationalSection";
import { getLatestNews, getLatestCourses, getLatestProducts } from "@/data/selectors";

export default function Home() {
  const news = getLatestNews(3);
  const courses = getLatestCourses(3);
  const products = getLatestProducts(3);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ABALT Academy",
    publisher: { "@type": "Organization", name: "ABALT Ecuador", url: "https://abaltecuador.com/" },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [...news, ...courses, ...products].map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: new URL("pdfUrl" in item ? item.pdfUrl : item.url, "https://academy.abaltecuador.com").href,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <Header />
      <main>
        <Hero />
        <ContentSection title="latestNews" type="news" items={news} cta={{ href: "/noticias", label: "viewAllNews" }} />
        <ContentSection title="latestCourses" type="courses" items={courses} cta={{ href: "/cursos", label: "viewAllCourses" }} />
        <ContentSection title="latestProducts" type="products" items={products} cta={{ href: "/tienda", label: "viewAllProducts" }} />
        <InternationalSection />
      </main>
      <Footer />
    </>
  );
}
