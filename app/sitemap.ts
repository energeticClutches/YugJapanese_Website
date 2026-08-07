import type { MetadataRoute } from "next";
import { scriptTracks } from "@/lib/learning";
import { siteConfig } from "@/lib/site";

const staticRoutes = [
  "",
  "/learn",
  "/practice",
  "/practice/writing",
  "/review",
  "/search",
  "/progress",
  "/download",
  "/features",
  "/screenshots",
  "/faq",
  "/privacy",
  "/credits",
  "/changelog",
  "/contact",
];

/** Script overviews and every lesson, derived so new lessons are never missed. */
const learningRoutes = scriptTracks.flatMap((track) => [
  `/learn/${track.id}`,
  ...track.lessons.map((lesson) => `/learn/${track.id}/${lesson.slug}`),
]);

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes, ...learningRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-07-31"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/learn") ? 0.9 : 0.7,
  }));
}
