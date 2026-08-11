# Portfolio — Marc Muntané Clarà

Portfolio trilingüe orientado a mostrar trabajo verificable con una lectura corta.

## Trabajo seleccionado

- **Klime:** storefront editorial React/TypeScript con catálogo, variantes, cesta y base Supabase.
- **ATLAS:** PWA local-first de planificación y seguimiento deportivo.
- **Fichestu:** cliente Android Kotlin/Compose y backend Spring Boot.

Cada caso resume aportación, evidencia y enlaces útiles en una composición propia. El contenido está disponible en español, catalán e inglés.

## Stack del portfolio

- Next.js 15 y React 19.
- Sistema visual propio “Product Proof Lab” en CSS: lámina de identidad, índice de lectura sincronizado y tres especímenes de proyecto no repetidos.
- Barlow Condensed y Manrope mediante `next/font`.
- GSAP para la entrada editorial, las aperturas breves de proyecto, el índice activo y el parallax orbital.
- Retrato real, fondo espacial progresivo y cursor burbuja limitado a punteros precisos.
- Matriz visual de capacidades, trayectoria asimétrica y expediente académico mineral, con información breve y verificable.
- CV dual: los tres diseños Canva originales para lectura humana y una versión ATS de una columna para procesos de selección.
- Selector accesible, previsualizaciones reales y packs trilingües ES/CA/EN sin alterar los colores del documento.
- Export estático para GitHub Pages.

## Desarrollo

```powershell
npm.cmd ci
npm.cmd run lint
npm.cmd run cv:build
npm.cmd run cv:verify
npm.cmd run build
npm.cmd run dev
```

La app local abre en `http://localhost:3000`. La versión publicada vive en <https://marcmunta.github.io/Portfolio/>.

La generación del CV usa Python. Los tres Canva de `E:\Cole\Currículum` son las fuentes maestras de la edición visual y nunca se sobrescriben; `cv:build` los copia, genera la edición ATS, crea ambos packs trilingües y actualiza las previsualizaciones. `cv:verify` comprueba A4, fidelidad a los Canva, lectura ATS, enlaces y sincronización pública.

## Contenido estructurado

- `public/llms.txt`: resumen breve para modelos de lenguaje.
- `public/candidate-profile.json`: perfil y proyectos en JSON.
- `src/app/layout.tsx`: metadatos y JSON-LD.

## Contacto

- [GitHub](https://github.com/MarcMunta)
- [LinkedIn](https://www.linkedin.com/in/marc-muntan%C3%A9-clar%C3%A0-ab6a0a276/)
- [Email](mailto:marcmclara@gmail.com)
