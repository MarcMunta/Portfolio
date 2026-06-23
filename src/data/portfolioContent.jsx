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
      { id: 'role-paths', label: 'Rutes' },
      { id: 'expertise', label: 'Stack' },
      { id: 'candidate-signal', label: 'Treball' },
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
      viewPaths: 'Tria ruta',
      viewProjects: 'Projectes',
      viewStack: 'Stack',
      viewWork: 'Com treballo',
      contact: 'Contactar',
      roleFit: 'Rol',
      roleProof: 'Prova',
      roleSignal: 'Senyal',
      roleCta: 'Veure proves',
      projectFit: 'Encaixa per',
      projectProof: 'Prova visible',
      projectProofPdf: 'PDF tècnic',
      projectProofRepo: 'GitHub',
      projectProofDemo: 'Demo',
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
      titleLines: ['IA & Big Data', 'React UI/UX', 'Java Spring Boot'],
      subtitle:
        'IA aplicada, dades, interfícies clares i backend Java com a base tècnica.',
      mobileSubtitle: 'IA, React/UI/UX i Java/Spring Boot.',
      supporting:
        'Tres rutes, un perfil: automatització útil, experiència d’usuari clara i APIs mantenibles.',
      mobileSupporting:
        'IA aplicada, UI clara i backend Java.',
      scroll: 'Scroll',
    },
    rolePaths: {
      titleStart: 'Tria la',
      titleAccent: 'lectura.',
      desc:
        'Tres portes d’entrada segons el rol que vols cobrir. Mateix perfil: aprenc ràpid, cuido el detall i baixo idees a producte.',
      routes: [
        {
          key: 'ai',
          title: 'IA & Big Data',
          fit: 'Per equips que busquen algú amb criteri tècnic, curiositat real per IA i base de dades.',
          proof: 'Vortex: IA local amb React, API Python, RAG bàsic, memòria local i permisos visibles.',
          signal: 'Aporto automatització, documentació clara i capacitat d’explorar solucions sense perdre el producte.',
          target: 'projects',
        },
        {
          key: 'ui',
          title: 'React UI/UX',
          fit: 'Per productes que necessiten interfícies clares, ordre visual i experiència responsive.',
          proof: 'Aquest portfolio: React, Next.js, Tailwind, GSAP, multidioma, SEO i dades separades.',
          signal: 'Penso en estats, jerarquia, lectura ràpida i petits detalls que fan que la web sembli cuidada.',
          target: 'projects',
        },
        {
          key: 'java',
          title: 'Java Spring Boot',
          fit: 'Per equips que valoren backend mantenible, APIs, persistència i estructura.',
          proof: 'Fichestu Backend: Spring Boot, JWT, WebSocket, JPA/Flyway, MySQL/Supabase i desplegament.',
          signal: 'Treballo amb responsabilitat: separar capes, validar dades, documentar decisions i deixar una base neta.',
          target: 'projects',
        },
      ],
    },
    expertise: {
      titleStart: 'El meu Stack',
      titleAccent: 'Tècnic.',
      desc:
        'Tres línies clares: IA & Big Data, React/UI/UX i Java/Spring Boot.',
      groups: getStackGroups('ca'),
    },
    backend: {
      titleStart: 'Tres línies',
      titleAccent: 'clares.',
      desc:
        'El portfolio prioritza IA aplicada, producte visual i backend Java. Menys etiquetes, més evidència.',
      body:
        'Projectes reals, decisions visibles i una direcció tècnica neta.',
      cards: [
        {
          title: 'IA & Big Data',
          text: 'IA aplicada, automatització, RAG bàsic, anàlisi de dades i formació especialitzada.',
        },
        {
          title: 'React i UI/UX',
          text: 'Interfícies netes, responsive, components React i criteri visual orientat a usuari.',
        },
        {
          title: 'Java i Spring Boot',
          text: 'Java, Spring Boot, APIs REST, persistència, validació, testing i bases de dades.',
        },
      ],
    },
    candidateSignal: {
      titleStart: 'Forma de',
      titleAccent: 'treballar.',
      desc:
        'El que vull transmetre quan algú entra al portfolio: criteri, cura, comunicació i ganes reals d’aportar.',
      signals: [
        {
          title: 'Aprenentatge ràpid',
          text: 'Entenc el problema, valido el camí i baixo a codi sense perdre context.',
        },
        {
          title: 'Criteri de producte',
          text: 'Cuido la interfície, els estats i la claredat perquè l’usuari no hagi d’endevinar.',
        },
        {
          title: 'Treball ordenat',
          text: 'Separo responsabilitats, documento decisions i deixo el projecte fàcil de continuar.',
        },
        {
          title: 'Comunicació clara',
          text: 'Explico decisions, límits i següents passos sense inflar el que encara estic aprenent.',
        },
      ],
    },
    currentFocus: {
      titleStart: 'Actualment',
      titleAccent: 'reforçant.',
      desc:
        'Focus pràctic: IA, React/UI i backend Java.',
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
      desc: 'Base real: IA en formació, frontend, Java, STUCOM, DAW/DAM, pràctiques i sistemes.',
    },
    javaProjectsSection: {
      titleStart: 'Projectes tècnics',
      titleAccent: 'destacats.',
      desc: 'Projectes alineats amb IA & Big Data, React/UI/UX i Java/Spring Boot.',
      projects: COMMON_JAVA_PROJECTS.ca,
    },
    projectsSection: {
      titleTop: 'Projectes',
      titleBottom: 'Destacats.',
      desc: 'Una selecció curta per veure IA, interfície i backend amb claredat.',
    },
    about: {
      titleStart: 'Sobre',
      titleAccent: 'mi.',
      desc:
        'Soc desenvolupador júnior enfocat en IA & Big Data, React/UI/UX i Java Spring Boot.',
      extra:
        'Busco pràctiques o oportunitats júnior on construir productes simples, útils i ben acabats.',
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
      desc: 'Obert a pràctiques i oportunitats júnior en IA & Big Data, React/UI/UX i Java Spring Boot.',
    },
    footer: {
      githubAria: 'GitHub de Marc Muntané',
      linkedinAria: 'LinkedIn de Marc Muntané',
    },
  },
  es: {
    navItems: [
      { id: 'role-paths', label: 'Rutas' },
      { id: 'expertise', label: 'Stack' },
      { id: 'candidate-signal', label: 'Trabajo' },
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
      viewPaths: 'Elige ruta',
      viewProjects: 'Proyectos',
      viewStack: 'Stack',
      viewWork: 'Cómo trabajo',
      contact: 'Contactar',
      roleFit: 'Rol',
      roleProof: 'Prueba',
      roleSignal: 'Señal',
      roleCta: 'Ver pruebas',
      projectFit: 'Encaja para',
      projectProof: 'Prueba visible',
      projectProofPdf: 'PDF técnico',
      projectProofRepo: 'GitHub',
      projectProofDemo: 'Demo',
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
      titleLines: ['IA & Big Data', 'React UI/UX', 'Java Spring Boot'],
      subtitle:
        'IA aplicada, datos, interfaces claras y backend Java como base técnica.',
      mobileSubtitle: 'IA, React/UI/UX y Java/Spring Boot.',
      supporting:
        'Tres rutas, un perfil: automatización útil, experiencia de usuario clara y APIs mantenibles.',
      mobileSupporting:
        'IA aplicada, UI clara y backend Java.',
      scroll: 'Scroll',
    },
    rolePaths: {
      titleStart: 'Elige tu',
      titleAccent: 'lectura.',
      desc:
        'Tres puertas de entrada según el rol que quieres cubrir. Mismo perfil: aprendo rápido, cuido el detalle y bajo ideas a producto.',
      routes: [
        {
          key: 'ai',
          title: 'IA & Big Data',
          fit: 'Para equipos que buscan criterio técnico, curiosidad real por IA y base de datos.',
          proof: 'Vortex: IA local con React, API Python, RAG básico, memoria local y permisos visibles.',
          signal: 'Aporto automatización, documentación clara y capacidad de explorar soluciones sin perder el producto.',
          target: 'projects',
        },
        {
          key: 'ui',
          title: 'React UI/UX',
          fit: 'Para productos que necesitan interfaces claras, orden visual y experiencia responsive.',
          proof: 'Este portfolio: React, Next.js, Tailwind, GSAP, multidioma, SEO y datos separados.',
          signal: 'Pienso en estados, jerarquía, lectura rápida y pequeños detalles que hacen que la web parezca cuidada.',
          target: 'projects',
        },
        {
          key: 'java',
          title: 'Java Spring Boot',
          fit: 'Para equipos que valoran backend mantenible, APIs, persistencia y estructura.',
          proof: 'Fichestu Backend: Spring Boot, JWT, WebSocket, JPA/Flyway, MySQL/Supabase y despliegue.',
          signal: 'Trabajo con responsabilidad: separar capas, validar datos, documentar decisiones y dejar base limpia.',
          target: 'projects',
        },
      ],
    },
    expertise: {
      titleStart: 'Mi Stack',
      titleAccent: 'Técnico.',
      desc:
        'Tres líneas claras: IA & Big Data, React/UI/UX y Java/Spring Boot.',
      groups: getStackGroups('es'),
    },
    backend: {
      titleStart: 'Tres líneas',
      titleAccent: 'claras.',
      desc:
        'El portfolio prioriza IA aplicada, producto visual y backend Java. Menos etiquetas, más evidencia.',
      body:
        'Proyectos reales, decisiones visibles y una dirección técnica limpia.',
      cards: [
        {
          title: 'IA & Big Data',
          text: 'IA aplicada, automatización, RAG básico, análisis de datos y formación especializada.',
        },
        {
          title: 'React y UI/UX',
          text: 'Interfaces limpias, responsive, componentes React y criterio visual orientado a usuario.',
        },
        {
          title: 'Java y Spring Boot',
          text: 'Java, Spring Boot, APIs REST, persistencia, validación, testing y bases de datos.',
        },
      ],
    },
    candidateSignal: {
      titleStart: 'Forma de',
      titleAccent: 'trabajar.',
      desc:
        'Lo que quiero transmitir cuando alguien entra al portfolio: criterio, cuidado, comunicación y ganas reales de aportar.',
      signals: [
        {
          title: 'Aprendizaje rápido',
          text: 'Entiendo el problema, valido el camino y bajo a código sin perder contexto.',
        },
        {
          title: 'Criterio de producto',
          text: 'Cuido la interfaz, los estados y la claridad para que el usuario no tenga que adivinar.',
        },
        {
          title: 'Trabajo ordenado',
          text: 'Separo responsabilidades, documento decisiones y dejo el proyecto fácil de continuar.',
        },
        {
          title: 'Comunicación clara',
          text: 'Explico decisiones, límites y siguientes pasos sin inflar lo que todavía estoy aprendiendo.',
        },
      ],
    },
    currentFocus: {
      titleStart: 'Actualmente',
      titleAccent: 'reforzando.',
      desc:
        'Focus práctico: IA, React/UI y backend Java.',
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
      desc: 'Base real: IA en formación, frontend, Java, STUCOM, DAW/DAM, prácticas y sistemas.',
    },
    javaProjectsSection: {
      titleStart: 'Proyectos técnicos',
      titleAccent: 'destacados.',
      desc: 'Proyectos alineados con IA & Big Data, React/UI/UX y Java/Spring Boot.',
      projects: COMMON_JAVA_PROJECTS.es,
    },
    projectsSection: {
      titleTop: 'Proyectos',
      titleBottom: 'Destacados.',
      desc: 'Una selección corta para ver IA, interfaz y backend con claridad.',
    },
    about: {
      titleStart: 'Sobre',
      titleAccent: 'mí.',
      desc:
        'Soy desarrollador junior enfocado en IA & Big Data, React/UI/UX y Java Spring Boot.',
      extra:
        'Busco prácticas u oportunidades junior donde construir productos simples, útiles y bien acabados.',
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
      desc: 'Abierto a prácticas y oportunidades junior en IA & Big Data, React/UI/UX y Java Spring Boot.',
    },
    footer: {
      githubAria: 'GitHub de Marc Muntané',
      linkedinAria: 'LinkedIn de Marc Muntané',
    },
  },
  en: {
    navItems: [
      { id: 'role-paths', label: 'Paths' },
      { id: 'expertise', label: 'Stack' },
      { id: 'candidate-signal', label: 'Work' },
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
      viewPaths: 'Choose path',
      viewProjects: 'Projects',
      viewStack: 'Stack',
      viewWork: 'How I work',
      contact: 'Contact',
      roleFit: 'Role',
      roleProof: 'Proof',
      roleSignal: 'Signal',
      roleCta: 'See proof',
      projectFit: 'Fits',
      projectProof: 'Visible proof',
      projectProofPdf: 'Technical PDF',
      projectProofRepo: 'GitHub',
      projectProofDemo: 'Demo',
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
      titleLines: ['AI & Big Data', 'React UI/UX', 'Java Spring Boot'],
      subtitle:
        'Applied AI, data, clear interfaces, and Java backend as a technical base.',
      mobileSubtitle: 'AI, React/UI/UX, and Java/Spring Boot.',
      supporting:
        'Three paths, one profile: useful automation, clear user experience, and maintainable APIs.',
      mobileSupporting:
        'Applied AI, clear UI, and Java backend.',
      scroll: 'Scroll',
    },
    rolePaths: {
      titleStart: 'Choose your',
      titleAccent: 'path.',
      desc:
        'Three entry points by hiring need. Same profile: fast learning, care for details, and ideas turned into product.',
      routes: [
        {
          key: 'ai',
          title: 'AI & Big Data',
          fit: 'For teams looking for technical judgment, real AI curiosity, and a data foundation.',
          proof: 'Vortex: local AI with React, Python API, basic RAG, local memory, and visible permissions.',
          signal: 'I bring automation, clear documentation, and the ability to explore solutions without losing product context.',
          target: 'projects',
        },
        {
          key: 'ui',
          title: 'React UI/UX',
          fit: 'For products that need clear interfaces, visual order, and responsive experience.',
          proof: 'This portfolio: React, Next.js, Tailwind, GSAP, multilingual content, SEO, and separated data.',
          signal: 'I think about states, hierarchy, fast reading, and small details that make a web experience feel cared for.',
          target: 'projects',
        },
        {
          key: 'java',
          title: 'Java Spring Boot',
          fit: 'For teams that value maintainable backend work, APIs, persistence, and structure.',
          proof: 'Fichestu Backend: Spring Boot, JWT, WebSocket, JPA/Flyway, MySQL/Supabase, and deployment.',
          signal: 'I work responsibly: separated layers, validated data, documented decisions, and a clean base.',
          target: 'projects',
        },
      ],
    },
    expertise: {
      titleStart: 'My Technical',
      titleAccent: 'Stack.',
      desc:
        'Three clear lines: AI & Big Data, React/UI/UX, and Java/Spring Boot.',
      groups: getStackGroups('en'),
    },
    backend: {
      titleStart: 'Three clear',
      titleAccent: 'lines.',
      desc:
        'The portfolio prioritizes applied AI, visual product work, and Java backend. Fewer labels, more evidence.',
      body:
        'Real projects, visible decisions, and a clean technical direction.',
      cards: [
        {
          title: 'AI & Big Data',
          text: 'Applied AI, automation, basic RAG, data analysis, and specialized training.',
        },
        {
          title: 'React and UI/UX',
          text: 'Clean interfaces, responsive layouts, React components, and user-focused visual judgment.',
        },
        {
          title: 'Java and Spring Boot',
          text: 'Java, Spring Boot, REST APIs, persistence, validation, testing, and databases.',
        },
      ],
    },
    candidateSignal: {
      titleStart: 'How I',
      titleAccent: 'work.',
      desc:
        'The impression I want this portfolio to leave: judgment, care, communication, and real motivation to contribute.',
      signals: [
        {
          title: 'Fast learning',
          text: 'I understand the problem, validate the path, and move into code without losing context.',
        },
        {
          title: 'Product judgment',
          text: 'I care about interface states and clarity so users do not have to guess.',
        },
        {
          title: 'Organized work',
          text: 'I separate responsibilities, document decisions, and leave projects easy to continue.',
        },
        {
          title: 'Clear communication',
          text: 'I explain decisions, limits, and next steps without overstating what I am still learning.',
        },
      ],
    },
    currentFocus: {
      titleStart: 'Currently',
      titleAccent: 'strengthening.',
      desc:
        'Practical focus: AI, React/UI, and Java backend.',
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
      desc: 'Real foundation: AI training, frontend, Java, STUCOM, DAW/DAM, internships, and systems.',
    },
    javaProjectsSection: {
      titleStart: 'Featured technical',
      titleAccent: 'projects.',
      desc: 'Projects aligned with AI & Big Data, React/UI/UX, and Java/Spring Boot.',
      projects: COMMON_JAVA_PROJECTS.en,
    },
    projectsSection: {
      titleTop: 'Featured',
      titleBottom: 'Projects.',
      desc: 'A short selection showing AI, interface work, and backend clearly.',
    },
    about: {
      titleStart: 'About',
      titleAccent: 'me.',
      desc:
        'I am a junior developer focused on AI & Big Data, React/UI/UX, and Java Spring Boot.',
      extra:
        'I am looking for internships or junior opportunities to build simple, useful, polished products.',
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
      desc: 'Open to internships and junior opportunities in AI & Big Data, React/UI/UX, and Java Spring Boot.',
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
