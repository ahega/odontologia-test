import { useState, useEffect, useCallback } from "react";
import CONFIG from "../config.js";
import { useScrollAnimate } from "../hooks/useScrollAnimate";

const Testimonials = () => {
  const ref = useScrollAnimate();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = CONFIG.testimonios.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  // Touch swipe
  const [touchStart, setTouchStart] = useState(0);
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else setCurrent((c) => (c - 1 + total) % total);
    }
  };

  const t = CONFIG.testimonios[current];

  return (
    <section id="testimonios" className="bg-fondo py-20 scroll-animate" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="font-subtitulos uppercase tracking-[0.2em] text-primario" style={{ fontSize: "12px" }}>✦ TESTIMONIOS</span>
          <h2 className="font-titulos text-oscuro mt-3" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
            Lo que Dicen Nuestros Pacientes
          </h2>
        </div>

        <div
          className="bg-primario-subtle rounded-2xl p-8 md:p-12 relative"
          style={{ borderTop: "2px solid var(--primario)" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Quote mark */}
          <div className="absolute top-4 right-6 font-titulos text-primario-pale" style={{ fontSize: "80px", lineHeight: 1 }}>"</div>

          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: t.estrellas }).map((_, i) => (
              <span key={i} className="text-primario" style={{ fontSize: "18px" }}>★</span>
            ))}
          </div>

          <p className="font-cuerpo italic text-texto-secundario leading-[1.9] mb-6 relative z-10" style={{ fontSize: "16px" }}>
            "{t.texto}"
          </p>

          <p className="font-subtitulos font-bold text-oscuro" style={{ fontSize: "13px" }}>
            {t.nombre} | {t.servicio}, {t.ciudad}
          </p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {CONFIG.testimonios.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-2.5 h-2.5 rounded-full transition-all duration-300"
              style={{ background: i === current ? "var(--primario)" : "var(--primario-pale)" }}
              aria-label={`Testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
