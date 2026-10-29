import Link from "next/link";
import { primaryButtonLinkClass } from "../button";
import { ArrowUpEnd } from "./svg";
import Typography from "../typography";
import { cn } from "@/lib/utils";

type BeforeFooterActionProps = {
  /** Small line at the top */
  label?: string;
  /** Plain part of the heading */
  title?: string;
  /** Italic part right after the title */
  highlight?: string;
  /** Plain text after the highlight */
  titleAfter?: string;
  /** Optional second italic part at the end, e.g. "Have an *idea* you'd like to *bring to life?*" */
  highlightAfter?: string;
  /** Paragraph under the heading */
  description?: string;
  /** The button on the right */
  action?: { label: string; href: string };
  /** Extra classes for the green card */
  className?: string;
};

// The green call-to-action card that sits just above the footer on most pages.
// Every prop defaults to the Figma copy, so <BeforeFooterAction /> works as is; pass any
// prop to change that part. It's only the card: place it inside the page's own section.
export default function BeforeFooterAction({
  label = "Have a project in mind?",
  title = "Let's find the",
  highlight = "right solution",
  titleAfter = "for your business",
  highlightAfter,
  description = "Tell us what you're building, what isn't working, or where you want to go. We'll take it from there.",
  action = { label: "Let's talk", href: "/contact" },
  className,
}: BeforeFooterActionProps) {
  return (
    // Phones/tablets: stacked and centred. Laptop+: text left, button right (Figma: 64px top/
    // bottom, 81px sides, button vertically centred). justify-between spaces them — no fixed gap.
    <div
      className={cn(
        "page-container flex flex-col items-center gap-8 rounded-[1.25rem] bg-primary-brand px-5 py-10 text-center md:px-10 md:py-14 lg:flex-row lg:justify-between lg:gap-10 lg:px-20.25 lg:py-16 lg:text-left",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-3 md:gap-4.5 lg:items-start lg:gap-6">
        <Typography className="text-secondary-accent" variant="text" as="p">
          {label}
        </Typography>

        <Typography
          variant="section"
          className="max-w-xl text-cards-and-sections lg:max-w-157.25"
        >
          {/* Spaces are added between the parts here, so don't pad the props with spaces */}
          {title}
          {highlight && (
            <>
              {" "}
              <Typography variant="span-newsreader">{highlight}</Typography>
            </>
          )}
          {titleAfter && <> {titleAfter}</>}
          {highlightAfter && (
            <>
              {" "}
              <Typography variant="span-newsreader">{highlightAfter}</Typography>
            </>
          )}
        </Typography>

        {description && (
          <Typography variant="body" className="max-w-xl text-secondary-accent">
            {description}
          </Typography>
        )}
      </div>

      {/* A link (not a button) so it can go to another page; full width on phones */}
      <Link
        href={action.href}
        className={cn(
          primaryButtonLinkClass,
          "w-full bg-secondary-accent text-primary-brand sm:w-auto",
        )}
      >
        {action.label}
        <ArrowUpEnd className="text-primary-brand" />
      </Link>
    </div>
  );
}

/*
Example usage (inside the page's own section):

<section className="bg-main-background pt-14 pb-16 lg:pt-20 lg:pb-24">
  <BeforeFooterAction />
</section>

// Different text on another page
<BeforeFooterAction
  label="Ready to start?"
  title="Let's build"
  highlight="something great"
  titleAfter="together"
  action={{ label: "Contact us", href: "/contact" }}
/>
*/
