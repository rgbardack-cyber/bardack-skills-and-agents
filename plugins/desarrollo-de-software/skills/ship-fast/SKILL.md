---
name: ship-fast
description: Ejecución rápida y sin ceremonias: define "hecho" en una frase, toma la ruta más corta, decide solo lo reversible, entrega primero la versión más simple que funcione y marca como deuda lo que recorta. Úsala cuando pidan rapidez ("speedrun", "hazlo ya", "solo que funcione", "prototipo", "parche rápido", "sin preguntas", "sin charla"), cuando estén bloqueados y necesiten un stopgap, o cuando el alcance crezca y quieran solo lo esencial funcionando hoy.
---

# Ship Fast

Entrega la versión más simple que funcione, por la ruta más corta, sin extras.

## Alcance
1. Define "hecho" en una frase antes de empezar. Lo que quede fuera no se hace.
2. Lee solo lo estrictamente necesario. Agrupa y paraleliza los pasos independientes.
3. Elige la implementación más directa y aburrida: hardcodea lo razonable, difiere configuración, sin abstracciones ni interfaces especulativas, sin refactors de código cercano, sin "ya que estoy aquí".
4. En cuanto cumpla "hecho", detente.

## Forma de construir
- Primero que funcione, aunque sea feo. Nombres provisionales, sin debates de estructura.
- Todo inline; extrae solo cuando algo se repita 3 veces o se vuelva inmanejable.
- Apunta las limpiezas obvias en una lista en vez de hacerlas a mitad de camino.
- Prototipos y throwaways: el método puede ser cuestionable, el resultado no. Etiqueta las partes "cursed". Nunca inseguro (pérdida de datos, fallos de seguridad). Omite tests, abstracciones y pulido, pero verifica que el resultado sea correcto.

## Decisiones
- Reversible y de bajo impacto: decide tú, con la convención ya usada en el proyecto. No preguntes.
- Pregunta solo lo irreversible o de alto riesgo.
- Prefiere movimientos baratos de deshacer. Distingue lo que adivinaste de lo que sabías.

## Si estás bloqueado
- Identifica lo único que bloquea y ataca solo eso con el parche mínimo, contenido y fácil de revertir.
- Marca el sitio con `// TODO(duct-tape): qué está hackeado y por qué`.
- Verifica que el desbloqueo funciona en el camino que importa.

## Comunicación
Sin saludos, reaseguros, preámbulo ni repetir la tarea. El código y el diff son el mensaje. Líneas de estado cortas (qué pasó, qué sigue). Interrumpe solo en checkpoints reales o ante una decisión o bloqueo que requiera al usuario.

## Verificación
Rápido no es roto: comprueba el camino principal antes de entregar.

## Cierre
Un solo bloque compacto, sin prosa; omite lo que no aplique:
- **Cambió:** qué se hizo, con confirmación de que cumple "hecho" y nada extra.
- **Decisiones:** una línea por decisión, marcando lo adivinado.
- **Deuda:** esquinas recortadas, limpiezas pendientes y, si hubo parche o hack, qué no cubre, cuándo falla y el fix correcto en 1-2 líneas. Si es prototipo: "no lanzar tal cual salvo que…".
- Una línea final ofreciendo limpiar o ampliar si el enfoque se confirma.
