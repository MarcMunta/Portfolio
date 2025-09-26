# Portfolio — Marc Muntané Clarà

Portfolio profesional desarrollado como proyecto final durante mi formación en STUCOM (Barcelona). Plataforma integral que presenta proyectos técnicos, demuestra competencias en desarrollo web moderno y garantiza rendimiento óptimo con accesibilidad completa.

## Características principales

- 🎯 **Arquitectura completa**: Landing page, sistema de proyectos con vistas detalladas, perfil profesional, área experimental y formulario de contacto funcional.
- 🧩 **Animaciones avanzadas**: Efectos de texto progresivo, interacciones táctiles con tarjetas, fondos dinámicos y microinteracciones responsivas.
- 🌀 **Scroll optimizado** que respeta configuraciones de accesibilidad y preferencias de motion.
- 🎬 **Transiciones profesionales** en todas las secciones para navegación fluida y experiencia de usuario coherente.
- 🎨 **Componentes accesibles** siguiendo estándares WCAG para botones, modales, formularios y navegación.
- 🧾 **Sistema de contacto completo** con validación en tiempo real y envío funcional por email.
- 🛰️ **Playground técnico** con efectos 3D optimizados para dispositivos compatibles.
- 🌗 **Sistema de temas dual** con detección automática y control manual de modo oscuro/claro.

## Stack tecnológico

- **Next.js 15** - Framework React con App Router para aplicaciones web de alto rendimiento
- **Tailwind CSS** - Sistema de diseño utility-first con configuración personalizada
- **Framer Motion** - Librería de animaciones declarativas con soporte completo para gestos
- **Lenis** - Implementación de scroll suave con optimización de rendimiento
- **shadcn/ui** - Componentes accesibles basados en Radix UI primitives
- **React Hook Form + Zod** - Gestión de formularios con validación robusta y type-safe
- **React Three Fiber** - Integración 3D ligera para elementos interactivos avanzados

## Arquitectura del proyecto

```
src/
  app/
    (routes)/           # Páginas principales con App Router
      layout.tsx        # Layout global con navegación y progress bar
      page.tsx          # Landing page con todas las secciones
      about/            # Perfil profesional detallado
      projects/         # Sistema de proyectos con filtrado y vistas individuales
      playground/       # Área experimental para nuevas tecnologías
      contact/          # Sistema de contacto con validación
  components/
    bits/               # Componentes de efectos visuales avanzados
    motion/             # Sistema de animaciones y transiciones
    layout/             # Componentes de estructura (Header, Footer, etc.)
    sections/           # Secciones modulares de la landing page
    projects/           # Componentes especializados en gestión de proyectos
    forms/              # Sistema de formularios con validación
  lib/
    data.ts             # Base de datos de contenido y proyectos
    utils.ts            # Utilidades y helpers del sistema
```

## Scripts

```bash
npm run dev     # Inicia el servidor de desarrollo en http://localhost:3000
npm run lint    # Ejecuta ESLint con la configuración de Next.js
npm run build   # Genera la build de producción (útil para validar tipados)
```

## Cómo añadir proyectos nuevos

1. Ve a `src/lib/data.ts` y añade tu proyecto al array:
   - Incluye nombre, descripción, tecnologías usadas, enlaces, etc.
   - Los primeros 3 proyectos aparecen destacados en la home
2. Sube las imágenes a `public/images/` (JPG, PNG o SVG)
3. Si usas una categoría nueva, actualízala también en `src/components/projects/projects-grid.tsx`

## Para personalizar rápido

- **Datos personales**: Cambia nombre, bio y redes sociales en `src/lib/data.ts`
- **Colores**: Ajusta la paleta en `src/app/globals.css`
- **Componentes**: Modifica botones y estilos en `src/components/ui`
- **Animaciones**: Todos los efectos se pueden ajustar con props

## Pensado para todos

- **Respeta las preferencias**: Si tienes activado "reducir movimiento", las animaciones se simplifican
- **Rinde bien**: Las animaciones solo mueven y cambian opacidad, nada que ralentice
- **Imágenes optimizadas**: Todo via Next.js para que cargue rápido
- **Funciona sin JavaScript**: Los efectos 3D son opcionales y tienen fallback

## Despliegue automático

Este portfolio se despliega automáticamente en GitHub Pages cada vez que se hace push a la rama `main`.

### 🌐 Sitio web en vivo
**https://marcmunta.github.io/Portfolio/**

### 🚀 Proceso de despliegue
- Cada push a `main` activa GitHub Actions
- Build automático con Next.js exportación estática
- Despliegue directo a GitHub Pages
- Sin configuración manual necesaria

## Desarrollo personalizado

Portfolio desarrollado completamente desde cero utilizando las mejores prácticas de desarrollo web moderno. Cada componente, animación y funcionalidad ha sido implementada de forma personalizada para crear una experiencia única y profesional.
