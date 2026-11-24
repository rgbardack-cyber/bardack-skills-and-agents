---
name: claude-product-photoshoot
description: |
  Versión nativa de "higgsfield-product-photoshoot": planifica y produce imágenes de producto para marca y publicidad (estudio, lifestyle, hero banner, carrusel, pack de anuncios, pin de Pinterest, try-on, conceptual, restyle) sin Higgsfield. Claude compone con la foto real del producto (HTML/SVG/Canvas → PNG), arma shot briefs y prompts de fotografía, y usa un generador conectado solo si existe y el usuario lo aprueba.
  Úsala cuando pidan: "foto de producto", "foto de estudio", "lifestyle", "pin de Pinterest", "hero/banner", "carrusel", "creativos para Meta ads", "modelo usando el producto", "producto flotando", "cambia el estilo de esta foto".
  NO es para: imágenes sin producto (claude-generate), tarjetas de marketplace (claude-marketplace-cards), identidad de persona (claude-soul-id).
argument-hint: "[--mode <modo>] [--count N] [descripción]"
---

# Claude Product Photoshoot

**Límite honesto:** Claude no inventa fotografías fotorrealistas. Con la **foto real** del producto sí puede crear piezas finales: fondos limpios/degradados/escenas ilustradas, sombras de contacto y reflejos, composición, tipografía, recortes por plataforma y packs coherentes. Para escenas fotorrealistas nuevas (manos, modelos, cocinas reales) entrega shot brief + prompt (Nivel C) o usa un generador conectado (Nivel B). Dilo al empezar.

Rutas A/B/C y requisitos locales: ver `claude-generate` (render con `node ~/.claude/skills/claude-generate/scripts/render.mjs`).

## Modos

| Modo | Cuándo | Hecho nativo por Claude | Pide Nivel B/C |
|---|---|---|---|
| `product_shot` | Fondo neutro/estudio/catálogo | **Sí**: recorte (si ya viene con fondo transparente o Canva `remove-background`), fondo sólido/degradado, sombra de contacto, reflejo suave | — |
| `lifestyle_scene` | Producto en entorno real | Escena ilustrada/mockup + brief | Fotorrealismo |
| `closeup_product_with_person` | Manos/rostro con producto | Brief y prompt | Sí |
| `moodboard_pin` | Pin vertical 2:3 | **Sí**: composición 1000×1500, paleta, tipografía | Fondo foto |
| `hero_banner` | Cabecera ancha | **Sí**: 1920×800 / 1600×600, zona de texto libre | — |
| `social_carousel` | 3–10 slides | **Sí**: sistema visual bloqueado, 1080×1350 | — |
| `ad_creative_pack` | Variantes de anuncios | **Sí**: 1:1, 4:5, 9:16, copy y CTA | — |
| `virtual_model_tryout` | Modelo usando prenda | Brief + prompt | Sí |
| `conceptual_product` | Flotando/splash/surreal | Ilustración/CSS 3D simple, o brief | Sí para CGI real |
| `restyle` | Cambiar estética/estación | Gradación, paleta, overlays, fondo | Cambio generativo |

Elige por intención, no por palabra suelta; si dos aplican, el más específico (pin de Pinterest > lifestyle; banner > lifestyle; carrusel > multi-escena; closeup con persona > lifestyle).

## Entrevista (máx. 4 preguntas, con opciones)

Omite lo que ya se sabe (foto subida, turno previo, marca).
- ¿Cuántas? `1 / 3 / 5`
- ¿Estilo? `Estudio limpio / Lifestyle / Conceptual / Con modelo`
- ¿Dónde se usará? `Shopify / Instagram / Pinterest / Anuncios / Web hero`
- ¿Colores de marca? (si no es obvio)
Sin foto del producto: pídela (más fidelidad); si no hay, que describa categoría, empaque, color y rasgos distintivos y avisa que será ilustración/brief.

## Flujo

1. **Lee la foto** (`Read`): formato, fondo, reflejos, texto/logo del empaque, ángulo. Nunca alteres logo, etiqueta ni proporciones del producto.
2. **Shot brief** por imagen: modo, sujeto, ángulo, lente, luz (key/fill/rim), fondo/props, paleta, uso y aspecto. Ver vocabulario en `references/photography-vocab.md`.
3. **Producción nativa** (modos "Sí"): HTML con `<img>` del producto + CSS (`filter: drop-shadow`, `radial-gradient` para sombra de contacto, `mix-blend-mode`, `mask`) → PNG a 2×. Para variantes cambia fondo, ángulo de luz, props y paleta: no copias parafraseadas.
4. **Packs** (`social_carousel`, `ad_creative_pack`): define primero el sistema (paleta, tipografía, márgenes, posición del logo, tratamiento del producto) y reutilízalo en todas.
5. **Modos Nivel B/C**: arma el prompt con la plantilla de `claude-generate/references/prompt-engineering.md` incluyendo "mantén el producto idéntico a la imagen de referencia: etiqueta, logo, forma, color". Si usas un generador conectado, avisa antes qué cuenta y créditos.
6. **QA** con `Read` del PNG: producto sin deformar, texto legible, sombras coherentes con la luz, contraste, márgenes. Itera una vez.
7. **Entrega**: lista corta de rutas con etiqueta (p. ej. "Lifestyle IG 4:5"). Sin volcar prompts salvo que los pidan.

## Aspectos por plataforma
`1:1` feed, `4:5` IG/Meta feed, `9:16` stories/reels/TikTok, `2:3` Pinterest, `16:9` banner/YouTube, `3:4` carrusel retrato. Resolución de trabajo 2× (p. ej. 2160×2700 para 4:5).

## Errores comunes
- Más de 4 preguntas seguidas.
- Modo equivocado (estudio cuando pedían pin).
- Redibujar el logo/etiqueta del producto.
- Prometer fotorrealismo sin generador.
