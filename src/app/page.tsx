import Hero from "./_components/hero";
import Banner from "./_components/banner";
import WhatWeDo from "./_components/whatwedo";
import SelectedConcepts from "./_components/selectedconcepts";
import LittleAboutBisco from "./_components/littleaboutbisco";
import HowWeWork from "./_components/howwework";
import TellUsAbout from "./_components/tellusabout";
import ContactUs from "./_components/contactus";
import { pageMetadata } from "@/lib/seo";
import IntroducingBiscoTechAcademy from "./_components/introducingBiscoTechAcademy";

// No title: the home page uses the layout's default "BiscoTech — Thoughtful design..."
export const metadata = pageMetadata({
  description:
    "We help ambitious businesses turn good ideas into thoughtful digital experiences — through design, technology and marketing that work together.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <WhatWeDo />
      <SelectedConcepts />
      <LittleAboutBisco />
      <HowWeWork />
      <IntroducingBiscoTechAcademy />
      <TellUsAbout />
      <ContactUs />
    </>
  );
}
