import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

// /robots.txt — lets every crawler in and points them at the sitemap
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
