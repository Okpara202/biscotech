import Button from "@/components/ui/button";
import { ArrowUpEnd } from "@/components/ui/reusable/svg";
import Typography from "@/components/ui/typography";
import type { SectionOf } from "@/lib/courses";
import { cn } from "@/lib/utils";
import CourseSectionHeading, { CourseBullet, sectionTones } from "./courseSectionHeading";

// Every card is white; hovering one (or tabbing to its button) fades it into the dark teal
// style with a champagne title and grows it slightly above the others
const active = {
  // the card's colours and size
  card: "hover:z-10 hover:border-cards-and-sections hover:bg-primary-brand hover:shadow-[0_1.5rem_3rem_-1.5rem_rgba(18,63,58,0.6)] motion-safe:hover:scale-[1.03] focus-within:z-10 focus-within:border-cards-and-sections focus-within:bg-primary-brand focus-within:shadow-[0_1.5rem_3rem_-1.5rem_rgba(18,63,58,0.6)] motion-safe:focus-within:scale-[1.03]",
  text: "group-hover:text-cards-and-sections group-focus-within:text-cards-and-sections",
  title: "group-hover:text-[#D7B98E] group-focus-within:text-[#D7B98E]",
  dot: "group-hover:bg-cards-and-sections group-focus-within:bg-cards-and-sections",
  button:
    "group-hover:bg-cards-and-sections group-hover:text-primary-brand group-focus-within:bg-cards-and-sections group-focus-within:text-primary-brand",
};

// Colour changes fade in at the same slow pace as the card, so the switch to dark is soft
const fade = "transition-colors duration-900 ease-in-out";

// The three packages (Figma: 18px apart, 50px sides, 33px top/bottom, 32px between the
// blocks in a card).
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
        <div
          className={cn(
            "reveal-children grid w-full max-w-xl gap-4 lg:max-w-none lg:grid-cols-3 lg:gap-4.5",
            section.sameHeight ? "lg:items-stretch" : "lg:items-center",
          )}
        >
          {section.packages.map((pack) => (
            <article
              key={pack.title}
              className={cn(
                "group relative flex flex-col gap-6 rounded-[0.625rem] border border-transparent bg-cards-and-sections px-6 py-7 transition-[background-color,border-color,box-shadow,scale] duration-900 ease-in-out lg:gap-8 lg:px-6 lg:py-8.25 min-[90rem]:px-12.5",
                active.card,
              )}
            >
              <div className="flex flex-col gap-3">
                <Typography
                  variant="text"
                  as="p"
                  className={cn("text-text-charcoal", fade, active.text)}
                >
                  {pack.tag}
                </Typography>
                <Typography
                  variant="subHeading"
                  as="h3"
                  className={cn(
                    "text-primary-brand min-[90rem]:whitespace-nowrap",
                    fade,
                    active.title,
                  )}
                >
                  {pack.title}
                </Typography>
                <Typography variant="body" className={cn("text-text-charcoal", fade, active.text)}>
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
                    <CourseBullet dotClassName={cn("bg-black", fade, active.dot)} />
                    <Typography
                      variant="body"
                      as="span"
                      className={cn(
                        "text-text-charcoal",
                        fade,
                        active.text,
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
                icon={<ArrowUpEnd className="shrink-0 text-current" />}
                className={cn(
                  "w-full border-0 bg-primary-brand text-cards-and-sections sm:w-auto sm:self-start",
                  // Same order as the button's transition list: its lift, press and shadow stay
                  // quick, its colours change with the card
                  "[transition-duration:300ms,300ms,300ms,900ms,900ms,300ms]",
                  section.sameHeight && "lg:mt-auto",
                  active.button,
                )}
              >
                {pack.action}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
