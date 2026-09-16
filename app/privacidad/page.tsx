import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Declaración de Privacidad",
  description:
    "Principios de ABALT respecto del tratamiento de datos personales y la protección de la información.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main lang="es" dir="ltr" className="bg-background font-sans text-ink">
        <div className="section-shell py-12 sm:py-16">
          <article aria-labelledby="privacy-title" className="mx-auto max-w-3xl space-y-8 text-base leading-7 [overflow-wrap:anywhere] [&_h2]:mb-4 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_li+li]:mt-2 [&_p+p]:mt-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:ps-6 sm:[&_h2]:text-3xl">
            <header>
              <h1 id="privacy-title" className="mb-6 font-heading text-4xl font-bold sm:text-5xl">
                Declaración de Privacidad
              </h1>
              <p>En <strong>ABALT</strong> estamos comprometidos con la privacidad y la protección de los datos personales de quienes interactúan con nosotros, nuestros servicios y nuestros canales digitales.</p>
              <p>Esta Declaración de Privacidad explica, de manera general, los principios que aplicamos respecto del tratamiento de datos personales y la forma en que protegemos la información de nuestros usuarios, clientes, prospectos, colaboradores y demás personas relacionadas con nuestras actividades.</p>
            </header>

            <section>
              <h2>Objetivo</h2>
              <p>El objetivo de esta Declaración es proporcionar información clara y transparente sobre la forma en que ABALT protege los datos personales y cumple con las disposiciones aplicables en materia de privacidad y protección de datos.</p>
              <p>Nuestro sitio web tiene principalmente una finalidad <strong>informativa y de difusión de conocimiento</strong>, permitiendo a los usuarios acceder a publicaciones, noticias, contenidos técnicos, eventos, cursos y demás información relacionada con las actividades de ABALT.</p>
              <p>Cuando determinadas funcionalidades requieran proporcionar información personal, el usuario podrá ser dirigido a plataformas o sitios externos habilitados para dicha finalidad.</p>
            </section>

            <section>
              <h2>Alcance</h2>
              <p>Esta Declaración se aplica al sitio web de ABALT y, cuando corresponda, al tratamiento de datos personales realizado por las entidades que integran ABALT en Ecuador en el desarrollo de sus actividades.</p>
              <p>El sitio puede contener enlaces a plataformas, aplicaciones o sitios web de terceros. Cuando el usuario acceda a ellos, el tratamiento de la información proporcionada estará sujeto a las políticas, términos y condiciones del respectivo tercero.</p>
              <p>ABALT recomienda revisar las políticas de privacidad correspondientes antes de proporcionar información personal a través de servicios externos.</p>
            </section>

            <section>
              <h2>Responsable del tratamiento</h2>
              <p>Dependiendo de la relación, servicio o actividad correspondiente, el responsable del tratamiento podrá ser una de las entidades que integran ABALT en Ecuador.</p>
              <p>Las entidades que forman parte de ABALT operan como personas jurídicas independientes y serán responsables del tratamiento de los datos personales que corresponda a sus respectivas actividades.</p>
              <p>La identificación específica del responsable, así como sus datos de contacto, podrá ser informada al titular en el momento en que se recopilen sus datos personales.</p>
            </section>

            <section>
              <h2>Marco legal</h2>
              <p>El tratamiento de datos personales realizado por ABALT se sujetará, según corresponda, a:</p>
              <ul>
                <li>la Constitución de la República del Ecuador;</li>
                <li>la Ley Orgánica de Protección de Datos Personales;</li>
                <li>el Reglamento General de la Ley Orgánica de Protección de Datos Personales;</li>
                <li>la Ley de Comercio Electrónico, Firmas Electrónicas y Mensajes de Datos; y</li>
                <li>demás normativa aplicable en materia de privacidad, protección de datos y servicios digitales.</li>
              </ul>
              <p>ABALT procurará que sus procesos y mecanismos relacionados con datos personales se desarrollen conforme a los principios de juridicidad, lealtad, transparencia, finalidad, pertinencia y minimización, proporcionalidad, confidencialidad y seguridad establecidos en la normativa aplicable.</p>
            </section>

            <section>
              <h2>Datos personales que tratamos</h2>
              <p>La navegación por las secciones informativas del sitio web de ABALT no requiere que el usuario proporcione directamente datos personales.</p>
              <p>No obstante, determinadas funcionalidades pueden utilizar información técnica necesaria para el funcionamiento, seguridad y desempeño del sitio, como información relacionada con el dispositivo, navegador, dirección IP, registros técnicos o tecnologías similares, según la configuración implementada.</p>
              <p>Cuando un usuario decida registrarse en un evento, suscribirse a comunicaciones, participar en un curso o acceder a otros servicios disponibles mediante plataformas externas, los datos solicitados serán tratados conforme a la información y condiciones de privacidad presentadas en el respectivo proceso o plataforma.</p>
              <p>La utilización de cookies y tecnologías similares se explica con mayor detalle en nuestra <strong>Política de Cookies</strong>.</p>
            </section>

            <section>
              <h2>Finalidades del tratamiento</h2>
              <p>Cuando ABALT realice tratamiento de datos personales, estos podrán ser utilizados, según corresponda y de acuerdo con la base de legitimación aplicable, para finalidades como:</p>
              <ul>
                <li>gestionar solicitudes, consultas o comunicaciones;</li>
                <li>administrar relaciones con clientes, prospectos, proveedores y otros terceros;</li>
                <li>gestionar registros en eventos, cursos, programas u otras actividades;</li>
                <li>enviar publicaciones, noticias, boletines o comunicaciones cuando el titular haya solicitado recibirlas o exista otra base legal aplicable;</li>
                <li>cumplir obligaciones contractuales, regulatorias o legales;</li>
                <li>garantizar la seguridad, funcionamiento y mejora de nuestros canales digitales; y</li>
                <li>atender requerimientos legítimos de autoridades competentes.</li>
              </ul>
              <p>Cuando corresponda, las finalidades específicas y la base jurídica aplicable serán informadas al titular al momento de recopilar sus datos.</p>
            </section>

            <section>
              <h2>Derechos de los titulares</h2>
              <p>De conformidad con la legislación ecuatoriana aplicable, los titulares podrán ejercer los derechos reconocidos respecto de sus datos personales, incluyendo, cuando corresponda:</p>
              <ul>
                <li>información;</li>
                <li>acceso;</li>
                <li>rectificación y actualización;</li>
                <li>eliminación;</li>
                <li>oposición;</li>
                <li>portabilidad;</li>
                <li>suspensión o limitación del tratamiento; y</li>
                <li>el derecho a no ser objeto de decisiones basadas exclusivamente en valoraciones automatizadas, en los casos previstos por la normativa.</li>
              </ul>
              <p>Asimismo, cuando el tratamiento se encuentre basado en el consentimiento, el titular podrá solicitar su revocatoria conforme a las condiciones establecidas por la legislación aplicable.</p>
              <p>Las solicitudes serán atendidas de acuerdo con los procedimientos y plazos previstos en la normativa vigente.</p>
            </section>

            <section>
              <h2>Conservación de datos</h2>
              <p>ABALT conservará los datos personales únicamente durante el tiempo necesario para cumplir las finalidades para las cuales fueron recopilados, atender obligaciones contractuales o legales y cumplir los períodos de conservación establecidos por la normativa aplicable.</p>
              <p>Una vez cumplida la finalidad correspondiente y cuando no exista una obligación legal que justifique su conservación, los datos serán eliminados, anonimizados o tratados conforme a los procedimientos internos establecidos para su adecuada protección.</p>
            </section>

            <section>
              <h2>Transferencias y comunicaciones</h2>
              <p>ABALT podrá utilizar proveedores de servicios tecnológicos u otros terceros para apoyar determinadas actividades, siempre que resulte necesario y exista una base jurídica que permita el tratamiento correspondiente.</p>
              <p>Cuando dichos terceros actúen por cuenta de ABALT como encargados del tratamiento, se procurará establecer las condiciones necesarias para garantizar la confidencialidad, seguridad y protección de los datos personales.</p>
              <p>En caso de transferencias o comunicaciones nacionales o internacionales de datos personales, ABALT aplicará las disposiciones y garantías previstas en la legislación ecuatoriana aplicable.</p>
              <p>Los enlaces incluidos en este sitio que dirijan a plataformas o servicios externos no implican que ABALT controle las prácticas de privacidad de dichos terceros.</p>
            </section>

            <section>
              <h2>Seguridad de la información</h2>
              <p>ABALT adopta medidas administrativas, organizativas y técnicas razonables orientadas a proteger la información frente a riesgos de pérdida, acceso no autorizado, alteración, divulgación, destrucción o cualquier otra forma de tratamiento indebido.</p>
              <p>Estas medidas serán revisadas y actualizadas considerando la naturaleza de la información, los riesgos asociados, las características del tratamiento y la evolución de las tecnologías disponibles.</p>
            </section>

            <section>
              <h2>Cambios en esta declaración</h2>
              <p>ABALT podrá actualizar esta Declaración de Privacidad cuando resulte necesario como consecuencia de cambios legales, regulatorios, tecnológicos, operativos o relacionados con nuestros servicios digitales.</p>
              <p>La versión vigente estará disponible permanentemente en este sitio web.</p>
              <p>Cuando las modificaciones sean relevantes, ABALT podrá comunicarlo mediante los mecanismos que considere apropiados.</p>
              <p><strong>Última actualización: septiembre de 2026.</strong></p>
            </section>

            <section>
              <h2>Contacto</h2>
              <p>Para realizar consultas relacionadas con esta Declaración de Privacidad o ejercer los derechos reconocidos por la normativa aplicable, puede comunicarse con ABALT a través de los canales de contacto habilitados para protección de datos personales.</p>
              <p><strong>Correo electrónico:</strong> hectorvizuete@abaltecuador.com</p>
              <p><strong>Dirección:</strong> Av. Naciones Unidas y Río Amazonas - Edificio Unique piso 2</p>
              <p><strong>Teléfono:</strong> +593 98 189 9444</p>
              <p>Cuando corresponda, ABALT podrá solicitar información razonablemente necesaria para verificar la identidad del solicitante y gestionar adecuadamente su requerimiento.</p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
