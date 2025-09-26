import { defaultLocale, getDictionary, locales } from "./i18n/dictionary";
import type {
  Achievement,
  Locale,
  Milestone,
  MultiplatformCapability,
  NavLink,
  PersonaContent,
  Project,
  ProjectCategory,
  TranslationBundle,
} from "./i18n/types";

const defaultBundle = getDictionary();

export const persona: PersonaContent = defaultBundle.persona;
export const navLinks: NavLink[] = defaultBundle.navLinks;
export const contactChannels = defaultBundle.contactChannels;
export const skills = defaultBundle.skills;
export const milestones: Milestone[] = defaultBundle.milestones;
export const achievements: Achievement[] = defaultBundle.achievements;
export const multiplatformCapabilities: MultiplatformCapability[] = defaultBundle.multiplatform.capabilities;
export const projects: Project[] = defaultBundle.projects;
export const featuredProjects: Project[] = defaultBundle.featuredProjects;

export { defaultLocale, getDictionary, locales };
export type {
  Achievement,
  Locale,
  Milestone,
  MultiplatformCapability,
  Project,
  ProjectCategory,
  TranslationBundle,
};
