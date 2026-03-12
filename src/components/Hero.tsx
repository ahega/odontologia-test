import { useEffect, useState } from "react";
import CONFIG from "../config.js";
import { ChevronDown } from "lucide-react";

// ─── Imagen hero opcional ────────────────────────────────────────
// ─── Imagen hero opcional — se intenta cargar, si no existe queda null ──
let heroImg: string | null = null;
try {
  const mod = import.meta.glob("../assets/gallery/imagenHero.png", { eager: true }) as Record<string, { default: string }>;
  const keys = Object.keys(mod);
  if (keys.length > 0) heroImg = mod[keys[0]].default;
} catch {
  heroImg = null;
}

const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMensaje)}`;

const isLightBackground = (hex: string): boolean => {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.5;
};

const isLight = isLightBackground(CONFIG.colores.heroFondo || CONFIG.colores.oscuro);
const textColor      = isLight ? CONFIG.colores.textoPrimario   : "#FFFFFF";
const textColorMuted = isLight ? CONFIG.colores.textoSecundario : "rgba(255,255,255,0.80)";
const textColorFaint = isLight ? CONFIG.colores.textoMuted      : "rgba(255,255,255,0.50)";
const tagBg          = isLight ? "rgba(0,0,0,0.06)"             : "rgba(255,255,255,0.10)";
const tagBorder      = isLight ? "rgba(0,0,0,0.12)"             : "rgba(255,255,255,0.15)";
const ghostBorder    = isLight ? CONFIG.colores.primario        : "rgba(255,255,255,0.60)";
const pr = parseInt(CONFIG.colores.primario.slice(1,3),16);
const pg = parseInt(CONFIG.colores.primario.slice(3,5),16);
const pb = parseInt(CONFIG.colores.primario.slice(5,7),16);
const badgeBg     = isLight ? `rgba(${pr},${pg},${pb},0.15)` : "rgba(255,255,255,0.12)";
const badgeBorder = isLight ? `rgba(${pr},${pg},${pb},0.35)` : "rgba(255,255,255,0.25)";

const Hero = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  const delay = (i: number) => ({ transitionDelay: `${i * 0.15}s` });

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: CONFIG.colores.heroFondo || "var(--oscuro)" }}
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.12]"
        style={{ background: "radial-gradient(circle, var(--primario), transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.10]"
        style={{ background: "radial-gradient(circle, var(--primario-medio), transparent 70%)" }} />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: isLight
            ? "radial-gradient(rgba(0,0,0,0.3) 1px, transparent 1px)"
            : "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-[8%] w-full grid lg:grid-cols-2 gap-12 items-center pt-40 pb-32 lg:pt-32 lg:pb-0">
        <div className="max-w-[680px]">

          <span className="inline-block rounded-full px-4 py-1.5 font-subtitulos mb-6 transition-all duration-600"
            style={{
              fontSize: "11px",
              background: badgeBg,
              border: `1px solid ${badgeBorder}`,
              color: CONFIG.colores.primario,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              ...delay(0),
            }}>
            {CONFIG.ciudad} - {CONFIG.doctorTitulo}
          </span>

          <h1 className="font-titulos font-semibold leading-[1.15] mb-0 transition-all duration-600"
            style={{
              fontSize: "clamp(38px, 5vw, 64px)",
              color: textColor,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              ...delay(1),
            }}>
            {CONFIG.sloganHero}
          </h1>

          <div className="w-16 h-[3px] rounded my-6 transition-all duration-600"
            style={{
              background: "var(--primario)",
              opacity: visible ? 1 : 0,
              ...delay(2),
            }} />

          <p className="font-cuerpo leading-[1.9] max-w-[530px] mb-6 transition-all duration-600"
            style={{
              fontSize: "17px",
              color: textColorMuted,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              ...delay(3),
            }}>
            {CONFIG.subtituloHero}
          </p>

          <div className="flex flex-wrap gap-2 mb-8 transition-all duration-600"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              ...delay(4),
            }}>
            {CONFIG.servicios.slice(0, 5).map((s) => (
              <span key={s.id}
                className="inline-flex items-center gap-1 rounded-full px-3 py-1 font-subtitulos"
                style={{
                  fontSize: "11px",
                  background: tagBg,
                  border: `1px solid ${tagBorder}`,
                  color: textColorMuted,
                }}>
                {s.icono} {s.nombre}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-8 transition-all duration-600"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              ...delay(5),
            }}>
            <a href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-6 py-3 font-subtitulos font-bold transition-colors duration-300"
              style={{
                fontSize: "14px",
                background: "var(--primario)",
                color: "#FFFFFF",
                textDecoration: "none",
              }}>
              Agendar Mi Cita
            </a>
            <button
              onClick={() => document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full px-6 py-3 font-subtitulos font-bold transition-all duration-300"
              style={{
                fontSize: "14px",
                border: `1.5px solid ${ghostBorder}`,
                color: isLight ? CONFIG.colores.primario : "#FFFFFF",
                background: "transparent",
              }}>
              Ver Servicios
            </button>
          </div>

          <p className="font-subtitulos transition-all duration-600"
            style={{
              fontSize: "10px",
              color: textColorFaint,
              opacity: visible ? 1 : 0,
              ...delay(6),
            }}>
            {CONFIG.ciudad} - {CONFIG.servicios.length} Servicios - {CONFIG.doctorNombre}
          </p>
        </div>

        {/* ── Lado derecho: foto o placeholder ── */}
        <div className="hidden lg:flex items-center justify-center">
          {heroImg ? (
            // ── CON IMAGEN ──────────────────────────────────────
            <div className="relative w-full max-w-[460px]">
              <div className="relative rounded-2xl overflow-hidden"
                style={{
                  height: "520px",
                  boxShadow: `0 25px 60px rgba(${pr},${pg},${pb},0.25)`,
                  border: `1px solid rgba(${pr},${pg},${pb},0.20)`,
                }}>
                <img
                  src={heroImg}
                  alt={CONFIG.nombreNegocio}
                  className="w-full h-full object-cover object-center"
                />
                {/* Gradiente inferior */}
                <div className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, rgba(${pr},${pg},${pb},0.40) 0%, transparent 55%)`,
                  }} />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-subtitulos font-bold text-white"
                    style={{ fontSize: "13px", letterSpacing: "0.05em" }}>
                    {CONFIG.nombreNegocio}
                  </p>
                  <p className="font-cuerpo text-white/70 mt-1"
                    style={{ fontSize: "11px" }}>
                    {CONFIG.ciudad}, {CONFIG.pais}
                  </p>
                </div>
              </div>
              {/* Badge flotante */}
              <div className="absolute -bottom-4 -right-4 rounded-xl px-4 py-3"
                style={{
                  background: "var(--primario)",
                  boxShadow: `0 8px 24px rgba(${pr},${pg},${pb},0.40)`,
                }}>
                <p className="font-subtitulos font-bold text-white text-center"
                  style={{ fontSize: "18px" }}>
                  {CONFIG.stats[0].numero}
                </p>
                <p className="font-cuerpo text-white/80 text-center"
                  style={{ fontSize: "10px" }}>
                  {CONFIG.stats[0].sublabel}
                </p>
              </div>
            </div>
          ) : (
            // ── SIN IMAGEN: placeholder original ───────────────
            <div className="w-full max-w-[460px] h-[500px] rounded-2xl flex items-center justify-center"
              style={{
                background: isLight ? `rgba(${pr},${pg},${pb},0.08)` : "rgba(255,255,255,0.06)",
                boxShadow: `0 0 60px rgba(${pr},${pg},${pb},0.15)`,
                border: `1px solid rgba(${pr},${pg},${pb},0.20)`,
              }}>
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="0.8"
                style={{ color: "var(--primario)", opacity: 0.7 }}>
                <path d="M12 2C9.5 2 7 3.5 6 6c-1 2.5-.5 5 0 7 .5 2 1 4 1.5 5.5S9 22 10.5 22c1 0 1-1.5 1.5-3s1-3 1.5-3 1 1.5 1.5 3 .5 3 1.5 3c1.5 0 2-2 2.5-3.5S20 15.5 20.5 13c.5-2 1-4.5 0-7-1-2.5-3.5-4-6-4h-2.5z" />
              </svg>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => document.querySelector("#stats")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: textColorFaint, background: "transparent", border: "none" }}
        aria-label="Scroll hacia abajo">
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default Hero;
