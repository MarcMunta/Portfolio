const PROJECT_BASE = {
  klime: {
    id: 'klime',
    year: '2026',
    image: 'images/projects/klime-cover.webp',
    imageMode: 'cover',
    tags: ['React 19', 'TypeScript', 'Supabase', 'Product design'],
    demoUrl: 'https://marcmunta.github.io/Klime/',
    isNew: true,
  },
  atlas: {
    id: 'atlas',
    year: '2026',
    image: 'images/projects/atlas-logo.png',
    imageMode: 'contain',
    tags: ['React Native', 'Expo', 'TypeScript', 'IndexedDB'],
    demoUrl: 'https://marcmunta.github.io/Atlas/',
  },
  vortex: {
    id: 'vortex',
    year: '2026',
    image: 'images/projects/vortex-cover.png',
    imageMode: 'cover',
    tags: ['Python', 'React', 'RAG', 'Local AI'],
    repoLinks: [
      { label: 'GitHub', url: 'https://github.com/MarcMunta/Vortex' },
    ],
    pdfPath: 'docs/vortex-ia-local-marc-muntane.pdf',
  },
  fichestu: {
    id: 'fichestu',
    year: '2026',
    image: 'images/projects/fichestu-cover.svg',
    imageMode: 'cover',
    tags: ['Kotlin', 'Spring Boot', 'WebSocket', 'JPA'],
    repoLinks: [
      { label: 'Android', url: 'https://github.com/MarcMunta/Fichestu-Frontend' },
      { label: 'Backend', url: 'https://github.com/MarcMunta/Fichestu-Backend' },
    ],
    pdfPath: 'docs/fichestu-doc-mpj-v2.pdf',
  },
};

const PROJECT_ORDER = ['klime', 'atlas', 'vortex', 'fichestu'];

const PROJECT_COPY = {
  es: {
    klime: {
      title: 'Klime',
      category: 'Producto · e-commerce',
      status: 'Prototipo publicado',
      role: 'Diseño de producto, frontend y arquitectura de lanzamiento',
      summary:
        'Storefront editorial para una marca de básicos urbanos, construido como producto usable y preparado para evolucionar a comercio real.',
      highlights: [
        'Catálogo de 10 prendas con variantes, talla, favoritos, cesta y checkout demo persistentes.',
        'ES, CA y EN; tema claro/oscuro, cuenta Supabase preparada y comunidad de producto.',
        'Publicado en GitHub Pages con typecheck, build y flujo responsive validados.',
      ],
      imageAlt: 'Portada editorial de la tienda Klime',
    },
    atlas: {
      title: 'ATLAS',
      category: 'Producto · deporte',
      status: 'PWA publicada',
      role: 'Producto, frontend y modelo de datos local-first',
      summary:
        'Aplicación de planificación y seguimiento de entrenamiento que reúne sesiones, progreso y recuperación sin depender de una cuenta.',
      highlights: [
        'Plan mensual, semanal y diario con ejercicios, series, objetivos y registros corporales.',
        'Persistencia offline con IndexedDB o AsyncStorage y experiencia instalable como PWA.',
        'Base compartida entre web y móvil con Expo, React Native Web y TypeScript.',
      ],
      imageAlt: 'Identidad visual de la aplicación ATLAS',
    },
    vortex: {
      title: 'Vortex',
      category: 'IA local · RAG',
      status: 'Código público',
      role: 'Arquitectura local, backend Python e interfaz React',
      summary:
        'Sistema de IA local orientado a soporte técnico: recupera contexto propio, limita respuestas inseguras y escala cuando debe intervenir una persona.',
      highlights: [
        'Pipeline separado para limpieza, recuperación semántica, prompting, validación y escalado.',
        'Memoria y ejecución locales, con permisos y estado visibles desde la interfaz.',
        'Casos automatizados para FAQ, contexto ausente, errores y consultas complejas.',
      ],
      imageAlt: 'Interfaz del proyecto de IA local Vortex',
    },
    fichestu: {
      title: 'Fichestu',
      category: 'Mobile · backend Java',
      status: 'Proyecto final DAM',
      role: 'Cliente Android y backend Spring Boot',
      summary:
        'Aplicación Android nativa conectada a un backend modular para perfiles, mercado, minijuegos y comunicación en tiempo real.',
      highlights: [
        'Kotlin y Jetpack Compose en el cliente; Spring Boot y API REST en servidor.',
        'Autenticación JWT/Google, WebSocket, JPA, Flyway y persistencia MySQL/Supabase.',
        'Repositorios separados para cliente y backend, con documentación técnica del sistema.',
      ],
      imageAlt: 'Portada del proyecto móvil Fichestu',
    },
  },
  ca: {
    klime: {
      title: 'Klime',
      category: 'Producte · e-commerce',
      status: 'Prototip publicat',
      role: 'Disseny de producte, frontend i arquitectura de llançament',
      summary:
        'Storefront editorial per a una marca de bàsics urbans, construït com un producte usable i preparat per evolucionar a comerç real.',
      highlights: [
        'Catàleg de 10 peces amb variants, talla, favorits, cistella i checkout demo persistents.',
        'ES, CA i EN; tema clar/fosc, compte Supabase preparat i comunitat de producte.',
        'Publicat a GitHub Pages amb typecheck, build i flux responsive validats.',
      ],
      imageAlt: 'Portada editorial de la botiga Klime',
    },
    atlas: {
      title: 'ATLAS',
      category: 'Producte · esport',
      status: 'PWA publicada',
      role: 'Producte, frontend i model de dades local-first',
      summary:
        'Aplicació de planificació i seguiment d’entrenament que reuneix sessions, progrés i recuperació sense dependre d’un compte.',
      highlights: [
        'Pla mensual, setmanal i diari amb exercicis, sèries, objectius i registres corporals.',
        'Persistència offline amb IndexedDB o AsyncStorage i experiència instal·lable com a PWA.',
        'Base compartida entre web i mòbil amb Expo, React Native Web i TypeScript.',
      ],
      imageAlt: 'Identitat visual de l’aplicació ATLAS',
    },
    vortex: {
      title: 'Vortex',
      category: 'IA local · RAG',
      status: 'Codi públic',
      role: 'Arquitectura local, backend Python i interfície React',
      summary:
        'Sistema d’IA local orientat a suport tècnic: recupera context propi, limita respostes insegures i escala quan ha d’intervenir una persona.',
      highlights: [
        'Pipeline separat per a neteja, recuperació semàntica, prompting, validació i escalat.',
        'Memòria i execució locals, amb permisos i estat visibles des de la interfície.',
        'Casos automatitzats per a FAQ, context absent, errors i consultes complexes.',
      ],
      imageAlt: 'Interfície del projecte d’IA local Vortex',
    },
    fichestu: {
      title: 'Fichestu',
      category: 'Mòbil · backend Java',
      status: 'Projecte final DAM',
      role: 'Client Android i backend Spring Boot',
      summary:
        'Aplicació Android nativa connectada a un backend modular per a perfils, mercat, minijocs i comunicació en temps real.',
      highlights: [
        'Kotlin i Jetpack Compose al client; Spring Boot i API REST al servidor.',
        'Autenticació JWT/Google, WebSocket, JPA, Flyway i persistència MySQL/Supabase.',
        'Repositoris separats per a client i backend, amb documentació tècnica del sistema.',
      ],
      imageAlt: 'Portada del projecte mòbil Fichestu',
    },
  },
  en: {
    klime: {
      title: 'Klime',
      category: 'Product · e-commerce',
      status: 'Published prototype',
      role: 'Product design, frontend, and launch architecture',
      summary:
        'An editorial storefront for an urban essentials brand, built as a usable product and ready to evolve into real commerce.',
      highlights: [
        '10-product catalogue with variants, sizing, favourites, cart, and persistent demo checkout.',
        'ES, CA, and EN; light/dark theme, Supabase account foundation, and product community.',
        'Published on GitHub Pages with typecheck, build, and responsive flow validation.',
      ],
      imageAlt: 'Editorial cover of the Klime storefront',
    },
    atlas: {
      title: 'ATLAS',
      category: 'Product · training',
      status: 'Published PWA',
      role: 'Product, frontend, and local-first data model',
      summary:
        'A training planning and tracking app that brings sessions, progress, and recovery together without requiring an account.',
      highlights: [
        'Monthly, weekly, and daily planning with exercises, sets, goals, and body records.',
        'Offline persistence through IndexedDB or AsyncStorage and an installable PWA experience.',
        'Shared web and mobile foundation with Expo, React Native Web, and TypeScript.',
      ],
      imageAlt: 'ATLAS application visual identity',
    },
    vortex: {
      title: 'Vortex',
      category: 'Local AI · RAG',
      status: 'Public code',
      role: 'Local architecture, Python backend, and React interface',
      summary:
        'A local AI system for technical support: it retrieves owned context, blocks unsafe answers, and escalates when a person should take over.',
      highlights: [
        'Separate pipeline for cleaning, semantic retrieval, prompting, validation, and escalation.',
        'Local memory and execution, with permissions and system state visible in the interface.',
        'Automated cases for FAQs, missing context, errors, and complex requests.',
      ],
      imageAlt: 'Vortex local AI project interface',
    },
    fichestu: {
      title: 'Fichestu',
      category: 'Mobile · Java backend',
      status: 'DAM final project',
      role: 'Android client and Spring Boot backend',
      summary:
        'A native Android app connected to a modular backend for profiles, a marketplace, minigames, and realtime communication.',
      highlights: [
        'Kotlin and Jetpack Compose on the client; Spring Boot and REST API on the server.',
        'JWT/Google auth, WebSocket, JPA, Flyway, and MySQL/Supabase persistence.',
        'Separate client and backend repositories with technical system documentation.',
      ],
      imageAlt: 'Fichestu mobile project cover',
    },
  },
};

export function buildLocalizedProjects(language) {
  const copy = PROJECT_COPY[language] ?? PROJECT_COPY.es;

  return PROJECT_ORDER.map((key) => ({
    ...PROJECT_BASE[key],
    ...copy[key],
  }));
}
