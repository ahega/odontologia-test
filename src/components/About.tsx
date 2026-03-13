import CONFIG from "../config.js";
import { useScrollAnimate } from "../hooks/useScrollAnimate";

// ─── Imagen opcional ─────────────────────────────────────────────
let sobreImg: string | null = null;
try {
  const mod = import.meta.glob("../assets/gallery/imagenSobre.png", { eager: true }) as Record<string, { default: string }>;
  const keys = Object.keys(mod);
  if (keys.length > 0) sobreImg = mod[keys[0]].default;
} catch { sobreImg = null; }

const values = [
  { icon: "✓", title: "Especialistas Certificados" },
  { icon: "✓", title: "Plan 100% Personalizado" },
  { icon: "✓", title: "Tecnología Moderna" },
  { icon: "✓", title: "Atención para Toda la Familia" },
];

const About = () => {
  const ref = useScrollAnimate();

  return (
    <section id="nosotros" className="bg-fondo-alt py-20 scroll-animate" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left — Photo o placeholder */}
        <div className="scroll-child scroll-animate">
          <div className="w-full rounded-2xl overflow-hidden"
            style={{ height: "clamp(280px, 50vw, 440px)", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
            {sobreImg ? (
              <img
                src={sobreImg}
                alt={CONFIG.doctorNombre}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full bg-primario-pale flex items-center justify-center">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="0.8"
                  style={{ color: "var(--primario)", opacity: 0.6 }}>
                  <circle cx="12" cy="8" r="4" />
                  <path d="M5 20c0-4 3-7 7-7s7 3 7 7" />
                </svg>
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {["🦷 Especialistas", "✨ Estética", CONFIG.ciudad].map((t) => (
              <span key={t} className="bg-primario-pale text-primario rounded-full px-3 py-1 font-subtitulos"
                style={{ fontSize: "11px" }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Content */}
        <div className="scroll-child scroll-animate">
          <span className="font-subtitulos uppercase tracking-[0.2em] text-primario"
            style={{ fontSize: "12px" }}>
            {"✦"} SOBRE {CONFIG.doctorNombre}
          </span>
          <h2 className="font-titulos mt-3 mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "var(--texto-primario)" }}>
            Comprometidos con Tu Sonrisa y Tu Salud Dental
          </h2>
          <div className="w-14 h-[3px] rounded mb-6" style={{ background: "var(--primario)" }} />
          <p className="font-cuerpo leading-[1.95] mb-8"
            style={{ fontSize: "16px", color: "var(--texto-secundario)" }}>
            {CONFIG.descripcionSobre}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="bg-fondo rounded-xl p-4 shadow-sm"
                style={{ borderTop: "3px solid var(--primario)" }}>
                <span className="font-bold mr-2" style={{ color: "var(--primario)" }}>{v.icon}</span>
                <span className="font-subtitulos" style={{ fontSize: "13px", fontWeight: 600, color: "var(--texto-primario)" }}>
                  {v.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
