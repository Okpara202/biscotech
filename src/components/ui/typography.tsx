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
  body: "font-dm-sans text-base font-normal leading-[1.4rem] tracking-normal",
  small: "text-sm font-normal leading-normal",
  caption: "text-xs font-normal leading-normal",
  navButton:
    "font-manrope text-base font-normal leading-[1.4rem] tracking-normal",
  primaryButton:
    "font-dm-sans text-base font-semibold leading-[1.4rem] tracking-normal",
  text: "font-dm-sans text-sm font-normal leading-[1.225rem] tracking-normal",
  hero: "font-manrope text-[4rem] font-bold leading-[5.6rem] tracking-[-0.02em]",
  subHeading:
    "font-manrope text-[1.75rem] font-semibold leading-[2.45rem] tracking-[0.005em]",
  navigation:
    "font-dm-sans text-sm font-medium leading-[1.225rem] tracking-normal",
  section:
    "font-inter text-[2.75rem] font-bold leading-[3.85rem] tracking-[-0.012em]",
  cardHeading:
    "font-manrope text-xl font-semibold leading-7 tracking-[0.003em]",
  contactHeader:
    "font-manrope text-base font-bold leading-7 tracking-[0.003em]",
  largeBody: "font-dm-sans text-lg font-normal leading-7.5 tracking-normal",

  // Inline variants, to be nested inside another Typography
  "span-header":
    "font-newsreader text-[4rem] font-semibold italic leading-20 tracking-[-0.02em]",
  "span-newsreader":
    "font-newsreader text-[2.75rem] font-bold italic leading-[3.85rem] tracking-[-0.012em]",
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
