import BeforeFooterAction from "@/components/ui/reusable/beforeFooterAction";
import Typography from "@/components/ui/typography";

const expectations = [
  {
    title: "Clear communication",
    desc: "Useful updates and honest conversations at every stage.",
  },
  {
    title: "Shared decisions",
    desc: "Your input helps shape the work, not just approve it at the end.",
  },
  {
    title: "Purposeful details",
    desc: "Design choices guided by your audience and goals.",
  },
  {
    title: "Practical next steps",
    desc: "A clear understanding of what happens after delivery.",
  },
];

// Figma item: line on top, title 23px below it, text 24px below the title (272px wide),
// 22px at the bottom.
const displayExpectations = expectations.map((item) => (
  <li
    key={item.title}
    className="flex flex-col gap-2 border-t border-primary-brand/30 pt-5 pb-4 md:gap-4 lg:gap-6 lg:pt-5.75 lg:pb-5.5"
  >
    <Typography variant="cardHeading" as="h3" className="text-primary-brand">
      {item.title}
    </Typography>
    <Typography variant="body" className="text-text-charcoal lg:max-w-68">
      {item.desc}
    </Typography>
  </li>
));

// Sage "What you can expect from us" band, then the dark CTA card on the cream background
// (Figma: band 64px top/bottom, card 96px above and below).
export default function WorkingTogether() {
  return (
    <>
      <section className="bg-secondary-accent py-14 lg:py-16">
        <div className="page-container flex flex-col items-center gap-8 md:gap-10 lg:items-stretch lg:gap-6">
          {/* Phones/tablets: centred. Laptop+: left, 587px wide so "us." drops to line two */}
          <div className="flex flex-col items-center gap-3 text-center md:gap-4.5 lg:items-start lg:text-left">
            <Typography
              variant="navigation"
              as="p"
              className="uppercase text-primary-brand"
            >
              WORKING TOGETHER
            </Typography>

            <Typography
              variant="section"
              className="max-w-xl text-primary-brand lg:max-w-146.75"
            >
              What you can{" "}
              <Typography variant="span-newsreader">expect</Typography> from us.
            </Typography>
          </div>

          {/* Phones: one column. Tablets: two. Laptop+: four, 12px apart (Figma) */}
          <ul className="grid w-full max-w-xl grid-cols-1 gap-x-3 md:max-w-none md:grid-cols-2 md:gap-y-4 lg:grid-cols-4 lg:gap-y-0">
            {displayExpectations}
          </ul>
        </div>
      </section>

      <section className="bg-main-background pt-14 pb-16 lg:py-24">
        <BeforeFooterAction
          label="READY WHEN YOU ARE"
          title="Let's make your next move a"
          highlight="meaningful one."
          titleAfter=""
          description="Tell us about your project and we'll take it from there."
          action={{ label: "Discuss your project", href: "/contact" }}
        />
      </section>
    </>
  );
}
