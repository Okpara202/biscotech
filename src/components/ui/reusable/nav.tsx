"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Typography from "../typography";
import { primaryButtonLinkClass } from "../button";
import { usePathname } from "next/navigation";
import { ArrowUpEnd } from "./svg";
import { cn } from "@/lib/utils";

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
        className={`p-2.5 border-b ${isActive ? "border-primary-brand" : "border-transparent hover:border-primary-brand"}`}
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
                  "rounded-[0.625rem] px-3 py-3",
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
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className={cn(primaryButtonLinkClass, "mt-2 sm:hidden")}
          >
            Let&apos;s Talk
            <ArrowUpEnd />
          </Link>
        </nav>
      )}
    </div>
  );
}
