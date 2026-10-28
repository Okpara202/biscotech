"use client";
import { useEffect } from "react";

// Three jobs for the sticky header:
// 1. Measures it and exposes its height as the CSS variable --header-h. globals.css uses it
//    to slide each page's first section (the hero) up behind the transparent header, so the
//    header shows the hero's background — like in Figma.
// 2. Sets data-scrolled="true" on it once the page scrolls, so it can switch from transparent
//    to a solid background (keeps the nav readable over content scrolling underneath).
// 3. Copies the current page's hero background colour into --hero-bg, so that solid
//    background matches the hero (sage on Services/Contact, cream on Home...).
export default function HeaderOffset() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>("[data-site-header]");
    const main = document.querySelector("main");
    if (!header) return;

    const root = document.documentElement;
    const updateHeight = () =>
      root.style.setProperty("--header-h", `${header.offsetHeight}px`);
    const updateScrolled = () =>
      header.setAttribute("data-scrolled", String(window.scrollY > 8));
    // Any CSS colour string works here. A hero with only a gradient (like Home) reports
    // "transparent", which simply leaves the cream page colour showing.
    const updateHeroBg = () => {
      const hero = document.querySelector<HTMLElement>("main > :first-child");
      header.style.setProperty(
        "--hero-bg",
        hero ? getComputedStyle(hero).backgroundColor : "transparent",
      );
    };

    updateHeight();
    updateScrolled();
    updateHeroBg();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(header);
    window.addEventListener("scroll", updateScrolled, { passive: true });

    // Re-read the hero colour whenever the page content changes (client-side navigation).
    // Watching <main> itself is reliable; reacting to the URL change alone can run before the
    // new page's hero is on screen, and would pick up the previous page's colour. Class
    // changes are watched too: two pages that both start with a <section> may reuse the
    // same element and only swap its classes.
    const mutationObserver = new MutationObserver(updateHeroBg);
    if (main) {
      mutationObserver.observe(main, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", updateScrolled);
    };
  }, []);

  return null;
}
