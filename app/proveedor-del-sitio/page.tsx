import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Acerca del proveedor de este sitio",
  description:
    "Información sobre las firmas miembro de ABALT Auditores & Consultores en Ecuador que proporcionan el contenido de este sitio.",
  alternates: { canonical: "/proveedor-del-sitio" },
};

export default function SiteProviderPage() {
  return (
    <>
      <Header />
      <main lang="es" dir="ltr" className="bg-background font-sans text-ink">
        <div className="section-shell py-12 sm:py-16">
          <article
            aria-labelledby="site-provider-title"
            className="mx-auto max-w-3xl space-y-8 text-base leading-7 [overflow-wrap:anywhere] [&_h2]:mb-4 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_li+li]:mt-2 [&_p+p]:mt-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:ps-6 sm:[&_h2]:text-3xl"
          >
            <header>
              <h1
                id="site-provider-title"
                className="mb-6 font-heading text-4xl font-bold sm:text-5xl"
              >
                Acerca del proveedor de este sitio
              </h1>
              <p>
                El contenido de este sitio web es proporcionado por las firmas
                miembro de <strong>ABALT Auditores &amp; Consultores</strong> en
                Ecuador:
              </p>
              <p>
                <strong>ABALTPARTNERS CIA. LTDA.</strong>
                <br />
                <strong>
                  AUDITSOLUTIONS SOLUCIONES DE AUDITORÍA INTEGRAL CIA. LTDA.
                </strong>
                <br />
                <strong>ABALTBUSINESS ADVISORS CÍA. LTDA.</strong>
              </p>
              <p>
                ABALT Auditores &amp; Consultores es el nombre comercial
                utilizado por la red y sus firmas miembro para identificar la
                prestación de servicios profesionales en sus respectivas áreas
                de especialización.
              </p>
              <p>
                Cada firma miembro es una{" "}
                <strong>entidad legal separada e independiente</strong> y
                desarrolla sus actividades bajo su propia responsabilidad. La
                pertenencia a ABALT Auditores &amp; Consultores no implica que
                una firma miembro sea responsable por los actos u omisiones de
                otra, salvo cuando exista una obligación expresamente asumida o
                establecida conforme a la legislación aplicable.
              </p>
            </header>

            <section>
              <h2>Contenido del sitio</h2>
              <p>
                Este sitio tiene como finalidad proporcionar información
                institucional y facilitar el acceso a noticias, publicaciones,
                contenidos técnicos, cursos, eventos y otros recursos
                relacionados con las actividades y áreas de conocimiento de
                ABALT.
              </p>
              <p>
                La publicación, administración y actualización de sus contenidos
                se realiza bajo los lineamientos institucionales de ABALT.
              </p>
              <p>
                Para conocer las condiciones aplicables al acceso, utilización y
                contenido del sitio, consulte nuestros{" "}
                <strong>
                  <Link
                    href="/terminos-legales"
                    className="underline decoration-line underline-offset-4 hover:text-abalt"
                  >
                    Términos Legales
                  </Link>
                </strong>
                .
              </p>
            </section>

            <section>
              <h2>Contacto</h2>
              <p>
                Para obtener mayor información sobre este sitio, reportar alguna
                incidencia relacionada con su contenido o realizar una consulta
                institucional, puede comunicarse con ABALT a través de los
                siguientes canales:
              </p>
              <p>
                <strong>Correo electrónico:</strong>{" "}
                hectorvizuete@abaltecuador.com
              </p>
              <p>
                <strong>Dirección:</strong> Av. Naciones Unidas y Río Amazonas -
                Edificio Unique piso 2
              </p>
              <p>
                <strong>Teléfono:</strong> +593 98 189 9444
              </p>
              <p>
                <strong>Última actualización: septiembre de 2026.</strong>
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
