const CONFIG = {
  nombreNegocio:    "Dentalia Odontología La Isabela",
  nombreCorto:      "Dentalia La Isabela",
  slogan:           "Cuidado integral para tu sonrisa",
  sloganHero:       "Tu Sonrisa en Manos Profesionales en Engativá",
  subtituloHero:    "Odontología general, estética, ortodoncia y rehabilitación oral con atención cercana y profesional en Engativá, Bogotá.",
  doctorNombre:     "Equipo Dentalia",
  doctorTitulo:     "Especialistas en Odontología",
  descripcionSobre: "En Dentalia Odontología La Isabela nos dedicamos a brindar atención odontológica integral para toda la familia. Nuestro enfoque combina experiencia, tecnología moderna y atención personalizada para cuidar la salud y estética de tu sonrisa.",

  tipoPerfil:       "odontologia",

  ciudad:           "Bogotá",
  pais:             "Colombia",
  direccion:        "Calle 65bis # 86-85, Engativá, Bogotá",
  consultorio:      "",
  regionSEO:        "CO-DC",

  whatsapp:         "573000000000",
  whatsappMensaje:  "Hola! Quiero agendar una cita en Dentalia Odontología La Isabela",
  telefono:         "",
  email:            "",

  instagram:        "@dentalia.laisabela",
  instagramURL:     "https://www.instagram.com/dentalia.laisabela/",
  facebook:         "",
  facebookURL:      "",
  tiktok:           "",
  tiktokURL:        "",

  horarioSemana:    "Lunes a Viernes: 8:00am - 6:00pm",
  horarioSabado:    "Sábados: 8:00am - 2:00pm",
  horarioDomingo:   "",

  colores: {
    primario:        "#8B6FD4",
    primarioDeep:    "#7458C0",
    primarioMedio:   "#9D85DC",
    primarioLight:   "#C4B3ED",
    primarioPale:    "#EDE8F9",
    primarioSubtle:  "#F5F3FC",
    oscuro:          "#1A0F3D",
    heroFondo:       "#1A0F3D",
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
    { numero: "500+", label: "Pacientes Atendidos", sublabel: "En Engativá" },
    { numero: "4",    label: "Especialidades",      sublabel: "Odontología integral" },
    { numero: "100%", label: "Compromiso",          sublabel: "Con tu salud dental" },
    { numero: "5",    label: "Calificación",        sublabel: "Pacientes satisfechos" },
  ],

  servicios: [
    {
      id: "estetica-dental", icono: "✨", nombre: "Odontología Estética",
      descripcion: "Tratamientos estéticos para mejorar la apariencia de tu sonrisa con resultados naturales y armónicos.",
      features: ["Carillas estéticas", "Restauraciones", "Resultados naturales"],
    },
    {
      id: "blanqueamiento", icono: "💎", nombre: "Blanqueamiento Dental",
      descripcion: "Recupera el brillo natural de tu sonrisa con tratamientos seguros y supervisados.",
      features: ["Resultado visible", "Seguro", "Mejora estética"],
    },
    {
      id: "implantes", icono: "🦷", nombre: "Rehabilitación Oral",
      descripcion: "Recupera la funcionalidad y estética de tu sonrisa con tratamientos de rehabilitación oral personalizados.",
      features: ["Restauración dental", "Función masticatoria", "Sonrisa natural"],
    },
    {
      id: "ortodoncia", icono: "😁", nombre: "Ortodoncia",
      descripcion: "Alineación dental para mejorar la mordida y la estética de tu sonrisa.",
      features: ["Corrección dental", "Para jóvenes y adultos", "Seguimiento profesional"],
    },
    {
      id: "endodoncia", icono: "🔬", nombre: "Endodoncia",
      descripcion: "Tratamientos de conducto para salvar dientes afectados y eliminar el dolor.",
      features: ["Tratamiento preciso", "Alivio del dolor", "Preservación dental"],
    },
    {
      id: "limpieza", icono: "🪥", nombre: "Limpieza y Prevención",
      descripcion: "Profilaxis y prevención para mantener tu salud oral en óptimas condiciones.",
      features: ["Eliminación de sarro", "Prevención", "Salud oral"],
    },
    {
      id: "general", icono: "🩺", nombre: "Odontología General",
      descripcion: "Atención odontológica integral para diagnóstico, tratamiento y prevención.",
      features: ["Diagnóstico", "Tratamientos básicos", "Atención familiar"],
    },
  ],

  casos: [
    { servicio: "Odontología Estética", titulo: "Mejora estética de sonrisa", descripcion: "Tratamiento estético para lograr una sonrisa más armónica y natural." },
    { servicio: "Blanqueamiento", titulo: "Blanqueamiento profesional", descripcion: "Sonrisa más blanca y brillante con tratamiento seguro." },
    { servicio: "Rehabilitación Oral", titulo: "Recuperación funcional", descripcion: "Tratamiento para recuperar la funcionalidad y estética dental." },
    { servicio: "Ortodoncia", titulo: "Corrección de alineación", descripcion: "Tratamiento ortodóntico para mejorar mordida y estética." },
    { servicio: "Endodoncia", titulo: "Salvando el diente natural", descripcion: "Tratamiento de conducto exitoso para conservar la pieza dental." },
    { servicio: "Odontología General", titulo: "Restauración dental", descripcion: "Tratamiento restaurador para mantener la salud oral." },
  ],

  testimonios: [
    { nombre: "Laura G.", servicio: "Ortodoncia", ciudad: "Bogotá", texto: "Excelente atención. El equipo es muy profesional y me explicaron todo el tratamiento paso a paso.", estrellas: 5 },
    { nombre: "Carlos M.", servicio: "Rehabilitación Oral", ciudad: "Bogotá", texto: "Recuperé mi sonrisa gracias a Dentalia. Muy buen servicio y atención.", estrellas: 5 },
    { nombre: "Paula R.", servicio: "Blanqueamiento", ciudad: "Bogotá", texto: "Quedé muy feliz con el resultado del blanqueamiento. Muy recomendable.", estrellas: 5 },
    { nombre: "Andrés P.", servicio: "Odontología General", ciudad: "Bogotá", texto: "Atención muy profesional y amable. Me sentí muy cómodo durante todo el tratamiento.", estrellas: 5 },
    { nombre: "Natalia S.", servicio: "Limpieza Dental", ciudad: "Bogotá", texto: "Muy buena experiencia. Atención cuidadosa y profesional.", estrellas: 5 },
  ],

  faqs: [
    { pregunta: "¿Qué servicios ofrecen?", respuesta: "Ofrecemos odontología general, estética, ortodoncia, rehabilitación oral, limpiezas y tratamientos especializados para cuidar tu sonrisa." },
    { pregunta: "¿Atienden adultos y niños?", respuesta: "Sí, brindamos atención odontológica para toda la familia." },
    { pregunta: "¿Dónde están ubicados?", respuesta: "Estamos ubicados en la Calle 65bis # 86-85 en Engativá, Bogotá." },
    { pregunta: "¿Cómo puedo agendar una cita?", respuesta: "Puedes agendar tu cita escribiéndonos por WhatsApp o a través de nuestro Instagram @dentalia.laisabela." },
    { pregunta: "¿Realizan ortodoncia?", respuesta: "Sí, contamos con tratamientos de ortodoncia para mejorar la alineación dental y la mordida." },
    { pregunta: "¿Realizan limpiezas dentales?", respuesta: "Sí, realizamos profilaxis dental profesional para mantener una correcta salud oral." },
    { pregunta: "¿Cuánto dura una consulta?", respuesta: "La duración depende del tratamiento, pero una consulta inicial suele durar entre 30 y 45 minutos." },
    { pregunta: "¿Atienden con cita previa?", respuesta: "Sí, recomendamos agendar tu cita previamente para brindarte una mejor atención." },
  ],

  seo: {
    titlePrincipal: "Dentalia Odontología La Isabela | Odontología en Engativá Bogotá",
    descripcion:    "Dentalia Odontología La Isabela en Engativá, Bogotá. Odontología general, estética, ortodoncia y rehabilitación oral.",
    keywords:       "odontología Engativá, dentista Engativá Bogotá, ortodoncia Engativá, odontología estética Bogotá",
    canonicalURL:   "",
  },
};

export default CONFIG;