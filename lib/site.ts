import {
  BarChart3,
  BookOpen,
  Camera,
  Download,
  FileClock,
  Flame,
  Globe,
  GraduationCap,
  LayoutDashboard,
  Lock,
  Mail,
  MessageCircle,
  PenTool,
  RotateCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Volume2,
  WifiOff,
} from "lucide-react";
import type { Faq, Feature, NavItem, PlannedCapability } from "@/types/site";

export const siteConfig = {
  name: "YugJapanese",
  description:
    "Learn Japanese from zero. Hiragana, Katakana, and Kanji in a clear order, with no account, no ads, and no subscriptions.",
  url: "https://yugjapanese.com",
  apkUrl: "/downloads/yugjapanese-latest.apk",
  email: "hello@yugjapanese.com",
};

/**
 * Learning routes lead. Features, FAQ, Screenshots, Changelog, and Contact are
 * reachable from the footer rather than crowding the header.
 */
export const navItems: NavItem[] = [
  { label: "Learn", href: "/learn" },
  { label: "Practice", href: "/practice" },
  { label: "Review", href: "/review" },
  { label: "Search", href: "/search" },
  { label: "Progress", href: "/progress" },
  { label: "Download", href: "/download" },
];

/**
 * Learning content lives in `lib/learning`, which is the single source for
 * tracks, lessons, and characters. Nothing here may restate it.
 *
 * Still not built on the web. Recognition practice (Milestone 10), writing
 * practice (11), review (12), and progress tracking (13) shipped and were
 * removed from this list; the rest must not be presented as available.
 */
export const plannedPractice: PlannedCapability[] = [
  {
    title: "Learning analytics",
    description:
      "See accuracy trends and weak areas drawn from your practice and review sessions, not just raw counts.",
  },
];

/** What the website itself offers today. Keep every entry literally true. */
export const webFeatures: Feature[] = [
  {
    title: "A path that starts at zero",
    description:
      "Hiragana, then Katakana, then Kanji, in the order that actually works. No prior Japanese needed.",
    icon: GraduationCap,
  },
  {
    title: "Nothing to install",
    description:
      "Open it in any browser on a phone or a laptop and start reading straight away.",
    icon: Globe,
  },
  {
    title: "No account, no ads",
    description:
      "No sign-up, no email, no subscription, and nothing asking for your attention while you study.",
    icon: ShieldCheck,
  },
];

/**
 * Capabilities of the Android app, not the website. Always render these under
 * app-specific framing so the site never claims them for itself.
 */
export const appFeatures: Feature[] = [
  {
    title: "Hiragana, Katakana, and Kanji in order",
    description:
      "A structured learning path moves from Hiragana to Katakana to Kanji, so every lesson builds on what came before.",
    icon: GraduationCap,
  },
  {
    title: "Handwriting practice with real feedback",
    description:
      "Trace and write each character on screen and get accuracy scoring on your strokes, not just a right-or-wrong guess.",
    icon: PenTool,
  },
  {
    title: "Spaced repetition review",
    description:
      "Characters you've learned resurface for review right when you're about to forget them, so practice stays efficient.",
    icon: RotateCcw,
  },
  {
    title: "Offline pronunciation audio",
    description:
      "Listen to native pronunciation for characters and vocabulary, fully bundled with the app so it works without a connection.",
    icon: Volume2,
  },
  {
    title: "Search and dictionary lookup",
    description:
      "Find any character or reading instantly with offline search, plus history and favorites for quick access later.",
    icon: Search,
  },
  {
    title: "Practice and quiz modes",
    description:
      "Reinforce lessons with varied quiz modes that highlight weak items so you spend time where it counts.",
    icon: Target,
  },
  {
    title: "Progress dashboard",
    description:
      "Pick up right where you left off with a home dashboard that shows completed lessons and what's next.",
    icon: LayoutDashboard,
  },
  {
    title: "Learning analytics and insights",
    description:
      "See your progress over time, including weak areas and trends, so you know exactly what to focus on.",
    icon: BarChart3,
  },
  {
    title: "Streaks and achievements",
    description:
      "Stay consistent with streak tracking and achievements that reward steady, everyday practice.",
    icon: Flame,
  },
  {
    title: "Offline-first learning",
    description:
      "Download once and keep studying Japanese without depending on a constant connection.",
    icon: WifiOff,
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
];

export const stats = [
  { value: "3", label: "scripts: Hiragana, Katakana, Kanji" },
  { value: "0", label: "accounts or sign-ups" },
  { value: "0", label: "ads and subscriptions" },
];

export const faqs: Faq[] = [
  {
    question: "What order should I learn Japanese in?",
    answer:
      "Hiragana first, then Katakana, then Kanji. Hiragana covers every sound in the language, Katakana writes those same sounds for foreign words and names, and Kanji builds on both. The Learn page lays out all three tracks.",
  },
  {
    question: "Can I learn on the website, or do I need the app?",
    answer:
      "You can already learn on the website: lessons, recognition and writing practice, review, progress tracking, and search all work in the browser today. The Android app goes further, with stroke accuracy scoring, spaced repetition, pronunciation audio, and full offline use.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No. There is no sign-up, no email, and no login anywhere on the website. Progress is tracked locally in your browser, not on a server.",
  },
  {
    question: "What does the Android app add?",
    answer:
      "Handwriting practice with stroke accuracy scoring, spaced repetition review, pronunciation audio, an offline dictionary, quiz modes, and progress analytics. It also works with no connection at all, which the website cannot do.",
  },
  {
    question: "Where can I download the app?",
    answer:
      "The Download page is the only official place to get the APK, along with install guidance.",
  },
  {
    question: "Does YugJapanese cost anything?",
    answer:
      "No. There are no ads and no subscriptions on the website or in the app.",
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
  { label: "Download", href: "/download", icon: Download },
  { label: "FAQ", href: "/faq", icon: MessageCircle },
  { label: "Privacy", href: "/privacy", icon: Lock },
  { label: "Credits", href: "/credits", icon: Sparkles },
];

export const footerLinks = [
  { label: "Learn", href: "/learn", icon: GraduationCap },
  { label: "Practice", href: "/practice", icon: Target },
  { label: "Writing", href: "/practice/writing", icon: PenTool },
  { label: "Review", href: "/review", icon: RotateCcw },
  { label: "Search", href: "/search", icon: Search },
  { label: "Progress", href: "/progress", icon: BarChart3 },
  { label: "Download", href: "/download", icon: Download },
  { label: "Features", href: "/features", icon: BookOpen },
  { label: "Screenshots", href: "/screenshots", icon: Camera },
  { label: "FAQ", href: "/faq", icon: MessageCircle },
  { label: "Changelog", href: "/changelog", icon: FileClock },
  { label: "Contact", href: "/contact", icon: Mail },
  { label: "Privacy", href: "/privacy", icon: Lock },
  { label: "Credits", href: "/credits", icon: Sparkles },
];
