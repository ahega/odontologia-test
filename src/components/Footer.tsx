import CONFIG from "../config.js";

const NAV_LINKS = ["Inicio", "Servicios", "Nosotros", "Galería", "Testimonios", "FAQ", "Contacto"];
const NAV_IDS = ["#inicio", "#servicios", "#nosotros", "#galeria", "#testimonios", "#faq", "#contacto"];

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-oscuro pt-16 pb-8 relative overflow-hidden">

      {/* línea superior premium */}
      <div
        className="absolute top-0 left-0 w-full h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)"
        }}
      />

      {/* patrón decorativo sutil */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)",
          backgroundSize: "120px 120px"
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Logo */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-primario"
            >
              <path d="M12 2C9.5 2 7 3.5 6 6c-1 2.5-.5 5 0 7 .5 2 1 4 1.5 5.5S9 22 10.5 22c1 0 1-1.5 1.5-3s1-3 1.5-3 1 1.5 1.5 3 .5 3 1.5 3c1.5 0 2-2 2.5-3.5S20 15.5 20.5 13c.5-2 1-4.5 0-7-1-2.5-3.5-4-6-4h-2.5z" />
            </svg>

            <span
              className="font-titulos text-primario-light"
              style={{ fontSize: "24px" }}
            >
              {CONFIG.nombreCorto}
            </span>
          </div>

          <span
            className="font-subtitulos uppercase text-primario-medio"
            style={{ fontSize: "9px", letterSpacing: "0.4em" }}
          >
            {CONFIG.doctorTitulo}
          </span>

          <p
            className="font-cuerpo italic text-fondo/90 mt-3"
            style={{ fontSize: "13px" }}
          >
            {CONFIG.slogan}
          </p>

          <div className="w-16 h-0.5 bg-primario mx-auto mt-4" />
        </div>

        {/* 3 columnas */}
        <div className="grid md:grid-cols-3 gap-10 mb-10 text-center md:text-left">

          {/* Navegación */}
          <div>
            <h4
              className="font-subtitulos font-bold text-fondo mb-4 uppercase tracking-wider"
              style={{ fontSize: "11px" }}
            >
              Navegación
            </h4>

            <div className="space-y-2">
              {NAV_LINKS.map((link, i) => (
                <button
                  key={link}
                  onClick={() => scrollTo(NAV_IDS[i])}
                  className="block text-fondo/90 hover:text-primario transition-colors font-cuerpo mx-auto md:mx-0"
                  style={{ fontSize: "13px" }}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4
              className="font-subtitulos font-bold text-fondo mb-4 uppercase tracking-wider"
              style={{ fontSize: "11px" }}
            >
              Servicios
            </h4>

            <div className="space-y-2">
              {CONFIG.servicios.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo("#servicios")}
                  className="block text-fondo/90 hover:text-primario transition-colors font-cuerpo mx-auto md:mx-0"
                  style={{ fontSize: "13px" }}
                >
                  {s.nombre}
                </button>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4
              className="font-subtitulos font-bold text-fondo mb-4 uppercase tracking-wider"
              style={{ fontSize: "11px" }}
            >
              Contacto
            </h4>

            <div
              className="space-y-2 text-fondo/90 font-cuerpo"
              style={{ fontSize: "13px" }}
            >
              <p>{CONFIG.direccion}</p>
              {CONFIG.telefono && <p>{CONFIG.telefono}</p>}
              {CONFIG.instagram && <p>{CONFIG.instagram}</p>}
              <p>{CONFIG.horarioSemana}</p>
            </div>

            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              {CONFIG.instagramURL && (
                <a
                  href={CONFIG.instagramURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fondo hover:text-primario transition-colors"
                  aria-label="Instagram"
                >
                  📸
                </a>
              )}

              {CONFIG.facebookURL && (
                <a
                  href={CONFIG.facebookURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fondo hover:text-primario transition-colors"
                  aria-label="Facebook"
                >
                  📘
                </a>
              )}

              {CONFIG.tiktokURL && (
                <a
                  href={CONFIG.tiktokURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fondo hover:text-primario transition-colors"
                  aria-label="TikTok"
                >
                  🎵
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-fondo/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p
            className="font-cuerpo text-fondo/80"
            style={{ fontSize: "11px" }}
          >
            © 2025 {CONFIG.nombreNegocio} · {CONFIG.ciudad}, {CONFIG.pais}
          </p>

          <p
            className="font-cuerpo text-fondo/80"
            style={{ fontSize: "11px" }}
          >
            🦷 {CONFIG.slogan}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;