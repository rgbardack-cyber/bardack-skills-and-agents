# Video musical infantil (cantado)

Solo si piden explícitamente una canción cantada. **Límite honesto:** Claude escribe letra, estructura, acordes, tempo y el video; no canta ni sintetiza voz cantada. La pista cantada la produce una herramienta musical externa o conectada (Nivel B/C) o el usuario; Claude ensambla.

## Pasos
1. **Duración**: confirma una (p. ej. 60 s o 120 s). Elige un tempo estable (100 o 112 BPM), compás 4/4, sin cambios de tempo.
2. **Letra** en el idioma pedido: estrofas + estribillo que se repite; versos de 8 sílabas, una sílaba por pulso, cada verso empieza en el tiempo 1; estribillo pegadizo y simple; vocabulario infantil.
   - Cuenta sílabas por verso (revisión manual en español).
3. **Prompt de canción** (≤ 2 000 caracteres) para la herramienta de música: género infantil, tempo, instrumentos (ukulele, glockenspiel, palmas), voz alegre, estructura (verso–estribillo–verso–estribillo), "sin cambios de tempo", letra completa. Entrégalo con `claude-generate/references/prompt-engineering.md`.
4. **Plan visual**: 6 (60 s) o 12 (120 s) bloques de 10 s que siguen la letra; mismo estilo y personajes vectoriales; muestra la acción nombrada; evita sincronía labial.
5. **Escenas**: como en `production.md` (HTML/SVG animado, duración = bloque).
6. **Ensamblado**: `ffmpeg` une los clips (concat) y reemplaza el audio por la canción; verifica que `duración_audio ≈ duración_video` (`-shortest` si difieren por < 1 s).
7. **Revisión**: compara el audio recibido con la letra planeada y el video con cada verso; avisa de discrepancias.

Sin canción cantada disponible, entrega: letra, acordes, partitura simple (texto), plan visual y el video mudo con la letra como karaoke animado (HTML).
