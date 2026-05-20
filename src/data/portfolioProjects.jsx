import React from 'react';
import { Briefcase, Code2, Layers, Rocket, Smartphone, Terminal } from 'lucide-react';

const COMMON_FULL_STACK = [
  { name: 'HTML5', color: '#E34F26' },
  { name: 'CSS3', color: '#1572B6' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#339933' },
  { name: 'PHP', color: '#777BB4' },
  { name: 'Laravel', color: '#FF2D20' },
  { name: 'Symfony', color: '#000000' },
  { name: 'Java', color: '#ED8B00' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Kotlin', color: '#7F52FF' },
  { name: 'Dart', color: '#0175C2' },
  { name: 'Flutter', color: '#02569B' },
  { name: 'MySQL', color: '#4479A1' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Git', color: '#F05032' },
  { name: 'Unity', color: '#FFFFFF' },
  { name: 'Mapbox', color: '#4264FB' },
  { name: 'WordPress', color: '#21759B' },
  { name: 'PrestaShop', color: '#DF0067' },
  { name: 'Hostinger', color: '#673DE6' },
  { name: 'pfSense', color: '#212121' },
  { name: 'Ubuntu Server', color: '#E95420' },
  { name: 'Windows Server', color: '#0078D6' },
];

const GM_STACK_ICONS = [
  { label: 'Angular Forms & Login', icon: <Layers size={14} /> },
  { label: 'Listado & UI', icon: <Smartphone size={14} /> },
  { label: 'Backend PHP Endpoints', icon: <Terminal size={14} /> },
  { label: 'Auth + localStorage', icon: <Briefcase size={14} /> },
  { label: 'Integración API', icon: <Rocket size={14} /> },
  { label: 'Flujo Front/Back', icon: <Code2 size={14} /> },
];

const PROJECT_BASE = {
  portfolio: {
    id: 1,
    image: 'images/projects/firewall-cover.jpg',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    year: '2026',
    url: 'https://github.com/MarcMunta/Portfolio',
    ctaIcon: 'github',
    fullStack: COMMON_FULL_STACK,
  },
  vortex: {
    id: 6,
    image: 'images/projects/vortex-cover.png',
    tags: ['React', 'Python', 'LLM local', 'RAG', 'Agente'],
    year: '2026',
    pdfPath: 'docs/vortex-ia-local-marc-muntane.pdf',
  },
  retos: {
    id: 2,
    image: 'images/projects/sostenibilidad-actions.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    year: '2026',
    url: 'https://marcmunta.github.io/Retos-Sociales/',
    repoUrl: 'https://github.com/MarcMunta/Retos-Sociales',
  },
  sostenibilidad: {
    id: 3,
    image: 'images/projects/sostenibilidad-cover.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    year: '2025',
    url: 'https://marcmunta.github.io/Sostenibilidad_v1/',
    repoUrl: 'https://github.com/MarcMunta/Sostenibilidad_v1',
    compactTitle: true,
  },
  daw: {
    id: 4,
    image: 'images/projects/curriculum-wireframes.jpg',
    tags: ['Angular', 'Node.js', 'Express', 'MySQL'],
    year: '2025',
    compactTitle: true,
    pdfPath: 'docs/CineFlix_BryanJoya_MarcMuntane_PolCarvajal.pdf',
    repoLinks: [
      { label: 'Frontend', url: 'https://github.com/MarcMunta/EnfermeriaFrontend' },
      { label: 'Backend', url: 'https://github.com/MarcMunta/enfermeria_back_end' },
    ],
  },
  gm: {
    id: 5,
    image: 'images/projects/curriculum-cover.jpg',
    tags: ['Angular', 'PHP', 'API', 'Auth'],
    year: '2024',
    pdfPath: 'docs/pr08-front-end-back-end.pdf',
    stackIcons: GM_STACK_ICONS,
  },
};

const PROJECT_ORDER = ['portfolio', 'vortex', 'retos', 'sostenibilidad', 'daw', 'gm'];

const PROJECT_COPY = {
  ca: {
    portfolio: {
      title: 'Portfolio Interactiu',
      category: 'Projecte Personal',
      duration: 'Projecte personal · actualitzat el 2026 i en evolució constant',
      summary:
        'Aquest portfolio: cursor personalitzat amb partícules, animacions de scroll reactives, fons interactiu amb SVG i cometes, targetes magnètiques i desplegament automàtic a GitHub Pages.',
    },
    vortex: {
      title: 'Vortex',
      category: 'IA Local',
      duration: 'Projecte personal d’IA local amb memòria tècnica en PDF',
      summary:
        'IA local pròpia amb frontend React, API Python, RAG, memòria local, permisos visibles i mode agent. Documentació final preparada per presentar el projecte dins del porfolio.',
    },
    retos: {
      title: 'Reptes Socials',
      category: 'Web · Pròxim',
      duration: 'Pròxim projecte · objectiu: 1 setmana · treball del cole',
      summary:
        'Següent lliurament acadèmic centrat en reptes socials: desenvolupament web en una setmana amb focus en claredat, responsive i entrega completa.',
    },
    sostenibilidad: {
      title: 'Sostenibilitat',
      category: 'Web',
      duration: 'Completat en 1 setmana · treball del grau superior',
      summary:
        'Landing informativa sobre hàbits sostenibles, dissenyada i desenvolupada en una setmana amb focus en claredat de contingut, responsive i accessibilitat base.',
    },
    daw: {
      title: 'Final DAW Project - Nursing Platform',
      category: 'Projecte Final DAW',
      duration: 'Projecte anual de final de curs DAW',
      summary:
        'Projecte de final de DAW desenvolupat durant tot el curs i fet completament en anglès. Inclou frontend i backend separats, memòria en PDF i dos repositoris. S’ha extret informació d’algunes IA, però sense usar IA per programar.',
    },
    gm: {
      title: 'Projecte GM',
      category: 'Full Stack',
      duration: 'Pràctica tècnica completa',
      summary:
        'Projecte integrat amb frontend en Angular, backend en PHP amb endpoints, autenticació amb localStorage i integració frontend-backend sobre API.',
    },
  },
  es: {
    portfolio: {
      title: 'Portfolio Interactivo',
      category: 'Proyecto Personal',
      duration: 'Proyecto personal · actualizado en 2026 y en evolución constante',
      summary:
        'Este portfolio: cursor personalizado con partículas, animaciones de scroll reactivas, fondo interactivo con SVG y cometas, cards magnéticas y despliegue automático en GitHub Pages.',
    },
    vortex: {
      title: 'Vortex',
      category: 'IA Local',
      duration: 'Proyecto personal de IA local con memoria técnica en PDF',
      summary:
        'IA local propia con frontend React, API Python, RAG, memoria local, permisos visibles y modo agente. Documentación final preparada para presentar el proyecto dentro del porfolio.',
    },
    retos: {
      title: 'Retos Sociales',
      category: 'Web · Próximo',
      duration: 'Próximo proyecto · objetivo: 1 semana · trabajo del cole',
      summary:
        'Siguiente entrega académica centrada en retos sociales: desarrollo web en una semana, siguiendo una metodología similar a Sostenibilidad con foco en claridad, responsive y entrega completa.',
    },
    sostenibilidad: {
      title: 'Sostenibilidad',
      category: 'Web',
      duration: 'Completado en 1 semana · trabajo del grado superior',
      summary:
        'Landing informativa sobre hábitos sostenibles, diseñada y desarrollada en una semana con enfoque en claridad de contenido, responsive y accesibilidad base.',
    },
    daw: {
      title: 'Proyecto Final DAW - Plataforma de Enfermería',
      category: 'Proyecto Final DAW',
      duration: 'Proyecto anual de fin de curso DAW',
      summary:
        'Proyecto de final de DAW desarrollado durante todo el año y hecho completamente en inglés. Incluye frontend y backend separados, memoria en PDF y dos repositorios. Se sacó información de algunas IA, pero sin usar IA para programar.',
    },
    gm: {
      title: 'Proyecto GM',
      category: 'Full Stack',
      duration: 'Práctica técnica completa',
      summary:
        'Proyecto integrado con frontend en Angular (formularios, login, listado), backend en PHP con endpoints, autenticación con localStorage e integración frontend-backend sobre API.',
    },
  },
  en: {
    portfolio: {
      title: 'Interactive Portfolio',
      category: 'Personal Project',
      duration: 'Personal project · updated in 2026 and constantly evolving',
      summary:
        'This portfolio: custom particle cursor, reactive scroll animations, interactive SVG/comet background, magnetic cards, and automatic deployment on GitHub Pages.',
    },
    vortex: {
      title: 'Vortex',
      category: 'Local AI',
      tags: ['React', 'Python', 'Local LLM', 'RAG', 'Agent'],
      duration: 'Personal local AI project with technical PDF documentation',
      summary:
        'Own local AI project with React frontend, Python API, RAG, local memory, visible permissions, and agent mode. Final documentation prepared for the portfolio projects section.',
    },
    retos: {
      title: 'Social Challenges',
      category: 'Web · Upcoming',
      duration: 'Upcoming project · goal: 1 week · school assignment',
      summary:
        'Next academic delivery focused on social challenges: one-week web development with emphasis on clarity, responsive behavior, and complete delivery.',
    },
    sostenibilidad: {
      title: 'Sustainability',
      category: 'Web',
      duration: 'Completed in 1 week · higher-degree assignment',
      summary:
        'Informative landing page about sustainable habits, designed and developed in one week with focus on content clarity, responsive layout, and base accessibility.',
    },
    daw: {
      title: 'DAW Final Project - Nursing Platform',
      category: 'DAW Final Project',
      duration: 'Full-year DAW final project',
      summary:
        'Final DAW project developed across the full academic year and built entirely in English. It includes separate frontend and backend repositories, PDF documentation, and research supported by AI sources without using AI to write code.',
    },
    gm: {
      title: 'Project GM',
      category: 'Full Stack',
      duration: 'Complete technical practice',
      summary:
        'Integrated project with Angular frontend (forms, login, list), PHP backend endpoints, localStorage auth, and frontend-backend API integration.',
      stackIcons: [
        { label: 'Angular Forms & Login', icon: <Layers size={14} /> },
        { label: 'List & UI', icon: <Smartphone size={14} /> },
        { label: 'PHP Backend Endpoints', icon: <Terminal size={14} /> },
        { label: 'Auth + localStorage', icon: <Briefcase size={14} /> },
        { label: 'API Integration', icon: <Rocket size={14} /> },
        { label: 'Front/Back Flow', icon: <Code2 size={14} /> },
      ],
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
