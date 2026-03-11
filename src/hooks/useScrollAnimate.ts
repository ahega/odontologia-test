import { useEffect, useRef } from "react";

export function useScrollAnimate<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          // Stagger children
          const children = el.querySelectorAll(".scroll-child");
          children.forEach((child, i) => {
            (child as HTMLElement).style.transitionDelay = `${i * 0.1}s`;
            child.classList.add("visible");
          });
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
