import Typography from "../typography";
import Button from "../button";
import { ArrowUpEnd } from "./svg";
import { cn } from "@/lib/utils";

type HeroAction = { label: string; href: string };

type EveryHeroProps = {
  /** Small uppercase line above the heading, e.g. "WHAT WE DO · OUR SERVICES" */
  label: string;
  /** Plain part of the heading, e.g. "Digital solutions for" */
  title: string;
  /** Italic teal part right after the title, e.g. "your next stage." */
  highlight?: string;
  /** Plain text after the highlight, if the heading continues */
  titleAfter?: string;
  /** Paragraph under the heading */
  description?: string;
  /** Filled button with arrow */
  primaryAction?: HeroAction;
  /** Outlined button */
  secondaryAction?: HeroAction;
  /** White card on the right */
  card?: { title: string; text: string };
  /** Section background; defaults to Figma's Soft Sage at 40% */
  className?: string;
};

// Shared page hero (Services, About, Our process...). Pass the text, it lays itself out:
// label + heading + paragraph + buttons on the left, the white card on the right (Figma).
// It's meant to be the first thing on a page, so it sits behind the transparent header.
export default function EveryHero({
  label,
  title,
  highlight,
  titleAfter,
  description,
  primaryAction,
  secondaryAction,
  card,
  className,
}: EveryHeroProps) {
  return (
    <section className={cn("bg-secondary-accent/40", className)}>
      {/* Spacing lives on the inner box: the section's own top padding is reserved for
          the header offset (globals.css). Figma: 86px below the header line, ~80px below. */}
      <div className="mx-auto page-container flex flex-col items-center gap-8 pt-10 pb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-4.5 lg:pt-21.5 lg:pb-20">
        {/* Left: centred while stacked, left-aligned beside the card on laptop+ */}
        <div className="flex w-full flex-col items-center gap-5 text-center md:gap-6 lg:w-152.75 lg:shrink-0 lg:items-start lg:text-left">
          <Typography variant="text" className="uppercase text-text-charcoal">
            {label}
          </Typography>

          <Typography variant="hero" className="text-primary-brand lg:max-w-127.5">
            {title}
            {highlight && (
              <>
                {" "}
                <Typography variant="span-header" className="text-light-teal">
                  {highlight}
                </Typography>
              </>
            )}
            {titleAfter && <> {titleAfter}</>}
          </Typography>

          {description && (
            <Typography
              variant="largeBody"
              as="p"
              className="max-w-xl text-primary-brand lg:max-w-none"
            >
              {description}
            </Typography>
          )}

          {(primaryAction || secondaryAction) && (
            // Phones: full-width stacked buttons; side by side from sm
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-6">
              {primaryAction && (
                <Button href={primaryAction.href} icon={<ArrowUpEnd />} className="shrink-0 border-0 bg-primary-brand text-cards-and-sections w-full sm:w-auto">
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  href={secondaryAction.href}
                  className="shrink-0 border-0 bg-primary-brand text-cards-and-sections w-full border border-primary-brand bg-transparent text-text-charcoal hover:bg-primary-brand hover:text-cards-and-sections sm:w-auto"
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Right: white card (Figma 571px wide, 20px corners) */}
        {card && (
          <div className="flex w-full max-w-xl flex-col gap-2 rounded-[1.25rem] border border-[rgba(48,55,53,0.4)] bg-cards-and-sections px-6 py-5 text-left text-text-charcoal lg:min-h-36 lg:w-142.75 lg:max-w-none lg:px-10.75 lg:py-5.25">
            <Typography variant="primaryButton" as="p">
              {card.title}
            </Typography>
            <Typography variant="body" className="lg:max-w-109">
              {card.text}
            </Typography>
          </div>
        )}
      </div>
    </section>
  );
}

/*
Example usage:

<EveryHero
  label="WHAT WE DO · OUR SERVICES"
  title="Digital solutions for"
  highlight="your next stage."
  description="We bring strategy, design, and technology together..."
  primaryAction={{ label: "Discuss your project", href: "/contact" }}
  secondaryAction={{ label: "Explore our work", href: "/our_work" }}
  card={{ title: "A thoughtful approach", text: "Whether you need a website..." }}
/>

// About page: no buttons
<EveryHero
  label="ABOUT BISCO TECH, WHO ARE WE"
  title="Thoughtful design."
  highlight="Meaningful impact"
  description="We create digital experiences..."
  card={{ title: "Our point of view", text: "Great digital work should feel considered..." }}
/>
*/
