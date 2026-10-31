import Button from "@/components/ui/button";
import {
  CodeIcon,
  DarkArrowRightUp,
  CommandKeyIcon,
  LayersIcon,
  NorthStar,
  SmartphoneIcon,
} from "@/components/ui/reusable/svg";
import Typography from "@/components/ui/typography";

// Exported so the Academy page can describe the same courses to search engines (JSON-LD)
export const courses = [
  {
    tag: "01 / DESIGN",
    icon: <NorthStar />,
    title: "Product Design",
    description:
      "Learn to design thoughtful digital experiences, from understanding users to creating polished interfaces.",
    pathway: "Beginner-friendly pathway",
    price: "₦150,000",
  },
  {
    tag: "02 / GROW",
    icon: <DarkArrowRightUp />,
    title: "Digital Marketing",
    description:
      "Explore content, social media, campaigns, and ways to measure digital marketing performance.",
    pathway: "Practical learning pathway",
    price: "₦80,000",
  },
  {
    tag: "03 / FRONT END",
    icon: <CodeIcon />,
    title: "Front-End Development",
    description:
      "Discover how to turn interface designs into responsive, accessible websites with code.",
    pathway: "Web development pathway",
    price: "₦180,000",
  },
  {
    tag: "04 / BACK END",
    icon: <CommandKeyIcon />,
    title: "Back-End Development",
    description:
      "Explore the server-side logic, databases, and APIs that power digital products.",
    pathway: "Web development pathway",
    price: "₦80,000",
  },
  {
    tag: "05 / MOBILE",
    icon: <SmartphoneIcon />,
    title: "App Development",
    description:
      "Learn to design and build functional mobile applications for everyday use.",
    pathway: "Web development pathway",
    price: "₦280,000",
  },
  {
    tag: "06 / FULL STACK",
    icon: <LayersIcon />,
    title: "Full stack Development",
    description:
      "Learn to build complete web applications, from frontend interfaces to backend systems.",
    pathway: "Web development pathway",
    price: "₦300,000",
  },
];

// Soft sage section, intro on top, then the course cards: one column on phones, two
// from tablet (Figma: 588×540 white cards, 22px apart side to side, ~32px between rows).
export default function CourseCatalogue() {
  return (
    // id so the hero's "Explore course packages" button can jump here
    <section id="courses" className="bg-secondary-accent py-14 md:py-16 lg:pt-16 lg:pb-17.25">
      <div className="page-container flex flex-col gap-10 md:gap-14 lg:gap-23">
        {/* Figma: 498px wide, 18px between label, heading and text */}
        <div className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center md:gap-4.5 lg:mx-0 lg:max-w-124.5 lg:items-start lg:text-left">
          <Typography variant="navigation" as="p" className="text-primary-brand">
            COURSE CATALOGUE
          </Typography>

          <Typography variant="section" className="text-primary-brand lg:max-w-109">
            Choose a <Typography variant="span-newsreader">skill</Typography>.
            See what you&apos;ll{" "}
            <Typography variant="span-newsreader">learn</Typography>.
          </Typography>

          <Typography variant="body" className="text-text-charcoal">
            Explore individual learning paths and open any package to see the
            proposed curriculum, practical projects, and course details.
          </Typography>
        </div>

        <div className="reveal-children grid gap-5 md:grid-cols-2 md:gap-x-5.5 md:gap-y-8">
          {courses.map((course) => (
            // Figma: 55px side padding, 41px top/bottom, ~23px between each block
            <article
              key={course.title}
              className="group card-hover flex flex-col gap-5 rounded-[0.625rem] border border-[rgba(48,55,53,0.2)] bg-cards-and-sections px-6 py-7 md:px-8 lg:gap-5.75 lg:px-13.75 lg:py-10.25"
            >
              <Typography variant="text" as="span" className="-ml-2.5 p-2.5 text-light-teal">
                {course.tag}
              </Typography>

              {/* 64px sage tile, 24px icon; the north star is gold by default so recolour its strokes */}
              <span className="flex size-14 items-center justify-center rounded-[0.625rem] bg-secondary-accent transition-transform duration-500 ease-out motion-safe:group-hover:scale-110 motion-safe:group-hover:-rotate-6 md:size-16 [&>svg]:size-6 [&_path[stroke]]:stroke-primary-brand">
                {course.icon}
              </span>

              <div className="flex flex-col gap-3 border-b border-[rgba(48,55,53,0.2)] pb-5 lg:gap-4.5">
                <Typography variant="subHeading" as="h3" className="font-medium text-primary-brand">
                  {course.title}
                </Typography>
                <Typography variant="body" className="text-text-charcoal">
                  {course.description}
                </Typography>
              </div>

              <div className="flex flex-col gap-3 border-b border-[rgba(48,55,53,0.2)] pb-5 lg:gap-4.5">
                <Typography variant="body" className="text-text-charcoal">
                  {course.pathway}
                </Typography>
                <Typography variant="cardHeading" as="p" className="font-medium text-text-charcoal">
                  {course.price}
                </Typography>
              </div>

              {/* Opens the package details (not built yet) */}
              <Button
                variant="text"
                icon={<DarkArrowRightUp />}
                className="w-full justify-between border-0 px-0 text-primary-brand"
              >
                View course package
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
