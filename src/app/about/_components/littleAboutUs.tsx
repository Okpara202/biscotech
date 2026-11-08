import Typography from "@/components/ui/typography";

const aboutUsDesc = [
  "From a first website to a more considered brand identity or a clearer digital marketing direction, we help turn ideas into experiences people can understand, use, and remember.",
  "Our approach is collaborative and intentional. We take time to understand your goals, make thoughtful choices, and create solutions that support where you want your business to go.",
  "We’re building BiscoTech around a simple belief: digital should not just look good. It should work hard for the people it serves.",
];

// Phones/tablets: stacked, left-aligned. Laptop+: heading left, text right (Figma: 91px apart,
// heading 409px wide so it breaks over three lines, text column 684px).
export default function LittleAboutUs() {
  return (
    <section className="bg-main-background py-14 md:py-20 lg:py-24">
      <div className="page-container flex flex-col items-start gap-8 md:gap-10 lg:flex-row lg:justify-between lg:gap-22.75">
        <div className="flex flex-col items-start gap-3 md:gap-4.5 lg:flex-[0_1_26.1875rem] lg:gap-6">
          <Typography variant="navigation" as="p" className="text-primary-brand">
            A LITTLE ABOUT US
          </Typography>

          <Typography
            variant="section"
            className="max-w-xl text-primary-brand lg:max-w-102.25 lg:py-2.5"
          >
            Good ideas deserve to be{" "}
            <Typography variant="span-newsreader">
              brought to life well.
            </Typography>
          </Typography>
        </div>

        <div className="flex max-w-xl flex-col items-start gap-4 md:gap-6 lg:min-w-0 lg:max-w-none lg:flex-[0_1_42.75rem]">
          <Typography variant="cardHeading" as="p" className="text-primary-brand">
            BiscoTech is a digital agency bringing design, technology, and
            strategy together to help businesses build a stronger presence
            online.
          </Typography>

          {/* Figma separates the paragraphs with one blank line (22.4px) */}
          <div className="flex flex-col gap-4 lg:max-w-163.75 lg:gap-[1.4rem]">
            {aboutUsDesc.map((aboutUs) => (
              <Typography
                key={aboutUs}
                variant="body"
                className="text-text-charcoal"
              >
                {aboutUs}
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
