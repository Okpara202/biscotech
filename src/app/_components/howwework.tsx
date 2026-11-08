import Typography from "@/components/ui/typography";

const steps = [
  {
    label: "01 / DISCOVER",
    title: "We listen first.",
    description:
      "We learn about your business, audience, challenges and what success should look like.",
  },
  {
    label: "02 / DEFINE",
    title: "We find the focus.",
    description:
      "We design, build and refine the solution with your feedback along the way.",
  },
  {
    label: "03 / CREATE & LAUNCH",
    title: "We bring it to life.",
    description:
      "We design, build, launch, and refine your solution with your feedback every step of the way.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-primary-brand py-16 text-cards-and-sections">
      <div className="mx-auto flex page-container flex-col gap-8 md:gap-13">
        {/* Section heading */}
        <div className="flex flex-col gap-4 md:gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4.75 lg:w-146.75">
            <Typography variant="navigation">03 / HOW WE WORK</Typography>
            <Typography variant="section">
              A <Typography variant="span-newsreader">clear process.</Typography>{" "}
              No{" "}
              <Typography variant="span-newsreader">
                unnecessary complexity.
              </Typography>
            </Typography>
          </div>
          <Typography variant="body" className="max-w-xl lg:w-83.5">
            Good collaboration makes better work. Here&apos;s what working with
            Bisco can look like.
          </Typography>
        </div>

        {/* Steps. stack-cards: on phones they pile up over each other as you scroll (each
            needs the section's teal behind it to cover the one underneath) */}
        <ol className="reveal-children stack-cards grid grid-cols-1 gap-6.5 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.label}
              className="flex flex-col gap-4 border-t border-cards-and-sections bg-primary-brand py-5 md:gap-10.75 md:px-6 md:py-5.5 lg:px-11"
            >
              {/* Smaller on phones so the step title stays the stronger line */}
              <Typography
                variant="cardHeading"
                as="p"
                className="text-sm leading-5 opacity-80 md:text-base md:opacity-100 lg:text-xl lg:leading-7"
              >
                {step.label}
              </Typography>
              <div className="flex flex-col gap-5.25 lg:max-w-74">
                <Typography variant="subHeading" as="h3">
                  {step.title}
                </Typography>
                <Typography variant="body">{step.description}</Typography>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
