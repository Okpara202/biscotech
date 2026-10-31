import Typography from "@/components/ui/typography";

// Phones/tablets: stacked and centred. Laptop+: label, heading and text in three columns
// spread across the row (Figma: 127px / 436px / 367px with equal 133px gaps). The columns
// shrink together on smaller laptops.
export default function TheIdeaIsSimple() {
  return (
    <section className="bg-main-background py-14 md:py-20 lg:py-24">
      <div className="page-container flex flex-col items-center gap-6 text-center md:gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:text-left">
        <Typography variant="navigation" as="p" className="text-primary-brand lg:shrink-0">
          THE IDEA IS SIMPLE
        </Typography>

        {/* Each half on its own two lines, like Figma */}
        <Typography variant="section" className="text-primary-brand lg:flex-[0_1_27.25rem]">
          Learn something{" "}
          <Typography variant="span-newsreader" className="block">
            useful.
          </Typography>
          Make something{" "}
          <Typography variant="span-newsreader" className="block">
            meaningful.
          </Typography>
        </Typography>

        <Typography variant="body" className="max-w-xl text-text-charcoal lg:max-w-none lg:flex-[0_1_22.9375rem]">
          Technology opens doors when you know how to use it. BiscoTech Academy
          is being shaped to help learners explore digital disciplines through
          accessible, practical learning.
        </Typography>
      </div>
    </section>
  );
}
