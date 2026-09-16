# Consentimiento de cookies

Integración: vanilla-cookieconsent 3.1.0, Next.js 16.3.4 App Router. Inicialización en cliente mediante `useEffect`, siguiendo la [integración oficial para React](https://cookieconsent.orestbida.com/essential/getting-started.html#react). El layout y la página de Cookies siguen siendo componentes de servidor.

## Configuración

- `data/cookie-consent.ts`: textos en español, categorías, duración e inventario de cookies.
- `lib/cookie-consent.ts`: inicialización única, apertura del panel y eliminación de preferencias no autorizadas.
- `components/CookieConsent.tsx`: montaje global y botón para reabrir las preferencias desde `/cookies`.
- `components/LocaleProvider.tsx`: solo lee y guarda preferencias persistentes con autorización. Los selectores siguen funcionando en memoria al rechazar.
- `app/globals.css`: estilos del paquete y ajustes con las variables visuales existentes.

Necesarias está siempre activa. Preferencias, Analíticas y Marketing están desactivadas por defecto. Preferencias se añadió para que el almacenamiento de idioma y país no se trate como estrictamente necesario. No hay servicios analíticos ni de marketing registrados.

## Auditoría del 16 de septiembre de 2026

Alcance: código del proyecto y compilación de producción ejecutada localmente en Edge, con perfil temporal limpio. No incluye cookies que una plataforma de alojamiento pudiera añadir en producción.

Antes: ninguna cookie, ningún `sessionStorage` y ningún `localStorage` en la primera visita. Los selectores escribían `abalt-country` y `abalt-language` en `localStorage` sin caducidad automática; se verificó la escritura de idioma en el navegador.

Después: ninguna cookie antes de elegir. Al aceptar, rechazar o guardar una selección se crea únicamente:

| Proveedor | Cookie | Finalidad | Categoría | Duración |
| --- | --- | --- | --- | --- |
| ABALT, primera parte | `cc_cookie` | Recordar la elección y categorías autorizadas | Necesarias | 182 días desde la última elección |

La cookie contiene categorías, revisión, identificador de consentimiento y fechas. Ruta `/`, SameSite `Lax`, accesible al JavaScript del gestor. `secure: true` en configuración; la librería desactiva Secure para HTTP local. El inventario visible en `/cookies` utiliza la misma duración y nombre que la configuración.

`abalt-country` y `abalt-language` siguen siendo almacenamiento local, no cookies. Se escriben al elegir país/idioma solo si Preferencias está autorizada. No tienen caducidad automática; se eliminan al retirar el permiso o borrar los datos del sitio. También se limpian valores heredados sin consentimiento. No se añade almacenamiento de sesión.

Servicios externos encontrados: enlaces a MEGA, WhatsApp, el sitio institucional y el registro de suscripciones. No hay iframes, Google Analytics, Meta Pixel ni scripts externos de seguimiento. El JSON-LD de la portada es información estructurada, no un rastreador. Next.js descarga Open Sans al compilar y la sirve localmente. En las pruebas solo se observaron solicitudes al origen local, incluso tras aceptar todas.

## Verificación

- Perfil nuevo: sin cookies ni almacenamiento; Necesarias bloqueada en activa y las demás categorías desactivadas.
- Rechazar: crea solo `cc_cookie`; navegación e idioma funcionan sin persistir preferencias.
- Aceptar todas: guarda las categorías; los selectores pueden persistir país e idioma.
- Recargar: conserva la elección y las preferencias autorizadas; no reaparece el banner.
- Retirar: elimina ambas claves locales y conserva solo Necesarias.
- Selección individual: aceptar únicamente Analíticas se conserva al recargar y no carga ningún servicio.
- Panel y banner revisados a 1280 y 375 px, sin desbordamiento horizontal; navegación por teclado dentro del panel.
- Sin errores JavaScript durante las pruebas; caducidad real de 182 días comprobada en el navegador.
- `npm run build`: correcto, incluido TypeScript. ESLint de archivos afectados: correcto.
- `npm run lint`: errores preexistentes de `no-require-imports` en scripts `.agents/skills/brand` y `.agents/skills/design-system`; no se modificaron.

## Incorporación futura de servicios

El gestor no bloquea automáticamente cualquier script añadido al proyecto. Registrar cada servicio real en la categoría correspondiente de `consentConfig`, cargarlo únicamente desde `services.onAccept` y detenerlo/limpiar sus datos desde `onReject` y `autoClear` cuando corresponda. Como alternativa para scripts estáticos, seguir la [gestión oficial de scripts](https://cookieconsent.orestbida.com/advanced/manage-scripts.html) con `type="text/plain"` y `data-category`.

No añadir rastreadores mediante imports ejecutados al cargar, iframes o `next/script` incondicionales. Verificar nombres, proveedor, duración, peticiones y retirada antes de actualizar el inventario. Aumentar `revision` cuando cambien materialmente las finalidades o servicios, para solicitar una nueva elección.
