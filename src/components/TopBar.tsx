import CONFIG from "../config.js";
import { MapPin, Phone } from "lucide-react";

const TopBar = () => (
  <div className="hidden md:flex items-center justify-center gap-6 bg-primario py-2 px-4" style={{ fontFamily: "var(--font-subtitulos)", fontSize: "10px" }}>
    <span className="flex items-center gap-1.5 text-fondo">
      <MapPin size={12} /> {CONFIG.direccion}
    </span>
    {CONFIG.telefono && (
      <span className="flex items-center gap-1.5 text-fondo">
        <Phone size={12} /> {CONFIG.telefono}
      </span>
    )}
    {CONFIG.instagram && (
      <a href={CONFIG.instagramURL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-fondo hover:opacity-80 transition-opacity">
        📸 {CONFIG.instagram}
      </a>
    )}
  </div>
);

export default TopBar;
