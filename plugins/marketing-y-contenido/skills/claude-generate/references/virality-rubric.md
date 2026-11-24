# Rúbrica heurística de potencial viral (cualitativa)

No es medición neuronal ni predicción. Es una auditoría de creativo basada en buenas prácticas de video corto. Puntúa 0–10 por eje y justifica con evidencia observable (segundo, fotograma, frase).

Entradas: video (extrae 1 fotograma/seg con `ffmpeg -i v.mp4 -vf fps=1 f_%03d.png` y mira los primeros 5), transcripción, plataforma destino.

| Eje | Qué buscar |
|---|---|
| **Hook (0–3 s)** | Promesa o pregunta clara, movimiento o contraste visual en el primer fotograma, sin intro/logo lento |
| **Claridad** | En 5 s se entiende de qué trata y para quién |
| **Retención** | Cambio visual o informativo cada 2–4 s, sin tiempos muertos, ritmo coherente |
| **Valor / payoff** | Entrega lo prometido; hay revelación, resultado o emoción |
| **Legibilidad** | Subtítulos, contraste, zona segura (no tapados por la UI de la plataforma) |
| **Audio** | Voz clara, música que no tapa, sonido útil sin audio (subtítulos) |
| **CTA y cierre** | Una sola acción, loop o final que invita a rever |
| **Ajuste a plataforma** | Duración, 9:16, tono nativo |

Entrega: puntuación por eje, 3 fortalezas, 3 riesgos, y **3 cambios concretos priorizados** (qué mover/cortar/reescribir y en qué segundo). Cierra con: "Estimación cualitativa; valida con una prueba A/B real."
