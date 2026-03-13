const CONFIG = {
  nombreNegocio:    "DentalCare Odontología Digital",
  nombreCorto:      "DentalCare",
  slogan:           "Tu sonrisa en manos de especialistas",
  sloganHero:       "Odontología Digital de Alta Especialidad",
  subtituloHero:    "Diseño de sonrisa y odontología especializada con la tecnología más actualizada en Bogotá. Tu sonrisa merece lo mejor.",
  descripcionSobre: "En DentalCare Odontología Digital somos especialistas en diseño de sonrisa y odontología avanzada. Manejamos lo más actualizado en tecnología odontológica digital para ofrecerte diagnósticos precisos, tratamientos efectivos y resultados que transforman tu vida. En Bogotá, tu sonrisa está en las mejores manos.",
  tipoPerfil:       "clinica",

  ciudad:           "Bogotá",
  pais:             "Colombia",
  direccion:        "Bogotá, Colombia",
  consultorio:      "",
  regionSEO:        "CO-DC",

  whatsapp:         "573117275461",
  whatsappMensaje:  "Hola DentalCare! Quiero agendar una cita de valoración",
  telefono:         "",
  email:            "",

  instagram:        "@dentalcare_odontologia_digital",
  instagramURL:     "https://www.instagram.com/dentalcare_odontologia_digital/",
  facebook:         "",
  facebookURL:      "",
  tiktok:           "",
  tiktokURL:        "",

  horarioSemana:    "Lunes a Viernes: 8:00am - 6:00pm",
  horarioSabado:    "Sábados: 8:00am - 2:00pm",
  horarioDomingo:   "",

  doctorNombre:     "Equipo DentalCare",
  doctorTitulo:     "Especialistas en Odontología Digital",

  colores: {
    primario:        "#C0392B",   // Rojo suave elegante — color principal
    primarioDeep:    "#A93226",   // Rojo profundo
    primarioMedio:   "#CD6155",   // Rojo medio suave
    primarioLight:   "#E8A89C",   // Rojo claro rosado
    primarioPale:    "#FAEAEA",   // Rojo muy pálido
    primarioSubtle:  "#FDF5F5",   // Casi blanco rosado
    oscuro:          "#132436",   // Azul marino muy oscuro — navbar/footer
    heroFondo:       "#172a3f",   // Hero azul oscuro elegante
    textoPrimario:   "#0D1B2A",
    textoSecundario: "#1B3A5C",
    textoMuted:      "#5A7A9A",
    fondo:           "#FFFFFF",
    fondoAlt:        "#F5F8FC",   // Azul muy pálido sutil
  },

  tipografia: {
    titulos:    "Cormorant Garamond",
    subtitulos: "DM Sans",
    cuerpo:     "Inter",
  },

  stats: [
    { numero: "13.7K", label: "Seguidores",   sublabel: "Comunidad que confía" },
    { numero: "315+",  label: "Casos",         sublabel: "Tratados con éxito" },
    { numero: "100%",  label: "Digital",       sublabel: "Tecnología de vanguardia" },
    { numero: "5★",    label: "Calificación",  sublabel: "Pacientes satisfechos" },
  ],

  servicios: [
    {
      id:          "diseno-sonrisa",
      icono:       "✨",
      nombre:      "Diseño de Sonrisa",
      descripcion: "Smile Design personalizado con tecnología digital. Analizamos tu rostro y diseñamos la sonrisa perfecta para ti con resultados naturales y armoniosos.",
      features:    ["Análisis digital", "Totalmente personalizado", "Resultado natural"],
    },
    {
      id:          "resinas",
      icono:       "💎",
      nombre:      "Resinas de Alta Estética",
      descripcion: "Restauraciones con resinas de última generación para corregir forma, color y tamaño dental. Resultado imperceptible e inmediato con mínima invasión.",
      features:    ["Alta estética", "Mínima invasión", "Resultado inmediato"],
    },
    {
      id:          "limpieza",
      icono:       "🪥",
      nombre:      "Limpieza Dental Profunda",
      descripcion: "Profilaxis y detartraje profesional para eliminar sarro, placa y manchas. Fundamental para mantener tu salud bucal y prevenir enfermedades de encías.",
      features:    ["Detartraje completo", "Prevención", "Toda la familia"],
    },
    {
      id:          "placa",
      icono:       "🛡️",
      nombre:      "Placa Protectora",
      descripcion: "Diseño y elaboración de placas oclusales personalizadas para proteger tus dientes del bruxismo y el desgaste nocturno. Comodidad y protección total.",
      features:    ["Diseño personalizado", "Protección nocturna", "Anti-bruxismo"],
    },
    {
      id:          "radiografia",
      icono:       "🔬",
      nombre:      "Radiografía Digital",
      descripcion: "Diagnóstico por imagen con radiografía digital de última generación. Mayor precisión, menor radiación y resultados inmediatos para un diagnóstico certero.",
      features:    ["Menor radiación", "Alta precisión", "Resultado inmediato"],
    },
    {
      id:          "diagnostico",
      icono:       "🩺",
      nombre:      "Diagnóstico y Tratamiento",
      descripcion: "Valoración odontológica completa con tecnología digital. Plan de tratamiento personalizado y seguimiento cercano para garantizar los mejores resultados.",
      features:    ["Valoración completa", "Plan personalizado", "Seguimiento cercano"],
    },
  ],

  casos: [
    { servicio: "Diseño de Sonrisa",        titulo: "Transformación con diseño digital",      descripcion: "Análisis digital completo y diseño de sonrisa personalizado. Resultado armónico y natural que cambió la vida del paciente." },
    { servicio: "Resinas de Alta Estética",  titulo: "Restauración imperceptible con resinas", descripcion: "Corrección de forma y color en piezas anteriores con resinas premium. Resultado natural e imperceptible desde la primera cita." },
    { servicio: "Limpieza Dental Profunda",  titulo: "Salud periodontal restaurada",            descripcion: "Limpieza profunda y detartraje completo. Encías saludables y sonrisa radiante con seguimiento preventivo personalizado." },
  ],

  testimonios: [
    { nombre: "Valentina R.", servicio: "Diseño de Sonrisa",        ciudad: "Bogotá", texto: "DentalCare transformó mi sonrisa completamente. La tecnología digital que usan es increíble — pude ver el resultado antes del tratamiento. Quedé encantada.", estrellas: 5 },
    { nombre: "Carlos M.",    servicio: "Resinas de Alta Estética",  ciudad: "Bogotá", texto: "Las resinas quedaron perfectas, totalmente naturales. Nadie nota que son restauraciones. El equipo es muy profesional y detallista. Los recomiendo.", estrellas: 5 },
    { nombre: "Laura P.",     servicio: "Limpieza Dental Profunda",  ciudad: "Bogotá", texto: "La limpieza fue muy completa y profesional. Me explicaron todo el proceso y el resultado fue espectacular. Ya agendé la próxima visita preventiva.", estrellas: 5 },
    { nombre: "Andrés V.",    servicio: "Diagnóstico y Tratamiento", ciudad: "Bogotá", texto: "La valoración fue muy detallada. Me explicaron todo con radiografías digitales y el plan de tratamiento fue muy claro. Excelente atención.", estrellas: 5 },
    { nombre: "Sofía G.",     servicio: "Placa Protectora",          ciudad: "Bogotá", texto: "Sufría de bruxismo y la placa que me diseñaron fue la solución perfecta. Ya no me duele la mandíbula y mis dientes están protegidos. Muy recomendada.", estrellas: 5 },
  ],

  faqs: [
    { pregunta: "¿Qué es la odontología digital?",                  respuesta: "Es el uso de tecnología avanzada como radiografía digital, software de diseño de sonrisa y equipos de alta precisión para diagnósticos más certeros y tratamientos más efectivos y cómodos." },
    { pregunta: "¿En qué consiste el diseño de sonrisa?",           respuesta: "Es un proceso donde analizamos digitalmente tu rostro, proporciones y deseos para diseñar la transformación ideal de tu sonrisa. Puedes ver el resultado antes de comenzar el tratamiento." },
    { pregunta: "¿Las resinas estéticas son duraderas?",            respuesta: "Sí. Las resinas de alta estética modernas son muy resistentes y duraderas. Con cuidado adecuado pueden durar muchos años manteniendo su color y forma natural." },
    { pregunta: "¿Con qué frecuencia debo hacer limpieza dental?",  respuesta: "Se recomienda cada 6 meses para eliminar sarro y placa que el cepillado diario no alcanza. Es fundamental para prevenir enfermedades de encías y caries." },
    { pregunta: "¿Qué es el bruxismo y cómo me protejo?",           respuesta: "Es el apretamiento o rechinamiento involuntario de los dientes, generalmente nocturno. La placa protectora personalizada evita el desgaste y alivia el dolor mandibular." },
    { pregunta: "¿La radiografía digital es segura?",               respuesta: "Sí, la radiografía digital emite hasta un 90% menos de radiación que la convencional. Es completamente segura y ofrece imágenes de mayor calidad para un diagnóstico más preciso." },
    { pregunta: "¿Tienen cita de valoración?",                      respuesta: "Sí, ofrecemos cita de valoración donde evaluamos tu salud bucal con tecnología digital y diseñamos un plan de tratamiento personalizado para tus necesidades." },
    { pregunta: "¿Cómo agendo mi cita?",                            respuesta: "Por WhatsApp o Instagram @dentalcare_odontologia_digital. Te respondemos rápidamente para coordinar tu cita de valoración." },
  ],

  seo: {
    titlePrincipal: "DentalCare Odontología Digital Bogotá | Diseño de Sonrisa y Especialistas",
    descripcion:    "DentalCare Odontología Digital en Bogotá — diseño de sonrisa, resinas estéticas, limpieza dental y tecnología digital de vanguardia. Agenda tu cita de valoración.",
    keywords:       "odontología digital Bogotá, diseño de sonrisa Bogotá, resinas estéticas Bogotá, limpieza dental Bogotá, DentalCare odontología",
    canonicalURL:   "https://www.dentalcareodontologia.com.co/",
  },
};

export default CONFIG;