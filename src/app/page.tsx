import Hero from "./_components/hero";
import Banner from "./_components/banner";
import WhatWeDo from "./_components/whatwedo";
import LittleAboutBisco from "./_components/littleaboutbisco";
import HowWeWork from "./_components/howwework";
import TellUsAbout from "./_components/tellusabout";
import ContactUs from "./_components/contactus";
import JsonLd from "@/components/ui/reusable/jsonLd";
import { pageJsonLd, pageMetadata, siteConfig } from "@/lib/seo";
import IntroducingBiscoTechAcademy from "./_components/introducingBiscoTechAcademy";

const description =
  "BiscoTech is a digital agency in Enugu, Nigeria, turning good ideas into thoughtful digital experiences through design, technology and marketing.";

// No title: the home page uses the layout's default (siteConfig.title)
export const metadata = pageMetadata({ description, path: "/" });

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <WhatWeDo />
      <LittleAboutBisco />
      <HowWeWork />
      <IntroducingBiscoTechAcademy />
      <TellUsAbout />
      <ContactUs />
      <JsonLd data={pageJsonLd({ name: siteConfig.title, description, path: "/" })} />
    </>
  );
}
