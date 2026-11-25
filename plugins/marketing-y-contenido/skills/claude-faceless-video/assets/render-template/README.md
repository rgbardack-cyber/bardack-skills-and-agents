# Plantilla de video local

Copia esta carpeta a un proyecto nuevo. Requiere Node 22 o posterior con npm, FFmpeg, FFprobe y Chromium compatible. Corre desde la copia:

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm run render
```

El resultado va en `clips/hyperframes.mp4`. El comando prepara el audio y GSAP desde archivos locales, comprueba la telemetría desde la primera llamada al CLI y usa un render local. Si Chrome está instalado pero el CLI no lo detecta, define `HYPERFRAMES_BROWSER_PATH` con la ruta al ejecutable.

Para la alternativa, define `CHROME_EXECUTABLE` si quieres usar Chrome ya instalado. Si falta Chromium, usa el ejecutable local de Playwright para instalarlo en el entorno del proyecto (`./node_modules/.bin/playwright install chromium` en macOS/Linux o `node_modules\.bin\playwright.cmd install chromium` en Windows). Después ejecuta:

```sh
npm run render:fallback
```

El resultado alternativo va en `clips/playwright-ffmpeg.mp4`. Ambos renderizan la misma escena vertical de 5 s. El texto cambia de color y el pulso empieza en el segundo 2. Cambia el texto y el diseño en `index.html`. Esta plantilla de prueba está ajustada a 1080 × 1920, 150 fotogramas y 30 fps. Si cambias esas dimensiones o duración, ajusta también el viewport, el bucle de captura, la codificación y la generación de audio de la ruta alternativa.

[HyperFrames](https://github.com/heygen-com/hyperframes) · [GSAP y su licencia](https://gsap.com/community/standard-license/) · [Playwright](https://github.com/microsoft/playwright)
