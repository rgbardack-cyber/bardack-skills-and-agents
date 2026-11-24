# Editar un video creado antes

Cuando el usuario trae un video y pide cambios en rangos concretos (por ejemplo, "reemplaza los segundos 10–20").

1. **Conserva el original** (copia a `source.mp4`) y mide su duración real con ffprobe. Anota los rangos pedidos y qué cambia en cada uno (guion, visual, voz, texto).
2. Regenera **solo** los reemplazos (escena HTML + voz del bloque) y valida cada uno (decodifica, duración exacta del rango).
3. Parche por rango con ffmpeg:
   ```
   # recortar partes sin cambios
   ffmpeg -y -i source.mp4 -t 10 -c copy part_a.mp4
   ffmpeg -y -i source.mp4 -ss 20 -c copy part_c.mp4
   # lista: part_a.mp4, patch_10_20.mp4, part_c.mp4  → concat
   ffmpeg -y -f concat -safe 0 -i lista.txt -c copy edited.mp4
   ```
   Si los códecs/tiempos no coinciden, recodifica (`-c:v libx264 -c:a aac`) para evitar saltos.
4. **Verifica**: duración final, decodificación, que los rangos editados cambiaron y que lo anterior/posterior es idéntico.
5. Presenta el resultado como **borrador**; no lo publiques ni subas solo. Si un parche falla, conserva el original y dilo.
