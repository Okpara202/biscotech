import Button from "@/components/ui/button";
import { ArrowUpEnd } from "@/components/ui/reusable/svg";
import Typography from "@/components/ui/typography";
import type { SectionOf } from "@/lib/courses";
import { cn } from "@/lib/utils";
import CourseSectionHeading, { CourseBullet, sectionTones } from "./courseSectionHeading";

// The three packages; the recommended one is dark with a champagne title
// (Figma: 18px apart, 50px sides, 33px top/bottom, 32px between the blocks in a card).
export default function CoursePackages({ section }: { section: SectionOf<"packages"> }) {
  return (
    // id: the hero's "View learning package" button jumps here
    // On cream it runs into the cream green-card section, whose top padding is the only gap
    <section
      id="learning-package"
      className={cn(
        sectionTones[section.tone],
        section.tone === "cream" && "pb-0 md:pb-0 lg:pb-0",
        section.closeToCta && "lg:-mb-11.25",
      )}
    >
      <div className="page-container flex flex-col items-center gap-8 md:gap-10 lg:items-stretch lg:gap-6">
        <CourseSectionHeading label={section.label} title={section.title} intro={section.intro} />

        {/* Figma: each card is only as tall as its content, centred along the row */}
        <div className="reveal-children grid w-full max-w-xl gap-4 lg:max-w-none lg:grid-cols-3 lg:items-center lg:gap-4.5">
          {section.packages.map((pack) => {
            const body = pack.featured ? "text-cards-and-sections" : "text-text-charcoal";
            return (
              <article
                key={pack.title}
                className={cn(
                  "flex flex-col gap-6 rounded-[0.625rem] px-6 py-7 lg:gap-8 lg:px-6 lg:py-8.25 min-[90rem]:px-12.5",
                  pack.featured
                    ? "border border-cards-and-sections bg-primary-brand"
                    : "bg-cards-and-sections",
                )}
              >
                <div className="flex flex-col gap-3">
                  <Typography variant="text" as="p" className={body}>
                    {pack.tag}
                  </Typography>
                  <Typography
                    variant="subHeading"
                    as="h3"
                    className={cn(
                      "min-[90rem]:whitespace-nowrap",
                      pack.featured ? "text-[#D7B98E]" : "text-primary-brand",
                    )}
                  >
                    {pack.title}
                  </Typography>
                  <Typography variant="body" className={body}>
                    {pack.description}
                  </Typography>
                </div>

                <ul className="flex flex-col gap-4 lg:gap-6">
                  {pack.features.map((feature) => (
                    // Figma: the dot is centred against the text, even on two-line items
                    <li
                      key={feature}
                      className="flex items-center gap-2 [&>span:first-child]:translate-y-0"
                    >
                      <CourseBullet light={pack.featured} />
                      <Typography
                        variant="body"
                        as="span"
                        className={cn(
                          body,
                          pack.oneLine?.includes(feature) && "min-[90rem]:whitespace-nowrap",
                        )}
                      >
                        {feature}
                      </Typography>
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  icon={
                    <ArrowUpEnd
                      className={cn("shrink-0", pack.featured && "text-primary-brand")}
                    />
                  }
                  className={cn(
                    "w-full border-0 sm:w-auto sm:self-start",
                    pack.featured
                      ? "bg-cards-and-sections text-primary-brand"
                      : "bg-primary-brand text-cards-and-sections",
                  )}
                >
                  {pack.action}
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
