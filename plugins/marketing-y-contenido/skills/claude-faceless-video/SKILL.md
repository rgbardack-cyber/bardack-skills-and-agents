---
name: claude-faceless-video
description: |
  Versión nativa de "higgsfield-faceless-video" (y de "video-explainer"): crea un video sin cara terminado (explicativo ilustrado, documental, historia con imágenes, video musical infantil) o edita uno creado antes, sin Higgsfield. Claude investiga, escribe guion y plan de escenas, diseña cada escena como animación HTML/SVG/CSS, genera la narración (voz local de Windows o voz conectada), ensambla con ffmpeg y añade subtítulos.
  Úsala cuando pidan: "haz un video sin cara", "explicativo narrado", "video tipo documental", "historia ilustrada", "canción infantil con video", "edita este video", "convierte este tema en un video".
  NO es para: un solo clip mudo, anuncios/UGC (claude-generate), ediciones de metraje ajeno, o solo un guion (responde en texto).
argument-hint: "[tema o fuente] [duración] [idioma] [aspecto]"
---

# Claude Faceless Video

**Límite honesto:** el resultado es **video de motion graphics** (diagramas, ilustraciones vectoriales, tipografía animada, gráficos, mapas, líneas de tiempo) con narración. No hay metraje fotorreal ni personajes generados con IA. Eso encaja de maravilla con explicativos, educación y finanzas. Para metraje fotorreal usa Nivel B/C de `claude-generate` y trátalo como material que Claude ensambla.

Responde en el idioma del usuario. Respeta lo que el usuario aporte (assets, voz, estilo). No inventes datos: en temas factuales investiga con WebSearch/WebFetch y guarda lista de fuentes.

## Modos (elige según el pedido)

| Modo | Cuándo | Referencia |
|---|---|---|
| Explicativo ilustrado | Diagramas, pasos, conceptos | `references/production.md` |
| Movimiento de canal (cortes rápidos) | Estilo Shorts/Reels con texto dinámico | `references/production.md` § ritmo rápido |
| Historia con imágenes | Escenas fijas con Ken Burns | `references/production.md` § imágenes |
| Video musical infantil | Canción cantada explícita | `references/song.md` |
| Edición de un video previo | Cambiar rangos concretos | `references/editing.md` |

Música de fondo sola **no** es modo canción. No supongas presentador a partir de una foto incidental.

## Antes de gastar tiempo/recursos

Resuelve: tema, duración aproximada (no la redondees en silencio), aspecto (16:9, 9:16, 1:1), idioma, estilo visual, voz, música y subtítulos. Una sola ronda de preguntas con opciones.

Verifica herramientas (PowerShell):
```powershell
foreach($t in 'node','npx','ffmpeg','ffprobe'){ "{0,-8} {1}" -f $t,[bool](Get-Command $t -ErrorAction SilentlyContinue) }
```
Si falta `ffmpeg` pide permiso y propone `winget install Gyan.FFmpeg`. Si falta Playwright: `npm i -D playwright && npx playwright install chromium`. Si no se puede instalar algo, dilo y ofrece lo que sí es posible (guion + storyboard + escenas HTML).

## Pipeline (resumen; detalles en `references/production.md`)

1. **Investigación y guion**: estructura gancho → desarrollo → cierre; una línea de narración por bloque de ~10 s (≈ 26–30 palabras en español/inglés, evita cortar frases).
2. **Plan de escenas** (`scenes.json`): por bloque → narración, visual, texto en pantalla, transición.
3. **Estilo**: define paleta, tipografía, iconografía y movimiento una vez (style key) y reutilízalo.
4. **Escenas**: una página HTML/SVG por bloque con animación CSS/GSAP (duración exacta = bloque). Revisa el primer bloque antes de producir el resto.
5. **Narración**: voz local con `scripts/tts-sapi.ps1` (gratis, sin red) o voz conectada (ElevenLabs `creative_generate_speech`) con aviso de cuenta/créditos. Una voz, un solo ajuste de ritmo; no aceleres el audio para encajar: ajusta el guion.
6. **Render y ensamblado**: Playwright graba cada escena (`recordVideo`) o captura frames; ffmpeg une video+voz por bloque y concatena; música baja a −18 dB bajo la voz si se pidió.
7. **Subtítulos** (opcional): `references/captions.md`.
8. **QC**: duración real vs pedida, audio presente y sin cortes, texto legible, sincronía; mira fotogramas clave (`ffmpeg -i v.mp4 -vf fps=1/5 chk_%02d.png` y `Read`).
9. **Entrega**: ruta del MP4, duración, aspecto, idioma, subtítulos sí/no y fuentes citadas.

Reanuda siempre desde las salidas guardadas; no regeneres bloques ya aprobados.

## Referencias
`production.md` (pipeline y comandos), `captions.md`, `song.md`, `editing.md`, `styles.md`.
