import type { ReactNode } from "react";
import {
  CodeIcon,
  CommandKeyIcon,
  DarkArrowRightUp,
  LayersIcon,
  NorthStar,
  SmartphoneIcon,
} from "@/components/ui/reusable/svg";

// Everything about the Academy's courses lives here. The catalogue cards (/academy), each
// course page (/academy/[slug]), the sitemap and the SEO data are all built from this list,
// so adding a course = adding one entry. No backend needed.

/** Prices are hidden across the Academy for now (cards, course pages, SEO data). They stay in
 *  the list below: set this back to true to show them everywhere again. */
export const SHOW_PRICES = false;

export type CourseModule = {
  /** e.g. "Weeks 1–2" */
  weeks: string;
  title: string;
  /** Short bullet points for the module (optional) */
  topics?: string[];
};

/** The course page content. Leave it off a course and its page shows the hero plus a
 *  "full package coming soon" note instead of the detail sections. */
export type CourseDetails = {
  /** Paragraph under the course name in the hero */
  intro: string;
  /** Quick facts in the hero's fee card */
  duration: string;
  level: string;
  approach: string;
  outcome: string;
  /** "What should you expect?" paragraph */
  expect: string;
  /** "What you'll learn" checklist */
  learn: string[];
  /** "Who this course is for" checklist, plus the small note under it */
  audience: string[];
  audienceNote?: string;
  /** Course outline section. Modules can stay empty until the curriculum is confirmed. */
  outline: {
    label: string;
    title: string;
    intro: string;
    modules: CourseModule[];
  };
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
  price: string;
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
    details: {
      intro:
        "Learn to understand people, solve real problems, and design thoughtful digital experiences — from the first idea to a clickable prototype.",
      duration: "12 weeks",
      level: "Beginner experience",
      approach: "Practical",
      outcome: "Portfolio",
      expect:
        "This course is designed to take learners through the foundations and practical workflow of product design. You will learn concepts, practise in Figma, receive feedback, and work towards a portfolio-ready project.",
      learn: [
        "Understand user needs and define design problems",
        "Conduct basic user research and organise insights",
        "Create user flows, wireframes, and interface layouts",
        "Use Figma to build components and prototypes",
        "Apply visual design principles and responsive thinking",
        "Test designs, use feedback, and improve your work",
        "Present a project as a clear design case study",
      ],
      audience: [
        "Beginners interested in UI/UX and product design",
        "Students or career changers exploring tech",
        "Graphic designers moving into digital product design",
        "Entrepreneurs who want to understand digital experiences",
        "Anyone ready to practise consistently and build projects",
      ],
      audienceNote:
        "No previous product design experience is required. Basic computer literacy and access to a laptop are recommended.",
      outline: {
        label: "12-WEEK COURSE OUTLINE",
        title: "A clear path from basics to your first case study.",
        intro:
          "Illustrative curriculum structure. The final teaching schedule and module sequence should be confirmed by BiscoTech Academy.",
        // Still being designed in Figma: add modules here, e.g.
        // { weeks: "Weeks 1–2", title: "Design foundations", topics: ["…", "…"] }
        modules: [],
      },
    },
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
  },
];

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}

/** The price part of a course's structured data; nothing while prices are hidden */
export function courseOffer(course: Course) {
  if (!SHOW_PRICES) return {};
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
