import Button from "@/components/ui/button";
import {
  ArrowUpEnd,
  DarkArrowRightUp,
  WeDoArrowUp,
  WeDoCircleRing,
  WeDoSeaWave,
  WeDoStar,
} from "@/components/ui/reusable/svg";
import Typography from "@/components/ui/typography";
import Image from "next/image";

const whatWeDoList = [
  {
    headerIcon: <WeDoArrowUp />,
    heading: "Website & App Development",
    description:
      "Fast, responsive websites that make a strong first impression and guide visitors towards action.",
    button: "Build Your Website",
    href: "/contact#contact",
    image: "/img/web-dev-team.png",
  },
  {
    headerIcon: <WeDoStar />,
    heading: "Branding & Visual Identity",
    description:
      "We build distinctive brand identities that communicate your values, connect with your audience, and make your business unforgettable.",
    button: "Let's Build Your Brand",
    href: "/contact#contact",
    image: "/img/girlonpc.jpg",
  },
  {
    headerIcon: <WeDoSeaWave />,
    heading: "Digital Marketing",
    description:
      "Focused campaigns and practical digital strategy to help you reach the people who matter.",
    button: "Grow Your Reach",
    href: "/contact#contact",
    image: "/img/marketing-laptop.png",
  },
  {
    headerIcon: <WeDoCircleRing />,
    heading: "Social Media Management",
    description:
      "Thoughtful content planning and consistent social presence that supports your business goals.",
    button: "Show Up with Purpose",
    href: "/contact#contact",
    image: "/img/person on phone.jpg",
  },
  {
    headerIcon: <WeDoCircleRing />,
    heading: "Academy",
    description:
      "Learn in-demand digital skills through practical training designed to turn knowledge into real-world expertise.",
    button: "Explore Courses",
    href: "/academy#courses",
    image: "/img/academy-learning.png",
  },
];

const displayWhatWeDoItems = whatWeDoList.map((item, index) => (
  <div
    key={index}
    // Phones: stacked. Tablet (md): two columns — title + image | description + link.
    // Laptop (lg): the Figma three-part row.
    className="group flex flex-col gap-4 border-b border-b-secondary-accent py-6 md:grid md:grid-cols-2 md:gap-8 lg:flex lg:flex-row lg:items-stretch lg:justify-between"
  >
    {/* Icon + title (324px) and image (400×256), 26px apart */}
    <div className="flex min-w-0 flex-col gap-4 md:gap-6 lg:flex-row lg:items-center lg:gap-6.5">
      {/* Icons are 60–72px SVGs; force one size (48px on phones, 60px from lg) and centre the title beside it */}
      <aside className="flex shrink-0 items-center gap-3 lg:w-81 lg:items-start lg:gap-4">
        <span className="shrink-0 [&>svg]:h-auto [&>svg]:w-9 md:[&>svg]:w-12 lg:[&>svg]:w-15">
          {item.headerIcon}
        </span>
        <Typography
          className="text-primary-brand lg:w-62"
          variant="subHeading"
          as="h3"
        >
          {item.heading}
        </Typography>
      </aside>

      {/* Fixed 400:256 frame; object-cover crops each photo instead of stretching it */}
      <div className="relative aspect-400/256 w-full overflow-hidden max-w-100 min-w-0 md:max-w-none lg:w-100 lg:max-w-100">
        <Image
          src={item.image}
          alt={item.heading}
          fill
          sizes="(min-width: 1024px) 400px, 100vw"
          className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
        />
      </div>
    </div>

    {/* Description at the top, link pinned to the bottom of the row */}
    <aside className="flex shrink-0 flex-col items-start justify-between gap-2 md:gap-6 lg:w-88.25">
      <Typography variant="body" className="text-black">
        {item.description}
      </Typography>

      <Button
        variant="text"
        href={item.href}
        icon={<DarkArrowRightUp />}
        className="border-0 px-0 text-primary-brand"
        typography="primaryButton"
      >
        {item.button}
      </Button>
    </aside>
  </div>
));

export default function WhatWeDo() {
  return (
    // Padding (not margin) so the cream background covers the spacing.
    // Figma: 96px above the heading, 48px heading → first row, 74px below the last row
    <section className="bg-main-background pt-16 pb-14 lg:pt-24 lg:pb-18.5">
      <div className="mx-auto page-container">
        {/* Intro centred while stacked, left/right split on laptop+ */}
        <div className="flex flex-col gap-5 border-b border-b-secondary-accent pb-10 text-center lg:flex-row lg:items-start lg:justify-between lg:gap-24 lg:pb-12 lg:text-left">
          <aside className="">
            <Typography variant="navigation" className="text-primary-brand">
              01 / WHAT WE DO
            </Typography>

            <Typography
              variant="section"
              className="text-primary-brand mt-3 md:mt-5"
            >
              Everything your brand needs to{" "}
              <Typography variant="span-newsreader"> move forward.</Typography>
            </Typography>
          </aside>
          {/* Figma: 334px wide text box, flush with the container's right edge */}
          <aside className="mx-auto max-w-xl lg:mx-0 lg:w-83.5 lg:shrink-0">
            <Typography variant="body" className="text-text-charcoal">
              Clear thinking, creative execution and digital solutions designed
              around the way your business works.
            </Typography>

            <Button
              href="/services"
              typography="primaryButton"
              icon={<ArrowUpEnd />}
              className="text-cards-and-sections bg-primary-brand mt-6 lg:mt-11.75"
            >
              See all
            </Button>
          </aside>
        </div>

        {displayWhatWeDoItems}
      </div>
    </section>
  );
}
