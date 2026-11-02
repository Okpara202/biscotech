import Typography from "@/components/ui/typography";
import type { CourseDetails } from "@/lib/courses";

// Sage section: label, heading and note, then the modules (still being designed in Figma;
// shown as simple white cards once they're added to src/lib/courses.tsx).
export default function CourseOutline({ outline }: { outline: CourseDetails["outline"] }) {
  return (
    <section className="bg-secondary-accent py-14 lg:py-16">
      <div className="page-container flex flex-col gap-10 md:gap-12">
        {/* Figma: 612px wide, heading 566px; 12px under the label, 22px above the note */}
        <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center md:gap-5.5 lg:mx-0 lg:max-w-153 lg:items-start lg:text-left">
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <Typography variant="navigation" as="p" className="text-primary-brand">
              {outline.label}
            </Typography>
            <Typography variant="section" className="text-primary-brand lg:max-w-141.5">
              {outline.title}
            </Typography>
          </div>
          <Typography variant="largeBody" as="p" className="text-primary-brand">
            {outline.intro}
          </Typography>
        </div>

        {outline.modules.length > 0 && (
          <ol className="reveal-children grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {outline.modules.map((module) => (
              <li
                key={module.weeks}
                className="card-hover flex flex-col gap-3 rounded-[1.25rem] border border-transparent bg-cards-and-sections px-6 py-7"
              >
                <Typography variant="text" as="span" className="text-light-teal">
                  {module.weeks}
                </Typography>
                <Typography variant="cardHeading" as="h3" className="text-primary-brand">
                  {module.title}
                </Typography>
                {module.topics && (
                  <ul className="flex list-disc flex-col gap-1.5 pl-5 text-text-charcoal">
                    {module.topics.map((topic) => (
                      <li key={topic}>
                        <Typography variant="text" as="span">
                          {topic}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
