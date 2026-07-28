import {
  BookOpen,
  Camera,
  Download,
  FileClock,
  GraduationCap,
  Languages,
  Lock,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  WifiOff,
} from "lucide-react";
import type { Faq, Feature, NavItem } from "@/types/site";

export const siteConfig = {
  name: "YugJapanese",
  description:
    "A calm, offline-first Japanese learning experience with no ads, no subscriptions, and a focus on high-quality practice.",
  url: "https://yugjapanese.com",
  apkUrl: "/downloads/yugjapanese-latest.apk",
  email: "hello@yugjapanese.com",
};

export const navItems: NavItem[] = [
  { label: "Download", href: "/download" },
  { label: "Features", href: "/features" },
  { label: "FAQ", href: "/faq" },
  { label: "Changelog", href: "/changelog" },
  { label: "Contact", href: "/contact" },
];

export const features: Feature[] = [
  {
    title: "Offline-first learning",
    description:
      "Download once and keep studying Japanese without depending on a constant connection.",
    icon: WifiOff,
  },
  {
    title: "Kana and vocabulary practice",
    description:
      "Move through focused practice sessions designed around clarity, repetition, and recall.",
    icon: Languages,
  },
  {
    title: "No ads or subscriptions",
    description:
      "The learning space stays quiet, respectful, and focused on progress instead of interruptions.",
    icon: ShieldCheck,
  },
  {
    title: "Privacy-conscious by design",
    description:
      "The product is built around trust, minimal data collection, and user-focused decisions.",
    icon: Lock,
  },
  {
    title: "Release notes that matter",
    description:
      "Every website and APK release should explain what changed and why it improves the experience.",
    icon: FileClock,
  },
  {
    title: "Friendly learning tone",
    description:
      "The content should feel encouraging, professional, and useful for steady self-study.",
    icon: GraduationCap,
  },
];

export const stats = [
  { value: "100%", label: "offline-first intent" },
  { value: "0", label: "ads and subscriptions" },
  { value: "9", label: "primary site pages" },
];

export const faqs: Faq[] = [
  {
    question: "Is YugJapanese different from this website?",
    answer:
      "Yes. The website is the official home for downloads, release notes, documentation, and brand information. The Flutter app is maintained separately.",
  },
  {
    question: "Where can I download the APK?",
    answer:
      "The Download page is the official place for APK downloads and install guidance. A production APK file can be added to the public downloads folder when it is ready.",
  },
  {
    question: "Does YugJapanese require a subscription?",
    answer:
      "The brand direction is no ads and no subscriptions. The website should communicate that clearly wherever it is relevant.",
  },
  {
    question: "Will the website include documentation?",
    answer:
      "Yes. Documentation is part of the website goals, with deeper documentation and developer notes planned as future pages.",
  },
];

export const releaseNotes = [
  {
    version: "Website foundation",
    date: "2026-07-28",
    items: [
      "Created the initial website architecture and documentation baseline.",
      "Defined the YugJapanese visual direction and brand principles.",
      "Prepared the core page structure for the official website.",
    ],
  },
];

export const quickLinks = [
  { label: "Privacy", href: "/privacy", icon: Lock },
  { label: "Credits", href: "/credits", icon: Sparkles },
  { label: "FAQ", href: "/faq", icon: MessageCircle },
  { label: "Docs", href: "/features", icon: BookOpen },
  { label: "Download", href: "/download", icon: Download },
];

export const footerLinks = [
  { label: "Download", href: "/download", icon: Download },
  { label: "Features", href: "/features", icon: BookOpen },
  { label: "Screenshots", href: "/screenshots", icon: Camera },
  { label: "FAQ", href: "/faq", icon: MessageCircle },
  { label: "Changelog", href: "/changelog", icon: FileClock },
  { label: "Contact", href: "/contact", icon: Mail },
  { label: "Privacy", href: "/privacy", icon: Lock },
  { label: "Credits", href: "/credits", icon: Sparkles },
];
