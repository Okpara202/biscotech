import Typography from "@/components/ui/typography";
import Button from "@/components/ui/button";
import { ArrowUpEnd, NorthStar } from "@/components/ui/reusable/svg";
import { cn } from "@/lib/utils";
import Image from "next/image";

// The sage tags on the hero photo, placed as in Figma (% of the 643×544 group) and drifting
// around on it, each on its own timing so they don't move together
const heroTags = [
  {
    label: "Thoughtful by design",
    icon: <NorthStar />,
    className:
      "top-[3.03%] left-[66.77%] origin-top-left rotate-[11.64deg] [&_path]:stroke-text-charcoal motion-safe:animate-wander",
  },
  {
    label: "Strategy meets creativity",
    icon: <ArrowUpEnd className="text-text-charcoal" />,
    className:
      "top-[83.82%] left-0 motion-safe:animate-wander [--wander-delay:-4s] [--wander-time:11s]",
  },
];

export default function Hero() {
  return (
    <div className="overflow-x-clip bg-linear-to-b from-[rgba(247,245,240,0.2)] from-[69.71%] to-[rgba(18,63,58,0.2)] to-100%">
      <section className="mx-auto page-container pt-6 pb-12">
        {/* Always one line, pushed to the edges. Text scales with the phone width
            (10px at 320px) so it fits; Figma's 14px from sm up */}
        <aside className="flex flex-nowrap justify-between items-center gap-x-2">
          <Typography
            variant="text"
            className="whitespace-nowrap uppercase text-text-charcoal text-[clamp(0.625rem,3.1vw,0.75rem)] leading-4 sm:text-sm sm:leading-[1.225rem]"
          >
            Independent Digital Agency
          </Typography>
          <Typography
            variant="text"
            className="whitespace-nowrap uppercase text-text-charcoal text-[clamp(0.625rem,3.1vw,0.75rem)] leading-4 sm:text-sm sm:leading-[1.225rem]"
          >
            Built for what&apos;s Next
          </Typography>
        </aside>

        <div className="mt-8 flex flex-col items-start gap-10 lg:mt-12.75 lg:flex-row lg:justify-between lg:gap-0">
          {/* Text column */}
          {/* Left-aligned: stacked above the image below lg, beside it on laptop+ */}
          <div className="flex w-full min-w-0 flex-col items-start gap-5 md:gap-6 lg:flex-1 lg:max-w-169.75 lg:gap-9.5">
            <Typography
              variant="hero"
              className="max-w-166.75 text-primary-brand"
            >
              We Design{" "}
              <Typography
                variant="span-header"
                className="text-light-teal"
              >
                Experiences
              </Typography>{" "}
              That Make Your Brand{" "}
              <Typography
                variant="span-header"
                className="text-light-teal"
              >
                Unforgettable
              </Typography>
              .
              {/* Hand-drawn arrow, sized in em so it scales with the heading */}
              <span className="pointer-events-none ml-[-0.1em] my-[-0.4em] inline-block w-[1.86em] align-middle">
                <Image
                  src="/img/heroArrow.png"
                  alt=""
                  width={119}
                  height={119}
                  className="h-auto w-full rotate-[32.66deg]"
                />
              </span>
            </Typography>

            <Typography
              variant="subHeading"
              as="p"
              className="max-w-xl text-black text-[length:clamp(1rem,0.886rem+0.568vw,1.25rem)] leading-[1.5] lg:max-w-none lg:text-[length:clamp(1.125rem,1.95vw,1.75rem)] lg:leading-[1.4]"
            >
              We help ambitious businesses turn good ideas into thoughtful
              digital experiences — through design, technology and marketing
              that work together.
            </Typography>

            {/* Phones: full-width stacked buttons (easy thumb targets); side by side from sm */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4.5">
              <Button
                href="/contact"
                className="w-full border-primary-brand bg-primary-brand text-cards-and-sections sm:w-auto"
                icon={<ArrowUpEnd />}
              >
                Let&apos;s build something
              </Button>
              <Button href="/services" className="w-full border-primary-brand text-text-charcoal hover:bg-primary-brand hover:text-cards-and-sections sm:w-auto">
                Explore our services
              </Button>
            </div>
          </div>

          {/* Figma's 643×544 image group: the photo (486px wide, 58px in) and two tags that drift
              around on it. The right ~99px is the overhanging "Thoughtful by design" tag. Sizes
              are Figma's px / 1200px container, so the photo lines up with the nav box edge and
              the tag hangs past it at any desktop width. Positions are % of the group and the
              tags' text is in cqw, so everything keeps Figma's proportions at any size. */}
          <div className="@container relative aspect-[642.6/544] w-full max-w-160.75 shrink-0 lg:ml-[-1.67%] lg:mr-[-8.25%] lg:w-[53.55%] lg:max-w-none">
            <div className="absolute inset-y-0 left-[9.03%] w-[75.63%] overflow-hidden rounded-[4.67cqw]">
              <Image
                src="/img/hero-team.png"
                alt="A team meeting around a table, working together on their laptops"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 486px, 75vw"
                className="object-cover"
              />
            </div>

            {heroTags.map((tag) => (
              <span
                key={tag.label}
                className={cn(
                  "absolute flex items-center gap-[0.714em] rounded-[0.714em] bg-secondary-accent px-[1.714em] py-[0.857em] font-dm-sans text-[2.18cqw] leading-[1.4] whitespace-nowrap text-text-charcoal",
                  "[&>svg]:size-[1.714em] [&>svg]:shrink-0",
                  tag.className,
                )}
              >
                {tag.icon}
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
