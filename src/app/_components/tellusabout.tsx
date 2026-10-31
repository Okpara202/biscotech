import Typography, { variantStyles } from "@/components/ui/typography";
import { ArrowUpEnd } from "@/components/ui/reusable/svg";
import { cn } from "@/lib/utils";

export default function TellUsAbout() {
  return (
    <section className="bg-main-background pt-16 lg:pt-24">
      <div className="relative mx-auto page-container overflow-hidden rounded-[1.25rem] bg-secondary-accent px-5 py-10 md:px-6 md:py-14 lg:h-110.25 lg:px-20.25 lg:pt-18.25">
        {/* Decorative oversized "B", cropped by the card edges.
            Same box as Figma: 538px text, 19.6px line height, placed at (894px, 369px) */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-92.25 left-[74.4%] hidden font-dm-sans text-[33.625rem] leading-[1.225rem] font-bold text-main-background select-none lg:block"
        >
          B
        </span>

        <div className="relative flex flex-col items-center gap-3 text-center md:gap-4.5 lg:items-start lg:text-left">
          <Typography variant="text" className="text-primary-brand">
            Have something in mind?
          </Typography>
          <Typography
            variant="section"
            className="text-primary-brand lg:w-157.25"
          >
            Your next big move deserves{" "}
            <Typography variant="span-newsreader">
              a good digital partner.
            </Typography>
          </Typography>
          <Typography variant="body" className="text-text-charcoal lg:w-138.5">
            Tell us what you&apos;re building, what isn&apos;t working, or where
            you want to go. We&apos;ll take it from there.
          </Typography>
          <a
            href="#contact"
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-[0.625rem] bg-primary-brand px-6 py-3 text-cards-and-sections",
              variantStyles.primaryButton,
            )}
          >
            Tell us about your project
            <ArrowUpEnd />
          </a>
        </div>
      </div>
    </section>
  );
}
