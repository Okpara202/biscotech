import JsonLd from "@/components/ui/reusable/jsonLd";
import { courseOffer, courses } from "@/lib/courses";
import { organizationRef, pageJsonLd, pageMetadata, siteConfig } from "@/lib/seo";
import AcademyHero from "./_components/academyHero";
import TheIdeaIsSimple from "./_components/theIdeaIsSimple";
import CourseCatalogue from "./_components/courseCatalogue";
import LearningPhilosophy from "./_components/learningPhilosophy";

const description =
  "Practical courses in product design, digital marketing, and front-end, back-end, app and full stack development, from BiscoTech Academy.";

export const metadata = pageMetadata({
  title: "Academy: Tech & Digital Skills Courses",
  description,
  path: "/academy",
});

// Structured data so search engines understand the course catalogue: each course with its
// description and BiscoTech as the provider.
const academyUrl = `${siteConfig.url}/academy`;
const jsonLd = pageJsonLd({
  type: "CollectionPage",
  name: "Academy",
  description,
  path: "/academy",
  extra: [
    {
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
          provider: organizationRef,
          ...courseOffer(course),
        },
      })),
    },
  ],
});

export default function Academy() {
  return (
    <>
      <AcademyHero />
      <TheIdeaIsSimple />
      <CourseCatalogue />
      <LearningPhilosophy />
      <JsonLd data={jsonLd} />
    </>
  );
}
