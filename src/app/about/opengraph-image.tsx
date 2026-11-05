import { ogCard, ogSize } from "@/lib/ogCard";

export const alt = "About BiscoTech: thoughtful design, meaningful impact";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    title: "Thoughtful design. Meaningful impact.",
    text: "We help businesses communicate clearly, connect with people, and move forward with confidence.",
  });
}
