# Texto superpuesto (HTML/CSS → PNG)

Entrega por defecto para titulares: capa de texto en HTML sobre la imagen. Costo cero, nítido y editable.

## Qué hace "estilo Beast"
Seis rasgos juntos (quita uno y se cae):
| Rasgo | Valor |
|---|---|
| Fuente | **Anton** (una sola grosor, condensada gruesa) |
| Caja | TODO EN MAYÚSCULAS |
| Contorno | grueso (8–14 % del tamaño de letra), dibujado **debajo** del relleno (`-webkit-text-stroke` + `paint-order: stroke fill`) |
| Sombra | dura, oscura, desplazada hacia abajo |
| Color | blanco / degradado amarillo→naranja→rojo / lima ácida `#D4FF3F` |
| Tracking | ajustado (`-0.01em`), `line-height: 0.9` |

Colocación: 2–4 palabras, **no sobre la cara** (cuarto libre: abajo/esquina/lado), altura de mayúscula 12–18 % del alto, márgenes cómodos.

## Plantilla

```html
<!doctype html><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
<style>
  *{margin:0;box-sizing:border-box}
  #poster{position:relative;width:1280px;height:720px;overflow:hidden;
          background:#111 url('fondo.jpg') center/cover no-repeat;font-family:'Anton',sans-serif}
  #headline{position:absolute;left:50%;bottom:6%;transform:translateX(-50%);
            text-align:center;line-height:.9;letter-spacing:-.01em;text-transform:uppercase;
            font-size:150px;color:#fff;
            -webkit-text-stroke:14px #000;paint-order:stroke fill;
            text-shadow:0 10px 0 rgba(0,0,0,.85),0 18px 24px rgba(0,0,0,.5)}
</style>
<div id="poster"><h1 id="headline">NO LO CREERÁS</h1></div>
```

## Cinco presets (cambia solo estas propiedades)

| Preset | Relleno | Contorno | Sombra / extra |
|---|---|---|---|
| **Beast** | `#fff` | `#000` 14px | sombra dura negra |
| **Fire** | `linear-gradient(#FFE14A,#FF8A00 55%,#E5231B)` con `background-clip:text; -webkit-text-fill-color:transparent` | `#2A0A00` 12px (usa un `<span>` duplicado debajo para el trazo) | brillo naranja `0 0 30px #ff7a00aa` |
| **Neon Lime** | `#D4FF3F` | `#0B1A00` 12px | resplandor `0 0 24px #d4ff3f88` |
| **Clean Glass** | `rgba(255,255,255,.92)` en una pastilla `backdrop-filter:blur(12px)` con borde `1px rgba(255,255,255,.4)` | ninguno | sombra suave `0 8px 30px rgba(0,0,0,.35)`; fuente sans moderna (p. ej. Outfit 800) |
| **Marker** | `#fff` | `#000` 6px | ligera rotación `-3deg`, subrayado tipo rotulador; fuente `Permanent Marker` |

Para degradado con contorno: apila dos elementos (uno con `-webkit-text-stroke` grueso detrás, otro con el relleno encima).

## Render
`node ~/.claude/skills/claude-generate/scripts/render.mjs thumb.html thumb.png 1280 720 2` (2× = 2560×1440, nítido). Verifica ortografía letra a letra y la prueba a 120 px.
