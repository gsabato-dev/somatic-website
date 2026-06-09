import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

// Generates /sitemap.xml. Single-page site, so one entry (anchor sections like
// #faq are not separate URLs). Submit this URL in Google Search Console.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
