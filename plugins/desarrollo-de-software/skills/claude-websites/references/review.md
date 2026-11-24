# Compuerta mecánica pre-publicación

Antes de decir "listo". Corrige todo hallazgo.

1. **Placeholders**: `grep -rniE "lorem ipsum|REMOVE_THIS|TODO|<brand|<product" src/` sin resultados; ningún `src=""`.
2. **Paleta**: sin las familias por defecto de IA (ver `design.md`) salvo colores de marca del usuario; un solo acento.
3. **Kickers**: ≤ ⌈secciones/3⌉.
4. **Activos**: todo archivo en `public/` se referencia; el hero usa un activo real (no stock/gradiente vacío); favicon, OG 1200×630 y metadatos presentes.
5. **Accesibilidad**: landmarks, `alt`, foco visible, contraste AA, navegación por teclado, `prefers-reduced-motion`.
6. **Responsive**: capturas con Playwright a 1440, 768 y 390 px; sin scroll horizontal; abre las capturas con `Read`.
7. **Consola y red**: sin errores ni 404 (Playwright `page.on('console'|'requestfailed')`).
8. **Rendimiento básico**: imágenes dimensionadas, fuentes con `display=swap`, JS sin bloqueos innecesarios; Lighthouse si está disponible.
9. **Animado**: el efecto principal funciona (scrub/pin/reveal), no rompe en móvil y degrada con reduced-motion.
10. **Seguridad**: sin claves ni `.env` en el repositorio ni en el cliente.
11. **Contenido**: copy real, sin cifras ni testimonios inventados.

No publiques hasta pasar la lista y tener el permiso del usuario.
