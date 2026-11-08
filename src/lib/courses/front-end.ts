import type { CourseDetails } from ".";
import { academyCta, packageIntros, packagesHeading } from "./shared";

// Content from the "Front end" frame in Figma
export const frontEnd: CourseDetails = {
  heroLabel: "BISCOTECH ACADEMY · WEB DEVELOPMENT",
  intro:
    "A practical, project-based path from complete beginner to job-ready frontend developer with React and Next.js.",
  facts: [
    { value: "12 weeks", label: "Course duration" },
    { value: "Beginner experience", label: "Experience level" },
    { value: "Practical", label: "Learning approach" },
    { value: "Portfolio", label: "Final outcome" },
  ],
  sections: [
    {
      type: "stages",
      tone: "cream",
      label: "YOUR LEARNING PATH",
      title: "Build your skills, *step by step.*",
      intro:
        "Start with the basics, grow your coding skills, and move on to building modern web applications.",
      action: "View full curriculum",
      stages: [
        {
          label: "STAGE 01",
          title: "Foundations",
          description:
            "Understand how the web works and learn to build clean, responsive pages.",
          topics: [
            "How the web works: browsers, servers, HTTP, URLs, terminal",
            "HTML: page structure, semantic tags, forms, accessibility basics",
            "CSS: selectors, box model, typography, colours, variables",
            "Flexbox, Grid, responsive design, dark mode, animations, intro to Tailwind CSS",
            "Git and GitHub: commits, branches, pull requests, deployment",
          ],
        },
        {
          label: "STAGE 02",
          title: "JavaScript",
          description:
            "Make websites interactive and learn to work with real data.",
          topics: [
            "Core JavaScript: variables, conditions, loops, functions, scope",
            "Arrays, objects, map/filter/reduce, JSON",
            "DOM, events, browser storage",
            "APIs, fetch, async/await, loading and error states",
            "Modules, npm, Vite, linting, debugging",
          ],
        },
        {
          label: "STAGE 03",
          title: "React and TypeScript",
          description:
            "Build reusable interfaces and organise larger frontend apps.",
          topics: [
            "React: components, JSX, props, lists",
            "State, events, forms, useState and useReducer",
            "Effects, data fetching, React 19 form features",
            "TypeScript: types, interfaces, components, API data",
            "Routing, context, custom hooks, performance and testing",
          ],
        },
        {
          label: "STAGE 04",
          title: "Next.js and Advanced Frontend",
          wide: true,
          description:
            "Create polished, production-ready applications and launch your work.",
          topics: [
            // Non-breaking spaces keep "SEO and rendering" together on the second line, as in Figma
            "Next.js App Router, layouts, Server and Client Components, SEO and rendering",
            "REST and GraphQL APIs, backend services, loading and error states",
            "Login, signup, protected routes and session handling",
            "Figma-to-code, shadcn/ui, forms, animation and state management",
            "Performance, accessibility, testing, CI and Vercel deployment",
            "Capstone: build, deploy and present an original frontend project",
          ],
        },
      ],
    },
    {
      type: "cards",
      tone: "sage",
      sameHeight: true,
      label: "SKILLS BUILT THROUGHOUT",
      title: "More than just *writing code.*",
      intro:
        "Develop the habits and workflow needed to keep learning, solve problems, and work well on real projects.",
      cards: [
        { title: "Debugging", description: "Find issues and understand error messages." },
        { title: "Accessibility", description: "Build inclusive interfaces from the start." },
        { title: "Git workflow", description: "Use version control and take part in code review." },
        { title: "Documentation", description: "Read docs and learn new tools independently." },
        { title: "AI tools", description: "Use AI responsibly as part of your workflow." },
        { title: "Capstone project", description: "Present a complete project that is live on the web." },
      ],
    },
    {
      type: "packages",
      tone: "cream",
      closeToCta: true,
      ...packagesHeading,
      packages: [
        {
          ...packageIntros.starter,
          features: [
            "12-week course access",
            "HTML, CSS, and JavaScript fundamentals",
            "Guided practice exercises",
            "Responsive page-building tasks",
            "Learning resources",
          ],
        },
        {
          ...packageIntros.professional,
          features: [
            "Everything in Starter",
            "React, TypeScript, and Next.js learning",
            "Hands-on portfolio projects",
            "Capstone project guidance",
            "Project review and feedback",
            "Deployment practice",
          ],
        },
        {
          ...packageIntros.mentorship,
          features: [
            "Everything in Professional",
            "Additional project feedback",
            "Mentor check-ins",
            "Support with debugging and code review",
            "Portfolio and capstone guidance",
            "Career-readiness guidance",
          ],
          oneLine: ["Support with debugging and code review"],
        },
      ],
    },
  ],
  cta: academyCta("Take your first step into *web development.*", "READY TO START BUILDING?"),
};
