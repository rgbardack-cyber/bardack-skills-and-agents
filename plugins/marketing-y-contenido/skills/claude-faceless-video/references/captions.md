# Subtítulos

Como Claude escribió el guion, **ya tiene el texto exacto**: no hace falta transcribir. Solo falta el tiempo.

## Ruta simple (sin transcripción)
1. Mide la duración real de cada `voz NN.wav` con ffprobe.
2. Reparte las palabras de cada bloque proporcionalmente a la duración (o por sílabas, mejor) y agrupa en líneas de ≤ 4–6 palabras / ≤ 42 caracteres, cada una visible ≥ 0.4 s y ≤ 30 caracteres/seg.
3. Escribe `captions.srt` con tiempos acumulados (offset del inicio de cada bloque).

## Ruta precisa (si hay Whisper local)
`faster-whisper` o `whisper.cpp` con modelo ya descargado: obtén timestamps por palabra del audio limpio y alinéalos con el texto del guion. No envíes el audio a servicios externos sin permiso. No instales ni descargues modelos sin avisar.

## Quemar subtítulos
```
ffmpeg -y -i final.mp4 -vf "subtitles=captions.srt:force_style='FontName=Arial,FontSize=28,Bold=1,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,BorderStyle=1,Outline=3,Shadow=0,Alignment=2,MarginV=60'" -c:a copy final_captioned.mp4
```
Requiere ffmpeg con filtro `subtitles` (build "full"/gyan). 9:16: sube `MarginV` (~250) para evitar la UI de la plataforma. Alternativa sin ese filtro: capas HTML de subtítulos dentro de las escenas.

## Verificación
Mira fotogramas: legibles, sin solaparse con elementos clave, sincronía correcta. No presentes subtítulos como correctos sin revisarlos en el archivo final.
