# Prompt engineering por modalidad

Usar solo en Nivel B (generador conectado) o Nivel C (paquete de prompts). Escribe en inglés si la herramienta destino rinde mejor así; explica en el idioma del usuario.

## Imagen
Orden: **sujeto → acción/pose → entorno → composición/cámara → luz → paleta/grade → estilo/medio → restricciones**.
- Sujeto concreto (material, color, tamaño), no adjetivos vagos.
- Cámara: plano (primer plano, medio, general), ángulo, lente (35 mm, 85 mm), profundidad de campo.
- Luz: dirección y calidad (key suave lateral, contraluz, hora dorada, softbox).
- Texto dentro de la imagen: entre comillas, con tipografía y ubicación; textos largos fallan, mejor superponer con HTML.
- Restricciones: "sin texto, sin marca de agua, manos con cinco dedos".
- Proporciones: 1:1, 4:5, 3:4, 2:3, 16:9, 9:16.
- Para consistencia entre variantes: repite un bloque fijo (identidad/estilo) y cambia una sola línea.

## Video
Una toma = un solo movimiento de cámara + una acción. Estructura:
`[plano y movimiento de cámara] + [sujeto y acción en tiempos] + [entorno] + [luz] + [ritmo/duración] + [audio]`.
- 4–10 s por toma; encadena tomas con primer/último fotograma coincidente.
- Evita cambios de escena dentro de una toma.
- Da el primer fotograma como imagen de referencia cuando la herramienta lo permita.

## Audio / SFX / música
- SFX: fuente + material + espacio + intensidad + duración ("cristal rompiéndose en un salón grande, reverb larga, 4 s").
- Música: género, tempo (BPM), instrumentos, energía por sección, duración, "instrumental".
- Voz: idioma, edad aparente, tono, ritmo, texto exacto.

## 3D
Describe objeto, material, proporciones, vistas de referencia (frente/lado/atrás), si debe llevar textura, y uso destino (juego, render, impresión).

## Plantilla de entrega (Nivel C)
```
HERRAMIENTA SUGERIDA: …
PROMPT: …
PROMPT NEGATIVO / EVITAR: …
PARÁMETROS: aspecto, duración, calidad, semilla/referencias
CÓMO ITERAR: qué línea cambiar para variantes
```
