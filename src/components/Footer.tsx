import CONFIG from "../config.js";

const NAV_LINKS = ["Inicio", "Servicios", "Nosotros", "Galería", "Testimonios", "FAQ", "Contacto"];
const NAV_IDS = ["#inicio", "#servicios", "#nosotros", "#galeria", "#testimonios", "#faq", "#contacto"];

// ─── Detecta si el fondo oscuro es claro o oscuro ───────────────
const isLightBackground = (hex: string): boolean => {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.5;
};

const isLight = isLightBackground(CONFIG.colores.oscuro);

// Colores de texto que funcionan sobre cualquier fondo oscuro o claro
const textHigh   = isLight ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.90)";
const textMid    = isLight ? "rgba(0,0,0,0.65)" : "rgba(255,255,255,0.70)";
const textLow    = isLight ? "rgba(0,0,0,0.40)" : "rgba(255,255,255,0.40)";
const borderLine = isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.15)";
const dotColor   = isLight ? "rgba(0,0,0,0.3)"  : "white";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="pt-16 pb-8 relative overflow-hidden"
      style={{ backgroundColor: "var(--oscuro)" }}>

      {/* Línea superior */}
      <div className="absolute top-0 left-0 w-full h-[1px]"
        style={{ background: `linear-gradient(90deg, transparent, ${textMid}, transparent)` }} />

      {/* Patrón decorativo */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, ${dotColor} 1px, transparent 1px), radial-gradient(circle at 70% 60%, ${dotColor} 1px, transparent 1px)`,
          backgroundSize: "120px 120px",
        }} />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Logo */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5"
              style={{ color: "var(--primario)" }}>
              <path d="M12 2C9.5 2 7 3.5 6 6c-1 2.5-.5 5 0 7 .5 2 1 4 1.5 5.5S9 22 10.5 22c1 0 1-1.5 1.5-3s1-3 1.5-3 1 1.5 1.5 3 .5 3 1.5 3c1.5 0 2-2 2.5-3.5S20 15.5 20.5 13c.5-2 1-4.5 0-7-1-2.5-3.5-4-6-4h-2.5z" />
            </svg>
            <span className="font-titulos" style={{ fontSize: "24px", color: "var(--primario-light)" }}>
              {CONFIG.nombreCorto}
            </span>
          </div>

          <span className="font-subtitulos uppercase block"
            style={{ fontSize: "9px", letterSpacing: "0.4em", color: "var(--primario-medio)" }}>
            {CONFIG.doctorTitulo}
          </span>

          <p className="font-cuerpo italic mt-3"
            style={{ fontSize: "13px", color: textMid }}>
            {CONFIG.slogan}
          </p>

          <div className="w-16 h-0.5 mx-auto mt-4"
            style={{ background: "var(--primario)" }} />
        </div>

        {/* 3 columnas */}
        <div className="grid md:grid-cols-3 gap-10 mb-10 text-center md:text-left">

          {/* Navegación */}
          <div>
            <h4 className="font-subtitulos font-bold mb-4 uppercase tracking-wider"
              style={{ fontSize: "11px", color: textHigh }}>
              Navegación
            </h4>
            <div className="space-y-2">
              {NAV_LINKS.map((link, i) => (
                <button key={link}
                  onClick={() => scrollTo(NAV_IDS[i])}
                  className="block font-cuerpo mx-auto md:mx-0 transition-colors hover:opacity-100"
                  style={{ fontSize: "13px", color: textMid }}>
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-subtitulos font-bold mb-4 uppercase tracking-wider"
              style={{ fontSize: "11px", color: textHigh }}>
              Servicios
            </h4>
            <div className="space-y-2">
              {CONFIG.servicios.map((s) => (
                <button key={s.id}
                  onClick={() => scrollTo("#servicios")}
                  className="block font-cuerpo mx-auto md:mx-0 transition-colors hover:opacity-100"
                  style={{ fontSize: "13px", color: textMid }}>
                  {s.nombre}
                </button>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-subtitulos font-bold mb-4 uppercase tracking-wider"
              style={{ fontSize: "11px", color: textHigh }}>
              Contacto
            </h4>
            <div className="space-y-2 font-cuerpo"
              style={{ fontSize: "13px", color: textMid }}>
              <p>{CONFIG.direccion}</p>
              {CONFIG.telefono && <p>{CONFIG.telefono}</p>}
              {CONFIG.instagram && <p>{CONFIG.instagram}</p>}
              <p>{CONFIG.horarioSemana}</p>
              {CONFIG.horarioSabado && <p>{CONFIG.horarioSabado}</p>}
            </div>
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              {CONFIG.instagramURL && (
                <a href={CONFIG.instagramURL} target="_blank" rel="noopener noreferrer"
                  aria-label="Instagram" style={{ color: textMid, fontSize: "18px" }}>
                  📸
                </a>
              )}
              {CONFIG.facebookURL && (
                <a href={CONFIG.facebookURL} target="_blank" rel="noopener noreferrer"
                  aria-label="Facebook" style={{ color: textMid, fontSize: "18px" }}>
                  📘
                </a>
              )}
              {CONFIG.tiktokURL && (
                <a href={CONFIG.tiktokURL} target="_blank" rel="noopener noreferrer"
                  aria-label="TikTok" style={{ color: textMid, fontSize: "18px" }}>
                  🎵
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-2"
          style={{ borderTop: `1px solid ${borderLine}` }}>
          <p className="font-cuerpo" style={{ fontSize: "11px", color: textLow }}>
            © 2025 {CONFIG.nombreNegocio} · {CONFIG.ciudad}, {CONFIG.pais}
          </p>
          <p className="font-cuerpo" style={{ fontSize: "11px", color: textLow }}>
            🦷 {CONFIG.slogan}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;