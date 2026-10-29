import BeforeFooterAction from "@/components/ui/reusable/beforeFooterAction";
import {
  PlusIcon,
  SearchIcon,
  WeDoArrowUp,
  WeDoCircleRing,
  WeDoSeaWave,
  WeDoStar,
} from "@/components/ui/reusable/svg";
import Typography from "@/components/ui/typography";

const help = [
  {
    icon: <WeDoArrowUp />,
    title: "Website & App Development",
    desc: "Responsive, user-friendly websites designed to build trust and encourage action.",
  },
  {
    icon: <WeDoStar />,
    title: "Branding & visual identity",
    desc: "Distinctive brand systems that help your business look consistent and memorable.",
  },
  {
    icon: <WeDoSeaWave />,
    title: "Digital marketing",
    desc: "Purposeful digital campaigns and strategy to connect your business with the right audience.",
  },
  {
    icon: <WeDoCircleRing />,
    title: "Social media management",
    desc: "Purposeful digital campaigns and strategy to connect your business with the right audience.",
  },
  {
    icon: <SearchIcon />,
    title: "Search engine optimisation",
    desc: "Practical improvements that make your website easier for people to discover.",
  },
  {
    icon: <PlusIcon />,
    title: "Digital consulting",
    desc: "A clearer plan for choosing the right next step for your digital presence.",
  },
];

// Figma item: 40px top/bottom, icon then a 20px gap, title and text 16px apart (text 483px).
const displayHelp = help.map((item) => (
  <div
    key={item.title}
    className="flex items-start gap-4 border-b border-secondary-accent py-6 md:gap-5 md:py-10 lg:pr-7"
  >
    {/* Scaled down on phones/tablets; laptop+ keeps the icons' own Figma size */}
    <div className="shrink-0 [&>svg]:h-11 [&>svg]:w-auto md:[&>svg]:h-13 lg:[&>svg]:h-auto">
      {item.icon}
    </div>
    <div className="flex flex-col gap-2 md:gap-4">
      <Typography variant="primaryButton" as="p" className="text-primary-brand">
        {item.title}
      </Typography>
      <Typography
        variant="text"
        as="p"
        className="text-text-charcoal lg:max-w-120.75"
      >
        {item.desc}
      </Typography>
    </div>
  </div>
));

// Phones: heading centred, one column of services. Tablet+: two columns (Figma: 16px
// between columns, 12px between rows, 24px below the heading). The CTA card sits 96px below.
export default function WeHelp() {
  return (
    <section className="bg-main-background pt-14 pb-16 lg:py-24">
      <div className="page-container flex flex-col items-center gap-8 md:gap-10 lg:items-stretch lg:gap-6">
        <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
          <Typography
            variant="navigation"
            as="p"
            className="uppercase text-primary-brand"
          >
            How Can We Help?
          </Typography>

          <Typography
            variant="section"
            className="max-w-xl text-primary-brand lg:max-w-130.5"
          >
            Creative thinking,{" "}
            <Typography variant="span-newsreader">
              practical digital solutions
            </Typography>
          </Typography>
        </div>

        <div className="grid w-full grid-cols-1 md:grid-cols-2 md:gap-x-4 md:gap-y-3">
          {displayHelp}
        </div>
      </div>

      <BeforeFooterAction
        label="LET'S MAKE SOMETHING MATTER"
        title="Have an"
        highlight="idea"
        titleAfter="you'd like to"
        highlightAfter="bring to life?"
        description="Tell us what you're working on. Let's explore what we can create together."
        action={{ label: "Start a conversation", href: "/contact" }}
        className="mt-14 lg:mt-24"
      />
    </section>
  );
}
