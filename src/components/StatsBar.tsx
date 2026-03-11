import { useEffect, useRef, useState } from "react";
import CONFIG from "../config.js";

const parseNumber = (str: string) => {
  const n = parseInt(str.replace(/[^0-9]/g, ""), 10);
  return isNaN(n) ? 0 : n;
};

const getSuffix = (str: string) => {
  const match = str.match(/[^0-9]+$/);
  return match ? match[0] : "";
};

const getPrefix = (str: string) => {
  const match = str.match(/^[^0-9]+/);
  return match ? match[0] : "";
};

const CountUp = ({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || target === 0) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target]);

  return <span ref={ref}>{prefix}{target === 0 ? "0" : count}{suffix}</span>;
};

const StatsBar = () => (
  <section id="stats" className="bg-primario py-12">
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
      {CONFIG.stats.map((stat, i) => (
        <div
          key={i}
          className="text-center py-4"
          style={{ borderRight: i < CONFIG.stats.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none" }}
        >
          <div className="font-titulos font-bold text-fondo" style={{ fontSize: "38px" }}>
            <CountUp target={parseNumber(stat.numero)} suffix={getSuffix(stat.numero)} prefix={getPrefix(stat.numero)} />
          </div>
          <div className="font-subtitulos text-fondo" style={{ fontSize: "13px" }}>{stat.label}</div>
          <div className="font-cuerpo text-fondo/70" style={{ fontSize: "11px" }}>{stat.sublabel}</div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
