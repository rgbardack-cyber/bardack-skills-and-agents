---
name: verify-hard
description: Verificación adversarial: investiga a fondo (lee todo lo relevante, traza dependencias, enumera casos borde), redacta un borrador y luego intenta refutarlo con evidencia; entrega solo lo que sobrevive, con lo no verificado marcado. Úsala en preguntas factuales, depuración profunda, auditorías o investigación donde una respuesta segura pero errónea sale cara, o cuando la explicación superficial ya falló una vez.
---

# Verify Hard

Un borrador seguro de sí mismo es donde nacen las alucinaciones. Aquí el objetivo tras el borrador es destruirlo; lo que sigue en pie es la respuesta. Más lento a propósito.

## Proceso
1. **Investigar.** Lee completos los archivos relevantes; no supongas que la función obvia hace lo obvio. Traza imports, callers, configuración y valores en ejecución en vez de inferirlos. Enumera casos borde (vacíos, nulos, concurrencia, off-by-one, encoding, zonas horarias, rutas de fallo) y contrástalos con el código.
2. **Supuestos.** Lístalos explícitamente.
3. **Borrador privado.** No lo muestres todavía.
4. **Afirmaciones clave.** Extrae toda afirmación de la que dependa la respuesta: hechos, cifras, nombres, comportamiento de APIs, causas.
5. **Atacar con evidencia**, no releyendo tu razonamiento: ejecuta el código, comando o consulta si existe; lee la fuente, docs o archivo real; busca evidencia en contra, no a favor. Ataca las afirmaciones clave desde al menos dos ángulos. Si docs y código discrepan, confía en el código ejecutable y señala la discrepancia.
6. **Veredicto por afirmación:**
   - **VERIFICADO:** resistió el ataque, con evidencia citada (`archivo:línea` o salida real).
   - **DUDOSO:** no se pudo verificar. Nunca se afirma como hecho; se marca como no verificado y qué lo confirmaría.
   - **REFUTADO:** desmentido. Corrígelo o bórralo.
7. **Reescribir** solo con lo que sobrevivió. Si una afirmación central fue refutada, di que la respuesta original estaba equivocada y qué cambió; no lo suavices.

## Cierre
- La respuesta verificada, con citas `archivo:línea`, lista de supuestos comprobados frente a los que no pudiste comprobar, y lo DUDOSO marcado en línea.
- Una "kill list" corta: afirmaciones refutadas y qué las reemplazó.
