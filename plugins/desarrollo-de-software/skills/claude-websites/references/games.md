# Juegos: arte, animación y audio sin generadores

## Arquitectura
`state = init()` · `state = update(state, input, dt)` · `render(ctx, state)`. Lógica pura, determinista y probable. Bucle con `requestAnimationFrame` y paso fijo (p. ej. 1/60). Entrada: teclado, ratón, táctil. Pausa, reinicio, puntuación (localStorage).

## Sistema de diseño del juego (antes de dibujar)
Perfil (género, cámara, público), bucle central (acción → recompensa → progreso), lista de activos (sprites, tiles, fondos, UI, SFX, música) y **fórmula de estilo** única (paleta de 6–8 colores, grosor de contorno, nivel de detalle, iluminación) que usan todos los activos.

## Sprites y hojas
- Dibuja personajes/objetos en SVG o con Canvas (formas primitivas + contorno consistente).
- Hoja de sprites: renderiza N poses en una cuadrícula con Playwright → PNG; mapea fotogramas en JSON.
- Animación 2D: ciclos por tween (squash & stretch), huesos 2D simples (transformaciones jerárquicas), partículas.

## Texturas teselables
Canvas con ruido (value/simplex), patrones y degradados; hazlo teselable repitiendo bordes (`mod` en las coordenadas) y valídalo repitiendo 3×3 en una captura.

## 3D (three.js)
Geometrías primitivas y `ExtrudeGeometry` para personajes/objetos low-poly; materiales planos/toon; exporta GLB con `GLTFExporter` si se necesita. Animación procedural (senos, IK simple). Modelos del usuario: cárgalos con `GLTFLoader`.

## Audio (Web Audio)
- SFX: osciladores + envolventes (salto, moneda, golpe, explosión con ruido filtrado).
- Música: secuenciador simple (escala + patrón de bajo/melodía/percusión) en bucle; volumen maestro y mute.
- Respeta la política de autoplay (inicia tras el primer gesto).

## Playtest
Playwright: abre, simula teclas/clics, captura estados y verifica puntuación/colisiones; revisa capturas con `Read`.
