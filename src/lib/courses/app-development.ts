import type { CourseDetails, SectionOf } from ".";
import { fullStack } from "./full-stack";
import { packageIntros } from "./shared";

const fullStackExpect = fullStack.sections[0] as SectionOf<"expect">;
const fullStackStages = fullStack.sections[1] as SectionOf<"stages">;

// Content from the "App development" frame in Figma. Its curriculum heading and the
// "What should you expect?" intro and note are word for word Full Stack's.
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
        // Figma: "who want adanvce their skill"
        "App developers who want to advance their skill",
        "Aspiring software engineers and API developers",
        "Anyone ready to learn through consistent practice",
      ],
    },
    {
      type: "stages",
      tone: "sage",
      partCards: true,
      label: fullStackStages.label,
      title: "A *complete path* to building for the web.",
      intro: fullStackStages.intro,
      // Figma repeats some lines between parts (the State management details, Part C's
      // practical and Part D's Navigation); kept as they are
      stages: [
        {
          label: "PART A · TOPICS 01–03",
          title: "Foundations",
          topics: [
            "JavaScript foundations: variables, data types, conditions, loops, functions, arrays, objects, async/await, JSON, error handling and debugging.",
            "Mobile development intro: native vs cross-platform, React Native, Expo, app lifecycle, permissions and mobile constraints.",
            "Environment setup: Node.js, VS Code, Android Studio, Xcode, Git/GitHub, Expo project structure and environment variables.",
          ],
          practical:
            "Build an API-fetching command-line program and run your first Expo app on a phone.",
        },
        {
          label: "PART B · TOPICS 04–09",
          title: "Building the User Interface",
          topics: [
            "React fundamentals: JSX, components, props, state, effects, refs, custom hooks and reusable components.",
            "Core components: View, Text, Image, inputs, events, forms, validation, modals and alerts.",
            "Styling & layout: StyleSheet, typography, colors, Flexbox, themes, dark mode and Figma-to-code.",
            "Responsive & accessible design: dimensions, safe areas, screen readers, contrast and localization.",
            "Navigation: Expo Router, stacks, tabs, route parameters, deep links and protected routes.",
            "Lists: FlatList, SectionList, search, pagination and loading states.",
          ],
          practical: "Create reusable UI, a validated sign-up form and a multi-screen To-Do app.",
        },
        {
          label: "PART C · TOPICS 10–16",
          title: "Data, Services & Device Features",
          topics: [
            "Networking & APIs: HTTP, REST, fetch, Axios, TanStack Query, errors, offline states and file transfer.",
            "State management: native vs cross-platform, React Native, Expo, app lifecycle, permissions and mobile constraints.",
            "Storage & offline: AsyncStorage, SecureStore, SQLite, file system, caching and sync.",
            "Device features: camera, photos, location, notifications, biometrics, sharing and sensors.",
            "Maps: markers, user location, place search and directions.",
            "Animation: Animated API, Reanimated, transitions and gestures.",
            "Backend & authentication: Firebase, Supabase, Node.js, accounts, sessions, authorization and security.",
          ],
          practical:
            "Build an API-fetching command-line program and run your first Expo app on a phone.",
        },
        {
          label: "PART D · TOPICS 17–20",
          title: "Quality, Release & Career",
          topics: [
            "Testing & monitoring: DevTools, Jest, React Native Testing Library, E2E basics, ESLint, Prettier and Sentry.",
            "Performance: render optimization, lists, images, startup, memory and battery awareness.",
            "Publishing: EAS, signing, TestFlight, Google Play testing, store listings, CI/CD and updates.",
            "Product & professional practice: UX patterns, MVPs, feedback, monetization, teamwork, portfolios and interviews.",
            "Navigation: Expo Router, stacks, tabs, route parameters, deep links and protected routes.",
          ],
          practical: "Test, build and distribute your app to iOS and Android testers.",
        },
      ],
    },
    {
      type: "tools",
      label: "TECHNOLOGY STACK",
      title: "Tools and *Technologies*",
      intro: "Get familiar with a practical toolkit for cross-platform mobile development.",
      tools: [
        "JavaScript",
        "React Native",
        "Expo",
        "Expo Router",
        "React Navigation",
        "Redux Toolkit",
        "Zustand",
        "TanStack Query",
        "REST APIs",
        "EAS",
        "AsyncStorage",
        "SecureStore",
        "SQLite",
        "React Native Maps",
        "Reanimated",
        "Jest",
        "Sentry",
        "Git & GitHub",
        "VS Code",
      ],
    },
    {
      type: "cards",
      tone: "cream",
      tealLabels: true,
      scroll: true,
      label: "PRACTICAL PROJECTS",
      title: "Build more than *just projects.*",
      intro:
        "Apply your skills through practical exercises and projects that bring frontend, backend and database development together.",
      cards: [
        {
          label: "PROJECT 01",
          title: "Multi-screen To-Do App",
          description: "Components, state, styling, forms and navigation.",
        },
        {
          label: "PROJECT 02",
          title: "Data-driven App",
          description: "Live API data, lists, search and loading/error states.",
        },
        {
          label: "PROJECT 03",
          title: "Device & Location App",
          description: "Camera, photo library, location, maps and notifications.",
        },
        {
          label: "CAPSTONE",
          title: "Original Mobile App",
          description: "Accounts, cloud data, offline support, tests and release-ready build",
        },
      ],
    },
    {
      type: "packages",
      tone: "sage",
      sameHeight: true,
      label: "CHOOSE YOUR LEARNING PACKAGE",
      title: "Three ways to take *the course.*",
      intro:
        "Explore the learning options available. Course fees and package details will be shared soon.",
      packages: [
        {
          ...packageIntros.starter,
          features: [
            "Course access",
            "JavaScript and mobile foundations",
            "Guided coding exercises",
            "UI and navigation practice",
            "Course resources",
          ],
        },
        {
          ...packageIntros.professional,
          features: [
            "Everything in Starter",
            "Full curriculum coverage",
            "Practical app projects",
            "API and device feature practice",
            "Capstone project guidance",
            "Project feedback and release practice",
          ],
          oneLine: ["Project feedback and release practice"],
        },
        {
          ...packageIntros.mentorship,
          features: [
            "Everything in Professional",
            "Mentor check-ins",
            "Personalized project feedback",
            "Capstone and portfolio guidance",
            "Career-readiness guidance",
          ],
        },
      ],
    },
    {
      type: "highlights",
      // Figma: "GARDUATE"
      label: "SKILLS YOU WILL GRADUATE WITH",
      title: "Build Skills *Beyond the Code*",
      items: [
        "Modern JavaScript, React & React Native",
        "Responsive UI and accessibility",
        "API integration and state management",
        "Offline storage and security basics",
        "Testing, debugging and monitoring",
        "App publishing and maintenance",
        "Git workflow and code review",
        "Portfolio and documentation",
        "Freelance and career preparation",
      ],
    },
  ],
  cta: {
    label: "READY TO START BUILDING?",
    title: "Start Your Mobile *Development Journey*",
    description: "Turn your ideas into powerful mobile apps with BiscoTech Academy.",
    action: "Register course",
  },
  closeFooter: false,
};
