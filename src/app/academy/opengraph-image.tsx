import { ogCard, ogSize } from "@/lib/ogCard";

export const alt = "BiscoTech Academy: learn the skills, build what's next";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    label: "BiscoTech Academy",
    title: "Learn the skills. Build what's next.",
    text: "Practical digital learning for curious minds, career builders, and business owners.",
  });
}
