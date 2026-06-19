import { buildLocalizedProjects } from './portfolioProjects';
import { getCurrentlyReinforcing, getStackGroups } from './portfolioSkills';
import { getExperienceItems } from './portfolioTimeline';

export const CV_PREVIEW_PAGES = {
  general: [
    'docs/cv-previews/general/page-1.png',
    'docs/cv-previews/general/page-2.png',
    'docs/cv-previews/general/page-3.png',
  ],
  ca: ['docs/cv-previews/ca/page-1.png'],
  es: ['docs/cv-previews/es/page-1.png'],
  en: ['docs/cv-previews/en/page-1.png'],
};

export const LANGUAGE_OPTIONS = [
  { code: 'ca', label: 'Català' },
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
];

const COMMON_JAVA_PROJECTS = {
  ca: [
    {
      name: 'Fichestu Backend',
      category: 'Spring Boot · Projecte final DAM',
      status: 'verified',
      description:
        'Backend Spring Boot connectat a una app Android nativa. Inclou autenticació, WebSocket realtime, persistència, Flyway, MySQL/Supabase, Docker i desplegament.',
      technologies: ['Java 17', 'Spring Boot', 'REST API', 'JWT', 'WebSocket', 'JPA', 'Flyway', 'MySQL'],
      repoUrl: 'https://github.com/MarcMunta/Fichestu-Backend',
    },
    {
      name: 'Acceso Datos Tienda',
      category: 'Java Backend · E-commerce',
      status: 'verified',
      description:
        'Projecte acadèmic refactoritzat per al portfolio, centrat en lògica backend, estructura mantenible, accés a dades i bones pràctiques Java.',
      technologies: ['Java 17', 'JSP', 'Servlets', 'Hibernate/JPA', 'MySQL', 'MongoDB', 'ObjectDB', 'JUnit'],
      repoUrl: 'https://github.com/MarcMunta/Acceso_Datos_Tienda',
    },
    {
      name: 'API REST amb Spring Boot',
      category: 'Projecte per afegir',
      status: 'todo',
      description:
        'TODO: afegir o verificar una API REST centrada en CRUD, DTOs, validació, errors, JPA/Hibernate i documentació.',
      technologies: ['Spring Boot', 'REST API', 'JPA/Hibernate', 'MySQL', 'Testing'],
    },
    {
      name: 'Projecte UI/UX documentat',
      category: 'Projecte per afegir',
      status: 'todo',
      description:
        'TODO: afegir un cas UI/UX amb decisions d’interfície, fluxos, components i connexió amb una aplicació real.',
      technologies: ['UI/UX', 'React', 'Responsive', 'Design system', 'API integration'],
    },
  ],
  es: [
    {
      name: 'Fichestu Backend',
      category: 'Spring Boot · Proyecto final DAM',
      status: 'verified',
      description:
        'Backend Spring Boot conectado a una app Android nativa. Incluye autenticación, WebSocket realtime, persistencia, Flyway, MySQL/Supabase, Docker y despliegue.',
      technologies: ['Java 17', 'Spring Boot', 'REST API', 'JWT', 'WebSocket', 'JPA', 'Flyway', 'MySQL'],
      repoUrl: 'https://github.com/MarcMunta/Fichestu-Backend',
    },
    {
      name: 'Acceso Datos Tienda',
      category: 'Java Backend · E-commerce',
      status: 'verified',
      description:
        'Proyecto académico refactorizado para portfolio, centrado en lógica backend, estructura mantenible, acceso a datos y buenas prácticas Java.',
      technologies: ['Java 17', 'JSP', 'Servlets', 'Hibernate/JPA', 'MySQL', 'MongoDB', 'ObjectDB', 'JUnit'],
      repoUrl: 'https://github.com/MarcMunta/Acceso_Datos_Tienda',
    },
    {
      name: 'API REST con Spring Boot',
      category: 'Proyecto por añadir',
      status: 'todo',
      description:
        'TODO: añadir o verificar una API REST centrada en CRUD, DTOs, validación, errores, JPA/Hibernate y documentación.',
      technologies: ['Spring Boot', 'REST API', 'JPA/Hibernate', 'MySQL', 'Testing'],
    },
    {
      name: 'Proyecto UI/UX documentado',
      category: 'Proyecto por añadir',
      status: 'todo',
      description:
        'TODO: añadir un caso UI/UX con decisiones de interfaz, flujos, componentes y conexión con una aplicación real.',
      technologies: ['UI/UX', 'React', 'Responsive', 'Design system', 'API integration'],
    },
  ],
  en: [
    {
      name: 'Fichestu Backend',
      category: 'Spring Boot · DAM final project',
      status: 'verified',
      description:
        'Spring Boot backend connected to a native Android app. It includes authentication, realtime WebSocket, persistence, Flyway, MySQL/Supabase, Docker, and deployment.',
      technologies: ['Java 17', 'Spring Boot', 'REST API', 'JWT', 'WebSocket', 'JPA', 'Flyway', 'MySQL'],
      repoUrl: 'https://github.com/MarcMunta/Fichestu-Backend',
    },
    {
      name: 'Acceso Datos Tienda',
      category: 'Java Backend · E-commerce',
      status: 'verified',
      description:
        'Academic project refactored for the portfolio, focused on backend logic, maintainable structure, data access, and Java best practices.',
      technologies: ['Java 17', 'JSP', 'Servlets', 'Hibernate/JPA', 'MySQL', 'MongoDB', 'ObjectDB', 'JUnit'],
      repoUrl: 'https://github.com/MarcMunta/Acceso_Datos_Tienda',
    },
    {
      name: 'REST API with Spring Boot',
      category: 'Project to add',
      status: 'todo',
      description:
        'TODO: add or verify a REST API focused on CRUD, DTOs, validation, errors, JPA/Hibernate, and documentation.',
      technologies: ['Spring Boot', 'REST API', 'JPA/Hibernate', 'MySQL', 'Testing'],
    },
    {
      name: 'Documented UI/UX project',
      category: 'Project to add',
      status: 'todo',
      description:
        'TODO: add a UI/UX case with interface decisions, flows, components, and connection to a real application.',
      technologies: ['UI/UX', 'React', 'Responsive', 'Design system', 'API integration'],
    },
  ],
};

const LOCALE_DATA = {
  ca: {
    navItems: [
      { id: 'expertise', label: 'Stack' },
      { id: 'backend', label: 'Pilars' },
      { id: 'projects', label: 'Projectes' },
      { id: 'experience', label: 'Formació' },
      { id: 'cv', label: 'CV' },
    ],
    labels: {
      goTo: 'Anar a',
      goToContact: 'Anar a contacte',
      talkButton: 'Contactar',
      switchLanguageTo: 'Canviar idioma a',
      switchToLight: 'Canviar a mode clar',
      switchToDark: 'Canviar a mode fosc',
      available: 'Disponible per a rols júnior',
      viewProjects: 'Veure projectes destacats',
      viewStack: 'Veure stack tècnic',
      contact: 'Contactar',
      openPdfPreviewOf: 'Obrir vista prèvia PDF de',
      openProjectOf: 'Obrir projecte',
      openRepoOf: 'Obrir repositori de',
      pdfPreviewOf: 'Vista prèvia PDF de',
      openPdf: 'Obrir PDF',
      closePreview: 'Tancar vista prèvia',
      verifiedProject: 'Projecte verificable',
      todoProject: 'Projecte per afegir o verificar',
      detailBackend: 'Backend',
      detailFrontend: 'Frontend',
      detailData: 'Dades/API',
      detailLearned: 'Aprenentatge',
      repo: 'GitHub',
      demo: 'Demo',
    },
    hero: {
      titleLines: ['Desenvolupador', 'Full-Stack', 'Júnior'],
      subtitle:
        'Perfil tècnic basat en tres pilars: Java per a lògica i backend, UI/UX per a interfícies clares, i IA & Big Data com a línia d’especialització.',
      mobileSubtitle: 'Java, UI/UX i IA & Big Data com a tres pilars tècnics.',
      supporting:
        'Construeixo aplicacions combinant estructura de software, criteri visual i eines d’IA. Busco créixer com a desenvolupador júnior capaç d’unir backend, frontend i solucions data/AI aplicades.',
      mobileSupporting:
        'Full-stack júnior amb base Java, criteri d’interfície i interès real per IA aplicada.',
      scroll: 'Scroll',
    },
    expertise: {
      titleStart: 'El meu Stack',
      titleAccent: 'Tècnic.',
      desc:
        'Organitzat al voltant dels tres pilars del perfil: Java, UI/UX i IA & Big Data, amb dades i eines com a suport.',
      groups: getStackGroups('ca'),
    },
    backend: {
      titleStart: 'Tres pilars',
      titleAccent: 'clau.',
      desc:
        'El portfolio se centra en Java, UI/UX i IA & Big Data. Java sosté la base tècnica, UI/UX aporta criteri d’interfície i la IA amplia la capacitat d’automatitzar, analitzar i integrar solucions.',
      body:
        'L’objectiu és mostrar un perfil júnior full-stack equilibrat: codi, producte i IA aplicada sense exagerar experiència professional.',
      cards: [
        {
          title: 'Java i backend',
          text: 'Java, Spring Boot en reforç, APIs REST, serveis, controladors, DTOs, validació, persistència i bases de dades.',
        },
        {
          title: 'UI/UX i frontend',
          text: 'Interfícies clares, responsive, experiència d’usuari, React, disseny visual i connexió real amb APIs.',
        },
        {
          title: 'IA & Big Data',
          text: 'IA assistida, prompt engineering, projectes d’IA local, automatització, RAG bàsic i formació en IA & Big Data.',
        },
      ],
    },
    currentFocus: {
      titleStart: 'Actualment',
      titleAccent: 'reforçant.',
      desc:
        'Ruta d’aprenentatge per consolidar un perfil júnior full-stack amb base Java, UI/UX i IA aplicada.',
      items: getCurrentlyReinforcing('ca'),
    },
    process: {
      titleStart: 'Procés de',
      titleAccent: 'desenvolupament.',
      desc: 'Forma de treball orientada a construir software mantenible, usable i ben documentat.',
      steps: [
        { title: 'Anàlisi de requisits', desc: 'Entendre el problema, usuaris, dades i regles abans d’escriure codi.' },
        { title: 'Disseny d’arquitectura', desc: 'Definir capes, responsabilitats, flux de dades, API i estructura inicial.' },
        { title: 'Desenvolupament backend', desc: 'Implementar lògica, endpoints REST, validació, persistència i errors.' },
        { title: 'Integració frontend', desc: 'Connectar interfícies amb APIs, estats, formularis i feedback visual.' },
        { title: 'Validació i proves', desc: 'Provar casos principals, endpoints, dades, errors i responsive.' },
        { title: 'Refactorització i documentació', desc: 'Millorar noms, estructura, duplicació, README i mantenibilitat.' },
      ],
    },
    experienceSection: {
      titleStart: 'Formació i',
      titleAccent: 'trajectòria.',
      desc: 'Base real: STUCOM, DAW/DAM, pràctiques, sistemes, frontend, Java, UI/UX i IA.',
    },
    javaProjectsSection: {
      titleStart: 'Projectes tècnics',
      titleAccent: 'destacats.',
      desc: 'Projectes orientats als tres pilars: Java/backend, UI/UX/frontend i IA & Big Data.',
      projects: COMMON_JAVA_PROJECTS.ca,
    },
    projectsSection: {
      titleTop: 'Projectes',
      titleBottom: 'Destacats.',
      desc: 'Selecció equilibrada entre Java/backend, UI/UX/frontend i IA & Big Data.',
    },
    about: {
      titleStart: 'Sobre',
      titleAccent: 'mi.',
      desc:
        'Soc desenvolupador Full-Stack Júnior amb focus en Java, UI/UX i IA & Big Data. M’agrada convertir idees en aplicacions funcionals, clares i mantenibles.',
      extra:
        'Utilitzo la IA per millorar productivitat, documentar, explorar solucions i integrar eines quan aporten valor. Busco pràctiques o oportunitats júnior on créixer professionalment.',
    },
    cvSection: {
      titleStart: 'El meu',
      titleAccent: 'Currículum.',
      desc: 'Previsualitza i descarrega el meu currículum en PDF.',
      generalLabel: 'CV General',
      localizedLabel: 'CV en Català',
      langName: 'Català',
    },
    contact: {
      titleTop: 'CONTACTE',
      titleStart: 'PER A ROLS',
      titleAccent: 'JÚNIOR.',
      desc: 'Obert a pràctiques i oportunitats júnior en Java, UI/UX, IA & Big Data i frontend modern.',
    },
    footer: {
      githubAria: 'GitHub de Marc Muntané',
      linkedinAria: 'LinkedIn de Marc Muntané',
    },
  },
  es: {
    navItems: [
      { id: 'expertise', label: 'Stack' },
      { id: 'backend', label: 'Pilares' },
      { id: 'projects', label: 'Proyectos' },
      { id: 'experience', label: 'Formación' },
      { id: 'cv', label: 'CV' },
    ],
    labels: {
      goTo: 'Ir a',
      goToContact: 'Ir a contacto',
      talkButton: 'Contactar',
      switchLanguageTo: 'Cambiar idioma a',
      switchToLight: 'Cambiar a modo claro',
      switchToDark: 'Cambiar a modo oscuro',
      available: 'Disponible para roles junior',
      viewProjects: 'Ver proyectos destacados',
      viewStack: 'Ver stack técnico',
      contact: 'Contactar',
      openPdfPreviewOf: 'Abrir vista previa PDF de',
      openProjectOf: 'Abrir proyecto',
      openRepoOf: 'Abrir repositorio de',
      pdfPreviewOf: 'Vista previa PDF de',
      openPdf: 'Abrir PDF',
      closePreview: 'Cerrar vista previa',
      verifiedProject: 'Proyecto verificable',
      todoProject: 'Proyecto por añadir o verificar',
      detailBackend: 'Backend',
      detailFrontend: 'Frontend',
      detailData: 'Datos/API',
      detailLearned: 'Aprendizaje',
      repo: 'GitHub',
      demo: 'Demo',
    },
    hero: {
      titleLines: ['Desarrollador', 'Full-Stack', 'Junior'],
      subtitle:
        'Perfil técnico construido sobre tres pilares: Java para lógica y backend, UI/UX para interfaces claras, e IA & Big Data como línea de especialización.',
      mobileSubtitle: 'Java, UI/UX e IA & Big Data como tres pilares técnicos.',
      supporting:
        'Construyo aplicaciones combinando estructura de software, criterio visual y herramientas de IA. Busco crecer como desarrollador junior capaz de unir backend, frontend y soluciones data/AI aplicadas.',
      mobileSupporting:
        'Full-stack junior con base Java, criterio de interfaz e interés real por IA aplicada.',
      scroll: 'Scroll',
    },
    expertise: {
      titleStart: 'Mi Stack',
      titleAccent: 'Técnico.',
      desc:
        'Organizado alrededor de los tres pilares del perfil: Java, UI/UX e IA & Big Data, con datos y herramientas como soporte.',
      groups: getStackGroups('es'),
    },
    backend: {
      titleStart: 'Tres pilares',
      titleAccent: 'clave.',
      desc:
        'El portfolio se centra en Java, UI/UX e IA & Big Data. Java sostiene la base técnica, UI/UX aporta criterio de interfaz y la IA amplía la capacidad de automatizar, analizar e integrar soluciones.',
      body:
        'El objetivo es mostrar un perfil junior full-stack equilibrado: código, producto e IA aplicada sin exagerar experiencia profesional.',
      cards: [
        {
          title: 'Java y backend',
          text: 'Java, Spring Boot en refuerzo, APIs REST, servicios, controladores, DTOs, validación, persistencia y bases de datos.',
        },
        {
          title: 'UI/UX y frontend',
          text: 'Interfaces claras, responsive, experiencia de usuario, React, diseño visual y conexión real con APIs.',
        },
        {
          title: 'IA & Big Data',
          text: 'IA asistida, prompt engineering, proyectos de IA local, automatización, RAG básico y formación en IA & Big Data.',
        },
      ],
    },
    currentFocus: {
      titleStart: 'Actualmente',
      titleAccent: 'reforzando.',
      desc:
        'Ruta de aprendizaje para consolidar un perfil junior full-stack con base Java, UI/UX e IA aplicada.',
      items: getCurrentlyReinforcing('es'),
    },
    process: {
      titleStart: 'Proceso de',
      titleAccent: 'desarrollo.',
      desc: 'Forma de trabajo orientada a construir software mantenible, usable y bien documentado.',
      steps: [
        { title: 'Análisis de requisitos', desc: 'Entender el problema, usuarios, datos y reglas antes de escribir código.' },
        { title: 'Diseño de arquitectura', desc: 'Definir capas, responsabilidades, flujo de datos, API y estructura inicial.' },
        { title: 'Desarrollo backend', desc: 'Implementar lógica, endpoints REST, validación, persistencia y errores.' },
        { title: 'Integración frontend', desc: 'Conectar interfaces con APIs, estados, formularios y feedback visual.' },
        { title: 'Validación y pruebas', desc: 'Probar casos principales, endpoints, datos, errores y responsive.' },
        { title: 'Refactorización y documentación', desc: 'Mejorar nombres, estructura, duplicación, README y mantenibilidad.' },
      ],
    },
    experienceSection: {
      titleStart: 'Formación y',
      titleAccent: 'trayectoria.',
      desc: 'Base real: STUCOM, DAW/DAM, prácticas, sistemas, frontend, Java, UI/UX e IA.',
    },
    javaProjectsSection: {
      titleStart: 'Proyectos técnicos',
      titleAccent: 'destacados.',
      desc: 'Proyectos orientados a los tres pilares: Java/backend, UI/UX/frontend e IA & Big Data.',
      projects: COMMON_JAVA_PROJECTS.es,
    },
    projectsSection: {
      titleTop: 'Proyectos',
      titleBottom: 'Destacados.',
      desc: 'Selección equilibrada entre Java/backend, UI/UX/frontend e IA & Big Data.',
    },
    about: {
      titleStart: 'Sobre',
      titleAccent: 'mí.',
      desc:
        'Soy desarrollador Full-Stack Junior con foco en Java, UI/UX e IA & Big Data. Me gusta convertir ideas en aplicaciones funcionales, claras y mantenibles.',
      extra:
        'Uso IA para mejorar productividad, documentar, explorar soluciones e integrar herramientas cuando aportan valor. Busco prácticas u oportunidades junior donde pueda crecer profesionalmente.',
    },
    cvSection: {
      titleStart: 'Mi',
      titleAccent: 'Currículum.',
      desc: 'Previsualiza y descarga mi currículum en PDF.',
      generalLabel: 'CV General',
      localizedLabel: 'CV en Español',
      langName: 'Español',
    },
    contact: {
      titleTop: 'CONTACTO',
      titleStart: 'PARA ROLES',
      titleAccent: 'JUNIOR.',
      desc: 'Abierto a prácticas y oportunidades junior en Java, UI/UX, IA & Big Data y frontend moderno.',
    },
    footer: {
      githubAria: 'GitHub de Marc Muntané',
      linkedinAria: 'LinkedIn de Marc Muntané',
    },
  },
  en: {
    navItems: [
      { id: 'expertise', label: 'Stack' },
      { id: 'backend', label: 'Pillars' },
      { id: 'projects', label: 'Projects' },
      { id: 'experience', label: 'Training' },
      { id: 'cv', label: 'CV' },
    ],
    labels: {
      goTo: 'Go to',
      goToContact: 'Go to contact',
      talkButton: 'Contact',
      switchLanguageTo: 'Switch language to',
      switchToLight: 'Switch to light mode',
      switchToDark: 'Switch to dark mode',
      available: 'Open to junior roles',
      viewProjects: 'View featured projects',
      viewStack: 'View technical stack',
      contact: 'Contact',
      openPdfPreviewOf: 'Open PDF preview of',
      openProjectOf: 'Open project',
      openRepoOf: 'Open repository for',
      pdfPreviewOf: 'PDF preview of',
      openPdf: 'Open PDF',
      closePreview: 'Close preview',
      verifiedProject: 'Verifiable project',
      todoProject: 'Project to add or verify',
      detailBackend: 'Backend',
      detailFrontend: 'Frontend',
      detailData: 'Data/API',
      detailLearned: 'What I learned',
      repo: 'GitHub',
      demo: 'Demo',
    },
    hero: {
      titleLines: ['Junior', 'Full-Stack', 'Developer'],
      subtitle:
        'Technical profile built on three pillars: Java for logic and backend, UI/UX for clear interfaces, and AI & Big Data as a specialization path.',
      mobileSubtitle: 'Java, UI/UX, and AI & Big Data as three technical pillars.',
      supporting:
        'I build applications by combining software structure, visual judgment, and AI tools. I aim to grow as a junior developer who can connect backend, frontend, and applied data/AI solutions.',
      mobileSupporting:
        'Junior full-stack profile with a Java base, interface judgment, and a real interest in applied AI.',
      scroll: 'Scroll',
    },
    expertise: {
      titleStart: 'My Technical',
      titleAccent: 'Stack.',
      desc:
        'Organized around the profile’s three pillars: Java, UI/UX, and AI & Big Data, supported by databases and tools.',
      groups: getStackGroups('en'),
    },
    backend: {
      titleStart: 'Three core',
      titleAccent: 'pillars.',
      desc:
        'The portfolio focuses on Java, UI/UX, and AI & Big Data. Java supports the technical base, UI/UX adds interface judgment, and AI expands my ability to automate, analyze, and integrate solutions.',
      body:
        'The goal is to show a balanced junior full-stack profile: code, product thinking, and applied AI without overstating professional experience.',
      cards: [
        {
          title: 'Java and backend',
          text: 'Java, Spring Boot in progress, REST APIs, services, controllers, DTOs, validation, persistence, and databases.',
        },
        {
          title: 'UI/UX and frontend',
          text: 'Clear interfaces, responsive layouts, user experience, React, visual design, and real API connections.',
        },
        {
          title: 'AI & Big Data',
          text: 'AI-assisted work, prompt engineering, local AI projects, automation, basic RAG, and AI & Big Data training.',
        },
      ],
    },
    currentFocus: {
      titleStart: 'Currently',
      titleAccent: 'strengthening.',
      desc:
        'A learning path to consolidate a junior full-stack profile with Java, UI/UX, and applied AI foundations.',
      items: getCurrentlyReinforcing('en'),
    },
    process: {
      titleStart: 'Development',
      titleAccent: 'process.',
      desc: 'A workflow focused on maintainable, usable, and well-documented software.',
      steps: [
        { title: 'Requirements analysis', desc: 'Understand the problem, users, data, and rules before writing code.' },
        { title: 'Architecture design', desc: 'Define layers, responsibilities, data flow, API, and initial structure.' },
        { title: 'Backend development', desc: 'Implement logic, REST endpoints, validation, persistence, and errors.' },
        { title: 'Frontend integration', desc: 'Connect interfaces with APIs, state, forms, and visual feedback.' },
        { title: 'Validation and testing', desc: 'Test main flows, endpoints, data, errors, and responsive behavior.' },
        { title: 'Refactoring and documentation', desc: 'Improve naming, structure, duplication, README, and maintainability.' },
      ],
    },
    experienceSection: {
      titleStart: 'Training and',
      titleAccent: 'journey.',
      desc: 'Real foundation: STUCOM, DAW/DAM, internships, systems, frontend, Java, UI/UX, and AI.',
    },
    javaProjectsSection: {
      titleStart: 'Featured technical',
      titleAccent: 'projects.',
      desc: 'Projects aligned with the three pillars: Java/backend, UI/UX/frontend, and AI & Big Data.',
      projects: COMMON_JAVA_PROJECTS.en,
    },
    projectsSection: {
      titleTop: 'Featured',
      titleBottom: 'Projects.',
      desc: 'A balanced selection across Java/backend, UI/UX/frontend, and AI & Big Data.',
    },
    about: {
      titleStart: 'About',
      titleAccent: 'me.',
      desc:
        'I am a Junior Full-Stack Developer focused on Java, UI/UX, and AI & Big Data. I enjoy turning ideas into functional, clear, and maintainable applications.',
      extra:
        'I use AI to improve productivity, document work, explore solutions, and integrate tools when they add value. I am looking for internships or junior opportunities where I can grow professionally.',
    },
    cvSection: {
      titleStart: 'My',
      titleAccent: 'Resume.',
      desc: 'Preview and download my resume as a PDF.',
      generalLabel: 'General CV',
      localizedLabel: 'CV in English',
      langName: 'English',
    },
    contact: {
      titleTop: 'CONTACT',
      titleStart: 'FOR JUNIOR',
      titleAccent: 'ROLES.',
      desc: 'Open to internships and junior opportunities in Java, UI/UX, AI & Big Data, and modern frontend.',
    },
    footer: {
      githubAria: 'Marc Muntané on GitHub',
      linkedinAria: 'Marc Muntané on LinkedIn',
    },
  },
};

export const CONTENT_BY_LANGUAGE = Object.fromEntries(
  Object.entries(LOCALE_DATA).map(([language, locale]) => [
    language,
    {
      ...locale,
      experienceItems: getExperienceItems(language),
      projects: buildLocalizedProjects(language),
    },
  ])
);
