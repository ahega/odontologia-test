import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import CONFIG from "./config.js";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const root = document.documentElement;
    const c = CONFIG.colores;
    root.style.setProperty('--primario', c.primario);
    root.style.setProperty('--primario-deep', c.primarioDeep);
    root.style.setProperty('--primario-medio', c.primarioMedio);
    root.style.setProperty('--primario-light', c.primarioLight);
    root.style.setProperty('--primario-pale', c.primarioPale);
    root.style.setProperty('--primario-subtle', c.primarioSubtle);
    root.style.setProperty('--oscuro', c.oscuro);
    root.style.setProperty('--texto-primario', c.textoPrimario);
    root.style.setProperty('--texto-secundario', c.textoSecundario);
    root.style.setProperty('--texto-muted', c.textoMuted);
    root.style.setProperty('--fondo', c.fondo);
    root.style.setProperty('--fondo-alt', c.fondoAlt);

    root.style.setProperty('--font-titulos', CONFIG.tipografia.titulos);
    root.style.setProperty('--font-subtitulos', CONFIG.tipografia.subtitulos);
    root.style.setProperty('--font-cuerpo', CONFIG.tipografia.cuerpo);
  }, []);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${CONFIG.tipografia.titulos.replace(/ /g, '+')}:ital@0;1&family=${CONFIG.tipografia.subtitulos.replace(/ /g, '+')}:wght@400;500;600;700&family=${CONFIG.tipografia.cuerpo.replace(/ /g, '+')}:wght@300;400;500&display=swap`;
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    document.title = CONFIG.seo.titlePrincipal;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement('meta'); (el as HTMLMetaElement).name = name; document.head.appendChild(el); }
      (el as HTMLMetaElement).content = content;
    };
    setMeta('description', CONFIG.seo.descripcion);
    setMeta('keywords', CONFIG.seo.keywords);
    setMeta('geo.region', CONFIG.regionSEO);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = CONFIG.seo.canonicalURL;

    const jsonLd = document.createElement('script');
    jsonLd.type = 'application/ld+json';
    jsonLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": CONFIG.nombreNegocio,
      "telephone": CONFIG.telefono,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CONFIG.direccion,
        "addressLocality": CONFIG.ciudad,
        "addressCountry": "CO"
      },
      "sameAs": [CONFIG.instagramURL, CONFIG.facebookURL].filter(Boolean)
    });
    document.head.appendChild(jsonLd);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
