import Image from "next/image";
import Link from "next/link";
import NavLink, { MobileMenu } from "./nav";
import { primaryButtonLinkClass } from "../button";
import { ArrowUpEnd } from "./svg";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    // Sticky: stays pinned while the page scrolls. Near-white + blur so content passing
    // underneath doesn't show through. Tighter padding on phones; Figma spacing from md.
    <header className="sticky top-0 z-40 mx-auto w-full border-b border-[#000000] bg-white/90 py-3 backdrop-blur-md md:pt-4.75 md:pb-7">
      {/* Figma: logo, nav and button with equal gaps between them (not a centred nav) */}
      <div className="relative border border-[rgba(18,63,58,0.4)] page-container mx-auto flex justify-between items-center gap-6 py-3 px-3 xl:py-5">
        {/* Header Logo */}
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

        {/* header links (desktop) */}
        <NavLink />

        <div className="flex items-center gap-2">
          {/* cn (tailwind-merge) so "hidden" replaces the base "inline-flex" instead of fighting it */}
          <Link href="/#contact" className={cn(primaryButtonLinkClass, "hidden sm:inline-flex")}>
            Let&apos;s Talk
            <ArrowUpEnd />
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
