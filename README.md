# Portfolio — Marc Muntané Clarà

Portfolio trilingüe orientado a mostrar trabajo verificable con una lectura corta.

## Trabajo seleccionado

- **Klime:** storefront editorial React/TypeScript con catálogo, variantes, cesta y base Supabase.
- **ATLAS:** PWA local-first de planificación y seguimiento deportivo.
- **Vortex:** IA local con RAG, validación de respuestas y escalado humano.
- **Fichestu:** cliente Android Kotlin/Compose y backend Spring Boot.

Cada caso resume problema, aportación, evidencia y enlaces útiles. El contenido está disponible en español, catalán e inglés.

## Stack del portfolio

- Next.js 15 y React 19.
- Tailwind CSS 3 y CSS propio.
- GSAP para la entrada editorial, las revelaciones por scroll y el parallax orbital.
- Retrato real, fondo espacial progresivo y cursor burbuja limitado a punteros precisos.
- Export estático para GitHub Pages.

## Desarrollo

```powershell
npm.cmd ci
npm.cmd run lint
npm.cmd run build
npm.cmd run dev
```

La app local abre en `http://localhost:3000`. La versión publicada vive en <https://marcmunta.github.io/Portfolio/>.

## Contenido estructurado

- `public/llms.txt`: resumen breve para modelos de lenguaje.
- `public/candidate-profile.json`: perfil y proyectos en JSON.
- `src/app/layout.tsx`: metadatos y JSON-LD.

## Contacto

- [GitHub](https://github.com/MarcMunta)
- [LinkedIn](https://www.linkedin.com/in/marc-muntan%C3%A9-clar%C3%A0-ab6a0a276/)
- [Email](mailto:marcmclara@gmail.com)
