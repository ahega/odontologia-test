import CONFIG from "../config.js";
import { useScrollAnimate } from "../hooks/useScrollAnimate";

const Gallery = () => {
  const ref = useScrollAnimate();

  return (
    <section id="galeria" className="bg-primario-subtle py-20 scroll-animate" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="font-subtitulos uppercase tracking-[0.2em] text-primario" style={{ fontSize: "12px" }}>✦ ANTES Y DESPUÉS</span>
          <h2 className="font-titulos text-oscuro mt-3" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
            Transformaciones Reales
          </h2>
          <p className="font-cuerpo text-texto-muted mt-2" style={{ fontSize: "14px" }}>{CONFIG.ciudad}</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {CONFIG.casos.map((caso, i) => (
            <div
              key={i}
              className="scroll-child scroll-animate bg-fondo rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
              style={{ boxShadow: "0 4px 20px rgba(45,189,143,0.10)" }}
            >
              {/* Before / After split */}
              <div className="flex h-48">
                <div className="flex-1 bg-primario-pale flex flex-col items-center justify-center relative">
                  <span className="absolute top-3 left-3 bg-oscuro text-fondo rounded-full px-2 py-0.5 font-subtitulos" style={{ fontSize: "9px" }}>ANTES</span>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-texto-muted opacity-40">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
                <div className="w-px bg-fondo" />
                <div className="flex-1 bg-primario-subtle flex flex-col items-center justify-center relative">
                  <span className="absolute top-3 right-3 bg-primario text-fondo rounded-full px-2 py-0.5 font-subtitulos" style={{ fontSize: "9px" }}>DESPUÉS</span>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-primario">
                    <path d="M12 2C9.5 2 7 3.5 6 6c-1 2.5-.5 5 0 7 .5 2 1 4 1.5 5.5S9 22 10.5 22c1 0 1-1.5 1.5-3s1-3 1.5-3 1 1.5 1.5 3 .5 3 1.5 3c1.5 0 2-2 2.5-3.5S20 15.5 20.5 13c.5-2 1-4.5 0-7-1-2.5-3.5-4-6-4h-2.5z" />
                  </svg>
                </div>
              </div>
              {/* Info */}
              <div className="p-5">
                <span className="inline-block bg-primario-pale text-primario rounded-full px-3 py-0.5 font-subtitulos mb-2" style={{ fontSize: "11px" }}>{caso.servicio}</span>
                <h3 className="font-subtitulos font-bold text-oscuro" style={{ fontSize: "15px" }}>{caso.titulo}</h3>
                <p className="font-cuerpo text-texto-muted mt-1" style={{ fontSize: "13px" }}>{caso.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {CONFIG.instagramURL && (
          <div className="text-center mt-10">
            <a href={CONFIG.instagramURL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primario font-subtitulos font-bold hover:underline" style={{ fontSize: "14px" }}>
              📸 Ver más en Instagram →
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
