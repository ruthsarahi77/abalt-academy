import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieSettingsButton } from "@/components/CookieConsent";
import { verifiedCookies } from "@/data/cookie-consent";

export const metadata: Metadata = {
  title: "Cookies",
  description:
    "Información sobre cookies, su utilización y las opciones para administrarlas en el sitio web de ABALT.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main lang="es" dir="ltr" className="bg-background font-sans text-ink">
        <div className="section-shell py-12 sm:py-16">
          <article aria-labelledby="cookies-title" className="mx-auto max-w-3xl space-y-8 text-base leading-7 [overflow-wrap:anywhere] [&_h2]:mb-4 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_li+li]:mt-2 [&_p+p]:mt-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:ps-6 sm:[&_h2]:text-3xl">
            <header>
              <h1 id="cookies-title" className="mb-6 font-heading text-4xl font-bold sm:text-5xl">
                Cookies
              </h1>
            </header>

            <section>
              <h2>Información sobre cookies</h2>
              <p>En <strong>ABALT</strong> utilizamos tecnologías digitales procurando ofrecer una experiencia de navegación segura, eficiente y transparente.</p>
              <p>Esta Política de Cookies explica qué son las cookies, para qué pueden utilizarse y cómo puede administrarlas el usuario durante la navegación por nuestro sitio web.</p>
              <p>Actualmente, el sitio web de ABALT tiene un carácter principalmente informativo. No utilizamos cookies con fines publicitarios ni para elaborar perfiles comerciales de los usuarios. En caso de incorporar nuevas tecnologías que requieran el uso de cookies, esta política será actualizada para reflejar su utilización y, cuando corresponda, se solicitará previamente el consentimiento del usuario.</p>
            </section>

            <section>
              <h2>¿Qué son las cookies?</h2>
              <p>Las cookies son pequeños archivos o fragmentos de información que un sitio web puede almacenar en el dispositivo del usuario durante su navegación.</p>
              <p>Estas tecnologías pueden utilizarse, entre otras finalidades, para permitir el funcionamiento técnico de un sitio, mantener determinadas preferencias, mejorar la experiencia de navegación, obtener información estadística sobre su utilización o habilitar funcionalidades proporcionadas por terceros.</p>
              <p>El uso de una cookie no implica necesariamente la identificación personal del usuario.</p>
            </section>

            <section>
              <h2>Tipos de cookies</h2>
              <p>Las cookies pueden clasificarse de acuerdo con distintos criterios.</p>
              <p><strong>Según su duración:</strong></p>
              <p><strong>Cookies de sesión:</strong> permanecen temporalmente durante la sesión de navegación y normalmente desaparecen cuando el usuario cierra el navegador.</p>
              <p><strong>Cookies persistentes:</strong> permanecen almacenadas durante un período determinado después de finalizar la sesión, salvo que el usuario las elimine previamente.</p>
              <p><strong>Según su finalidad:</strong></p>
              <p><strong>Cookies estrictamente necesarias:</strong> permiten el funcionamiento básico y seguro del sitio web. Pueden ser necesarias, por ejemplo, para mantener determinadas configuraciones técnicas o gestionar las preferencias de privacidad del usuario.</p>
              <p><strong>Cookies de preferencias o funcionalidad:</strong> permiten recordar determinadas elecciones realizadas por el usuario con el propósito de facilitar o personalizar su experiencia de navegación.</p>
              <p><strong>Cookies analíticas o de medición:</strong> permiten conocer, generalmente mediante información agregada o estadística, cómo interactúan los usuarios con el sitio, qué páginas son consultadas y cómo funciona la plataforma. Esta información puede utilizarse para evaluar y mejorar el desempeño del sitio.</p>
              <p><strong>Cookies de publicidad o marketing:</strong> pueden utilizarse para conocer determinados patrones de navegación y presentar contenidos o publicidad personalizada.</p>
              <p>ABALT no utiliza actualmente cookies de publicidad o marketing en este sitio.</p>
            </section>

            <section>
              <h2 id="site-cookies-title">Cookies utilizadas por este sitio</h2>
              <p>ABALT procura utilizar únicamente las tecnologías necesarias para el funcionamiento y seguridad del sitio.</p>
              <p>La implementación tecnológica del sitio puede requerir cookies o mecanismos equivalentes estrictamente necesarios para funciones técnicas, de seguridad o para recordar las preferencias de privacidad del usuario. Estas tecnologías no requieren necesariamente la creación de perfiles ni persiguen fines publicitarios.</p>
              <p>Cuando se incorporen cookies analíticas, de preferencias u otras tecnologías que requieran consentimiento, estas no deberán activarse hasta que el usuario haya expresado su elección mediante el mecanismo de gestión de cookies disponible en el sitio.</p>
              <p>ABALT mantendrá actualizada esta sección para identificar las cookies efectivamente utilizadas, incluyendo, cuando corresponda, su proveedor, finalidad y duración.</p>
              <div role="region" aria-labelledby="site-cookies-title" tabIndex={0} className="mt-4 max-w-full overflow-x-auto border border-line">
                <table className="w-full min-w-[44rem] table-fixed border-collapse whitespace-normal break-normal text-left text-sm leading-6 [&_td]:px-2 [&_td]:py-3 [&_td]:align-top [&_th]:px-2 [&_th]:py-3 [&_th]:align-top">
                  <caption className="sr-only">Cookies utilizadas por este sitio</caption>
                  <thead className="border-b border-line bg-surface font-heading font-bold">
                    <tr>
                      <th scope="col" className="w-[16%]">Proveedor</th>
                      <th scope="col" className="w-[12%]">Cookie</th>
                      <th scope="col" className="w-[38%]">Finalidad</th>
                      <th scope="col" className="w-[14%]">Categoría</th>
                      <th scope="col" className="w-[20%]">Duración</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {verifiedCookies.length > 0 ? verifiedCookies.map((cookie) => (
                      <tr key={`${cookie.provider}:${cookie.name}`}>
                        <td>{cookie.provider}</td>
                        <td className="whitespace-nowrap">{cookie.name}</td>
                        <td>{cookie.purpose}</td>
                        <td>{cookie.category}</td>
                        <td>{cookie.duration}</td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan={5}>Información pendiente de verificación técnica.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <p className="mt-4">Además, con tu consentimiento para la categoría Preferencias, se utilizan las claves <strong>abalt-country</strong> y <strong>abalt-language</strong> del almacenamiento local del navegador para recordar el país y el idioma elegidos. No son cookies y no tienen caducidad automática; se eliminan al retirar ese consentimiento o al borrar los datos del sitio. Sin consentimiento, los selectores siguen funcionando durante la visita sin guardar la elección.</p>
            </section>

            <section>
              <h2>Servicios y sitios externos</h2>
              <p>El sitio de ABALT puede contener enlaces que dirijan a plataformas o sitios web externos, por ejemplo, para realizar registros, suscripciones, inscripciones a eventos, acceder a determinados contenidos o utilizar servicios proporcionados por terceros.</p>
              <p>Cuando el usuario accede a uno de estos enlaces, abandona el sitio web de ABALT y pasa a interactuar con el servicio externo correspondiente.</p>
              <p>Dichos sitios pueden utilizar sus propias cookies y tecnologías de seguimiento. Su utilización se encuentra sujeta a las políticas de privacidad y cookies establecidas por cada proveedor.</p>
              <p>La inclusión de un enlace externo en este sitio no significa que ABALT controle las cookies o tecnologías utilizadas por el sitio de destino.</p>
              <p>Recomendamos revisar las políticas correspondientes antes de proporcionar información o continuar la navegación en servicios externos.</p>
            </section>

            <section>
              <h2>Gestión del consentimiento</h2>
              <p>Cuando el sitio utilice cookies que requieran el consentimiento del usuario, ABALT proporcionará un mecanismo que permita aceptar, rechazar o configurar dichas cookies de acuerdo con las categorías disponibles.</p>
              <p>Las cookies estrictamente necesarias para el funcionamiento del sitio podrán permanecer activas cuando sean indispensables para prestar el servicio solicitado o mantener funciones esenciales de la plataforma.</p>
              <p>El usuario podrá modificar posteriormente sus preferencias mediante la opción <strong>“Configurar cookies”</strong> disponible en el sitio, cuando dicho mecanismo resulte aplicable.</p>
              <p>La retirada del consentimiento no afectará a la licitud del tratamiento realizado previamente.</p>
              <p><CookieSettingsButton /></p>
            </section>

            <section>
              <h2>Cómo administrar las cookies desde el navegador</h2>
              <p>Además de las opciones proporcionadas por este sitio, los principales navegadores permiten administrar, bloquear o eliminar cookies desde su configuración.</p>
              <p>El procedimiento puede variar dependiendo del navegador y dispositivo utilizado.</p>
              <p>El usuario puede configurar su navegador para:</p>
              <ul>
                <li>permitir o bloquear todas las cookies;</li>
                <li>bloquear cookies de determinados sitios;</li>
                <li>eliminar cookies almacenadas;</li>
                <li>eliminar las cookies al cerrar el navegador; o</li>
                <li>recibir determinadas advertencias relacionadas con su utilización.</li>
              </ul>
              <p>La restricción de determinadas cookies puede afectar al funcionamiento de algunas características del sitio o de servicios externos.</p>
            </section>

            <section>
              <h2>Privacidad y protección de datos</h2>
              <p>Cuando la utilización de cookies o tecnologías similares implique el tratamiento de datos personales, dicho tratamiento se realizará conforme a la legislación ecuatoriana aplicable y a nuestra <strong>Declaración de Privacidad</strong>.</p>
              <p>Para obtener información adicional sobre la forma en que ABALT protege los datos personales, los derechos de los titulares y los mecanismos de contacto disponibles, recomendamos consultar dicha declaración.</p>
            </section>

            <section>
              <h2>Cambios en esta Política de Cookies</h2>
              <p>ABALT podrá modificar esta Política de Cookies como consecuencia de cambios en las funcionalidades del sitio, incorporación o eliminación de tecnologías, modificaciones de proveedores, cambios regulatorios o actualizaciones en nuestras prácticas digitales.</p>
              <p>La versión vigente estará disponible permanentemente en esta sección.</p>
              <p><strong>Última actualización: septiembre de 2026.</strong></p>
            </section>

            <section>
              <h2>Contacto</h2>
              <p>Para consultas relacionadas con esta Política de Cookies, privacidad o protección de datos personales, puede comunicarse con ABALT mediante los canales institucionales habilitados.</p>
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
