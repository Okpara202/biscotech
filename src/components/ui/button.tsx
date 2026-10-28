import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { variantStyles, type TypographyVariant } from "@/components/ui/typography";

// The primary (filled teal) button look, for links that should look like a Button.
// Kept here (not in a "use client" file) so server components can import it too.
export const primaryButtonLinkClass = cn(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-[0.625rem] bg-primary-brand px-6 py-3 text-cards-and-sections",
  variantStyles.primaryButton,
);

type ButtonProps =ComponentPropsWithoutRef<"button"> & {
  typography?: TypographyVariant;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
};

export default function Button({
  className,
  type = "button",
  typography = "primaryButton",
  icon,
  iconPosition = "right",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-[0.625rem] border px-6 py-3",
        variantStyles[typography],
        className,
      )}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
}

/*
Example usage:

import Button from "@/components/ui/button";

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
