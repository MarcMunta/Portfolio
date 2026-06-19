export const EXPERIENCE_ITEMS_BY_LANGUAGE = {
  ca: [
    {
      year: '2026 - 2027',
      role: 'Màster en IA & Big Data',
      company: 'Formació de tardes + treball actiu',
      desc:
        'Formació en intel·ligència artificial orientada a entendre models, automatització i integració d’eines d’IA dins de fluxos de desenvolupament.',
      align: 'left',
    },
    {
      year: '2025 - 2026',
      role: 'Erasmus+ - M5 Studios (Irlanda)',
      company: 'Flutter, frontend i integració',
      desc:
        'Més de 350 hores creant apps multiplataforma amb Flutter i integració de Mapbox. Experiència útil per construir interfícies connectades a serveis i APIs.',
      align: 'right',
    },
    {
      year: '2023 - 2025',
      role: 'Pràctiques DAW - Viascooter',
      company: 'Web, hosting i suport tècnic',
      desc:
        'Manteniment web, gestió de hosting, comptes de correu i suport a clients en entorn real. Base pràctica per entendre desplegament, incidències i operació web.',
      align: 'left',
    },
    {
      year: '2022 - 2023',
      role: 'Pràctiques SMX - Gestinet',
      company: 'Sistemes i suport IT',
      desc:
        'Més de 340 hores en suport tècnic: hardware, servidors, impressores i Active Directory. Experiència de sistemes que complementa backend, xarxes i desplegament.',
      align: 'right',
    },
    {
      year: '2021 - 2026',
      role: 'Formació tècnica a STUCOM',
      company: 'SMX, DAW i DAM',
      desc:
        'Formació tècnica en desenvolupament web i multiplataforma, reforçant programació, Java, bases de dades, aplicacions web, arquitectura de software i desenvolupament full-stack.',
      align: 'left',
    },
  ],
  es: [
    {
      year: '2026 - 2027',
      role: 'Máster en IA & Big Data',
      company: 'Formación de tardes + trabajo activo',
      desc:
        'Formación en inteligencia artificial orientada a entender modelos, automatización e integración de herramientas de IA dentro de flujos de desarrollo.',
      align: 'left',
    },
    {
      year: '2025 - 2026',
      role: 'Erasmus+ - M5 Studios (Irlanda)',
      company: 'Flutter, frontend e integración',
      desc:
        'Más de 350 horas creando apps multiplataforma con Flutter e integración de Mapbox. Experiencia útil para construir interfaces conectadas a servicios y APIs.',
      align: 'right',
    },
    {
      year: '2023 - 2025',
      role: 'Prácticas DAW - Viascooter',
      company: 'Web, hosting y soporte técnico',
      desc:
        'Mantenimiento web, gestión de hosting, cuentas de correo y soporte a clientes en entorno real. Base práctica para entender despliegue, incidencias y operación web.',
      align: 'left',
    },
    {
      year: '2022 - 2023',
      role: 'Prácticas SMX - Gestinet',
      company: 'Sistemas y soporte IT',
      desc:
        'Más de 340 horas en soporte técnico: hardware, servidores, impresoras y Active Directory. Experiencia de sistemas que complementa backend, redes y despliegue.',
      align: 'right',
    },
    {
      year: '2021 - 2026',
      role: 'Formación técnica en STUCOM',
      company: 'SMX, DAW y DAM',
      desc:
        'Formación técnica en desarrollo web y multiplataforma, reforzando programación, Java, bases de datos, aplicaciones web, arquitectura de software y desarrollo full-stack.',
      align: 'left',
    },
  ],
  en: [
    {
      year: '2026 - 2027',
      role: 'Master’s Degree in AI & Big Data',
      company: 'Evening training + active work',
      desc:
        'Training in artificial intelligence focused on understanding models, automation, and the integration of AI tools into development workflows.',
      align: 'left',
    },
    {
      year: '2025 - 2026',
      role: 'Erasmus+ - M5 Studios (Ireland)',
      company: 'Flutter, frontend, and integration',
      desc:
        'Over 350 hours building cross-platform apps with Flutter and Mapbox integration. Useful experience for building interfaces connected to services and APIs.',
      align: 'right',
    },
    {
      year: '2023 - 2025',
      role: 'DAW Internship - Viascooter',
      company: 'Web, hosting, and technical support',
      desc:
        'Web maintenance, hosting management, email account setup, and client support in a real environment. Practical background for understanding deployment, incidents, and web operations.',
      align: 'left',
    },
    {
      year: '2022 - 2023',
      role: 'SMX Internship - Gestinet',
      company: 'Systems and IT support',
      desc:
        'Over 340 hours in technical support: hardware, servers, printers, and Active Directory. Systems experience that complements backend, networking, and deployment.',
      align: 'right',
    },
    {
      year: '2021 - 2026',
      role: 'Technical training at STUCOM',
      company: 'SMX, DAW, and DAM',
      desc:
        'Technical training in web and cross-platform development, strengthening programming, Java, databases, web applications, software architecture, and full-stack development.',
      align: 'left',
    },
  ],
};

export function getExperienceItems(language) {
  return EXPERIENCE_ITEMS_BY_LANGUAGE[language] ?? EXPERIENCE_ITEMS_BY_LANGUAGE.es;
}
