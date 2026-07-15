export interface NavItem {
  label: string;
  href: string;
  highlight?: boolean;
  external?: boolean;
}

export const NAV_PRIMARY: NavItem[] = [
  { label: 'Historia', href: '/historia' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Recursos', href: '/recursos' },
  { label: 'Inversores', href: '/inversores' },
];

export const NAV_CTA: NavItem = {
  label: 'Cuéntame tu caso',
  href: 'https://cal.com/infovaultbit/30min',
  highlight: true,
  external: true,
};

export const NAV_FOOTER_SERVICIOS: NavItem[] = [
  { label: 'Protocolo de Herencia', href: '/servicios/heritage-protocol' },
  { label: 'Diagnóstico 360º', href: '/servicios/diagnostico-360' },
  { label: 'Arquitectura de Custodia', href: '/servicios/arquitectura-custodia' },
  { label: 'Fiscalidad cripto', href: '/servicios/conexion-fiscal' },
  { label: 'Web3 para empresas', href: '/servicios/web3-b2b' },
];

export const NAV_FOOTER_EMPRESA: NavItem[] = [
  { label: 'La historia', href: '/historia' },
  { label: 'Red de profesionales', href: '/partners' },
  { label: 'Recursos y guías', href: '/recursos' },
  { label: 'Newsletter', href: '/newsletter' },
  { label: 'Hablar 30 minutos', href: 'https://cal.com/infovaultbit/30min', external: true },
  { label: 'LinkedIn de Daniel', href: 'https://www.linkedin.com/in/danielbrosed/', external: true },
];

export const NAV_FOOTER_LEGAL: NavItem[] = [
  { label: 'Aviso legal', href: '/aviso-legal' },
  { label: 'Política de privacidad', href: '/privacidad' },
  { label: 'Política de cookies', href: '/cookies' },
];
