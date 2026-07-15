// Contenido detallado de cada pilar de servicio.
// Datos extraídos del Manual Operativo y del Manual de Líneas Rojas.

import { waLink, calLink } from './organization';

/**
 * Tier individual del Heritage Protocol (producto estrella).
 * Solo se aplica al servicio `heritage-protocol`. Cada tier es un nivel
 * del mismo producto, no un servicio independiente.
 */
export interface HeritageTier {
  id: 'foundation' | 'heritage' | 'family-office';
  name: string;
  /** Badge visible en la card. Solo Heritage lleva "Más elegido". */
  badge?: string;
  /** Patrimonio típico, frase corta. Ej.: "500.000 € – 2.000.000 €". */
  patrimonyRange: string;
  /** Ancla numérica interna. 'custom' en Family Office. */
  setupAnchor: number | 'custom';
  /** Cómo se muestra el setup en la UI. Ej.: "Precio a consultar" o "A medida · precio a consultar". */
  setupDisplay: string;
  /** Cómo se muestra el retainer anual. */
  retainerDisplay: string;
  /** Esquema Shamir típico del tier. Ej.: "2-de-3" o "Custom multi-ubicación + multifirma". */
  shamirScheme: string;
  hardware: {
    /** Descripción corta del hardware base del tier. */
    label: string;
    /** Mención discreta a Yoseyomo en Heritage y Family Office. Vacío en Foundation. */
    yoseyomoNote?: string;
  };
  /** 4-6 bullets cortos: lo que entra en el tier. */
  includes: string[];
  /** Frase de una línea. Ej.: "Para quien quiere protocolo robusto sin sobredimensionar". */
  idealFor: string;
  /** Solo en Family Office: línea muy discreta sobre Inheritans. */
  inheritansNote?: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  shortName: string;
  hero: boolean;
  eyebrow: string;
  tagline: string;
  /** Tagline más humano para la home tras la historia. Si falta, usa `tagline`. */
  taglineHome?: string;
  intro: string;
  /** Identificador del icono Lucide-style: shield, vault, compass, file-check, network */
  icon: 'heritage' | 'vault' | 'compass' | 'fiscal' | 'web3';
  /** Pilar principal (mostrar en home) o servicio adicional (solo en /servicios). */
  category: 'core' | 'addon';
  /** Marcador de producto estrella. Solo el Heritage Protocol lo lleva. */
  productEstrella?: boolean;
  /** Imagen para el hero del servicio (estética dark + naranja). Opcional. */
  heroImage?: string;
  heroImageAlt?: string;
  whoFor: string[];
  includes: string[];
  excludes: string[];
  process: { step: string; title: string; body: string }[];
  redLine: { title: string; body: string };
  partnerHandoff?: string;
  faqs: { q: string; a: string }[];
  keywords: string[];
  /** Mensajes predefinidos de los CTAs: texto de WhatsApp y notas de Cal.com. */
  lead?: { whatsapp: string; notes: string };
  /** Imagen Open Graph propia (1200x630, en /public) para compartir en redes/WhatsApp. */
  ogImage?: string;
  /** Precio interno solo para schema-internal; no se muestra en UI */
  priceFromHidden?: number;
  /** Tiers internos del producto. Solo el Heritage Protocol los define. */
  tiers?: HeritageTier[];
  /**
   * Configuración del layout "Frontier" (estética cromada + parallax para captar
   * founders Web3). Solo lo define `web3-b2b`; el resto de servicios lo ignora y
   * siguen usando ServiceLayout. Todos los campos son opcionales.
   */
  frontier?: {
    /** Texto del titular ANTES del wordmark (o titular completo si no hay imagen). */
    hook: string;
    /** Segmento final del titular, tras el wordmark (resaltado en naranja). */
    hookAccent: string;
    /** Wordmark cromado como imagen (p.ej. "WEB3"). Si falta, se usa texto cromado en CSS. */
    wordmarkImage?: string;
    /** Texto alternativo del wordmark (lo que "dice" la imagen, para SEO/accesibilidad). */
    wordmarkAlt?: string;
    /** Subtítulo bajo el titular. Si falta, usa `tagline`. */
    heroSubtitle?: string;
    /**
     * Base del set de imágenes responsive del hero (sin sufijo `-1280.webp`).
     * Mientras no existan las imágenes generadas por IA, dejar sin definir: el
     * hero usa un fondo atmosférico hecho en CSS (gradientes + glow ámbar).
     */
    heroImageBase?: string;
    /** Título de la sección "qué proyectos buscamos". */
    intentTitle?: string;
    /** Tipos de proyecto que buscamos. */
    projectTypes?: { label: string; blurb: string }[];
    /** Roles de la red de partners curados que ejecutan el desarrollo. */
    partnerTiers?: { name: string; role: string; icon?: string }[];
    /** Criterios / plazos en cifras (se muestran al final del proceso). */
    criteria?: { label: string; value: string }[];
    /** Sectores donde la tokenización aporta valor (sección Sectores). */
    sectors?: { name: string; blurb: string; image?: string }[];
  };
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'heritage-protocol': {
    slug: 'heritage-protocol',
    ogImage: '/og/og-heritage-protocol.jpg',
    lead: {
      whatsapp: 'Hola, vengo de la web de Vaultbit. Me interesa el Protocolo de Herencia para dejar mis criptomonedas protegidas y preparadas para mi familia. ¿Me contáis cómo sería en mi caso?',
      notes: 'Interés: Protocolo de Herencia. Proteger y preparar la herencia de mis criptoactivos.',
    },
    name: 'Protocolo de Herencia',
    shortName: 'Protocolo de Herencia',
    hero: true,
    icon: 'heritage',
    category: 'core',
    productEstrella: true,
    heroImage: '/assets/services/heritage-protocol.png',
    heroImageAlt: 'Composición cinematográfica del Protocolo de Herencia: cartera fría, frase semilla grabada en placas metálicas y documento notarial sobre fondo oscuro con luz cálida',
    eyebrow: 'El plan completo',
    tagline: 'Para que tus criptomonedas pasen a tu familia con plena validez, también si dejas de poder decidir tú mismo.',
    taglineHome: 'Para que el día que tú no estés, tu familia pueda recibir tu bitcoin sin pelearse con ningún aparato.',
    intro:
      'El Protocolo de Herencia deja tu bitcoin guardado hoy y preparado para que tu familia pueda recibirlo mañana. Cubre las tres cosas que pueden separarte de tus criptomonedas: que faltes, que un día sigas aquí pero ya no puedas decidir, o que quieras dejarlo todo atado en vida. La parte técnica la montamos nosotros, para que no se pierda ninguna clave: dividimos tu frase semilla en varias partes con el método Shamir, escribimos un Manual del Heredero que tu familia pueda seguir aunque no sepa de tecnología, y nos sentamos con un notario colegiado para que quede recogido en tu testamento y, cuando hace falta, en tu poder preventivo. Tú nunca nos das tus claves: no las vemos en ningún momento.',
    whoFor: [
      'Personas que tienen bitcoin a largo plazo y un patrimonio de entre 100.000 € y 5.000.000 €.',
      'Familias que no quieren perder el acceso a las claves el día que el titular falte o ya no pueda decidir.',
      'Personas con criptomonedas cuya pareja o hijos no se manejan con la tecnología.',
      'Grandes patrimonios familiares con un relevo generacional previsto en los próximos diez años.',
    ],
    includes: [
      'Repartimos tu frase semilla en varias partes en tu propio dispositivo (método Shamir).',
      'Escribimos el Manual del Heredero: un documento paso a paso, sin tecnicismos, para tu familia.',
      'Coordinamos con un notario o abogado colegiado de la red.',
      'Dejamos el protocolo recogido dentro de tu testamento.',
      'Previsión por incapacitación: coordinamos con el notario el poder preventivo cuando hace falta.',
      'Revisión anual opcional para mantenerlo al día si cambia tu familia o tu patrimonio.',
    ],
    excludes: [
      'No otorgamos fe pública: la validez jurídica del testamento la firma el notario colegiado de la red.',
      'No custodiamos los fragmentos de tu frase semilla en nuestras instalaciones.',
      'No prestamos asesoramiento sobre el reparto sucesorio más allá de la transmisión técnica de las claves.',
    ],
    process: [
      {
        step: '01',
        title: 'Primero, un Diagnóstico 360º',
        body: 'Antes de tocar nada, una sesión de Diagnóstico 360º revisa tu patrimonio, tus plataformas de compraventa, tus carteras y a quién quieres dejárselo. Su coste se descuenta entero de la puesta en marcha del Protocolo de Herencia si sigues adelante en los 30 días siguientes.',
      },
      {
        step: '02',
        title: 'Elegimos el nivel que te encaja',
        body: 'Esencial, Patrimonio o Legado. La decisión depende de cuánto bitcoin tienes y de lo complejo que sea el reparto entre tus herederos o la previsión por si un día ya no puedes decidir. Te recomendamos el nivel en el informe del Diagnóstico.',
      },
      {
        step: '03',
        title: 'Repartimos tu frase semilla (método Shamir)',
        body: 'Dividimos tu frase semilla en varias partes en tu propio dispositivo: 2-de-3 en Esencial, 3-de-5 en Patrimonio y un esquema a medida en Legado. Las palabras solo las ves tú; nosotros no las vemos en ningún momento.',
      },
      {
        step: '04',
        title: 'Escribimos el Manual del Heredero',
        body: 'Un documento claro, sin jerga, que explica a tu familia (o a la persona que decidiría por ti si tú no pudieras) cómo recuperar el acceso el día de mañana. Está escrito para alguien que no sabe de tecnología.',
      },
      {
        step: '05',
        title: 'Nos sentamos con tu notario',
        body: 'Coordinamos una reunión, presencial o por videollamada, con el notario colegiado de la red para dejar el protocolo recogido en tu testamento y, cuando hace falta, en tu poder preventivo.',
      },
      {
        step: '06',
        title: 'Lo grabamos en placas metálicas',
        body: 'Las partes se graban en placas metálicas que aguantan el fuego, el agua y la corrosión. Acero en Esencial; disco YSYM1024 en acero náutico en Patrimonio; disco YSYM2048 en titanio aeroespacial en Legado. Las placas las fabrica Yoseyomo, colaborador especializado de Vaultbit.',
      },
    ],
    redLine: {
      title: 'Conocimiento Cero y profesionales colegiados',
      body: 'Vaultbit diseña la estructura técnica del protocolo y nunca conoce, ve ni almacena tu frase semilla. La validez jurídica de tu testamento, poder preventivo o tutela la firma siempre el notario o abogado colegiado de la red. Es un servicio conjunto: nosotros aseguramos que las claves no se pierdan; el profesional colegiado asegura que tus herederos (o la persona designada en caso de incapacitación) puedan reclamarlas legalmente.',
    },
    partnerHandoff:
      'Trabajamos con notarios, abogados de sucesiones y asesorías fiscales especializados en la herencia de Bitcoin y criptoactivos. Cuando llega la fase legal y fiscal, organizamos una reunión conjunta para que tú no tengas que explicar dos veces lo mismo. La validez jurídica y la firma las pone siempre el profesional colegiado independiente; Vaultbit no presta asesoramiento jurídico ni fiscal.',
    faqs: [
      {
        q: '¿Qué pasa con mi bitcoin si me muero?',
        a: 'Eso es justo lo que dejamos resuelto. Tu familia recibe las partes de la frase semilla y un manual claro para recuperar el acceso, todo recogido en tu testamento con un notario colegiado. Sin ese trabajo previo, cuando alguien falta, el bitcoin se queda dentro del aparato y nadie puede sacarlo nunca.',
      },
      {
        q: '¿Y si sigo vivo pero un día ya no puedo decidir?',
        a: 'También lo cubrimos, y casi nadie lo piensa. Si un accidente o una enfermedad te dejan sin poder decidir, coordinamos con el notario un poder preventivo para que la persona que tú elijas pueda actuar sobre tu bitcoin de forma legal. No es solo qué pasa si faltas: también qué pasa si sigues aquí pero ya no puedes.',
      },
      {
        q: '¿Cómo accede mi pareja o mis hijos a mi cartera fría?',
        a: 'Siguiendo el Manual del Heredero. Ahí está, en lenguaje de persona normal, dónde están las partes de la frase semilla, cómo se juntan y cómo se recupera el acceso. Por eso el reparto en partes y el manual van siempre juntos: de nada sirve el papeleo si luego nadie puede abrir el aparato.',
      },
      {
        q: '¿En qué se diferencian los tres niveles?',
        a: 'En cómo se reparte la frase semilla, en las placas metálicas donde se graban las partes, en el detalle del Manual del Heredero y en cada cuánto lo revisamos. Esencial: reparto 2-de-3 con placa de acero, para patrimonios de 100.000 € a 500.000 €. Patrimonio: 3-de-5 con disco YSYM1024 en acero náutico, de 500.000 € a 2.000.000 €. Legado: esquema a medida con disco YSYM2048 en titanio aeroespacial, por encima de 2.000.000 €.',
      },
      {
        q: '¿Qué es eso de "dividir la frase semilla en partes"?',
        a: 'Tu frase semilla son las palabras que dan acceso a tu bitcoin. En vez de dejarlas en un solo papel (que se puede perder, como me pasó a mí), las dividimos en varias partes con el método Shamir. Basta con reunir unas pocas para recuperar el acceso, así que perder o que te roben una sola parte no compromete nada.',
      },
      {
        q: '¿Mi familia necesita saber de cripto?',
        a: 'No. El Manual del Heredero está escrito paso a paso para alguien que no ha tocado esto en su vida. Incluso le decimos a quién acudir si tiene dudas.',
      },
      {
        q: '¿Vosotros veis mis claves en algún momento?',
        a: 'Nunca. Tú generas y guardas las palabras en tu propio dispositivo; nosotros solo te guiamos. No te las pedimos, no las apuntamos y no las guardamos. El día que tu familia las necesite, las usa con el manual; nosotros seguimos sin verlas.',
      },
      {
        q: '¿Y si dentro de unos años quiero cambiar algo?',
        a: 'La revisión anual lo contempla: placas nuevas, herederos nuevos, otra situación patrimonial… todo se actualiza sin rehacer el testamento desde cero.',
      },
    ],
    keywords: [
      'protocolo de herencia bitcoin España',
      'herencia de bitcoin heredar criptomonedas',
      'qué pasa con mi bitcoin si me muero',
      'testamento criptomonedas notario España',
      'incapacitación cripto poder preventivo',
      'cómo acceden mis herederos a la frase semilla',
      'abogado herencia bitcoin',
      'asesoría legal criptomonedas herencia',
    ],
    tiers: [
      {
        id: 'foundation',
        name: 'Esencial',
        patrimonyRange: '100.000 € – 500.000 €',
        setupAnchor: 1490,
        setupDisplay: '',
        retainerDisplay: '',
        shamirScheme: '2-de-3',
        hardware: {
          label: 'Placa de acero (Cryptotag, Material Bitcoin o equivalente)',
        },
        includes: [
          'Reparto de tu frase semilla 2-de-3 en tu propio dispositivo (no vemos tus claves).',
          'Manual del Heredero en versión estándar.',
          'Coordinación con el notario de la red para recogerlo en tu testamento.',
          'Una revisión al año incluida si mantienes la cuota anual.',
        ],
        idealFor: 'Para quien empieza a dejar su bitcoin atado con un protocolo sólido, sin pasarse de lo que necesita.',
      },
      {
        id: 'heritage',
        name: 'Patrimonio',
        badge: 'El más elegido',
        patrimonyRange: '500.000 € – 2.000.000 €',
        setupAnchor: 4990,
        setupDisplay: '',
        retainerDisplay: '',
        shamirScheme: '3-de-5',
        hardware: {
          label: 'Disco YSYM1024 en acero náutico 316L · una unidad por parte',
          yoseyomoNote: 'Placas fabricadas por Yoseyomo, colaborador especializado de Vaultbit.',
        },
        includes: [
          'Reparto de tu frase semilla 3-de-5, con las partes repartidas en varios sitios.',
          'Manual del Heredero personalizado para cada heredero.',
          'Coordinación con notario y fiscalista colegiados de la red.',
          'Dos revisiones al año y una prueba de vida cada seis meses (con cuota anual).',
          'Disco YSYM1024 en acero náutico, una unidad por parte.',
        ],
        idealFor: 'El nivel más elegido. Para patrimonios ya consolidados donde la herencia es el problema principal a resolver.',
      },
      {
        id: 'family-office',
        name: 'Legado',
        patrimonyRange: 'Más de 2.000.000 €',
        setupAnchor: 'custom',
        setupDisplay: '',
        retainerDisplay: '',
        shamirScheme: 'A medida, en varias ubicaciones + firma múltiple opcional',
        hardware: {
          label: 'Disco YSYM2048 en titanio grado 5 aeroespacial · Red Dot Award 2025',
          yoseyomoNote: 'Placas fabricadas por Yoseyomo, colaborador especializado de Vaultbit.',
        },
        includes: [
          'Estructura de herencia a medida (varias ubicaciones y firma múltiple según el caso).',
          'Manual del Heredero en versión ejecutiva, con un informe para el familiar más cercano.',
          'Equipo coordinado de notario, fiscalista y abogado de patrimonio.',
          'Revisiones trimestrales presenciales si lo pides.',
          'Disco YSYM2048 en titanio aeroespacial.',
        ],
        idealFor: 'Grandes patrimonios familiares con un relevo generacional previsto y varias personas implicadas.',
        inheritansNote:
          'Incluye el servicio de mensajes para los tuyos (mensajes póstumos) de nuestro colaborador Yoseyomo, en versión vitalicia.',
      },
    ],
  },

  'arquitectura-custodia': {
    slug: 'arquitectura-custodia',
    ogImage: '/og/og-arquitectura-custodia.jpg',
    lead: {
      whatsapp: 'Hola, vengo de la web de Vaultbit. Quiero diseñar una custodia segura para mis criptomonedas (almacenamiento en frío y multifirma). ¿Me ayudáis?',
      notes: 'Interés: Arquitectura de Custodia (almacenamiento en frío y multifirma).',
    },
    name: 'Arquitectura de Custodia',
    shortName: 'Arquitectura de Custodia',
    hero: false,
    icon: 'vault',
    category: 'core',
    heroImage: '/assets/services/arquitectura-custodia.png',
    heroImageAlt: 'Detalle macro de una cartera fría sobre superficie metálica oscura, con luz cálida cinematográfica',
    eyebrow: 'Cómo guardarlo bien',
    tagline: 'Diseñamos tu bóveda para las claves de tu bitcoin, en digital y, si hace falta, también física. El control es solo tuyo.',
    taglineHome: 'Para guardar tus claves de forma segura, con copias bien repartidas, y no perder nada por un descuido.',
    intro:
      'La mayoría de pérdidas patrimoniales en cripto no son por hackeos: son por una mala custodia en casa. Una cartera fría sin copias de respaldo, una frase semilla en un solo lugar, ningún protocolo de recuperación probado. Es justo lo que resolvemos.',
    whoFor: [
      'Inversores que ya tienen cripto pero dudan si su custodia es robusta.',
      'Personas que han comprado en plataformas de compraventa y quieren pasar a una custodia profesional bajo su propio control.',
      'Tesorerías corporativas que necesitan firma múltiple con segregación de funciones.',
      'Cualquier perfil que quiera dormir tranquilo sabiendo que su seguridad no depende de una sola variable.',
    ],
    includes: [
      'Análisis de riesgo: capital a proteger, conocimientos técnicos y frecuencia de operación.',
      'Recomendación específica de cartera fría (Ledger, Trezor, Coldcard) según tu caso.',
      'Diseño de sistemas con firma múltiple (2-de-3, 3-de-5) sobre software auditado tipo Gnosis Safe o Sparrow.',
      'Sesión guiada de inicialización de tu dispositivo bajo protocolo de Conocimiento Cero.',
      'Asesoramiento para contratar cajas de seguridad y bóvedas físicas certificadas para el resguardo de los fragmentos de frase semilla.',
    ],
    excludes: [
      'No compramos la cartera en tu nombre ni la inicializamos en nuestra oficina.',
      'No guardamos copias de tu frase semilla "por si la pierdes".',
      'No conocemos en ningún momento tus palabras de recuperación.',
    ],
    process: [
      {
        step: '01',
        title: 'Diagnóstico de la situación actual',
        body: 'Auditamos cómo tienes hoy las criptomonedas: dónde están, qué dispositivos usas, qué copias de respaldo existen, qué tan recuperable es el acceso si te pasa algo.',
      },
      {
        step: '02',
        title: 'Diseño del sistema',
        body: 'Te entregamos una propuesta adaptada a tu caso: cartera fría recomendada, configuración con firma múltiple cuando aplica, distribución geográfica de copias y protocolo de prueba de recuperación.',
      },
      {
        step: '03',
        title: 'Sesión guiada de inicialización',
        body: 'Videollamada o presencial. Tú haces todo en tu dispositivo. Nosotros te guiamos paso a paso. Las palabras solo las ves tú en pantalla.',
      },
      {
        step: '04',
        title: 'Prueba de recuperación',
        body: 'No damos por buena la configuración hasta haber hecho una prueba real de recuperación con un dispositivo limpio. Si la frase semilla funciona, el sistema funciona.',
      },
      {
        step: '05',
        title: 'Documentación final',
        body: 'Entregamos manual del sistema, ubicación de las copias, plan de contingencia y siguiente revisión recomendada.',
      },
    ],
    redLine: {
      title: 'Conocimiento Cero estricto',
      body: 'En ningún momento del proceso conocemos, vemos ni almacenamos tus palabras de recuperación. El cliente es siempre el único que ve la frase semilla en la pantalla de su dispositivo. No es una opción operativa: es protocolo inquebrantable.',
    },
    faqs: [
      {
        q: '¿Trezor, Ledger o Coldcard?',
        a: 'Depende del caso. Ledger es excelente para varias criptomonedas en general; Coldcard es nuestra recomendación si solo guardas Bitcoin y quieres máxima protección; Trezor para quien prefiere código abierto auditable. Lo decidimos juntos en la sesión de diagnóstico.',
      },
      {
        q: '¿Y si me da miedo configurarla yo solo?',
        a: 'Por eso ofrecemos la sesión guiada, pero la guía es siempre verbal. El protocolo de Conocimiento Cero existe precisamente para que no te pase nada por delegar mal la custodia. Lo vivirás como un proceso ordenado, no como un examen.',
      },
      {
        q: '¿La firma múltiple merece la pena para mí?',
        a: 'Si tu patrimonio en cripto supera los 50.000-100.000 €, sí. Si es menor, una cartera fría bien custodiada con copia de respaldo distribuida puede ser suficiente. Lo decidimos juntos en el diagnóstico.',
      },
    ],
    keywords: [
      'arquitectura custodia bitcoin España',
      'firma múltiple multifirma España',
      'cartera fría ledger trezor coldcard configuración',
      'custodia profesional bitcoin',
    ],
  },

  'diagnostico-360': {
    slug: 'diagnostico-360',
    ogImage: '/og/og-diagnostico-360.jpg',
    lead: {
      whatsapp: 'Hola, vengo de la web de Vaultbit. Me gustaría hacer el Diagnóstico 360º de mi situación cripto.',
      notes: 'Interés: Diagnóstico 360º. Revisión completa de mi situación cripto.',
    },
    name: 'Diagnóstico 360º',
    shortName: 'Diagnóstico 360º',
    hero: false,
    icon: 'compass',
    category: 'core',
    heroImage: '/assets/services/diagnostico-360.png',
    heroImageAlt: 'Interior cinematográfico oscuro con luz cálida ambiental: escritorio de trabajo donde se realiza una sesión privada de diagnóstico patrimonial',
    eyebrow: 'Antes del Protocolo de Herencia',
    tagline: 'Una sesión real de una hora donde auditamos tu situación cripto antes de proponer ningún sistema.',
    taglineHome: 'Revisamos a fondo cómo tienes hoy tu bitcoin y te decimos, claro, qué conviene hacer.',
    intro:
      'El Diagnóstico 360º es la sesión seria que va después del test gratuito y antes del Protocolo de Herencia. Una hora larga en la que repasamos a fondo cómo tienes hoy tu bitcoin, dónde están los riesgos y qué sistema te encaja mejor. Su coste se descuenta entero de la puesta en marcha del Protocolo de Herencia si sigues adelante en los 30 días siguientes.',
    whoFor: [
      'Quien ya ha hecho el Test de Autocustodia gratuito y quiere profundizar antes de contratar.',
      'Quien tiene cripto repartido en varias plataformas de compraventa y carteras y quiere consolidar con criterio.',
      'Quien va a hacer un movimiento patrimonial grande (herencia, divorcio, venta, inversión) y quiere preparar el terreno con un consultor.',
      'Quien acaba de heredar criptoactivos y necesita una auditoría antes de tocar nada.',
    ],
    includes: [
      'Cuestionario previo confidencial para ordenar tu información antes de la sesión.',
      'Sesión de 60-90 minutos con el fundador (videollamada o presencial bajo solicitud).',
      'Auditoría completa del estado actual: cuentas, exchanges, carteras, nivel de seguridad y herederos previstos.',
      'Mapa patrimonial cripto consolidado en un formato auditable.',
      'Informe técnico entregable en 48 horas con la recomendación del nivel del Protocolo de Herencia cuando aplica.',
      'El coste se descuenta entero de la puesta en marcha del Protocolo de Herencia si sigues adelante en 30 días.',
    ],
    excludes: [
      'No te decimos qué cripto comprar para "ganar más dinero".',
      'No tomamos el control de tus dispositivos ni hacemos transferencias en tu nombre.',
      'No prestamos asesoramiento financiero sobre el rendimiento de tu cartera.',
    ],
    process: [
      {
        step: '01',
        title: 'Reserva de la sesión',
        body: 'Reservas tu Diagnóstico 360º en el calendario del fundador. Recibes el cuestionario previo en cuanto se confirma la sesión.',
      },
      {
        step: '02',
        title: 'Cuestionario previo confidencial',
        body: 'Antes de la sesión rellenas el cuestionario: exchanges donde tienes cuenta, carteras que recuerdas, periodos fiscales pendientes, herederos previstos y capital aproximado por activo.',
      },
      {
        step: '03',
        title: 'Sesión 60-90 min',
        body: 'Videollamada o presencial. Recorremos tu situación, identificamos los riesgos críticos, dibujamos el mapa patrimonial y vemos qué nivel del Protocolo de Herencia encaja con tu caso.',
      },
      {
        step: '04',
        title: 'Informe entregable en 48 h',
        body: 'Recibes un informe con el mapa patrimonial, los puntos críticos, la hoja de ruta priorizada y la recomendación del nivel del Protocolo de Herencia cuando tiene sentido.',
      },
      {
        step: '05',
        title: 'Descuento si sigues adelante',
        body: 'Si en los 30 días siguientes contratas el Protocolo de Herencia, el importe del Diagnóstico se descuenta entero de la puesta en marcha del nivel elegido.',
      },
    ],
    redLine: {
      title: 'Sesión profesional, no asesoramiento financiero',
      body: 'Nuestro mandato es la estructura técnica, no el rendimiento. Decidas comprar Bitcoin, Ethereum o stablecoins, lo que protegemos es el sistema donde lo guardas, no la rentabilidad de tus decisiones de inversión.',
    },
    faqs: [
      {
        q: '¿Es lo mismo que el Test de Autocustodia gratuito?',
        a: 'No. El test gratuito es un cuestionario de 2 minutos que te entrega un PDF con tu línea base. El Diagnóstico 360º es una sesión real de una hora con el fundador donde miramos todo a fondo y te entregamos un informe técnico. El test es la entrada; el Diagnóstico es el paso serio antes del Protocolo de Herencia.',
      },
      {
        q: '¿El coste se descuenta del Protocolo de Herencia?',
        a: 'Sí, entero. Si en los 30 días siguientes a la sesión contratas cualquier nivel del Protocolo de Herencia, el importe del Diagnóstico se descuenta de la puesta en marcha. En la práctica, el Diagnóstico sale gratis para quien sigue adelante.',
      },
      {
        q: '¿Tengo que tener mucho cripto para que merezca la pena?',
        a: 'A partir de unos 100.000 € en criptoactivos el Diagnóstico ya tiene retorno claro. Por debajo, una cartera fría bien custodiada con copia de respaldo distribuida suele bastar; te lo decimos en la sesión sin venderte algo que no necesitas.',
      },
    ],
    keywords: [
      'diagnóstico 360 cripto España',
      'auditoría patrimonial bitcoin',
      'sesión consultor cripto patrimonio',
      'mapa patrimonial criptoactivos',
    ],
  },

  'conexion-fiscal': {
    slug: 'conexion-fiscal',
    ogImage: '/og/og-conexion-fiscal.jpg',
    lead: {
      whatsapp: 'Hola, vengo de la web de Vaultbit. Necesito ordenar la fiscalidad de mis operaciones cripto (trazabilidad y modelo 721). ¿Me ayudáis?',
      notes: 'Interés: Conexión Fiscal y Cumplimiento (trazabilidad, modelo 721).',
    },
    name: 'Conexión Fiscal y Cumplimiento',
    shortName: 'Conexión Fiscal',
    hero: false,
    icon: 'fiscal',
    category: 'addon',
    heroImage: '/assets/services/conexion-fiscal.png',
    heroImageAlt: 'Documentos financieros y dispositivos de custodia bitcoin sobre escritorio oscuro, iluminados con luz cálida',
    eyebrow: 'Trazabilidad técnica',
    tagline: 'Ponemos en orden todas tus operaciones con criptomonedas. Un fiscalista colegiado las firma y las presenta.',
    intro:
      'La Agencia Tributaria sabe que tienes cripto. Lo que necesita es que tú también lo tengas en orden, con una trazabilidad clara y comprobable. Nosotros montamos el informe de operaciones limpio; el fiscalista colegiado de la red lo presenta. Doble control.',
    whoFor: [
      'Inversores con operaciones repartidas en varias plataformas de compraventa, incluidas las de fuera de España.',
      'Quien necesita justificar el origen de fondos cripto ante un banco.',
      'Quien va a presentar el modelo 721 (criptomonedas en plataformas fuera de España) y no tiene los datos consolidados.',
      'Empresas que han cobrado en cripto y necesitan declararlo bien.',
    ],
    includes: [
      'Conexión de solo lectura a tus plataformas principales.',
      'Recopilación de los archivos de años anteriores, incluso de plataformas que ya no existen.',
      'Cálculo de pérdidas y ganancias con programas especializados de terceros (CoinTracking, Koinly).',
      'Informe de trazabilidad: un documento estructurado para tu fiscalista o para el de la red.',
      'Apoyo técnico al fiscalista durante la presentación oficial ante Hacienda.',
    ],
    excludes: [
      'No presentamos el modelo 721 ni la Declaración de la Renta a nuestro nombre.',
      'No firmamos ante Hacienda con certificado digital de Vaultbit.',
      'No asumimos responsabilidad si has ocultado carteras conscientemente: somos analistas técnicos, no auditores forenses.',
    ],
    process: [
      {
        step: '01',
        title: 'Inventario de fuentes',
        body: 'Listamos todas las plataformas de compraventa, carteras y plataformas de finanzas descentralizadas (DeFi) donde has operado. Sin dejarte ninguna.',
      },
      {
        step: '02',
        title: 'Extracción de datos',
        body: 'Conectamos en modo de solo lectura o juntamos los archivos de cada plataforma. Cubrimos todo el histórico.',
      },
      {
        step: '03',
        title: 'Conciliación con el método FIFO',
        body: 'Cálculo con el método FIFO, el que exige Hacienda. Incluye finanzas descentralizadas (DeFi): intercambios, recompensas por staking y fondos de liquidez compartidos.',
      },
      {
        step: '04',
        title: 'Informe técnico',
        body: 'Un informe formal con las cifras agregadas, los anexos detallados y la trazabilidad completa, listo para presentar.',
      },
      {
        step: '05',
        title: 'Traspaso al fiscalista colegiado',
        body: 'Reunión a tres bandas (tú, fiscalista y Vaultbit). Tú firmas tu declaración; nosotros respondemos a cualquier consulta técnica del fiscalista.',
      },
    ],
    redLine: {
      title: 'Traspaso al fiscalista colegiado',
      body: 'No somos despacho tributario. Somos los traductores. Cogemos el caos de tus operaciones en cripto, lo ordenamos en un informe limpio y lo entregamos al fiscalista colegiado de la red (o al tuyo propio), que será quien firme oficialmente ante Hacienda. Doble control, cero ambigüedad de responsabilidad.',
    },
    partnerHandoff:
      'Trabajamos con asesorías y despachos fiscales especializados en la fiscalidad de criptomonedas en España (declaración de renta con cripto, Modelo 721, conciliación de DeFi y staking). Si no tienes asesor habitual, te derivamos al profesional de la red que más encaja con tu volumen y complejidad. Vaultbit no presta asesoramiento fiscal: lo firma el asesor o economista independiente, que asume la responsabilidad ante Hacienda.',
    faqs: [
      {
        q: '¿Cubrís finanzas descentralizadas (DeFi) y staking?',
        a: 'Sí. Es justo donde la mayoría de fiscalistas se atasca. Conciliamos intercambios en mercados descentralizados (DEX), recompensas por staking, posiciones en fondos de liquidez y operaciones entre redes. Eso es exactamente lo que justifica el doble control.',
      },
      {
        q: '¿Qué pasa si he tenido operaciones que se me olvidaron?',
        a: 'Si lo declaras tú voluntariamente, mejor. La diferencia entre regularizar tarde y que Hacienda te lo descubra es significativa. Te ayudamos a documentar lo que tengas.',
      },
      {
        q: '¿Y si he perdido el acceso a un exchange antiguo?',
        a: 'Mientras tengas registro de las operaciones (correos, capturas, recibos bancarios), podemos reconstruir. Sin datos no hay milagros: trabajamos con lo que aportes.',
      },
    ],
    keywords: [
      'modelo 721 cripto España',
      'trazabilidad fiscal bitcoin',
      'informe trazabilidad criptoactivos hacienda',
      'declaración renta cripto consultoría',
      'asesoría fiscal criptomonedas España',
      'asesor fiscal bitcoin',
      'consultoría fiscal cripto',
    ],
  },

  'web3-b2b': {
    slug: 'web3-b2b',
    ogImage: '/og/og-web3-b2b.jpg',
    lead: {
      whatsapp: 'Hola, tengo un proyecto Web3 entre manos y quiero que me ayudéis a desarrollarlo y a montar el equipo. Os cuento: (describe tu proyecto, sector y fase)',
      notes: 'Interés: Proyectos Web3. Quiero desarrollar y orquestar un proyecto. (Describe brevemente el proyecto, el sector y la fase)',
    },
    name: 'Consultoría Web3 y Tokenización',
    shortName: 'Proyectos Web3',
    hero: false,
    icon: 'web3',
    category: 'addon',
    heroImage: '/assets/services/web3-b2b.png',
    heroImageAlt: 'Composición cinematográfica de dispositivos digitales y documentos corporativos relacionados con tokenización y Web3, sobre fondo oscuro',
    eyebrow: 'Frontier · Vaultbit para builders',
    tagline: 'Tú tienes la idea, el protocolo o el activo. Nosotros montamos y dirigimos el equipo que lo construye, con criterio técnico y regulatorio europeo.',
    intro:
      'Dirigimos tu proyecto Web3 de la idea al lanzamiento: diseñamos la arquitectura, montamos el equipo de desarrollo a partir de nuestra red de estudios y freelancers auditados, y supervisamos la ejecución hasta producción. Tú tratas con un solo interlocutor; nosotros respondemos del conjunto.',
    whoFor: [
      'Protocolos en fase de idea o MVP que necesitan equipo técnico y dirección de proyecto, no solo consejos.',
      'Founders con whitepaper o tesis pero sin un equipo de desarrollo de confianza al que dirigir.',
      'Empresas que quieren tokenizar un activo (inmobiliario, deuda, derechos) y necesitan ejecutarlo conforme a MiCA.',
      'Proyectos ya en marcha que necesitan refuerzo: contrato inteligente, dApp, auditoría o estructura legal y fiscal.',
    ],
    includes: [
      'Arquitectura del proyecto: diseño técnico, modelo económico del token y plan de ejecución por hitos.',
      'Montaje del equipo: seleccionamos de nuestra red estudios de contratos inteligentes, dApps, tokenización, NFT/GameFi y auditoría, todos verificados.',
      'Dirección del desarrollo: gestionamos hitos, revisamos la calidad y defendemos tus intereses frente al proveedor.',
      'Encaje regulatorio: análisis del impacto de MiCA y la normativa española, coordinado con abogados y fiscalistas colegiados.',
      'Un solo interlocutor: tú hablas con nosotros; nosotros coordinamos a todo el equipo.',
    ],
    excludes: [
      'No escribimos el código: el contrato inteligente lo escribe y despliega un estudio auditado, no nosotros.',
      'No emitimos el token a nombre de Vaultbit ni gestionamos la tesorería del proyecto.',
      'No prestamos servicios de creación de mercado ni listado en exchanges.',
    ],
    process: [
      {
        step: '01',
        title: 'Sesión de encaje',
        body: 'Entendemos tu proyecto, el equipo y la motivación real. Si la cadena de bloques no aporta nada, te lo decimos y te ahorramos el proyecto.',
      },
      {
        step: '02',
        title: 'Arquitectura y viabilidad',
        body: 'Documento ejecutivo con el diseño técnico, el modelo económico del token y el análisis regulatorio (MiCA, identidad, valores mobiliarios).',
      },
      {
        step: '03',
        title: 'Montaje del equipo',
        body: 'Seleccionamos de nuestra red los estudios y freelancers que ejecutan: contratos inteligentes, dApp, auditoría y la parte legal/fiscal colegiada. Propuestas comparables.',
      },
      {
        step: '04',
        title: 'Dirección del desarrollo',
        body: 'Coordinamos a todo el equipo, revisamos hitos y calidad, validamos el cumplimiento y defendemos tus intereses frente a los proveedores.',
      },
      {
        step: '05',
        title: 'Lanzamiento y traspaso',
        body: 'Acompañamos el despliegue en producción y te dejamos la documentación y el control para operar con autonomía.',
      },
    ],
    redLine: {
      title: 'Quien diseña y dirige no escribe el código',
      body: 'La programación, el despliegue y el listado los ejecutan estudios auditados que seleccionamos y supervisamos; nosotros diseñamos y dirigimos. Separar a quien diseña y dirige de quien ejecuta el código elimina el riesgo de manipulación. Es exactamente lo que un proyecto serio debería exigir.',
    },
    faqs: [
      {
        q: '¿De dónde salen los desarrolladores?',
        a: 'De una red de estudios y freelancers que hemos verificado: contratos inteligentes y blockchain, dApps y frontend, tokenización, NFT y GameFi, auditoría de seguridad y, para lo legal y fiscal, profesionales colegiados. Seleccionamos a los que encajan con tu proyecto y los dirigimos nosotros.',
      },
      {
        q: '¿Cuánto dura un proyecto típico?',
        a: 'Arquitectura y viabilidad: 4-6 semanas. Diseño del modelo económico del token: 6-10 semanas. Desarrollo dirigido: 3-9 meses según complejidad. Cada fase tiene entregables definidos.',
      },
      {
        q: '¿Programáis vosotros el contrato inteligente?',
        a: 'No. Diseñamos y dirigimos; el código lo escribe y despliega un estudio de desarrollo auditado que seleccionamos y supervisamos. Separamos quien diseña de quien ejecuta para eliminar el riesgo de que el código se manipule.',
      },
      {
        q: '¿MiCA aplica a mi proyecto?',
        a: 'Probablemente sí si emites algún tipo de token con utilidad o representación financiera. La pregunta correcta es bajo qué categoría MiCA cae (token referenciado a activos, token de dinero electrónico u otros criptoactivos) y qué obligaciones implica. Eso lo aclaramos en la sesión de encaje.',
      },
      {
        q: '¿Merece la pena tokenizar mi activo?',
        a: 'Depende, y a veces la respuesta honesta es que no. En la sesión de encaje filtramos los casos en los que una cadena de bloques no aporta nada: si no mejora la liquidez, la trazabilidad o la confianza, te lo decimos y te ahorramos el proyecto.',
      },
      {
        q: '¿Y la parte legal y fiscal del proyecto?',
        a: 'La cubren abogados y fiscalistas colegiados de la red, coordinados por nosotros. Nuestro papel es el diseño técnico, la dirección del proyecto y la estrategia; lo legal y lo fiscal lo firma siempre quien tiene la competencia.',
      },
    ],
    keywords: [
      'desarrollo de proyectos Web3 España',
      'montar equipo de desarrollo blockchain',
      'dirección de proyecto Web3 MiCA',
      'tokenización de activos España',
      'consultoría Web3 empresas',
    ],
    frontier: {
      hook: 'Buscamos proyectos',
      hookAccent: 'a desarrollar.',
      wordmarkImage: '/assets/web3/frontier-wordmark.png',
      wordmarkAlt: 'Web3',
      heroSubtitle:
        'Tú tienes la idea, el protocolo o el activo. Nosotros montamos y dirigimos el equipo que lo construye, con criterio técnico y regulatorio europeo.',
      heroImageBase: '/assets/web3/frontier-hero', // imágenes Nano Banana Pro: frontier-hero-{bg.jpeg,mid.png,fore.png}. Sin esto, el hero usa el fondo atmosférico en CSS.
      intentTitle: 'Qué proyectos buscamos',
      projectTypes: [
        {
          label: 'Protocolos en fase idea / MVP',
          blurb: 'Tienes la tesis o el whitepaper y necesitas equipo y dirección para construirlo de verdad.',
        },
        {
          label: 'Tokenización de activos',
          blurb: 'Inmobiliario, deuda o derechos que quieres llevar a la cadena conforme a MiCA.',
        },
        {
          label: 'Proyectos que necesitan refuerzo',
          blurb: 'Ya estás en marcha y te falta contrato inteligente, dApp, marketplace NFT, auditoría o estructura legal.',
        },
        {
          label: 'Empresas que exploran Web3',
          blurb: 'Quieres entrar con criterio técnico y regulatorio, sin depender de la moda.',
        },
      ],
      partnerTiers: [
        { name: 'Contratos inteligentes', role: 'Solidity, Rust y Wasm sobre Ethereum, Polygon, BSC y otras redes.', icon: '/assets/web3/icon-contracts.png' },
        { name: 'dApps, web y UX/UI', role: 'Aplicaciones descentralizadas, frontend e integración con la cadena.', icon: '/assets/web3/icon-dapps.png' },
        { name: 'Tokenización, NFT y GameFi', role: 'Tokenización de activos, marketplaces NFT y proyectos GameFi.', icon: '/assets/web3/icon-token.png' },
        { name: 'Auditoría de seguridad', role: 'Revisión independiente del código antes de producción.', icon: '/assets/web3/icon-audit.png' },
        { name: 'Legal y fiscal', role: 'Abogados y fiscalistas colegiados para MiCA y estructura.', icon: '/assets/web3/icon-legal.png' },
        { name: 'Soporte y evolución', role: 'Mantenimiento y mejoras del proyecto tras el lanzamiento.', icon: '/assets/web3/icon-support.png' },
      ],
      criteria: [
        { label: 'Arquitectura y viabilidad', value: '4-6 sem' },
        { label: 'Modelo económico del token', value: '6-10 sem' },
        { label: 'Desarrollo dirigido', value: '3-9 meses' },
        { label: 'Interlocutor único', value: 'Vaultbit' },
      ],
      sectors: [
        { name: 'Finanzas y tokenización', blurb: 'Stablecoins, deuda tokenizada y activos financieros en cadena, con el encaje regulatorio que exige MiCA.', image: '/assets/web3/sector-finanzas.jpeg' },
        { name: 'Inmobiliario (RWA)', blurb: 'Fraccionar y tokenizar inmuebles o carteras para dar liquidez a un activo tradicionalmente ilíquido.', image: '/assets/web3/sector-inmobiliario.jpeg' },
        { name: 'Energía', blurb: 'Certificados de origen, mercados entre pares y trazabilidad de la producción y el consumo.', image: '/assets/web3/sector-energia.jpeg' },
        { name: 'Logística y trazabilidad', blurb: 'Cadena de suministro verificable de extremo a extremo, sin depender de un único intermediario.', image: '/assets/web3/sector-logistica.jpeg' },
        { name: 'Seguros', blurb: 'Pólizas y siniestros con ejecución automática mediante contratos inteligentes auditados.', image: '/assets/web3/sector-seguros.jpeg' },
        { name: 'Propiedad intelectual y royalties', blurb: 'Derechos de autor, patentes y royalties registrados y repartidos de forma trazable.', image: '/assets/web3/sector-ip.jpeg' },
      ],
    },
  },
};

export const SERVICE_DETAIL_LIST = Object.values(SERVICE_DETAILS);

/**
 * Enlaces de CTA con mensaje predefinido para un servicio: WhatsApp con `?text=`
 * y Cal.com con `?notes=`. Usa `service.lead` o genera un texto por defecto.
 */
export function serviceLeadLinks(s: ServiceDetail) {
  const whatsapp =
    s.lead?.whatsapp ??
    `Hola, vengo de la web de Vaultbit. Me interesa ${s.shortName} y me gustaría que me contéis más.`;
  const notes = s.lead?.notes ?? `Interés: ${s.shortName} (desde la web de Vaultbit).`;
  return { wa: waLink(whatsapp), cal: calLink(notes) };
}

/** Pilares principales que se muestran en la home tras la historia (3). */
export const SERVICE_DETAILS_CORE = SERVICE_DETAIL_LIST.filter(
  (s) => s.category === 'core'
);

/** Servicios complementarios — solo en /servicios. */
export const SERVICE_DETAILS_ADDONS = SERVICE_DETAIL_LIST.filter(
  (s) => s.category === 'addon'
);
