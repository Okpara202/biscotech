import type { CourseDetails } from ".";

// Text several courses share word for word in Figma

export const packagesHeading = {
  label: "CHOOSE YOUR LEARNING PACKAGE",
  title: "Three ways to take the course.",
  intro:
    "Explore the learning options available. Course fees and package details will be shared soon.",
};

export const packageIntros = {
  starter: {
    tag: "01 · Foundation",
    title: "Starter Package",
    description: "For learners who want the core lessons and guided practice.",
    action: "Enquire about starter",
  },
  professional: {
    tag: "02 · Recommended",
    title: "Professional Package",
    description:
      "For learners who want structured guidance and portfolio development.",
    action: "Enquire about professional",
    featured: true,
  },
  mentorship: {
    tag: "03 · Intensive",
    title: "Mentorship Package",
    description:
      "For learners who want more individual support while building their project.",
    action: "Enquire about mentorship",
  },
};

/** The green card: mostly only its heading changes between courses */
export function academyCta(
  title: string,
  label = "READY TO TAKE THE NEXT STEP?",
): CourseDetails["cta"] {
  return {
    label,
    title,
    description:
      "Contact BiscoTech Academy to ask about the next cohort, class schedule, delivery format, and confirmed package details.",
    action: "Register course",
  };
}
