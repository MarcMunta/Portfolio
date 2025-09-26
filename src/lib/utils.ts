import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isExternalUrl(href: string) {
  return /^https?:\/\//.test(href);
}

export function formatDateRange(start: string, end?: string) {
  return end ? `${start} — ${end}` : start;
}

export const motionPreferences = {
  reduced: "reduce",
  noPreference: "no-preference",
} as const;
