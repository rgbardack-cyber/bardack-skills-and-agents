# Producción

Carpeta de trabajo persistente por proyecto (no dentro del skill):
```
video-<tema>/
  guion.md  scenes.json  style.css
  scenes/01.html 02.html …
  audio/voz01.wav …
  clips/clip01.mp4 …
  final.mp4
```

## 1. Guion y escenas
- Factual: investiga, guarda `fuentes.md`. Personal: usa solo hechos del usuario.
- Un bloque ≈ 10 s: 26–30 palabras habladas. El último bloque puede ser más corto si la duración pedida no es múltiplo de 10.
- `scenes.json`: `[{ "n":1, "secs":10, "vo":"…", "visual":"…", "onscreen":"…" }]`.
- Explicativo = escenas deliberadas y centradas en diagrama (no cortes frenéticos). Canal rápido = 2–3 s por plano, texto grande, zoom/puntos de énfasis.

## 2. Estilo (style key)
Un `style.css` compartido: variables de color, fuentes (Google Fonts), grosor de línea, radios, easing. Paletas con contraste alto; 1 acento. Iconos SVG propios o de un set libre. Mismo personaje/mascota vectorial en todas las escenas si se pidió.

## 3. Escenas animadas (HTML)
Cada `scenes/NN.html` es de tamaño fijo (1920×1080 o 1080×1920), con `--dur` = segundos del bloque y animaciones CSS (`animation-duration: calc(var(--dur) * 1s)`) o GSAP. Entradas escalonadas, un foco por momento, texto en pantalla ≤ 8 palabras por línea.

## 4. Narración
En macOS, lista voces con `say -v '?'`, prueba una voz en el idioma del guion y convierte un AIFF local a WAV:

```sh
say -v "$voice" -f guion01.txt -o audio/voz01.aiff
ffmpeg -i audio/voz01.aiff -ar 48000 -ac 2 audio/voz01.wav
```

En Windows, resuelve `scripts/tts-sapi.ps1` relativo a la carpeta de esta skill.

```powershell
# Asigna $skillRoot a la carpeta de esta skill.
# voces instaladas
powershell -File "$skillRoot/scripts/tts-sapi.ps1" -List
# un bloque
powershell -File "$skillRoot/scripts/tts-sapi.ps1" -TextFile guion01.txt -Out audio\voz01.wav -Voice "<nombre>" -Rate 0
```
Mide la duración con `ffprobe -v error -show_entries format=duration -of csv=p=0 audio/voz01.wav`. Si se pasa del bloque, **recorta el texto**, no aceleres. Con voz conectada, usa una sola voz para todo el video.

## 5. Render de escenas a MP4

Para escenas sincronizadas por fotograma, usa [HyperFrames local](render-local.md). El flujo de Playwright sigue disponible para escenas existentes.

```js
// grabar.mjs  → node grabar.mjs scenes/01.html clips/clip01.webm 10 1920 1080
import { chromium } from 'playwright'; import path from 'node:path'; import { pathToFileURL } from 'node:url';
const [,, html, out, secs='10', w='1920', h='1080'] = process.argv;
const b = await chromium.launch();
const ctx = await b.newContext({ viewport:{width:+w,height:+h}, recordVideo:{ dir:'clips/_tmp', size:{width:+w,height:+h} } });
const p = await ctx.newPage(); await p.goto(pathToFileURL(path.resolve(html)).href); await p.waitForTimeout(+secs*1000+300);
const v = p.video(); await ctx.close(); await v.saveAs(out); await b.close();
```
Convierte: `ffmpeg -y -i clips/clip01.webm -r 30 -c:v libx264 -pix_fmt yuv420p clips/clip01.mp4`.

## 6. Ensamblado (ffmpeg)
Por bloque (video + voz, recorta al más corto o rellena con silencio):
```
ffmpeg -y -i clips/clip01.mp4 -i audio/voz01.wav -map 0:v -map 1:a -c:v copy -c:a aac -shortest block01.mp4
```
Concatenar:
```
# lista.txt:  file 'block01.mp4'  file 'block02.mp4' …
ffmpeg -y -f concat -safe 0 -i lista.txt -c copy final.mp4
```
Música de fondo: `-i musica.mp3 -filter_complex "[2:a]volume=0.12[m];[1:a][m]amix=inputs=2:duration=first"`.

## 7. Historia con imágenes
Beats numerados en `story.json`; una narración continua; cada imagen entra en el momento de su frase (calcula tiempos con la duración de la voz y las palabras por beat). Movimiento Ken Burns con CSS `transform: scale()` + `translate()`, o ffmpeg `zoompan`. Las imágenes deben ser del usuario, ilustraciones SVG de Claude o de un generador conectado (Nivel B).

## 8. Ritmo rápido (canal)
Plano 2–3 s, texto grande con énfasis por palabra, zoom-in en el dato clave, transiciones de golpe o desplazamiento, SFX sutiles opcionales (sintetizados en Web Audio).

## 9. QC y recuperación
- Cada archivo no vacío y decodifica (`ffprobe`).
- Duración final ≈ pedida (±3 %); audio continuo; sin saltos entre bloques.
- Revisa fotogramas clave con `Read`. Si un bloque falla, regenera solo ese y reensambla.
