import StackCards from "@/components/ui/reusable/stackCards";
import Typography from "@/components/ui/typography";
import type { SectionOf } from "@/lib/courses";
import CourseSectionHeading from "./courseSectionHeading";

// One-line sage cards, two across (Figma: 588px wide, 22px apart, 18px between rows, 39px in
// from the left, 24px top/bottom). The green card's cream section follows straight on, so
// its top padding is the gap below.
export default function CourseHighlights({ section }: { section: SectionOf<"highlights"> }) {
  return (
    <section className="bg-main-background pt-14 md:pt-20 lg:pt-24">
      <div className="page-container flex flex-col items-start gap-8 md:gap-10 lg:items-stretch lg:gap-6">
        {/* Figma: the heading is 438px wide, so it breaks before "the Code" */}
        <CourseSectionHeading
          label={section.label}
          title={section.title}
          titleClassName="lg:max-w-109.5"
        />

        <StackCards
          as="ul"
          className="reveal-children grid w-full max-w-xl gap-3 md:max-w-none md:grid-cols-2 lg:gap-x-5.5 lg:gap-y-4.5"
        >
          {section.items.map((item) => (
            <li
              key={item}
              className="card-hover rounded-[0.625rem] bg-secondary-accent px-5 py-5 lg:py-6 lg:pr-10 lg:pl-9.75"
            >
              <Typography variant="cardHeading" as="p" className="text-primary-brand">
                {item}
              </Typography>
            </li>
          ))}
        </StackCards>
      </div>
    </section>
  );
}
