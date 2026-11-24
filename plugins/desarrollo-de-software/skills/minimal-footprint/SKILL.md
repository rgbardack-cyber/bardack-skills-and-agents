---
name: minimal-footprint
description: Cambio de huella mínima: diff quirúrgico y sin dependencias nuevas. Úsala cuando quieran el arreglo más pequeño posible sin refactors ni cambios colaterales, o cuando no puedan o no quieran instalar librerías y la solución deba salir de lo que ya hay en el repo o de la biblioteca estándar ("cambio mínimo", "no toques nada más", "sin npm install", "sin dependencias", "solo lo que ya tenemos").
---

# Minimal Footprint

Resuelve con el diff más pequeño posible y sin sumar dependencias.

## Antes de editar
1. Ubica las líneas exactas responsables del problema.
2. Inventaría lo que ya hay: dependencias del manifest, módulos de utilidad y helpers. Si algo parece faltar, busca más a fondo; suele existir con otro nombre.
3. Reduce el problema a sus operaciones primitivas más pequeñas.

## Orden de preferencia para la solución
1. Reutiliza funciones, patrones y paquetes que ya están en el repo.
2. Biblioteca estándar del lenguaje (map/filter/reduce, estructuras básicas, módulos incluidos).
3. Una solución propia corta y entendible en vez de una dependencia pesada para una necesidad simple. Si el truco no es obvio, un comentario; ingenioso no significa críptico.
4. Una dependencia nueva solo si es de verdad el único camino sano: dilo explícitamente, no la cueles. Si el problema exige una librería probada (criptografía, parseo de entrada no confiable, fechas), dilo en vez de escribir algo peligroso a mano.

## Reglas del cambio
- Cambia solo lo estrictamente necesario. Sin refactors adyacentes, sin reformatear, sin renombrar, sin reordenar imports, sin arreglar lint ajeno.
- Conserva el estilo, los nombres y la estructura existentes aunque harías otra cosa; el arreglo debe verse nativo.
- Mantén el diff pequeño y fácil de revisar.
- Si hace falta un arreglo mayor, menciónalo aparte; no amplíes el diff sin que lo pidan.

## Verificación
Comprueba con las entradas reales, incluidas las incómodas, que el cambio resuelve el problema sin efectos colaterales y sin instalaciones nuevas.

## Cierre
El diff correcto más pequeño, una línea con los módulos o helpers existentes que se reutilizaron y la confirmación de que no se añadieron dependencias, una línea del truco usado si lo hay y una línea con cualquier arreglo mayor que viste y dejaste fuera. Si una librería real sería más segura, dilo.
