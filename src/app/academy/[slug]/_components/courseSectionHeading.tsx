import Typography from "@/components/ui/typography";
import type { SectionTone } from "@/lib/courses";

/** Background and spacing for a course section (Figma: sage bands 64px, cream 96px) */
export const sectionTones: Record<SectionTone, string> = {
  sage: "bg-secondary-accent py-14 lg:py-16",
  cream: "bg-main-background py-14 md:py-20 lg:py-24",
};

/** List dot: 6px, centred in a 16px box and level with the first line of text */
export function CourseBullet({ light }: { light?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="flex size-4 shrink-0 translate-y-0.5 items-center justify-center lg:translate-y-0.75"
    >
      <span
        className={`size-1.5 rounded-full ${light ? "bg-cards-and-sections" : "bg-black"}`}
      />
    </span>
  );
}

// The heading block every course section starts with (Figma: 612px wide, heading 566px; 12px
// under the label, 22px above the paragraph). Centred on phones/tablets, left on laptop+.
export default function CourseSectionHeading({
  label,
  title,
  intro,
  wideTitle,
  introClassName,
}: {
  label: string;
  title: string;
  intro: string;
  /** A slightly wider heading (590px, not 566px), for Figma's longer ones */
  wideTitle?: boolean;
  introClassName?: string;
}) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center md:gap-5.5 lg:mx-0 lg:max-w-153 lg:items-start lg:text-left">
      <div className="flex flex-col items-center gap-3 lg:items-start">
        <Typography variant="navigation" as="p" className="text-primary-brand">
          {label}
        </Typography>
        <Typography
          variant="section"
          className={`text-primary-brand ${wideTitle ? "lg:max-w-147.5" : "lg:max-w-141.5"}`}
        >
          {title}
        </Typography>
      </div>
      {/* pre-line: a \n in the course data starts a new line, as some Figma intros do */}
      <Typography
        variant="largeBody"
        as="p"
        className={`whitespace-pre-line text-primary-brand ${introClassName ?? ""}`}
      >
        {intro}
      </Typography>
    </div>
  );
}
