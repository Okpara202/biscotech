import type { CourseDetails } from ".";

// Content from the "Product design" frame in Figma
export const productDesign: CourseDetails = {
  intro:
    "Learn to understand people, solve real problems, and design thoughtful digital experiences — from the first idea to a clickable prototype.",
  facts: [
    { value: "12 weeks", label: "Course duration" },
    { value: "Beginner experience", label: "Experience level" },
    { value: "Practical", label: "Learning approach" },
    { value: "Portfolio", label: "Final outcome" },
  ],
  sections: [
    {
      type: "expect",
      label: "THE LEARNING EXPERIENCE",
      title: "What should *you expect?*",
      intro:
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
    },
    {
      type: "modules",
      label: "12-WEEK COURSE OUTLINE",
      title: "A clear path from *basics* to your *first case study.*",
      intro:
        "Illustrative curriculum structure. The final teaching schedule and module sequence should be confirmed by BiscoTech Academy.",
      modules: [
        {
          label: "MODULE 01",
          title: "Introduction to Product Design",
          description:
            "What product design is, the design process, UI vs UX, design thinking, and the role of a product designer.",
        },
        {
          label: "MODULE 02",
          title: "User Research & Problem Definition",
          description:
            "Research methods, user interviews, empathy, personas, user journeys, and writing problem statements.",
        },
        {
          label: "MODULE 03",
          title: "Information Architecture & Wireframing",
          description:
            "Content structure, user flows, navigation, low-fidelity wireframes, and organising screens around user tasks.",
        },
        {
          label: "MODULE 04",
          title: "UI Design with Figma",
          description:
            "Typography, colour, spacing, grids, visual hierarchy, components, reusable styles, and responsive layouts.",
        },
        {
          label: "MODULE 05",
          title: "Prototyping & Usability Testing",
          description:
            "Interactive prototypes, transitions, usability feedback, identifying friction, and iterating on designs.",
        },
        {
          label: "MODULE 06",
          title: "Portfolio Project & Presentation",
          description:
            "Develop a case study, explain design decisions, refine screens, present your work, and prepare it for a portfolio.",
        },
      ],
    },
    {
      type: "cards",
      tone: "cream",
      label: "PRACTICAL WORK",
      title: "What will *you work on?*",
      intro:
        "Expect guided exercises and a final project that helps you apply the concepts instead of only learning theory.",
      cards: [
        {
          title: "01 / User flow & wireframes",
          description:
            "Map a simple user journey and turn it into a set of clear wireframes.",
        },
        {
          title: "02 / App or website prototype",
          description:
            "Design key screens in Figma and connect them into a clickable prototype.",
        },
        {
          title: "03 / Portfolio case study",
          description:
            "Document the problem, research, process, decisions, and final solution.",
        },
      ],
    },
    {
      type: "packages",
      tone: "sage",
      label: "CHOOSE YOUR LEARNING PACKAGE",
      title: "A clear path from *basics* to your *first case study.*",
      intro:
        "Explore the learning options available. Course fees and package details will be shared soon.",
      packages: [
        {
          tag: "01 · Foundation",
          title: "Starter Package",
          description: "For learners who want the core lessons and guided practice.",
          features: [
            "12-week course access",
            "Core lessons and learning materials",
            "Practical class exercises",
            "Group feedback sessions",
            "Final course project",
          ],
          action: "Enquire about starter",
        },
        {
          tag: "02 · Recommended",
          title: "Professional Package",
          description:
            "For learners who want structured guidance and portfolio development.",
          features: [
            "Everything in Starter",
            "Additional guided Figma practice",
            "More detailed project reviews",
            "Portfolio case study guidance",
            "CV and portfolio presentation session",
          ],
          oneLine: ["CV and portfolio presentation session"],
          action: "Enquire about professional",
        },
        {
          tag: "03 · Intensive",
          title: "Mentorship Package",
          description:
            "For learners who want more individual support while building their project.",
          features: [
            "Everything in Professional",
            "One-to-one mentorship sessions",
            "Individual project feedback",
            "Extra portfolio review",
            "Personal learning action plan",
          ],
          action: "Enquire about mentorship",
        },
      ],
    },
  ],
  cta: {
    label: "READY TO TAKE THE NEXT STEP?",
    title: "Start building your *design skills.*",
    description:
      "Contact BiscoTech Academy to ask about the next cohort, class schedule, delivery format, and confirmed package details.",
    action: "Register course",
  },
};
