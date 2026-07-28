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
