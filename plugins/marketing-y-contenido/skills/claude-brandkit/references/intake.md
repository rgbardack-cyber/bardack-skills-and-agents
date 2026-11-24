# Intake de marca

Analiza primero el mensaje, los archivos, las rutas locales y el estado aprobado. Es una lista de huecos, no un cuestionario obligatorio.

Haz **un solo mensaje compacto** con únicamente los campos sin respuesta que bloqueen el entregable. Si no hay huecos bloqueantes, sáltate el intake.

## Huecos centrales
1. **Nombre** de la marca o producto.
2. **Contexto**: qué ofrece, para quién, qué posicionamiento/valores debe comunicar.
3. **Ruta**: ¿identidad nueva o conservar y extender activos existentes?
4. **Preferencias**: colores, tipos, mood, referencias, qué evitar.

Ejes visuales opcionales (lenguaje natural, sin números): Sobrio ↔ Expresivo · Geométrico ↔ Orgánico · Familiar ↔ Experimental.

## Identidad existente o parcial
Pide solo las categorías que necesita el entregable y no las mezcles:
- logos/marcas oficiales (SVG preferido; PNG/JPG/WebP/PDF aceptados)
- fuentes oficiales (TTF/OTF/WOFF/WOFF2)
- paleta y guías (PDF, PPTX, CSS, JSON, imágenes)
- otros materiales oficiales (empaques, plantillas)
- referencias de inspiración (útiles pero **nunca autoritativas**)

Tras analizar, bloquea en `state.json` todo elemento declarado oficial (`lock_authoritative_logo|palette|typography`) sin esperar una aprobación global.

## Brief interno
`{nombre, oferta, audiencia, tono[], ruta, ejes, oficiales{logo,paleta,tipografía}, evitar[], entregables[], idioma, copy exacto}`.
