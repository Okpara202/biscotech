"use client";

import { useEffect, useRef, type ReactNode } from "react";

type StackCardsProps = {
  as?: "div" | "ul" | "ol";
  className?: string;
  children: ReactNode;
  // Stack only when the cards make at least this many rows at the current screen width
  minRows?: number;
  // Phones/tablets only: laptop+ (lg, 64rem) keeps the plain list
  mobileOnly?: boolean;
};

// A list of cards that pile up while scrolling (like woxelo's feature cards): each row pins just
// under the header, a little lower than the row before, and the next row slides up over it.
// Phones and laptops are measured separately, so a 6-card grid can stack as 6 rows on a phone
// and stay a normal 3-row grid on a laptop. Cards in the same row pin together. The pinning
// itself is CSS ([data-stacking] in globals.css); this only counts the rows and passes each card
// its row offset and row height. Give the cards a solid background so they cover each other.
export default function StackCards({
  as: Tag = "div",
  className,
  children,
  minRows = 4,
  mobileOnly = false,
}: StackCardsProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const list = ref.current;
    if (!list) return;

    const update = () => {
      const cards = Array.from(list.children) as HTMLElement[];
      const style = getComputedStyle(list);
      // Cards per row: a grid's column count; a sideways flex row is all one row
      let columns = 1;
      if (style.display.includes("grid")) {
        columns = style.gridTemplateColumns.split(" ").filter(Boolean).length || 1;
      } else if (style.display.includes("flex") && !style.flexDirection.startsWith("column")) {
        columns = Math.max(cards.length, 1);
      }

      const stacking =
        Math.ceil(cards.length / columns) >= minRows &&
        !(mobileOnly && matchMedia("(width >= 64rem)").matches);
      list.toggleAttribute("data-stacking", stacking);

      cards.forEach((card, index) => {
        if (!stacking) {
          card.style.removeProperty("--stack-step");
          card.style.removeProperty("--stack-h");
          return;
        }
        const row = Math.floor(index / columns);
        const rowCards = cards.slice(row * columns, (row + 1) * columns);
        // The row's tallest card: a card taller than the screen pins by its bottom edge instead
        const rowHeight = Math.max(...rowCards.map((rowCard) => rowCard.offsetHeight));
        card.style.setProperty("--stack-step", `${row * 0.75}rem`);
        card.style.setProperty("--stack-h", `${rowHeight}px`);
      });
    };

    update();
    // Re-measure when the screen width changes the column count or a card's height changes
    const observer = new ResizeObserver(update);
    observer.observe(list);
    Array.from(list.children).forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [minRows, mobileOnly]);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
