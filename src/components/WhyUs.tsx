import CONFIG from "../config.js";
import { useScrollAnimate } from "../hooks/useScrollAnimate";

const features = [
  { icon: "🌿", title: "Atención Personalizada", desc: "Cada paciente recibe un plan único adaptado a sus necesidades." },
  { icon: "✨", title: "Enfoque Estético y Funcional", desc: "Combinamos belleza y salud en cada tratamiento." },
  { icon: "🦷", title: "Servicios Integrales", desc: "Todo lo que necesitas en un solo lugar." },
  { icon: "📱", title: "Contacto Directo por WhatsApp", desc: "Respuesta rápida y atención inmediata." },
  { icon: "💎", title: "Materiales Premium", desc: "Solo utilizamos materiales de la más alta calidad." },
];

const WhyUs = () => {
  const ref = useScrollAnimate();

  return (
    <section className="bg-primario-subtle py-20 scroll-animate" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="font-subtitulos uppercase tracking-[0.2em] text-primario" style={{ fontSize: "12px" }}>✦ POR QUÉ ELEGIRNOS</span>
          <h2 className="font-titulos text-oscuro mt-3" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
            La Diferencia {CONFIG.nombreCorto}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...features, { icon: "📍", title: `${CONFIG.ciudad}, Cerca de Ti`, desc: "Ubicación accesible para toda la familia." }].map((f) => (
            <div
              key={f.title}
              className="scroll-child scroll-animate bg-fondo rounded-xl p-6 transition-all duration-300 hover:shadow-lg group"
              style={{ borderTop: "0px solid transparent" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderTop = "4px solid var(--primario)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderTop = "0px solid transparent"; }}
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-subtitulos font-bold text-oscuro mb-1" style={{ fontSize: "15px" }}>{f.title}</h3>
              <p className="font-cuerpo text-texto-muted" style={{ fontSize: "13px" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
