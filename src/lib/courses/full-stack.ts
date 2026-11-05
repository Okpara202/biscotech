import type { CourseDetails } from ".";
import { backEnd, backendPackages } from "./back-end";

// Content from the "Full stack development" frame in Figma, copied from screenshots. The
// packages, green card and bottom spacing are the same as Back End's, so they're reused.
export const fullStack: CourseDetails = {
  ...backEnd,
  heroTitle: undefined,
  intro:
    "Learn to build complete web applications from the ground up. Master modern frontend technologies, powerful backend systems, databases and deployment — and turn your ideas into functional digital products.",
  facts: [
    { value: "Beginner", label: "Starting point" },
    { value: "Advanced", label: "Language focus" },
    { value: "12 Stages", label: "Learning pathway" },
    { value: "Practical", label: "Learning approach" },
  ],
  sections: [
    {
      type: "expect",
      label: "THE LEARNING EXPERIENCE",
      title: "From your first line of code to complete applications.",
      intro:
        "This course takes you through the complete web development process. Start with the foundations, build interactive user interfaces, develop server-side applications, work with databases and deploy your projects.",
      learn: [
        "Build responsive websites using HTML, CSS and JavaScript",
        "Create modern interfaces using React and Next.js",
        "Develop backend applications with Node.js and Express",
        "Build and integrate RESTful APIs",
        "Work with MongoDB and PostgreSQL databases",
        "Implement authentication and application security",
        // End hidden by Figma's toolbar in the screenshot; Back End's wording, to confirm
        "Test, deploy and maintain production-ready APIs",
      ],
      audience: [
        "Beginners interested in becoming web developers",
        "Students and career changers exploring technology",
        "Frontend developers who want backend skills",
        "Aspiring software engineers and API developers",
        "Anyone ready to learn through consistent practice",
      ],
      // Mostly hidden in the screenshot; Back End's wording, to confirm
      audienceNote:
        "Basic computer literacy and access to a laptop are recommended. The course begins with JavaScript foundations before moving into backend engineering.",
    },
    {
      type: "stages",
      tone: "sage",
      compact: true,
      shortCards: true,
      label: "FULL STACK DEVELOPMENT CURRICULUM",
      title: "A complete path to building for the web.",
      intro:
        "Move from web foundations to advanced frontend and backend engineering through structured lessons and practical projects.",
      stages: [
        {
          label: "STAGE 01",
          title: "Web Development Foundations",
          topics: [
            "How the web works: browsers, servers, HTTP and URLs",
            "HTML, semantic structure, forms and accessibility",
            "Higher-order functions and array methods",
            "CSS, typography, colours and variables",
            "Flexbox, Grid, responsive design and Tailwind CSS",
            "Git, GitHub and website deployment",
          ],
        },
        {
          label: "STAGE 02",
          title: "JavaScript Programming",
          topics: [
            "Variables, data types, conditions, loops and functions",
            "Arrays, objects, destructuring and array methods",
            "DOM manipulation, events and browser storage",
            "Promises, async/await and working with APIs",
            "Event loop, modules, NPM, Vite and debugging",
          ],
        },
        {
          label: "STAGE 03",
          title: "Frontend Development with React",
          topics: [
            "React components, JSX, props and lists",
            "State, events, forms and component communication",
            "Hooks, effects and data fetching",
            "TypeScript fundamentals and typed components",
            "Routing, context, custom hooks and testing",
          ],
        },
        {
          label: "STAGE 04",
          title: "Next.js and Advanced Frontend",
          topics: [
            "Next.js App Router, layouts and rendering strategies",
            "Server and Client Components",
            "REST and GraphQL API integration",
            "Authentication interfaces and protected routes",
            "Figma-to-code, shadcn/ui and advanced forms",
            "SEO, accessibility, performance and Vercel deployment",
          ],
        },
        {
          label: "STAGE 05",
          title: "Node.js Backend Development",
          topics: [
            "Node.js architecture and runtime environment",
            "Event-driven architecture and non-blocking I/O",
            "Built-in modules: HTTP, FS, Path, Events and Crypto",
            "NPM, environment variables and HTTP servers",
            "Streams, buffers, file handling and worker threads",
          ],
        },
        {
          label: "STAGE 06",
          title: "Building APIs with Express.js",
          topics: [
            "Express setup, routing and request handling",
            "Middleware and error handling",
            "Controllers, services and MVC architecture",
            "Request validation and CRUD operations",
            "Pagination, filtering and API versioning",
          ],
        },
        {
          label: "STAGE 07",
          title: "TypeScript for Full Stack Development",
          topics: [
            "Types, interfaces and type aliases",
            "Generics, enums and utility types",
            "Type narrowing and type guards",
            "TypeScript with React and Express",
            "Type-safe APIs and database models",
          ],
        },
        {
          label: "STAGE 08",
          title: "Database Engineering",
          topics: [
            "MongoDB, documents, collections and queries",
            "Mongoose, aggregation and transactions",
            "PostgreSQL and relational database concepts",
            "SQL, joins, constraints and normalisation",
            "Prisma or Sequelize ORM and query optimisation",
          ],
        },
        {
          label: "STAGE 09",
          title: "Authentication and Authorisation",
          topics: [
            "Authentication and authorisation concepts",
            "Password hashing and JWT authentication",
            "Access tokens, refresh tokens, sessions and cookies",
            "Role-based and permission-based access control",
            "OAuth, social login, OTP and multi-factor authentication",
          ],
        },
        {
          label: "STAGE 10",
          title: "Advanced Backend Development",
          topics: [
            "File uploads and Cloudinary integration",
            "Email, SMS and payment gateway integration",
            "Webhooks and third-party APIs",
            "Redis caching, rate limiting and API security",
            "WebSockets, background jobs and queue systems",
          ],
        },
        {
          label: "STAGE 11",
          title: "Testing and Quality Assurance",
          topics: [
            "Unit, integration and end-to-end testing",
            "Jest, Vitest and Supertest",
            "Mocking, stubbing and API testing",
            "Test coverage and test-driven development",
            "Debugging, logging and code quality",
          ],
        },
        {
          label: "STAGE 12",
          title: "Deployment and DevOps",
          topics: [
            "Production environments and Linux administration",
            "VPS, Render, Railway and AWS deployment",
            "Nginx, reverse proxies and PM2",
            "Docker, Docker Compose and CI/CD",
            "GitHub Actions, SSL, backups and monitoring",
          ],
        },
      ],
    },
    {
      type: "cards",
      tone: "cream",
      label: "PRACTICAL PROJECTS",
      title: "Build more than just projects.",
      intro:
        "Apply your skills through practical exercises and projects that bring frontend, backend and database development together.",
      cards: [
        {
          title: "01 / Responsive website",
          description:
            "Build and deploy a responsive multi-page website using HTML, CSS and JavaScript.",
        },
        {
          title: "02 / React application",
          description:
            "Create an interactive dashboard with reusable components and API integration.",
        },
        {
          title: "03 / REST API",
          description:
            "Develop a backend application with Express, CRUD functionality and validation.",
        },
        {
          title: "04 / E-commerce backend",
          description:
            "Work with PostgreSQL and MongoDB to build a database-powered application.",
        },
        {
          title: "05 / Authentication system",
          description:
            "Build a secure multi-role authentication system for different user types.",
        },
        {
          title: "06 / Full Stack Capstone",
          description:
            "Plan, build, test and deploy an original full stack application.",
        },
      ],
    },
    // Figma goes straight from the projects to the packages, on sage
    backendPackages("sage"),
  ],
};
