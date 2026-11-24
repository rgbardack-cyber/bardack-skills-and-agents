# Brand Lock

Fuente única de verdad para cada pieza. Se crea tras el intake y el análisis de activos, **antes** de producir. No es una estrategia de marca nueva: registra contexto dado, reglas medidas y las decisiones visuales mínimas que faltan.

## Estados de cada campo
- `fixed`: dado o aprobado; no cambia sin permiso explícito.
- `proposed`: llena un hueco; revisable.
- `not_applicable`: ausente a propósito.
- `unknown`: sin resolver; no se inventa.

Etiqueta de evidencia: `source-declared` · `measured` · `visually-observed` · `inferred`.

## Forma (guardar en `brandkit/brand-lock.json`)
```json
{
  "version": 1,
  "brand_context": { "name": "", "offering": "", "industry": "", "positioning": "", "audience": "", "tone": [] },
  "concept": { "name": "", "visual_premise": "", "avoid": [] },
  "visual_axes": { "restrained_expressive": 50, "geometric_organic": 50, "familiar_experimental": 50 },
  "authoritative_assets": { "logo": null, "palette": null, "typography": null },
  "palette": { "primary": "#", "secondary": "#", "accent": "#", "neutrals": [], "background": "#", "text": "#" },
  "typography": { "display": "", "body": "", "scale": "" },
  "layout": { "grid": "", "outer_margin": "", "gutter": "", "corner_radius": "", "shadow": "", "motif": "" },
  "logo_rules": { "clear_space": "", "min_size": "", "forbidden": [] },
  "outputs": [ { "name": "", "format": "", "size": "", "copy": "" } ],
  "forbidden_treatments": []
}
```

## Reglas de uso
- Copia los bloques relevantes **literalmente** en cada pieza (HEX exactos, fuentes, márgenes).
- Una diferencia por formato debe estar documentada en `outputs`; si no, es deriva (drift).
- Si cambia un slot fundamental, revisa y repara solo lo dependiente.
