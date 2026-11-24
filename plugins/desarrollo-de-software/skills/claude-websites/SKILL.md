---
name: claude-websites
description: |
  Versión nativa de "higgsfield-websites": diseña, construye y publica sitios web, landing pages, apps web y juegos de navegador sin Higgsfield. Claude escribe el código (HTML/CSS/JS o Vite + React), aplica una receta de diseño anti-genérico, crea los activos visuales con SVG/CSS/Canvas (o con material del usuario), prueba en local con Playwright y publica solo si el usuario lo aprueba (Artifact de Claude o hosting estático como Cloudflare Pages, Netlify, Vercel, GitHub Pages).
  Úsala cuando pidan: "hazme una web", "landing page", "app web", "portafolio", "dashboard", "hazme un juego", "sprites / texturas para mi juego", "publica este sitio".
  NO es para: una sola imagen/video/audio (claude-generate), fotos de producto (claude-product-photoshoot), tarjetas de marketplace (claude-marketplace-cards).
argument-hint: "[qué construir o editar] [--type website|app|game]"
---

# Claude Websites

Claude construye el proyecto completo en el sistema de archivos del usuario. Sin cuentas de Higgsfield, sin su CLI, sin su SDK ni su sistema de diseño.

**Límite honesto:** las imágenes y los videos del sitio salen de (1) material del usuario, (2) SVG/CSS/Canvas hechos por Claude, o (3) un generador conectado si el usuario lo autoriza. No habrá fotos fotorrealistas generadas por Claude. El hero "película scrolleable" del original se hace con animación CSS/GSAP/Canvas, o con un video del usuario por fotogramas.

Responde en el idioma del usuario. Nunca imprimas ni commitees tokens o claves.

## Tipos (pregunta solo si no es obvio; una pregunta, al inicio)

- **website**: marca propia, sitio sin lógica de IA (landing, portafolio, SaaS marketing).
- **app**: producto con lógica, estado y datos (dashboard, herramienta, CRUD).
- **game**: juego de navegador (Canvas/Phaser). Ver "Juegos".

En la misma pregunta de arranque: **¿animado o sin animar?** (animado = scroll con movimiento y escenas; recomendado por defecto si no responde) y **¿dónde publicarlo?** (solo local / Artifact de Claude / hosting estático). No bloquees la construcción por esto.

## Stack

- Una sola página o pocas: **HTML + CSS + JS** puro, o **Vite + React + Tailwind**.
- Con backend: añade Node/Express o funciones serverless, y SQLite/JSON/Postgres según el caso; el usuario aporta sus claves de terceros (pagos, mapas, correo).
- Herramientas locales: Node/npm (verifica con `node -v`); pide permiso antes de instalar paquetes globales.

## Pipeline (website)

1. **Intake** (una sola ronda): marca, oferta, público, tono, colores/tipos si los hay, secciones, contenido real (textos, fotos, logo), animado sí/no.
2. **Concepto y brief de diseño** (escríbelo en `DESIGN.md`): idea central, paleta, tipografías, retícula, tono de copy, motivo visual.
3. **Tableros de referencia** (opcional): 3 direcciones en HTML de una pantalla y deja elegir.
4. **Sistema de activos**: logo (SVG, con `claude-brandkit` si hace falta), iconos SVG coherentes, ilustraciones/patrones SVG, favicon, imagen OG (1200×630) renderizada con Playwright.
5. **Construcción**: escribe cada archivo completo una vez; componentes pequeños; semántica y accesibilidad (landmarks, `alt`, foco visible, contraste AA); responsive mobile-first; `prefers-reduced-motion`.
6. **Movimiento** (si animado): `references/motion.md`.
7. **Compuerta mecánica** (`references/review.md`): grep de placeholders, rúbrica de diseño, Lighthouse/consola limpia, capturas desktop y móvil con Playwright revisadas con `Read`.
8. **Publicar** solo con permiso explícito (ver abajo).

Ediciones pequeñas posteriores **no** reinician el pipeline: edita lo mínimo y vuelve a verificar.

## Receta de diseño (resumen; detalle en `references/design.md`)

Tipografía con jerarquía clara, un único acento, base neutra sin negro puro, sin gradientes púrpura genéricos, sin "tarjetas idénticas ×3" por defecto, copy específico (nada de lorem ni "Revolutionize your workflow"), espaciado generoso, imágenes con propósito, una acción principal por pantalla.

## Juegos

- Motor: Canvas 2D propio o Phaser; bucle fijo de actualización, entrada teclado/táctil, pausa, puntuación y reinicio.
- Estado del juego separado del render (funciones puras `init/update/render`), lo que permite probarlo y, si hace falta, sumar multijugador (WebSocket) más adelante.
- **Arte y audio** (`references/games.md`): sprites y hojas de sprites dibujados en SVG/Canvas (procedurales), texturas teselables con patrones/ruido en Canvas, animación por código (tweens, huesos 2D simples), 3D con three.js (GLB procedural o del usuario), SFX/música sintetizados con Web Audio.
- Play-test: abre con Playwright, simula entradas, captura estados y revisa.

## Publicación (siempre con permiso, por acción)

- **Artifact de Claude**: para un sitio de un solo archivo HTML (sin build). Privado por defecto.
- **Hosting estático** (Cloudflare Pages, Netlify, Vercel, GitHub Pages): requiere la cuenta del usuario. Explica qué se publicará y su URL pública; ejecuta solo tras un sí claro. Publicar es una acción pública, no reversible del todo.
- Nunca publiques claves, `.env` ni datos privados del usuario.

## Entrega
Ruta del proyecto, cómo ejecutarlo (`npm run dev`), qué se publicó y dónde (si aplica), y una línea con lo que quedó sin verificar.
