# Brandbook (PPTX editable + PDF)

Créalo **solo** cuando logo, paleta y tipografía estén aprobados por separado. No pidas una aprobación adicional del kit.

## Entradas
Del `state.json`: logo SVG aprobado, paleta, tipografías. Del usuario: resumen del concepto de marca. Opcional: mockups aprobados. **No inventes** misión, valores, claims, variantes, precios, estadísticas ni historia de marca.

## Estructura recomendada (16:9)
1. Portada (logo, nombre, versión/fecha)
2. Concepto (resumen del usuario)
3. Logo: marca principal, variantes (positivo/negativo/mono), zona de respeto, tamaño mínimo
4. Usos incorrectos (lista visual: estirar, rotar, recolorear, sombras, bajo contraste)
5. Paleta: swatches con nombre, HEX, RGB, CMYK aprox. (indica que es aproximado), roles y proporciones de uso
6. Contraste/accesibilidad: pares válidos con su ratio
7. Tipografía: display y body, jerarquía (H1/H2/cuerpo/leyenda) con tamaños e interlineado
8. Retícula y espaciado
9. Aplicaciones (mockups aprobados)
10. Contacto/recursos (solo si el usuario los da)

## Construcción
- **PPTX**: PptxGenJS (`npm i pptxgenjs`). Maestro con fondo, número de página y logo pequeño. Texto y formas editables; el logo entra como SVG/PNG de alta resolución. Fuentes: usa las aprobadas; si no son estándar, avisa al usuario de instalarlas.
- **PDF**: genera un HTML paginado (una sección por diapositiva, `@page { size: 1280px 720px }`) y renderízalo con Playwright `page.pdf()`; o convierte el PPTX con LibreOffice si está.
- Revisa cada página con `Read` (miniaturas) antes de entregar.

## Respuesta final (estricta)
1. Ruta del PPTX
2. Ruta del PDF
3. Aviso de instalación de fuentes (si aplica)
Nada más.
