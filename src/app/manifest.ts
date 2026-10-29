import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

// /manifest.webmanifest — name, colours and icon when the site is saved to a home screen
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F7F5F0",
    theme_color: "#123F3A",
    // Generated from the logo by src/app/icon.tsx and apple-icon.tsx
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
