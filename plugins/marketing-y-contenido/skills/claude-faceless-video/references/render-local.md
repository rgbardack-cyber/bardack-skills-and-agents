# Render local de HTML con HyperFrames

Usa HyperFrames si la escena necesita sincronía exacta entre texto, animaciones y cortes. Para escenas que dependen de interacción o del reloj real, usa Playwright. Para material ya renderizado, monta con FFmpeg.

Para un video nuevo, copia la [plantilla reproducible](../assets/render-template/README.md) a una carpeta del proyecto. Incluye ambas rutas de render y una escena de referencia de cinco segundos.

1. En el proyecto de video, comprueba Node 22 o posterior, FFmpeg, FFprobe y un Chromium compatible. Si falta HyperFrames o GSAP, usa el gestor del proyecto para fijar las versiones y registrar el archivo de bloqueo. Carga fuentes, imágenes y GSAP desde archivos locales. Conserva los avisos de licencia si distribuyes esos archivos.
2. En `index.html`, declara en la raíz `data-composition-id`, `data-start="0"`, `data-duration`, `data-width` y `data-height`. Da a cada clip su inicio, duración y pista. Para GSAP registra una timeline pausada en `window.__timelines` con la clave de la composición. El renderer controla el tiempo. Usa etiquetas para entradas y salidas, y escalona palabras o letras cuando ayuden a leer. Mantén el texto accesible en la previsualización y evita temporizadores o aleatoriedad sin semilla.
3. Ejecuta el binario del proyecto con `HYPERFRAMES_NO_TELEMETRY=1` en cada invocación y comprueba `telemetry status`. Si la versión no confirma que está desactivada, usa Playwright o los fotogramas disponibles con FFmpeg. Usa el motor local con archivos del proyecto. En PowerShell establece la misma variable solo para la sesión y restaura su valor previo al terminar.

```sh
HYPERFRAMES_NO_TELEMETRY=1 ./node_modules/.bin/hyperframes telemetry status
HYPERFRAMES_NO_TELEMETRY=1 ./node_modules/.bin/hyperframes lint
HYPERFRAMES_NO_TELEMETRY=1 ./node_modules/.bin/hyperframes render --fps 30 --output clips/escena.mp4
```

Verifica que el MP4 decodifica, que su duración y resolución coinciden con el brief y que la narración se mantiene sincronizada. Mira fotogramas del inicio, las transiciones y el cierre. Si el motor falla, comprueba las dependencias y la timeline. Conserva la composición y ofrece la alternativa local verificada.

[Guía oficial de HTML a MP4](https://hyperframes.heygen.com/tools/html-to-video) · [Timelines de GSAP](https://gsap.com/docs/v3/GSAP/Timeline/) · [Licencia de GSAP](https://gsap.com/community/standard-license/)
