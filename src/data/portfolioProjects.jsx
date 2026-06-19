import React from 'react';
import {
  Briefcase,
  Code2,
  Database,
  Gamepad2,
  Layers,
  Radio,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Terminal,
} from 'lucide-react';

const PORTFOLIO_STACK = [
  { name: 'Java', color: '#ED8B00' },
  { name: 'Spring Boot', color: '#6DB33F' },
  { name: 'REST APIs', color: '#38BDF8' },
  { name: 'MySQL', color: '#4479A1' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#FFFFFF' },
  { name: 'Tailwind CSS', color: '#38BDF8' },
  { name: 'Git', color: '#F05032' },
  { name: 'GitHub Pages', color: '#FFFFFF' },
];

const LOCALIZED_STACK_ICONS = {
  ca: {
    gm: [
      { label: 'Formularis i login Angular', icon: <Layers size={14} /> },
      { label: 'Llistat i interfície', icon: <Smartphone size={14} /> },
      { label: 'Endpoints PHP', icon: <Terminal size={14} /> },
      { label: 'Auth + localStorage', icon: <Briefcase size={14} /> },
      { label: 'Integració API', icon: <Rocket size={14} /> },
      { label: 'Flux front/back', icon: <Code2 size={14} /> },
    ],
    fichestu: [
      { label: 'Android Kotlin + Compose', icon: <Smartphone size={14} /> },
      { label: 'Spring Boot REST API', icon: <Server size={14} /> },
      { label: 'JWT + Google Sign-In', icon: <ShieldCheck size={14} /> },
      { label: 'WebSocket realtime', icon: <Radio size={14} /> },
      { label: 'JPA + Flyway + DB', icon: <Database size={14} /> },
      { label: 'Minijocs i lògica', icon: <Gamepad2 size={14} /> },
    ],
    acceso: [
      { label: 'Java 17 + Maven WAR', icon: <Server size={14} /> },
      { label: 'JSP + Servlets Tomcat', icon: <Layers size={14} /> },
      { label: 'Hibernate/JPA + MySQL', icon: <Database size={14} /> },
      { label: 'Comandes JSON a MongoDB', icon: <Terminal size={14} /> },
      { label: 'Usuaris amb ObjectDB', icon: <ShieldCheck size={14} /> },
      { label: '48 tests automatitzats', icon: <Code2 size={14} /> },
    ],
  },
  es: {
    gm: [
      { label: 'Formularios y login Angular', icon: <Layers size={14} /> },
      { label: 'Listado e interfaz', icon: <Smartphone size={14} /> },
      { label: 'Endpoints PHP', icon: <Terminal size={14} /> },
      { label: 'Auth + localStorage', icon: <Briefcase size={14} /> },
      { label: 'Integración API', icon: <Rocket size={14} /> },
      { label: 'Flujo front/back', icon: <Code2 size={14} /> },
    ],
    fichestu: [
      { label: 'Android Kotlin + Compose', icon: <Smartphone size={14} /> },
      { label: 'Spring Boot REST API', icon: <Server size={14} /> },
      { label: 'JWT + Google Sign-In', icon: <ShieldCheck size={14} /> },
      { label: 'WebSocket realtime', icon: <Radio size={14} /> },
      { label: 'JPA + Flyway + DB', icon: <Database size={14} /> },
      { label: 'Minijuegos y lógica', icon: <Gamepad2 size={14} /> },
    ],
    acceso: [
      { label: 'Java 17 + Maven WAR', icon: <Server size={14} /> },
      { label: 'JSP + Servlets Tomcat', icon: <Layers size={14} /> },
      { label: 'Hibernate/JPA + MySQL', icon: <Database size={14} /> },
      { label: 'Pedidos JSON en MongoDB', icon: <Terminal size={14} /> },
      { label: 'Usuarios con ObjectDB', icon: <ShieldCheck size={14} /> },
      { label: '48 tests automatizados', icon: <Code2 size={14} /> },
    ],
  },
  en: {
    gm: [
      { label: 'Angular forms and login', icon: <Layers size={14} /> },
      { label: 'List view and interface', icon: <Smartphone size={14} /> },
      { label: 'PHP endpoints', icon: <Terminal size={14} /> },
      { label: 'Auth + localStorage', icon: <Briefcase size={14} /> },
      { label: 'API integration', icon: <Rocket size={14} /> },
      { label: 'Front/back flow', icon: <Code2 size={14} /> },
    ],
    fichestu: [
      { label: 'Android Kotlin + Compose', icon: <Smartphone size={14} /> },
      { label: 'Spring Boot REST API', icon: <Server size={14} /> },
      { label: 'JWT + Google Sign-In', icon: <ShieldCheck size={14} /> },
      { label: 'Realtime WebSocket', icon: <Radio size={14} /> },
      { label: 'JPA + Flyway + DB', icon: <Database size={14} /> },
      { label: 'Minigames and logic', icon: <Gamepad2 size={14} /> },
    ],
    acceso: [
      { label: 'Java 17 + Maven WAR', icon: <Server size={14} /> },
      { label: 'JSP + Tomcat servlets', icon: <Layers size={14} /> },
      { label: 'Hibernate/JPA + MySQL', icon: <Database size={14} /> },
      { label: 'JSON orders in MongoDB', icon: <Terminal size={14} /> },
      { label: 'Users with ObjectDB', icon: <ShieldCheck size={14} /> },
      { label: '48 automated tests', icon: <Code2 size={14} /> },
    ],
  },
};

const PROJECT_BASE = {
  fichestu: {
    id: 1,
    image: 'images/projects/fichestu-cover.svg',
    tags: ['Java', 'Spring Boot', 'Backend', 'REST API', 'JWT', 'WebSocket', 'JPA', 'MySQL', 'Full-Stack'],
    year: '2026',
    compactTitle: true,
    pdfPath: 'docs/fichestu-doc-mpj-v2.pdf',
    repoLinks: [
      { label: 'Frontend', url: 'https://github.com/MarcMunta/Fichestu-Frontend' },
      { label: 'Backend', url: 'https://github.com/MarcMunta/Fichestu-Backend' },
    ],
  },
  accesoDatosTienda: {
    id: 2,
    image: 'images/projects/acceso-datos-tienda-cover.png',
    tags: ['Java 17', 'Backend', 'JSP', 'Servlets', 'Hibernate/JPA', 'MySQL', 'MongoDB', 'Maven', 'JUnit'],
    year: '2026',
    repoUrl: 'https://github.com/MarcMunta/Acceso_Datos_Tienda',
    compactTitle: true,
  },
  daw: {
    id: 3,
    image: 'images/projects/curriculum-wireframes.jpg',
    tags: ['Full-Stack', 'Angular', 'Node.js', 'Express', 'MySQL', 'API'],
    year: '2025',
    compactTitle: true,
    pdfPath: 'docs/CineFlix_BryanJoya_MarcMuntane_PolCarvajal.pdf',
    repoLinks: [
      { label: 'Frontend', url: 'https://github.com/MarcMunta/EnfermeriaFrontend' },
      { label: 'Backend', url: 'https://github.com/MarcMunta/enfermeria_back_end' },
    ],
  },
  gm: {
    id: 4,
    image: 'images/projects/curriculum-cover.jpg',
    tags: ['Full-Stack', 'Angular', 'PHP', 'API', 'Auth'],
    year: '2024',
    pdfPath: 'docs/pr08-front-end-back-end.pdf',
  },
  portfolio: {
    id: 5,
    image: 'images/projects/firewall-cover.jpg',
    tags: ['Frontend', 'React', 'Next.js', 'Tailwind CSS', 'SEO'],
    year: '2026',
    url: 'https://github.com/MarcMunta/Portfolio',
    ctaIcon: 'github',
    fullStack: PORTFOLIO_STACK,
  },
  retos: {
    id: 6,
    image: 'images/projects/sostenibilidad-actions.jpg',
    tags: ['Frontend', 'HTML', 'CSS', 'JavaScript', 'Responsive'],
    year: '2026',
    url: 'https://marcmunta.github.io/Retos-Sociales/',
    repoUrl: 'https://github.com/MarcMunta/Retos-Sociales',
  },
  sostenibilidad: {
    id: 7,
    image: 'images/projects/sostenibilidad-cover.jpg',
    tags: ['Frontend', 'HTML', 'CSS', 'JavaScript'],
    year: '2025',
    url: 'https://marcmunta.github.io/Sostenibilidad_v1/',
    repoUrl: 'https://github.com/MarcMunta/Sostenibilidad_v1',
    compactTitle: true,
  },
  vortex: {
    id: 8,
    image: 'images/projects/vortex-cover.png',
    tags: ['AI', 'React', 'Python', 'Local LLM', 'RAG', 'Agent'],
    year: '2026',
    repoUrl: 'https://github.com/MarcMunta/Vortex',
    pdfPath: 'docs/vortex-ia-local-marc-muntane.pdf',
  },
};

const PROJECT_ORDER = [
  'fichestu',
  'accesoDatosTienda',
  'daw',
  'gm',
  'portfolio',
  'retos',
  'sostenibilidad',
  'vortex',
];

const PROJECT_COPY = {
  ca: {
    fichestu: {
      title: 'Fichestu',
      category: 'Spring Boot · Full-Stack',
      duration: 'Projecte final DAM · app Android nativa + backend Spring Boot',
      summary:
        'Aplicació full-stack amb app Android en Kotlin + Jetpack Compose connectada a un backend Spring Boot. Inclou autenticació, realtime, persistència i desplegament.',
      backendResponsibilities:
        'API REST amb Spring Boot, autenticació JWT/Google Sign-In, WebSocket, serveis, persistència JPA/Flyway i base de dades MySQL/Supabase.',
      frontendResponsibilities:
        'App Android nativa amb Kotlin i Jetpack Compose, pantalles de perfil, mercat, minijocs i notificacions.',
      dataUsage: 'MySQL/Supabase, Flyway, JPA, endpoints REST i comunicació realtime.',
      learned:
        'Integració real entre client mòbil, backend, autenticació, dades persistents i desplegament.',
      stackIcons: LOCALIZED_STACK_ICONS.ca.fichestu,
    },
    accesoDatosTienda: {
      title: 'Acceso Datos Tienda',
      category: 'Java Backend · E-commerce',
      duration: 'Projecte acadèmic refactoritzat · Java 17 + persistència multi-base de dades',
      summary:
        'Projecte acadèmic refactoritzat per al portfolio, centrat en lògica backend, estructura mantenible, accés a dades i bones pràctiques Java.',
      backendResponsibilities:
        'Servlets, repositoris/DAO, flux de compra, stock atòmic, login, backoffice, persistència Hibernate/JPA i tests automatitzats.',
      frontendResponsibilities:
        'Vistes JSP per a catàleg, carret, login i administració bàsica.',
      dataUsage: 'MySQL, MongoDB, ObjectDB, Hibernate/JPA i operacions CRUD.',
      learned:
        'Persistència amb diverses bases de dades, separació de responsabilitats i proves sobre lògica crítica.',
      stackIcons: LOCALIZED_STACK_ICONS.ca.acceso,
    },
    daw: {
      title: 'Projecte Final DAW - Plataforma d’Infermeria',
      category: 'Full-Stack acadèmic',
      duration: 'Projecte anual de final de curs DAW',
      summary:
        'Projecte full-stack desenvolupat durant el curs amb frontend i backend separats, documentació tècnica en PDF i repositoris independents.',
      backendResponsibilities:
        'Backend Node.js/Express, endpoints, connexió amb MySQL i estructura separada del frontend.',
      frontendResponsibilities:
        'Frontend Angular, pantalles, formularis, navegació i integració amb API.',
      dataUsage: 'MySQL, API pròpia i documentació del flux de dades.',
      learned:
        'Separació frontend/backend, treball en equip, documentació i cicle complet d’entrega.',
    },
    gm: {
      title: 'Projecte GM',
      category: 'Full-Stack acadèmic',
      duration: 'Pràctica tècnica completa',
      summary:
        'Projecte integrat amb frontend en Angular, backend en PHP amb endpoints, autenticació amb localStorage i integració frontend-backend sobre API.',
      backendResponsibilities:
        'Endpoints PHP, control de login i respostes consumides pel frontend.',
      frontendResponsibilities:
        'Angular amb formularis, llistat, login i consum d’API.',
      dataUsage: 'API pròpia, autenticació bàsica i emmagatzematge local.',
      learned:
        'Flux complet entre interfície, API i autenticació bàsica.',
      stackIcons: LOCALIZED_STACK_ICONS.ca.gm,
    },
    portfolio: {
      title: 'Portfolio Interactiu',
      category: 'Frontend tècnic',
      duration: 'Projecte personal · actualitzat el 2026',
      summary:
        'Portfolio construït amb Next.js, React i Tailwind. Manté una experiència visual premium i comunica els pilars Java, UI/UX i IA & Big Data.',
      backendResponsibilities:
        'Sense backend propi en aquest repositori; funciona com a plataforma de presentació tècnica.',
      frontendResponsibilities:
        'Components React, animacions GSAP, responsive, SEO, dades separades i desplegament a GitHub Pages.',
      dataUsage: 'Contingut modular en fitxers de dades i assets estàtics.',
      learned:
        'Arquitectura frontend mantenible, refactor de contingut i comunicació professional.',
    },
    retos: {
      title: 'Reptes Socials',
      category: 'Frontend acadèmic',
      duration: 'Projecte acadèmic · entrega web d’una setmana',
      summary:
        'Entrega acadèmica centrada en desenvolupament web, claredat de contingut, estructura responsive i publicació a GitHub Pages.',
      backendResponsibilities: 'No inclou backend propi.',
      frontendResponsibilities: 'HTML, CSS, JavaScript, responsive i estructura de contingut.',
      dataUsage: 'Dades estàtiques del lloc.',
      learned:
        'Entrega ràpida, organització visual i publicació web.',
    },
    sostenibilidad: {
      title: 'Sostenibilitat',
      category: 'Frontend acadèmic',
      duration: 'Completat en 1 setmana · treball del grau superior',
      summary:
        'Landing informativa sobre hàbits sostenibles, desenvolupada en una setmana amb focus en claredat, responsive i accessibilitat base.',
      backendResponsibilities: 'No inclou backend propi.',
      frontendResponsibilities: 'HTML, CSS, JavaScript, maquetació responsive i contingut accessible.',
      dataUsage: 'Dades estàtiques del lloc.',
      learned:
        'Planificació d’entrega curta, responsive i comunicació visual clara.',
    },
    vortex: {
      title: 'Vortex',
      category: 'IA local complementària',
      duration: 'Projecte personal d’IA local amb memòria tècnica en PDF',
      summary:
        'Projecte d’IA local amb frontend React, API Python, RAG, memòria local, permisos visibles i mode agent. Complementa el perfil IA & Big Data.',
      backendResponsibilities:
        'API Python, endpoints per a interacció local i gestió de context.',
      frontendResponsibilities:
        'Frontend React per interactuar amb l’agent i visualitzar estats.',
      dataUsage: 'RAG, memòria local i permisos visibles.',
      learned:
        'Ús d’IA com a suport productiu, integració tècnica i documentació de sistemes locals.',
    },
  },
  es: {
    fichestu: {
      title: 'Fichestu',
      category: 'Spring Boot · Full-Stack',
      duration: 'Proyecto final DAM · app Android nativa + backend Spring Boot',
      summary:
        'Aplicación full-stack con app Android en Kotlin + Jetpack Compose conectada a un backend Spring Boot. Incluye autenticación, realtime, persistencia y despliegue.',
      backendResponsibilities:
        'API REST con Spring Boot, autenticación JWT/Google Sign-In, WebSocket, servicios, persistencia JPA/Flyway y base de datos MySQL/Supabase.',
      frontendResponsibilities:
        'App Android nativa con Kotlin y Jetpack Compose, pantallas de perfil, mercado, minijuegos y notificaciones.',
      dataUsage: 'MySQL/Supabase, Flyway, JPA, endpoints REST y comunicación realtime.',
      learned:
        'Integración real entre cliente móvil, backend, autenticación, datos persistentes y despliegue.',
      stackIcons: LOCALIZED_STACK_ICONS.es.fichestu,
    },
    accesoDatosTienda: {
      title: 'Acceso Datos Tienda',
      category: 'Java Backend · E-commerce',
      duration: 'Proyecto académico refactorizado · Java 17 + persistencia multi-base de datos',
      summary:
        'Proyecto académico refactorizado para portfolio, centrado en lógica backend, estructura mantenible, acceso a datos y buenas prácticas Java.',
      backendResponsibilities:
        'Servlets, repositorios/DAO, flujo de compra, stock atómico, login, backoffice, persistencia Hibernate/JPA y tests automatizados.',
      frontendResponsibilities:
        'Vistas JSP para catálogo, carrito, login y administración básica.',
      dataUsage: 'MySQL, MongoDB, ObjectDB, Hibernate/JPA y operaciones CRUD.',
      learned:
        'Persistencia con varias bases de datos, separación de responsabilidades y pruebas sobre lógica crítica.',
      stackIcons: LOCALIZED_STACK_ICONS.es.acceso,
    },
    daw: {
      title: 'Proyecto Final DAW - Plataforma de Enfermería',
      category: 'Full-Stack académico',
      duration: 'Proyecto anual de final de curso DAW',
      summary:
        'Proyecto full-stack desarrollado durante el curso con frontend y backend separados, documentación técnica en PDF y repositorios independientes.',
      backendResponsibilities:
        'Backend Node.js/Express, endpoints, conexión con MySQL y estructura separada del frontend.',
      frontendResponsibilities:
        'Frontend Angular, pantallas, formularios, navegación e integración con API.',
      dataUsage: 'MySQL, API propia y documentación del flujo de datos.',
      learned:
        'Separación frontend/backend, trabajo en equipo, documentación y ciclo completo de entrega.',
    },
    gm: {
      title: 'Proyecto GM',
      category: 'Full-Stack académico',
      duration: 'Práctica técnica completa',
      summary:
        'Proyecto integrado con frontend en Angular, backend en PHP con endpoints, autenticación con localStorage e integración frontend-backend sobre API.',
      backendResponsibilities:
        'Endpoints PHP, control de login y respuestas consumidas por el frontend.',
      frontendResponsibilities:
        'Angular con formularios, listado, login y consumo de API.',
      dataUsage: 'API propia, autenticación básica y almacenamiento local.',
      learned:
        'Flujo completo entre interfaz, API y autenticación básica.',
      stackIcons: LOCALIZED_STACK_ICONS.es.gm,
    },
    portfolio: {
      title: 'Portfolio Interactivo',
      category: 'Frontend técnico',
      duration: 'Proyecto personal · actualizado en 2026',
      summary:
        'Portfolio construido con Next.js, React y Tailwind. Mantiene una experiencia visual premium y comunica los pilares Java, UI/UX e IA & Big Data.',
      backendResponsibilities:
        'Sin backend propio en este repositorio; funciona como plataforma de presentación técnica.',
      frontendResponsibilities:
        'Componentes React, animaciones GSAP, responsive, SEO, datos separados y despliegue en GitHub Pages.',
      dataUsage: 'Contenido modular en archivos de datos y assets estáticos.',
      learned:
        'Arquitectura frontend mantenible, refactor de contenido y comunicación profesional.',
    },
    retos: {
      title: 'Retos Sociales',
      category: 'Frontend académico',
      duration: 'Proyecto académico · entrega web de una semana',
      summary:
        'Entrega académica centrada en desarrollo web, claridad de contenido, estructura responsive y publicación en GitHub Pages.',
      backendResponsibilities: 'No incluye backend propio.',
      frontendResponsibilities: 'HTML, CSS, JavaScript, responsive y estructura de contenido.',
      dataUsage: 'Datos estáticos del sitio.',
      learned:
        'Entrega rápida, organización visual y publicación web.',
    },
    sostenibilidad: {
      title: 'Sostenibilidad',
      category: 'Frontend académico',
      duration: 'Completado en 1 semana · trabajo del grado superior',
      summary:
        'Landing informativa sobre hábitos sostenibles, desarrollada en una semana con foco en claridad, responsive y accesibilidad base.',
      backendResponsibilities: 'No incluye backend propio.',
      frontendResponsibilities: 'HTML, CSS, JavaScript, maquetación responsive y contenido accesible.',
      dataUsage: 'Datos estáticos del sitio.',
      learned:
        'Planificación de entrega corta, responsive y comunicación visual clara.',
    },
    vortex: {
      title: 'Vortex',
      category: 'IA local complementaria',
      duration: 'Proyecto personal de IA local con memoria técnica en PDF',
      summary:
        'Proyecto de IA local con frontend React, API Python, RAG, memoria local, permisos visibles y modo agente. Complementa el perfil IA & Big Data.',
      backendResponsibilities:
        'API Python, endpoints para interacción local y gestión de contexto.',
      frontendResponsibilities:
        'Frontend React para interacción con el agente y visualización de estados.',
      dataUsage: 'RAG, memoria local y permisos visibles.',
      learned:
        'Uso de IA como apoyo productivo, integración técnica y documentación de sistemas locales.',
    },
  },
  en: {
    fichestu: {
      title: 'Fichestu',
      category: 'Spring Boot · Full-Stack',
      duration: 'DAM final project · native Android app + Spring Boot backend',
      summary:
        'Full-stack application with a Kotlin + Jetpack Compose Android app connected to a Spring Boot backend. It includes authentication, realtime features, persistence, and deployment.',
      backendResponsibilities:
        'REST API with Spring Boot, JWT/Google Sign-In authentication, WebSocket, services, JPA/Flyway persistence, and a MySQL/Supabase database.',
      frontendResponsibilities:
        'Native Android app with Kotlin and Jetpack Compose, including profile, market, minigame, and notification screens.',
      dataUsage: 'MySQL/Supabase, Flyway, JPA, REST endpoints, and realtime communication.',
      learned:
        'Real integration between mobile client, backend, authentication, persistent data, and deployment.',
      stackIcons: LOCALIZED_STACK_ICONS.en.fichestu,
    },
    accesoDatosTienda: {
      title: 'Acceso Datos Tienda',
      category: 'Java Backend · E-commerce',
      duration: 'Refactored academic project · Java 17 + multi-database persistence',
      summary:
        'Academic project refactored for the portfolio, focused on backend logic, maintainable structure, data access, and Java best practices.',
      backendResponsibilities:
        'Servlets, repositories/DAO, checkout flow, atomic stock handling, login, backoffice, Hibernate/JPA persistence, and automated tests.',
      frontendResponsibilities:
        'JSP views for catalog, cart, login, and basic administration.',
      dataUsage: 'MySQL, MongoDB, ObjectDB, Hibernate/JPA, and CRUD operations.',
      learned:
        'Persistence with several databases, separation of responsibilities, and testing around critical logic.',
      stackIcons: LOCALIZED_STACK_ICONS.en.acceso,
    },
    daw: {
      title: 'DAW Final Project - Nursing Platform',
      category: 'Academic full-stack',
      duration: 'Year-long DAW final project',
      summary:
        'Full-stack project developed during the course with separate frontend and backend repositories plus technical PDF documentation.',
      backendResponsibilities:
        'Node.js/Express backend, endpoints, MySQL connection, and a structure separated from the frontend.',
      frontendResponsibilities:
        'Angular frontend, screens, forms, navigation, and API integration.',
      dataUsage: 'MySQL, custom API, and documentation of the data flow.',
      learned:
        'Frontend/backend separation, teamwork, documentation, and a complete delivery cycle.',
    },
    gm: {
      title: 'GM Project',
      category: 'Academic full-stack',
      duration: 'Complete technical practice',
      summary:
        'Integrated project with an Angular frontend, PHP backend endpoints, localStorage authentication, and frontend-backend API integration.',
      backendResponsibilities:
        'PHP endpoints, login handling, and responses consumed by the frontend.',
      frontendResponsibilities:
        'Angular with forms, listing, login, and API consumption.',
      dataUsage: 'Custom API, basic authentication, and local storage.',
      learned:
        'Complete flow between interface, API, and basic authentication.',
      stackIcons: LOCALIZED_STACK_ICONS.en.gm,
    },
    portfolio: {
      title: 'Interactive Portfolio',
      category: 'Technical frontend',
      duration: 'Personal project · updated in 2026',
      summary:
        'Portfolio built with Next.js, React, and Tailwind. It keeps a premium visual experience and communicates the Java, UI/UX, and AI & Big Data pillars.',
      backendResponsibilities:
        'No custom backend in this repository; it works as a technical presentation platform.',
      frontendResponsibilities:
        'React components, GSAP animations, responsive layout, SEO, separated data, and GitHub Pages deployment.',
      dataUsage: 'Modular content in data files and static assets.',
      learned:
        'Maintainable frontend architecture, content refactoring, and professional communication.',
    },
    retos: {
      title: 'Social Challenges',
      category: 'Academic frontend',
      duration: 'Academic project · one-week web delivery',
      summary:
        'Academic delivery focused on web development, content clarity, responsive structure, and GitHub Pages publishing.',
      backendResponsibilities: 'No custom backend included.',
      frontendResponsibilities: 'HTML, CSS, JavaScript, responsive layout, and content structure.',
      dataUsage: 'Static site data.',
      learned:
        'Fast delivery, visual organization, and web publishing.',
    },
    sostenibilidad: {
      title: 'Sustainability',
      category: 'Academic frontend',
      duration: 'Completed in 1 week · higher-degree assignment',
      summary:
        'Informative landing page about sustainable habits, developed in one week with a focus on clarity, responsive layout, and basic accessibility.',
      backendResponsibilities: 'No custom backend included.',
      frontendResponsibilities: 'HTML, CSS, JavaScript, responsive layout, and accessible content.',
      dataUsage: 'Static site data.',
      learned:
        'Short delivery planning, responsive layout, and clear visual communication.',
    },
    vortex: {
      title: 'Vortex',
      category: 'Complementary local AI',
      duration: 'Personal local AI project with technical PDF documentation',
      summary:
        'Local AI project with React frontend, Python API, RAG, local memory, visible permissions, and agent mode. It complements the AI & Big Data pillar.',
      backendResponsibilities:
        'Python API, endpoints for local interaction, and context handling.',
      frontendResponsibilities:
        'React frontend for interacting with the agent and showing states.',
      dataUsage: 'RAG, local memory, and visible permissions.',
      learned:
        'Using AI as a productivity support, technical integration, and documentation for local systems.',
    },
  },
};

export function buildLocalizedProjects(language) {
  const localeCopy = PROJECT_COPY[language] ?? PROJECT_COPY.es;

  return PROJECT_ORDER.map((key) => {
    const base = PROJECT_BASE[key];
    const copy = localeCopy[key];

    return {
      ...base,
      ...copy,
      tags: copy.tags ?? base.tags,
      stackIcons: copy.stackIcons ?? base.stackIcons,
    };
  });
}
