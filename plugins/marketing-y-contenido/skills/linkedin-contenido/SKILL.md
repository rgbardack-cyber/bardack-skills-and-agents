---
name: linkedin-contenido
description: Flujo de contenido para el LinkedIn de {{TU_NOMBRE}}. Propone temas, hace que el agente redactor escriba un borrador y que el agente revisor independiente lo evalúe, y entrega el borrador final para que {{TU_NOMBRE}} lo publique. Úsalo cuando {{TU_NOMBRE}} pida temas, una publicación o un artículo para LinkedIn.
---

# Flujo de contenido de LinkedIn

Coordinas a dos subagentes: `linkedin-redactor` y `linkedin-revisor`. Tú no redactas ni revisas. Nadie publica en LinkedIn: el resultado siempre es un borrador que {{TU_NOMBRE}} publica.

Argumentos opcionales: un tema y un formato (`publicacion` o `articulo`). Sin formato, usa `publicacion`.

## 1. Comprobar el perfil

Lee `linkedin/perfil.md`. Si quedan líneas `POR CONFIRMAR` en Objetivo, Audiencia, Temas o Voz, dile a {{TU_NOMBRE}} cuáles son y pregúntale si sigue con los supuestos o los corrige primero. No lo repitas si ya respondió en esta conversación.

## 2. Elegir el tema

Si {{TU_NOMBRE}} dio un tema, úsalo y pasa al paso 3.

Si no, busca en la web noticias y datos de los últimos 14 días dentro de los temas del perfil, y revisa `linkedin/borradores/` para no repetir. Propón de 3 a 5 temas, cada uno con:

- el ángulo en una frase (la postura, no el titular),
- por qué le importa a la audiencia esta semana,
- la fuente con enlace y su fecha de publicación.

Antes de proponer un tema, abre su fuente y confirma que dice lo que afirmas y de qué fecha es. Si no encuentras nada de los últimos 14 días, dilo y aclara de cuándo es cada dato; no presentes como reciente algo que no lo es.

Busca en inglés y en español, y prioriza temas que le importen a la audiencia internacional del perfil. Un dato local de {{TU_PAIS}} sirve como punto de partida solo si la idea se sostiene para un lector de otro país.

Háblale a {{TU_NOMBRE}} en español. El texto de las publicaciones va en el idioma que indica el perfil (hoy, inglés).

Propón solo ángulos que los datos de la fuente sostengan por sí mismos. Si un ángulo necesita una experiencia de {{TU_NOMBRE}} para sostenerse, márcalo así en la propuesta.

Espera a que {{TU_NOMBRE}} elija.

## 3. Pedir la experiencia de {{TU_NOMBRE}}

Con el tema elegido, pregúntale a {{TU_NOMBRE}} antes de redactar:

- qué opina el autor del tema, en una o dos frases;
- si ha vivido algo relacionado que se pueda contar sin nombres ni cifras confidenciales.

Si {{TU_NOMBRE}} no tiene experiencia que aportar, ajusta el ángulo a lo que los datos demuestran y dile cuál queda. No sigas con una tesis que solo se sostendría con una vivencia que no existe.

## 4. Redactar

Lanza el subagente `linkedin-redactor` con: el tema, el ángulo, el formato, las fuentes verificadas, la opinión y la experiencia de {{TU_NOMBRE}} (o "sin experiencia propia") y la fecha de hoy. Te devuelve la ruta del borrador.

Si el redactor reporta datos pendientes de {{TU_NOMBRE}} (marcadores `[AUTOR: ...]`), pídeselos a {{TU_NOMBRE}} y pásalos al redactor antes de revisar. No resuelvas un marcador por tu cuenta.

## 5. Primera revisión, en frío

Lanza el subagente `linkedin-revisor` pasándole **solo la ruta del borrador**. No le pases el ángulo, las instrucciones que diste al redactor ni ninguna explicación: su valor está en leer el texto en frío.

## 6. Corregir y verificar

- `APROBADO`: pasa al paso 7.
- `CAMBIOS` o `BLOQUEADO`: sigue estos pasos.

1. Si alguna observación solo se resuelve con una experiencia, un dato o una decisión de {{TU_NOMBRE}}, detente y pregúntale antes de gastar una ronda. Dile qué pide el revisor y qué pasa si no lo aporta.
2. Envía al redactor el veredicto completo, con lo que {{TU_NOMBRE}} respondió, y pídele corregir el mismo archivo.
3. Lanza un revisor **nuevo** en modo verificación: pásale la ruta del borrador y la lista numerada de observaciones y bloqueos de la primera revisión, con la frase "Modo verificación". No le pases las explicaciones del redactor.

Máximo dos rondas de corrección, y la segunda también se verifica contra la lista de la primera revisión, no contra una lista nueva. Si tras la segunda no hay `APROBADO`, detente y muestra a {{TU_NOMBRE}} el borrador con las observaciones abiertas.

## 7. Entregar

Muestra a {{TU_NOMBRE}}:

1. El texto final, listo para copiar.
2. El veredicto del revisor y las calificaciones.
3. Las observaciones que el redactor no aplicó y su razón.
4. La ruta del archivo.

Cuando {{TU_NOMBRE}} confirme que lo publicó, cambia `estado: borrador` por `estado: publicado` en el archivo.

## Límites

- No abras LinkedIn ni uses el navegador para publicar, comentar, enviar invitaciones o mensajes.
- No cambies `linkedin/perfil.md` sin que {{TU_NOMBRE}} lo pida.
