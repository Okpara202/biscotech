import { TickIcon } from "@/components/ui/reusable/svg";
import Typography from "@/components/ui/typography";
import type { SectionOf } from "@/lib/courses";
import { cn } from "@/lib/utils";
import CourseSectionHeading, { sectionTones } from "./courseSectionHeading";

// White card with an optional title and a ticked list, sage lines between the rows (Figma:
// 586px wide, 25px top/bottom, 37px sides, each row 24px top/bottom). With a note below the
// list, the last row keeps its line to separate the two.
export function Checklist({
  title,
  items,
  note,
  className,
}: {
  title?: string;
  items: string[];
  note?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-[1.25rem] bg-cards-and-sections px-5 py-6 md:px-6 lg:gap-6.5 lg:px-9.25 lg:py-6.25",
        className,
      )}
    >
      {title && (
        <Typography variant="cardHeading" as="h3" className="text-black">
          {title}
        </Typography>
      )}

      <ul>
        {items.map((item) => (
          <li
            key={item}
            className={cn(
              "flex gap-3 border-b border-secondary-accent py-4 lg:gap-6 lg:py-6",
              !note && "last:border-b-0",
            )}
          >
            <TickIcon className="size-5 shrink-0 lg:size-6" />
            {/* Figma: long rows may run a little past the divider, into the card's padding */}
            <Typography variant="body" as="span" className="text-black lg:-mr-6">
              {item}
            </Typography>
          </li>
        ))}
      </ul>

      {note && (
        <Typography variant="body" className="py-4 text-black lg:max-w-115 lg:py-6">
          {note}
        </Typography>
      )}
    </div>
  );
}

// "What should you expect?". With an audience list: intro on top, then the two checklists side
// by side from tablet at the same height (Figma: 26px apart, 30px below the intro). Without
// one: intro and the single checklist side by side on laptop+ (Figma: Python).
export default function CourseExpect({ section }: { section: SectionOf<"expect"> }) {
  const heading = (
    <CourseSectionHeading
      label={section.label}
      title={section.title}
      intro={section.intro}
      // Figma: 556px when it sits beside the list
      introClassName={section.audience ? undefined : "lg:max-w-139"}
    />
  );

  if (!section.audience) {
    return (
      <section className={sectionTones.cream}>
        <div className="page-container flex flex-col items-start gap-8 md:gap-10 lg:flex-row lg:justify-between">
          {heading}
          <Checklist
            title="What you'll learn"
            items={section.learn}
            className="w-full max-w-xl lg:max-w-146.5 lg:shrink-0 lg:basis-146.5"
          />
        </div>
      </section>
    );
  }

  return (
    <section className={sectionTones.cream}>
      <div className="page-container flex flex-col gap-8 md:gap-10 lg:gap-7.5">
        {heading}
        <div className="reveal-children grid gap-5 md:grid-cols-2 lg:gap-6.5">
          <Checklist title="What you'll learn" items={section.learn} />
          <Checklist title="Who this course is for" items={section.audience} note={section.audienceNote} />
        </div>
      </div>
    </section>
  );
}
