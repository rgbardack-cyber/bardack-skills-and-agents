---
name: claude-video-explainer
description: |
  Entrada de compatibilidad de "higgsfield-video-explainer": redirige a claude-faceless-video en modo explicativo ilustrado. Úsala solo si el usuario invoca explícitamente "video explainer" o continúa un flujo de explicativo previo.
  NO es para: peticiones nuevas genéricas de explicativos (usa claude-faceless-video directamente), anuncios, clips sueltos o ediciones de metraje ajeno.
argument-hint: "[tema o archivos fuente] [duración] [idioma] [aspecto]"
---

# Video explainer → Claude Faceless Video

Usa la skill `claude-faceless-video` y selecciona su flujo de **explicativo ilustrado** (`references/production.md`). Conserva las entradas y decisiones del usuario (tema, fuentes, duración, idioma, aspecto, voz, estilo).

Si `claude-faceless-video` no está instalada, avisa al usuario antes de producir nada y ofrece crearla o entregar solo guion + plan de escenas.
