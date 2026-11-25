# Movimiento y scroll

Sustituye al "film scrolleable generado". Todo respeta `prefers-reduced-motion` (desactiva o simplifica).

## Opciones, de menor a mayor esfuerzo
1. **CSS puro**: `animation-timeline: scroll()/view()` (Chrome/Edge/Safari reciente) con fallback `IntersectionObserver` + clases `.in`.
2. **GSAP + ScrollTrigger** (usa la dependencia local del proyecto): pin de secciones, parallax, texto que se revela, contadores, timelines por scroll.
3. **Canvas de fotogramas** ("scroll-scrub"): si el usuario aporta un video, extráelo con ffmpeg (`ffmpeg -i v.mp4 -vf fps=24,scale=1280:-2 f_%04d.webp`) y dibuja el fotograma que corresponde a `scrollY` en un `<canvas>`; precarga progresiva y un póster de respaldo.
4. **three.js**: objeto 3D (GLB procedural o del usuario) rotando con el scroll.

## Timelines, scroll y React

- Usa timelines con etiquetas para ordenar entradas, pausas y salidas. Anima `transform` y `opacity` cuando puedas. Registra `ScrollTrigger` una sola vez y limita los selectores a la sección animada.
- En React, configura `useGSAP` con un `scope` de tipo ref. Si el proyecto usa `gsap.context()`, devuelve `context.revert()` al desmontar. Comprueba que navegar y volver a la ruta no duplique timelines ni triggers.
- Con `gsap.matchMedia()` o CSS, deja contenido y CTA visibles para `prefers-reduced-motion: reduce`. Quita parallax, pinning y revelados que condicionen el acceso al contenido. Prueba ambas preferencias.

### Ejemplo en React

```jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnimatedSection() {
  const section = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const motion = gsap.matchMedia(section.current);
    motion.add("(prefers-reduced-motion: no-preference)", () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top 80%",
          end: "top 35%",
          scrub: true,
        },
      });
      timeline.addLabel("entrada").fromTo(
        "[data-motion]",
        { y: 40, opacity: 0.35 },
        { y: 0, opacity: 1, ease: "none" },
        "entrada",
      );
    });
    return () => motion.revert();
  }, []);

  return (
    <section ref={section}>
      <h2 data-motion>Conoce el producto</h2>
      <a href="#detalles">Ir a los detalles</a>
    </section>
  );
}
```

Deja la sección visible en el HTML y el CSS base. El timeline solo se crea si el navegador permite movimiento. Al cambiar la preferencia o desmontar el componente, GSAP revierte los estilos y elimina el trigger de esa sección.

[Guía de GSAP para React](https://gsap.com/resources/React/) · [Documentación de ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)

## Reglas
- Un efecto estrella por página; el resto discreto.
- 60 fps: anima `transform`/`opacity`, no `top/left/width`.
- Móvil: simplifica (sin pin pesado), prueba en viewport 390 px.
- Contenido legible sin JS (progresive enhancement) y sin esperar a la animación.
- Peso: hero < 2 MB; fotogramas WebP; carga diferida de lo que está bajo el pliegue.
