import CONFIG from "../config.js";
import { useScrollAnimate } from "../hooks/useScrollAnimate";

const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMensaje)}`;

const Services = () => {
  const ref = useScrollAnimate();

  return (
    <section id="servicios" className="bg-fondo py-20 scroll-animate" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="font-subtitulos uppercase tracking-[0.2em] text-primario" style={{ fontSize: "12px" }}>✦ SERVICIOS</span>
          <h2 className="font-titulos text-oscuro mt-3" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
            Todo lo que Tu Sonrisa Necesita
          </h2>
          <p className="font-cuerpo text-texto-muted mt-2" style={{ fontSize: "14px" }}>
            Atención integral en {CONFIG.ciudad}
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {CONFIG.servicios.map((s, i) => (
            <div
              key={s.id}
              className="scroll-child scroll-animate bg-fondo rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-primario-subtle cursor-default group"
              style={{
                borderTop: "4px solid var(--primario)",
                boxShadow: "0 4px 20px rgba(45,189,143,0.08)",
                transform: i % 2 === 1 ? "translateY(20px)" : undefined,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(45,189,143,0.15)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(45,189,143,0.08)"; }}
            >
              <div className="text-3xl mb-3">{s.icono}</div>
              <h3 className="font-subtitulos font-bold text-oscuro mb-2" style={{ fontSize: "16px" }}>{s.nombre}</h3>
              <p className="font-cuerpo text-texto-muted mb-4 leading-relaxed" style={{ fontSize: "14px" }}>{s.descripcion}</p>
              <div className="flex flex-col gap-1">
                {s.features.map((f) => (
                  <span key={f} className="font-subtitulos text-primario" style={{ fontSize: "12px" }}>✓ {f}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-primario text-fondo rounded-full px-8 py-3 font-subtitulos font-bold transition-colors duration-300 hover:bg-primario-deep"
          >
            Agendar Mi Cita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
