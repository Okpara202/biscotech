import Image from "next/image";
import Button from "@/components/ui/button";
import {
  ArrowUpEnd,
  DarkArrowRightUp,
  NorthStar,
} from "@/components/ui/reusable/svg";
import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";

// White labels drifting around on the photo. Positions are % of the 592×344 Figma image, so
// they stay in place at any size; each has its own timing so they don't move together.
const tags = [
  {
    label: "Learn digital skills",
    icon: <NorthStar />,
    className: "top-[16.5%] left-[2.4%] rotate-10 motion-safe:animate-wander",
  },
  {
    label: "New possibilities",
    icon: <DarkArrowRightUp />,
    className:
      "top-[65%] left-[1.4%] motion-safe:animate-wander [--wander-delay:-4s] [--wander-time:11s]",
  },
];

// Phones/tablets: text centred above the photo. Laptop+: text left, photo right (Figma:
// photo 592×344, top of the label level with the top of the photo).
export default function IntroducingBiscoTechAcademy() {
  return (
    <section className="bg-main-background pt-16 lg:pt-24">
      <div className="page-container flex flex-col items-center gap-10 md:gap-12 lg:flex-row lg:items-stretch lg:justify-between lg:gap-10">
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:justify-between lg:text-left">
          <div className="flex flex-col items-center gap-3 md:gap-4.5 lg:items-start lg:gap-6">
            <Typography
              variant="navigation"
              as="p"
              className="uppercase text-primary-brand"
            >
              04 / INTRODUCING BISCOTECH ACADEMY
            </Typography>

            <div className="flex flex-col items-center gap-3 md:gap-4.5 lg:items-start">
              <Typography
                variant="section"
                className="max-w-xl text-primary-brand lg:max-w-115"
              >
                Learn the skills.{" "}
                <Typography variant="span-newsreader">
                  Build what&apos;s next.
                </Typography>
              </Typography>

              <Typography
                variant="body"
                className="max-w-xl text-text-charcoal lg:max-w-120"
              >
                We&apos;re creating learning opportunities that help people
                explore technology, develop practical digital skills, and turn
                curiosity into possibility.
              </Typography>
            </div>
          </div>

          {/* A link so it can open the Academy page; full width on phones */}
          <Button
            href="/academy"
            icon={<ArrowUpEnd />}
            className="shrink-0 border-0 bg-primary-brand text-cards-and-sections w-full sm:w-auto"
          >
            Discover academy
          </Button>
        </div>

        <div className="group relative aspect-592/344 w-full max-w-xl shrink-0 overflow-hidden rounded-[1.25rem] lg:w-148 lg:max-w-none">
          <Image
            src="/img/academy_image.jpg"
            alt="A smiling young man holding a laptop, learning digital skills"
            fill
            sizes="(min-width: 1024px) 592px, (min-width: 640px) 576px, 100vw"
            className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
          />

          {tags.map((tag) => (
            <span
              key={tag.label}
              className={cn(
                "absolute flex items-center gap-1.5 rounded-md bg-cards-and-sections px-2.5 py-1.5 font-dm-sans text-[0.625rem] text-primary-brand shadow-sm md:gap-2 md:px-4 md:py-2.5 md:text-xs",
                // Smaller icons on phones; the star uses the brand teal here
                "[&>svg]:size-3 md:[&>svg]:size-4 [&_path]:stroke-primary-brand",
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
  );
}
