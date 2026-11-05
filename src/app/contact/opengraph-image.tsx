import { ogCard, ogSize } from "@/lib/ogCard";

export const alt = "Contact BiscoTech: let's create something meaningful";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    title: "Let's create something meaningful.",
    text: "Have a project in mind? Tell us a little about it and let's start a conversation.",
  });
}
