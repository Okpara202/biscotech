import Typography, { variantStyles } from "@/components/ui/typography";
import { DarkArrowRightUp } from "@/components/ui/reusable/svg";
import { CONTACT_EMAIL } from "@/components/ui/reusable/inquiry";
import { siteConfig } from "@/lib/seo";
import { cn } from "@/lib/utils";
import ContactForm from "./contactForm";

const details = [
  { label: "WHAT WE DO", text: "Businesses · Startups · Personal brands" },
  { label: "WHO WE WORK WITH", text: "Businesses · Startups · Personal brands" },
];

// Contact page hero: intro + details on the left, the inquiry form card on the right.
// First section on the page, so it sits behind the transparent header (Figma: Soft Sage 40%).
export default function ContactHero() {
  return (
    <section id="contact" className="bg-secondary-accent/40">
      {/* Spacing on the inner box (the section's top padding is the header offset).
          Figma: content 96px below the header line. */}
      <div className="mx-auto page-container flex flex-col items-center gap-10 pt-10 pb-16 lg:flex-row lg:items-start lg:justify-between lg:gap-3.5 lg:pt-24 lg:pb-24">
        {/* Left: centred while stacked, left-aligned beside the form on laptop+ */}
        <div className="flex w-full flex-col items-center gap-6 text-center lg:min-w-0 lg:flex-1 lg:max-w-152.75 lg:items-start lg:text-left">
          <div className="flex flex-col items-center gap-5 md:gap-6 lg:items-start">
            <Typography variant="text" as="p" className="uppercase text-text-charcoal">
              OUR PROCESS · HOW WE WORK
            </Typography>
            <Typography variant="hero" className="text-primary-brand lg:max-w-127.5">
              Let&apos;s create something{" "}
              <Typography variant="span-header" className="text-light-teal">
                meaningful.
              </Typography>
            </Typography>
            <Typography
              variant="largeBody"
              as="p"
              className="max-w-xl text-primary-brand lg:max-w-none"
            >
              Have a project in mind, need a clearer digital direction, or want
              to improve your online presence? Tell us a little about it and
              let&apos;s start a conversation.
            </Typography>
          </div>

          {/* Details list: sage line under each, 40px top/bottom on laptop (Figma) */}
          <ul className="w-full max-w-xl lg:max-w-147.5">
            <li className="flex flex-col items-center gap-1 border-b border-secondary-accent py-6 lg:items-start lg:gap-3 lg:py-10">
              <Typography variant="primaryButton" as="p" className="text-primary-brand">
                EMAIL
              </Typography>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={cn(
                  "inline-flex items-center gap-2 py-3 text-primary-brand",
                  variantStyles.primaryButton,
                )}
              >
                {CONTACT_EMAIL}
                <DarkArrowRightUp />
              </a>
            </li>
            <li className="flex flex-col items-center gap-1 border-b border-secondary-accent py-6 lg:items-start lg:gap-3 lg:py-10">
              <Typography variant="primaryButton" as="p" className="text-primary-brand">
                PHONE
              </Typography>
              <a
                href={`tel:${siteConfig.phone.tel}`}
                className={cn(
                  "inline-flex items-center gap-2 py-3 text-primary-brand",
                  variantStyles.primaryButton,
                )}
              >
                {siteConfig.phone.display}
                <DarkArrowRightUp />
              </a>
            </li>
            <li className="flex flex-col items-center gap-2 border-b border-secondary-accent py-6 lg:items-start lg:gap-3 lg:py-10">
              <Typography variant="primaryButton" as="p" className="text-primary-brand">
                VISIT US
              </Typography>
              <Typography variant="text" as="address" className="not-italic text-text-charcoal">
                {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.country}
              </Typography>
            </li>
            {details.map((detail) => (
              <li
                key={detail.label}
                className="flex flex-col items-center gap-2 border-b border-secondary-accent py-6 lg:items-start lg:gap-3 lg:py-10"
              >
                <Typography variant="primaryButton" as="p" className="text-primary-brand">
                  {detail.label}
                </Typography>
                <Typography variant="text" as="p" className="text-text-charcoal">
                  {detail.text}
                </Typography>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
