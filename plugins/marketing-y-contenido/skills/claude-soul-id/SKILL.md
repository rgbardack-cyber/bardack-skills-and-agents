---
name: claude-soul-id
description: |
  Versión nativa de "higgsfield-soul-id": crea una "ficha de identidad" (character/identity bible) de una persona o personaje para mantener consistencia en cualquier generación de imagen o video. Claude NO entrena modelos de rostro; en su lugar analiza las fotos, redacta un bloque de identidad reutilizable ("identity lock"), cura el set de referencias y lo aplica en prompts y diseños.
  Úsala cuando pidan: "crea mi Soul", "entrena mi cara", "gemelo digital", "avatar de mí", "personaje consistente", "ficha de personaje", "que mi cara salga igual en todas las imágenes".
  NO es para: cambios de cara puntuales (claude-generate) ni avatares sin foto (claude-generate).
argument-hint: "[nombre] [rutas de fotos...]"
---

# Claude Identity Sheet (sustituto de Soul ID)

**Límite honesto:** Higgsfield entrenaba un modelo con la cara. Claude no puede entrenar ni afinar un modelo. Lo que sí entrega es el 80 % útil: una ficha de identidad + set de referencias + bloque de prompt que mantiene a la persona reconocible en cualquier herramienta de imagen/video que acepte referencias.

Solo trabaja con fotos que el usuario aporta y de las que es titular o tiene permiso. Si son de otra persona, confirma que tiene su consentimiento. No uses ni infieras datos sensibles (etnia, salud, orientación) en la ficha; describe solo rasgos visuales observables.

## Flujo

1. **Nombre** (una palabra, para referirse a la ficha). Pregunta si falta.
2. **Fotos**: pide 5–20 (ideal 8–12). Reglas en `references/photo-guide.md`. Lee cada una con `Read` (visión).
3. **QA del set**: reporta qué falta (ángulos, luz, expresiones, distancias) y descarta fotos con gafas oscuras, filtros fuertes, grupo, cara tapada.
4. **Redacta la ficha** y guárdala en `./identidad/<nombre>/identity.md` junto con la carpeta `refs/` (copias de las mejores 5–8 fotos, nombradas `01-frente.jpg`, `02-3q-izq.jpg`…):
   - **Rasgos estables observables**: forma de rostro, ojos (forma/color), cejas, nariz, labios, mandíbula, tono de piel, línea de cabello, textura/color de pelo, vello facial, rasgos distintivos (lunares, cicatrices, hoyuelos).
   - **Variables permitidas**: peinado, ropa, expresión, accesorios.
   - **IDENTITY LOCK** (bloque listo para pegar):
     `the person from the attached reference photos — IDENTITY LOCK: reproduce this exact person with a photographic identity match — same bone structure, eye shape, nose, lips, jawline, skin tone, hairline and hair texture. Do not beautify, average, or restyle the face. [lista corta de rasgos distintivos]`
   - **Orden de referencias** para herramientas multi-imagen: "image 1 = frente neutra, image 2 = 3/4, …".
5. **Entrega**: "Ficha *<nombre>* lista" + ruta, y cómo usarla (abajo).

## Cómo usarla después

- **Con una herramienta de imagen/video que acepte referencias** (Midjourney `--cref`/omni-reference, Nano Banana, Seedream, Flux Kontext, Veo/Kling image-to-video, etc.): sube 2–4 refs de `refs/` en el orden de la ficha y pega el IDENTITY LOCK al inicio del prompt. Cambia solo la línea de escena.
- **Con `claude-youtube-thumbnail`, `claude-product-photoshoot` o `claude-generate`**: pasa la ficha; los prompts la incluyen automáticamente.
- **Sin generador de píxeles**: Claude puede componer diseños con las fotos reales del usuario (recortes, fondos, texto) sin generar caras nuevas.

## Verificación de consistencia
Después de cualquier generación externa, compara el resultado con las referencias (Read) y puntúa: forma de rostro, ojos, nariz, boca, pelo. Si dos o más fallan, sugiere más refs frontales o un prompt de bloqueo más específico. No afirmes que "coincide" sin haberlo mirado.

## Errores comunes
- Pocas fotos o todas con la misma pose → pide variedad.
- Fotos con filtros → pide originales.
- Rostros de terceros sin permiso → detente y pregunta.
