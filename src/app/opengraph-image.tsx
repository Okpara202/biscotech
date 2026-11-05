import { ogCard, ogSize } from "@/lib/ogCard";
import { siteConfig } from "@/lib/seo";

export const alt = `${siteConfig.name}: ${siteConfig.tagline}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    title: siteConfig.tagline,
    text: "Websites, branding, digital marketing and SEO that help businesses grow online.",
  });
}
