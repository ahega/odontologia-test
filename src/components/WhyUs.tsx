import CONFIG from "../config.js";
import { useScrollAnimate } from "../hooks/useScrollAnimate";
import { UserCheck, Sparkles, LayoutGrid, MessageCircle, Gem, MapPin } from "lucide-react";

const features = [
  { icon: <UserCheck size={24} />,     title: "Atención Personalizada",        desc: "Cada paciente recibe un plan único adaptado a sus necesidades y objetivos." },
  { icon: <Sparkles size={24} />,      title: "Enfoque Estético y Funcional",  desc: "Combinamos belleza y salud en cada tratamiento para un resultado integral." },
  { icon: <LayoutGrid size={24} />,    title: "Servicios Integrales",          desc: "Todo lo que necesitas en un solo lugar, con el más alto nivel de calidad." },
  { icon: <MessageCircle size={24} />, title: "Contacto Directo por WhatsApp", desc: "Respuesta rápida y atención inmediata cuando más lo necesitas." },
  { icon: <Gem size={24} />,           title: "Materiales Premium",            desc: "Solo utilizamos materiales certificados de la más alta calidad del mercado." },
  { icon: <MapPin size={24} />,        title: `${CONFIG.ciudad}, Cerca de Ti`, desc: "Ubicación accesible con fácil acceso para toda la familia." },
];

const WhyUs = () => {
  const ref = useScrollAnimate();

  return (
    <section className="bg-primario-subtle py-20 scroll-animate" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="font-subtitulos uppercase tracking-[0.2em]"
            style={{ fontSize: "12px", color: "var(--primario)" }}>
            {"✦"} POR QUÉ ELEGIRNOS
          </span>
          <h2 className="font-titulos mt-3"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "var(--texto-primario)" }}>
            La Diferencia {CONFIG.nombreCorto}
          </h2>
          <div className="w-14 h-[2px] rounded mx-auto mt-4"
            style={{ background: "var(--primario)" }} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="scroll-child scroll-animate bg-fondo rounded-2xl p-6 transition-all duration-300 group cursor-default"
              style={{
                border: "1px solid var(--primario-pale)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--primario)";
                el.style.boxShadow = "0 8px 30px rgba(0,0,0,0.10)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--primario-pale)";
                el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Icono */}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                style={{ background: "var(--primario-pale)", color: "var(--primario)" }}>
                {f.icon}
              </div>

              <h3 className="font-subtitulos font-bold mb-2"
                style={{ fontSize: "15px", color: "var(--texto-primario)" }}>
                {f.title}
              </h3>
              <p className="font-cuerpo leading-relaxed"
                style={{ fontSize: "13px", color: "var(--texto-muted)" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
