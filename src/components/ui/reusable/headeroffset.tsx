"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Three jobs for the sticky header:
// 1. Measures it and exposes its height as the CSS variable --header-h. globals.css uses it
//    to slide each page's first section (the hero) up behind the transparent header, so the
//    header shows the hero's background — like in Figma.
// 2. Sets data-scrolled="true" on it once the page scrolls, so it can switch from transparent
//    to a solid background (keeps the nav readable over content scrolling underneath).
// 3. Copies the current page's hero background colour into --hero-bg, so that solid
//    background matches the hero (sage on Services, cream on Home...). Re-read on navigation.
export default function HeaderOffset() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.querySelector<HTMLElement>("[data-site-header]");
    if (!header) return;

    const root = document.documentElement;
    const updateHeight = () =>
      root.style.setProperty("--header-h", `${header.offsetHeight}px`);
    const updateScrolled = () =>
      header.setAttribute("data-scrolled", String(window.scrollY > 8));

    updateHeight();
    updateScrolled();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrolled);
    };
  }, []);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>("[data-site-header]");
    const hero = document.querySelector<HTMLElement>("main > :first-child");
    if (!header) return;

    // Any CSS colour string works here. A hero with only a gradient (like Home) reports
    // "transparent", which simply leaves the cream page colour showing.
    const heroBg = hero ? getComputedStyle(hero).backgroundColor : "transparent";
    header.style.setProperty("--hero-bg", heroBg);
  }, [pathname]);

  return null;
}
