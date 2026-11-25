---
name: claude-generate
description: |
  Versión nativa de Claude de "higgsfield-generate": crea imágenes, GIFs/SVG animados, animaciones de video, audio/SFX, modelos 3D, anuncios (UGC/product demo/TV spot) y análisis de potencial viral SIN usar Higgsfield. Claude hace el trabajo con lo que sí domina: SVG, HTML/CSS/Canvas, código, ffmpeg, síntesis de audio, three.js, guiones, storyboards y prompt engineering; y usa un generador de píxeles conectado (Canva, Figma, ElevenLabs) solo si existe y el usuario lo aprueba.
  Úsala cuando pidan: "genera una imagen", "haz un video", "anima esta foto", "crea un GIF/SVG", "modelo 3D/GLB", "efecto de sonido", "música", "haz un anuncio / UGC / unboxing", "analiza el hook de este video", "prompt para Midjourney/Veo/etc.".
  NO es para: marcas completas (claude-brandkit), miniaturas de YouTube (claude-youtube-thumbnail), fotos de producto (claude-product-photoshoot), tarjetas de marketplace (claude-marketplace-cards), explicativos (claude-faceless-video), sitios/juegos (claude-websites), entrenar identidad (claude-soul-id).
argument-hint: "[qué quieres crear] [formato/duración/aspecto]"
---

# Claude Generate (sin Higgsfield)

Reemplaza a `higgsfield-generate`. Principio: **Claude no genera fotos ni video fotorrealista por sí mismo**. Lo que sí hace, y bien, es diseñar, programar, componer, guionizar y ensamblar. Esta skill elige la ruta honesta más cercana a lo pedido y dice claramente qué obtuvo el usuario.

Responde en el idioma del usuario. Sin jerga interna. Entrega archivos reales, no solo descripciones.

## 1. Ruta de producción (elige en este orden)

| Nivel | Qué es | Cuándo |
|---|---|---|
| **A. Nativo** | Claude escribe el activo: SVG, HTML/CSS/Canvas, three.js, Web Audio, guion, storyboard, y renderiza a PNG/MP4/GIF/PDF | Siempre disponible; es la ruta por defecto |
| **B. Generador conectado** | Si la sesión ya tiene una herramienta de imagen/voz (p. ej. Canva `generate-image`, Figma `generate_image`, ElevenLabs `creative_generate_image` / `creative_generate_speech`), úsala para los píxeles/voz | Solo si el usuario pidió fotorrealismo o voz real. Antes de usarla dile cuál es y que puede gastar créditos de esa cuenta. No envíes datos privados |
| **C. Paquete de prompts** | Prompt afinado + parámetros + guía para pegar en la herramienta externa que el usuario prefiera | Cuando no hay A ni B que cumpla, o el usuario lo pide |

Descubre B con `ToolSearch` (palabras: `generate image`, `generate speech`). Si no hay nada, no lo inventes: usa A o C y dilo.

## 2. Mapa de peticiones → qué hace Claude

**Imagen**
- Ilustración, iconos, logos, infografías, banners con texto, UI, diagramas, patrones → **SVG/HTML** a PNG (`scripts/render.mjs`). Aquí Claude es fuerte y el texto sale exacto.
- Foto realista / retrato / escena cinematográfica → Nivel B si existe; si no, Nivel C (prompt + negativos + relación de aspecto) y avisa que Claude no puede crear esos píxeles.
- Editar/estilizar una imagen del usuario → ajustes deterministas (recorte, color, composición, texto, fondo con CSS/canvas/sharp). Cambios generativos (quitar objeto, cambiar escena) → Nivel B (p. ej. `remove-background` de Canva) o C.
- GIF animado / SVG animado → SVG con SMIL/CSS o frames de canvas; GIF vía ffmpeg (`palettegen/paletteuse`) o Playwright captura de frames.

**Video**
- Motion graphics, explicativos, lyric videos, animatics, intros → HTML/CSS/GSAP/Canvas. Para una composición sincronizada por fotograma, aplica la [guía de render local](../claude-faceless-video/references/render-local.md). Si mantienes una escena heredada, usa Playwright (`recordVideo`) o frames + **ffmpeg**. Para el flujo completo de explicativos usa `claude-faceless-video`.
- Clips de cámara realistas, personas en movimiento → no es posible de forma nativa: guion + storyboard + shot list + prompts por toma (Nivel C).
- Reencuadrar (reframe) un video del usuario → ffmpeg: `crop`/`scale`/`pad` con fondo difuminado.
- Extender/editar desde bocetos → plan de cortes con ffmpeg (trim/concat/overlay).

**3D**
- Modelo procedural (formas, personajes low-poly, productos simples) → three.js; exporta GLB con `GLTFExporter`. Para fotogrametría o malla desde fotos → Nivel C (indica herramienta externa).

**Audio**
- SFX/ambiente/música simple → síntesis con Web Audio (OfflineAudioContext) o Node, exporta WAV. Música compleja o voz humana → Nivel B (`creative_generate_speech`) o, para voz, TTS local de Windows (ver `claude-faceless-video/scripts/tts-sapi.ps1`).

**Anuncios (UGC, unboxing, product demo, TV spot, presentador)**
- Claude produce lo que gana anuncios: ángulo, hook (0–3 s), guion con tiempos, shot list, storyboard (HTML/PNG), texto en pantalla, CTA, variantes A/B, y el animatic. El video con actores/avatares generados es Nivel C/B.
- Si el usuario da una URL de producto: léela (WebFetch), extrae nombre, beneficios, prueba social y precio reales; no inventes claims.

**Análisis de potencial viral (sustituto de "Virality Predictor")**
- No existe aquí predicción neuronal. Claude hace una **auditoría heurística**: extrae fotogramas y transcripción (ffmpeg + Whisper si hay), y puntúa con la rúbrica de `references/virality-rubric.md`. Etiqueta siempre el resultado como estimación cualitativa.

## 3. Flujo

1. Aclara solo lo bloqueante (formato, duración, idioma, dónde se usará). Una pregunta a la vez; si el contexto ya responde, no preguntes.
2. Declara la ruta elegida en una línea ("Lo haré en SVG y lo renderizo a PNG" / "Esto pide fotorrealismo: te dejo el prompt, o uso X si me lo autorizas").
3. Produce en una carpeta de trabajo del proyecto (no en la del skill). Guarda fuentes (`.svg/.html`) además del render.
4. **Verifica**: abre el PNG con Read y mírelo; revisa texto, recortes, contraste. Itera una vez si falla.
5. Entrega rutas de archivo + una línea de qué es editable.

## 4. Requisitos locales (verifica antes de la etapa que los usa; pide permiso antes de instalar)

| Etapa | Herramienta |
|---|---|
| HTML/SVG → PNG/PDF | Node + `npm i -D playwright` + `npx playwright install chromium` |
| Video/GIF/ensamblado | `ffmpeg` (Windows: `winget install Gyan.FFmpeg`) |
| 3D | three.js desde CDN o npm |

Si falta algo, di qué formato no puedes producir y ofrece la alternativa.

## 5. Prompt engineering (Niveles B y C)

Ver `references/prompt-engineering.md`: estructura sujeto→acción→entorno→cámara→luz→estilo→restricciones, por modalidad.

## 6. Prohibiciones

- No presentes un SVG/HTML como si fuera una foto, ni un análisis heurístico como medición científica.
- No inventes datos, testimonios ni claims en anuncios.
- No uses el rostro de una persona real sin que el usuario lo aporte y lo autorice.
