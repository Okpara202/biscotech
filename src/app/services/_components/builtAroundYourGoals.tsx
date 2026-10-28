import Typography from "@/components/ui/typography";

const buildPlan = [
  {
    title: "Start with the need",
    desc: "We first understand what you want to achieve and what is getting in the way.",
  },
  {
    title: "Choose the right scope",
    desc: "We recommend the services and deliverables that make sense for your project.",
  },
  {
    title: "Make it together",
    desc: "We recommend the services and deliverables that make sense for your project.",
  },
  {
    title: "Move forward",
    desc: "We deliver with the next step in mind, whether that's launch, learning, or growth.",
  },
];

const displayBuildPlan = buildPlan.map((plan) => (
  <aside
    key={plan.title}
    className="border-t border-t-text-charcoal py-5 flex flex-col gap-y-2 md:gap-y-6 text-text-charcoal"
  >
    <Typography variant="cardHeading" as="h3">
      {plan.title}
    </Typography>
    <Typography variant="body" className="lg:pr-4">
      {plan.desc}
    </Typography>
  </aside>
));

export default function BuiltAroundYourGoals() {
  return (
    <section className="bg-secondary-accent">
      <div className="page-container py-16">
        <Typography
          variant="navigation"
          as="p"
          className="text-primary-brand text-center uppercase"
        >
          Built Around Your Goals
        </Typography>

        <Typography
          variant="section"
          className="mt-3 text-primary-brand text-center md:mt-4"
        >
          No{" "}
          <Typography variant="span-newsreader">
            unnecessary complexity.
          </Typography>{" "}
          A {/* Forced line break only on laptop+, where Figma breaks it */}
          <br className="hidden lg:block" />
          <Typography variant="span-newsreader">clear plan.</Typography>
        </Typography>

        {/* Phones: one step per row. Tablets: 2×2. Laptop+: Figma's four columns */}
        <div className="mt-7 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-3">
          {displayBuildPlan}
        </div>
      </div>
    </section>
  );
}
