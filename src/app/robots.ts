import type { MetadataRoute } from "next";
import { CASE_STUDY_PATH, CASE_STUDY_UNLOCK_PATH } from "@/lib/case-study-gate";

const privatePaths = [CASE_STUDY_PATH, CASE_STUDY_UNLOCK_PATH];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: privatePaths },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: privatePaths },
      { userAgent: "ChatGPT-User", allow: "/", disallow: privatePaths },
      { userAgent: "Claude-SearchBot", allow: "/", disallow: privatePaths },
      { userAgent: "Claude-User", allow: "/", disallow: privatePaths },
      { userAgent: "PerplexityBot", allow: "/", disallow: privatePaths },
      { userAgent: "Google-Extended", allow: "/", disallow: privatePaths },
    ],
    sitemap: "https://deandiego.com/sitemap.xml",
  };
}
