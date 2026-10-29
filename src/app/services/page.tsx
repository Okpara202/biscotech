import { pageMetadata } from "@/lib/seo";
import BuiltAroundYourGoals from "./_components/builtAroundYourGoals";
import OurCapabilities from "./_components/ourCapabilities";
import ProjectInMind from "./_components/projectInMind";
import ServiceHero from "./_components/serviceHero";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Website and app development, branding, digital marketing, social media management, SEO and digital consulting. BiscoTech brings strategy, design, and technology together to help your business grow online.",
  path: "/services",
});

export default function Services() {
  return (
    <>
      <ServiceHero />
      <OurCapabilities />
      <BuiltAroundYourGoals />
      <ProjectInMind />
    </>
  );
}
