---
name: lean-system
description: >-
  Auditoría y recorte de costo y complejidad: mapea un sistema, prompt, automatización o flujo de IA, elimina redundancia y desperdicio de tokens, llamadas y cómputo, y entrega la versión más barata y simple que produce el mismo resultado, con antes/después verificado. Úsala cuando algo funciona pero está pesado, lento, caro o pegado con cinta, cuando un pipeline de IA cuesta más de lo debido, o cuando vayan a repartir las mismas instrucciones largas a muchos subagentes y el costo suba.
---

# Lean System

Mismo resultado, una fracción del peso y del costo.

## Proceso
1. **Mapear primero**, sin cambiar nada: cada paso, llamada al modelo, dependencia, tamaño de prompt, retry y costo.
2. **Separar** el trabajo real y sus restricciones de la complejidad accidental acumulada.
3. **Marcar para quitar:** pasos redundantes, trabajo duplicado, ramas muertas, alcance excesivo y llamadas innecesarias.
4. **Recortar:**
   - Cachea, memoiza o agrupa llamadas repetidas; reduce viajes de ida y vuelta y deja de pagar salida que se descarta.
   - Colapsa cadenas de pasos en el mínimo de operaciones que mantenga el mismo resultado y las mismas garantías.
   - Quita relleno de prompts, deduplica contexto y elimina campos que el modelo no necesita.
   - Señala dónde un modelo más pequeño o barato da el mismo resultado.
5. **Verificar equivalencia:** la versión recortada debe producir lo mismo antes de recomendarla. Más ligera no puede significar rota.
6. **Cuantificar:** estima costo o tokens antes y después, con cifras concretas.
7. **Registrar** lo quitado que tuviera un propósito no obvio, para no cortar algo estructural por accidente.

## Revisión opcional del gasto por tarea

Si el usuario pregunta si le compensan sus herramientas de IA, registra por tarea recurrente su frecuencia, costo por ejecución, tiempo manual, tiempo con IA, revisión humana pendiente y quién aprueba. Suma el tiempo de revisión al tiempo con IA para calcular el ahorro neto. Para una suscripción compartida, divide su costo solo si hay datos suficientes para asignarlo entre tareas y explica el método. Distingue cada cifra medida de cada estimación y deja como **desconocido** cualquier valor que falte. No extrapoles una cifra desconocida a un total semanal.

## Táctica condicional: compresión en mandarín para fan-out
Solo cuando el mismo bloque largo de instrucciones se envía a muchos subagentes:
1. Conserva el brief completo en inglés como fuente de verdad; no lo descartes.
2. Separa el bloque reutilizable de los parámetros propios de cada agente.
3. Traduce solo el bloque reutilizable a mandarín claro y denso, sin perder ninguna restricción, criterio de aceptación ni caso borde.
4. Comprueba por retrotraducción que sigue codificando todo requisito crítico antes de enviarlo.
5. Despacha el brief en mandarín más los parámetros específicos en su forma original (rutas, IDs y objetivos no se traducen).
6. Pide a cada subagente que devuelva sus resultados en inglés.
7. Si una cláusula crítica queda ambigua al comprimir, déjala en inglés.
8. Aplícala solo si el ahorro se mide y es real (paso 5 y 6); no lo des por supuesto.

## Cierre
La versión simplificada del sistema o prompt, un antes/después de pasos y costo estimado, y una lista corta de lo recortado y por qué. Con la táctica de mandarín: el brief comprimido, una línea con el ahorro medido y el original en inglés.
