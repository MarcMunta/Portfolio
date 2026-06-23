export const STACK_GROUPS_BY_LANGUAGE = {
  ca: [
    {
      title: 'IA & Big Data',
      description:
        'Especialització principal: IA aplicada, automatització, dades i documentació tècnica.',
      accent: 'AI / Data',
      skills: [
        'IA aplicada',
        'Prompt engineering',
        'RAG bàsic',
        'Automatització',
        'Big Data en formació',
        'Anàlisi de dades bàsic',
        'Documentació assistida',
      ],
    },
    {
      title: 'React i UI/UX',
      description:
        'Interfícies netes, responsive i pensades per entendre ràpid el producte.',
      accent: 'React / Design',
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'UI/UX',
        'Responsive design',
        'Accessibilitat base',
        'Integració amb APIs',
      ],
    },
    {
      title: 'Java i Spring Boot',
      description:
        'Backend clar: APIs, persistència, validació i estructura mantenible.',
      accent: 'Java / Spring',
      skills: [
        'Java',
        'Spring Boot',
        'APIs REST',
        'JPA/Hibernate',
        'MySQL',
        'Testing',
        'Git',
        'Maven',
      ],
    },
  ],
  es: [
    {
      title: 'IA & Big Data',
      description:
        'Especialización principal: IA aplicada, automatización, datos y documentación técnica.',
      accent: 'AI / Data',
      skills: [
        'IA aplicada',
        'Prompt engineering',
        'RAG básico',
        'Automatización',
        'Big Data en formación',
        'Análisis de datos básico',
        'Documentación asistida',
      ],
    },
    {
      title: 'React y UI/UX',
      description:
        'Interfaces limpias, responsive y pensadas para entender rápido el producto.',
      accent: 'React / Diseño',
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'UI/UX',
        'Responsive design',
        'Accesibilidad base',
        'Integración con APIs',
      ],
    },
    {
      title: 'Java y Spring Boot',
      description:
        'Backend claro: APIs, persistencia, validación y estructura mantenible.',
      accent: 'Java / Spring',
      skills: [
        'Java',
        'Spring Boot',
        'APIs REST',
        'JPA/Hibernate',
        'MySQL',
        'Testing',
        'Git',
        'Maven',
      ],
    },
  ],
  en: [
    {
      title: 'AI & Big Data',
      description:
        'Main specialization: applied AI, automation, data, and technical documentation.',
      accent: 'AI / Data',
      skills: [
        'Applied AI',
        'Prompt engineering',
        'Basic RAG',
        'Automation',
        'Big Data training',
        'Basic data analysis',
        'AI-assisted documentation',
      ],
    },
    {
      title: 'React and UI/UX',
      description:
        'Clean, responsive interfaces designed to make products easy to understand.',
      accent: 'React / Design',
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'UI/UX',
        'Responsive design',
        'Basic accessibility',
        'API integration',
      ],
    },
    {
      title: 'Java and Spring Boot',
      description:
        'Clear backend work: APIs, persistence, validation, and maintainable structure.',
      accent: 'Java / Spring',
      skills: [
        'Java',
        'Spring Boot',
        'REST APIs',
        'JPA/Hibernate',
        'MySQL',
        'Testing',
        'Git',
        'Maven',
      ],
    },
  ],
};

export const CURRENTLY_REINFORCING_BY_LANGUAGE = {
  ca: [
    'IA aplicada',
    'Big Data',
    'React',
    'UI/UX',
    'Spring Boot',
    'APIs REST',
    'JPA/Hibernate',
    'Testing',
  ],
  es: [
    'IA aplicada',
    'Big Data',
    'React',
    'UI/UX',
    'Spring Boot',
    'APIs REST',
    'JPA/Hibernate',
    'Testing',
  ],
  en: [
    'Applied AI',
    'Big Data',
    'React',
    'UI/UX',
    'Spring Boot',
    'REST APIs',
    'JPA/Hibernate',
    'Testing',
  ],
};

export function getStackGroups(language) {
  return STACK_GROUPS_BY_LANGUAGE[language] ?? STACK_GROUPS_BY_LANGUAGE.es;
}

export function getCurrentlyReinforcing(language) {
  return CURRENTLY_REINFORCING_BY_LANGUAGE[language] ?? CURRENTLY_REINFORCING_BY_LANGUAGE.es;
}
