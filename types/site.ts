import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Faq = {
  question: string;
  answer: string;
};

/**
 * A capability the website does not have yet. Never describe these as shipped.
 * Learning content types live in `types/learning.ts`.
 */
export type PlannedCapability = {
  title: string;
  description: string;
};
