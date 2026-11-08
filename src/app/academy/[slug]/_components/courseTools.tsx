import Typography from "@/components/ui/typography";
import type { SectionOf } from "@/lib/courses";
import CourseSectionHeading from "./courseSectionHeading";

// Rounded tags for the tools a course covers (Figma: white, sage border, 20px corners, 13px
// sides, 12px top/bottom, 13px apart in a row, 18px between rows). It runs straight into the
// next cream section, whose top padding is the gap between them.
export default function CourseTools({ section }: { section: SectionOf<"tools"> }) {
  return (
    <section className="bg-main-background pt-14 md:pt-20 lg:pt-24">
      <div className="page-container flex flex-col items-start gap-8 md:gap-10 lg:items-stretch lg:gap-6">
        <CourseSectionHeading label={section.label} title={section.title} intro={section.intro} />

        <ul className="reveal-children flex flex-wrap gap-x-3.25 gap-y-3 lg:gap-y-4.5">
          {section.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-[1.25rem] border border-secondary-accent bg-cards-and-sections px-3.25 py-3"
            >
              <Typography variant="body" as="span" className="text-black">
                {tool}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
