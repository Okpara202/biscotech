import BeforeFooterAction from "@/components/ui/reusable/beforeFooterAction";
import Typography from "@/components/ui/typography";

const philosophy = [
  {
    num: "01",
    title: "Start with curiosity",
    desc: "Find an area that matches your interests and goals.",
  },
  {
    num: "02",
    title: "Build through practice",
    desc: "Work towards understanding skills by exploring how they are used.",
  },
  {
    num: "03",
    title: "Keep moving forward",
    desc: "Grow your confidence and keep building on what you learn.",
  },
];

// Phones/tablets: intro above the numbered list. Laptop+: intro left, list right
// (Figma: list column ~568px, starting just past the middle). The green CTA card sits below.
export default function LearningPhilosophy() {
  return (
    <section className="bg-main-background py-14 md:py-20 lg:py-24">
      <div className="page-container grid gap-10 md:gap-12 lg:grid-cols-[1fr_35.5rem] lg:gap-16">
        <div className="flex flex-col items-start gap-3 md:gap-4.5 lg:gap-6">
          <Typography variant="navigation" as="p" className="text-primary-brand">
            OUR LEARNING PHILOSOPHY
          </Typography>
          <Typography variant="section" className="max-w-xl text-primary-brand lg:max-w-114">
            Not just what you know.{" "}
            <Typography variant="span-newsreader">What you can do with it.</Typography>
          </Typography>
        </div>

        {/* Lines between the steps, plus one above the first and below the last */}
        <ol className="reveal-children mx-auto w-full max-w-xl border-b border-secondary-accent lg:max-w-none">
          {philosophy.map((step) => (
            <li
              key={step.num}
              className="group flex gap-4 border-t border-secondary-accent py-6 md:gap-6 md:py-7 lg:pr-7"
            >
              <Typography variant="text" as="span" className="shrink-0 pt-0.5 text-light-teal transition-colors duration-300 group-hover:text-primary-brand">
                {step.num}
              </Typography>
              <div className="flex flex-col gap-2 transition-[translate] duration-300 ease-out motion-safe:group-hover:translate-x-1.5 md:gap-3">
                <Typography variant="cardHeading" as="h3" className="text-primary-brand">
                  {step.title}
                </Typography>
                <Typography variant="body" className="text-text-charcoal">
                  {step.desc}
                </Typography>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <BeforeFooterAction
        className="mt-14 md:mt-20 lg:mt-24"
        label="COMING INTO FOCUS"
        title="Your next skill could open a new door."
        highlight=""
        titleAfter=""
        description="Tell us what you're building, what isn't working, or where you want to go. We'll take it from there."
        action={{ label: "Let's talk", href: "/contact" }}
      />
    </section>
  );
}
