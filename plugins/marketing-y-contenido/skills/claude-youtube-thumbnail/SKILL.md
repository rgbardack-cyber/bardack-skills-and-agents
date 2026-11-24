---
name: claude-youtube-thumbnail
description: |
  Versión nativa de "higgsfield-youtube-thumbnail": crea miniaturas de YouTube de alto CTR y portadas verticales (Shorts/Reels) sin Higgsfield. Claude diseña un concepto veraz con "brecha de información", lo compone en HTML/SVG con las fotos reales del usuario (caras, logos, capturas), aplica texto de 2–4 palabras con estilos probados (Beast, Fire, Neon Lime, Clean Glass, Marker), genera variantes y verifica legibilidad a 120 px.
  Úsala cuando pidan: "haz una miniatura de YouTube", "thumbnail para este video", "estilo MrBeast", "portada de Short/Reel", "variantes de miniatura".
  NO es para: producir el video (claude-faceless-video / claude-generate), fotos de producto (claude-product-photoshoot).
argument-hint: "[tema o título del video] [--image cara/logo] [--ratio 16:9|9:16|4:5]"
---

# Claude YouTube Thumbnail

**Límite honesto:** Claude no crea fotos fotorrealistas de personas ni escenas. Sí puede producir una miniatura completa y profesional **a partir de material real del usuario** (foto de su cara, captura, producto, logo) más fondos, formas, iconos, efectos y texto exactos. Si el concepto exige una escena fotorrealista nueva, ofrece (a) Nivel B: generador conectado con aprobación, o (b) Nivel C: prompt listo para pegar. Rutas A/B/C y render: ver `claude-generate`.

Responde en el idioma del usuario. No inventes afirmaciones, resultados, productos, personas, capturas ni cifras que no sean verdad en el video.

## Intake (solo lo que falte)

- Tema/título y la **promesa veraz** que la miniatura puede insinuar.
- Quién aparece (0–3): pide foto de cada persona. Si falta cara, pregunta si usar al usuario, a otra persona aportada o un personaje/ilustración. Nunca elijas en silencio.
- Referencia de estilo (otra miniatura): analízala solo visualmente (energía, encuadre, paleta, emoción) y **no copies su identidad ni su composición exacta**.
- Logo (plano o con relieve CSS).
- Titular opcional de 2–4 palabras.
- Proporción: `16:9` (1280×720, entregar a 2× si se pide) por defecto; `9:16` Shorts (1080×1920); `4:5` Instagram (1080×1350).
- Una final o set de variantes (~4 si ayuda). Tope: 16 renders.

Escalera de emociones si piden "N emociones": shock, hype, rabia, asombro, risa, miedo, engreído, carisma, confusión, determinación, asco.

## Concepto

Lee `references/thumbnail-frameworks.md`. Piensa ≥ 5 conceptos veraces con distintos frameworks y elige el de mayor brecha de información con **un solo foco** y mínimo ruido. Debe leerse en < 1 s a ~120 px de ancho.

Si hay miniatura de referencia, extrae: breve, pose/acción genérica, elementos, ubicación, composición, fondo, split (sí/no, n), n.º de personas, emoción.

## Producción nativa

1. Plantilla HTML 1280×720 (o la proporción pedida) con capas: fondo (degradado vívido/forma/foto del usuario) → elementos clave → sujeto(s) grande(s) → texto → logo.
2. **Sujeto**: foto del usuario ocupando 40–60 % del encuadre, en el tercio de potencia, con contorno/rim light por CSS (`drop-shadow`, `filter`), caras nítidas. Si no tiene fondo transparente, ofrece Canva `remove-background` (conectado) o pide un recorte PNG. Faces en el tercio superior en 9:16.
3. **Fondo**: campo de color de alto contraste con viñeta suave. Sin dividir salvo que pidan *split / antes-después / versus*; en ese caso define 2–3 paneles claros.
4. **Texto**: superposición HTML (nítido, editable), no horneado por IA. Presets y receta en `references/text-overlay.md`. 2–4 palabras, fuera de la cara, altura de mayúscula 12–18 % del alto.
5. **Logo**: forma y color exactos, lejos de las caras; versión con relieve solo con CSS si lo piden.
6. Render a PNG: `node ~/.claude/skills/claude-generate/scripts/render.mjs thumb.html thumb.png 1280 720 2`.

## Post-render (obligatorio)

Abre el PNG (`Read`) y verifica:
- Identidades reconocibles (se usaron fotos reales) y sin texto o marca de agua indeseados.
- Titular exacto, sin faltas, legible.
- **Prueba 120 px**: renderiza una copia a 120 px de ancho (`node render.mjs thumb.html mini.png 1280 720 0.094`) y confirma que cara/emoción/elemento clave se entienden.
- Coincide con la promesa del video (veracidad).
Si falla, corrige y vuelve a renderizar (máx. 2 reintentos por variante).

## Variantes
Una por concepto/emoción/toma. Mantén referencias y ajustes; varía solo la línea elegida (emoción, ángulo, color de acento o fondo). Presenta todas las que pasen y deja que el usuario elija antes de afinar.

## Ajustes quirúrgicos
Solo: expresión (cambiar a otra foto del usuario con esa emoción), reemplazo de fondo, recolor de fondo o recolor del rim light. Edita el HTML fuente cambiando únicamente esa capa; el resto queda idéntico.

## Entrega
Rutas de los PNG con etiqueta corta (`shock / primer plano`, `producto / contraste de tamaño`), proporción y si es limpia, con overlay editable (se conserva el `.html`) o con texto horneado. Sin prompts internos salvo que los pidan.
