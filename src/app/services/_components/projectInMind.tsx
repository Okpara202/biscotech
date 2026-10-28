import Link from "next/link";
import { primaryButtonLinkClass } from "@/components/ui/button";
import { ArrowUpEnd } from "@/components/ui/reusable/svg";
import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export default function ProjectInMind() {
  return (
    <section className="bg-main-background pt-14 pb-16 lg:pt-20 lg:pb-24">
      {/* Phones/tablets: stacked and centred. Laptop+: text left, button right (Figma: 64px top/
          bottom, 81px sides, button vertically centred). justify-between spaces them — no fixed gap. */}
      <div className="page-container flex flex-col items-center gap-8 rounded-[1.25rem] bg-primary-brand px-5 py-10 text-center md:px-10 md:py-14 lg:flex-row lg:justify-between lg:gap-10 lg:px-20.25 lg:py-16 lg:text-left">
        <div className="flex flex-col items-center gap-3 md:gap-4.5 lg:items-start lg:gap-6">
          <Typography className="text-secondary-accent" variant="text" as="p">
            Have a project in mind?
          </Typography>

          <Typography
            variant="section"
            className="max-w-xl text-cards-and-sections lg:max-w-170"
          >
            Let&apos;s find the{" "}
            <Typography variant="span-newsreader">right solution</Typography>{" "}
            for your business
          </Typography>

          <Typography variant="body" className="max-w-xl text-secondary-accent">
            Tell us what you&apos;re building, what isn&apos;t working, or where
            you want to go. We&apos;ll take it from there.
          </Typography>
        </div>

        {/* A link (not a button) so it goes to the contact form; full width on phones */}
        <Link
          href="/#contact"
          className={cn(
            primaryButtonLinkClass,
            "w-full bg-secondary-accent text-primary-brand sm:w-auto",
          )}
        >
          Let&apos;s talk
          <ArrowUpEnd className="text-primary-brand" />
        </Link>
      </div>
    </section>
  );
}
