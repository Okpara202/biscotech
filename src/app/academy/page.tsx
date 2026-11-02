import { pageMetadata, siteConfig } from "@/lib/seo";
import AcademyHero from "./_components/academyHero";
import TheIdeaIsSimple from "./_components/theIdeaIsSimple";
import CourseCatalogue from "./_components/courseCatalogue";
import { courses, priceValue } from "@/lib/courses";
import LearningPhilosophy from "./_components/learningPhilosophy";

export const metadata = pageMetadata({
  title: "Academy",
  description:
    "BiscoTech Academy: practical digital courses in product design, digital marketing, front-end, back-end, app and full stack development, for curious minds, career builders and business owners.",
  path: "/academy",
});

// Structured data (schema.org) so search engines understand the course catalogue: each
// course with its description, price in naira, and BiscoTech (from the layout) as provider.
const academyUrl = `${siteConfig.url}/academy`;
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "BiscoTech Academy course catalogue",
  url: `${academyUrl}#courses`,
  itemListElement: courses.map((course, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Course",
      name: course.title,
      description: course.description,
      url: `${academyUrl}/${course.slug}`,
      provider: { "@id": `${siteConfig.url}/#organization` },
      offers: {
        "@type": "Offer",
        category: "Paid",
        price: priceValue(course.price),
        priceCurrency: "NGN",
      },
    },
  })),
};

export default function Academy() {
  return (
    <>
      <AcademyHero />
      <TheIdeaIsSimple />
      <CourseCatalogue />
      <LearningPhilosophy />
      {/* Last, not first: the header treats main's first child as the hero (globals.css,
          HeaderOffset). "<" escaped so the JSON can't close the script tag early. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
