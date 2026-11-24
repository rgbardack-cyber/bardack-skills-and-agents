# Bardack's Skills and Agents

Colección de 58 skills y subagentes para Claude Code, Claude.ai y ChatGPT/Codex, organizados por industria y por tipo. Cada industria es un plugin independiente: instala solo la que necesites.

Skills de terceros (MIT) incluidas con crédito en [THIRD_PARTY.md](THIRD_PARTY.md). Licencia propia: MIT ([LICENSE](LICENSE)).

## Instalación

### Claude Code

```
/plugin marketplace add rgbardack-cyber/bardack-skills-and-agents
/plugin install marketing-y-contenido@bardack-skills-and-agents
```

Las skills quedan como `/marketing-y-contenido:<skill>`. Plugins: `marketing-y-contenido`, `negocios-y-startups`, `desarrollo-de-software`, `productividad-y-conocimiento`.

### ChatGPT Codex

Codex lee el mismo formato de plugin (carpeta `skills/` con `SKILL.md`). Este repo trae su catálogo en `.agents/plugins/marketplace.json`.

```
codex plugin marketplace add rgbardack-cyber/bardack-skills-and-agents
```

Luego instala el plugin que quieras desde el directorio de plugins de la app de Codex/ChatGPT (la CLI solo gestiona el catálogo). Alternativa sin plugins: clona el repo y copia las skills a `~/.codex/skills`:

```powershell
git clone https://github.com/rgbardack-cyber/bardack-skills-and-agents
./bardack-skills-and-agents/scripts/install-codex.ps1
```

Más detalles en [chatgpt/README.md](chatgpt/README.md).

### Claude.ai

Descarga la carpeta de la skill que quieras (la que contiene `SKILL.md`), comprímela en `.zip` y súbela en Ajustes → Capacidades → Skills.

### Skills con scripts

`claude-generate` requiere `npm install` dentro de su carpeta `scripts/`; las de `founder-*` requieren Python 3. No se incluye ningún `node_modules`.

### Skills personales

`linkedin-contenido` y sus subagentes son plantillas: reemplaza `{{TU_NOMBRE}}` y `{{TU_PAIS}}` y crea tu `linkedin/perfil.md` a partir de [templates/linkedin/perfil.example.md](templates/linkedin/perfil.example.md).

## Catálogo

Tipos: `generador-de-activos` (produce imágenes, video, sitios), `asesor-experto` (análisis de dominio), `modo-de-trabajo` (cambia cómo trabaja Claude), `flujo-multipaso` (orquesta varios pasos o agentes), `subagente`.


### Marketing y contenido

Imágenes, video, marca, miniaturas, fichas de marketplace y flujo de contenido para LinkedIn.  
Plugin: `marketing-y-contenido`

| Nombre | Tipo | Descripción | Autoría |
|---|---|---|---|
| `linkedin-contenido` | flujo-multipaso | Flujo de contenido para el LinkedIn de {{TU_NOMBRE}}. | propia |
| `claude-brandkit` | generador-de-activos | Versión nativa de "higgsfield-brandkit": crea y extiende sistemas de marca completos sin Higgsfield: paleta, marcas/logos en SVG, tipografía, mockups, gráficos sociales,  | propia, basada en [Higgsfield](https://github.com/higgsfield-ai/skills) (MIT) |
| `claude-faceless-video` | generador-de-activos | Versión nativa de "higgsfield-faceless-video" (y de "video-explainer"): crea un video sin cara terminado (explicativo ilustrado, documental, historia con imágenes, video  | propia, basada en [Higgsfield](https://github.com/higgsfield-ai/skills) (MIT) |
| `claude-generate` | generador-de-activos | Versión nativa de Claude de "higgsfield-generate": crea imágenes, GIFs/SVG animados, animaciones de video, audio/SFX, modelos 3D, anuncios (UGC/product demo/TV spot) y an | propia, basada en [Higgsfield](https://github.com/higgsfield-ai/skills) (MIT) |
| `claude-marketplace-cards` | generador-de-activos | Versión nativa de "higgsfield-marketplace-cards": crea el set de imágenes para fichas de marketplace (Amazon, Mercado Libre, Shopify, etc.): imagen principal conforme, im | propia, basada en [Higgsfield](https://github.com/higgsfield-ai/skills) (MIT) |
| `claude-product-photoshoot` | generador-de-activos | Versión nativa de "higgsfield-product-photoshoot": planifica y produce imágenes de producto para marca y publicidad (estudio, lifestyle, hero banner, carrusel, pack de an | propia, basada en [Higgsfield](https://github.com/higgsfield-ai/skills) (MIT) |
| `claude-soul-id` | generador-de-activos | Versión nativa de "higgsfield-soul-id": crea una "ficha de identidad" (character/identity bible) de una persona o personaje para mantener consistencia en cualquier genera | propia, basada en [Higgsfield](https://github.com/higgsfield-ai/skills) (MIT) |
| `claude-video-explainer` | generador-de-activos | Entrada de compatibilidad de "higgsfield-video-explainer": redirige a claude-faceless-video en modo explicativo ilustrado. | propia, basada en [Higgsfield](https://github.com/higgsfield-ai/skills) (MIT) |
| `claude-youtube-thumbnail` | generador-de-activos | Versión nativa de "higgsfield-youtube-thumbnail": crea miniaturas de YouTube de alto CTR y portadas verticales (Shorts/Reels) sin Higgsfield. | propia, basada en [Higgsfield](https://github.com/higgsfield-ai/skills) (MIT) |
| `aura-farming` | modo-de-trabajo | Maximum-aesthetic mode for any visual deliverable (Meta ads, slide decks, landing pages, social graphics, posters, UI) that bans every AI-slop tell, forces a real design  | [claude-illegal-codes](https://github.com/Jakeschincariol/claude-illegal-codes) |
| `linkedin-redactor` | subagente | Redacta borradores de publicaciones y artículos de LinkedIn para {{TU_NOMBRE}} a partir de un tema, o corrige un borrador existente con las observaciones del revisor. | propia |
| `linkedin-revisor` | subagente | Revisor independiente de borradores de LinkedIn de {{TU_NOMBRE}}. | propia |

### Negocios y startups

Pon a prueba un negocio antes de lanzarlo: junta directiva, CFO, precios, oferta, competencia, y modos para generar ideas y priorizar.  
Plugin: `negocios-y-startups`

| Nombre | Tipo | Descripción | Autoría |
|---|---|---|---|
| `founder-brand` | asesor-experto | - Your brand designer. | [founder-skill](https://github.com/Jakeschincariol/founder-skill) |
| `founder-cfo` | asesor-experto | - Your CFO. Builds the unit economics of a business before money is spent: what one unit earns after its direct costs, the real profit margin at the planned volume, the b | [founder-skill](https://github.com/Jakeschincariol/founder-skill) |
| `founder-competitors` | asesor-experto | - Maps every competitor and the gap they leave. | [founder-skill](https://github.com/Jakeschincariol/founder-skill) |
| `founder-launch` | asesor-experto | - Your launch lead. Builds a dated, step-by-step launch plan: a cheap real-world test first (a waitlist, a pre-sale or a pop-up with a real price, so real buyers confirm  | [founder-skill](https://github.com/Jakeschincariol/founder-skill) |
| `founder-marketing` | asesor-experto | - Your marketing director. | [founder-skill](https://github.com/Jakeschincariol/founder-skill) |
| `founder-offer` | asesor-experto | - Builds an offer too good to refuse. | [founder-skill](https://github.com/Jakeschincariol/founder-skill) |
| `founder-ops` | asesor-experto | - Your operations manager. | [founder-skill](https://github.com/Jakeschincariol/founder-skill) |
| `founder-plan` | asesor-experto | - Your business planner. | [founder-skill](https://github.com/Jakeschincariol/founder-skill) |
| `founder-pricing` | asesor-experto | - Finds the price buyers will actually pay. | [founder-skill](https://github.com/Jakeschincariol/founder-skill) |
| `larp` | asesor-experto | Startup idea analyzer that channels a 24-year-old founder with Euro Summer photos and a $100M raise for a ChatGPT wrapper, runs the idea through a rigorous teardown under | [claude-illegal-codes](https://github.com/Jakeschincariol/claude-illegal-codes) |
| `founder-board` | flujo-multipaso | - Your board of directors. | [founder-skill](https://github.com/Jakeschincariol/founder-skill) |
| `founder-consumer` | flujo-multipaso | - The consumer panel. | [founder-skill](https://github.com/Jakeschincariol/founder-skill) |
| `idea-storm` | modo-de-trabajo | Generación divergente de ideas: lanza ~20 direcciones rápidas, incluidas conexiones laterales entre dominios no relacionados, para que el usuario filtre. | propia |
| `lateral-ideas` | modo-de-trabajo | Connects the dots nobody asked for — wild, lateral architecture ideas linking things you'd never pair on purpose; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `rapid-ideas` | modo-de-trabajo | Fires out ideas at full speed — twenty rough directions in a minute for the user to cherry-pick; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `sleep-deprived-founder` | modo-de-trabajo | Cuts the backlog to the one or two things that actually move the needle and ignores the rest; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |

### Desarrollo de software

Modos de trabajo para programar: rápido, mínimo, exhaustivo, triage de incidentes, plan de construcción y sitios web.  
Plugin: `desarrollo-de-software`

| Nombre | Tipo | Descripción | Autoría |
|---|---|---|---|
| `redneck-engineer` | flujo-multipaso | Turns a vague idea into a clear build plan — short PRD, task list, user flows, constraints, and acceptance criteria — so Claude Code knows exactly what to build; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `claude-websites` | generador-de-activos | Versión nativa de "higgsfield-websites": diseña, construye y publica sitios web, landing pages, apps web y juegos de navegador sin Higgsfield. | propia, basada en [Higgsfield](https://github.com/higgsfield-ai/skills) (MIT) |
| `apollo-13` | modo-de-trabajo | Works a critical failure under hard constraints — limited options, no clean fix — to get the broken thing home with whatever you have; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `autopilot-chaos` | modo-de-trabajo | Takes the whole task and runs it end to end without stopping to ask, leaving the user to review at the finish line; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `basement-hacker` | modo-de-trabajo | Goes underground to reverse-engineer internals, read the source nobody reads, and explain how something actually works; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `cowboy-coder` | modo-de-trabajo | Makes the judgment calls itself and keeps moving instead of pausing at every fork — fast and opinionated, best on low-stakes work; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `duct-tape-dev` | modo-de-trabajo | Ships the quick patch that unblocks you right now and clearly flags it as debt to revisit later; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `feral-goblin` | modo-de-trabajo | Drops the small talk and goes heads-down — no preamble, just code and short status lines until done; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `gas-station-genius` | modo-de-trabajo | Solves the problem using only what is already in the repo — no new libraries, no installs, a fix built from parts on hand; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `goblin-mode` | modo-de-trabajo | Gets it working ugly first — no naming debates, no structure until structure earns its place; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `keyboard-gremlin` | modo-de-trabajo | Makes the smallest possible change — surgical edits, minimal diff, nothing touched that didn't need to be; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `macgyver` | modo-de-trabajo | Improvises a solution from primitives — standard library and cleverness instead of reaching for a new framework; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `minimal-footprint` | modo-de-trabajo | Cambio de huella mínima: diff quirúrgico y sin dependencias nuevas. | propia |
| `panic-mode` | modo-de-trabajo | Triages a live incident — stop the bleeding first, smallest safe fix next, post-mortem once stable; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `questionable-engineering` | modo-de-trabajo | Picks the solution that works over the one that's technically correct — pragmatic, slightly cursed, perfect for prototypes; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `rage-compile` | modo-de-trabajo | Attacks the error list in one relentless pass — fix, rebuild, repeat, no commentary — until it builds clean; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `ship-fast` | modo-de-trabajo | Ejecución rápida y sin ceremonias: define "hecho" en una frase, toma la ruta más corta, decide solo lo reversible, entrega primero la versión más simple que funcione y ma | propia |
| `simplest-first` | modo-de-trabajo | Anti-gold-plating mode that builds the simplest functional version first, skips overengineering, and ships something usable today because working beats perfect; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `speedrun` | modo-de-trabajo | Finds the shortest path to done and takes it — no detours, no nice-to-haves; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |

### Productividad y conocimiento

Verificación adversarial, recorte de costo, compresión de prompts, contexto largo y juicio de múltiples intentos.  
Plugin: `productividad-y-conocimiento`

| Nombre | Tipo | Descripción | Autoría |
|---|---|---|---|
| `multi-attempt-judge` | flujo-multipaso | Runs the task through six agents in parallel, each locked to a different strategy, then a seventh judge ranks the six attempts and synthesizes a final answer that steals  | [claude-illegal-codes](https://github.com/Jakeschincariol/claude-illegal-codes) |
| `caffeine-overdose` | modo-de-trabajo | Goes wide and exhaustive — every option, every edge, every step spelled out, the opposite of a compressor; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `cost-trimmer` | modo-de-trabajo | Hunts cost everywhere — trims tokens, kills redundant calls, and reports the cheapest path to the same result; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `lean-system` | modo-de-trabajo | Auditoría y recorte de costo y complejidad: mapea un sistema, prompt, automatización o flujo de IA, elimina redundancia y desperdicio de tokens, llamadas y cómputo, y ent | propia |
| `mandarin-prompt-compression` | modo-de-trabajo | Compresses long, repeated sub-agent instructions by translating them into Mandarin (more meaning per character) to slash the token bill, then dispatches the compressed br | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `mandarin-subagent-prompts` | modo-de-trabajo | Session mode that translates every sub-agent prompt into Mandarin before dispatch (more meaning per character, fewer tokens) while keeping code, identifiers, and all user | [claude-illegal-codes](https://github.com/Jakeschincariol/claude-illegal-codes) |
| `obsessive-detail` | modo-de-trabajo | Obsessive-detail mode that reads every relevant file, checks every edge case, questions every assumption, and chases every dependency before answering; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `self-refutation` | modo-de-trabajo | Anti-hallucination mode where Claude drafts an answer and then becomes obsessed with proving itself wrong, attacking every claim with tools and counter-evidence and shipp | [claude-illegal-codes](https://github.com/Jakeschincariol/claude-illegal-codes) |
| `verify-hard` | modo-de-trabajo | Verificación adversarial: investiga a fondo (lee todo lo relevante, traza dependencias, enumera casos borde), redacta un borrador y luego intenta refutarlo con evidencia; | propia |
| `workflow-optimizer` | modo-de-trabajo | Workflow and system optimizer that takes a messy system, bloated prompt, broken automation, or slow process and strips it to the fastest, cheapest, cleanest version that  | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |
| `zero-sleep` | modo-de-trabajo | Holds the thread across a big multi-step build without losing the plot — long-haul endurance and context-keeping; | [unhinged-claude-skills](https://github.com/Jakeschincariol/unhinged-claude-skills) |

## Sistemas de agentes

Proyectos más grandes que tendrán su propio repo:

- **Quarter Zip Agent**: equipo de subagentes de consultoría con skills `consultant-*`. Repo próximamente.
- **Social Media Floor**: app para operar redes sociales con agentes. Repo próximamente.

## Aviso

Las skills se entregan tal cual. Revisa el contenido de una skill antes de usarla, sobre todo las que ejecutan scripts.
