# Clasificación propuesta (Fase 2)

> **Decisiones finales de Ryan (reemplazan lo propuesto abajo):** se excluye la skill de tarea programada de curso; `graphify` solo enlace; los 11 `trader-*` se excluyen del todo (no hay plugin `finanzas-y-trading` ni `educacion`); los nombres provocadores se renombraron (ver THIRD_PARTY.md); los casi-duplicados se conservan; las `claude-*` se incluyen con crédito. Resultado final y conteos en `informe.md`.


> **Requiere aprobación de Ryan antes de copiar archivos.** Generado 2026-11-24 desde `docs/inventory.json`.

Inventario: 81 entradas encontradas (79 skills + 2 subagentes). 10 skills están duplicadas con contenido **idéntico** (hash igual) entre `~/.claude/skills` y los repos descargados: apollo-13, autopilot-chaos, basement-hacker, caffeine-overdose, panic-mode, rage-compile, redneck-engineer, sleep-deprived-founder, zero-sleep, larp. Se cuentan una vez. Quedan **71 elementos únicos**; **69** se copian, 1 queda solo con enlace y 1 se excluye.

## Conteo por industria

- `desarrollo-de-software`: 19
- `educacion`: 1
- `finanzas-y-trading`: 11
- `marketing-y-contenido`: 12
- `negocios-y-startups`: 16
- `productividad-y-conocimiento`: 12

## Conteo por tipo

- `asesor-experto`: 21
- `flujo-multipaso`: 7
- `generador-de-activos`: 9
- `modo-de-trabajo`: 32
- `subagente`: 2

## Tabla

| Industria | Tipo | Elemento | Fuente | Acción | Nota |
|---|---|---|---|---|---|
| desarrollo-de-software | flujo-multipaso | `redneck-engineer` | claude-home | COPIAR | Propia/adaptada (confirmar MIT) |
| desarrollo-de-software | generador-de-activos | `claude-websites` | claude-home | COPIAR + crédito | Reescritura nativa de higgsfield-ai/skills (MIT, Higgsfield AI); propia + crédito |
| desarrollo-de-software | modo-de-trabajo | `apollo-13` | claude-home | COPIAR | Propia/adaptada (confirmar MIT) |
| desarrollo-de-software | modo-de-trabajo | `autopilot-chaos` | claude-home | COPIAR | Propia/adaptada (confirmar MIT) |
| desarrollo-de-software | modo-de-trabajo | `basement-hacker` | claude-home | COPIAR | Propia/adaptada (confirmar MIT) |
| desarrollo-de-software | modo-de-trabajo | `cowboy-coder` | unhinged | COPIAR + crédito | MIT, Jake Schincariol |
| desarrollo-de-software | modo-de-trabajo | `divorced-dad` | unhinged | COPIAR + crédito | MIT, Jake Schincariol |
| desarrollo-de-software | modo-de-trabajo | `duct-tape-dev` | unhinged | COPIAR + crédito | MIT, Jake Schincariol |
| desarrollo-de-software | modo-de-trabajo | `feral-goblin` | unhinged | COPIAR + crédito | MIT, Jake Schincariol |
| desarrollo-de-software | modo-de-trabajo | `gas-station-genius` | unhinged | COPIAR + crédito | MIT, Jake Schincariol |
| desarrollo-de-software | modo-de-trabajo | `goblin-mode` | unhinged | COPIAR + crédito | MIT, Jake Schincariol |
| desarrollo-de-software | modo-de-trabajo | `keyboard-gremlin` | unhinged | COPIAR + crédito | MIT, Jake Schincariol |
| desarrollo-de-software | modo-de-trabajo | `macgyver` | unhinged | COPIAR + crédito | MIT, Jake Schincariol |
| desarrollo-de-software | modo-de-trabajo | `minimal-footprint` | claude-home | COPIAR | Propia/adaptada (confirmar MIT) |
| desarrollo-de-software | modo-de-trabajo | `panic-mode` | claude-home | COPIAR | Propia/adaptada (confirmar MIT) |
| desarrollo-de-software | modo-de-trabajo | `questionable-engineering` | unhinged | COPIAR + crédito | MIT, Jake Schincariol |
| desarrollo-de-software | modo-de-trabajo | `rage-compile` | claude-home | COPIAR | Propia/adaptada (confirmar MIT) |
| desarrollo-de-software | modo-de-trabajo | `ship-fast` | claude-home | COPIAR | Propia/adaptada (confirmar MIT) |
| desarrollo-de-software | modo-de-trabajo | `speedrun` | unhinged | COPIAR + crédito | MIT, Jake Schincariol |
| educacion | flujo-multipaso | `tarea-programada-de-curso` | sched | EXCLUIR | Datos personales y de clase (correo, junta de curso); no es genérica |
| finanzas-y-trading | asesor-experto | `trader-alerts` | trader | COPIAR + crédito | MIT, Jake Schincariol |
| finanzas-y-trading | asesor-experto | `trader-analyst` | trader | COPIAR + crédito | MIT, Jake Schincariol |
| finanzas-y-trading | asesor-experto | `trader-broker` | trader | COPIAR + crédito | MIT, Jake Schincariol |
| finanzas-y-trading | asesor-experto | `trader-budget` | trader | COPIAR + crédito | MIT, Jake Schincariol |
| finanzas-y-trading | asesor-experto | `trader-entry` | trader | COPIAR + crédito | MIT, Jake Schincariol |
| finanzas-y-trading | asesor-experto | `trader-exit` | trader | COPIAR + crédito | MIT, Jake Schincariol |
| finanzas-y-trading | asesor-experto | `trader-news` | trader | COPIAR + crédito | MIT, Jake Schincariol |
| finanzas-y-trading | asesor-experto | `trader-pelosi` | trader | COPIAR + crédito | MIT, Jake Schincariol |
| finanzas-y-trading | asesor-experto | `trader-risk` | trader | COPIAR + crédito | MIT, Jake Schincariol |
| finanzas-y-trading | asesor-experto | `trader-scanner` | trader | COPIAR + crédito | MIT, Jake Schincariol |
| finanzas-y-trading | asesor-experto | `trader-timemachine` | trader | COPIAR + crédito | MIT, Jake Schincariol |
| marketing-y-contenido | flujo-multipaso | `linkedin-contenido` | local | PLANTILLA | Nombre/perfil de Ryan -> {{TU_NOMBRE}} + templates/linkedin/perfil.example.md |
| marketing-y-contenido | generador-de-activos | `claude-brandkit` | claude-home | COPIAR + crédito | Reescritura nativa de higgsfield-ai/skills (MIT, Higgsfield AI); propia + crédito |
| marketing-y-contenido | generador-de-activos | `claude-faceless-video` | claude-home | COPIAR + crédito | Reescritura nativa de higgsfield-ai/skills (MIT, Higgsfield AI); propia + crédito |
| marketing-y-contenido | generador-de-activos | `claude-generate` | claude-home | COPIAR + crédito | Reescritura nativa de higgsfield-ai/skills (MIT, Higgsfield AI); propia + crédito |
| marketing-y-contenido | generador-de-activos | `claude-marketplace-cards` | claude-home | COPIAR + crédito | Reescritura nativa de higgsfield-ai/skills (MIT, Higgsfield AI); propia + crédito |
| marketing-y-contenido | generador-de-activos | `claude-product-photoshoot` | claude-home | COPIAR + crédito | Reescritura nativa de higgsfield-ai/skills (MIT, Higgsfield AI); propia + crédito |
| marketing-y-contenido | generador-de-activos | `claude-soul-id` | claude-home | COPIAR + crédito | Reescritura nativa de higgsfield-ai/skills (MIT, Higgsfield AI); propia + crédito |
| marketing-y-contenido | generador-de-activos | `claude-video-explainer` | claude-home | COPIAR + crédito | Reescritura nativa de higgsfield-ai/skills (MIT, Higgsfield AI); propia + crédito |
| marketing-y-contenido | generador-de-activos | `claude-youtube-thumbnail` | claude-home | COPIAR + crédito | Reescritura nativa de higgsfield-ai/skills (MIT, Higgsfield AI); propia + crédito |
| marketing-y-contenido | modo-de-trabajo | `aura-farming` | illegal | COPIAR + crédito | MIT, Jake Schincariol |
| marketing-y-contenido | subagente | `linkedin-redactor` | agent | PLANTILLA | Nombre/perfil de Ryan -> {{TU_NOMBRE}} + templates/linkedin/perfil.example.md |
| marketing-y-contenido | subagente | `linkedin-revisor` | agent | PLANTILLA | Nombre/perfil de Ryan -> {{TU_NOMBRE}} + templates/linkedin/perfil.example.md |
| negocios-y-startups | asesor-experto | `founder-brand` | founder | COPIAR + crédito | MIT, Jake Schincariol |
| negocios-y-startups | asesor-experto | `founder-cfo` | founder | COPIAR + crédito | MIT, Jake Schincariol |
| negocios-y-startups | asesor-experto | `founder-competitors` | founder | COPIAR + crédito | MIT, Jake Schincariol |
| negocios-y-startups | asesor-experto | `founder-launch` | founder | COPIAR + crédito | MIT, Jake Schincariol |
| negocios-y-startups | asesor-experto | `founder-marketing` | founder | COPIAR + crédito | MIT, Jake Schincariol |
| negocios-y-startups | asesor-experto | `founder-offer` | founder | COPIAR + crédito | MIT, Jake Schincariol |
| negocios-y-startups | asesor-experto | `founder-ops` | founder | COPIAR + crédito | MIT, Jake Schincariol |
| negocios-y-startups | asesor-experto | `founder-plan` | founder | COPIAR + crédito | MIT, Jake Schincariol |
| negocios-y-startups | asesor-experto | `founder-pricing` | founder | COPIAR + crédito | MIT, Jake Schincariol |
| negocios-y-startups | asesor-experto | `larp` | claude-home | COPIAR | Propia/adaptada (confirmar MIT) |
| negocios-y-startups | flujo-multipaso | `founder-board` | founder | COPIAR + crédito | MIT, Jake Schincariol |
| negocios-y-startups | flujo-multipaso | `founder-consumer` | founder | COPIAR + crédito | MIT, Jake Schincariol |
| negocios-y-startups | modo-de-trabajo | `crackhead-energy` | unhinged | COPIAR + crédito | MIT, Jake Schincariol |
| negocios-y-startups | modo-de-trabajo | `idea-storm` | claude-home | COPIAR | Propia/adaptada (confirmar MIT) |
| negocios-y-startups | modo-de-trabajo | `schizotech` | unhinged | COPIAR + crédito | MIT, Jake Schincariol |
| negocios-y-startups | modo-de-trabajo | `sleep-deprived-founder` | claude-home | COPIAR | Propia/adaptada (confirmar MIT) |
| productividad-y-conocimiento | flujo-multipaso | `67` | illegal | COPIAR + crédito | MIT, Jake Schincariol |
| productividad-y-conocimiento | flujo-multipaso | `graphify` | claude-home | SOLO ENLACE | Origen/licencia sin confirmar (posible safishamsi/graphify, Apache-2.0); 98 KB |
| productividad-y-conocimiento | modo-de-trabajo | `caffeine-overdose` | claude-home | COPIAR | Propia/adaptada (confirmar MIT) |
| productividad-y-conocimiento | modo-de-trabajo | `china-maxing` | illegal | COPIAR + crédito | MIT, Jake Schincariol |
| productividad-y-conocimiento | modo-de-trabajo | `chinese-grandpa` | unhinged | COPIAR + crédito | MIT, Jake Schincariol |
| productividad-y-conocimiento | modo-de-trabajo | `crash-out` | illegal | COPIAR + crédito | MIT, Jake Schincariol |
| productividad-y-conocimiento | modo-de-trabajo | `lean-system` | claude-home | COPIAR | Propia/adaptada (confirmar MIT) |
| productividad-y-conocimiento | modo-de-trabajo | `meth-lab` | unhinged | COPIAR + crédito | MIT, Jake Schincariol |
| productividad-y-conocimiento | modo-de-trabajo | `tax-fraud` | unhinged | COPIAR + crédito | MIT, Jake Schincariol |
| productividad-y-conocimiento | modo-de-trabajo | `verify-hard` | claude-home | COPIAR | Propia/adaptada (confirmar MIT) |
| productividad-y-conocimiento | modo-de-trabajo | `weaponized-autism` | unhinged | COPIAR + crédito | MIT, Jake Schincariol |
| productividad-y-conocimiento | modo-de-trabajo | `zero-sleep` | claude-home | COPIAR | Propia/adaptada (confirmar MIT) |

## Decisiones que necesito de Ryan

1. **`tarea-programada-de-curso`**: propongo EXCLUIR (datos personales y rutas locales). Sin ella, `educacion` queda vacía y no se crea ese plugin. ¿De acuerdo?
2. **`graphify`**: no pude confirmar de dónde viene tu copia (`~/.local/bin/graphify`; el repo safishamsi/graphify es Apache-2.0, pero no está verificado que sea el mismo). Propongo solo enlace + crédito hasta que confirmes. ¿Lo confirmas o lo dejas como enlace?
3. **Nombres provocadores** de skills de terceros: `tax-fraud`, `meth-lab`, `67`, `crash-out`, `china-maxing`, `chinese-grandpa`, `weaponized-autism`, `schizotech`, `crackhead-energy`, `divorced-dad`. Son MIT y están en repos públicos del autor, pero en un repo público a tu nombre pueden leerse mal (sobre todo para reclutadores). Propuesta por defecto: **copiarlas todas** sin renombrar. Alternativa: no incluirlas y dejar solo enlace al repo original. ¿Cuál?
4. **Casi-duplicados** (mismo concepto, distinto repo): `china-maxing` ≈ `chinese-grandpa`; `lean-system` ≈ `tax-fraud` ≈ `meth-lab`; `speedrun` ≈ `ship-fast`; `keyboard-gremlin` ≈ `minimal-footprint`; `gas-station-genius` ≈ `macgyver`. Propuesta: **conservar todas** (no son idénticas).
5. **Skills `claude-*`**: reescrituras tuyas de `higgsfield-ai/skills` (MIT, Higgsfield AI, verificado vía API de GitHub). Las incluyo con crédito en `THIRD_PARTY.md`. ¿OK?
6. **Licencia propia**: MIT a nombre de el titular del repo. ¿Confirmas nombre y MIT?
7. **`finanzas-y-trading`**: MIT permite redistribuir (11 skills con scripts Python). Las incluyo con aviso de que no es asesoría financiera; omito tests y README originales, conservo LICENSE. ¿OK?
8. `gh` no está instalado en esta máquina: el push final requerirá instalarlo (`winget install GitHub.cli`) o crear el repo desde la web.

## Notas

- Excluidos siempre: node_modules, .runtime, output, auth.json, .env, cachés, graphify-out.
- Quarter Zip Agent y Social Media Floor: fuera de alcance; solo mención en README.
- Subagentes (2): par LinkedIn, ligado a `linkedin/perfil.md`; se convierten en plantilla.
