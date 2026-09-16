import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Términos Legales",
  description:
    "Términos que regulan el acceso, navegación y utilización del sitio web de ABALT y sus contenidos.",
  alternates: { canonical: "/terminos-legales" },
};

export default function LegalTermsPage() {
  return (
    <>
      <Header />
      <main lang="es" dir="ltr" className="bg-background font-sans text-ink">
        <div className="section-shell py-12 sm:py-16">
          <article aria-labelledby="legal-terms-title" className="mx-auto max-w-3xl space-y-8 text-base leading-7 [overflow-wrap:anywhere] [&_h2]:mb-4 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_li+li]:mt-2 [&_p+p]:mt-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:ps-6 sm:[&_h2]:text-3xl">
            <header>
              <h1 id="legal-terms-title" className="mb-6 font-heading text-4xl font-bold sm:text-5xl">
                Términos Legales
              </h1>
              <p>Los presentes Términos Legales regulan el acceso, navegación y utilización del sitio web de <strong>ABALT</strong>, así como el acceso a los contenidos, publicaciones y recursos disponibles a través de este.</p>
              <p>ABALT es una red integrada por firmas miembro que operan como entidades legales separadas e independientes. Ninguna firma miembro será responsable por los actos u omisiones de otra, salvo que exista una obligación expresamente asumida o establecida conforme a la legislación aplicable.</p>
            </header>

            <section>
              <h2>Aceptación de los términos</h2>
              <p>El acceso y navegación por este sitio web implica el conocimiento y aceptación de los presentes Términos Legales.</p>
              <p>El usuario se compromete a utilizar el sitio, sus contenidos y funcionalidades de conformidad con la legislación aplicable, estos términos y demás políticas publicadas por ABALT.</p>
              <p>Si el usuario no está de acuerdo con estas condiciones, deberá abstenerse de utilizar el sitio web.</p>
            </section>

            <section>
              <h2>Finalidad del sitio</h2>
              <p>Este sitio web tiene carácter principalmente <strong>informativo y educativo</strong>. Su finalidad es facilitar el acceso a noticias, publicaciones, contenidos técnicos, cursos, eventos y demás información relacionada con las actividades y áreas de conocimiento de ABALT.</p>
              <p>Salvo que expresamente se indique lo contrario, el acceso al contenido público del sitio es libre y no requiere registro.</p>
              <p>Determinadas funcionalidades pueden dirigir al usuario a sitios web, plataformas o servicios externos para completar registros, suscripciones, inscripciones u otros procesos.</p>
            </section>

            <section>
              <h2>Contenido e información</h2>
              <p>ABALT procura que la información publicada en este sitio sea relevante y se encuentre razonablemente actualizada. Sin embargo, debido a la evolución de las normas, regulaciones, criterios técnicos y demás materias tratadas, no se garantiza que todo contenido permanezca permanentemente actualizado, completo o aplicable a circunstancias particulares.</p>
              <p>Los contenidos publicados tienen <strong>carácter general e informativo</strong> y no constituyen, por sí mismos, asesoramiento profesional, contable, tributario, legal, financiero, de auditoría, consultoría o de cualquier otra naturaleza.</p>
              <p>La información disponible en este sitio no debe utilizarse como sustituto del análisis profesional de las circunstancias específicas de una persona u organización.</p>
              <p>Antes de adoptar decisiones basadas en los temas abordados en nuestras publicaciones, recomendamos obtener asesoramiento profesional adecuado a las circunstancias particulares.</p>
              <p>La publicación de información en este sitio no crea por sí misma una relación profesional, contractual, comercial o de cliente entre ABALT, cualquiera de sus firmas miembro y el usuario.</p>
            </section>

            <section>
              <h2>Propiedad intelectual</h2>
              <p>Salvo que se indique expresamente lo contrario, los contenidos de este sitio web, incluyendo textos, publicaciones, documentos, diseños, elementos gráficos, fotografías, logotipos, marcas, signos distintivos, material audiovisual, estructura y demás elementos que lo integran, pertenecen a ABALT, sus firmas miembro o a terceros que hayan autorizado su utilización.</p>
              <p>El acceso al sitio no concede al usuario derechos de propiedad, licencia o autorización sobre dichos elementos más allá de su consulta y utilización personal conforme a estos Términos Legales.</p>
              <p>No se permite reproducir, modificar, distribuir, comercializar, publicar o utilizar los contenidos con fines distintos a los permitidos por la legislación aplicable sin contar previamente con la autorización correspondiente.</p>
              <p>Cuando se permita citar o compartir contenidos de ABALT, deberá identificarse adecuadamente la fuente y mantenerse la integridad y contexto de la información.</p>
              <p>Las marcas, nombres comerciales, logotipos y demás signos distintivos de ABALT no podrán utilizarse de forma que pueda generar confusión respecto de la existencia de una relación, autorización, patrocinio o respaldo que no exista.</p>
            </section>

            <section>
              <h2>Publicaciones y opiniones de autores</h2>
              <p>Determinados artículos, análisis, entrevistas, publicaciones u otros contenidos pueden identificar expresamente a sus respectivos autores.</p>
              <p>Cuando corresponda, las opiniones o interpretaciones expresadas en dichos contenidos corresponden a sus autores y deberán entenderse dentro del contexto y fecha en que fueron publicadas.</p>
              <p>La información técnica puede verse afectada posteriormente por reformas normativas, nuevos pronunciamientos de autoridades, cambios de criterios profesionales u otras circunstancias.</p>
            </section>

            <section>
              <h2>Enlaces y servicios de terceros</h2>
              <p>Este sitio puede contener enlaces a páginas web, plataformas, aplicaciones o servicios administrados por terceros.</p>
              <p>Estos enlaces se proporcionan para facilitar el acceso del usuario a información o funcionalidades complementarias. Al abandonar el sitio de ABALT, el usuario estará sujeto a los términos, políticas de privacidad, políticas de cookies y demás condiciones establecidas por el respectivo tercero.</p>
              <p>ABALT no controla necesariamente dichos sitios o servicios externos y, salvo que expresamente se indique lo contrario, la inclusión de un enlace no implica aprobación, garantía o responsabilidad sobre su contenido, disponibilidad, seguridad o funcionamiento.</p>
              <p>El usuario deberá revisar las condiciones aplicables antes de proporcionar información o utilizar servicios externos.</p>
            </section>

            <section>
              <h2>Disponibilidad y funcionamiento del sitio</h2>
              <p>ABALT procura mantener este sitio disponible y funcionando adecuadamente. Sin embargo, no garantiza su disponibilidad permanente ni la ausencia absoluta de errores, interrupciones o incidencias técnicas.</p>
              <p>ABALT podrá modificar, actualizar, suspender o retirar temporal o permanentemente contenidos, funcionalidades o secciones cuando resulte necesario por razones técnicas, operativas, legales, de seguridad o de actualización.</p>
              <p>También podrán producirse interrupciones derivadas de mantenimiento, infraestructura tecnológica, proveedores externos, conectividad u otras circunstancias fuera del control razonable de ABALT.</p>
            </section>

            <section>
              <h2>Seguridad</h2>
              <p>ABALT adopta medidas razonables destinadas a preservar la seguridad y funcionamiento de sus canales digitales.</p>
              <p>No obstante, ningún sistema conectado a Internet puede garantizar una seguridad absoluta. El usuario es responsable de mantener medidas adecuadas de protección en sus dispositivos, sistemas y conexiones.</p>
              <p>El usuario deberá abstenerse de realizar cualquier acción destinada a vulnerar, alterar, interferir o comprometer la seguridad, integridad o disponibilidad del sitio web.</p>
            </section>

            <section>
              <h2>Uso adecuado del sitio</h2>
              <p>El usuario se compromete a utilizar el sitio de manera lícita y responsable.</p>
              <p>En particular, no deberá:</p>
              <ul>
                <li>utilizar el sitio para actividades ilícitas o contrarias a derechos de terceros;</li>
                <li>intentar acceder sin autorización a sistemas, servidores, cuentas o información;</li>
                <li>introducir código malicioso, virus u otros elementos destinados a afectar el funcionamiento del sitio;</li>
                <li>interferir, deteriorar, sobrecargar o impedir el funcionamiento normal de la plataforma;</li>
                <li>utilizar contenidos de ABALT vulnerando derechos de propiedad intelectual;</li>
                <li>suplantar identidades o proporcionar información engañosa en los servicios externos vinculados desde el sitio; o</li>
                <li>utilizar el sitio de forma que pueda afectar injustificadamente a ABALT, sus firmas miembro, otros usuarios o terceros.</li>
              </ul>
            </section>

            <section>
              <h2>Limitación de responsabilidad</h2>
              <p>Dentro de los límites permitidos por la legislación aplicable, ABALT no será responsable por decisiones adoptadas exclusivamente con base en información general publicada en este sitio, ni por consecuencias derivadas de utilizar dicha información sin considerar las circunstancias particulares del usuario.</p>
              <p>ABALT tampoco será responsable por interrupciones o fallas atribuibles a terceros, infraestructura de telecomunicaciones, servicios externos u otras circunstancias fuera de su control razonable.</p>
              <p>Estas disposiciones no excluyen ni limitan aquellas responsabilidades que legalmente no puedan ser excluidas o limitadas.</p>
            </section>

            <section>
              <h2>Privacidad y protección de datos</h2>
              <p>El tratamiento de datos personales relacionado con las actividades de ABALT se realizará de conformidad con la legislación ecuatoriana aplicable y con nuestra <strong>Declaración de Privacidad</strong>.</p>
              <p>La navegación por las secciones informativas del sitio no requiere que el usuario proporcione directamente datos personales.</p>
              <p>Cuando determinadas funcionalidades dirijan al usuario a plataformas o servicios externos, el tratamiento de la información proporcionada estará sujeto a las condiciones y políticas aplicables al correspondiente servicio, sin perjuicio de las responsabilidades que legalmente correspondan a ABALT cuando actúe como responsable o encargado del tratamiento.</p>
            </section>

            <section>
              <h2>Cookies</h2>
              <p>Este sitio puede utilizar cookies y tecnologías similares necesarias para su funcionamiento, seguridad, medición o mejora de la experiencia del usuario.</p>
              <p>La información sobre las tecnologías utilizadas, sus finalidades y las opciones disponibles para administrarlas se encuentra en nuestra <strong>Política de Cookies</strong>.</p>
            </section>

            <section>
              <h2>Legislación aplicable</h2>
              <p>Estos Términos Legales se interpretarán de conformidad con la legislación vigente de la República del Ecuador.</p>
              <p>Cualquier controversia relacionada con el acceso o utilización de este sitio será tratada conforme a la normativa ecuatoriana aplicable y ante las autoridades o jurisdicción que corresponda de acuerdo con la legislación vigente, sin perjuicio de mecanismos alternativos de solución de controversias que resulten aplicables.</p>
            </section>

            <section>
              <h2>Modificaciones de los Términos Legales</h2>
              <p>ABALT podrá actualizar estos Términos Legales para reflejar modificaciones en el sitio, sus funcionalidades, la legislación aplicable o las prácticas institucionales.</p>
              <p>La versión vigente estará disponible permanentemente en esta sección.</p>
              <p><strong>Última actualización: septiembre de 2026.</strong></p>
            </section>

            <section>
              <h2>Contacto</h2>
              <p>Para consultas relacionadas con estos Términos Legales, el uso del sitio, propiedad intelectual o posibles vulneraciones de derechos, puede comunicarse con ABALT mediante los canales institucionales habilitados.</p>
              <p><strong>Correo electrónico:</strong> hectorvizuete@abaltecuador.com</p>
              <p><strong>Dirección:</strong> Av. Naciones Unidas y Río Amazonas - Edificio Unique piso 2</p>
              <p><strong>Teléfono:</strong> +593 98 189 9444</p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
