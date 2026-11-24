# Herramientas locales (verifica por etapa; pide permiso antes de instalar)

| Etapa | Requiere |
|---|---|
| Estado, HTML, SVG | nada (solo Claude) |
| PNG de tableros/mockups y PDF | Node + `npm i -D playwright` + `npx playwright install chromium` (usar `~/.claude/skills/claude-generate/scripts/render.mjs`) |
| Exportar SVG a PNG de varios tamaños | Playwright (renderiza el SVG en una página) — no hace falta rsvg ni ImageMagick |
| PPTX editable | `npm i pptxgenjs` (o `python-pptx` si hay Python) |
| Previsualizar PPTX/PDF | LibreOffice (`soffice --headless --convert-to pdf`) — opcional |
| Fuentes | Google Fonts por `<link>` (necesita red) o fuentes del usuario con `@font-face` |

Comprobación rápida (PowerShell):
```powershell
foreach($t in 'node','npx','soffice'){ "{0,-8} {1}" -f $t, [bool](Get-Command $t -ErrorAction SilentlyContinue) }
```
Si falta algo, di qué formato no puedes producir y qué alternativa hay.
