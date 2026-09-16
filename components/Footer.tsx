import Link from "next/link";
import Image from "next/image";

const legalLinks = [
  { label: "Declaraci\u00f3n de Privacidad", href: "/privacidad" },
  { label: "T\u00e9rminos Legales", href: "/terminos-legales" },
  { label: "Cookies", href: "/cookies" },
  { label: "Acerca del proveedor de este sitio", href: "/proveedor-del-sitio" },
];

export function Footer() {
  return (
    <footer lang="es" className="border-t border-line bg-surface font-sans text-ink">
      <div className="section-shell flex flex-col items-start gap-6 py-10 md:flex-row md:gap-6">
        <Image src="/abalt-logo.png" alt="ABALT" width={120} height={38} className="block shrink-0 self-start object-top" />
        <div className="min-w-0 flex-1 self-start text-start">
        <p className="m-0 text-sm leading-5 text-muted-foreground">
          © 2026 ABALT - Cada una de las firmas miembro es una entidad legal separada y no tiene ninguna responsabilidad derivada de los actos u omisiones de la otra entidad.
        </p>
        <nav aria-label="Información legal" className="mt-1">
          <ul className="flex flex-col items-start gap-1 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-1">
            {legalLinks.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} prefetch={false} className="inline-flex min-h-8 items-center text-xs font-medium underline decoration-line underline-offset-4 transition-colors hover:text-abalt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-abalt">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        </div>
      </div>
    </footer>
  );
}
