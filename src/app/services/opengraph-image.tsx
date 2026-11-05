import { ogCard, ogSize } from "@/lib/ogCard";

export const alt = "BiscoTech services: digital solutions for your next stage";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    title: "Digital solutions for your next stage.",
    text: "Websites and apps, branding, digital marketing, social media, SEO and consulting.",
  });
}
