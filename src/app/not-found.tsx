import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/button";
import { ArrowUpEnd } from "@/components/ui/reusable/svg";
import Typography from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const pages = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Our process", href: "/our_process" },
  { label: "Academy", href: "/academy" },
  { label: "Contact", href: "/contact" },
];

// Shown for any URL that doesn't exist (yet). Same look as the page heroes: soft sage
// background, small label, big heading with an italic teal part, then the buttons.
// Everything is centred at every size; it fills most of the screen so the footer
// doesn't jump up under a short page.
export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-secondary-accent/40">
      {/* Spacing lives on the inner box: the section's own top padding is reserved for
          the header offset (globals.css) */}
      <div className="page-container flex flex-col items-center gap-8 py-14 text-center md:gap-10 md:py-20 lg:py-24">
        <div className="flex flex-col items-center gap-5 md:gap-6">
          <Typography variant="text" className="uppercase text-text-charcoal">
            ERROR 404 · PAGE NOT FOUND
          </Typography>

          <Typography
            variant="span-header"
            as="p"
            aria-hidden="true"
            className="text-[clamp(5rem,3.5rem+7.5vw,9rem)] leading-none lg:text-[9rem] text-light-teal"
          >
            404
          </Typography>

          <Typography variant="hero" className="max-w-2xl text-primary-brand">
            This page is still{" "}
            <Typography variant="span-header" className="text-light-teal">
              taking shape.
            </Typography>
          </Typography>

          <Typography variant="largeBody" className="max-w-xl text-text-charcoal">
            The page you&apos;re looking for doesn&apos;t exist yet, or it may have
            moved. Head back home or pick up from one of the pages below.
          </Typography>
        </div>

        {/* Phones: full-width stacked buttons; side by side from sm */}
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-7">
          <Button href="/" icon={<ArrowUpEnd />} className="shrink-0 border-0 bg-primary-brand text-cards-and-sections w-full sm:w-auto">
            Back to home
          </Button>
          <Button
            href="/contact"
            className="shrink-0 border-0 bg-primary-brand text-cards-and-sections w-full border border-primary-brand bg-transparent text-text-charcoal hover:bg-primary-brand hover:text-cards-and-sections sm:w-auto"
          >
            Talk to us
          </Button>
        </div>

        <nav aria-label="Pages on this site">
          <ul className="flex flex-wrap justify-center gap-2 md:gap-3">
            {pages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="inline-block rounded-full border border-[rgba(18,63,58,0.4)] bg-cards-and-sections px-4 py-2 text-primary-brand transition-colors hover:bg-secondary-accent"
                >
                  <Typography variant="text" as="span">
                    {page.label}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
