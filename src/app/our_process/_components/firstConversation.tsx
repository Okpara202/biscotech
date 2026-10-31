import Typography from "@/components/ui/typography";

const steps = [
  {
    label: "01 / PEOPLE",
    title: "We start by listening.",
    desc: "We learn about your business, audience, goals, challenges, and what success should look like. This gives us the context to make the right decisions.",
  },
  {
    label: "02 / DEFINE",
    title: "We find the focus.",
    desc: "We agree on priorities, scope, deliverables, and creative direction. You'll know what we're making, why it matters, and what comes next.",
  },
  {
    label: "03 / CREATE & LAUNCH",
    title: "We bring it to life.",
    desc: "We design, build, and refine the solution with your feedback along the way, then prepare the finished work for launch.",
  },
  {
    label: "04 / GROW",
    title: "We keep moving forward.",
    desc: "After launch, we identify useful next steps and opportunities to improve, so your digital presence can keep developing with your business.",
  },
];

// The curve in each card's bottom-right corner: three ellipses, each rotated 30.72° around its
// top-left corner (Figma: Ellipse 6 cream, Ellipse 5 white with a 38px sage border, Ellipse 4
// white with a thin teal line on top). Figma places them from the card's left edge on a 590px
// card; here they're measured from the right edge (100% - offset) so the curve stays in the
// corner at any card width. The card's overflow-hidden crops them.
const ellipseBase =
  "absolute origin-top-left rotate-[30.72deg] rounded-[50%]";

function CornerRings() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* Ellipse 6: 285×236 at 511.55, 126 */}
      <span
        className={`${ellipseBase} top-31.5 left-[calc(100%-4.903rem)] h-59 w-71.25 bg-main-background`}
      />
      {/* Ellipse 5: 285×236 at 534.27, 146.77, 38px sage border */}
      <span
        className={`${ellipseBase} top-[9.173rem] left-[calc(100%-3.483rem)] h-59 w-71.25 border-[2.375rem] border-secondary-accent bg-cards-and-sections`}
      />
      {/* Ellipse 4: ~216×178 at 548.93, 192.44 */}
      <span
        className={`${ellipseBase} top-[12.028rem] left-[calc(100%-2.567rem)] h-44.5 w-54 border border-light-teal bg-cards-and-sections`}
      />
    </div>
  );
}

// Figma card: 590×324, text block 45px from the left and 67px from the top (404px wide),
// label then 24px, title and text 18px apart (text 384px wide).
const displaySteps = steps.map((step) => (
  <div
    key={step.label}
    className="card-hover relative overflow-hidden rounded-[1.25rem] border border-secondary-accent bg-cards-and-sections px-6 pt-8 pb-28 md:px-8 md:pt-12 md:pb-32 lg:min-h-81 lg:pt-16.75 lg:pr-24 lg:pb-16.75 lg:pl-11.25"
  >
    <CornerRings />

    <div className="relative flex flex-col gap-4 md:gap-6 lg:max-w-101">
      <Typography variant="text" as="p" className="p-2.5 text-light-teal">
        {step.label}
      </Typography>

      <div className="flex flex-col gap-3 md:gap-4.5">
        <Typography variant="subHeading" as="h3" className="text-primary-brand">
          {step.title}
        </Typography>
        <Typography variant="body" className="text-text-charcoal lg:max-w-96">
          {step.desc}
        </Typography>
      </div>
    </div>
  </div>
));

// Phones/tablets: heading centred, cards in one column. Laptop+: heading left, 2×2 grid of
// cards (Figma: 20px between columns, 18px between rows, 24px below the heading).
export default function FirstConversation() {
  return (
    <section className="bg-main-background py-14 md:py-20 lg:py-24">
      <div className="page-container flex flex-col items-center gap-8 md:gap-10 lg:items-stretch lg:gap-6">
        <div className="flex flex-col items-center gap-3 text-center md:gap-4.5 lg:items-start lg:text-left">
          <Typography
            variant="navigation"
            as="p"
            className="uppercase text-primary-brand"
          >
            FROM FIRST CONVERSATION TO FIRST LAUNCH
          </Typography>

          <Typography
            variant="section"
            className="max-w-xl text-primary-brand lg:max-w-130.5"
          >
            Four <Typography variant="span-newsreader">steps</Typography>. One
            shared <Typography variant="span-newsreader">direction.</Typography>
          </Typography>
        </div>

        <div className="grid w-full max-w-xl grid-cols-1 gap-4 md:gap-5 lg:max-w-none lg:grid-cols-2 lg:gap-x-5 lg:gap-y-4.5">
          {displaySteps}
        </div>
      </div>
    </section>
  );
}
