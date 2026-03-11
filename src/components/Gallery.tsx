import CONFIG from "../config.js";
import { useScrollAnimate } from "../hooks/useScrollAnimate";

import caso1Antes from "../assets/gallery/caso1-antes.jpg";
import caso1Despues from "../assets/gallery/caso1-despues.jpg";
import caso2Antes from "../assets/gallery/caso2-antes.jpg";
import caso2Despues from "../assets/gallery/caso2-despues.jpg";
import caso3Antes from "../assets/gallery/caso3-antes.jpg";
import caso3Despues from "../assets/gallery/caso3-despues.jpg";
import caso4Antes from "../assets/gallery/caso4-antes.jpg";
import caso4Despues from "../assets/gallery/caso4-despues.jpg";
import caso5Antes from "../assets/gallery/caso5-antes.jpg";
import caso5Despues from "../assets/gallery/caso5-despues.jpg";
import caso6Antes from "../assets/gallery/caso6-antes.jpg";
import caso6Despues from "../assets/gallery/caso6-despues.jpg";

const casoImages = [
  { antes: caso1Antes, despues: caso1Despues },
  { antes: caso2Antes, despues: caso2Despues },
  { antes: caso3Antes, despues: caso3Despues },
  { antes: caso4Antes, despues: caso4Despues },
  { antes: caso5Antes, despues: caso5Despues },
  { antes: caso6Antes, despues: caso6Despues },
];

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
          {CONFIG.casos.map((caso, i) => {
            const imgs = casoImages[i];
            return (
              <div
                key={i}
                className="scroll-child scroll-animate bg-fondo rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
                style={{ boxShadow: "0 4px 20px rgba(45,189,143,0.10)" }}
              >
                {/* Before / After split */}
                <div className="flex h-48">
                  <div className="flex-1 relative overflow-hidden">
                    <span className="absolute top-3 left-3 z-10 bg-oscuro text-fondo rounded-full px-2 py-0.5 font-subtitulos" style={{ fontSize: "9px" }}>ANTES</span>
                    {imgs ? (
                      <img src={imgs.antes} alt={`Antes - ${caso.servicio}`} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-primario-pale flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-texto-muted opacity-40">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="w-px bg-fondo" />
                  <div className="flex-1 relative overflow-hidden">
                    <span className="absolute top-3 right-3 z-10 bg-primario text-fondo rounded-full px-2 py-0.5 font-subtitulos" style={{ fontSize: "9px" }}>DESPUÉS</span>
                    {imgs ? (
                      <img src={imgs.despues} alt={`Después - ${caso.servicio}`} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-primario-subtle flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-primario">
                          <path d="M12 2C9.5 2 7 3.5 6 6c-1 2.5-.5 5 0 7 .5 2 1 4 1.5 5.5S9 22 10.5 22c1 0 1-1.5 1.5-3s1-3 1.5-3 1 1.5 1.5 3 .5 3 1.5 3c1.5 0 2-2 2.5-3.5S20 15.5 20.5 13c.5-2 1-4.5 0-7-1-2.5-3.5-4-6-4h-2.5z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {/* Info */}
                <div className="p-5">
                  <span className="inline-block bg-primario-pale text-primario rounded-full px-3 py-0.5 font-subtitulos mb-2" style={{ fontSize: "11px" }}>{caso.servicio}</span>
                  <h3 className="font-subtitulos font-bold text-oscuro" style={{ fontSize: "15px" }}>{caso.titulo}</h3>
                  <p className="font-cuerpo text-texto-muted mt-1" style={{ fontSize: "13px" }}>{caso.descripcion}</p>
                </div>
              </div>
            );
          })}
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
