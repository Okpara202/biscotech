import Button from "@/components/ui/button";
import { ArrowUpEnd } from "@/components/ui/reusable/svg";
import Typography from "@/components/ui/typography";
import { FEES_TBA, SHOW_PRICES, type Course } from "@/lib/courses";
import { cn } from "@/lib/utils";

// Course name with the last word in teal: Product Design
function CourseName({ title }: { title: string }) {
  const words = title.split(" ");
  const last = words.pop();
  return (
    <Typography variant="hero" className="text-primary-brand">
      {words.length > 0 && <>{words.join(" ")} </>}
      <span className="text-light-teal">{last}</span>
    </Typography>
  );
}

// Phones/tablets: text centred above the fee card. Laptop+: label across the top, then text
// left (612px) and fee card right (464px), both level with each other (Figma).
// First section on the page, so it sits behind the transparent header like the other heroes.
export default function CourseHero({ course }: { course: Course }) {
  const { details } = course;
  const facts = details?.facts ?? [];

  return (
    <section className="bg-secondary-accent/40">
      {/* Spacing lives on the inner box: the section's own top padding is reserved for
          the header offset (globals.css). Figma: 96px below the header line, 60px at the bottom. */}
      <div className="page-container flex flex-col gap-5 pt-10 pb-14 md:gap-6 lg:pt-24 lg:pb-15">
        <Typography
          variant="text"
          as="p"
          className="text-center uppercase text-text-charcoal lg:text-left"
        >
          {details?.heroLabel ?? "BISCOTECH ACADEMY"}
        </Typography>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-xl flex-col items-center gap-6 text-center lg:min-w-0 lg:max-w-153 lg:flex-1 lg:items-start lg:gap-8 lg:text-left">
            <div className="flex flex-col gap-3 lg:gap-2">
              <CourseName title={details?.heroTitle ?? course.title} />

              <Typography variant="largeBody" as="p" className="text-primary-brand">
                {details?.intro ?? course.description}
              </Typography>
            </div>

            {/* Phones: full-width stacked buttons; side by side from sm */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-5 lg:gap-7">
              <Button
                href={details ? "#learning-package" : "/contact"}
                icon={<ArrowUpEnd />}
                className="w-full shrink-0 border-0 bg-primary-brand text-cards-and-sections sm:w-auto"
              >
                {details ? "View learning package" : "Register your interest"}
              </Button>
              <Button
                href="/contact"
                className="w-full shrink-0 border border-primary-brand bg-transparent text-text-charcoal hover:bg-primary-brand hover:text-cards-and-sections sm:w-auto"
              >
                Ask a question
              </Button>
            </div>
          </div>

          {/* Fee card (Figma: 464px wide, 48px sides, 40px top/bottom, 10px corners). The narrow
              one starts in the same place at full width, so it ends 48px before the edge. */}
          <div
            className={cn(
              "flex w-full max-w-md flex-col gap-6 rounded-[0.625rem] bg-cards-and-sections px-6 py-7 text-left md:px-9 md:py-9 lg:max-w-none lg:flex-[0_1_29rem] lg:gap-6.5 lg:px-8 lg:py-10 xl:px-12",
              details?.narrowFeeCard && "min-[90rem]:mr-12 min-[90rem]:flex-[0_1_26rem]",
            )}
          >
            <div className="flex flex-col gap-2.5">
              <Typography variant="primaryButton" as="p" className="text-text-charcoal">
                Course fee
              </Typography>
              {/* Figma: 320px wide, so the fees note breaks onto two lines */}
              <Typography variant="subHeading" as="p" className="text-primary-brand lg:max-w-80">
                {SHOW_PRICES && course.price ? course.price : FEES_TBA}
              </Typography>
            </div>

            {facts.length > 0 && (
              // Sage line on top; second column starts 170px in, 36px between the rows (Figma)
              <dl className="grid grid-cols-2 gap-x-4 gap-y-6 border-t border-secondary-accent pt-3.5 lg:grid-cols-[10.625rem_1fr] lg:gap-x-0 lg:gap-y-9">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex flex-col gap-1.5 lg:gap-3.5">
                    {/* Value first visually, but the label is the <dt> for screen readers */}
                    <dt className="order-2">
                      <Typography variant="body" as="span" className="text-text-charcoal">
                        {fact.label}
                      </Typography>
                    </dt>
                    <dd className="order-1">
                      <Typography variant="cardHeading" as="span" className="text-primary-brand">
                        {fact.value}
                      </Typography>
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
