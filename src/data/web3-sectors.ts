// Subpáginas de sector del servicio "Proyectos Web3" (pillar: /servicios/web3-b2b).
// Fuente única para los tiles de la sección Sectores y para las páginas
// /servicios/web3/<slug>. Copy en lenguaje MUY sencillo (regla 5-a-80): frases
// cortas, sin jerga, con la nota legal en plano. El meta (title/description) sí
// lleva keywords para SEO; el cuerpo visible es llano.

export interface Web3SectorStep {
  /** Nombre del icono (mapeado a un SVG en Web3SectorLayout). */
  icon: string;
  text: string;
}

export interface Web3Sector {
  slug: string;
  tileName: string;
  name: string;
  image: string;
  ogImage: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1Pre: string;
  h1Strong: string;
  subtitle: string;
  /** "Cómo funciona" en 3 pasos llanos. */
  steps: Web3SectorStep[];
  faqs: { q: string; a: string }[];
  keywords: string[];
}

export const WEB3_SECTORS: Web3Sector[] = [
  {
    slug: 'tokenizacion-inmobiliaria',
    tileName: 'Inmobiliario',
    name: 'Tokenización inmobiliaria',
    image: '/assets/web3/sector-inmobiliario.jpeg',
    ogImage: '/og/og-web3-tokenizacion-inmobiliaria.jpg',
    metaTitle: 'Tokenización inmobiliaria en España · VaultBit Advisory',
    metaDescription:
      'Repartir un inmueble en participaciones digitales para darle liquidez, hecho de forma legal y con un equipo de desarrollo de confianza que dirigimos nosotros.',
    eyebrow: 'Proyectos Web3 · Inmobiliario',
    h1Pre: 'Un piso, repartido en ',
    h1Strong: 'trozos.',
    subtitle:
      'Un piso entero cuesta mucho y cuesta venderlo. Si lo partimos en trozos pequeños, más gente puede comprar una parte y el dueño consigue su dinero antes.',
    steps: [
      { icon: 'house', text: 'Tienes un piso, o varios.' },
      { icon: 'blocks', text: 'Lo partimos en muchos trozos pequeños.' },
      { icon: 'people', text: 'Cada persona compra los trozos que quiere. Si el piso se alquila, cobra su parte.' },
    ],
    faqs: [
      { q: '¿Esto es legal?', a: 'Según el caso, la ley pone normas. Por eso lo primero es mirar si se puede hacer bien y de forma legal, antes de construir nada.' },
      { q: '¿Quién lo hace?', a: 'Nosotros lo diseñamos y lo dirigimos. El programa que lo mueve lo hace un equipo de confianza que elegimos y vigilamos.' },
      { q: '¿Cuánto tarda?', a: 'Ver si encaja, unas semanas. Construirlo, depende del proyecto. Te lo decimos claro en cada paso.' },
    ],
    keywords: ['tokenización inmobiliaria España', 'tokenizar un inmueble', 'real estate tokenization', 'fraccionar inmueble tokens'],
  },
  {
    slug: 'tokenizacion-financiera',
    tileName: 'Finanzas y tokenización',
    name: 'Tokenización financiera',
    image: '/assets/web3/sector-finanzas.jpeg',
    ogImage: '/og/og-web3-tokenizacion-financiera.jpg',
    metaTitle: 'Tokenización financiera y MiCA en España · VaultBit Advisory',
    metaDescription:
      'Préstamos, bonos y fondos en formato digital, con sus normas escritas para que se cumplan solas y un equipo de confianza que dirigimos nosotros.',
    eyebrow: 'Proyectos Web3 · Finanzas',
    h1Pre: 'El dinero y la deuda, en ',
    h1Strong: 'digital.',
    subtitle:
      'Un préstamo o una participación pueden vivir en internet, con sus normas escritas para que se cumplan solas. Nosotros lo preparamos y dirigimos a quien lo construye.',
    steps: [
      { icon: 'doc', text: 'Tienes un préstamo, un bono o un fondo.' },
      { icon: 'blocks', text: 'Lo pasamos a digital, con sus normas escritas.' },
      { icon: 'coins', text: 'Se compra, se vende y se paga sin tanto intermediario.' },
    ],
    faqs: [
      { q: '¿Necesito un permiso especial?', a: 'A veces sí. Según lo que hagas, la ley pide requisitos, y algunos llevan autorización. Lo miramos al principio, antes de poner nada en marcha.' },
      { q: '¿Vosotros lo emitís?', a: 'No. Nosotros lo diseñamos y lo dirigimos. La parte legal la firma quien tiene el título, y el programa lo hace un equipo que vigilamos.' },
      { q: '¿Por dónde se empieza?', a: 'Por mirar si tu idea encaja y aporta algo de verdad. Si no, te lo decimos y te ahorras el proyecto.' },
    ],
    keywords: ['tokenización financiera España', 'emisión de token MiCA', 'deuda tokenizada', 'stablecoin MiCA'],
  },
  {
    slug: 'energia',
    tileName: 'Energía',
    name: 'Energía',
    image: '/assets/web3/sector-energia.jpeg',
    ogImage: '/og/og-web3-energia.jpg',
    metaTitle: 'Web3 en el sector energético · Trazabilidad y certificados · VaultBit',
    metaDescription:
      'Dejar constancia de quién produce y quién consume la energía, y poder venderla entre vecinos, sin fiarse de una sola empresa. Diseño y dirección de proyecto.',
    eyebrow: 'Proyectos Web3 · Energía',
    h1Pre: 'De dónde viene cada ',
    h1Strong: 'kWh.',
    subtitle:
      'Dejar constancia de quién hizo la energía y quién la usó, sin tener que fiarse de una sola empresa. Lo preparamos y dirigimos a quien lo construye.',
    steps: [
      { icon: 'bolt', text: 'Produces o gastas energía.' },
      { icon: 'doc', text: 'Se apunta de dónde viene cada parte.' },
      { icon: 'people', text: 'Puedes venderla a un vecino o demostrar su origen, sin discusión.' },
    ],
    faqs: [
      { q: '¿Sustituye a lo que ya tengo?', a: 'No hace falta. Normalmente se junta con tus sistemas de ahora para añadir el registro común y la trazabilidad donde hace falta.' },
      { q: '¿Y si no me hace falta?', a: 'Te lo decimos a la primera. Si con una base de datos normal te vale, no te vendemos nada más complicado.' },
      { q: '¿Quién lo hace?', a: 'Nosotros lo diseñamos y lo dirigimos. El programa lo hace un equipo de confianza que elegimos y vigilamos.' },
    ],
    keywords: ['blockchain energía España', 'certificados de origen tokenizados', 'trazabilidad energética', 'mercado de energía entre pares'],
  },
  {
    slug: 'logistica-trazabilidad',
    tileName: 'Logística y trazabilidad',
    name: 'Logística y trazabilidad',
    image: '/assets/web3/sector-logistica.jpeg',
    ogImage: '/og/og-web3-logistica-trazabilidad.jpg',
    metaTitle: 'Trazabilidad de la cadena de suministro con Web3 · VaultBit',
    metaDescription:
      'Apuntar cada paso de un producto para saber de dónde viene y por dónde ha pasado, sin discusiones entre empresas. Diseño y dirección de proyecto.',
    eyebrow: 'Proyectos Web3 · Logística',
    h1Pre: 'Saber por dónde ha pasado cada ',
    h1Strong: 'cosa.',
    subtitle:
      'Apuntar cada paso de un producto sirve para saber de dónde viene y por dónde ha pasado, sin que cada empresa cuente su propia versión. Lo preparamos y dirigimos a quien lo construye.',
    steps: [
      { icon: 'box', text: 'Un producto sale de fábrica.' },
      { icon: 'route', text: 'Se apunta cada paso de su viaje.' },
      { icon: 'check', text: 'Al final, cualquiera puede comprobar por dónde pasó.' },
    ],
    faqs: [
      { q: '¿Tengo que cambiar a mis proveedores?', a: 'No de golpe. Se empieza por donde más aporta y se junta con lo que ya usáis.' },
      { q: '¿Quién lo construye?', a: 'Nosotros lo diseñamos y lo dirigimos. Lo construye un equipo de confianza que elegimos y vigilamos.' },
      { q: '¿Cuánto tarda una prueba?', a: 'Ver si encaja, unas semanas. Una prueba pequeña, después, según el caso.' },
    ],
    keywords: ['trazabilidad blockchain cadena de suministro', 'logística Web3 España', 'trazabilidad de producto', 'cadena de frío blockchain'],
  },
  {
    slug: 'seguros',
    tileName: 'Seguros',
    name: 'Seguros',
    image: '/assets/web3/sector-seguros.jpeg',
    ogImage: '/og/og-web3-seguros.jpg',
    metaTitle: 'Seguros paramétricos y contratos inteligentes · VaultBit Advisory',
    metaDescription:
      'Seguros que pagan solos cuando ocurre algo que se puede medir, sin papeleo ni peritaje. Diseño y dirección de proyecto con equipo de confianza.',
    eyebrow: 'Proyectos Web3 · Seguros',
    h1Pre: 'Seguros que pagan ',
    h1Strong: 'solos.',
    subtitle:
      'Si pasa algo que se puede medir, como un vuelo que se retrasa o un terremoto fuerte, el seguro paga al momento, sin papeleo. Nosotros lo preparamos y dirigimos a quien lo construye.',
    steps: [
      { icon: 'shield', text: 'Contratas un seguro con una condición clara.' },
      { icon: 'eye', text: 'Una fuente fiable comprueba si ocurre.' },
      { icon: 'coins', text: 'Si ocurre, te paga solo, sin papeleo.' },
    ],
    faqs: [
      { q: '¿Vale para cualquier seguro?', a: 'Para los que dependen de algo que se puede medir y comprobar. Para lo que es opinión, no. Lo vemos en la primera charla.' },
      { q: '¿Hace falta una aseguradora?', a: 'La parte de seguros la lleva quien tiene el título. Nosotros diseñamos y dirigimos la parte técnica.' },
      { q: '¿Quién lo construye?', a: 'Un equipo de confianza que elegimos y vigilamos.' },
    ],
    keywords: ['seguros paramétricos blockchain', 'contratos inteligentes seguros', 'insurtech Web3 España', 'oráculos seguros'],
  },
  {
    slug: 'propiedad-intelectual',
    tileName: 'Propiedad intelectual y royalties',
    name: 'Propiedad intelectual',
    image: '/assets/web3/sector-ip.jpeg',
    ogImage: '/og/og-web3-propiedad-intelectual.jpg',
    metaTitle: 'Propiedad intelectual y royalties en cadena · VaultBit Advisory',
    metaDescription:
      'Dejar claro quién creó algo y repartir el dinero que genera de forma automática y transparente. Diseño y dirección de proyecto con equipo de confianza.',
    eyebrow: 'Proyectos Web3 · Propiedad intelectual',
    h1Pre: 'Quién lo hizo, y quién ',
    h1Strong: 'cobra.',
    subtitle:
      'Dejar claro quién creó algo y repartir el dinero que genera de forma automática, sin líos. Lo preparamos y dirigimos a quien lo construye.',
    steps: [
      { icon: 'pen', text: 'Creas algo: una canción, un diseño, un texto.' },
      { icon: 'blocks', text: 'Se registra que es tuyo.' },
      { icon: 'coins', text: 'Cuando genera dinero, se reparte solo entre quien toca.' },
    ],
    faqs: [
      { q: '¿Sustituye al registro de toda la vida?', a: 'No. Es una capa más que convive con los registros oficiales. Lo legal lo firma quien tiene el título.' },
      { q: '¿Quién lo hace?', a: 'Nosotros lo diseñamos y lo dirigimos. Lo construye un equipo de confianza que elegimos y vigilamos.' },
      { q: '¿Sirve para música, arte o programas?', a: 'Para cualquier obra con dueños y dinero que repartir. Lo vemos en la primera charla.' },
    ],
    keywords: ['royalties blockchain', 'registro de autoría Web3', 'tokenización propiedad intelectual', 'reparto de royalties automático'],
  },
];

export const WEB3_SECTOR_SLUGS = WEB3_SECTORS.map((s) => s.slug);
