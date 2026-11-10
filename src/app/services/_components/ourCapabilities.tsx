import {
  PlusIcon,
  SearchIcon,
  WeDoArrowUp,
  WeDoCircleRing,
  WeDoSeaWave,
  WeDoStar,
} from "@/components/ui/reusable/svg";
import StackCards from "@/components/ui/reusable/stackCards";
import Typography from "@/components/ui/typography";

// Exported so the Services page can describe the same services to search engines (JSON-LD)
export const services = [
  {
    icon: <WeDoArrowUp />,
    title: "Website & App Development",
    description:
      "Clear, considered websites that communicate your value, build trust, and make it easier for people to take the next step.",
    others: [
      "Business and service websites",
      "Landing pages and portfolio sites",
      "Responsive desktop and mobile design",
      "Website development and launch support",
    ],
  },
  {
    icon: <WeDoStar />,
    title: "Branding & Visual Identity",
    description:
      "Create a consistent, recognisable identity that reflects your business and helps you stand out for the right reasons.",
    others: [
      "Visual identity direction",
      "Logo and brand assets",
      "Colour and typography systems",
      "Brand guidelines and social templates",
    ],
  },
  {
    icon: <WeDoSeaWave />,
    title: "Digital Marketing",
    description:
      "Practical digital campaigns and content direction designed to help your business reach people and turn attention into action.",
    others: [
      "Digital campaign planning",
      "Content and channel strategy",
      "Audience and competitor research",
      "Performance review and optimisation",
    ],
  },
  {
    icon: <WeDoCircleRing />,
    title: "Social Media Management",
    description:
      "Keep your brand active and consistent with thoughtful content, organised publishing, and meaningful community engagement.",
    others: [
      "Content calendars",
      "Captions and creative direction",
      "Post scheduling and publishing",
      "Community management and reporting",
    ],
  },
  {
    icon: <SearchIcon />,
    title: "Search Engine Optimisation",
    description:
      "Help the right people discover your business with a stronger search foundation and clear, useful website content.",
    others: [
      "On-page SEO fundamentals",
      "Keyword and content direction",
      "Page structure and metadata",
      "Technical improvement recommendations",
    ],
  },
  {
    icon: <PlusIcon />,
    title: "Digital Support & Growth",
    description:
      "Need a mix of services? We can help you identify priorities and build a practical plan around your current stage.",
    others: [
      "Website and brand refreshes",
      "Digital presence reviews",
      "Launch planning",
      "Ongoing improvement support",
    ],
  },
];

export default function OurCapabilities() {
  return (
    <section className="bg-main-background">
      <div className="page-container py-16 lg:py-24">
        <Typography
          variant="navigation"
          as="p"
          className="text-primary-brand text-center"
        >
          OUR CAPABILITIES
        </Typography>

        <Typography
          variant="section"
          className="text-primary-brand text-center mt-3 md:mt-4.5"
        >
          The right pieces to build a <br />
          <Typography variant="span-newsreader">
            stronger digital brand.
          </Typography>
        </Typography>

        {/* Figma: two 590px cards per row, 20px apart; one column on phones (where they stack) */}
        <StackCards
          as="ul"
          className="reveal-children mt-8 grid grid-cols-1 gap-4 md:mt-6 md:grid-cols-2 md:gap-5 lg:gap-x-5 lg:gap-y-6.5"
        >
          {services.map((service) => (
            <li
              key={service.title}
              className="card-hover flex flex-col items-start gap-5 rounded-[1.25rem] border border-secondary-accent bg-cards-and-sections px-5 py-7 md:gap-4.5 md:px-6 md:py-10 lg:pr-18"
            >
              {/* Icons differ in size (60–72px); force one responsive height, width follows */}
              <span className="shrink-0 [&>svg]:h-11 [&>svg]:w-auto md:[&>svg]:h-13 lg:[&>svg]:h-15">
                {service.icon}
              </span>

              <div className="flex flex-col gap-2.5 md:gap-2">
                <Typography
                  variant="subHeading"
                  as="h3"
                  className="text-primary-brand md:py-2.5 lg:max-w-81"
                >
                  {service.title}
                </Typography>
                <Typography variant="body" className="text-text-charcoal">
                  {service.description}
                </Typography>
              </div>

              <ul className="flex flex-col gap-2.5 md:gap-2">
                {service.others.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 py-0.5">
                    {/* Figma's radio bullet: small filled dot */}
                    <span
                      aria-hidden="true"
                      className="size-1.5 shrink-0 rounded-full bg-text-charcoal md:size-2"
                    />
                    <Typography variant="text" className="text-text-charcoal">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </StackCards>
      </div>
    </section>
  );
}
