import type { SectionOf } from "@/lib/courses";
import { Checklist } from "./courseExpect";
import CourseSectionHeading, { sectionTones } from "./courseSectionHeading";

// Sage band with ticked lists in white cards, e.g. "More than just backend tools."
// (Figma: 586px wide, 26px apart, 24px below the heading).
export default function CourseTicks({ section }: { section: SectionOf<"ticks"> }) {
  return (
    <section className={sectionTones.sage}>
      <div className="page-container flex flex-col gap-8 md:gap-10 lg:gap-6">
        <CourseSectionHeading label={section.label} title={section.title} intro={section.intro} />

        <div className="reveal-children grid gap-5 md:grid-cols-2 lg:gap-6.5">
          {section.lists.map((items) => (
            <Checklist key={items[0]} items={items} />
          ))}
        </div>
      </div>
    </section>
  );
}
