import type { CourseDetails, SectionOf } from ".";
import { fullStack } from "./full-stack";

const fullStackExpect = fullStack.sections[0] as SectionOf<"expect">;

// Content from the "Mobile App Development" frame in Figma, copied from screenshots. The hero
// and "What should you expect?" are done; the sections after that still reuse Full Stack's
// (Figma's curriculum starts the same way) until they're copied over.
export const appDevelopment: CourseDetails = {
  ...fullStack,
  heroLabel: "BISCOTECH ACADEMY · MOBILE APP DEVELOPMENT",
  heroTitle: "Mobile App Development",
  intro:
    "Design, build and publish professional iOS and Android apps with React Native and Expo.\nFrom your first line of code to a finished app—hands-on projects, real skills and a portfolio that gets you noticed.",
  facts: [
    { value: "Beginner", label: "Starting point" },
    { value: "Advanced", label: "Language focus" },
    { value: "12 Stages", label: "Learning pathway" },
    { value: "Practical", label: "Learning approach" },
  ],
  sections: [
    {
      // Figma's heading, intro and note here are word for word Full Stack's
      ...fullStackExpect,
      learn: [
        "Build polished, responsive mobile interfaces",
        "Connect apps to APIs and manage data",
        "Store data and implement secure sign-in basics",
        "Create multi-screen apps with navigation, forms and lists",
        "Use camera, maps, location and notifications",
        "Test, debug, prepare and publish mobile apps",
      ],
      audience: [
        "Beginners interested in becoming app developers",
        "Students and career changers exploring technology",
        "Frontend developers who want backend skills",
        "Aspiring software engineers and API developers",
        "Anyone ready to learn through consistent practice",
      ],
    },
    ...fullStack.sections.slice(1),
  ],
};
