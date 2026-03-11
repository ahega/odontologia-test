import { useState } from "react";
import CONFIG from "../config.js";
import { useScrollAnimate } from "../hooks/useScrollAnimate";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const ref = useScrollAnimate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-fondo py-20 scroll-animate" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="font-subtitulos uppercase tracking-[0.2em] text-primario" style={{ fontSize: "12px" }}>✦ PREGUNTAS FRECUENTES</span>
          <h2 className="font-titulos text-oscuro mt-3" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
            Resolvemos Tus Dudas
          </h2>
        </div>

        <div className="space-y-3">
          {CONFIG.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="scroll-child scroll-animate rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  border: "1px solid rgba(45,189,143,0.2)",
                  borderLeft: isOpen ? "4px solid var(--primario)" : "1px solid var(--border-mint)",
                  background: isOpen ? "var(--primario-subtle)" : "var(--fondo)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-subtitulos font-semibold text-texto-primario" style={{ fontSize: "15px" }}>
                    {faq.pregunta}
                  </span>
                  <ChevronDown
                    size={18}
                    className="text-primario transition-transform duration-300 flex-shrink-0 ml-4"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "200px" : "0", opacity: isOpen ? 1 : 0 }}
                >
                  <p className="px-5 pb-5 font-cuerpo text-texto-muted leading-[1.8]" style={{ fontSize: "15px" }}>
                    {faq.respuesta}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
