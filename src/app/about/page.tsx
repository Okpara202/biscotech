import JsonLd from "@/components/ui/reusable/jsonLd";
import { pageJsonLd, pageMetadata } from "@/lib/seo";
import AboutHero from "./_components/aboutHero";
import LittleAboutUs from "./_components/littleAboutUs";
import WeHelp from "./_components/weHelp";
import WhatGuidesUs from "./_components/whatGuidesUs";

const description =
  "Meet BiscoTech, a digital agency creating thoughtful digital experiences that help businesses communicate clearly and move forward with confidence.";

export const metadata = pageMetadata({
  title: "About Our Digital Agency",
  description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <LittleAboutUs />
      <WhatGuidesUs />
      <WeHelp />
      <JsonLd data={pageJsonLd({ type: "AboutPage", name: "About", description, path: "/about" })} />
    </>
  );
}
