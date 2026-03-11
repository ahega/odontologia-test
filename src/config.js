const CONFIG = {
  nombreNegocio:    "Mery Mendoza Estética Dental",
  nombreCorto:      "Mery Mendoza",
  slogan:           "Estética dental con precisión y elegancia",
  sloganHero:       "Tu Sonrisa Perfecta en Manos Expertas en Bogotá",
  subtituloHero:    "Odontología estética y general con tecnología moderna. Blanqueamiento, implantes, ortodoncia y más — atención personalizada en Bogotá.",
  doctorNombre:     "Dra. Mery Mendoza",
  doctorTitulo:     "Odontóloga Estética",
  descripcionSobre: "Soy la Dra. Mery Mendoza, odontóloga especializada en estética dental en Bogotá. Mi pasión es transformar sonrisas con precisión, cuidado y un enfoque completamente personalizado. Combino tecnología moderna con técnicas de vanguardia para ofrecerte resultados naturales, duraderos y que realcen tu confianza.",
  tipoPerfil:       "odontologia",

  ciudad:           "Bogotá",
  pais:             "Colombia",
  direccion:        "Cra. 77A #64c-11, Bogotá",
  consultorio:      "",
  regionSEO:        "CO-DC",

  whatsapp:         "573134077530",
  whatsappMensaje:  "Hola Dra. Mery! Quiero agendar una cita",
  telefono:         "+57 313 407 7530",
  email:            "",

  instagram:        "@merymendozaesteticadental",
  instagramURL:     "https://www.instagram.com/merymendozaesteticadental/",
  facebook:         "merymendozaesteticadental",
  facebookURL:      "https://www.facebook.com/merymendozaesteticadental",
  tiktok:           "",
  tiktokURL:        "",

  horarioSemana:    "Lunes a Viernes: 8:00am - 6:00pm",
  horarioSabado:    "Sabados: 8:00am - 2:00pm",
  horarioDomingo:   "",

  colores: {
    primario:        "#8B6FD4",   // ← lila principal
    primarioDeep:    "#7458C0",   // ← lila oscuro hover
    primarioMedio:   "#9D85DC",   // ← lila medio
    primarioLight:   "#C4B3ED",   // ← lila claro
    primarioPale:    "#EDE8F9",   // ← lila muy suave
    primarioSubtle:  "#F5F3FC",   // ← fondo secciones alternas
    oscuro:          "#1A0F3D",   // ← morado muy oscuro — hero y footer
    heroFondo:       "#1A0F3D",   // ← mismo oscuro = hero oscuro elegante
    textoPrimario:   "#1A0F3D",
    textoSecundario: "#3D2E6B",
    textoMuted:      "#7B6BA0",
    fondo:           "#FFFFFF",
    fondoAlt:        "#F5F3FC",
  },

  tipografia: {
    titulos:    "Cormorant Garamond",
    subtitulos: "DM Sans",
    cuerpo:     "Inter",
  },

  stats: [
    { numero: "500+", label: "Pacientes Satisfechas", sublabel: "En Bogotá" },
    { numero: "7",    label: "Servicios Disponibles", sublabel: "Atención integral" },
    { numero: "100%", label: "Compromiso",            sublabel: "Con tu sonrisa" },
    { numero: "5",    label: "Calificación",          sublabel: "Pacientes felices" },
  ],

  servicios: [
    {
      id: "estetica-dental", icono: "✨", nombre: "Odontología Estética",
      descripcion: "Tratamientos estéticos de alto nivel para transformar la apariencia de tu sonrisa con resultados naturales y elegantes.",
      features: ["Carillas de porcelana", "Restauraciones estéticas", "Resultado natural"],
    },
    {
      id: "blanqueamiento", icono: "💎", nombre: "Blanqueamiento Dental",
      descripcion: "Recupera la blancura y el brillo natural de tu sonrisa. Seguro, rápido y efectivo desde la primera sesión.",
      features: ["Resultado inmediato", "Seguro y certificado", "Varios tonos más blanco"],
    },
    {
      id: "implantes", icono: "🦷", nombre: "Implantes Dentales",
      descripcion: "Recupera tu sonrisa completa con implantes de titanio. Resultado natural, funcional y permanente.",
      features: ["Titanio certificado", "Resultado permanente", "Planificación precisa"],
    },
    {
      id: "ortodoncia", icono: "😁", nombre: "Ortodoncia",
      descripcion: "Alineación dental con brackets o alineadores transparentes. Plan personalizado para todas las edades.",
      features: ["Brackets y alineadores", "Para todas las edades", "Seguimiento cercano"],
    },
    {
      id: "endodoncia", icono: "🔬", nombre: "Endodoncia",
      descripcion: "Tratamiento de conductos sin dolor para salvar dientes comprometidos con técnicas modernas.",
      features: ["Sin dolor", "Alta tasa de éxito", "Técnicas modernas"],
    },
    {
      id: "limpieza", icono: "🪥", nombre: "Limpieza y Prevención",
      descripcion: "Profilaxis dental profesional, sellantes y fluorización para mantener tu boca en perfectas condiciones.",
      features: ["Profilaxis completa", "Sellantes", "Fluorización"],
    },
    {
      id: "general", icono: "🩺", nombre: "Odontología General",
      descripcion: "Diagnósticos completos y restauraciones para toda la familia.",
      features: ["Diagnóstico completo", "Restauraciones", "Toda la familia"],
    },
  ],

  casos: [
    { servicio: "Odontología Estética", titulo: "Transformación con carillas",    descripcion: "Carillas de porcelana. Resultado natural, elegante y perfectamente armonioso." },
    { servicio: "Blanqueamiento",       titulo: "Blanqueamiento profesional",     descripcion: "Varios tonos más blanco en una sesión. Resultado brillante y duradero." },
    { servicio: "Implantes",            titulo: "Rehabilitación con implante",    descripcion: "Implante oseointegrado. Resultado imperceptible, natural y permanente." },
    { servicio: "Ortodoncia",           titulo: "Corrección de apiñamiento",      descripcion: "18 meses con brackets estéticos. Sonrisa alineada y mordida funcional." },
    { servicio: "Endodoncia",           titulo: "Rescate y restauración",         descripcion: "Endodoncia + corona de porcelana. Diente conservado y restaurado." },
    { servicio: "Odontología General",  titulo: "Restauración estética completa", descripcion: "Restauraciones compuestas. Dientes sanos, funcionales y estéticos." },
  ],

  testimonios: [
    { nombre: "Daniela R.", servicio: "Odontología Estética", ciudad: "Bogotá", texto: "La Dra. Mery transformó mi sonrisa completamente. El resultado de las carillas fue increíblemente natural y elegante. Me siento radiante.", estrellas: 5 },
    { nombre: "Camila S.",  servicio: "Blanqueamiento",       ciudad: "Bogotá", texto: "El blanqueamiento fue espectacular. En una sola sesión noté un cambio enorme. Muy cómodo y sin sensibilidad. Muy profesional.", estrellas: 5 },
    { nombre: "Andrés M.",  servicio: "Implantes",            ciudad: "Bogotá", texto: "La experiencia fue mucho mejor de lo esperado. La doctora explicó todo con claridad y el resultado quedó perfecto y natural.", estrellas: 5 },
    { nombre: "Valeria T.", servicio: "Ortodoncia",           ciudad: "Bogotá", texto: "Ortodoncia con alineadores fue la mejor decisión. La Dra. Mery tiene un ojo estético extraordinario. Resultado armonioso y natural.", estrellas: 5 },
    { nombre: "Jorge P.",   servicio: "Endodoncia",           ciudad: "Bogotá", texto: "Vine con mucho miedo y salí sorprendido, no dolió nada. La Dra. Mery es muy hábil y profesional.", estrellas: 5 },
  ],

  faqs: [
    { pregunta: "¿Qué incluye la odontología estética?",    respuesta: "Abarca carillas de porcelana, restauraciones estéticas, blanqueamiento y procedimientos para mejorar color, forma y apariencia. Plan personalizado según cada caso." },
    { pregunta: "¿Cuánto dura un implante dental?",         respuesta: "Con cuidado adecuado puede durar toda la vida. El proceso completo toma entre 3 y 6 meses." },
    { pregunta: "¿La ortodoncia funciona en adultos?",      respuesta: "Sí, es efectiva a cualquier edad. Ofrecemos brackets tradicionales, estéticos y alineadores transparentes." },
    { pregunta: "¿El blanqueamiento daña el esmalte?",      respuesta: "No cuando es realizado por profesionales con productos certificados y supervisión completa." },
    { pregunta: "¿La endodoncia duele?",                    respuesta: "No. Con anestesia moderna es completamente cómoda. El objetivo es eliminar el dolor, no generarlo." },
    { pregunta: "¿Con qué frecuencia debo hacer limpieza?", respuesta: "Se recomienda cada 6 meses. Elimina sarro y placa que el cepillado diario no alcanza." },
    { pregunta: "¿Cómo puedo agendar mi cita?",             respuesta: "Por WhatsApp al +57 313 407 7530, Instagram @merymendozaesteticadental o el formulario de esta página." },
    { pregunta: "¿Tienen opciones de financiación?",        respuesta: "Sí, manejamos opciones de pago accesibles. Consulta las alternativas en tu primera cita." },
  ],

  seo: {
    titlePrincipal: "Mery Mendoza | Estética Dental en Bogotá - Blanqueamiento, Implantes y Carillas",
    descripcion:    "Dra. Mery Mendoza - odontóloga estética en Bogotá. Blanqueamiento, implantes, ortodoncia y carillas con tecnología moderna.",
    keywords:       "Mery Mendoza odontóloga, estética dental Bogotá, blanqueamiento Bogotá, implantes Bogotá, carillas Bogotá",
    canonicalURL:   "https://www.merymendozaesteticadental.com.co/",
  },
};

export default CONFIG;