import { pageMetadata } from "@/lib/seo";
import AboutHero from "./_components/aboutHero";
import LittleAboutUs from "./_components/littleAboutUs";
import WeHelp from "./_components/weHelp";
import WhatGuidesUs from "./_components/whatGuidesUs";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Meet BiscoTech: a digital agency creating thoughtful digital experiences that help businesses communicate clearly, connect with people, and move forward with confidence.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <LittleAboutUs />
      <WhatGuidesUs />
      <WeHelp />
    </>
  );
}
