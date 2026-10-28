import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

// Defining the typography variants
export const variantStyles = {
  h1: "text-5xl font-bold leading-tight",
  h2: "text-4xl font-bold leading-tight",
  h3: "text-3xl font-semibold leading-snug",
  h4: "text-2xl font-semibold leading-snug",
  h5: "text-xl font-medium leading-normal",
  h6: "text-lg font-medium leading-normal",
  // Responsive sizes: below lg the size is fluid — clamp(size at 320px, ..., Figma size) —
  // growing smoothly from phone through tablet and reaching the Figma size at 1024px,
  // so there's no jump. From lg (1024px+, laptop/desktop) it's the exact Figma size.
  body: "font-dm-sans text-[length:clamp(0.875rem,0.818rem+0.284vw,1rem)] lg:text-base font-normal leading-[1.5] lg:leading-[1.4rem] tracking-normal",
  small: "text-sm font-normal leading-normal",
  caption: "text-xs font-normal leading-normal",
  navButton:
    "font-manrope text-base font-normal leading-[1.4rem] tracking-normal",
  primaryButton:
    "font-dm-sans text-[length:clamp(0.875rem,0.818rem+0.284vw,1rem)] lg:text-base font-semibold leading-[1.4] lg:leading-[1.4rem] tracking-normal",
  text: "font-dm-sans text-[length:clamp(0.75rem,0.693rem+0.284vw,0.875rem)] lg:text-sm font-normal leading-[1.4] lg:leading-[1.225rem] tracking-normal",
  // Page hero heading: fluid 28px (320px) → 45px (1024px); laptop+ scales with the screen
  // (4.4vw) up to Figma's 64px
  hero: "font-manrope text-[length:clamp(1.75rem,1.267rem+2.415vw,2.8125rem)] lg:text-[length:clamp(2rem,4.4vw,4rem)] font-bold leading-[1.25] lg:leading-[1.4] tracking-[-0.02em]",
  subHeading:
    "font-manrope text-[length:clamp(1.0625rem,0.75rem+1.5625vw,1.75rem)] lg:text-[1.75rem] font-semibold leading-[1.35] lg:leading-[2.45rem] tracking-[0.005em]",
  navigation:
    "font-dm-sans text-[length:clamp(0.71875rem,0.648rem+0.355vw,0.875rem)] lg:text-sm font-medium leading-[1.4] lg:leading-[1.225rem] tracking-[0.04em] lg:tracking-normal",
  section:
    "font-inter text-[length:clamp(1.375rem,0.75rem+3.125vw,2.75rem)] lg:text-[2.75rem] font-bold leading-[1.3] lg:leading-[3.85rem] tracking-[-0.012em]",
  cardHeading:
    "font-manrope text-[length:clamp(1rem,0.886rem+0.568vw,1.25rem)] lg:text-xl font-semibold leading-[1.4] lg:leading-7 tracking-[0.003em]",
  contactHeader:
    "font-manrope text-[length:clamp(0.875rem,0.818rem+0.284vw,1rem)] lg:text-base font-bold leading-[1.6] lg:leading-7 tracking-[0.003em]",
  largeBody: "font-dm-sans text-[length:clamp(0.9375rem,0.852rem+0.426vw,1.125rem)] lg:text-lg font-normal leading-[1.6] lg:leading-7.5 tracking-normal",

  // Inline variants, to be nested inside another Typography
  "span-header":
    "font-newsreader text-[length:clamp(1.75rem,1.267rem+2.415vw,2.8125rem)] lg:text-[length:clamp(2rem,4.4vw,4rem)] font-semibold italic leading-[1.25] tracking-[-0.02em]",
  "span-newsreader":
    "font-newsreader text-[length:clamp(1.375rem,0.75rem+3.125vw,2.75rem)] lg:text-[2.75rem] font-bold italic leading-[1.3] lg:leading-[3.85rem] tracking-[-0.012em]",
} as const;

const defaultTags: Record<TypographyVariant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
  small: "p",
  caption: "span",
  navButton: "span",
  primaryButton: "span",
  text: "p",
  hero: "h1",
  subHeading: "h2",
  navigation: "span",
  section: "h2",
  cardHeading: "h3",
  contactHeader: "h4",
  largeBody: "p",
  "span-header": "span",
  "span-newsreader": "span",
};

export type TypographyVariant = keyof typeof variantStyles;

type TypographyProps<T extends ElementType> = {
  variant?: TypographyVariant;
  as?: T;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export default function Typography<T extends ElementType = "p">({
  variant = "body",
  as,
  className,
  children,
  ...props
}: TypographyProps<T>) {
  const Component = as ?? defaultTags[variant];

  return (
    <Component className={cn(variantStyles[variant], className)} {...props}>
      {children}
    </Component>
  );
}

/*
Example usage:

import Typography from "@/components/ui/typography";

<Typography variant="h1">Welcome to BiscoTech</Typography>

<Typography variant="body" className="text-primary mt-4">
  Some body text with extra classes
</Typography>

// Render with a different tag but keep the variant's styles
<Typography variant="text">Regular 14px paragraph text</Typography>

// Span variants nest inside another Typography to style part of the text
<Typography variant="hero">
  Building the <Typography variant="span-header">future</Typography> of tech
</Typography>

<Typography variant="section">
  What we <Typography variant="span-newsreader">offer</Typography>
</Typography>

<Link href="/services">
  <Typography variant="navigation">Services</Typography>
</Link>

<Typography variant="h2" as="span">Looks like h2, renders as span</Typography>

<Link href="/about">
  <Typography variant="navButton">About</Typography>
</Link>
*/
