import type { ReactNode } from "react";
import {
  CodeIcon,
  CommandKeyIcon,
  DarkArrowRightUp,
  LayersIcon,
  NorthStar,
  SmartphoneIcon,
} from "@/components/ui/reusable/svg";
import { appDevelopment } from "./app-development";
import { backEnd } from "./back-end";
import { digitalMarketing } from "./digital-marketing";
import { frontEnd } from "./front-end";
import { fullStack } from "./full-stack";
import { pythonBackend } from "./python-backend";
import { productDesign } from "./product-design";

// Everything about the Academy's courses lives here. The catalogue cards (/academy), each
// course page (/academy/[slug]), the sitemap and the SEO data are all built from this list,
// so adding a course = adding one entry. No backend needed.

/** Prices are hidden across the Academy for now (cards, course pages, SEO data). They stay in
 *  the list below: set this back to true to show them everywhere again. */
export const SHOW_PRICES = false;

/** Shown instead of a fee while prices are hidden (Figma's wording) */
export const FEES_TBA = "Fees to be announced soon";

type SectionHeading = {
  /** Small line at the top */
  label: string;
  title: string;
  /** Paragraph under the title */
  intro: string;
};

/** Section background: "sage" is the coloured band, "cream" the page colour */
export type SectionTone = "sage" | "cream";

/** The building blocks of a course page. Each course lists the ones it uses, in order. */
export type CourseSection =
  /** Intro with "What you'll learn" and "Who this course is for" checklists. Without an
   *  audience list, the intro and the one checklist sit side by side. */
  | (SectionHeading & {
      type: "expect";
      learn: string[];
      audience?: string[];
      /** Small note under the "Who this course is for" list */
      audienceNote?: string;
    })
  /** Sage band of white module cards (the course outline) */
  | (SectionHeading & {
      type: "modules";
      modules: { label: string; title: string; description: string }[];
    })
  /** Larger curriculum cards: stage, summary, topic list and an optional project */
  | (SectionHeading & {
      type: "stages";
      tone: SectionTone;
      /** Button beside the heading */
      action?: string;
      /** Smaller topic text, for the longer curriculums */
      compact?: boolean;
      /** Lay each card's topics out in two columns */
      topicColumns?: 2;
      /** Figma's shorter cards (about 404px), for stages with no description or project */
      shortCards?: boolean;
      stages: {
        label: string;
        title: string;
        description?: string;
        topics: string[];
        /** Shown as "Practical projects: ..." */
        project?: string;
        /** Fits a longer list: wider text and tighter rows, keeping the card's height */
        wide?: boolean;
        /** Rows 12px apart rather than 18px, for Figma's fullest two-column cards */
        tightTopics?: boolean;
      }[];
    })
  /** Rows of small cards, e.g. "What will you work on?" */
  | (SectionHeading & {
      type: "cards";
      tone: SectionTone;
      /** All cards the same height with their text centred, however long it is */
      sameHeight?: boolean;
      cards: { label?: string; title: string; description: string }[];
    })
  /** Ticked lists in white cards, e.g. "More than just backend tools." */
  | (SectionHeading & {
      type: "ticks";
      lists: string[][];
    })
  /** The learning packages; `featured` is the dark, recommended one */
  | (SectionHeading & {
      type: "packages";
      tone: SectionTone;
      /** Figma's smaller gap (51px, not 96px) down to the green card, on a cream section */
      closeToCta?: boolean;
      packages: {
        tag: string;
        title: string;
        description: string;
        features: string[];
        /** Features that stay on one line at full width, using the card's padding */
        oneLine?: string[];
        /** Button text */
        action: string;
        featured?: boolean;
      }[];
    });

/** One section type, e.g. SectionOf<"modules"> */
export type SectionOf<T extends CourseSection["type"]> = Extract<CourseSection, { type: T }>;

/** The course page content, kept in its own file per course. Leave it off a course and its
 *  page shows the hero plus a "full package coming soon" note instead. */
export type CourseDetails = {
  /** Small line above the course name; defaults to "BISCOTECH ACADEMY" */
  heroLabel?: string;
  /** Name in the hero when Figma's differs from the catalogue's; defaults to the title */
  heroTitle?: string;
  /** Paragraph under the course name in the hero */
  intro: string;
  /** Quick facts in the hero's fee card */
  facts: { value: string; label: string }[];
  /** Figma's narrower fee card (416px, not 464px), for shorter facts */
  narrowFeeCard?: boolean;
  sections: CourseSection[];
  /** The green card at the bottom */
  cta: { label: string; title: string; description: string; action: string };
  /** Figma's smaller gap (27px, not 96px) from the green card down to the bottom row */
  closeFooter?: boolean;
};

export type Course = {
  /** URL part: /academy/product-design */
  slug: string;
  tag: string;
  icon: ReactNode;
  title: string;
  /** Short text on the catalogue card */
  description: string;
  pathway: string;
  /** Not needed while SHOW_PRICES is off */
  price?: string;
  details?: CourseDetails;
};

export const courses: Course[] = [
  {
    slug: "product-design",
    tag: "01 / DESIGN",
    icon: <NorthStar />,
    title: "Product Design",
    description:
      "Learn to design thoughtful digital experiences, from understanding users to creating polished interfaces.",
    pathway: "Beginner-friendly pathway",
    price: "₦150,000",
    details: productDesign,
  },
  {
    slug: "digital-marketing",
    tag: "02 / GROW",
    icon: <DarkArrowRightUp />,
    title: "Digital Marketing",
    description:
      "Explore content, social media, campaigns, and ways to measure digital marketing performance.",
    pathway: "Practical learning pathway",
    price: "₦80,000",
    details: digitalMarketing,
  },
  {
    slug: "front-end-development",
    tag: "03 / FRONT END",
    icon: <CodeIcon />,
    title: "Front-End Development",
    description:
      "Discover how to turn interface designs into responsive, accessible websites with code.",
    pathway: "Web development pathway",
    price: "₦180,000",
    details: frontEnd,
  },
  {
    slug: "back-end-development",
    tag: "04 / BACK END",
    icon: <CommandKeyIcon />,
    title: "Back-End Development",
    description:
      "Explore the server-side logic, databases, and APIs that power digital products.",
    pathway: "Web development pathway",
    price: "₦80,000",
    details: backEnd,
  },
  {
    slug: "app-development",
    tag: "05 / MOBILE",
    icon: <SmartphoneIcon />,
    title: "App Development",
    description:
      "Learn to design and build functional mobile applications for everyday use.",
    pathway: "Web development pathway",
    price: "₦280,000",
    details: appDevelopment,
  },
  {
    slug: "full-stack-development",
    tag: "06 / FULL STACK",
    icon: <LayersIcon />,
    title: "Full stack Development",
    description:
      "Learn to build complete web applications, from frontend interfaces to backend systems.",
    pathway: "Web development pathway",
    price: "₦300,000",
    details: fullStack,
  },
  {
    slug: "python-backend-development",
    tag: "07 / PYTHON",
    icon: <CodeIcon />,
    title: "Python Backend Development",
    description:
      "Go from Python fundamentals to building powerful backend systems with FastAPI and Django.",
    pathway: "Web development pathway",
    details: pythonBackend,
  },
];

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}

/** The price part of a course's structured data; nothing while prices are hidden */
export function courseOffer(course: Course) {
  if (!SHOW_PRICES || !course.price) return {};
  return {
    offers: {
      "@type": "Offer",
      category: "Paid",
      // "₦150,000" → "150000"
      price: course.price.replace(/[^\d.]/g, ""),
      priceCurrency: "NGN",
    },
  };
}
