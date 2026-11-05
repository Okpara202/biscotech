import type { CourseDetails } from ".";
import { academyCta, packageIntros, packagesHeading } from "./shared";

// Content from the "Digital marketing" frame in Figma
export const digitalMarketing: CourseDetails = {
  intro:
    "Learn to attract the right audience, create compelling content, generate leads, and turn attention into meaningful business growth.",
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
      title: "What should you expect?",
      intro:
        "This practical training takes you through the full digital marketing process—from understanding your audience and building a brand presence to running campaigns, designing funnels, and delivering client projects.",
      learn: [
        "Research target audiences and develop marketing strategies",
        "Set up, optimize, and manage social media business pages",
        "Create content, graphics, calendars, and persuasive copy",
        "Build offers, generate leads, and improve sales conversion",
        "Plan and analyse Facebook and Instagram ad campaigns",
        "Design sales funnels, landing pages, and lead capture flows",
        "Package services, find clients, and build a portfolio",
      ],
      audience: [
        "Beginners interested in digital marketing",
        "Small business owners growing their online presence",
        "Content creators and social media assistants",
        "Aspiring freelancers and marketing professionals",
        "Anyone ready to learn through practical exercises",
      ],
      audienceNote:
        "No previous digital marketing experience is required. Basic computer literacy and access to a laptop or smartphone are recommended.",
    },
    {
      type: "modules",
      label: "12-WEEK COURSE OUTLINE",
      title: "From marketing fundamentals to client execution.",
      intro: "Seven practical modules designed to build your skills step by step.",
      modules: [
        {
          label: "MODULE 01",
          title: "Digital Marketing Fundamentals",
          description:
            "Introduction to digital marketing, online business opportunities, target audience research, marketing strategy, and the customer journey.",
        },
        {
          label: "MODULE 02",
          title: "Social Media Marketing",
          description:
            "Facebook and Instagram business page setup, page optimization, branding, content strategy, Canva design, and social media mgt.",
        },
        {
          label: "MODULE 03",
          title: "Content Marketing & Copywriting",
          description:
            "Content planning and calendars, creating marketing content, copywriting, captions, and effective calls to action.",
        },
        {
          label: "MODULE 04",
          title: "Marketing & Sales",
          description:
            "Offer creation, product positioning, lead generation, customer acquisition, WhatsApp marketing, sales conversion, and follow-up.",
        },
        {
          label: "MODULE 05",
          title: "Paid Advertising",
          description:
            "Facebook and Instagram advertising (Meta Ad), targeting, ad copy and creative design, campaign budgeting, and performance analysis.",
        },
        {
          label: "MODULE 06",
          title: "Sales Funnel Design",
          description:
            "Marketing funnels, landing pages, lead capture forms, sales pages, WhatsApp and email integration, and lead follow-up automation.",
        },
        {
          label: "MODULE 07",
          title: "Freelancing & Digital Marketing Business",
          description:
            "Service packaging, client acquisition, pricing and selling services, portfolio development, and practical client project execution.",
        },
      ],
    },
    {
      type: "cards",
      tone: "cream",
      label: "PRACTICAL WORK",
      title: "Put your skills into practice.",
      intro:
        "Expect guided exercises and a final project that helps you apply the concepts instead of only learning theory.",
      cards: [
        {
          title: "01 / Brand content plan",
          description:
            "Build a content calendar and create sample social media content for a business.",
        },
        {
          title: "02 / Campaign exercise",
          description:
            "Develop campaign concept, identify target audience, practise & plan and plan budgets.",
        },
        {
          title: "03 / Marketing funnel",
          description:
            "Map a customer journey and create a simple lead capture and follow-up flow.",
        },
      ],
    },
    {
      type: "packages",
      tone: "sage",
      ...packagesHeading,
      packages: [
        {
          ...packageIntros.starter,
          features: [
            "12-week course access",
            "Core lessons and learning materials",
            "Practical class exercises",
            "Group feedback sessions",
            "Final course project",
          ],
        },
        {
          ...packageIntros.professional,
          features: [
            "Everything in Starter",
            "Expanded content and campaign assignments",
            "More detailed project reviews",
            "Marketing funnel exercise",
            "CV and portfolio presentation session",
          ],
          oneLine: ["CV and portfolio presentation session"],
        },
        {
          ...packageIntros.mentorship,
          features: [
            "Everything in Professional",
            "Additional project feedback",
            "Guided service packaging exercise",
            "Client project review",
            "Personal learning action plan",
          ],
        },
      ],
    },
  ],
  cta: academyCta("Build skills that move businesses forward."),
};
