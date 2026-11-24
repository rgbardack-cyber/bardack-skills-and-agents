# Estado persistente (`brandkit/state.json`)

Reemplaza el script de estado original: un archivo JSON simple que Claude lee y actualiza con Read/Edit. Solo se escribe una aprobación cuando el usuario la da explícitamente en el chat.

```json
{
  "version": 1,
  "revision": 0,
  "authoritative": { "logo": null, "palette": null, "typography": null },
  "approved": {
    "palette":    null,
    "logo":       null,
    "typography": null
  },
  "elements": {}
}
```

## Formas
- `approved.palette` = `{ "revision": 1, "roles": { "primary":"#…", … }, "approved_at": "ISO" }`
- `approved.logo` = `{ "name":"", "path":"brandkit/logo/mark.svg", "sha256":"", "palette_revision":1, "approved_at":"" }`
- `approved.typography` = `{ "display":"", "body":"", "source":"google|supplied", "approved_at":"" }`
- `elements.<clave>` = `{ "path":"", "required_slots":["logo","palette"], "slot_revisions":{"logo":1,"palette":1}, "approved_at":"" }`

## Acciones
- **get_status**: lee el archivo y resume qué slots están aprobados/bloqueados.
- **lock_authoritative_***: guarda el activo oficial del usuario (ruta + hash) sin pedir aprobación.
- **approve_palette / approve_logo / approve_typography**: solo tras un "sí"/elección clara del usuario. Subir `revision`.
- **approve_element**: guarda una pieza descendiente con los slots que usa y sus revisiones.
- **Invalidación**: al cambiar un slot, marca como `stale` solo los `elements` cuyo `required_slots` lo incluyan, y el logo si cambió la paleta con que se creó.

Hash del SVG (PowerShell): `(Get-FileHash brandkit/logo/mark.svg -Algorithm SHA256).Hash`
