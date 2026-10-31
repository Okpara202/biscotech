import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { variantStyles, type TypographyVariant } from "@/components/ui/typography";

// No "use client": works in server components. Pass href for links (most of the site's
// "buttons" are links), leave it out for real buttons (form submits, onClick).

type SharedProps = {
  typography?: TypographyVariant;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  /** "solid" (default): filled/outlined button that lifts, glows and gets a light sweep on hover.
   *  "text": bare text link (no padding/background), which just changes colour on hover. */
  variant?: "solid" | "text";
};

// Shared by both: smooth colour changes, a press-down on click, a visible keyboard focus ring,
// and the arrow icon nudging up-right on hover.
const baseMotion =
  "transition-[translate,scale,box-shadow,background-color,color,border-color] duration-300 ease-out active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-teal [&>svg]:transition-[translate] [&>svg]:duration-300 motion-safe:hover:[&>svg]:translate-x-0.5 motion-safe:hover:[&>svg]:-translate-y-0.5";

// Lift + teal shadow, and a soft light streak sweeping across (drawn behind the text)
const solidMotion =
  "relative isolate overflow-hidden motion-safe:hover:-translate-y-0.5 hover:shadow-[0_0.75rem_1.5rem_-0.75rem_rgba(18,63,58,0.55)] before:pointer-events-none before:absolute before:inset-y-0 before:-left-full before:-z-10 before:w-full before:-skew-x-12 before:bg-linear-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-[left] before:duration-700 before:ease-out hover:before:left-full";

const textMotion = "hover:text-light-teal";

// With href it's a link (next/link): navigates, works in server components, no onClick
// needed. Without href it's a real <button> (form submits, onClick...). Same look either way.
type ButtonAsLink = SharedProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
    href: ComponentPropsWithoutRef<typeof Link>["href"];
  };
type ButtonAsButton = SharedProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export default function Button(props: ButtonProps) {
  const { typography = "primaryButton", icon, iconPosition = "right", variant = "solid" } = props;

  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-[0.625rem] border px-6 py-3",
    variantStyles[typography],
    baseMotion,
    variant === "text" ? textMotion : solidMotion,
    props.className,
  );

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {props.children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  if (props.href !== undefined) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { typography: _t, icon: _i, iconPosition: _p, variant: _v, className: _c, children: _ch, ...linkProps } = props;
    return (
      <Link className={classes} {...linkProps}>
        {content}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { typography: _t, icon: _i, iconPosition: _p, variant: _v, className: _c, children: _ch, href: _h, type = "button", ...buttonProps } = props;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}

/*
Example usage:

import Button from "@/components/ui/button";

// With href → a link that looks like a button (no "use client" needed)
<Button href="/contact" icon={<ArrowUpEnd />}>Let's talk</Button>
<Button href="#courses">Explore course packages</Button>

// Without href → a real <button>
<Button type="submit">Send</Button>
<Button>Get Started</Button>

// Different typography variant
<Button typography="navButton">About</Button>

// With an icon (8px gap is built in), defaults to the right of the text
<Button icon={<ArrowRightIcon />}>Learn More</Button>

// Icon on the left
<Button icon={<svg width="16" height="16" viewBox="0 0 16 16">...</svg>} iconPosition="left">
  Download
</Button>

// Extra classes override the base styles
<Button className="bg-black text-white border-black w-full" onClick={() => {}}>
  Contact Us
</Button>
*/
