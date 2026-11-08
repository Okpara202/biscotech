import Typography from "@/components/ui/typography";
import type { SectionOf } from "@/lib/courses";
import { cn } from "@/lib/utils";
import CourseSectionHeading, { sectionTones } from "./courseSectionHeading";

// A band of small white cards, e.g. "What will you work on?" (Figma: three across, 23px apart,
// sage border, 32px sides, 16px top/bottom). Some courses add a small label above the title.
export default function CourseCards({ section }: { section: SectionOf<"cards"> }) {
  return (
    <section className={sectionTones[section.tone]}>
      <div className="page-container flex flex-col items-center gap-8 md:gap-10 lg:items-stretch lg:gap-6">
        <CourseSectionHeading label={section.label} title={section.title} intro={section.intro} />

        {/* Figma: each card is only as tall as its text and centred along the row, unless the
            section asks for `sameHeight` (103px, text centred inside) */}
        {/* `scroll`: one sideways-scrolling row of 388px cards (Figma clips the row after three) */}
        <ul
          className={cn(
            "reveal-children w-full gap-4",
            section.scroll
              ? "flex snap-x snap-mandatory items-stretch overflow-x-auto pb-2 lg:gap-5.75"
              : "grid max-w-xl lg:max-w-none lg:grid-cols-3 lg:gap-5.75",
            !section.scroll && !section.sameHeight && "lg:items-center",
          )}
        >
          {section.cards.map((card) => (
            <li
              key={card.title}
              className={cn(
                "card-hover flex flex-col gap-3 rounded-[0.625rem] border border-secondary-accent bg-cards-and-sections px-5 py-4 lg:gap-4.5 lg:pr-7 lg:pl-8",
                section.sameHeight && "lg:min-h-25.75 lg:justify-center lg:py-1.5 lg:pr-2.5",
                section.scroll && "w-[min(24.25rem,85%)] shrink-0 snap-start",
              )}
            >
              {card.label && (
                <Typography
                  variant="cardHeading"
                  as="p"
                  className={section.tealLabels ? "text-light-teal" : "text-primary-brand"}
                >
                  {card.label}
                </Typography>
              )}
              <Typography variant="cardHeading" as="h3" className="text-primary-brand">
                {card.title}
              </Typography>
              <Typography variant="body" className="text-text-charcoal">
                {card.description}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
