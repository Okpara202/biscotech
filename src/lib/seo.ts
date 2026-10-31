import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/components/ui/reusable/inquiry";

// The site's address, used for canonical URLs, the sitemap and the preview card.
// - `next dev`: localhost, so links work while developing.
// - On Vercel: the project's production address, which Vercel gives every build
//   automatically (nothing to set up). It's the .vercel.app address until a custom domain
//   is connected, then biscotech.org on the next deploy. Previews use it too, so Google
//   only ever indexes the production site.
// - Anywhere else: biscotech.org.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : vercelUrl
      ? `https://${vercelUrl}`
      : "https://biscotech.org";

export const siteConfig = {
  name: "BiscoTech",
  url: siteUrl.replace(/\/$/, ""),
  tagline: "Thoughtful design. Meaningful impact.",
  description:
    "BiscoTech is a digital agency bringing design, technology, and strategy together — websites, branding, digital marketing, SEO and consulting that help businesses build a stronger presence online, plus BiscoTech Academy for practical digital skills.",
  email: CONTACT_EMAIL,
  logo: "/img/Logo.png",
  keywords: [
    "BiscoTech",
    "digital agency",
    "web design",
    "website development",
    "app development",
    "branding",
    "visual identity",
    "digital marketing",
    "social media management",
    "search engine optimisation",
    "SEO",
    "digital consulting",
    "BiscoTech Academy",
    "tech courses",
    "digital skills training",
    "product design course",
    "front-end development course",
    "back-end development course",
    "full stack development course",
    "digital marketing course",
  ],
  // Credited as the site's developer in the meta tags, structured data and humans.txt
  developer: {
    name: "Favour Okpara",
    url: "https://github.com/Okpara202",
  },
} as const;

// Shared preview image (src/app/opengraph-image.tsx)
const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.tagline}`,
};

type PageSeo = {
  /** Page name; the layout's template adds " | BiscoTech". Omit on the home page. */
  title?: string;
  description: string;
  /** Route path, e.g. "/services" */
  path: string;
};

// Next merges metadata shallowly, so a page that sets openGraph/twitter replaces the
// layout's ones completely. This builds the full set per page so every link still gets
// the preview card, the right title/description and a canonical URL.
export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;

  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteConfig.name,
      url: path,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
