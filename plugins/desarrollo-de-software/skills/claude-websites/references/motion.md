# Movimiento y scroll

Sustituye al "film scrolleable generado". Todo respeta `prefers-reduced-motion` (desactiva o simplifica).

## Opciones, de menor a mayor esfuerzo
1. **CSS puro**: `animation-timeline: scroll()/view()` (Chrome/Edge/Safari reciente) con fallback `IntersectionObserver` + clases `.in`.
2. **GSAP + ScrollTrigger** (CDN, versión fija): pin de secciones, parallax, texto que se revela, contadores, timelines por scroll.
3. **Canvas de fotogramas** ("scroll-scrub"): si el usuario aporta un video, extráelo con ffmpeg (`ffmpeg -i v.mp4 -vf fps=24,scale=1280:-2 f_%04d.webp`) y dibuja el fotograma que corresponde a `scrollY` en un `<canvas>`; precarga progresiva y un póster de respaldo.
4. **three.js**: objeto 3D (GLB procedural o del usuario) rotando con el scroll.

## Reglas
- Un efecto estrella por página; el resto discreto.
- 60 fps: anima `transform`/`opacity`, no `top/left/width`.
- Móvil: simplifica (sin pin pesado), prueba en viewport 390 px.
- Contenido legible sin JS (progresive enhancement) y sin esperar a la animación.
- Peso: hero < 2 MB; fotogramas WebP; carga diferida de lo que está bajo el pliegue.
