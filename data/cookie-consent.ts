import type { CookieConsentConfig } from "vanilla-cookieconsent";

export const consentCookie = {
  name: "cc_cookie",
  expiresAfterDays: 182,
  path: "/",
  sameSite: "Lax",
  secure: true,
} as const;

export const cookieSettingsLabel = "Configurar cookies";

export const verifiedCookies = [{
  provider: "ABALT (primera parte)",
  name: consentCookie.name,
  purpose: "Guardar la elección de consentimiento y las categorías autorizadas.",
  category: "Necesarias",
  duration: `${consentCookie.expiresAfterDays} días desde la última elección`,
}];

export const consentConfig: CookieConsentConfig = {
  mode: "opt-in",
  revision: 0,
  cookie: consentCookie,
  disablePageInteraction: false,
  guiOptions: {
    consentModal: { layout: "cloud", position: "bottom center", equalWeightButtons: true },
    preferencesModal: { layout: "box", equalWeightButtons: true },
  },
  categories: {
    necessary: { enabled: true, readOnly: true },
    preferences: { enabled: false },
    // No analytics or marketing services are installed. Register future services
    // here with onAccept/onReject and verified cleanup; never load them eagerly.
    analytics: { enabled: false },
    marketing: { enabled: false },
  },
  language: {
    default: "es",
    translations: {
      es: {
        consentModal: {
          title: "Tu privacidad en ABALT",
          description: "Utilizamos una cookie necesaria para recordar tu elección. Solo guardamos tus preferencias de país e idioma si lo autorizas. Actualmente no utilizamos servicios de analítica ni marketing. Puedes modificar o retirar tu consentimiento desde nuestra Política de Cookies.",
          acceptAllBtn: "Aceptar todas",
          acceptNecessaryBtn: "Rechazar no necesarias",
          showPreferencesBtn: "Configurar",
          footer: '<a href="/cookies">Política de Cookies</a><a href="/privacidad">Declaración de Privacidad</a>',
        },
        preferencesModal: {
          title: cookieSettingsLabel,
          acceptAllBtn: "Aceptar todas",
          acceptNecessaryBtn: "Rechazar no necesarias",
          savePreferencesBtn: "Guardar preferencias",
          closeIconLabel: "Cerrar",
          sections: [
            { title: "Tu elección", description: "Puedes aceptar, rechazar o modificar las categorías opcionales. Para retirar el consentimiento, desactívalas y guarda tu elección, o selecciona «Rechazar no necesarias»." },
            { title: "Necesarias", linkedCategory: "necessary", description: `Siempre activas. La cookie ${consentCookie.name} guarda tu elección durante ${consentCookie.expiresAfterDays} días.` },
            { title: "Preferencias", linkedCategory: "preferences", description: "Permiten guardar el país y el idioma elegidos en el almacenamiento local de tu navegador. Sin este permiso, los selectores funcionan durante la visita, pero la elección no se conserva al recargar. Al retirar el permiso, se eliminan estos datos guardados." },
            { title: "Analíticas", linkedCategory: "analytics", description: "Requieren tu consentimiento. Actualmente no utilizamos cookies ni servicios de analítica." },
            { title: "Marketing", linkedCategory: "marketing", description: "Requieren tu consentimiento. Actualmente no utilizamos cookies ni servicios de publicidad o marketing." },
          ],
        },
      },
    },
  },
};
