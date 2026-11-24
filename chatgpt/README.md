# Usar estas skills en ChatGPT y Codex

## Codex (CLI / app)

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

## GPTs propios

La carpeta `gpts/` guarda las instrucciones de GPTs exportadas a mano (nombre, descripción, instrucciones) como `gpts/<nombre>.md`. Por ahora está vacía: ChatGPT no guarda los GPTs en disco, así que hay que copiarlos desde chatgpt.com/gpts/mine → Editar → Configurar. Revisa que no contengan datos personales antes de subirlos.
