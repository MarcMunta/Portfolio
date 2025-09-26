export type Locale = "es" | "ca" | "en";

export interface PersonaContent {
  name: string;
  title: string;
  location: string;
  shortBio: string;
  availability: string;
  social: {
    github: string;
    linkedin: string;
    x?: string;
    email: string;
  };
}

export interface NavLink {
  href: string;
  label: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
}

export type ProjectCategory = "web" | "multiplataforma";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  category: ProjectCategory;
  categoryLabel: string;
  stack: string[];
  highlights: string[];
  summary: string;
  description: string[];
  cover: string;
  gallery: { src: string; alt: string }[];
  links: {
    live?: string;
    repo?: string;
    case?: string;
  };
}

export interface SkillStack {
  title: string;
  items: string[];
}

export interface MultiplatformCapability {
  title: string;
  description: string;
  highlights: string[];
  mockupLabel: string;
  accent: string;
}

export interface Milestone {
  period: string;
  title: string;
  description: string;
}

export interface Achievement {
  title: string;
  year: string;
  description: string;
}

export interface TranslationBundle {
  locale: Locale;
  languageName: string;
  persona: PersonaContent;
  navLinks: NavLink[];
  contactChannels: ContactChannel[];
  languageNames: Record<Locale, string>;
  header: {
    contactCta: string;
    mobileMenuAria: string;
    menuTitle: string;
  };
  footer: {
    updated: string;
  };
  hero: {
    headline: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
    tertiaryAction: string;
    cardLabel: string;
    cardStack: string;
    cardDescription: string;
    scrollHintActive: string;
    scrollHintReduced: string;
  };
  about: {
    eyebrow: string;
    title: string;
    tagline: string;
    description: string;
    focusTitle: string;
    focusDescription: string;
    focusAreas: {
      title: string;
      description: string;
      icon: "NotebookPen" | "Network" | "Boxes" | "Cpu";
    }[];
    signature: {
      ribbon: string;
      title: string;
      description: string;
      highlights: { label: string; detail: string }[];
    };
    bioCard: {
      label: string;
      highlight: string;
      paragraphs: string[];
      quickFacts: { label: string; value: string }[];
      currentTitle: string;
      currentItems: string[];
      marqueeLabel: string;
    };
    timelineTitle: string;
    timelineDescription: string;
  };
  aboutPage: {
    achievementsTitle: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    headline: string;
    primary: string[];
    stacks: SkillStack[];
  };
  multiplatform: {
    eyebrow: string;
    title: string;
    description: string;
    capabilities: MultiplatformCapability[];
  };
  projectsSection: {
    eyebrow: string;
    title: string;
    description: string;
    viewAll: string;
    detailLabel: string;
    liveLabel: string;
    imageAltPrefix: string;
  };
  projectsPage: {
    eyebrow: string;
    title: string;
    description: string;
    filters: {
      all: string;
      web: string;
      multiplatform: string;
    };
    categories: {
      web: string;
      multiplatform: string;
    };
  };
  projectDetail: {
    live: string;
    code: string;
    case: string;
    gallery: {
      previous: string;
      next: string;
      goTo: string;
    };
    notFound: string;
  };
  contactCTA: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    button: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    description: string;
    locationTitle: string;
    locationSubtitle: string;
    availabilityNote: string;
  };
  contactForm: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitIdle: string;
    submitSending: string;
    submitSuccess: string;
    feedback: {
      success: string;
      error: string;
      sending: string;
    };
    errors: {
      name: string;
      email: string;
      message: string;
    };
  };
  milestones: Milestone[];
  achievements: Achievement[];
  projects: Project[];
  featuredProjects: Project[];
}
