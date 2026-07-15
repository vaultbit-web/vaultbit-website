/**
 * Fuente única de verdad para Schema.org JSON-LD.
 * Se referencia desde SEO.astro y JsonLd.astro.
 *
 * IMPORTANTE — compliance: VaultBit NO es asesor financiero registrado,
 * NO es despacho de abogados, NO es entidad de custodia. El subtipo
 * Schema.org correcto es ProfessionalService (no FinancialService).
 */

export const SITE_URL = 'https://vaultbit.es';
export const SITE_NAME = 'VaultBit Advisory';
export const SITE_LEGAL_NAME = 'VaultBit Advisory';
export const SITE_TAGLINE =
  'Consultoría independiente de custodia, herencia y fiscalidad de criptoactivos en España.';
export const SITE_DESCRIPTION =
  'Te ayudamos a proteger tus criptomonedas, ordenar la fiscalidad y preparar la herencia o la incapacitación, en lenguaje claro y con notarios y fiscalistas colegiados. Consultoría neutral: no somos asesor financiero, ni despacho de abogados, ni entidad de custodia.';

// Fecha de última revisión editorial mayor del sitio. Actualizar al hacer cambios estructurales.
// Las páginas heredan este valor por defecto; pueden sobrescribirlo con su propia fecha.
export const SITE_LAST_UPDATED = '2026-05-06';
export const SITE_FOUNDING_DATE = '2025-09-01';

export const CONTACT = {
  email: 'info@vaultbit.es',
  whatsapp: '+34933236049',
  whatsappRaw: '34933236049',
  calCom: 'https://cal.com/infovaultbit/30min',
  linkedin: 'https://www.linkedin.com/in/danielbrosed/',
  locality: 'España',
  country: 'ES',
};

/**
 * Datos identificativos del titular (LSSI-CE art. 10). Fuente: alta censal (Modelo 036).
 */
export const LEGAL = {
  titular: 'Daniel Brosed Giral',
  nif: '18102130A',
  nombreComercial: 'VaultBit',
  domicilio: 'Avenida República Argentina 257, 08023 Barcelona',
  actividad: 'Consultoría tecnológica y de sistemas informáticos',
  iae: 'Epígrafe 765, sección 2ª del IAE (actividad profesional). CNAE 6290.',
};

/**
 * Enlace de WhatsApp con mensaje predefinido opcional (`?text=`).
 * Sin texto, devuelve el chat vacío.
 */
export const waLink = (text?: string) =>
  text
    ? `https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(text)}`
    : `https://wa.me/${CONTACT.whatsappRaw}`;

/**
 * Enlace de Cal.com con notas predefinidas opcionales (`?notes=`). Las notas
 * se prerrellenan en "Notas adicionales" y las ve el anfitrión en la reserva.
 */
export const calLink = (notes?: string) =>
  notes ? `${CONTACT.calCom}?notes=${encodeURIComponent(notes)}` : CONTACT.calCom;

// Contacto exclusivo para relaciones con inversores
export const INVESTOR_CONTACT = {
  primaryEmail: 'danielbrosed@vaultbit.es',
  fallbackEmail: 'info@vaultbit.es',
  calCom: 'https://cal.com/infovaultbit/30min',
  linkedin: 'https://www.linkedin.com/in/danielbrosed/',
};

export const FOUNDER = {
  id: `${SITE_URL}/#daniel-brosed`,
  name: 'Daniel Brosed Giral',
  givenName: 'Daniel',
  familyName: 'Brosed Giral',
  jobTitle: 'Fundador y Consultor Patrimonial Cripto',
  image: `${SITE_URL}/historia/cap-07-hoy.webp`,
  hasOccupation: {
    type: 'Occupation',
    name: 'Consultor de custodia y herencia de criptoactivos',
    occupationLocation: { type: 'Country', name: 'Spain' },
  },
  knowsLanguage: ['es', 'en'],
  description:
    'Fundador de VaultBit Advisory. Antes de dedicarse a la consultoría en custodia de criptoactivos, trabajó como auxiliar de enfermería en UCI rotando entre hospitales de Barcelona y Huesca. Guardaba bitcoin a largo plazo con sus ahorros hasta que perdió su frase semilla por una mala custodia en papel. Esa pérdida es el origen del proyecto.',
  knowsAbout: [
    'Custodia de criptoactivos',
    'Hardware wallets',
    'Multifirma (multisig)',
    'Shamir Secret Sharing',
    'Herencia digital de criptoactivos',
    'Trazabilidad fiscal de criptomonedas',
    'Modelo 721',
    'Reglamento MiCA',
  ],
  alumniOf: [
    {
      type: 'EducationalOrganization',
      name: 'Técnico en Cuidados Auxiliares de Enfermería',
    },
    {
      type: 'EducationalOrganization',
      name: 'Técnico Superior en Imagen para el Diagnóstico',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/in/danielbrosed/',
    'https://cal.com/infovaultbit',
    `${SITE_URL}/#historia`,
  ] as string[],
  nationality: 'ES',
  worksFor: `${SITE_URL}/#organization`,
};

export const ORGANIZATION = {
  id: `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: SITE_LEGAL_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description: SITE_DESCRIPTION,
  foundingDate: SITE_FOUNDING_DATE,
  slogan: SITE_TAGLINE,
  founder: FOUNDER,
  areaServed: 'ES',
  priceRange: '€€€',
  // Domicilio fiscal del titular (alta censal, Modelo 036).
  address: {
    streetAddress: 'Avenida República Argentina 257',
    postalCode: '08023',
    addressCountry: 'ES',
    addressLocality: 'Barcelona',
    addressRegion: 'Cataluña',
  },
  knowsAbout: [
    'Consultoría de custodia cripto',
    'Arquitectura de almacenamiento en frío',
    'Protocolos de herencia digital',
    'Shamir Secret Sharing',
    'Multifirma (multisig)',
    'Hardware wallets (Ledger, Trezor, Coldcard)',
    'Trazabilidad fiscal de criptoactivos',
    'Modelo 721 AEAT',
    'Tokenización Web3',
    'Reglamento MiCA',
    'Conocimiento Cero (Zero-Knowledge)',
  ],
  email: CONTACT.email,
  telephone: CONTACT.whatsapp,
  contactPoint: {
    contactType: 'customer service',
    email: CONTACT.email,
    telephone: CONTACT.whatsapp,
    availableLanguage: ['es', 'en'],
    areaServed: 'ES',
  },
  sameAs: [
    'https://www.linkedin.com/in/danielbrosed/',
    'https://cal.com/infovaultbit',
  ] as string[],
  disclaimer:
    'VaultBit Advisory no es asesor financiero registrado, ni despacho de abogados, ni entidad de custodia. La información publicada tiene carácter orientativo y técnico.',
};

export interface ServicePillar {
  slug: string;
  name: string;
  shortName: string;
  hero: boolean;
  priceFrom: number;
  priceMax?: number;
  priceUnit?: string;
  description: string;
  shortDescription: string;
  keywords: string[];
  /** Marca el producto estrella (solo Heritage Protocol). */
  productEstrella?: boolean;
  /** Mención breve del encadenado con descuento (solo Diagnóstico 360º). */
  discountChain?: string;
}

/**
 * Test de Autocustodia · lead magnet gratuito.
 * No es un servicio facturable, pero forma parte del funnel:
 * Reunión → Diagnóstico 360º → Protocolo de Herencia.
 */
export const TEST_AUTOCUSTODIA = {
  slug: 'test-autocustodia',
  name: 'Test de Autocustodia',
  url: '/diagnostico/',
  durationMinutes: 2,
  questions: 5,
  price: 0,
  deliverable: 'PDF personalizado con línea base de tu situación cripto',
  purpose: 'lead-magnet',
  description:
    'Cuestionario gratuito de 2 minutos. Cinco preguntas confidenciales que generan un informe PDF con tu línea base de seguridad, herencia y fiscalidad cripto. Es el primer paso: te da una primera foto de tu situación antes del Diagnóstico 360º de pago.',
} as const;

export const SERVICES: ServicePillar[] = [
  {
    slug: 'heritage-protocol',
    name: 'Protocolo de Herencia',
    shortName: 'Protocolo de Herencia',
    hero: true,
    productEstrella: true,
    priceFrom: 0,
    description:
      'El plan más completo para tus criptomonedas: las dejamos bien guardadas hoy y preparadas para tu familia el día de mañana. En tres niveles según tu caso (Esencial, Patrimonio y Legado), con un notario que da validez legal a la herencia. Nosotros nunca vemos tus claves.',
    shortDescription:
      'El plan completo, en tres niveles. Deja tus criptomonedas guardadas hoy y preparadas para tu familia mañana.',
    keywords: [
      'protocolo de herencia bitcoin España',
      'herencia de criptoactivos',
      'herencia de bitcoin España',
      'qué pasa con mi bitcoin si muero',
      'testamento bitcoin notario',
      'incapacitación cripto poder preventivo',
    ],
  },
  {
    slug: 'arquitectura-custodia',
    name: 'Arquitectura de Custodia Segura',
    shortName: 'Arquitectura de Custodia',
    hero: false,
    priceFrom: 0,
    description:
      'Diseño y configuración guiada de tu sistema de almacenamiento en frío. Carteras frías (Ledger, Trezor, Coldcard), firma múltiple y derivación a proveedores físicos para el resguardo de la frase semilla. Encaja dentro del Protocolo de Herencia o se contrata por separado.',
    shortDescription:
      'Diseñamos tu propia bóveda digital. Tú mantienes el control exclusivo.',
    keywords: [
      'arquitectura custodia bitcoin España',
      'firma múltiple bitcoin España',
      'custodia profesional bitcoin asesor',
      'configurar cartera fría segura',
    ],
  },
  {
    slug: 'diagnostico-360',
    name: 'Diagnóstico 360º',
    shortName: 'Diagnóstico 360º',
    hero: false,
    priceFrom: 0,
    discountChain:
      'El coste se descuenta entero de la puesta en marcha del Protocolo de Herencia si sigues adelante en los 30 días siguientes a la sesión.',
    description:
      'Sesión de consultoría real de 60-90 minutos con el fundador. Es el paso intermedio entre el test gratuito y el Protocolo de Herencia. Revisión completa de tu situación cripto, mapa patrimonial consolidado e informe técnico entregable en 48 horas con la recomendación del nivel del Protocolo de Herencia cuando aplica. Su coste se descuenta entero de la puesta en marcha del Protocolo de Herencia si sigues adelante en 30 días.',
    shortDescription:
      'El paso intermedio: una sesión seria antes de contratar el Protocolo de Herencia.',
    keywords: [
      'diagnóstico 360 cripto España',
      'auditoría patrimonial bitcoin',
      'sesión consultor cripto patrimonio',
      'mapa patrimonial criptoactivos',
    ],
  },
  {
    slug: 'conexion-fiscal',
    name: 'Conexión Fiscal y Cumplimiento',
    shortName: 'Conexión Fiscal',
    hero: false,
    priceFrom: 0,
    description:
      'Trazabilidad técnica de tus operaciones cripto. Conexión de solo lectura a tus plataformas de compraventa, recopilación de los archivos históricos e informe de trazabilidad que entregamos al fiscalista colegiado de la red para la presentación oficial ante Hacienda.',
    shortDescription:
      'Ordenamos el caos de tus operaciones. El fiscalista colegiado firma y presenta ante Hacienda.',
    keywords: [
      'trazabilidad cripto fiscalidad',
      'modelo 721 cripto consultor',
      'origen fondos cripto banco',
    ],
  },
  {
    slug: 'web3-b2b',
    name: 'Consultoría Web3 y Tokenización',
    shortName: 'Web3 para empresas',
    hero: false,
    priceFrom: 0,
    description:
      'Estudio de viabilidad técnica para empresas: tokenización de activos, diseño del modelo económico del token, análisis de impacto del reglamento MiCA y selección de proveedores de contratos inteligentes. Actuamos como consultores estratégicos del proyecto, no como desarrolladores ni emisores.',
    shortDescription:
      'Para empresas que quieren explorar Web3 con criterio técnico y regulatorio.',
    keywords: [
      'consultoría Web3 empresas España',
      'tokenización activos España',
      'cumplimiento MiCA empresa',
    ],
  },
];

export const COMPLIANCE_LINES = [
  {
    title: 'No somos asesor financiero',
    body: 'No recomendamos comprar, vender o mantener tokens específicos. No predecimos precios. No gestionamos fondos de terceros.',
  },
  {
    title: 'No somos despacho de abogados',
    body: 'No presentamos declaraciones de la renta a nuestro nombre, ni firmamos testamentos. Preparamos el terreno técnico para que los profesionales colegiados de la red firmen lo oficial.',
  },
  {
    title: 'No somos custodios centralizados',
    body: 'No conocemos, guardamos ni almacenamos las frases semilla o claves privadas de los clientes. Diseñamos arquitecturas para que tú mantengas el control exclusivo.',
  },
];
