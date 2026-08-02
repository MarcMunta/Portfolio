import { buildLocalizedProjects } from './portfolioProjects';

export const LANGUAGE_OPTIONS = [
  { code: 'ca', label: 'Català' },
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
];

const LOCALE_DATA = {
  es: {
    navItems: [
      { id: 'projects', label: 'Proyectos' },
      { id: 'expertise', label: 'Perfil' },
      { id: 'experience', label: 'Trayectoria' },
      { id: 'education', label: 'Estudios' },
      { id: 'cv', label: 'CV' },
    ],
    labels: {
      goTo: 'Ir a',
      goToContact: 'Ir a contacto',
      talkButton: 'Hablemos',
      switchLanguageTo: 'Cambiar idioma a',
      switchToLight: 'Cambiar a modo claro',
      switchToDark: 'Cambiar a modo oscuro',
      liveDemo: 'Ver producto',
      sourceCode: 'Ver código',
      technicalDoc: 'Memoria técnica',
      newProject: 'Nuevo',
      role: 'Mi aportación',
    },
    hero: {
      availability: 'Disponible para oportunidades junior',
      name: 'Marc Muntané Clarà',
      titleLead: 'Construyo productos digitales',
      titleAccent: 'que se pueden probar.',
      subtitle:
        'Diseño la interfaz, conecto los datos y valido el flujo completo. Trabajo con React y TypeScript, Python e IA local, y Java con Spring Boot.',
      supporting:
        'Busco un equipo donde aportar criterio de producto, aprender rápido y convertir problemas reales en software claro.',
      viewProjects: 'Ver proyectos',
      downloadCv: 'Descargar CV',
      proofPoints: ['Producto y UI', 'IA local', 'Backend y datos'],
      portraitAlt: 'Retrato de Marc Muntané Clarà',
      portraitKicker: 'Barcelona · disponible',
      portraitCaption: 'Producto, IA y desarrollo full-stack',
    },
    projectsSection: {
      title: 'Trabajo seleccionado',
      desc: 'Cuatro proyectos distintos. Cada uno explica qué problema resuelve, qué construí y dónde comprobarlo.',
    },
    expertise: {
      title: 'Cómo aporto',
      desc: 'Capacidades demostradas en los proyectos, no una lista infinita de tecnologías.',
      groups: [
        {
          title: 'Producto y frontend',
          description: 'Convierto requisitos en interfaces claras, responsive y completas.',
          skills: ['React / Next.js', 'TypeScript', 'Accesibilidad', 'Diseño de interacción'],
        },
        {
          title: 'IA aplicada',
          description: 'Integro modelos y RAG con contexto acotado, estados visibles y límites honestos.',
          skills: ['Python', 'RAG', 'Automatización', 'Evaluación'],
        },
        {
          title: 'Backend y datos',
          description: 'Construyo APIs y persistencia separando responsabilidades y validando el flujo.',
          skills: ['Java / Spring Boot', 'REST', 'SQL / JPA', 'Testing'],
        },
      ],
    },
    experienceSection: {
      title: 'Trayectoria',
      desc: 'Experiencia práctica en equipos reales, con responsabilidades concretas y contexto internacional.',
      items: [
        {
          period: '2025 — 2026',
          title: 'M5 Studios · Erasmus+ en Irlanda',
          meta: 'Flutter, frontend e integración · +350 h',
          description: 'Apps multiplataforma, Mapbox y trabajo diario en un entorno internacional.',
        },
        {
          period: '2023 — 2025',
          title: 'Viascooter · prácticas DAW',
          meta: 'Web, hosting y soporte',
          description: 'Mantenimiento web, cuentas, incidencias y contacto con necesidades reales de negocio.',
        },
      ],
    },
    educationSection: {
      title: 'Estudios',
      desc: 'Una progresión desde sistemas y redes hasta producto web, aplicaciones multiplataforma e inteligencia artificial.',
      items: [
        {
          period: '2026 — 2027',
          title: 'Máster en IA & Big Data',
          institution: 'STUCOM · Barcelona',
          description: 'Modelos, datos y soluciones de inteligencia artificial aplicada.',
        },
        {
          period: '2025 — 2026',
          title: 'Desarrollo de Aplicaciones Multiplataforma (DAM)',
          institution: 'STUCOM · Barcelona',
          description: 'Java, Kotlin, aplicaciones multiplataforma, persistencia y APIs.',
        },
        {
          period: '2023 — 2025',
          title: 'Desarrollo de Aplicaciones Web (DAW)',
          institution: 'STUCOM · Barcelona',
          description: 'Frontend, backend, bases de datos y despliegue web.',
        },
        {
          period: '2021 — 2023',
          title: 'Sistemas Microinformáticos y Redes (SMX)',
          institution: 'STUCOM · Barcelona',
          description: 'Sistemas, redes, hardware y soporte técnico.',
        },
      ],
    },
    cvSection: {
      title: 'CV, de un vistazo',
      desc: 'Previsualiza la versión en español y abre el documento completo cuando necesites el detalle.',
      previewLabel: 'Vista previa · Español',
      previewMeta: 'PDF · 1 página',
      previewAlt: 'Primera página del CV de Marc Muntané Clarà en español',
      summaryKicker: 'Perfil resumido',
      summaryTitle: 'La información clave, sin obligarte a descargar nada.',
      facts: [
        'Frontend y producto · React, TypeScript y Flutter',
        'Backend e IA · Java, Spring Boot y Python',
        'Idiomas · Español y catalán nativos · inglés B2',
      ],
      openLabel: 'Abrir CV completo',
      localizedLabel: 'Descargar PDF',
      generalLabel: 'Ver CV general',
      localizedPath: 'docs/cv/marc-muntane-clara-cv-es.pdf',
      previewPath: 'docs/cv-previews/es/page-1.png',
      generalPath: 'docs/cv/marc-muntane-clara-cv.pdf',
    },
    contact: {
      title: '¿Construimos algo útil?',
      desc: 'Si mi forma de trabajar encaja con tu equipo, escríbeme. Respondo con contexto y sin discursos genéricos.',
      emailLabel: 'Enviar email',
    },
    footer: {
      githubAria: 'Abrir GitHub de Marc Muntané',
      linkedinAria: 'Abrir LinkedIn de Marc Muntané',
    },
  },
  ca: {
    navItems: [
      { id: 'projects', label: 'Projectes' },
      { id: 'expertise', label: 'Perfil' },
      { id: 'experience', label: 'Trajectòria' },
      { id: 'education', label: 'Estudis' },
      { id: 'cv', label: 'CV' },
    ],
    labels: {
      goTo: 'Anar a',
      goToContact: 'Anar a contacte',
      talkButton: 'Parlem',
      switchLanguageTo: 'Canviar idioma a',
      switchToLight: 'Canviar a mode clar',
      switchToDark: 'Canviar a mode fosc',
      liveDemo: 'Veure producte',
      sourceCode: 'Veure codi',
      technicalDoc: 'Memòria tècnica',
      newProject: 'Nou',
      role: 'La meva aportació',
    },
    hero: {
      availability: 'Disponible per a oportunitats junior',
      name: 'Marc Muntané Clarà',
      titleLead: 'Construeixo productes digitals',
      titleAccent: 'que es poden provar.',
      subtitle:
        'Dissenyo la interfície, connecto les dades i valido el flux complet. Treballo amb React i TypeScript, Python i IA local, i Java amb Spring Boot.',
      supporting:
        'Busco un equip on aportar criteri de producte, aprendre ràpid i convertir problemes reals en software clar.',
      viewProjects: 'Veure projectes',
      downloadCv: 'Descarregar CV',
      proofPoints: ['Producte i UI', 'IA local', 'Backend i dades'],
      portraitAlt: 'Retrat de Marc Muntané Clarà',
      portraitKicker: 'Barcelona · disponible',
      portraitCaption: 'Producte, IA i desenvolupament full-stack',
    },
    projectsSection: {
      title: 'Treball seleccionat',
      desc: 'Quatre projectes diferents. Cada un explica quin problema resol, què hi vaig construir i on comprovar-ho.',
    },
    expertise: {
      title: 'Com aporto',
      desc: 'Capacitats demostrades als projectes, no una llista infinita de tecnologies.',
      groups: [
        {
          title: 'Producte i frontend',
          description: 'Converteixo requisits en interfícies clares, responsive i completes.',
          skills: ['React / Next.js', 'TypeScript', 'Accessibilitat', 'Disseny d’interacció'],
        },
        {
          title: 'IA aplicada',
          description: 'Integro models i RAG amb context acotat, estats visibles i límits honestos.',
          skills: ['Python', 'RAG', 'Automatització', 'Avaluació'],
        },
        {
          title: 'Backend i dades',
          description: 'Construeixo APIs i persistència separant responsabilitats i validant el flux.',
          skills: ['Java / Spring Boot', 'REST', 'SQL / JPA', 'Testing'],
        },
      ],
    },
    experienceSection: {
      title: 'Trajectòria',
      desc: 'Experiència pràctica en equips reals, amb responsabilitats concretes i context internacional.',
      items: [
        {
          period: '2025 — 2026',
          title: 'M5 Studios · Erasmus+ a Irlanda',
          meta: 'Flutter, frontend i integració · +350 h',
          description: 'Apps multiplataforma, Mapbox i treball diari en un entorn internacional.',
        },
        {
          period: '2023 — 2025',
          title: 'Viascooter · pràctiques DAW',
          meta: 'Web, hosting i suport',
          description: 'Manteniment web, comptes, incidències i contacte amb necessitats reals de negoci.',
        },
      ],
    },
    educationSection: {
      title: 'Estudis',
      desc: 'Una progressió des de sistemes i xarxes fins a producte web, aplicacions multiplataforma i intel·ligència artificial.',
      items: [
        {
          period: '2026 — 2027',
          title: 'Màster en IA i Big Data',
          institution: 'STUCOM · Barcelona',
          description: 'Models, dades i solucions d’intel·ligència artificial aplicada.',
        },
        {
          period: '2025 — 2026',
          title: 'Desenvolupament d’Aplicacions Multiplataforma (DAM)',
          institution: 'STUCOM · Barcelona',
          description: 'Java, Kotlin, aplicacions multiplataforma, persistència i APIs.',
        },
        {
          period: '2023 — 2025',
          title: 'Desenvolupament d’Aplicacions Web (DAW)',
          institution: 'STUCOM · Barcelona',
          description: 'Frontend, backend, bases de dades i desplegament web.',
        },
        {
          period: '2021 — 2023',
          title: 'Sistemes Microinformàtics i Xarxes (SMX)',
          institution: 'STUCOM · Barcelona',
          description: 'Sistemes, xarxes, hardware i suport tècnic.',
        },
      ],
    },
    cvSection: {
      title: 'CV, d’un cop d’ull',
      desc: 'Previsualitza la versió en català i obre el document complet quan necessitis el detall.',
      previewLabel: 'Vista prèvia · Català',
      previewMeta: 'PDF · 1 pàgina',
      previewAlt: 'Primera pàgina del CV de Marc Muntané Clarà en català',
      summaryKicker: 'Perfil resumit',
      summaryTitle: 'La informació clau, sense obligar-te a descarregar res.',
      facts: [
        'Frontend i producte · React, TypeScript i Flutter',
        'Backend i IA · Java, Spring Boot i Python',
        'Idiomes · Castellà i català natius · anglès B2',
      ],
      openLabel: 'Obrir CV complet',
      localizedLabel: 'Descarregar PDF',
      generalLabel: 'Veure CV general',
      localizedPath: 'docs/cv/marc-muntane-clara-cv-ca.pdf',
      previewPath: 'docs/cv-previews/ca/page-1.png',
      generalPath: 'docs/cv/marc-muntane-clara-cv.pdf',
    },
    contact: {
      title: 'Construïm alguna cosa útil?',
      desc: 'Si la meva manera de treballar encaixa amb el teu equip, escriu-me. Responc amb context i sense discursos genèrics.',
      emailLabel: 'Enviar email',
    },
    footer: {
      githubAria: 'Obrir el GitHub de Marc Muntané',
      linkedinAria: 'Obrir el LinkedIn de Marc Muntané',
    },
  },
  en: {
    navItems: [
      { id: 'projects', label: 'Projects' },
      { id: 'expertise', label: 'Profile' },
      { id: 'experience', label: 'Experience' },
      { id: 'education', label: 'Education' },
      { id: 'cv', label: 'CV' },
    ],
    labels: {
      goTo: 'Go to',
      goToContact: 'Go to contact',
      talkButton: 'Let’s talk',
      switchLanguageTo: 'Switch language to',
      switchToLight: 'Switch to light mode',
      switchToDark: 'Switch to dark mode',
      liveDemo: 'View product',
      sourceCode: 'View code',
      technicalDoc: 'Technical document',
      newProject: 'New',
      role: 'My contribution',
    },
    hero: {
      availability: 'Open to junior opportunities',
      name: 'Marc Muntané Clarà',
      titleLead: 'I build digital products',
      titleAccent: 'you can actually try.',
      subtitle:
        'I design the interface, connect the data, and validate the complete flow. I work with React and TypeScript, Python and local AI, and Java with Spring Boot.',
      supporting:
        'I am looking for a team where I can bring product judgement, learn fast, and turn real problems into clear software.',
      viewProjects: 'View projects',
      downloadCv: 'Download CV',
      proofPoints: ['Product and UI', 'Local AI', 'Backend and data'],
      portraitAlt: 'Portrait of Marc Muntané Clarà',
      portraitKicker: 'Barcelona · available',
      portraitCaption: 'Product, AI, and full-stack development',
    },
    projectsSection: {
      title: 'Selected work',
      desc: 'Four distinct projects. Each one explains the problem, what I built, and where you can verify it.',
    },
    expertise: {
      title: 'How I contribute',
      desc: 'Capabilities proven in projects, not an endless technology list.',
      groups: [
        {
          title: 'Product and frontend',
          description: 'I turn requirements into clear, responsive, complete interfaces.',
          skills: ['React / Next.js', 'TypeScript', 'Accessibility', 'Interaction design'],
        },
        {
          title: 'Applied AI',
          description: 'I integrate models and RAG with bounded context, visible states, and honest limits.',
          skills: ['Python', 'RAG', 'Automation', 'Evaluation'],
        },
        {
          title: 'Backend and data',
          description: 'I build APIs and persistence with separated responsibilities and validated flows.',
          skills: ['Java / Spring Boot', 'REST', 'SQL / JPA', 'Testing'],
        },
      ],
    },
    experienceSection: {
      title: 'Experience',
      desc: 'Hands-on experience in real teams, with concrete responsibilities and international context.',
      items: [
        {
          period: '2025 — 2026',
          title: 'M5 Studios · Erasmus+ in Ireland',
          meta: 'Flutter, frontend, and integration · 350+ h',
          description: 'Cross-platform apps, Mapbox, and daily work in an international environment.',
        },
        {
          period: '2023 — 2025',
          title: 'Viascooter · DAW internship',
          meta: 'Web, hosting, and support',
          description: 'Web maintenance, accounts, incidents, and direct contact with real business needs.',
        },
      ],
    },
    educationSection: {
      title: 'Education',
      desc: 'A progression from systems and networks to web products, cross-platform applications, and artificial intelligence.',
      items: [
        {
          period: '2026 — 2027',
          title: 'Master’s in AI & Big Data',
          institution: 'STUCOM · Barcelona',
          description: 'Models, data, and applied artificial intelligence solutions.',
        },
        {
          period: '2025 — 2026',
          title: 'Cross-platform Application Development (DAM)',
          institution: 'STUCOM · Barcelona',
          description: 'Java, Kotlin, cross-platform applications, persistence, and APIs.',
        },
        {
          period: '2023 — 2025',
          title: 'Web Application Development (DAW)',
          institution: 'STUCOM · Barcelona',
          description: 'Frontend, backend, databases, and web deployment.',
        },
        {
          period: '2021 — 2023',
          title: 'Microcomputer Systems and Networks (SMX)',
          institution: 'STUCOM · Barcelona',
          description: 'Systems, networks, hardware, and technical support.',
        },
      ],
    },
    cvSection: {
      title: 'CV, at a glance',
      desc: 'Preview the English version and open the complete document whenever you need the detail.',
      previewLabel: 'Preview · English',
      previewMeta: 'PDF · 1 page',
      previewAlt: 'First page of Marc Muntané Clarà’s CV in English',
      summaryKicker: 'Profile summary',
      summaryTitle: 'The key information, without forcing a download.',
      facts: [
        'Frontend and product · React, TypeScript, and Flutter',
        'Backend and AI · Java, Spring Boot, and Python',
        'Languages · Native Spanish and Catalan · English B2',
      ],
      openLabel: 'Open full CV',
      localizedLabel: 'Download PDF',
      generalLabel: 'View general CV',
      localizedPath: 'docs/cv/marc-muntane-clara-cv-en.pdf',
      previewPath: 'docs/cv-previews/en/page-1.png',
      generalPath: 'docs/cv/marc-muntane-clara-cv.pdf',
    },
    contact: {
      title: 'Shall we build something useful?',
      desc: 'If the way I work fits your team, send me a message. I reply with context, not a generic pitch.',
      emailLabel: 'Send email',
    },
    footer: {
      githubAria: 'Open Marc Muntané’s GitHub',
      linkedinAria: 'Open Marc Muntané’s LinkedIn',
    },
  },
};

export const CONTENT_BY_LANGUAGE = Object.fromEntries(
  Object.entries(LOCALE_DATA).map(([language, content]) => [
    language,
    {
      ...content,
      projects: buildLocalizedProjects(language),
    },
  ])
);
