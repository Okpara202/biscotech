import { ogCard, ogSize } from "@/lib/ogCard";

export const alt = "How BiscoTech works: good work starts with a good process";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    title: "Good work starts with a good process.",
    text: "Four steps, one shared direction, from first conversation to first launch.",
  });
}
