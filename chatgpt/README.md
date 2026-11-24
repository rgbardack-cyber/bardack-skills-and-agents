# Usar estas skills en ChatGPT y Codex

## Codex: instalar como plugin marketplace

El repo trae `.agents/plugins/marketplace.json` y un `plugin.json` por plugin:

```
codex plugin marketplace add rgbardack-cyber/bardack-skills-and-agents
```

La CLI solo registra el catálogo; instala el plugin desde el directorio de plugins de la app de Codex/ChatGPT. (Formato tomado de la documentación de OpenAI; no se pudo probar en esta máquina.)

## Codex: copiar skills a mano

Codex lee skills con el mismo formato `SKILL.md` desde `~/.codex/skills` (o `.agents/skills` dentro de un proyecto).

En PowerShell, desde la raíz del repo:

```powershell
./scripts/install-codex.ps1                       # todas las skills
./scripts/install-codex.ps1 -Plugin desarrollo-de-software   # solo un plugin
```

El script solo copia; no borra nada. Si una skill ya existe en el destino, la omite salvo que uses `-Force`.

## ChatGPT (web)

ChatGPT web no lee carpetas de skills. Opciones:

1. Pega el contenido de un `SKILL.md` en las Instrucciones de un GPT personalizado o de un Proyecto.
2. Para las skills con `scripts/` (por ejemplo `claude-generate`), sube los archivos como conocimiento solo si no hay nada privado en ellos.

## Fichas para ChatGPT

Las fichas de `gpts/` documentan instrucciones reutilizables. Las marcadas como **GPT** proceden de configuraciones de GPTs personalizados. Las **plantillas** recogen flujos y preferencias reutilizables. Para usarlas, pega la sección de instrucciones en un chat, un Proyecto o un GPT que puedas editar.

| Ficha | Formato | Qué hace |
| --- | --- | --- |
| [Instructor de golf y selección de equipo](gpts/instructor-de-golf-y-equipo.md) | GPT | Orienta sobre técnica de golf y elección de palos, bolas y equipo. |
| [Tutor socrático de conceptos](gpts/tutor-socratico-de-conceptos.md) | GPT | Enseña conceptos con preguntas, pistas y comprobación de comprensión. |
| [Tutor-editor de análisis de casos](gpts/tutor-editor-de-analisis-de-casos.md) | GPT | Guía un análisis propio, edita el borrador y lo revisa contra la rúbrica. |
| [Explicación de cálculos financieros](gpts/explicacion-de-calculos-financieros.md) | Plantilla | Explica fórmulas e intereses con variables, unidades y ejemplos. |
| [Diseño y revisión de flyers](gpts/diseno-y-revision-de-flyers.md) | Plantilla | Produce o corrige un flyer y comprueba los datos de la pieza. |
| [Redacción de mensajes y comunicados](gpts/redaccion-de-mensajes-y-comunicados.md) | Plantilla | Adapta textos al público y al canal, con una pauta para anuncios de eventos. |
| [Contrapropuesta de participación societaria](gpts/contrapropuesta-de-participacion-societaria.md) | Plantilla | Prepara escenarios de propiedad, voto, junta, vesting y dilución para negociar. |
| [Seguimiento a patrocinadores](gpts/seguimiento-a-patrocinadores.md) | Plantilla | Revisa el último contacto, prepara el próximo seguimiento y registra su estado. |
| [Automatizaciones con cuentas separadas](gpts/automatizaciones-con-cuentas-separadas.md) | Plantilla | Configura y verifica tareas programadas con cuentas, fuentes y destinos autorizados. |

### Cuándo usar las fichas y las skills del catálogo

- El tutor socrático enseña conceptos con preguntas. El tutor-editor revisa un trabajo de análisis de casos con su consigna y rúbrica.
- La ficha de flyers guía la creación y las correcciones de una pieza concreta. [`claude-generate`](../plugins/marketing-y-contenido/skills/claude-generate/SKILL.md) cubre producción de muchos formatos.
- La redacción de mensajes adapta texto al canal. El seguimiento a patrocinadores también consulta el estado de la relación y define la próxima acción. [`linkedin-contenido`](../plugins/marketing-y-contenido/skills/linkedin-contenido/SKILL.md) prepara publicaciones y artículos de LinkedIn.
- La contrapropuesta societaria organiza condiciones entre socios. [`founder-board`](../plugins/negocios-y-startups/skills/founder-board/SKILL.md) evalúa una idea de negocio. La ficha de cálculos explica fórmulas paso a paso y [`founder-cfo`](../plugins/negocios-y-startups/skills/founder-cfo/SKILL.md) modela la economía de una empresa.
- La ficha de automatizaciones define cuentas, permisos, horario y destino para ejecutar tareas. [`lean-system`](../plugins/productividad-y-conocimiento/skills/lean-system/SKILL.md) reduce el costo y la complejidad de un flujo existente.
