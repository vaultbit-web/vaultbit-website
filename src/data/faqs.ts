export interface FAQ {
  q: string;
  a: string;
}

export const FAQ_HOME: FAQ[] = [
  {
    q: '¿Qué hacéis exactamente?',
    a: 'Te ayudamos a tener tu bitcoin bien guardado y a dejar preparado que tu familia pueda recibirlo el día de mañana. Montamos contigo un sistema seguro para tus claves, preparamos la herencia con un notario y, si lo necesitas, ordenamos la parte fiscal con un asesor. Tú decides; nosotros lo dejamos funcionando.',
  },
  {
    q: '¿Veis vosotros mis claves en algún momento?',
    a: 'No, nunca. Las palabras que dan acceso a tu bitcoin solo las ves tú, en la pantalla de tu propio dispositivo. Te acompañamos paso a paso, pero no te las pedimos, no las apuntamos y no las guardamos. El control es siempre tuyo.',
  },
  {
    q: '¿Qué pasa con mi bitcoin si un día me ocurre algo?',
    a: 'Esa es justo la parte que dejamos resuelta. Preparamos, con un notario, cómo accede tu familia a tu bitcoin si tú faltas o ya no puedes decidir. Les dejamos un manual claro que pueden seguir sin saber de tecnología, para que no se pierda nada.',
  },
  {
    q: '¿Necesito saber de tecnología o tener mucho bitcoin?',
    a: 'No hace falta que entiendas de tecnología: para eso estamos nosotros y hablamos claro. Y trabajamos con cualquier persona que tenga bitcoin (u otras criptomonedas) y quiera tenerlo en orden. En la primera conversación vemos tu caso y te decimos con franqueza qué te conviene, sin venderte nada que no necesites.',
  },
  {
    q: '¿Cómo empezamos?',
    a: 'Con una conversación de media hora, sin compromiso. Me cuentas tu situación, te escucho y te digo si podemos ayudarte y cómo. A partir de ahí, vamos a tu ritmo.',
  },
  {
    q: '¿Vaultbit ofrece asesoría legal y fiscal propia?',
    a: 'No. Nosotros coordinamos la parte técnica (custodia y herencia de tu bitcoin) y derivamos lo legal y lo fiscal a despachos y asesorías colaboradoras especializadas en criptoactivos. El profesional independiente es quien presta el servicio, lo firma y asume la responsabilidad de su especialidad. Así tienes a cada experto en lo suyo, sin medias tintas.',
  },
  {
    q: '¿Quién se encarga de la fiscalidad y la herencia de mi bitcoin?',
    a: 'La fiscalidad de criptomonedas (declaración de renta, Modelo 721, conciliación de operaciones) la lleva un asesor fiscal especializado en cripto; la herencia y el testamento, un notario o abogado de sucesiones. Nosotros les entregamos el trabajo técnico ordenado y coordinamos la colaboración, para que no tengas que ir buscando profesional por tu cuenta ni explicar tu caso dos veces.',
  },
];

export const FAQ_HERENCIA: FAQ[] = [
  {
    q: '¿Qué pasa con mis bitcoins si me ocurre algo (fallecimiento o incapacitación)?',
    a: 'Si tus herederos (o la persona designada para decidir por ti si quedaras incapacitado) no saben que existen tus criptomonedas, dónde están ni cómo se accede, se pierden para siempre. El Protocolo de Herencia resuelve la parte técnica dividiendo tu frase semilla en varias partes (método Shamir) y entrega un Manual del Heredero coordinado con el notario colegiado de la red, tanto para el testamento como para el poder preventivo.',
  },
  {
    q: '¿Es legalmente válido un protocolo así?',
    a: 'El protocolo técnico se integra dentro de tu testamento legal y, cuando aplica, en tu poder preventivo o tutela. La validez jurídica la firma siempre el notario colegiado de la red, no Vaultbit. Nosotros aseguramos que las claves no se pierdan; el notario asegura que tus herederos o la persona designada puedan reclamarlas legalmente.',
  },
];

export const FAQ_CUSTODIA: FAQ[] = [
  {
    q: '¿Qué cartera fría me recomendáis?',
    a: 'La elección depende del riesgo, el capital y los conocimientos técnicos del cliente. Trabajamos habitualmente con Ledger, Trezor y Coldcard. Recomendamos siempre tras analizar tu caso, no por defecto.',
  },
  {
    q: '¿Necesito firma múltiple?',
    a: 'No siempre. Para patrimonios pequeños, una cartera fría bien custodiada es suficiente. A partir de cierta cantidad, o si quieres un protocolo de herencia sólido, una configuración con varias firmas (2-de-3 o 3-de-5) aporta más resistencia. En el Protocolo de Herencia, el nivel Legado contempla firma múltiple opcional sobre el reparto de la frase semilla.',
  },
];
