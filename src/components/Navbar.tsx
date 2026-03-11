import { useState, useEffect } from "react";
import CONFIG from "../config.js";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Galería", href: "#galeria" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMensaje)}`;

const ToothIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primario">
    <path d="M12 2C9.5 2 7 3.5 6 6c-1 2.5-.5 5 0 7 .5 2 1 4 1.5 5.5S9 22 10.5 22c1 0 1-1.5 1.5-3s1-3 1.5-3 1 1.5 1.5 3 .5 3 1.5 3c1.5 0 2-2 2.5-3.5S20 15.5 20.5 13c.5-2 1-4.5 0-7-1-2.5-3.5-4-6-4h-2.5z" />
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY >= 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 md:top-[28px] left-0 right-0 z-50 transition-all duration-400"
        style={{
          backgroundColor: scrolled ? "var(--fondo)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--primario)" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <button onClick={() => handleNavClick("#inicio")} className="flex items-center gap-2">
            <ToothIcon />
            <div>
              <span className="font-titulos text-primario" style={{ fontSize: "22px" }}>{CONFIG.nombreCorto}</span>
              <span className="block font-subtitulos uppercase text-texto-muted" style={{ fontSize: "9px", letterSpacing: "0.35em" }}>{CONFIG.doctorTitulo}</span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-subtitulos uppercase tracking-wider transition-colors duration-200 hover:text-primario relative group"
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  color: scrolled ? "var(--texto-primario)" : "white",
                }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primario scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-primario text-fondo rounded-full px-5 py-2.5 font-subtitulos font-bold transition-colors duration-300 hover:bg-primario-deep"
            style={{ fontSize: "13px" }}
          >
            Agendar Cita
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2"
            aria-label="Menú de navegación"
            style={{ color: scrolled ? "var(--oscuro)" : "white" }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-fondo flex flex-col items-center justify-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-subtitulos uppercase text-oscuro text-lg tracking-wider hover:text-primario transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-primario text-fondo rounded-full px-8 py-3 font-subtitulos font-bold text-base"
          >
            💬 Agendar por WhatsApp
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
