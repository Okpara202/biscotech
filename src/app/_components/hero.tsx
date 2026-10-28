import Typography from "@/components/ui/typography";
import Button from "@/components/ui/button";
import { ArrowUpEnd } from "@/components/ui/reusable/svg";
import Image from "next/image";

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

        <div className="mt-8 flex flex-col items-center gap-10 lg:mt-12.75 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          {/* Text column */}
          {/* Centred while stacked (below lg), left-aligned beside the image on laptop+ */}
          <div className="flex w-full min-w-0 flex-col items-center gap-5 text-center md:gap-6 lg:flex-1 lg:max-w-169.75 lg:items-start lg:gap-9.5 lg:text-left">
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
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4.5 lg:justify-start">
              <Button
                className="w-full border-primary-brand bg-primary-brand text-cards-and-sections sm:w-auto"
                icon={<ArrowUpEnd />}
              >
                Let&apos;s build something
              </Button>
              <Button className="w-full border-primary-brand text-text-charcoal sm:w-auto">
                Explore our services
              </Button>
            </div>
          </div>

          {/* The image's right ~99px is the overhanging "Thoughtful by design" tag.
              All sizes are Figma's px / 1200px container, so the photo lines up with the nav box edge
              and the tag hangs past it at any desktop width */}
          <Image
            className="h-auto w-full max-w-160.75 shrink-0 lg:ml-[-1.67%] lg:mr-[-8.25%] lg:w-[53.55%] lg:max-w-none"
            src="/img/heroImage.svg"
            alt="an image of people learning on their pc"
            width={642.6}
            height={544}
          />
        </div>
      </section>
    </div>
  );
}
