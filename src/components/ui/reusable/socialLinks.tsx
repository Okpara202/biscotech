import { siteConfig } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { InstagramIcon, LinkedInIcon, TikTokIcon } from "./svg";

// Figma order: LinkedIn, Instagram, TikTok. Ones without a url yet (siteConfig.socialLinks in
// seo.ts) are left out.
const socials = [
  { href: siteConfig.socialLinks.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: siteConfig.socialLinks.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: siteConfig.socialLinks.tiktok, label: "TikTok", Icon: TikTokIcon },
].filter((social) => social.href);

// The row of social icons (footer and Contact page). Icons take the text colour around them.
// Figma: 24px icons (LinkedIn 24×23, so width-based sizing keeps its shape), 27px apart;
// a little smaller on phones.
export default function SocialLinks({ className }: { className?: string }) {
  if (socials.length === 0) return null;

  return (
    <ul className={cn("flex items-center gap-5 lg:gap-6.75", className)}>
      {socials.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`BiscoTech on ${label}`}
            className="flex transition-opacity duration-300 hover:opacity-70"
          >
            <Icon className="h-auto w-5 lg:w-6" />
          </a>
        </li>
      ))}
    </ul>
  );
}
