# Informe de construcción (2026-11-24)

## Resultado

Repo local listo, **sin push**. 58 elementos: 56 skills y 2 subagentes, en 4 plugins de un marketplace de Claude Code. `scripts/validate.py` pasa, y el marketplace se instaló localmente y mostró las 56 skills y los 2 agentes.

## Conteos

| Industria (plugin) | Elementos |
|---|---|
| desarrollo-de-software | 19 |
| negocios-y-startups | 16 |
| marketing-y-contenido | 12 (10 skills + 2 subagentes) |
| productividad-y-conocimiento | 11 |

| Tipo | Elementos |
|---|---|
| modo-de-trabajo | 32 |
| asesor-experto | 10 |
| generador-de-activos | 9 |
| flujo-multipaso | 5 |
| subagente | 2 |

Inventario inicial: 81 entradas (79 skills + 2 subagentes). 10 skills estaban duplicadas con contenido idéntico (hash igual) entre `~/.claude/skills` y los repos descargados; se tomó una sola copia. 71 elementos únicos.

## Excluidos y por qué (decisiones de Ryan)

- `finanzas-y-trading` completo (11 skills `trader-*`): Ryan decidió no incluirlas. No se crea ese plugin.
- Una skill de tarea programada de un curso: datos personales y rutas locales. No es genérica. No se crea el plugin `educacion`.
- `graphify`: solo enlace y crédito en `THIRD_PARTY.md` (origen de la copia local sin confirmar).
- Quarter Zip Agent y Social Media Floor: fuera de alcance, solo mención en README ("repo próximamente").
- Siempre excluidos: `node_modules`, `.runtime`, `output`, `auth.json`, `.env`, cachés, `graphify-out`, `tests` de terceros.

## Datos personales

- `linkedin-contenido`, `linkedin-redactor`, `linkedin-revisor`: nombre, ciudad/país, empleador, programa académico y marcadores `[RYAN: ...]` convertidos a `{{TU_NOMBRE}}`, `{{TU_PAIS}}` y `[AUTOR: ...]`. Se añadió `templates/linkedin/perfil.example.md`. El `linkedin/perfil.md` real **no** se copió.
- Skill de curso: excluida (ver arriba).
- `claude-websites`: la palabra "portafolio" aparece como tipo de sitio, no como dato personal. Sin cambios.
- Búsqueda final en el repo (nombre, correo, programa académico, rutas locales): cero coincidencias fuera de `LICENSE`, `THIRD_PARTY.md` y los `plugin.json`/`marketplace.json`, donde el nombre del titular es intencional. Búsqueda de correos, claves y tokens: sin hallazgos.
- `inventory.json` (tenía rutas locales) se dejó fuera del repo.

## Licencias de terceros

- founder-skill, unhinged-claude-skills, claude-illegal-codes: MIT, Jake Schincariol. Permite redistribuir con el aviso de copyright (en `licenses/`).
- higgsfield-ai/skills: MIT, Higgsfield AI (verificado en la API de GitHub). Las 9 `claude-*` son reescrituras nativas; se acredita el origen.
- day-trader-skill: MIT, pero no se incluye por decisión de Ryan.
- graphify: probable Apache-2.0 (safishamsi/graphify), no verificado que sea la misma copia; solo enlace.
- Skills propias: MIT a nombre del titular (a confirmar por Ryan).

## Renombradas (por pedido de Ryan)

tax-fraud→cost-trimmer, meth-lab→workflow-optimizer, chinese-grandpa→mandarin-prompt-compression, weaponized-autism→obsessive-detail, schizotech→lateral-ideas, crackhead-energy→rapid-ideas, divorced-dad→simplest-first, 67→multi-attempt-judge, crash-out→self-refutation, china-maxing→mandarin-subagent-prompts. El nombre, el título y las referencias `/nombre` dentro de cada skill se actualizaron. Tabla en `THIRD_PARTY.md`.

## Pruebas

Hechas:
- `python scripts/validate.py`: frontmatter válido, nombres únicos, manifiestos coherentes, sin datos personales, sin carpetas prohibidas.
- `claude plugin validate` sobre el marketplace y los 4 plugins: pasó.
- `claude plugin marketplace add <ruta local>` + `plugin install` de los 4 plugins en una configuración aislada (la config real no se tocó): aparecieron 56 skills y 2 agentes, ningún `node_modules`.

No hechas:
- Codex: no está instalado aquí; `scripts/install-codex.ps1` no se ejecutó.
- Claude.ai (subida de .zip de una skill): no probado.
- Ejecución de los scripts de las skills (`claude-generate` con `npm install`, scripts Python de `founder-*`): no se ejecutaron. Los renombres no tocan sus scripts.
- GPTs de ChatGPT: no están en disco; Ryan debe exportarlos a mano (`chatgpt/gpts/`, hoy vacía).

## Pendiente de aprobación de Ryan

1. Confirmar nombre del titular y licencia MIT en `LICENSE`.
2. Revisar el repo y autorizar el push. `gh` no está instalado: `winget install GitHub.cli` y `gh auth login`, o crear el repo desde la web.

Comando de push (NO ejecutado):

```powershell
gh repo create bardack-skills-and-agents --public --source . --push
```

Después, el README usa `<usuario>/bardack-skills-and-agents`; sustituir `<usuario>` por el usuario real.
