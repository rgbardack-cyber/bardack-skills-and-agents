# Módulos de aplicación (carga solo el pedido)

Todos usan el Brand Lock y el logo SVG aprobado tal cual. Texto siempre en HTML/SVG/PPTX (exacto). Renderiza con Playwright y revisa con `Read`.

## Mockups
- Plantillas SVG/CSS: tarjeta de presentación, papelería (hoja, sobre), taza, tote, camiseta, caja, bolsa, pantalla de móvil/escritorio, tarjeta de app icon, fachada.
- El logo se inserta como `<image>`/`<use>` con `transform`; sombras y pliegues con `filter`/gradientes; `mix-blend-mode: multiply` sobre telas.
- Realismo fotográfico → Nivel B/C (`claude-generate`); avisa de la diferencia entre mockup ilustrado y foto.

## Gráficos sociales
- Sistema de plantillas: 1080×1080, 1080×1350, 1080×1920 (zonas seguras: ~250 px arriba/abajo en 9:16), portada de carrusel, cita, anuncio, promo, avatar, banner de perfil.
- Define una retícula, jerarquía (titular/subtítulo/CTA), posición fija del logo y 1 motivo gráfico recurrente.

## Pósters y banners
- Formatos: A-series (a 300 dpi: A3 3508×4961), 24×36 in, banners web 1920×600, roll-up 850×2000 mm (vector).
- Una idea, jerarquía clara, texto legible a distancia, sangrado 3 mm si va a imprenta (avisar).

## Empaque
- Dieline en SVG (caja plegable, etiqueta, bolsa, lata/botella como etiqueta plana) con sangrado y zonas seguras; marca la información legal real que aporte el usuario (peso, ingredientes, código de barras si lo da). **No inventes** textos legales ni claims.
- Vista plana + vista 3D simple con CSS 3D (`transform-style: preserve-3d`) como previsualización.

## Señalética
- Letrero de fachada, bandera, directorio, wayfinding, vinilo de vidrio: proporciones reales, contraste, distancia de lectura (altura de letra ≈ 25 mm por metro de distancia como regla orientativa), pictogramas SVG coherentes.

## Merchandising
- Estampado de camiseta/gorra/tote/sticker/taza: arte vectorial en 1–3 tintas con variantes en positivo/negativo; archivo SVG + PNG transparente 3000 px.

## Presentación (deck)
- Requiere logo + paleta + tipografía aprobados. Pide: propósito, audiencia, contenido fuente, n.º de diapositivas, datos exactos, aspecto. No inventes misión, cifras ni contactos.
- PPTX con PptxGenJS: maestros/diseños coherentes, todo el texto y las formas editables, imágenes reemplazables; no aplanes diapositivas completas a imagen.
- Verifica con LibreOffice → PDF → imágenes si está disponible; revisa desbordes, solapes, contraste y sustitución de fuentes.
