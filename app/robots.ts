import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

// Generates /robots.txt. Allows every crawler, including AI crawlers
// (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) — they are covered by the
// "*" allow rule, and blocking them is the main reason sites are invisible to
// AI answer engines, which is the opposite of what we want here.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
