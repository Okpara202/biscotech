import { NorthStar } from "@/components/ui/reusable/svg";
import Typography from "@/components/ui/typography";

const BannerItems = [
  "Web Design & App Development",
  "Brand Identity",
  "Digital Marketing",
  "Social Media",
  "Seo & Visibility",
];

const displayBanner = BannerItems.map((items) => (
  <Typography
    variant="body"
    key={items}
    // Phones: 13px text + 16px star so the five items pack into even rows
    className="flex items-center gap-x-1.5 text-[0.8125rem] text-cards-and-sections md:gap-x-2.5 lg:text-base [&>svg]:size-4 md:[&>svg]:size-5 lg:[&>svg]:size-6"
  >
    <NorthStar /> {items}
  </Typography>
));

export default function Banner() {
  return (
    <section className="bg-primary-brand py-6 lg:py-9">
      <div className="mx-auto page-container flex flex-wrap justify-center gap-x-5 gap-y-2.5 md:gap-x-8 md:gap-y-3 lg:flex-nowrap lg:justify-between lg:gap-x-4">
        {displayBanner}
      </div>
    </section>
  );
}
