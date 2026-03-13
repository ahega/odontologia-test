import { useState } from "react";
import CONFIG from "../config.js";
import { useScrollAnimate } from "../hooks/useScrollAnimate";
import { MapPin, Phone, Instagram, Facebook, Clock } from "lucide-react";

const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMensaje)}`;

// ─── Detecta si oscuro es claro o no ───────────────────────────
const isLightBackground = (hex: string): boolean => {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.5;
};

const isLight = isLightBackground(CONFIG.colores.oscuro);
const textHigh  = isLight ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.95)";
const textMid   = isLight ? "rgba(0,0,0,0.65)" : "rgba(255,255,255,0.75)";
const textLow   = isLight ? "rgba(0,0,0,0.40)" : "rgba(255,255,255,0.50)";
const divider   = isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.15)";
const cardBg    = isLight ? "rgba(0,0,0,0.05)"  : "rgba(0,0,0,0.25)";

// Extrae rgb del color primario para usar en bordes
const pr = parseInt(CONFIG.colores.primario.slice(1,3), 16);
const pg = parseInt(CONFIG.colores.primario.slice(3,5), 16);
const pb = parseInt(CONFIG.colores.primario.slice(5,7), 16);
const primarioBorder = `rgba(${pr},${pg},${pb},0.30)`;

const Contact = () => {
  const ref = useScrollAnimate();
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    nombre: "", telefono: "", email: "", servicio: "", paciente: "",
    fecha: "", turno: "", conocio: "", mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.telefono || !form.servicio) return;
    setFormState("loading");
    const msg = `Hola! Quiero agendar una cita 😁\n\nNombre: ${form.nombre}\nTeléfono: ${form.telefono}\nServicio: ${form.servicio}\nPaciente: ${form.paciente}\nFecha: ${form.fecha}\nTurno: ${form.turno}\nMensaje: ${form.mensaje}`;
    setTimeout(() => {
      setFormState("success");
      window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    }, 800);
  };

  const inputClass = "w-full rounded-xl border border-gray-200 px-4 py-3 font-cuerpo text-sm outline-none transition-all duration-200 focus:ring-2";

  return (
    <section
      id="contacto"
      className="py-20 relative overflow-hidden scroll-animate"
      style={{ backgroundColor: "var(--oscuro)" }}
      ref={ref}
    >
      {/* Blob decorativo con color primario dinámico */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.10]"
        style={{ background: `radial-gradient(circle, var(--primario), transparent 70%)` }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-subtitulos uppercase tracking-[0.2em]"
            style={{ fontSize: "12px", color: textMid }}>
            ✦ CONTACTO
          </span>
          <h2 className="font-titulos mt-3"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", color: textHigh }}>
            Agenda Tu Cita Hoy
          </h2>
          <p className="font-cuerpo mt-2"
            style={{ fontSize: "14px", color: textMid }}>
            Te respondemos rápido
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* ── Izquierda — Info ── */}
          <div className="rounded-2xl p-8"
            style={{ background: cardBg, border: `1px solid ${primarioBorder}` }}>

            <h3 className="font-titulos mb-6"
              style={{ fontSize: "22px", color: textHigh }}>
              Estamos aquí para ti 🦷
            </h3>

            <div className="space-y-4 font-cuerpo" style={{ fontSize: "14px", color: textMid }}>
              <div className="flex items-start gap-3">
                <MapPin size={16} style={{ color: "var(--primario)", flexShrink: 0, marginTop: "2px" }} />
                <span>{CONFIG.direccion}</span>
              </div>
              {CONFIG.telefono && (
                <div className="flex items-start gap-3">
                  <Phone size={16} style={{ color: "var(--primario)", flexShrink: 0, marginTop: "2px" }} />
                  <span>{CONFIG.telefono}</span>
                </div>
              )}
              {CONFIG.instagram && (
                <div className="flex items-start gap-3">
                  <Instagram size={16} style={{ color: "var(--primario)", flexShrink: 0, marginTop: "2px" }} />
                  <a href={CONFIG.instagramURL} target="_blank" rel="noopener noreferrer"
                    style={{ color: textMid }} className="hover:opacity-100 transition-opacity">
                    {CONFIG.instagram}
                  </a>
                </div>
              )}
              {CONFIG.facebook && (
                <div className="flex items-start gap-3">
                  <Facebook size={16} style={{ color: "var(--primario)", flexShrink: 0, marginTop: "2px" }} />
                  <a href={CONFIG.facebookURL} target="_blank" rel="noopener noreferrer"
                    style={{ color: textMid }} className="hover:opacity-100 transition-opacity">
                    {CONFIG.facebook}
                  </a>
                </div>
              )}
            </div>

            <div className="w-full h-px my-6" style={{ background: divider }} />

            <div className="space-y-2 font-cuerpo" style={{ fontSize: "14px", color: textMid }}>
              <div className="flex items-start gap-3">
                <Clock size={16} style={{ color: "var(--primario)", flexShrink: 0, marginTop: "2px" }} />
                <span>{CONFIG.horarioSemana}</span>
              </div>
              {CONFIG.horarioSabado && (
                <div className="flex items-start gap-3 pl-7">
                  <span>{CONFIG.horarioSabado}</span>
                </div>
              )}
            </div>

            <div className="w-full h-px my-6" style={{ background: divider }} />

            <div className="space-y-2 font-cuerpo" style={{ fontSize: "13px", color: textLow }}>
              <div>✓ Especialistas certificados</div>
              <div>✓ {CONFIG.servicios.length} servicios disponibles</div>
              <div>✓ Tecnología moderna</div>
              <div>✓ Atención para toda la familia</div>
            </div>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="mt-8 w-full flex items-center justify-center rounded-full py-3 font-subtitulos font-bold transition-opacity hover:opacity-90"
              style={{ background: "var(--primario)", color: "white", fontSize: "14px", gap: "8px" }}>
              <span>{"💬"}</span>
              <span>Escribir por WhatsApp</span>
              <span>{"→"}</span>
            </a>

            {/* Redes sociales */}
            <div className="flex gap-3 mt-6 justify-center">
              {CONFIG.instagramURL && (
                <a href={CONFIG.instagramURL} target="_blank" rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ background: "var(--primario)", color: "white" }}>
                  <Instagram size={16} />
                </a>
              )}
              {CONFIG.facebookURL && (
                <a href={CONFIG.facebookURL} target="_blank" rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ background: "var(--primario)", color: "white" }}>
                  <Facebook size={16} />
                </a>
              )}
            </div>
          </div>

          {/* ── Derecha — Formulario ── */}
          <div className="bg-fondo rounded-2xl p-8"
            style={{ border: `1px solid ${primarioBorder}` }}>

            <h3 className="font-titulos mb-6"
              style={{ fontSize: "24px", color: "var(--texto-primario)" }}>
              Solicitar Mi Cita
            </h3>

            {formState === "success" ? (
              <div className="text-center py-16">
                <div className="text-5xl mb-4">✅</div>
                <p className="font-subtitulos font-bold text-lg"
                  style={{ color: "var(--texto-primario)" }}>
                  ¡Listo! Te contactamos pronto 😁
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input name="nombre" placeholder="Nombre completo *" required
                  value={form.nombre} onChange={handleChange}
                  className={inputClass}
                  style={{ color: "var(--texto-primario)", borderColor: "#e5e7eb" }} />
                <input name="telefono" placeholder="Teléfono / WhatsApp *" required
                  value={form.telefono} onChange={handleChange}
                  className={inputClass}
                  style={{ color: "var(--texto-primario)", borderColor: "#e5e7eb" }} />
                <input name="email" type="email" placeholder="Correo electrónico"
                  value={form.email} onChange={handleChange}
                  className={inputClass}
                  style={{ color: "var(--texto-primario)", borderColor: "#e5e7eb" }} />
                <select name="servicio" required value={form.servicio} onChange={handleChange}
                  className={inputClass}
                  style={{ color: "var(--texto-primario)", borderColor: "#e5e7eb" }}>
                  <option value="">Servicio *</option>
                  {CONFIG.servicios.map((s) => (
                    <option key={s.id} value={s.nombre}>{s.nombre}</option>
                  ))}
                  <option value="valoracion">No sé / Necesito valoración</option>
                </select>
                <select name="paciente" value={form.paciente} onChange={handleChange}
                  className={inputClass}
                  style={{ color: "var(--texto-primario)", borderColor: "#e5e7eb" }}>
                  <option value="">Tipo de paciente</option>
                  <option>Niño</option>
                  <option>Adolescente</option>
                  <option>Adulto</option>
                </select>
                <input name="fecha" type="date" value={form.fecha} onChange={handleChange}
                  className={inputClass}
                  style={{ color: "var(--texto-primario)", borderColor: "#e5e7eb" }} />
                <select name="turno" value={form.turno} onChange={handleChange}
                  className={inputClass}
                  style={{ color: "var(--texto-primario)", borderColor: "#e5e7eb" }}>
                  <option value="">Turno preferido</option>
                  <option>Mañana</option>
                  <option>Tarde</option>
                </select>
                <select name="conocio" value={form.conocio} onChange={handleChange}
                  className={inputClass}
                  style={{ color: "var(--texto-primario)", borderColor: "#e5e7eb" }}>
                  <option value="">¿Cómo nos conociste?</option>
                  <option>Instagram</option>
                  <option>Facebook</option>
                  <option>Google</option>
                  <option>Recomendación</option>
                  <option>Otro</option>
                </select>
                <textarea name="mensaje" placeholder="Mensaje" rows={3}
                  value={form.mensaje} onChange={handleChange}
                  className={inputClass}
                  style={{ color: "var(--texto-primario)", borderColor: "#e5e7eb" }} />
                <button type="submit" disabled={formState === "loading"}
                  className="w-full rounded-full py-3 font-subtitulos font-bold transition-opacity hover:opacity-90 disabled:opacity-60"
                  style={{ background: "var(--primario)", color: "white" }}>
                  {formState === "loading" ? "Enviando..." : "Agendar Mi Cita"}
                </button>
                <p className="font-cuerpo text-center" style={{ fontSize: "11px", color: "var(--texto-muted)" }}>
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
