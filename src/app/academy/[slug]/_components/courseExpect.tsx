import { TickIcon } from "@/components/ui/reusable/svg";
import Typography from "@/components/ui/typography";
import type { CourseDetails } from "@/lib/courses";
import { cn } from "@/lib/utils";

// White card with a title and a ticked list, sage lines between the rows (Figma: 586px wide,
// 25px top/bottom, 37px sides, each row 24px top/bottom). With a note below the list, the
// last row keeps its line to separate the two.
function Checklist({ title, items, note }: { title: string; items: string[]; note?: string }) {
  return (
    <div className="flex flex-col gap-3 rounded-[1.25rem] bg-cards-and-sections px-5 py-6 md:px-6 lg:gap-6.5 lg:px-9.25 lg:py-6.25">
      <Typography variant="cardHeading" as="h3" className="text-black">
        {title}
      </Typography>

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
            <Typography variant="body" as="span" className="text-black">
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

// "What should you expect?": intro on top (612px), then the two checklists side by side from
// tablet, stretched to the same height (Figma: 26px apart, 30px below the intro).
export default function CourseExpect({ details }: { details: CourseDetails }) {
  return (
    // id: the hero's "View learning package" button jumps here
    <section id="learning-package" className="bg-main-background py-14 md:py-20 lg:py-24">
      <div className="page-container flex flex-col gap-8 md:gap-10 lg:gap-7.5">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center md:gap-5.5 lg:mx-0 lg:max-w-153 lg:items-start lg:text-left">
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <Typography variant="navigation" as="p" className="text-primary-brand">
              THE LEARNING EXPERIENCE
            </Typography>
            <Typography variant="section" className="text-primary-brand">
              What should you expect?
            </Typography>
          </div>
          <Typography variant="largeBody" as="p" className="text-primary-brand">
            {details.expect}
          </Typography>
        </div>

        <div className="reveal-children grid gap-5 md:grid-cols-2 lg:gap-6.5">
          <Checklist title="What you'll learn" items={details.learn} />
          <Checklist title="Who this course is for" items={details.audience} note={details.audienceNote} />
        </div>
      </div>
    </section>
  );
}
