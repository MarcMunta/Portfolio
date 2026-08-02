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
      desc: 'Experiencia práctica y formación que explican cómo trabajo hoy.',
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
        {
          period: '2021 — 2027',
          title: 'STUCOM · SMX, DAW, DAM e IA & Big Data',
          meta: 'Formación técnica continua',
          description: 'Base en sistemas, desarrollo web y móvil, Java, datos e inteligencia artificial aplicada.',
        },
      ],
    },
    cvSection: {
      title: 'CV, sin rodeos',
      desc: 'Experiencia, formación y contacto en un documento breve.',
      localizedLabel: 'Descargar CV en español',
      generalLabel: 'Ver CV general',
      localizedPath: 'docs/cv/marc-muntane-clara-cv-es.pdf',
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
      desc: 'Experiència pràctica i formació que expliquen com treballo avui.',
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
        {
          period: '2021 — 2027',
          title: 'STUCOM · SMX, DAW, DAM i IA & Big Data',
          meta: 'Formació tècnica contínua',
          description: 'Base en sistemes, desenvolupament web i mòbil, Java, dades i intel·ligència artificial aplicada.',
        },
      ],
    },
    cvSection: {
      title: 'CV, sense voltes',
      desc: 'Experiència, formació i contacte en un document breu.',
      localizedLabel: 'Descarregar CV en català',
      generalLabel: 'Veure CV general',
      localizedPath: 'docs/cv/marc-muntane-clara-cv-ca.pdf',
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
      desc: 'Practical experience and training that explain how I work today.',
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
        {
          period: '2021 — 2027',
          title: 'STUCOM · SMX, DAW, DAM, and AI & Big Data',
          meta: 'Continuous technical training',
          description: 'Foundation in systems, web and mobile development, Java, data, and applied AI.',
        },
      ],
    },
    cvSection: {
      title: 'CV, straight to the point',
      desc: 'Experience, education, and contact details in one concise document.',
      localizedLabel: 'Download CV in English',
      generalLabel: 'View general CV',
      localizedPath: 'docs/cv/marc-muntane-clara-cv-en.pdf',
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
