"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Typography from "../typography";
import Button from "../button";
import { usePathname } from "next/navigation";
import { ArrowUpEnd, BackArrow } from "./svg";
import { cn } from "@/lib/utils";

// Course pages (/academy/<course>) use Figma's simpler header: just the logo and a link back
// to the Academy (44px above the logo, 31px below). Every other page keeps the full header,
// passed in as children. The list of slugs means a mistyped course URL (a 404) still gets
// the full header.
export function HeaderRow({
  courseSlugs,
  children,
}: {
  courseSlugs: string[];
  children: ReactNode;
}) {
  const pathName = usePathname();
  const isCoursePage = courseSlugs.some((slug) => pathName === `/academy/${slug}`);
  if (!isCoursePage) return children;

  return (
    <div className="page-container flex items-start justify-between gap-6 md:pt-6.25 md:pb-0.75">
      <Link href="/" aria-label="BiscoTech home" className="shrink-0">
        <Image
          src="/img/Logo.svg"
          alt="BiscoTech"
          width={60}
          height={71}
          className="h-auto w-12 xl:w-15"
          priority
        />
      </Link>

      <Link
        href="/academy#courses"
        className="group flex items-center gap-1 text-text-charcoal transition-colors hover:text-light-teal md:gap-2"
      >
        <BackArrow className="size-5 transition-[translate] duration-300 motion-safe:group-hover:-translate-x-1 md:size-6" />
        <Typography
          variant="navButton"
          as="span"
          className="py-2.5 text-sm md:text-base"
        >
          Back to Academy
        </Typography>
      </Link>
    </div>
  );
}

export const navItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/our_work",
    label: "Our Work",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/our_process",
    label: "Our Process",
  },
  {
    href: "/academy",
    label: "Academy",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export default function NavLink() {
  const pathName = usePathname();

  const nav = navItems.map(({ href, label }) => {
    const isActive = pathName === href;
    return (
      <Link
        key={href}
        href={href}
        // Underline grows in from the left on hover; stays full under the active page
        className={`group relative p-2.5 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-primary-brand after:transition-transform after:duration-300 after:ease-out ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`}
      >
        {/* Figma: active link in brand teal, the rest in charcoal */}
        <Typography
          variant="navButton"
          className={isActive ? "text-primary-brand" : "text-text-charcoal"}
        >
          {label}
        </Typography>
      </Link>
    );
  });

  return <nav className="hidden xl:flex gap-2.5 items-end">{nav}</nav>;
}

// Below xl the links don't fit in one row, so they collapse into a dropdown
export function MobileMenu() {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // While open: close on a click/tap anywhere outside the menu (and its toggle), or on Escape
  useEffect(() => {
    if (!open) return;

    function handlePointerDown(e: PointerEvent) {
      if (!menuRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={menuRef} className="xl:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex size-11 cursor-pointer items-center justify-center rounded-[0.625rem] text-primary-brand"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {open ? (
            <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {open && (
        <nav
          id="mobile-menu"
          className="absolute inset-x-0 top-full z-50 mt-2 flex flex-col gap-1 border border-[rgba(18,63,58,0.4)] bg-main-background p-4 shadow-lg"
        >
          {navItems.map(({ href, label }) => {
            const isActive = pathName === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-[0.625rem] px-3 py-3 transition-colors duration-200",
                  isActive ? "bg-secondary-accent" : "hover:bg-secondary-accent/50",
                )}
              >
                <Typography
                  variant="navButton"
                  className={isActive ? "text-primary-brand" : "text-text-charcoal"}
                >
                  {label}
                </Typography>
              </Link>
            );
          })}
          <Button
            href="/#contact"
            onClick={() => setOpen(false)}
            icon={<ArrowUpEnd />}
            className="shrink-0 border-0 bg-primary-brand text-cards-and-sections mt-2 sm:hidden"
          >
            Let&apos;s Talk
          </Button>
        </nav>
      )}
    </div>
  );
}
