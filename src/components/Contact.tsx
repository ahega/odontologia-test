import { useState } from "react";
import CONFIG from "../config.js";
import { useScrollAnimate } from "../hooks/useScrollAnimate";

const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMensaje)}`;

const Contact = () => {
  const ref = useScrollAnimate();
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    nombre: "", telefono: "", email: "", servicio: "", paciente: "", fecha: "", turno: "", conocio: "", mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.telefono || !form.servicio) return;
    setFormState("loading");
    // Build WhatsApp message with form data
    const msg = `Hola! Quiero agendar una cita 😁\n\nNombre: ${form.nombre}\nTeléfono: ${form.telefono}\nServicio: ${form.servicio}\nPaciente: ${form.paciente}\nFecha: ${form.fecha}\nTurno: ${form.turno}\nMensaje: ${form.mensaje}`;
    setTimeout(() => {
      setFormState("success");
      window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    }, 800);
  };

  const inputClass = "w-full rounded-xl border border-gray-200 px-4 py-3 font-cuerpo text-sm text-oscuro outline-none transition-all duration-200 focus:border-primario focus:ring-2 focus:ring-primario/20";

  return (
    <section id="contacto" className="bg-oscuro py-20 relative overflow-hidden scroll-animate" ref={ref}>
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.10]" style={{ background: `radial-gradient(circle, var(--primario), transparent 70%)` }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="font-subtitulos uppercase tracking-[0.2em] text-fondo/70" style={{ fontSize: "12px" }}>✦ CONTACTO</span>
          <h2 className="font-titulos text-fondo mt-3" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
            Agenda Tu Cita Hoy
          </h2>
          <p className="font-cuerpo text-fondo/70 mt-2" style={{ fontSize: "14px" }}>Te respondemos rápido</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left — Info */}
          <div className="rounded-2xl p-8" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(45,189,143,0.3)" }}>
            <h3 className="font-titulos text-fondo mb-6" style={{ fontSize: "22px" }}>Estamos aquí para ti 🦷</h3>

            <div className="space-y-4 text-fondo font-cuerpo" style={{ fontSize: "14px" }}>
              <div className="flex items-start gap-3">📍 <span>{CONFIG.direccion}</span></div>
              {CONFIG.telefono && <div className="flex items-start gap-3">📱 <span>{CONFIG.telefono}</span></div>}
              {CONFIG.instagram && <div className="flex items-start gap-3">📸 <a href={CONFIG.instagramURL} target="_blank" rel="noopener noreferrer" className="hover:text-primario transition-colors">{CONFIG.instagram}</a></div>}
              {CONFIG.facebook && <div className="flex items-start gap-3">📘 <a href={CONFIG.facebookURL} target="_blank" rel="noopener noreferrer" className="hover:text-primario transition-colors">{CONFIG.facebook}</a></div>}
            </div>

            <div className="w-full h-px bg-fondo/20 my-6" />

            <div className="space-y-2 text-fondo font-cuerpo" style={{ fontSize: "14px" }}>
              <div className="flex items-start gap-3">🕐 <span>{CONFIG.horarioSemana}</span></div>
              {CONFIG.horarioSabado && <div className="flex items-start gap-3 pl-7">{CONFIG.horarioSabado}</div>}
            </div>

            <div className="w-full h-px bg-fondo/20 my-6" />

            <div className="space-y-2 text-fondo/80 font-cuerpo" style={{ fontSize: "13px" }}>
              <div>✓ Especialistas certificados</div>
              <div>✓ {CONFIG.servicios.length} servicios</div>
              <div>✓ Tecnología moderna</div>
              <div>✓ Toda la familia</div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full flex items-center justify-center gap-2 bg-primario text-fondo rounded-full py-3 font-subtitulos font-bold transition-colors duration-300 hover:bg-primario-deep"
            >
              💬 Escribir por WhatsApp →
            </a>

            {/* Social row */}
            <div className="flex gap-4 mt-6 justify-center">
              {CONFIG.instagramURL && (
                <a href={CONFIG.instagramURL} target="_blank" rel="noopener noreferrer" className="text-fondo hover:text-primario transition-colors text-lg" aria-label="Instagram">📸</a>
              )}
              {CONFIG.facebookURL && (
                <a href={CONFIG.facebookURL} target="_blank" rel="noopener noreferrer" className="text-fondo hover:text-primario transition-colors text-lg" aria-label="Facebook">📘</a>
              )}
              {CONFIG.tiktokURL && (
                <a href={CONFIG.tiktokURL} target="_blank" rel="noopener noreferrer" className="text-fondo hover:text-primario transition-colors text-lg" aria-label="TikTok">🎵</a>
              )}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-fondo rounded-2xl p-8" style={{ border: "1px solid rgba(45,189,143,0.3)" }}>
            <h3 className="font-titulos text-oscuro mb-6" style={{ fontSize: "24px" }}>Solicitar Mi Cita</h3>

            {formState === "success" ? (
              <div className="text-center py-16">
                <div className="text-5xl mb-4">✅</div>
                <p className="font-subtitulos font-bold text-oscuro text-lg">¡Listo! Te contactamos pronto 😁</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input name="nombre" placeholder="Nombre completo *" required value={form.nombre} onChange={handleChange} className={inputClass} />
                <input name="telefono" placeholder="Teléfono / WhatsApp *" required value={form.telefono} onChange={handleChange} className={inputClass} />
                <input name="email" type="email" placeholder="Correo electrónico" value={form.email} onChange={handleChange} className={inputClass} />
                <select name="servicio" required value={form.servicio} onChange={handleChange} className={inputClass}>
                  <option value="">Servicio *</option>
                  {CONFIG.servicios.map((s) => <option key={s.id} value={s.nombre}>{s.nombre}</option>)}
                  <option value="valoracion">No sé / Necesito valoración</option>
                </select>
                <select name="paciente" value={form.paciente} onChange={handleChange} className={inputClass}>
                  <option value="">Tipo de paciente</option>
                  <option>Niño</option>
                  <option>Adolescente</option>
                  <option>Adulto</option>
                </select>
                <input name="fecha" type="date" value={form.fecha} onChange={handleChange} className={inputClass} />
                <select name="turno" value={form.turno} onChange={handleChange} className={inputClass}>
                  <option value="">Turno preferido</option>
                  <option>Mañana</option>
                  <option>Tarde</option>
                </select>
                <select name="conocio" value={form.conocio} onChange={handleChange} className={inputClass}>
                  <option value="">¿Cómo nos conociste?</option>
                  <option>Instagram</option>
                  <option>Facebook</option>
                  <option>Google</option>
                  <option>Recomendación</option>
                  <option>Otro</option>
                </select>
                <textarea name="mensaje" placeholder="Mensaje" rows={3} value={form.mensaje} onChange={handleChange} className={inputClass} />
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full bg-primario text-fondo rounded-full py-3 font-subtitulos font-bold transition-colors duration-300 hover:bg-primario-deep disabled:opacity-60"
                >
                  {formState === "loading" ? "Enviando..." : "Agendar Mi Cita"}
                </button>
                <p className="font-cuerpo text-texto-muted text-center" style={{ fontSize: "11px" }}>
                  🔒 Tu información es privada y segura.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
