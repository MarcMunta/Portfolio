import type { Locale, Project, TranslationBundle } from "./types";

const social = {
  github: "https://github.com/MarcMunta",
  linkedin: "https://www.linkedin.com/in/marc-muntan%C3%A9-clar%C3%A0-ab6a0a276/",
  x: "",
  email: "marcmclara@gmail.com",
};

const esProjects: Project[] = [
  {
    slug: "trabajo-sintesis",
    name: "Trabajo anual síntesis",
    tagline: "Documentación integral de servicios de TI y automatización con Arduino",
    role: "Estudiante DAW (STUCOM)",
    category: "multiplataforma",
    categoryLabel: "Multiplataforma",
    stack: ["pfSense", "Active Directory", "Arduino", "Apache"],
    highlights: [
      "DHCP, DNS y VLANs coordinados",
      "Control de accesos con Arduino",
      "Manual paso a paso orientado a seguridad",
    ],
    summary:
      "Proyecto final de grado superior que integra servicios de red críticos: DHCP, DNS, Active Directory y servidores web. Incluye automatización hardware con Arduino para control de accesos físicos.",
    description: [
      "Arquitectura de red completa con segmentación de servicios, definición de permisos de usuario y planificación de interconexión entre sistemas críticos.",
      "Implementación de pfSense como firewall perimetral, configuración de Active Directory para gestión centralizada de usuarios, y despliegue de servidores web y proxy con documentación técnica detallada.",
      "Integración de sistema Arduino para automatización de control de accesos físicos, con documentación completa para futuras expansiones y mantenimiento.",
    ],
    cover: "/Portfolio/images/sintesis.svg",
    gallery: [
      { src: "/Portfolio/images/sintesis-documentacion.svg", alt: "Esquema de redes para el trabajo de síntesis" },
      { src: "/Portfolio/images/sintesis-servicios.svg", alt: "Resumen de servicios configurados con pfSense y Active Directory" },
      { src: "/Portfolio/images/sintesis-arduino.svg", alt: "Módulo Arduino para control de accesos" },
    ],
    links: {
      case: "https://marcmuntane.com/wp-content/uploads/2025/01/SINTESIS-v8.pdf",
    },
  },
  {
    slug: "firewall-pfsense",
    name: "Firewall con pfSense",
    tagline: "Instalación y puesta en marcha de pfSense como gateway seguro",
    role: "Administrador de redes",
    category: "multiplataforma",
    categoryLabel: "Multiplataforma",
    stack: ["pfSense", "DHCP", "DNS"],
    highlights: [
      "Configuración LAN/WAN segmentada",
      "Servidor DHCP y DNS integrados",
      "Pruebas de conectividad documentadas",
    ],
    summary:
      "Proyecto académico dedicado a desplegar pfSense en máquina virtual para controlar el tráfico de red, servir DHCP y DNS y garantizar el acceso a Internet desde la LAN.",
    description: [
      "Instalé pfSense desde cero en un entorno virtualizado, asegurando la asignación correcta de interfaces WAN y LAN.",
      "Definí reglas de cortafuegos, DHCP y DNS para ofrecer servicios centralizados y mantener trazabilidad sobre el tráfico.",
      "Validé la conectividad con diferentes equipos de la red, documentando incidencias y resoluciones para futuras iteraciones.",
    ],
    cover: "/Portfolio/images/firewall.svg",
    gallery: [
      { src: "/Portfolio/images/firewall-dashboard.svg", alt: "Panel de pfSense con reglas de firewall" },
      { src: "/Portfolio/images/firewall-dhcp.svg", alt: "Configuración de DHCP y DNS dentro de pfSense" },
      { src: "/Portfolio/images/firewall-test.svg", alt: "Pruebas de conectividad desde la red LAN" },
    ],
    links: {
      case: "https://marcmuntane.com/wp-content/uploads/2025/02/Firewall.pdf",
    },
  },
  {
    slug: "curriculum-digital",
    name: "Currículum digital",
    tagline: "Sitio personal en WordPress con portfolio y recursos descargables",
    role: "Autor",
    category: "web",
    categoryLabel: "Web",
    stack: ["WordPress", "HTML", "CSS"],
    highlights: [
      "Diseño responsive multi sección",
      "Formulario de contacto accesible",
      "Descarga directa de CV y documentación",
    ],
    summary:
      "marcmuntane.com reúne mi biografía, experiencia y proyectos en un entorno WordPress optimizado para compartir recursos y contacto.",
    description: [
      "Organizo la información personal y académica en secciones claras con animaciones suaves y timeline cronológico.",
      "Integro formularios accesibles, enlaces a redes y un mapa embebido para contextualizar la ubicación y disponibilidad.",
      "Mantengo actualizados los recursos descargables, incluyendo CV y documentación técnica generada durante el grado superior.",
    ],
    cover: "/Portfolio/images/curriculum.svg",
    gallery: [
      { src: "/Portfolio/images/curriculum-home.svg", alt: "Vista general de la home de marcmuntane.com" },
      { src: "/Portfolio/images/curriculum-sobre-mi.svg", alt: "Sección Sobre mí con biografía y galería" },
      { src: "/Portfolio/images/curriculum-contacto.svg", alt: "Página de contacto con formulario y ubicación" },
    ],
    links: {
      live: "https://marcmuntane.com/",
    },
  },
];

const caProjects: Project[] = [
  {
    slug: "trabajo-sintesis",
    name: "Treball anual de síntesi",
    tagline: "Documentació integral de serveis TI i automatització amb Arduino",
    role: "Estudiant DAW (STUCOM)",
    category: "multiplataforma",
    categoryLabel: "Multiplataforma",
    stack: ["pfSense", "Active Directory", "Arduino", "Apache"],
    highlights: [
      "DHCP, DNS i VLANs coordinades",
      "Control d'accessos amb Arduino",
      "Manual pas a pas orientat a seguretat",
    ],
    summary:
      "Projecte final del grau superior on vaig documentar la configuració de serveis com DHCP, DNS, VLANs, Active Directory, servidors web i proxy, afegint automatització amb Arduino.",
    description: [
      "Vaig planificar la infraestructura de xarxa definint segments, permisos i fluxos de treball per assegurar connectivitat estable entre els serveis crítics.",
      "Vaig instal·lar i configurar pfSense juntament amb Active Directory, desplegant servidors web i proxy i registrant cada decisió de seguretat i manteniment.",
      "Vaig afegir un sistema d'accés i monitoratge basat en Arduino que estenia els serveis TI a la capa física, deixant documentat el procés per a futures millores.",
    ],
    cover: "/Portfolio/images/sintesis.svg",
    gallery: [
      { src: "/Portfolio/images/sintesis-documentacion.svg", alt: "Esquema de xarxes per al treball de síntesi" },
      { src: "/Portfolio/images/sintesis-servicios.svg", alt: "Resum de serveis configurats amb pfSense i Active Directory" },
      { src: "/Portfolio/images/sintesis-arduino.svg", alt: "Mòdul Arduino per al control d'accessos" },
    ],
    links: {
      case: "https://marcmuntane.com/wp-content/uploads/2025/01/SINTESIS-v8.pdf",
    },
  },
  {
    slug: "firewall-pfsense",
    name: "Firewall amb pfSense",
    tagline: "Instal·lació i posada en marxa de pfSense com a gateway segur",
    role: "Administrador de xarxes",
    category: "multiplataforma",
    categoryLabel: "Multiplataforma",
    stack: ["pfSense", "DHCP", "DNS"],
    highlights: [
      "Configuració LAN/WAN segmentada",
      "Servidor DHCP i DNS integrats",
      "Proves de connectivitat documentades",
    ],
    summary:
      "Projecte acadèmic dedicat a desplegar pfSense en màquina virtual per controlar el trànsit de xarxa, servir DHCP i DNS i garantir l'accés a Internet des de la LAN.",
    description: [
      "Vaig instal·lar pfSense des de zero en un entorn virtualitzat, assegurant l'assignació correcta d'interfícies WAN i LAN.",
      "Vaig definir regles de tallafoc, DHCP i DNS per oferir serveis centralitzats i mantenir traçabilitat sobre el trànsit.",
      "Vaig validar la connectivitat amb diferents equips de la xarxa, documentant incidències i resolucions per a futures iteracions.",
    ],
    cover: "/Portfolio/images/firewall.svg",
    gallery: [
      { src: "/Portfolio/images/firewall-dashboard.svg", alt: "Panell de pfSense amb regles de firewall" },
      { src: "/Portfolio/images/firewall-dhcp.svg", alt: "Configuració de DHCP i DNS dins de pfSense" },
      { src: "/Portfolio/images/firewall-test.svg", alt: "Proves de connectivitat des de la xarxa LAN" },
    ],
    links: {
      case: "https://marcmuntane.com/wp-content/uploads/2025/02/Firewall.pdf",
    },
  },
  {
    slug: "curriculum-digital",
    name: "Currículum digital",
    tagline: "Lloc personal en WordPress amb portfolio i recursos descarregables",
    role: "Autor",
    category: "web",
    categoryLabel: "Web",
    stack: ["WordPress", "HTML", "CSS"],
    highlights: [
      "Disseny responsive multisecció",
      "Formulari de contacte accessible",
      "Descàrrega directa de CV i documentació",
    ],
    summary:
      "marcmuntane.com reuneix la meva biografia, experiència i projectes en un entorn WordPress optimitzat per compartir recursos i contacte.",
    description: [
      "Organitzo la informació personal i acadèmica en seccions clares amb animacions suaus i línia temporal cronològica.",
      "Integro formularis accessibles, enllaços a xarxes i un mapa incrustat per contextualitzar la ubicació i disponibilitat.",
      "Mantinc actualitzats els recursos descarregables, incloent-hi CV i documentació tècnica generada durant el grau superior.",
    ],
    cover: "/Portfolio/images/curriculum.svg",
    gallery: [
      { src: "/Portfolio/images/curriculum-home.svg", alt: "Vista general de la home de marcmuntane.com" },
      { src: "/Portfolio/images/curriculum-sobre-mi.svg", alt: "Secció Sobre mi amb biografia i galeria" },
      { src: "/Portfolio/images/curriculum-contacto.svg", alt: "Pàgina de contacte amb formulari i ubicació" },
    ],
    links: {
      live: "https://marcmuntane.com/",
    },
  },
];

const enProjects: Project[] = [
  {
    slug: "trabajo-sintesis",
    name: "Annual capstone project",
    tagline: "End-to-end IT service documentation and Arduino automation",
    role: "Web dev student (STUCOM)",
    category: "multiplataforma",
    categoryLabel: "Multiplatform",
    stack: ["pfSense", "Active Directory", "Arduino", "Apache"],
    highlights: [
      "Coordinated DHCP, DNS & VLANs",
      "Arduino-powered access control",
      "Step-by-step security-focused manual",
    ],
    summary:
      "Final year project documenting the setup of services such as DHCP, DNS, VLANs, Active Directory, web and proxy servers, plus Arduino-based automation.",
    description: [
      "Planned the network infrastructure by defining segments, permissions and workflows to ensure stable connectivity between critical services.",
      "Installed and configured pfSense with Active Directory, deployed web and proxy servers and logged every security and maintenance decision.",
      "Added an Arduino-based access and monitoring system that extends IT services to the physical layer, leaving the process documented for future improvements.",
    ],
    cover: "/Portfolio/images/sintesis.svg",
    gallery: [
      { src: "/Portfolio/images/sintesis-documentacion.svg", alt: "Network diagram for the capstone project" },
      { src: "/Portfolio/images/sintesis-servicios.svg", alt: "Summary of services configured with pfSense and Active Directory" },
      { src: "/Portfolio/images/sintesis-arduino.svg", alt: "Arduino module for access control" },
    ],
    links: {
      case: "https://marcmuntane.com/wp-content/uploads/2025/01/SINTESIS-v8.pdf",
    },
  },
  {
    slug: "firewall-pfsense",
    name: "pfSense firewall",
    tagline: "Deploying pfSense as a secure gateway",
    role: "Network administrator",
    category: "multiplataforma",
    categoryLabel: "Multiplatform",
    stack: ["pfSense", "DHCP", "DNS"],
    highlights: [
      "Segmented LAN/WAN setup",
      "Integrated DHCP & DNS server",
      "Documented connectivity tests",
    ],
    summary:
      "Academic project focused on deploying pfSense in a virtual machine to control network traffic, serve DHCP and DNS and guarantee internet access from the LAN.",
    description: [
      "Installed pfSense from scratch in a virtualised environment, ensuring the correct assignment of WAN and LAN interfaces.",
      "Defined firewall, DHCP and DNS rules to offer centralised services and keep traffic traceable.",
      "Validated connectivity with different network devices, documenting incidents and fixes for future iterations.",
    ],
    cover: "/Portfolio/images/firewall.svg",
    gallery: [
      { src: "/Portfolio/images/firewall-dashboard.svg", alt: "pfSense dashboard with firewall rules" },
      { src: "/Portfolio/images/firewall-dhcp.svg", alt: "DHCP and DNS configuration inside pfSense" },
      { src: "/Portfolio/images/firewall-test.svg", alt: "Connectivity tests from the LAN network" },
    ],
    links: {
      case: "https://marcmuntane.com/wp-content/uploads/2025/02/Firewall.pdf",
    },
  },
  {
    slug: "curriculum-digital",
    name: "Digital résumé",
    tagline: "Personal WordPress site with portfolio and downloadable resources",
    role: "Author",
    category: "web",
    categoryLabel: "Web",
    stack: ["WordPress", "HTML", "CSS"],
    highlights: [
      "Responsive multi-section design",
      "Accessible contact form",
      "Direct CV and document download",
    ],
    summary:
      "marcmuntane.com gathers my biography, experience and projects in a WordPress environment optimised to share resources and contact.",
    description: [
      "Organise personal and academic information in clear sections with soft animations and a chronological timeline.",
      "Integrate accessible forms, social links and an embedded map to contextualise location and availability.",
      "Keep downloadable resources up to date, including my CV and technical documentation produced during the degree.",
    ],
    cover: "/Portfolio/images/curriculum.svg",
    gallery: [
      { src: "/Portfolio/images/curriculum-home.svg", alt: "Overview of the marcmuntane.com homepage" },
      { src: "/Portfolio/images/curriculum-sobre-mi.svg", alt: "About me section with biography and gallery" },
      { src: "/Portfolio/images/curriculum-contacto.svg", alt: "Contact page with form and location" },
    ],
    links: {
      live: "https://marcmuntane.com/",
    },
  },
];

const dictionaries: Record<Locale, TranslationBundle> = {
  es: {
    locale: "es",
    languageName: "Español",
    persona: {
      name: "Marc Muntané Clarà",
      title: "Desarrollador Web y Multiplataforma (DAW · DAM)",
      location: "Vilafranca del Penedès · Barcelona",
      shortBio:
        "Estudiante de Desarrollo de Aplicaciones Web y Multiplataforma en STUCOM que une documentación de servicios TI con interfaces centradas en la experiencia.",
      availability:
        "Abierto a prácticas y primeras oportunidades en desarrollo web y aplicaciones multiplataforma.",
      social,
    },
    navLinks: [
      { href: "/", label: "Inicio" },
      { href: "/projects", label: "Proyectos" },
      { href: "/about", label: "Sobre mí" },
      { href: "/contact", label: "Contacto" },
    ],
    contactChannels: [
      { label: "Email", value: social.email, href: `mailto:${social.email}` },
      { label: "GitHub", value: "@MarcMunta", href: social.github },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/marc-muntané-clarà-ab6a0a276",
        href: social.linkedin,
      },
    ],
    languageNames: { es: "Español", ca: "Catalán", en: "Inglés" },
    header: {
      contactCta: "Contactar",
      mobileMenuAria: "Abrir navegación",
      menuTitle: "Navegación",
    },
    footer: {
      updated: "Actualizado",
    },
    hero: {
      headline: "Desarrollo interfaces web y aplicaciones multiplataforma",
      description:
        "Especializado en crear interfaces funcionales y accesibles con React, WordPress y Flutter. Documentación técnica detallada incluida en cada proyecto para garantizar mantenibilidad.",
      primaryAction: "Ver proyectos web",
      secondaryAction: "Ver apps multiplataforma",
      tertiaryAction: "Descargar CV",
      cardLabel: "Stack en formación",
      cardStack: "React · WordPress · Flutter · CSS",
      cardDescription:
        "Desarrollo de interfaces responsivas y accesibles utilizando tecnologías modernas. Enfoque en experiencia de usuario y código mantenible.",
      scrollHintActive: "Scroll suave activado",
      scrollHintReduced: "Scroll suave (motion reducido)",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Soluciones web y aplicaciones multiplataforma centradas en el usuario",
      tagline: "Transformo requisitos técnicos complejos en interfaces intuitivas y accesibles.",
      description:
        "Mi experiencia combina administración de sistemas y documentación técnica con desarrollo frontend. Esta base me permite crear soluciones integrales que consideran tanto la arquitectura técnica como la experiencia del usuario final.",
      focusTitle: "Metodología de trabajo",
      focusDescription:
        "Aporto una perspectiva analítica al desarrollo de interfaces. Cada proyecto comienza con un análisis detallado de requisitos para diseñar soluciones escalables que respondan a objetivos empresariales claros.",
      focusAreas: [
        {
          title: "Colaboración interdisciplinaria",
          description:
            "Facilito la comunicación entre equipos técnicos y stakeholders no técnicos, traduciendo requisitos complejos en soluciones comprensibles y viables.",
          icon: "Network",
        },
        {
          title: "Análisis y resolución de problemas",
          description:
            "Identifico patrones en problemas complejos y desarrollo soluciones sistemáticas basadas en evidencia técnica y mejores prácticas de la industria.",
          icon: "Cpu",
        },
        {
          title: "Planificación técnica estratégica",
          description:
            "Evalúo arquitecturas y tecnologías considerando escalabilidad, mantenibilidad y recursos disponibles para maximizar el retorno de inversión.",
          icon: "NotebookPen",
        },
        {
          title: "Innovación con propósito",
          description:
            "Aplico tecnologías emergentes y patrones de diseño modernos para crear experiencias de usuario diferenciadas que resuelvan necesidades reales.",
          icon: "Boxes",
        },
      ],
      signature: {
        ribbon: "Firma personal",
        title: "Un atlas creativo para equipos curiosos",
        description:
          "Cada proyecto se acompaña de mapas visuales, glosarios y micro guías que hacen que la documentación se sienta viva y acogedora.",
        highlights: [
          { label: "Formatos", detail: "Doble entrega: mural en Figma y versión Notion enlazada" },
          { label: "Ritual", detail: "Sesión final con demo guiada y checklist imprimible" },
          { label: "Detalle favorito", detail: "Notas ilustradas en los márgenes para seguir el flujo" },
          { label: "Sensación", detail: "Entrega que mezcla estudio creativo y laboratorio" },
        ],
      },
      bioCard: {
        label: "Perfil profesional",
        highlight: "Desarrollador junior especializado en interfaces web y aplicaciones multiplataforma desde Barcelona.",
        paragraphs: [
          "Especializado en el desarrollo de interfaces que priorizan la experiencia del usuario final. Cada elemento de diseño responde a objetivos funcionales específicos.",
          "Experiencia en el desarrollo de flujos de usuario completos, desde la arquitectura de información hasta la implementación, con especial atención a estándares de accesibilidad.",
          "Stack tecnológico centrado en React, CSS moderno y animaciones optimizadas que mejoran la usabilidad sin comprometer el rendimiento.",
        ],
        quickFacts: [
          { label: "Ubicación", value: "Vilafranca del Penedès · Barcelona" },
          { label: "Formación actual", value: "Grado Superior DAW · DAM (STUCOM)" },
          { label: "Especialización", value: "Desarrollo web y aplicaciones multiplataforma" },
        ],
        currentTitle: "Competencias técnicas",
        currentItems: [
          "Desarrollo de aplicaciones web responsivas utilizando React, Next.js y TypeScript.",
          "Implementación de aplicaciones móviles multiplataforma con Flutter y integración de APIs.",
          "Diseño y desarrollo de interfaces accesibles siguiendo principios de UX/UI y WCAG.",
        ],
        marqueeLabel: "Stack tecnológico",
      },
      timelineTitle: "Recorrido formativo",
      timelineDescription:
        "Una línea temporal que une formación técnica, experiencia con clientes locales y voluntariado deportivo.",
    },
    aboutPage: {
      achievementsTitle: "Logros",
    },
    skills: {
      eyebrow: "Competencias",
      title: "Stack tecnológico en desarrollo",
      headline:
        "Formación especializada en desarrollo web, aplicaciones multiplataforma y administración de sistemas en STUCOM. Enfoque en soluciones bien documentadas y mantenibles.",
      primary: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "Flutter", "Flutter Web", "React Native", "React Web", "pfSense"],
      stacks: [
        {
          title: "Desarrollo web",
          items: ["HTML", "CSS", "JavaScript", "PHP"],
        },
        {
          title: "Aplicaciones multiplataforma",
          items: ["Flutter", "Flutter Web", "React Native", "React Web"],
        },
        {
          title: "Sistemas y redes",
          items: ["pfSense", "Active Directory", "VLANs", "DHCP/DNS"],
        },
        {
          title: "Herramientas y diseño",
          items: ["MySQL", "WordPress", "Figma", "Arduino"],
        },
      ],
    },
    multiplatform: {
      eyebrow: "Multiplataforma",
      title: "Apps que viajan de la web al móvil",
      description:
        "Desde Flutter hasta React/Next.js documento cómo reutilizar lógica y diseño entre web, mobile y escritorio sin perder coherencia.",
      capabilities: [
        {
          title: "Flutter",
          description:
            "Prototipos rápidos para Android/iOS/Web con widgets reutilizables, animaciones fluidas y pruebas integradas.",
          highlights: ["UIs responsivas", "Estado centralizado", "Integración Firebase", "Deploy web con Flutter"],
          mockupLabel: "Android · iOS · Web",
          accent: "from-sky-400/60 via-cyan-400/30 to-purple-500/60",
        },
        {
          title: "React · React Native",
          description:
            "Experiencia compartida entre apps Expo y sitios Next.js sincronizando componentes, estados y estilos.",
          highlights: ["Expo Router", "Componentes nativos", "React web con Next.js", "OTA updates"],
          mockupLabel: "Mobile · Web",
          accent: "from-blue-500/60 via-indigo-400/30 to-fuchsia-500/60",
        },
      ],
    },
    projectsSection: {
      eyebrow: "Proyectos",
      title: "Selección reciente",
      description:
        "Proyectos que combinan documentación técnica, desarrollo web y prototipos multiplataforma realizados durante el grado y prácticas.",
      viewAll: "Ver todos los proyectos",
      detailLabel: "Ver detalle",
      liveLabel: "Live",
      imageAltPrefix: "Imagen del proyecto",
    },
    projectsPage: {
      eyebrow: "Portfolio",
      title: "Proyectos",
      description:
        "Selecciona la categoría para descubrir proyectos técnicos: trabajos de síntesis con pfSense, despliegues de firewall y el sitio personal que mantengo con WordPress.",
      filters: {
        all: "Todos",
        web: "Web",
        multiplatform: "Multiplataforma",
      },
      categories: {
        web: "Web",
        multiplatform: "Multiplataforma",
      },
    },
    projectDetail: {
      live: "Ver live",
      code: "Código",
      case: "Case study",
      gallery: {
        previous: "Ver imagen anterior",
        next: "Ver imagen siguiente",
        goTo: "Ir a la imagen {{index}}",
      },
      notFound: "Proyecto no encontrado",
    },
    contactCTA: {
      eyebrow: "Colaboración",
      title: "¿Necesitas apoyo en desarrollo web o aplicaciones?",
      description:
        "Combino la formación técnica especializada con experiencia práctica en documentación de sistemas, mantenimiento de WordPress/PrestaShop y soporte técnico integral.",
      emailLabel: "Contacto profesional",
      button: "Iniciar conversación",
    },
    contactPage: {
      eyebrow: "Colaboremos",
      title: "Discutamos tu próximo proyecto",
      description:
        "Completa el formulario o contáctame directamente en marcmclara@gmail.com. Disponible para prácticas profesionales y posiciones junior en desarrollo web y aplicaciones multiplataforma, presencial en Cataluña o modalidad remota.",
      locationTitle: "Ubicación",
      locationSubtitle: "Vilafranca del Penedès, Barcelona",
      availabilityNote: "Disponible para trabajo presencial en Barcelona y alrededores, así como en modalidad remota.",
    },
    contactForm: {
      nameLabel: "Nombre",
      namePlaceholder: "Escribe tu nombre",
      emailLabel: "Email",
      emailPlaceholder: "tu@email.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntame sobre el proyecto, plazos, objetivos…",
      submitIdle: "Enviar mensaje",
      submitSending: "Enviando…",
      submitSuccess: "Enviado",
      feedback: {
        success: "Gracias {{name}}. Responderé en menos de 48h.",
        error: "Algo salió mal. Intenta de nuevo.",
        sending: "Preparando un mensaje bonito…",
      },
      errors: {
        name: "Introduce al menos 2 caracteres",
        email: "Email no válido",
        message: "Comparte más contexto (min 12 caracteres)",
      },
    },
    milestones: [
      {
        period: "2025-2026",
        title: "Erasmus+ · M5 Studios (Irlanda)",
        description:
          "Más de 350 horas de experiencia práctica desarrollando aplicaciones multiplataforma con Flutter, integrando mapas Mapbox, enfocándome en UI/UX y frontend con experiencia en backend.",
      },
      {
        period: "2023-2025",
        title: "Grado Superior · Desarrollo de Aplicaciones Web",
        description:
          "Estudios en STUCOM (Barcelona) profundizando en HTML, CSS, PHP, Java, MySQL y proyectos integrados orientados a la práctica.",
      },
      {
        period: "2021-2023",
        title: "Grado Medio · Sistemas microinformáticos y redes",
        description:
          "Primer contacto profesional con virtualización, soporte y despliegue de servicios para empresas locales en Vilafranca del Penedès.",
      },
      {
        period: "2008-2021",
        title: "Formación en Vilafranca del Penedès",
        description:
          "Educación en Estalella i Graells y Sant Josep antes de orientar mi carrera hacia la informática y el desarrollo web.",
      },
    ],
    achievements: [
      {
        title: "Prácticas DAW — Viascooter",
        year: "2023-2025",
        description:
          "Actualicé y mantuve sitios WordPress, PrestaShop y Shopify, gestionando hosting Nominalia, correos electrónicos y soporte a clientes del concesionario.",
      },
      {
        title: "Prácticas SMX — Gestinet",
        year: "2022-2023",
        description:
          "Más de 340 horas de soporte informático: montaje y reparación de equipos, asistencia sobre impresoras, servidores y Active Directory para empresas locales.",
      },
      {
        title: "Club Marc Bartra y JESPE",
        year: "2021-2024",
        description:
          "Entrenador y árbitro en el Alt Penedès, cultivando liderazgo, comunicación y gestión de grupos con niños y jóvenes.",
      },
    ],
    projects: esProjects,
    featuredProjects: esProjects.slice(0, 3),
  },
  ca: {
    locale: "ca",
    languageName: "Català",
    persona: {
      name: "Marc Muntané Clarà",
      title: "Desenvolupador Web i Multiplataforma (DAW · DAM)",
      location: "Vilafranca del Penedès · Barcelona",
      shortBio:
        "Estudiant de Desenvolupament d'Aplicacions Web i Multiplataforma a STUCOM que uneix documentació de serveis TI amb interfícies centrades en l'experiència.",
      availability:
        "Obert a pràctiques i primeres oportunitats en desenvolupament web i aplicacions multiplataforma.",
      social,
    },
    navLinks: [
      { href: "/", label: "Inici" },
      { href: "/projects", label: "Projectes" },
      { href: "/about", label: "Sobre mi" },
      { href: "/contact", label: "Contacte" },
    ],
    contactChannels: [
      { label: "Correu", value: social.email, href: `mailto:${social.email}` },
      { label: "GitHub", value: "@MarcMunta", href: social.github },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/marc-muntané-clarà-ab6a0a276",
        href: social.linkedin,
      },
    ],
    languageNames: { es: "Castellà", ca: "Català", en: "Anglès" },
    header: {
      contactCta: "Contactar",
      mobileMenuAria: "Obrir navegació",
      menuTitle: "Navegació",
    },
    footer: {
      updated: "Actualitzat",
    },
    hero: {
      headline: "Desenvolupo interfícies web i aplicacions multiplataforma",
      description:
        "Especialitzat en crear interfícies funcionals i accessibles amb React, WordPress i Flutter. Documentació tècnica detallada inclosa en cada projecte per garantir mantenibilitat.",
      primaryAction: "Veure projectes web",
      secondaryAction: "Veure apps multiplataforma",
      tertiaryAction: "Descarregar CV",
      cardLabel: "Stack en formació",
      cardStack: "React · WordPress · Flutter · CSS",
      cardDescription:
        "Desenvolupament d'interfícies responsives i accessibles utilitzant tecnologies modernes. Enfocament en experiència d'usuari i codi mantenible.",
      scrollHintActive: "Scroll suau activat",
      scrollHintReduced: "Scroll suau (motion reduït)",
    },
    about: {
      eyebrow: "Sobre mi",
      title: "Solucions web i aplicacions multiplataforma centrades en l'usuari",
      tagline: "Transformo requisits tècnics complexos en interfícies intuïtives i accessibles.",
      description:
        "La meva experiència combina administració de sistemes i documentació tècnica amb desenvolupament frontend. Aquesta base em permet crear solucions integrals que consideren tant l'arquitectura tècnica com l'experiència de l'usuari final.",
      focusTitle: "Metodologia de treball",
      focusDescription:
        "Aporto una perspectiva analítica al desenvolupament d'interfícies. Cada projecte comença amb una anàlisi detallada de requisits per dissenyar solucions escalables que responguin a objectius empresarials clars.",
      focusAreas: [
        {
          title: "Col·laboració i treball en equip",
          description:
            "Aporto idees creatives i facilito la comunicació entre perfils tècnics i no tècnics per assolir objectius comuns.",
          icon: "Network",
        },
        {
          title: "Resolució de problemes",
          description:
            "Analitzo situacions complexes, identifico solucions eficients i proposo alternatives innovadores basades en evidència.",
          icon: "Cpu",
        },
        {
          title: "Presa de decisions estratègiques",
          description:
            "Avaluo opcions tècniques considerant impacte, escalabilitat i recursos disponibles per maximitzar el valor empresarial.",
          icon: "NotebookPen",
        },
        {
          title: "Creativitat aplicada",
          description:
            "Combino coneixement tècnic amb pensament creatiu per desenvolupar solucions diferenciades i experiències d'usuari memorables.",
          icon: "Boxes",
        },
      ],
      signature: {
        ribbon: "Firma personal",
        title: "Un atles creatiu per a equips curiosos",
        description:
          "Cada projecte va acompanyat de mapes visuals, glossaris i microguies que mantenen la documentació viva i propera.",
        highlights: [
          { label: "Formats", detail: "Doble lliurament: mural a Figma i versió Notion enllaçada" },
          { label: "Ritual", detail: "Sessió final amb demo guiada i checklist imprimible" },
          { label: "Detall preferit", detail: "Notes il·lustrades als marges per seguir el flux" },
          { label: "Sensació", detail: "Entrega que barreja estudi creatiu i laboratori" },
        ],
      },
      bioCard: {
        label: "Biografia ràpida",
        highlight: "De Vilafranca del Penedès a projectes que uneixen documentació i disseny.",
        paragraphs: [
          "M'apassiona dissenyar interfícies que connectin realment amb les persones. Cada element visual té un propòsit clar.",
          "Gaudeixo creant experiències d'usuari fluides, des del primer clic fins a la interacció final, sempre pensant en accessibilitat.",
          "El meu enfocament està en el frontend: React, CSS modern i animacions que millorin l'experiència sense distreure del contingut.",
        ],
        quickFacts: [
          { label: "Ubicació", value: "Vilafranca del Penedès · Barcelona" },
          { label: "Formació actual", value: "Grau Superior DAW · DAM (STUCOM)" },
          { label: "Rol", value: "Desenvolupador web i multiplataforma en formació" },
        ],
        currentTitle: "Capacitats clau",
        currentItems: [
          "Desenvolupament d'aplicacions web i multiplataforma amb React i Flutter.",
          "Integració de sistemes i serveis backend amb bases de dades relacionals.",
          "Disseny d'interfícies centrades en experiència d'usuari i accessibilitat.",
        ],
  marqueeLabel: "Eines de confiança",
      },
      timelineTitle: "Recorregut formatiu",
      timelineDescription:
        "Una línia temporal que uneix formació tècnica, experiència amb clients locals i voluntariat esportiu.",
    },
    aboutPage: {
      achievementsTitle: "Reconeixements",
    },
    skills: {
      eyebrow: "Skills",
      title: "Stack tècnic en creixement",
      headline:
        "Formado a STUCOM combino desenvolupament web, aplicacions multiplataforma i administració de sistemes per entregar projectes funcionals i ben documentats.",
      primary: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "Flutter", "Flutter Web", "React Native", "React Web", "pfSense"],
      stacks: [
        {
          title: "Desenvolupament web",
          items: ["HTML", "CSS", "JavaScript", "PHP"],
        },
        {
          title: "Aplicacions multiplataforma",
          items: ["Flutter", "Flutter Web", "React Native", "React Web"],
        },
        {
          title: "Sistemes i xarxes",
          items: ["pfSense", "Active Directory", "VLANs", "DHCP/DNS"],
        },
        {
          title: "Eines i disseny",
          items: ["MySQL", "WordPress", "Figma", "Arduino"],
        },
      ],
    },
    multiplatform: {
      eyebrow: "Multiplataforma",
      title: "Apps que viatgen del web al mòbil",
      description:
        "De Flutter a React/Next.js documento com reutilitzar lògica i disseny entre web, mòbil i escriptori sense perdre coherència.",
      capabilities: [
        {
          title: "Flutter",
          description:
            "Prototips ràpids per a Android/iOS/Web amb widgets reutilitzables, animacions fluides i proves integrades.",
          highlights: ["Interfícies responsives", "Estat centralitzat", "Integració Firebase", "Deploy web amb Flutter"],
          mockupLabel: "Android · iOS · Web",
          accent: "from-sky-400/60 via-cyan-400/30 to-purple-500/60",
        },
        {
          title: "React · React Native",
          description:
            "Experiència compartida entre apps Expo i llocs Next.js sincronitzant components, estats i estils.",
          highlights: ["Expo Router", "Components nadius", "React web amb Next.js", "OTA updates"],
          mockupLabel: "Mobile · Web",
          accent: "from-blue-500/60 via-indigo-400/30 to-fuchsia-500/60",
        },
      ],
    },
    projectsSection: {
      eyebrow: "Projectes",
      title: "Selecció recent",
      description:
        "Projectes que combinen documentació tècnica, desenvolupament web i prototips multiplataforma realitzats durant el grau i les pràctiques.",
      viewAll: "Veure tots els projectes",
      detailLabel: "Veure detall",
      liveLabel: "Live",
      imageAltPrefix: "Imatge del projecte",
    },
    projectsPage: {
      eyebrow: "Portfolio",
      title: "Projectes",
      description:
        "Selecciona la categoria per descobrir projectes tècnics: treballs de síntesi amb pfSense, desplegaments de firewall i el lloc personal que mantinc amb WordPress.",
      filters: {
        all: "Tots",
        web: "Web",
        multiplatform: "Multiplataforma",
      },
      categories: {
        web: "Web",
        multiplatform: "Multiplataforma",
      },
    },
    projectDetail: {
      live: "Veure live",
      code: "Codi",
      case: "Case study",
      gallery: {
        previous: "Veure imatge anterior",
        next: "Veure imatge següent",
        goTo: "Anar a la imatge {{index}}",
      },
      notFound: "Projecte no trobat",
    },
    contactCTA: {
      eyebrow: "Contacte",
      title: "T'ajudo amb la teva web o desplegament?",
      description:
        "Connecto el que aprenc a STUCOM amb necessitats reals: documentació de xarxes, manteniment de WordPress/PrestaShop i suport diari a equips petits.",
      emailLabel: "Escriu-me a",
      button: "Anar al formulari",
    },
    contactPage: {
      eyebrow: "Parlem",
      title: "Explica'm el teu proper repte",
      description:
        "Omple el formulari o escriu-me directament a marcmclara@gmail.com. Estic obert a pràctiques i oportunitats junior en desenvolupament web i apps multiplataforma, a Catalunya o en remot.",
      locationTitle: "Ubicació",
      locationSubtitle: "Vilafranca del Penedès, Barcelona",
      availabilityNote: "Disponible per a treball presencial a Barcelona i voltants, així com en modalitat remota.",
    },
    contactForm: {
      nameLabel: "Nom",
      namePlaceholder: "Escriu el teu nom",
      emailLabel: "Correu",
      emailPlaceholder: "elmeu@email.com",
      messageLabel: "Missatge",
      messagePlaceholder: "Explica'm sobre el projecte, terminis, objectius…",
      submitIdle: "Enviar missatge",
      submitSending: "Enviant…",
      submitSuccess: "Enviat",
      feedback: {
        success: "Gràcies {{name}}. Respondré en menys de 48h.",
        error: "Alguna cosa ha fallat. Torna-ho a intentar.",
        sending: "Preparant un missatge polit…",
      },
      errors: {
        name: "Introdueix almenys 2 caràcters",
        email: "Correu no vàlid",
        message: "Comparteix més context (mínim 12 caràcters)",
      },
    },
    milestones: [
      {
        period: "2025-2026",
        title: "Erasmus+ · M5 Studios (Irlanda)",
        description:
          "Més de 350 hores d'experiència pràctica desenvolupant aplicacions multiplataforma amb Flutter, integrant mapes Mapbox, centrant-me en UI/UX i frontend amb experiència en backend.",
      },
      {
        period: "2023-2025",
        title: "Grau Superior · Desenvolupament d'Aplicacions Web",
        description:
          "Estudis a STUCOM (Barcelona) aprofundint en HTML, CSS, PHP, Java, MySQL i projectes integrats orientats a la pràctica.",
      },
      {
        period: "2021-2023",
        title: "Grau Mitjà · Sistemes microinformàtics i xarxes",
        description:
          "Primer contacte professional amb virtualització, suport i desplegament de serveis per a empreses locals a Vilafranca del Penedès.",
      },
      {
        period: "2008-2021",
        title: "Formació a Vilafranca del Penedès",
        description:
          "Educació a Estalella i Graells i Sant Josep abans d'orientar la meva carrera cap a la informàtica i el desenvolupament web.",
      },
    ],
    achievements: [
      {
        title: "Pràctiques DAW — Viascooter",
        year: "2023-2025",
        description:
          "Vaig actualitzar i mantenir llocs WordPress, PrestaShop i Shopify, gestionant hosting Nominalia, correus i suport a clients del concessionari.",
      },
      {
        title: "Pràctiques SMX — Gestinet",
        year: "2022-2023",
        description:
          "Més de 340 hores de suport informàtic: muntatge i reparació d'equips, assistència sobre impressores, servidors i Active Directory per a empreses locals.",
      },
      {
        title: "Club Marc Bartra i JESPE",
        year: "2021-2024",
        description:
          "Entrenador i àrbitre a l'Alt Penedès, cultivant lideratge, comunicació i gestió de grups amb infants i joves.",
      },
    ],
    projects: caProjects,
    featuredProjects: caProjects.slice(0, 3),
  },
  en: {
    locale: "en",
    languageName: "English",
    persona: {
      name: "Marc Muntané Clarà",
      title: "Web & Multiplatform Developer (DAW · DAM)",
      location: "Vilafranca del Penedès · Barcelona",
      shortBio:
        "Web and multiplatform development student at STUCOM who bridges IT service documentation with experience-led interfaces.",
      availability:
        "Open to internships and first roles in web and multiplatform development.",
      social,
    },
    navLinks: [
      { href: "/", label: "Home" },
      { href: "/projects", label: "Projects" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
    contactChannels: [
      { label: "Email", value: social.email, href: `mailto:${social.email}` },
      { label: "GitHub", value: "@MarcMunta", href: social.github },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/marc-muntané-clarà-ab6a0a276",
        href: social.linkedin,
      },
    ],
    languageNames: { es: "Spanish", ca: "Catalan", en: "English" },
    header: {
      contactCta: "Contact",
      mobileMenuAria: "Open navigation",
      menuTitle: "Navigation",
    },
    footer: {
      updated: "Updated",
    },
    hero: {
      headline: "I develop web interfaces and multiplatform applications",
      description:
        "Specialized in creating functional and accessible interfaces with React, WordPress and Flutter. Detailed technical documentation included in every project to ensure maintainability.",
      primaryAction: "View web projects",
      secondaryAction: "View multiplatform apps",
      tertiaryAction: "Download résumé",
      cardLabel: "Stack in progress",
      cardStack: "React · WordPress · Flutter · CSS",
      cardDescription:
        "Development of responsive and accessible interfaces using modern technologies. Focus on user experience and maintainable code.",
      scrollHintActive: "Smooth scroll enabled",
      scrollHintReduced: "Smooth scroll (reduced motion)",
    },
    about: {
      eyebrow: "About",
      title: "User-centered web solutions and multiplatform applications",
      tagline: "I transform complex technical requirements into intuitive and accessible interfaces.",
      description:
        "My experience combines systems administration and technical documentation with frontend development. This foundation allows me to create comprehensive solutions that consider both technical architecture and end-user experience.",
      focusTitle: "Work methodology",
      focusDescription:
        "I bring an analytical perspective to interface development. Each project begins with detailed requirements analysis to design scalable solutions that respond to clear business objectives.",
      focusAreas: [
        {
          title: "Collaboration & teamwork",
          description:
            "I contribute creative ideas and facilitate communication between technical and non-technical profiles to achieve common goals.",
          icon: "Network",
        },
        {
          title: "Problem solving",
          description:
            "I analyze complex situations, identify efficient solutions and propose evidence-based innovative alternatives.",
          icon: "Cpu",
        },
        {
          title: "Strategic decision making",
          description:
            "I evaluate technical options considering impact, scalability and available resources to maximize business value.",
          icon: "NotebookPen",
        },
        {
          title: "Applied creativity",
          description:
            "I combine technical knowledge with creative thinking to develop differentiated solutions and memorable user experiences.",
          icon: "Boxes",
        },
      ],
      signature: {
        ribbon: "Signature ritual",
        title: "A creative atlas for curious teams",
        description:
          "Every delivery arrives with visual maps, glossaries and micro-guides so the documentation feels alive and welcoming.",
        highlights: [
          { label: "Formats", detail: "Dual handoff: Figma mural plus linked Notion hub" },
          { label: "Ritual", detail: "Closing session with guided demo and printable checklist" },
          { label: "Favorite detail", detail: "Illustrated margin notes to guide the flow" },
          { label: "Mood", detail: "Half creative studio, half lab bench" },
        ],
      },
      bioCard: {
        label: "Quick bio",
  highlight: "From Vilafranca del Penedès to projects that connect documentation and design.",
        paragraphs: [
          "I'm passionate about designing interfaces that truly connect with people. Every visual element has a clear purpose.",
          "I enjoy crafting smooth user experiences, from the first click to the final interaction, always keeping accessibility in mind.",
          "My focus is on frontend: React, modern CSS, and animations that enhance the experience without distracting from the content.",
        ],
        quickFacts: [
          { label: "Location", value: "Vilafranca del Penedès · Barcelona" },
          { label: "Current studies", value: "Higher National Diploma DAW · DAM (STUCOM)" },
          { label: "Role", value: "Web and multiplatform developer in training" },
        ],
        currentTitle: "Key capabilities",
        currentItems: [
          "Web and multiplatform application development with React and Flutter.",
          "Systems integration and backend services with relational databases.",
          "Interface design focused on user experience and accessibility.",
        ],
        marqueeLabel: "Trusted tools",
      },
      timelineTitle: "Learning journey",
      timelineDescription:
        "A timeline bridging technical training, local client work and volunteering.",
    },
    aboutPage: {
      achievementsTitle: "Highlights",
    },
    skills: {
      eyebrow: "Skills",
      title: "Technical stack in progress",
      headline:
        "Trained at STUCOM I combine web development, multiplatform apps and systems administration to deliver functional, well-documented projects.",
      primary: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "Flutter", "Flutter Web", "React Native", "React Web", "pfSense"],
      stacks: [
        {
          title: "Web development",
          items: ["HTML", "CSS", "JavaScript", "PHP"],
        },
        {
          title: "Multiplatform apps",
          items: ["Flutter", "Flutter Web", "React Native", "React Web"],
        },
        {
          title: "Systems & networks",
          items: ["pfSense", "Active Directory", "VLANs", "DHCP/DNS"],
        },
        {
          title: "Tools & design",
          items: ["MySQL", "WordPress", "Figma", "Arduino"],
        },
      ],
    },
    multiplatform: {
      eyebrow: "Multiplatform",
      title: "Apps that travel from web to mobile",
      description:
        "From Flutter to React/Next.js I document how to reuse logic and design across web, mobile and desktop without losing cohesion.",
      capabilities: [
        {
          title: "Flutter",
          description:
            "Rapid prototypes for Android/iOS/Web with reusable widgets, fluid animations and built-in testing.",
          highlights: ["Responsive UIs", "Centralised state", "Firebase integration", "Flutter web delivery"],
          mockupLabel: "Android · iOS · Web",
          accent: "from-sky-400/60 via-cyan-400/30 to-purple-500/60",
        },
        {
          title: "React & React Native",
          description:
            "Shared experience between Expo apps and Next.js sites, keeping components, state and styles in sync.",
          highlights: ["Expo Router", "Native components", "Next.js-powered React web", "OTA updates"],
          mockupLabel: "Mobile · Web",
          accent: "from-blue-500/60 via-indigo-400/30 to-fuchsia-500/60",
        },
      ],
    },
    projectsSection: {
      eyebrow: "Projects",
      title: "Recent highlights",
      description:
        "Projects combining technical documentation, web development and multiplatform prototypes built during my studies and internships.",
      viewAll: "See all projects",
      detailLabel: "View details",
      liveLabel: "Live",
      imageAltPrefix: "Project image",
    },
    projectsPage: {
      eyebrow: "Portfolio",
      title: "Projects",
      description:
        "Pick a category to explore technical projects: capstone work with pfSense, firewall deployments and the personal site I maintain in WordPress.",
      filters: {
        all: "All",
        web: "Web",
        multiplatform: "Multiplatform",
      },
      categories: {
        web: "Web",
        multiplatform: "Multiplatform",
      },
    },
    projectDetail: {
      live: "View live",
      code: "Code",
      case: "Case study",
      gallery: {
        previous: "View previous image",
        next: "View next image",
        goTo: "Go to image {{index}}",
      },
      notFound: "Project not found",
    },
    contactCTA: {
      eyebrow: "Contact",
      title: "Need help with your site or rollout?",
      description:
        "I connect what I learn at STUCOM with real needs: network documentation, WordPress/PrestaShop maintenance and everyday support for small teams.",
      emailLabel: "Write to",
      button: "Open contact form",
    },
    contactPage: {
      eyebrow: "Let's talk",
      title: "Tell me about your next challenge",
      description:
        "Fill out the form or email me at marcmclara@gmail.com. I'm open to internships and junior opportunities in web and multiplatform development across Catalonia or remotely.",
      locationTitle: "Location",
      locationSubtitle: "Vilafranca del Penedès, Barcelona",
      availabilityNote: "Available for on-site work in Barcelona and surrounding areas, as well as remote work.",
    },
    contactForm: {
      nameLabel: "Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about the project, timing, goals…",
      submitIdle: "Send message",
      submitSending: "Sending…",
      submitSuccess: "Sent",
      feedback: {
        success: "Thank you {{name}}. I'll reply within 48h.",
        error: "Something went wrong. Try again.",
        sending: "Putting together a neat message…",
      },
      errors: {
        name: "Please enter at least 2 characters",
        email: "Invalid email",
        message: "Share more context (min 12 characters)",
      },
    },
    milestones: [
      {
        period: "2025-2026",
        title: "Erasmus+ · M5 Studios (Ireland)",
        description:
          "Over 350 hours of hands-on experience developing multiplatform applications with Flutter, integrating Mapbox maps, focusing on UI/UX and frontend with backend experience.",
      },
      {
        period: "2023-2025",
        title: "Higher VET · Web Application Development",
        description:
          "Studies at STUCOM (Barcelona) diving into HTML, CSS, PHP, Java, MySQL and practice-oriented integrated projects.",
      },
      {
        period: "2021-2023",
        title: "Intermediate VET · IT systems & networks",
        description:
          "First professional contact with virtualisation, support and service deployment for local companies in Vilafranca del Penedès.",
      },
      {
        period: "2008-2021",
        title: "Education in Vilafranca del Penedès",
        description:
          "Studies at Estalella i Graells and Sant Josep before steering my career towards computing and web development.",
      },
    ],
    achievements: [
      {
        title: "DAW internship — Viascooter",
        year: "2023-2025",
        description:
          "Updated and maintained WordPress, PrestaShop and Shopify sites, managing Nominalia hosting, email accounts and customer support for the dealership.",
      },
      {
        title: "SMX internship — Gestinet",
        year: "2022-2023",
        description:
          "Over 340 hours of IT support: assembling and repairing equipment, assisting with printers, servers and Active Directory for local businesses.",
      },
      {
        title: "Marc Bartra Club & JESPE",
        year: "2021-2024",
        description:
          "Coach and referee in Alt Penedès, nurturing leadership, communication and group management with kids and teenagers.",
      },
    ],
    projects: enProjects,
    featuredProjects: enProjects.slice(0, 3),
  },
};

export const locales = Object.keys(dictionaries) as Locale[];

export const defaultLocale: Locale = "es";

export function getDictionary(locale: Locale = defaultLocale): TranslationBundle {
  return dictionaries[locale];
}
