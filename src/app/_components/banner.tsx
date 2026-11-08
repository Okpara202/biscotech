import { NorthStar } from "@/components/ui/reusable/svg";
import Typography from "@/components/ui/typography";

const BannerItems = [
  "Web Design & App Development",
  "Brand Identity",
  "Digital Marketing",
  "Social Media",
  "Seo & Visibility",
];

// One copy of the list; each item carries the gap after it (Figma: 75px on laptop), so two
// copies side by side repeat seamlessly
function BannerList({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0">
      {BannerItems.map((item) => (
        <li key={item} className="pr-8 md:pr-12 lg:pr-18.75">
          <Typography
            variant="body"
            as="span"
            className="flex items-center gap-x-1.5 whitespace-nowrap text-[0.8125rem] text-cards-and-sections md:gap-x-2.5 lg:text-base [&>svg]:size-4 md:[&>svg]:size-5 lg:[&>svg]:size-6"
          >
            <NorthStar /> {item}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

// A strip that scrolls right to left without stopping: the list twice in one row, slid left
// by one copy's width and repeated. Pauses on hover; still for visitors who reduce motion.
export default function Banner() {
  return (
    <section className="overflow-hidden bg-primary-brand py-6 lg:py-9">
      <div className="flex w-max motion-safe:animate-marquee hover:[animation-play-state:paused]">
        <BannerList />
        <BannerList hidden />
      </div>
    </section>
  );
}
