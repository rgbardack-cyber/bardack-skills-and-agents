---
name: claude-marketplace-cards
description: |
  Versión nativa de "higgsfield-marketplace-cards": crea el set de imágenes para fichas de marketplace (Amazon, Mercado Libre, Shopify, etc.): imagen principal conforme, imágenes secundarias (infografía, multi-ángulo, detalle, lifestyle, qué incluye) y módulos A+ (hero, puntos de dolor, características, ingredientes, eficacia, cómo usar, aval). Claude las compone con la foto real del producto en HTML/SVG → PNG con texto exacto; para escenas fotorrealistas usa un generador conectado solo si existe y lo aprueban.
  Úsala cuando pidan: "imágenes para mi listing", "fotos secundarias", "infografía de producto", "contenido A+", "set de imágenes para marketplace".
  NO es para: fotografía de marca sin contexto de listing (claude-product-photoshoot), videos/UGC (claude-generate).
argument-hint: "[--scope main|product-images|aplus|full-set] [descripción]"
---

# Claude Marketplace Cards

Composición determinista: lo que importa en un listing es fondo correcto, producto nítido y **texto exacto y legible**, y eso Claude lo hace mejor con HTML/SVG que un generador de imágenes. Render con `node ~/.claude/skills/claude-generate/scripts/render.mjs <html> <png> <ancho> <alto> 1`.

Las reglas de cada marketplace cambian. **Antes de producir**, verifica las reglas vigentes del marketplace destino (WebFetch/WebSearch a su ayuda oficial) y no las des por memoria. Lo siguiente es la base habitual, a confirmar.

## Alcance

| Scope | Crea |
|---|---|
| `main` | 1 imagen principal |
| `product-images` | principal + 5 secundarias |
| `aplus` | principal + 7 módulos A+ |
| `full-set` | principal + 5 secundarias + 7 A+ |

Activos individuales: `main_image`, `infographic`, `multi_angle`, `detail_shot`, `lifestyle`, `whats_in_box`, `aplus_hero_banner`, `aplus_pain_points`, `aplus_features`, `aplus_ingredients`, `aplus_efficacy`, `aplus_how_to_use`, `aplus_endorsement`.

## Reglas base (confirmar con el marketplace)

- **Principal:** fondo blanco puro `#FFFFFF`, producto entero ocupando ~85 % del encuadre, sin texto, logos añadidos, marcas de agua, bordes ni props; cuadrada, ≥ 1000 px (recomendado 2000×2000).
- **Secundarias:** pueden tener texto, infografía, escala, lifestyle; mantener consistencia visual con la principal; 1:1 o la proporción que el sitio acepte.
- **A+/contenido mejorado:** módulos con tamaños específicos por plantilla (p. ej. cabecera ancha tipo 970×600 en Amazon estándar). Usa las medidas que publique el marketplace en ese momento.
- Prohibido: claims médicos o no verificables, comparativas con marcas nombradas, "mejor/nº 1" sin respaldo, precios/promos en imágenes (en muchos sitios), certificaciones inventadas.

## Flujo

1. **Entrada**: la foto del producto (preferible, fondo transparente o liso) + categoría + marketplace + idioma. Si solo hay texto/URL, procede solo si el producto está claro; lee la URL con WebFetch y toma datos reales (medidas, materiales, qué incluye).
2. **Una sola confirmación** antes de producir (scope + marketplace + estilo). Sin entrevistas largas.
3. **Datos de contenido**: solo hechos que dio el usuario o que aparecen en su ficha/URL. Pregunta lo que falte (ingredientes, medidas, modo de uso); no lo inventes.
4. **Sistema visual**: paleta (de marca o derivada del empaque), 1–2 tipografías (Google Fonts), iconografía SVG simple, márgenes y retícula; igual en todo el set.
5. **Producción** por activo:
   - `main_image`: recorte/fondo blanco, sombra de contacto muy sutil permitida si la regla lo admite, centrado, 85 %.
   - `infographic`: producto al centro + 3–5 callouts con línea y icono; texto corto.
   - `multi_angle`: collage de vistas que el usuario aportó (no inventes ángulos).
   - `detail_shot`: recortes ampliados de la foto real.
   - `lifestyle`: escena compuesta o, si lo aprueban, generador conectado/brief (Nivel B/C).
   - `whats_in_box`: ítems reales listados con cantidades.
   - Módulos A+: cabecera, dolor→solución, características, ingredientes, eficacia (solo con datos reales), cómo usar (pasos numerados), aval (solo testimonios/premios reales).
6. **QA** (Read del PNG): fondo exacto `#FFFFFF` en la principal, texto legible a tamaño miniatura (~300 px), sin recortes, sin claims no respaldados, ortografía.
7. **Entrega**: rutas con etiqueta (`Principal`, `Infografía`, `Lifestyle`…), formato y tamaño; avisa qué piezas requieren fotografía real.

## Entrega

```
Tarjetas listas:
- Principal: ./marketplace/01-main.png (2000×2000)
- Infografía: ./marketplace/02-infographic.png
```
Sin JSON ni jerga interna. Conserva los `.html` fuente para ediciones de texto.
