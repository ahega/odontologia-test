import { useEffect, useState } from "react";
import CONFIG from "../config.js";
import { ChevronDown } from "lucide-react";

const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMensaje)}`;

const Hero = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const delay = (i: number) => ({ transitionDelay: `${i * 0.15}s` });

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-oscuro overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.12]" style={{ background: `radial-gradient(circle, var(--primario), transparent 70%)` }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.10]" style={{ background: `radial-gradient(circle, var(--primario-medio), transparent 70%)` }} />
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-[8%] w-full grid lg:grid-cols-2 gap-12 items-center pt-40 pb-32 lg:pt-32 lg:pb-0">
        {/* Left */}
        <div className="max-w-[680px]">
          <span
            className="inline-block rounded-full px-4 py-1.5 font-subtitulos mb-6 transition-all duration-600"
            style={{
              fontSize: "11px",
              background: "rgba(45,189,143,0.2)",
              border: "1px solid rgba(45,189,143,0.4)",
              color: "var(--primario-light)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              ...delay(0),
            }}
          >
            {CONFIG.ciudad} · {CONFIG.doctorTitulo}
          </span>

          <h1
            className="font-titulos font-semibold leading-[1.15] text-fondo mb-0 transition-all duration-600"
            style={{
              fontSize: "clamp(38px, 5vw, 64px)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              ...delay(1),
            }}
          >
            {CONFIG.sloganHero}
          </h1>

          <div
            className="w-16 h-[3px] rounded bg-primario my-6 transition-all duration-600"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", ...delay(2) }}
          />

          <p
            className="font-cuerpo text-fondo/80 leading-[1.9] max-w-[530px] mb-6 transition-all duration-600"
            style={{ fontSize: "17px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", ...delay(3) }}
          >
            {CONFIG.subtituloHero}
          </p>

          {/* Service tags */}
          <div
            className="flex flex-wrap gap-2 mb-8 transition-all duration-600"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", ...delay(4) }}
          >
            {CONFIG.servicios.slice(0, 5).map((s) => (
              <span
                key={s.id}
                className="inline-flex items-center gap-1 rounded-full px-3 py-1 font-subtitulos"
                style={{ fontSize: "11px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }}
              >
                {s.icono} {s.nombre}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div
            className="flex flex-wrap gap-3 mb-8 transition-all duration-600"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", ...delay(5) }}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primario text-fondo rounded-full px-6 py-3 font-subtitulos font-bold transition-colors duration-300 hover:bg-primario-deep"
              style={{ fontSize: "14px" }}
            >
              📅 Agendar Mi Cita
            </a>
            <button
              onClick={() => document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full px-6 py-3 font-subtitulos font-bold transition-colors duration-300 hover:bg-fondo/10"
              style={{ fontSize: "14px", border: "1px solid white", color: "white" }}
            >
              Ver Servicios →
            </button>
          </div>

          {/* Trust */}
          <p
            className="font-subtitulos text-fondo/50 transition-all duration-600"
            style={{ fontSize: "10px", opacity: visible ? 1 : 0, ...delay(6) }}
          >
            {CONFIG.ciudad} · {CONFIG.servicios.length} Servicios · {CONFIG.doctorNombre}
          </p>
        </div>

        {/* Right — placeholder */}
        <div className="hidden lg:flex items-center justify-center">
          <div
            className="w-full max-w-[460px] h-[500px] rounded-2xl flex items-center justify-center"
            style={{ background: "rgba(45,189,143,0.2)", boxShadow: "0 0 60px rgba(45,189,143,0.2)" }}
          >
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-primario opacity-60">
              <path d="M12 2C9.5 2 7 3.5 6 6c-1 2.5-.5 5 0 7 .5 2 1 4 1.5 5.5S9 22 10.5 22c1 0 1-1.5 1.5-3s1-3 1.5-3 1 1.5 1.5 3 .5 3 1.5 3c1.5 0 2-2 2.5-3.5S20 15.5 20.5 13c.5-2 1-4.5 0-7-1-2.5-3.5-4-6-4h-2.5z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bounce chevron */}
      <button
        onClick={() => document.querySelector("#stats")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-fondo/40 animate-bounce-chevron"
        aria-label="Scroll hacia abajo"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default Hero;
