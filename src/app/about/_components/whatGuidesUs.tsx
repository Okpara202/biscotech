import StackCards from "@/components/ui/reusable/stackCards";
import Typography from "@/components/ui/typography";

const guides = [
  {
    title: "01 / PEOPLE",
    descTitle: "People before pixels.",
    desc: "We begin with the people you're trying to reach and the needs you're trying to solve.",
  },
  {
    title: "02 / CLARITY",
    descTitle: "Clarity over clutter.",
    desc: "We make complex things easier to understand through thoughtful structure and purposeful design.",
  },
  {
    title: "03 / PURPOSE",
    descTitle: "Built with intention.",
    desc: "Every decision should have a reason, from the first sketch to the final interaction.",
  },
];

// Figma card: 20px top, 40px bottom, 32px left, 76px right; label then a 20px gap, then
// title + text 12px apart (text 277px wide).
const displayGuides = guides.map((guide) => (
  <div
    key={guide.descTitle}
    className="card-hover flex flex-col gap-4 rounded-[1.25rem] border border-secondary-accent bg-cards-and-sections px-6 pt-4 pb-8 md:gap-5 md:pt-5 md:pb-10 md:pl-8 md:pr-19 lg:pr-8 xl:pr-19"
  >
    <Typography variant="text" as="p" className="py-2.5 text-light-teal">
      {guide.title}
    </Typography>

    <div className="flex flex-col gap-2 md:gap-3">
      <Typography className="text-primary-brand" variant="cardHeading">
        {guide.descTitle}
      </Typography>

      <Typography
        className="text-text-charcoal lg:max-w-69.25"
        variant="text"
        as="p"
      >
        {guide.desc}
      </Typography>
    </div>
  </div>
));

// Phones/tablets: heading on top, cards stacked in one column. Laptop+: heading left,
// three cards in a row (Figma: 20.4px apart, 24px below the heading).
export default function WhatGuidesUs() {
  return (
    <section className="bg-secondary-accent py-14 lg:py-16">
      <div className="page-container flex flex-col items-start gap-8 md:gap-10 lg:items-stretch lg:gap-6">
        <div className="flex flex-col items-start gap-3">
          <Typography
            variant="navigation"
            as="p"
            className="uppercase text-primary-brand"
          >
            WHAT GUIDES US
          </Typography>

          <Typography
            variant="section"
            className="max-w-xl text-primary-brand lg:max-w-107"
          >
            Principles behind{" "}
            <Typography variant="span-newsreader">the pixels.</Typography>
          </Typography>
        </div>

        {/* StackCards: on phones/tablets (three rows) the cards pile up over each other */}
        <StackCards
          minRows={3}
          className="grid w-full max-w-xl grid-cols-1 gap-4 md:gap-5 lg:max-w-none lg:grid-cols-3 lg:gap-[1.275rem]"
        >
          {displayGuides}
        </StackCards>
      </div>
    </section>
  );
}
