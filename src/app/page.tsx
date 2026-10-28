import Hero from "./_components/hero";
import Banner from "./_components/banner";
import WhatWeDo from "./_components/whatwedo";
import SelectedConcepts from "./_components/selectedconcepts";
import LittleAboutBisco from "./_components/littleaboutbisco";
import HowWeWork from "./_components/howwework";
import TellUsAbout from "./_components/tellusabout";
import ContactUs from "./_components/contactus";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <WhatWeDo />
      <SelectedConcepts />
      <LittleAboutBisco />
      <HowWeWork />
      <TellUsAbout />
      <ContactUs />
    </>
  );
}
