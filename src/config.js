const CONFIG = {
  nombreNegocio:    "Gluck Odontología",
  nombreCorto:      "Gluck",
  slogan:           "Tu sonrisa perfecta comienza aquí",
  sloganHero:       "La Sonrisa que Siempre Soñaste, Más Cerca de Ti",
  subtituloHero:    "Odontología estética e implantes con tecnología de vanguardia en Bogotá.",
  doctorNombre:     "Gluck Odontología",
  doctorTitulo:     "Clínica Odontológica",
  descripcionSobre: "Somos una clínica odontológica comprometida con transformar sonrisas en Bogotá. Combinamos tecnología de vanguardia con atención personalizada para ofrecerte los mejores resultados.",
  tipoPerfil:       "odontologia",

  ciudad:           "Bogotá",
  pais:             "Colombia",
  direccion:        "Calle 53b # 24, Bogotá",
  consultorio:      "",
  regionSEO:        "CO-DC",

  whatsapp:         "573059370931",
  whatsappMensaje:  "Hola! 😁 Quiero agendar una cita",
  telefono:         "+57 305 937 0931",
  email:            "",

  instagram:        "@gluckodontologia710",
  instagramURL:     "https://www.instagram.com/gluckodontologia710/",
  facebook:         "Gluck Odontología",
  facebookURL:      "https://www.facebook.com/gluckodontologia",
  tiktok:           "",
  tiktokURL:        "",

  horarioSemana:    "Lunes a Viernes: 8:00am – 6:00pm",
  horarioSabado:    "Sábados: 8:00am – 2:00pm",
  horarioDomingo:   "",

  colores: {
    primario:        "#2DBD8F",
    primarioDeep:    "#1E9E76",
    primarioMedio:   "#3DCCA0",
    primarioLight:   "#A8E8D4",
    primarioPale:    "#E6F7F2",
    primarioSubtle:  "#F2FBF7",
    oscuro:          "#0D2B22",
    textoPrimario:   "#0D2B22",
    textoSecundario: "#1E5C45",
    textoMuted:      "#5E8C7A",
    fondo:           "#FFFFFF",
    fondoAlt:        "#F7FBF8",
  },

  tipografia: {
    titulos:    "DM Serif Display",
    subtitulos: "Public Sans",
    cuerpo:     "Inter",
  },

  stats: [
    { numero: "800+", label: "Pacientes Satisfechos", sublabel: "En Bogotá" },
    { numero: "8",    label: "Servicios Disponibles", sublabel: "Atención integral" },
    { numero: "100%", label: "Compromiso",            sublabel: "Con tu sonrisa" },
    { numero: "5★",   label: "Calificación",          sublabel: "Pacientes felices" },
  ],

  servicios: [
    {
      id: "diseno-sonrisa",
      icono: "✨",
      nombre: "Diseño de Sonrisa",
      descripcion: "Transformación completa y personalizada. Analizamos la armonía de tu rostro para crear el diseño exacto que te hará sentir radiante.",
      features: ["Evaluación facial completa", "Plan personalizado", "Resultado natural"],
    },
    {
      id: "estetica-dental",
      icono: "💎",
      nombre: "Odontología Estética",
      descripcion: "Carillas y restauraciones estéticas para transformar el color, forma y apariencia de tus dientes con resultados naturales y duraderos.",
      features: ["Carillas de porcelana", "Blanqueamiento", "Restauraciones estéticas"],
    },
    {
      id: "implantes",
      icono: "🦷",
      nombre: "Implantes Dentales",
      descripcion: "Reemplaza dientes perdidos con implantes de titanio de alta calidad. Resultado natural, funcional y permanente.",
      features: ["Titanio certificado", "Resultado permanente", "Planificación digital"],
    },
    {
      id: "ortodoncia",
      icono: "😁",
      nombre: "Ortodoncia",
      descripcion: "Alineación dental con brackets o alineadores transparentes. Plan personalizado para todas las edades.",
      features: ["Brackets y alineadores", "Todas las edades", "Seguimiento cercano"],
    },
    {
      id: "endodoncia",
      icono: "🔬",
      nombre: "Endodoncia",
      descripcion: "Tratamiento de conductos sin dolor para salvar dientes comprometidos con técnicas modernas.",
      features: ["Sin dolor", "Alta tasa de éxito", "Técnicas modernas"],
    },
    {
      id: "blanqueamiento",
      icono: "🌟",
      nombre: "Blanqueamiento Dental",
      descripcion: "Recupera el brillo natural de tu sonrisa hasta varios tonos más blanco en una sola sesión.",
      features: ["Resultado inmediato", "Seguro y certificado", "Duradero"],
    },
    {
      id: "limpieza",
      icono: "🪥",
      nombre: "Limpieza y Prevención",
      descripcion: "Profilaxis dental profesional, sellantes y fluorización para mantener tu boca en perfectas condiciones.",
      features: ["Profilaxis completa", "Sellantes", "Fluorización"],
    },
    {
      id: "general",
      icono: "🩺",
      nombre: "Odontología General",
      descripcion: "Diagnósticos completos y restauraciones para mantener tu salud bucal al día para toda la familia.",
      features: ["Diagnóstico digital", "Restauraciones", "Toda la familia"],
    },
  ],

  casos: [
    { servicio: "Diseño de Sonrisa", titulo: "Transformación completa", descripcion: "Diseño de sonrisa + carillas. Resultado natural y armonioso." },
    { servicio: "Implantes", titulo: "Rehabilitación con implante", descripcion: "Implante oseointegrado. Resultado imperceptible y permanente." },
    { servicio: "Ortodoncia", titulo: "Corrección de apiñamiento", descripcion: "18 meses con brackets. Sonrisa alineada y mordida funcional." },
    { servicio: "Blanqueamiento", titulo: "Blanqueamiento profesional", descripcion: "5 tonos más blanco en una sola sesión. Resultado duradero." },
    { servicio: "Estética Dental", titulo: "Carillas de porcelana", descripcion: "6 carillas. Transformación de color, forma y tamaño." },
    { servicio: "Endodoncia", titulo: "Rescate y restauración", descripcion: "Endodoncia + corona. Diente conservado y restaurado." },
  ],

  testimonios: [
    { nombre: "Valentina M.", servicio: "Diseño de Sonrisa", ciudad: "Bogotá", texto: "Transformaron mi sonrisa completamente. Desde la primera consulta entendieron lo que quería. El consultorio es moderno y el trato excelente.", estrellas: 5 },
    { nombre: "Mauricio R.", servicio: "Implantes", ciudad: "Bogotá", texto: "Me pusieron dos implantes y la experiencia fue excelente. Explican todo con claridad y el resultado quedó perfecto y natural.", estrellas: 5 },
    { nombre: "Carolina V.", servicio: "Blanqueamiento", ciudad: "Bogotá", texto: "Tenía miedo al dentista pero aquí eso cambió. Trabajan sin dolor y el resultado fue increíble. Ya toda mi familia viene aquí.", estrellas: 5 },
    { nombre: "Sebastián G.", servicio: "Ortodoncia", ciudad: "Bogotá", texto: "La ortodoncia con alineadores fue la mejor decisión. El seguimiento es muy cercano. Quedé con la sonrisa que siempre quise.", estrellas: 5 },
    { nombre: "Jorge A.", servicio: "Endodoncia", ciudad: "Bogotá", texto: "Vine por endodoncia con mucho nervio y salí sorprendido — no dolió nada. Muy profesional. La atención fue impecable.", estrellas: 5 },
  ],

  faqs: [
    { pregunta: "¿Qué incluye el diseño de sonrisa?", respuesta: "Un plan integral personalizado con blanqueamiento, carillas, ortodoncia y restauraciones según tu caso específico." },
    { pregunta: "¿Cuánto dura un implante dental?", respuesta: "Con cuidado adecuado puede durar toda la vida. El proceso completo toma entre 3 y 6 meses." },
    { pregunta: "¿La ortodoncia es solo para jóvenes?", respuesta: "No. Es efectiva a cualquier edad. Cada vez más adultos eligen alineadores transparentes por su discreción." },
    { pregunta: "¿El blanqueamiento daña el esmalte?", respuesta: "No cuando es realizado por profesionales. Usamos productos certificados con supervisión completa." },
    { pregunta: "¿La endodoncia duele?", respuesta: "No. Con anestesia moderna es completamente cómoda. El objetivo es eliminar el dolor, no generarlo." },
    { pregunta: "¿Cómo puedo agendar mi cita?", respuesta: "Por WhatsApp, Instagram o el formulario de esta página. Te respondemos rápido." },
    { pregunta: "¿Tienen opciones de financiación?", respuesta: "Sí, manejamos opciones de pago accesibles. Consulta las alternativas en tu primera cita." },
    { pregunta: "¿Atienden toda la familia?", respuesta: "Sí, desde niños hasta adultos mayores. Un solo lugar para toda la salud dental de tu familia." },
  ],

  seo: {
    titlePrincipal: "Gluck Odontología | Clínica Dental en Bogotá — Diseño de Sonrisa e Implantes",
    descripcion: "Clínica odontológica en Bogotá especializada en diseño de sonrisa, implantes, ortodoncia y estética dental. ¡Agenda tu cita!",
    keywords: "odontología Bogotá, diseño de sonrisa Bogotá, implantes Bogotá, ortodoncia Bogotá",
    canonicalURL: "https://www.gluckodontologia.com.co/",
  },
};

export default CONFIG;
