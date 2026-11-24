---
name: claude-brandkit
description: |
  Versión nativa de "higgsfield-brandkit": crea y extiende sistemas de marca completos sin Higgsfield: paleta, marcas/logos en SVG, tipografía, mockups, gráficos sociales, empaques, señalética, merchandising, pósters, presentaciones y brandbook editable (PPTX/PDF). Claude dibuja los logos en SVG, construye todo de forma determinista en HTML/SVG/PPTX, preserva los activos oficiales del usuario y guarda las aprobaciones en un archivo local.
  Úsala cuando pidan: "crea un brand kit", "identidad visual", "diseña un logo y brandbook", "aplica este logo a…", "empaque / señalética / merch", "extiende nuestra marca".
  NO es para: imágenes sin marca (claude-generate), fotos de producto (claude-product-photoshoot), implementación de sitios (claude-websites), archivos nativos Figma/Canva/PSD/AI.
argument-hint: "[brief de marca o activos existentes] [entregables]"
---

# Claude Brandkit

Construye una identidad coherente y sus aplicaciones. Los datos de marca y los activos oficiales del usuario son **restricciones fijas**.

**Límite honesto:** los logos son marcas vectoriales dibujadas por Claude en SVG (geométricas, tipográficas, monogramas, símbolos abstractos): es un punto fuerte. No hace ilustración fotorrealista. Los mockups con fotografía realista (p. ej. una taza sobre una mesa real) se resuelven con plantillas de mockup SVG/CSS, o con un generador conectado/prompt (Nivel B/C de `claude-generate`). No promete archivos nativos Figma, Canva, PSD, AI ni EPS (sí SVG, PNG, PDF, PPTX, HTML).

Responde en el idioma del usuario. Mantén en privado razonamiento de diseño, prompts y mecánica interna. No inventes posicionamiento, valores, claims, ingredientes, precios, certificaciones ni estadísticas: usa solo texto del usuario.

## Arranque

```bash
mkdir -p brandkit && cd brandkit   # carpeta durable del proyecto
```
Estado persistente en `brandkit/state.json` (ver `references/state.md`). Léelo siempre al inicio; si existe, **nunca** recrees ni edites aprobaciones a mano.
Herramientas por etapa en `references/tooling.md` (pide permiso antes de instalar nada).

## Flujo

1. **Clasifica**: `apply-existing` (usar activos oficiales tal cual), `extend-partial` (crear solo lo que falta), `create-identity` (logo nuevo solo si lo piden).
2. **Intake mínimo** (`references/intake.md`): solo lo bloqueante; nunca un cuestionario completo para una tarea parcial.
3. **Brand Lock** (`references/brand-lock.md`): ortografía exacta, logo/paleta/tipografías oficiales, reglas de forma/layout, entregables, tratamientos prohibidos. Bloquea de inmediato lo que el usuario declaró oficial.
4. **Slots requeridos según el entregable:**
   - solo logo → paleta + logo (logo nuevo) / logo oficial (existente)
   - solo paleta / solo tipografía → ese slot
   - mockup sin texto → logo (+ paleta si importa el color)
   - social/empaque/póster/señalética con texto → logo + paleta + tipografía
   - brandbook/presentación → logo + paleta + tipografía
5. **Construye los slots que faltan** y **detente a pedir aprobación** tras cada uno; nunca asumas aprobación por silencio ni por tu preferencia.
6. **Continúa con la petición original** en cuanto estén aprobados los slots necesarios; no vuelvas a preguntar el alcance.
7. **Módulos de aplicación** (carga solo el pedido): `references/applications.md`.
8. **QA**: abre cada PNG con `Read`; revisa copy exacto, contraste, márgenes, fidelidad del logo; repara solo lo que falla.

## Identidad nueva: secuencia

### 1. Paleta
2–3 opciones exactas (HEX, con rol: primario, secundario, acento, neutros, fondo, texto). Renderiza HTML de revisión con swatches, ratio de contraste WCAG (texto sobre fondo ≥ 4.5:1) y una mini-aplicación. Muestra PNG + HTML y espera. Guarda la elegida (`approve_palette`) antes del logo.

### 2. Logos SVG
Propón **exactamente tres mecanismos distintos** de símbolo (p. ej. monograma construido, forma abstracta con idea, símbolo literal simplificado), cada uno dibujado por Claude en SVG limpio:
- `viewBox` cuadrado, formas simples (≤ ~12 paths), colores solo de la paleta aprobada, sin degradados ni efectos si no hace falta, sin texto convertido a mala curva (el wordmark va en `<text>` con la fuente, y se ofrece versión con contornos si hay herramienta).
- Prueba de reducción: legible a 32 px y en 1 color.
- Entrega los tres en una tabla de revisión HTML/PNG y **espera la selección del usuario**. Una marca oficial nunca se autoaprueba.
Tras elegir: valida el SVG (bien formado, `viewBox`, sin elementos externos) y registra nombre, ruta, paleta usada y un hash (`sha256`) del archivo con `approve_logo`.
Exporta variantes deterministas: positivo, negativo (fondo oscuro), monocromo, horizontal/vertical, favicon/app icon (PNG 16–1024 con Playwright).

### 3. Tipografía
2–3 pares display/body con fuentes del usuario o Google Fonts verificadas; renderiza el nombre real y copy de muestra. Guarda solo el par elegido (`approve_typography`).

## Invariantes de consistencia
- Un único logo aprobado como fuente en todas partes; nunca lo redibujes si se puede colocar el SVG tal cual.
- Cambiar la paleta invalida el logo generado con ella y sus dependientes; cambiar tipografía no invalida el símbolo.
- Un cambio en un slot invalida solo lo que lo lista en `required_slots`.
- Copia los mismos valores del Brand Lock en cada pieza: HEX exactos, roles tipográficos, lenguaje de forma, zona de respeto, composición, tratamientos prohibidos.
- Copy exacto del usuario: HTML/SVG/PPTX para texto; nunca texto "dibujado" por un modelo de imagen.
- Si falla algo del contrato (fuente, export), detente y dilo; no entregues un sustituto como si fuera el canónico.

## Entregables y formatos
Brandbook: **PPTX editable** (PptxGenJS o python-pptx) + **PDF** (Chromium `page.pdf`), según `references/brandbook.md`. Avisa de fuentes que el usuario debe instalar para abrir bien el PPTX.
Otras salidas: archivos visuales + previsualizaciones, resumen compacto del Brand Lock, etiqueta editable/aplanado, limitaciones de fuentes, nombres estables de variantes para revisiones dirigidas.

## Referencias
`references/intake.md`, `brand-lock.md`, `state.md`, `tooling.md`, `applications.md`, `brandbook.md`.
