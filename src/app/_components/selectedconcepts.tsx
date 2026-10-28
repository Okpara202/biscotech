"use client";
import { useState } from "react";
import Image from "next/image";
import Typography from "@/components/ui/typography";

const projects = [
  {
    number: "01",
    title: "Fashion Ecommerce Website",
    description:
      "Lorem ipsum dolor sit amet consectetur. Duis mattis diam non sagittis nibh. Volutpat tristique nunc sapien tortor venenatis.",
    image: "/img/projects/ecommerce-project.png",
  },
  {
    number: "02",
    title: "Food Restaurant Website",
    description:
      "Lorem ipsum dolor sit amet consectetur. Duis mattis diam non sagittis nibh. Volutpat tristique nunc sapien tortor venenatis.",
    image: "/img/projects/food-restaurant-project.png",
  },
  {
    number: "03",
    title: "Online Store Website",
    description:
      "Lorem ipsum dolor sit amet consectetur. Duis mattis diam non sagittis nibh. Volutpat tristique nunc sapien tortor venenatis.",
    image: "/img/projects/project-3.png",
  },
];

export default function SelectedConcepts() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = projects[activeIndex];
  const nextIndex = (activeIndex + 1) % projects.length;
  const afterNextIndex = (activeIndex + 2) % projects.length;
  const next = projects[nextIndex];
  const afterNext = projects[afterNextIndex];

  return (
    <section className="overflow-x-clip bg-secondary-accent py-16">
      <div className="mx-auto page-container">
        {/* Section heading */}
        <div className="flex flex-col gap-4 text-center md:gap-6 lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div className="flex flex-col gap-4.75 text-primary-brand lg:w-146.75">
            <Typography variant="navigation">02 / SELECTED CONCEPTS</Typography>
            <Typography variant="section">
              Good work starts with a{" "}
              <Typography variant="span-newsreader">good idea</Typography>.
            </Typography>
          </div>
          <Typography
            variant="body"
            className="mx-auto max-w-xl text-text-charcoal lg:mx-0 lg:w-83.5"
          >
            We&apos;re building our portfolio. These self-initiated concepts
            show the kind of thoughtful digital experiences Bisco aims to
            create.
          </Typography>
        </div>

        {/* Active project — key makes it re-mount (and re-animate) on change */}
        <div
          key={active.number}
          className="mx-auto mt-8 flex max-w-198 flex-col items-center gap-5 motion-safe:animate-fade-up md:mt-10 md:gap-8"
        >
          <div className="flex w-full max-w-151.5 flex-col gap-2 text-center md:gap-4.5 lg:text-left">
            <Typography variant="cardHeading" as="h3" className="text-primary-brand">
              PROJECT {active.number} - {active.title}
            </Typography>
            <Typography variant="body" className="text-text-charcoal">
              {active.description}
            </Typography>
          </div>
          <div className="relative aspect-792/438 w-full">
            <Image
              src={active.image}
              alt={active.title}
              fill
              sizes="(min-width: 1024px) 792px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Up next: click either preview to make it the active project.
            Phones: two equal cards side by side (image + title). md+: the Figma layout */}
        <Typography
          variant="navigation"
          as="p"
          className="mt-8 mb-3 text-primary-brand md:hidden"
        >
          UP NEXT
        </Typography>
        <div className="grid grid-cols-2 items-start gap-3 md:mt-10 md:flex md:flex-wrap md:items-end md:gap-x-10.25 md:gap-y-6 lg:ml-[41%] lg:flex-nowrap">
          <button
            type="button"
            onClick={() => setActiveIndex(nextIndex)}
            aria-label={`Show project ${next.number}: ${next.title}`}
            className="group flex cursor-pointer flex-col-reverse items-start gap-2 text-left md:flex-row md:gap-10"
          >
            <Typography
              variant="cardHeading"
              as="span"
              className="flex shrink-0 flex-col text-sm leading-5 text-primary-brand md:w-60.5 md:gap-2 md:text-base lg:text-xl lg:leading-7"
            >
              <span>PROJECT {next.number} -</span>
              <span>{next.title}</span>
            </Typography>
            <span className="relative block aspect-306/204 w-full shrink-0 overflow-hidden md:w-76.5">
              <Image
                src={next.image}
                alt=""
                fill
                sizes="306px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveIndex(afterNextIndex)}
            aria-label={`Show project ${afterNext.number}: ${afterNext.title}`}
            className="group flex cursor-pointer flex-col items-start gap-2 text-left md:block md:shrink-0"
          >
            <span className="relative block aspect-306/204 w-full overflow-hidden md:aspect-auto md:h-28 md:w-50">
              <Image
                src={afterNext.image}
                alt=""
                fill
                sizes="(min-width: 768px) 200px, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </span>
            {/* Title only on phones; Figma shows this one as a bare thumbnail */}
            <Typography
              variant="cardHeading"
              as="span"
              className="flex flex-col text-sm leading-5 text-primary-brand md:hidden"
            >
              <span>PROJECT {afterNext.number} -</span>
              <span>{afterNext.title}</span>
            </Typography>
          </button>
        </div>
      </div>
    </section>
  );
}
