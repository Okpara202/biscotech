import type { CourseDetails, SectionOf } from ".";
import { academyCta, packageIntros, packagesHeading } from "./shared";

/** Back End and Python use the same package lists in Figma */
export function backendPackages(tone: SectionOf<"packages">["tone"]): SectionOf<"packages"> {
  return {
    type: "packages",
    tone,
    ...packagesHeading,
    packages: [
      {
        ...packageIntros.starter,
        features: [
          "Course access",
          "Core lessons and learning materials",
          "Practical coding exercises",
          "Group feedback sessions",
          "Final course project",
        ],
      },
      {
        ...packageIntros.professional,
        features: [
          "Everything in Starter",
          "Additional guided Node.js practice",
          "More detailed project reviews",
          "Portfolio project guidance",
          "CV and portfolio presentation session",
        ],
        oneLine: ["CV and portfolio presentation session"],
      },
      {
        ...packageIntros.mentorship,
        features: [
          "Everything in Professional",
          "One-to-one mentorship sessions",
          "Individual project feedback",
          "Extra portfolio review",
          "Personal learning action plan",
        ],
      },
    ],
  };
}

// Content from the "Back end" frame in Figma
export const backEnd: CourseDetails = {
  heroLabel: "BISCOTECH ACADEMY · WEB DEVELOPMENT",
  heroTitle: "Backend Development",
  intro:
    "Go beyond writing JavaScript. Learn to build powerful server-side applications, design secure APIs, manage databases and deploy production-ready backend systems using Node.js and modern development tools.",
  narrowFeeCard: true,
  facts: [
    { value: "JavaScript", label: "Starting point" },
    { value: "TypeScript", label: "Language focus" },
    { value: "9 Modules", label: "Learning pathway" },
    { value: "Practical", label: "Learning approach" },
  ],
  sections: [
    {
      type: "expect",
      label: "THE LEARNING EXPERIENCE",
      title: "Build the systems that power the web.",
      intro:
        "This course takes you from JavaScript fundamentals to professional backend engineering. You will learn how servers work, build APIs, connect databases, implement authentication, test applications and deploy backend systems.",
      learn: [
        "Understand JavaScript and asynchronous programming deeply",
        "Build server-side applications with Node.js",
        "Create REST APIs using Express.js",
        "Write scalable, type-safe backend code with TypeScript",
        "Design and manage MongoDB and PostgreSQL databases",
        "Implement authentication and application security",
        "Integrate payments, emails, uploads and third-party services",
        "Test, deploy and maintain production-ready APIs",
      ],
      audience: [
        "Beginners who want to specialise in backend development",
        "JavaScript developers ready to build server-side applications",
        "Frontend developers expanding into backend engineering",
        "Aspiring software engineers and API developers",
        "Developers interested in building scalable applications",
      ],
      audienceNote:
        "Basic computer literacy and access to a laptop are recommended. The course begins with JavaScript foundations before moving into backend engineering.",
    },
    {
      type: "stages",
      tone: "sage",
      compact: true,
      label: "9-MODULE COURSE OUTLINE",
      title: "From JavaScript foundations to professional backend engineering.",
      intro:
        "A structured learning path covering the tools, technologies and engineering practices required to build modern backend applications.",
      stages: [
        {
          label: "STAGE 01",
          title: "JavaScript for Backend Development",
          description:
            "Understand how JavaScript works, especially its asynchronous behaviour and execution model.",
          topics: [
            "Variables, data types, operators, functions and scope",
            "Arrays, objects, destructuring and spread operators",
            "Higher-order functions and array methods",
            "Closures, callbacks, promises and async/await",
            "Error handling and CommonJS / ES Modules",
            "Event loop, call stack and task queues",
            "Hoisting, execution context, prototypes and classes",
            "Memory management and garbage collection",
          ],
          project:
            "File management utility, asynchronous data processing application and command-line task manager.",
        },
        {
          label: "STAGE 02",
          title: "Node.js Fundamentals",
          description:
            "Learn the Node.js runtime and the foundations of server-side JavaScript.",
          topics: [
            "Node.js architecture, V8 and runtime environment",
            "Event-driven architecture and non-blocking I/O",
            "Node.js modules and built-in modules",
            "HTTP, FS, Path, Events, Crypto, OS and Process",
            "NPM, package.json and package-lock.json",
            "Environment variables and HTTP servers",
            "Streams, buffers, file uploads and downloads",
            "Worker threads and child processes",
          ],
          project: "Build a file upload and management server without Express.",
        },
        {
          label: "STAGE 03",
          title: "Express.js",
          description:
            "Build structured backend applications and REST APIs with Express.",
          topics: [
            "Express introduction, setup and configuration",
            "Routing, route parameters and query parameters",
            "Request and response objects",
            "Middleware and custom middleware",
            "Error-handling middleware",
            "Controllers, services and MVC architecture",
            "Modular routing and application architecture",
            "Request validation and centralised error handling",
            "Pagination, sorting, filtering and API versioning",
          ],
          project: "Build a complete blog REST API with CRUD functionality.",
        },
        {
          label: "STAGE 04",
          title: "TypeScript for Backend Development",
          description:
            "Make your backend code more predictable, maintainable and type-safe.",
          topics: [
            "TypeScript fundamentals and static typing",
            "Type annotations, interfaces and type aliases",
            "Union and intersection types",
            "Generics and enums",
            "Classes and access modifiers",
            "Utility types, type narrowing and type guards",
            "TypeScript with Express and project configuration",
            "Type-safe API responses and database models",
          ],
          project: "Convert your Express blog API to TypeScript.",
        },
        {
          label: "STAGE 05",
          title: "Database Engineering",
          description:
            "Learn to store, organise, retrieve and manage application data.",
          topics: [
            "Routing, route parameters and query parameters",
            "NoSQL concepts, documents and collections",
            "CRUD operations, queries and indexing",
            "Aggregation pipelines, relationships and transactions",
            "MongoDB Atlas, Mongoose and schema validation",
            "Relational databases, tables and relationships",
            "SQL queries, joins and constraints",
            "Primary keys, foreign keys and normalisation",
            "Indexing, transactions, views and stored procedures",
            "Query optimisation, Prisma or Sequelize ORM",
          ],
          project: "Build an e-commerce backend using PostgreSQL and MongoDB.",
        },
        {
          label: "STAGE 06",
          title: "Authentication and Authorization",
          description: "Build secure user access and permission systems.",
          topics: [
            "Authentication vs authorisation",
            "Password hashing with bcrypt or Argon2",
            "JWT, access tokens and refresh tokens",
            "Sessions and cookies",
            "Role-based and permission-based access control",
            "OAuth 2.0 and social login",
            "Password reset, email verification and OTP",
            "Multi-factor authentication and account security",
            "Token revocation and rotation",
          ],
          project:
            "Build a multi-role authentication system with admin, customer and vendor accounts.",
        },
        {
          label: "STAGE 07",
          title: "Advanced Backend Development",
          description:
            "Extend your applications with integrations and advanced backend features.",
          topics: [
            "File uploads with Multer and Cloudinary",
            "Email with Nodemailer and SMS / OTP integrations",
            "Payment gateways and webhooks",
            "Background jobs and cron jobs",
            "Redis caching and rate limiting",
            "API security and WebSockets",
            "Real-time communication and search",
            "Third-party APIs and BullMQ queues",
          ],
          project:
            "Build a marketplace backend with payments, notifications, file uploads and background processing.",
        },
        {
          label: "STAGE 08",
          title: "Testing and Quality Assurance",
          description:
            "Learn to verify your application, find problems and maintain code quality.",
          topics: [
            "Unit, integration and end-to-end testing",
            "Jest or Vitest and Supertest",
            "Mocking and stubbing",
            "API testing with Postman and HTTPie",
            "Test coverage and test-driven development",
            "Debugging, logging and code quality",
            "Linting and error scenarios",
          ],
          project:
            "Write automated tests for an API, including authentication, database operations and error scenarios.",
        },
        {
          label: "STAGE 09",
          title: "Deployment and DevOps",
          description:
            "Prepare your backend applications for real-world production environments.",
          topics: [
            "Production vs development environments",
            "Linux server administration and VPS deployment",
            "Render, Railway and AWS",
            "Nginx, reverse proxies and PM2",
            "Docker and Docker Compose",
            "CI/CD pipelines and GitHub Actions",
            "Environment configuration and SSL certificates",
            "Domain configuration and database backups",
            "Monitoring and logging",
          ],
          project:
            "Deploy a production-ready API with a database, custom domain, CI/CD and monitoring.",
        },
      ],
    },
    {
      type: "cards",
      tone: "cream",
      label: "PRACTICAL PROJECTS",
      title: "Learn by building real backend systems.",
      intro:
        "Throughout the course, you will work on practical projects that help you apply backend concepts and develop a strong body of technical work.",
      cards: [
        {
          title: "01 / File management utility",
          description:
            "Create a utility for handling files and asynchronous data processing.",
        },
        {
          title: "02 / Blog REST API",
          description:
            "Build a structured API with CRUD functionality, routing and validation.",
        },
        {
          title: "03 / E-commerce backend",
          description:
            "Manage products, orders and application data using two database systems.",
        },
        {
          title: "04 / Authentication system",
          description:
            "Implement secure authentication and role-based access for multiple users.",
        },
        {
          title: "05 / Marketplace backend",
          description:
            "Integrate payments, notifications, file uploads and background processing.",
        },
        {
          title: "06 / Production API",
          description: "Test and deploy a production-ready API with monitoring and CI/CD.",
        },
      ],
    },
    {
      type: "ticks",
      label: "SKILLS BUILT THROUGHOUT",
      title: "More than just backend tools.",
      intro:
        "Develop the engineering habits and problem-solving skills needed to work confidently on professional software projects.",
      lists: [
        [
          "Debugging and reading error messages",
          "Writing clean and maintainable code",
          "Understanding application architecture",
          "Working with technical documentation",
        ],
        [
          "Git workflow and collaborative development",
          "API design and database management",
          "Security and performance awareness",
          "Responsible use of AI development tools",
        ],
      ],
    },
    backendPackages("cream"),
  ],
  cta: academyCta("Build the technology behind great products.", "READY TO START BUILDING?"),
  closeFooter: true,
};
