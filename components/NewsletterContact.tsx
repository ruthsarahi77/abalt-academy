import { useId } from "react";
import { contact, NEWSLETTER_SUBSCRIPTION_URL } from "@/data/contact";

export function NewsletterContact() {
  const headingId = useId();
  const pendingId = useId();
  const ctaClassName = "mt-2 inline-flex min-h-9 items-center justify-center border border-ink bg-white px-4 py-1.5 text-sm font-semibold text-ink transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-abalt disabled:cursor-default disabled:border-line disabled:text-muted-foreground";

  return (
    <section lang="es" aria-labelledby={headingId} className="bg-white font-sans">
      <div className="section-shell flex flex-col gap-9 py-4">
        <div>
          <h2 id={headingId} className="max-w-xl font-heading text-lg font-semibold leading-snug">
            ¿Desea recibir nuestras últimas publicaciones?
          </h2>
          {NEWSLETTER_SUBSCRIPTION_URL ? (
            <a href={NEWSLETTER_SUBSCRIPTION_URL} target="_blank" rel="noopener noreferrer" className={ctaClassName}>
              Suscríbete
              <span className="sr-only"> (abre en una pestaña nueva)</span>
            </a>
          ) : (
            <>
              <button type="button" disabled aria-describedby={pendingId} className={ctaClassName}>
                Suscríbete
              </button>
            </>
          )}
        </div>
        <div className="border-s border-line ps-4">
          <h3 className="text-s font-semibold leading-5">Contáctanos:</h3>
          <address className="mt-1 flex flex-col items-start text-sm leading-5 not-italic">
            <p className="font-semibold">{contact.name}</p>
            <a href={`mailto:${contact.email}`} className="inline-flex min-h-6 items-center break-all underline decoration-line underline-offset-4 hover:text-abalt">
              {contact.email}
            </a>
            <a href={`tel:${contact.phone}`} className="inline-flex min-h-6 items-center underline decoration-line underline-offset-4 hover:text-abalt">
              {contact.phoneLabel}
            </a>
            <a href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex min-h-6 items-center underline decoration-line underline-offset-4 hover:text-abalt">
              WhatsApp
              <span className="sr-only"> (abre en una pestaña nueva)</span>
            </a>
          </address>
        </div>
      </div>
    </section>
  );
}
