import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

// /sitemap.xml — tells Google which pages exist. Add new pages here as they're built
// (Our Work isn't live yet, so it's left out to avoid 404s in Search Console).
const routes = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/academy", priority: 0.8 },
  { path: "/about", priority: 0.8 },
  { path: "/our_process", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
