/**
 * Mensaje predefinido de WhatsApp según la página desde la que escribe el visitante.
 * Reutiliza los prefills `lead.whatsapp` por servicio (service-details.ts) y el
 * patrón por sector Web3 (Web3SectorLayout). El botón flotante (WhatsappFab.astro)
 * lo resuelve en build a partir de `Astro.url.pathname`.
 */
import { SERVICE_DETAILS } from './service-details';
import { WEB3_SECTORS } from './web3-sectors';

const HOME_MESSAGE =
  'Hola, vengo de la web de Vaultbit. Me gustaría que me contéis cómo podéis ayudarme a proteger y ordenar mis criptomonedas.';

const GENERIC_MESSAGE =
  'Hola, vengo de la web de Vaultbit. Tengo una consulta sobre custodia, herencia o fiscalidad de criptomonedas. ¿Me ayudáis?';

/** Quita la barra final salvo en la raíz. */
const normalize = (p: string) => {
  const path = p || '/';
  return path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path;
};

export function whatsappMessageForPath(pathname: string): string {
  const path = normalize(pathname);

  // Subpáginas de sector Web3: /servicios/web3/<sector>
  const sectorMatch = path.match(/^\/servicios\/web3\/([^/]+)$/);
  if (sectorMatch) {
    const sector = WEB3_SECTORS.find((s) => s.slug === sectorMatch[1]);
    if (sector) {
      return `Hola, vengo de la web de Vaultbit. Tengo una idea de ${sector.name.toLowerCase()} y quiero que me ayudéis. Os cuento:`;
    }
    // Sector desconocido: usa el mensaje Web3 del servicio pillar.
    return SERVICE_DETAILS['web3-b2b']?.lead?.whatsapp ?? GENERIC_MESSAGE;
  }

  // Servicios: /servicios/<slug> (heritage-protocol, arquitectura-custodia,
  // diagnostico-360, conexion-fiscal, web3-b2b)
  const serviceMatch = path.match(/^\/servicios\/([^/]+)$/);
  if (serviceMatch) {
    const prefill = SERVICE_DETAILS[serviceMatch[1]]?.lead?.whatsapp;
    if (prefill) return prefill;
  }

  if (path === '/') return HOME_MESSAGE;
  return GENERIC_MESSAGE;
}
