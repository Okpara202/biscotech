import Button from "@/components/ui/button";
import { ArrowUpEnd } from "@/components/ui/reusable/svg";
import Typography from "@/components/ui/typography";
import type { SectionOf } from "@/lib/courses";
import { cn } from "@/lib/utils";
import CourseSectionHeading, { CourseBullet, sectionTones } from "./courseSectionHeading";

// Curriculum cards: stage, title, summary, then the topics and any practical project. Two
// across from tablet (Figma: 590px wide, 44px sides, ~18px between the topics).
export default function CourseStages({ section }: { section: SectionOf<"stages"> }) {
  const topicVariant = section.compact ? "text" : "body";

  return (
    <section className={sectionTones[section.tone]}>
      {/* Figma: 32px below the heading when there's a button beside it, otherwise 24px */}
      <div
        className={cn(
          "page-container flex flex-col gap-8 md:gap-10",
          section.action ? "lg:gap-8" : "lg:gap-6",
        )}
      >
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-between">
          <CourseSectionHeading
            label={section.label}
            title={section.title}
            intro={section.intro}
            wideTitle={section.compact}
          />
          {section.action && (
            <Button
              href="/contact"
              icon={<ArrowUpEnd />}
              className="w-full shrink-0 border-0 bg-primary-brand text-cards-and-sections sm:w-auto"
            >
              {section.action}
            </Button>
          )}
        </div>

        <ol
          className={cn(
            "reveal-children grid gap-4 md:grid-cols-2 lg:gap-x-5.5",
            section.compact ? "lg:gap-y-6" : "lg:gap-y-4.5",
          )}
        >
          {section.stages.map((stage) => (
            <li
              key={stage.label}
              className={cn(
                "flex flex-col gap-6 rounded-[0.625rem] bg-cards-and-sections px-5 py-6",
                (section.topicColumns || section.shortCards) && "lg:gap-5",
                // Figma: two-column topics 606px tall, 38px down; short cards 404px tall,
                // 61px down, 44px in; other compact cards 701px tall, 74px down, both 53px
                // in; the rest fit their text with 44px sides
                section.topicColumns
                  ? "lg:min-h-151.5 lg:px-13.25 lg:pt-9.5 lg:pb-4"
                  : section.shortCards
                    ? "lg:min-h-101 lg:px-11 lg:pt-15.25 lg:pb-8"
                    : section.compact
                      ? "lg:min-h-175.25 lg:px-13.25 lg:pt-18.5 lg:pb-8"
                      : "lg:px-11 lg:py-7.25",
                stage.wide && "lg:pr-px",
              )}
            >
              <div className="flex flex-col gap-3 lg:gap-4.5">
                <Typography variant="text" as="p" className="text-light-teal">
                  {stage.label}
                </Typography>
                <Typography variant="cardHeading" as="h3" className="text-primary-brand">
                  {stage.title}
                </Typography>
                {/* Figma: text 446px wide, topics 472px, unless the card is `wide` */}
                {stage.description && (
                  <Typography
                    variant="body"
                    className={cn("text-text-charcoal", !stage.wide && "lg:max-w-111.5")}
                  >
                    {stage.description}
                  </Typography>
                )}
              </div>

              <ul
                className={cn(
                  "grid gap-3",
                  stage.wide ? "lg:gap-y-3.5" : "lg:gap-y-4.5",
                  stage.tightTopics && "lg:gap-y-3",
                  // At full width the first column fits Figma's longest topics on one line
                  section.topicColumns === 2 &&
                    "gap-x-3 sm:grid-cols-2 min-[90rem]:grid-cols-[16.25rem_1fr] min-[90rem]:gap-x-0",
                )}
              >
                {stage.topics.map((topic, index) => (
                  // By position: Figma repeats a topic within a card ("Views" in Django)
                  <li key={index} className="flex items-start gap-2">
                    <CourseBullet />
                    <Typography
                      variant={topicVariant}
                      as="span"
                      className={cn(
                        "text-text-charcoal",
                        !stage.wide && "lg:max-w-118",
                        section.topicColumns === 2 && "min-[90rem]:whitespace-nowrap",
                      )}
                    >
                      {topic}
                    </Typography>
                  </li>
                ))}
              </ul>

              {stage.project && (
                <Typography
                  variant="text"
                  as="p"
                  className="rounded-[0.625rem] bg-secondary-accent p-2.5 text-primary-brand lg:max-w-121"
                >
                  Practical projects: {stage.project}
                </Typography>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
