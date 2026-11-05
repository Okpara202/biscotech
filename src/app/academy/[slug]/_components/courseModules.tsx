import Typography from "@/components/ui/typography";
import type { SectionOf } from "@/lib/courses";
import CourseSectionHeading from "./courseSectionHeading";

// Sage band with the course outline: white module cards, two across from tablet
// (Figma: 590px wide, 32px sides, 16px top/bottom, 18px between the lines of text).
export default function CourseModules({ section }: { section: SectionOf<"modules"> }) {
  return (
    <section className="bg-secondary-accent py-14 lg:py-16">
      <div className="page-container flex flex-col gap-8 md:gap-10 lg:gap-6">
        <CourseSectionHeading label={section.label} title={section.title} intro={section.intro} />

        <ol className="reveal-children grid gap-4 md:grid-cols-2 lg:gap-x-5.5 lg:gap-y-4.5">
          {section.modules.map((module) => (
            <li
              key={module.label}
              className="card-hover flex flex-col gap-3 rounded-[0.625rem] border border-transparent bg-cards-and-sections px-5 py-4 lg:gap-4.5 lg:px-8"
            >
              <Typography variant="text" as="p" className="text-text-charcoal">
                {module.label}
              </Typography>
              <Typography variant="cardHeading" as="h3" className="text-primary-brand">
                {module.title}
              </Typography>
              <Typography variant="body" className="text-text-charcoal">
                {module.description}
              </Typography>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
