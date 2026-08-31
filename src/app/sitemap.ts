import type { MetadataRoute } from "next";
import { TOWNS } from "@/app/drone/deer-recovery/towns";

const base = "https://deandiego.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 0.7 },
    { path: "/about", priority: 0.5 },
    { path: "/work", priority: 0.5 },
    { path: "/services", priority: 0.6 },
    { path: "/services/drone", priority: 0.7 },
    { path: "/contact", priority: 0.5 },
    { path: "/drone/deer-recovery", priority: 0.9 },
    { path: "/drone/recover", priority: 0.8 },
  ];
  return [
    ...pages.map((p) => ({
      url: `${base}${p.path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p.priority,
    })),
    ...TOWNS.map((t) => ({
      url: `${base}/drone/deer-recovery/${t.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
