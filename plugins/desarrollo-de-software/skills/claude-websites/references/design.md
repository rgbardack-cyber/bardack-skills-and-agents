# Receta de diseño (anti-genérico)

Cada regla existe porque la salida por defecto de un LLM la rompe.

## Tipografía
- Display: `clamp()` grande con `letter-spacing` negativo suave y `line-height ~1`; 3–5 palabras por titular. Un titular de 4 líneas es un error de tamaño, no de texto.
- Cuerpo: 16–18 px, `line-height 1.6`, `max-width ~65ch`.
- Pares sugeridos: Geist + Geist Mono, Satoshi + JetBrains Mono, Outfit + IBM Plex Mono, Cabinet Grotesk + Inter Tight. Evita Inter como display y serif por defecto (solo si la marca es editorial/lujo real y lo justificas en `DESIGN.md`).
- Énfasis en titular: cursiva o negrita de la misma familia; no mezclar un serif suelto.
- Cursivas con descendentes: `line-height ≥ 1.1` y `padding-bottom` para no cortarlas.

## Color
- **Un solo acento** (saturación < 80 %), fijo en toda la página. Base neutra cálida o fría, no ambas. Nada de `#000` puro.
- Evita las paletas por defecto de IA: grafito + naranja/ámbar, casi-negro + cian/verde neón, morado/violeta con brillo, beige + latón + espresso. Solo se permiten si son los colores de marca del usuario.
- Contraste de texto ≥ 4.5:1.

## Layout
- Retícula consistente; ritmo vertical (secciones con 96–160 px de aire).
- Rompe la repetición: alterna ancho completo, 2 columnas, bento y listas editoriales. No repitas tres tarjetas iguales como solución universal.
- Una acción principal por vista; navegación simple.
- "Kickers" (etiquetas pequeñas sobre titulares): máximo ⌈secciones/3⌉.

## Copy
- Específico y verificable; sin lorem, sin superlativos vacíos, sin guiones largos (—) decorativos en texto visible si no hacen falta.
- No inventes testimonios, cifras ni logos de clientes.

## Detalles
- Estados hover/focus/active; skeleton o vacío con diseño; 404.
- Imágenes: `width/height`, `loading="lazy"`, formatos modernos; `alt` real.
- SEO: `<title>`, meta description, OG/Twitter, `lang`, `sitemap`, datos estructurados si aplica.
- Seguridad: sin claves en el cliente, escapa entradas, CSP básica en sitios con formularios.
