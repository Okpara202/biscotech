import JsonLd from "@/components/ui/reusable/jsonLd";
import { organizationRef, pageJsonLd, pageMetadata } from "@/lib/seo";
import BuiltAroundYourGoals from "./_components/builtAroundYourGoals";
import OurCapabilities, { services } from "./_components/ourCapabilities";
import ProjectInMind from "./_components/projectInMind";
import ServiceHero from "./_components/serviceHero";

const description =
  "Website and app development, branding, digital marketing, social media management, SEO and consulting to help your business grow online.";

export const metadata = pageMetadata({
  title: "Web Design, Branding & Marketing Services",
  description,
  path: "/services",
});

const jsonLd = pageJsonLd({
  name: "Services",
  description,
  path: "/services",
  extra: services.map((service) => ({
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.description,
    provider: organizationRef,
  })),
});

export default function Services() {
  return (
    <>
      <ServiceHero />
      <OurCapabilities />
      <BuiltAroundYourGoals />
      <ProjectInMind />
      <JsonLd data={jsonLd} />
    </>
  );
}
