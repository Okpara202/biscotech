import Typography from "@/components/ui/typography";

/** Splits "Plain *italic* plain" into its parts; odd positions are the italic ones */
export function emphasisParts(text: string) {
  return text.split("*");
}

/** The heading text without its *markers*, for places that need plain text */
export function plainText(text: string) {
  return text.replaceAll("*", "");
}

// Course headings mark Figma's italic Newsreader words with *asterisks* in the course data:
// "From your *first line of code* to *complete applications.*"
export default function Emphasis({ text }: { text: string }) {
  return emphasisParts(text).map((part, index) =>
    index % 2 === 1 ? (
      <Typography key={index} variant="span-newsreader">
        {part}
      </Typography>
    ) : (
      part
    ),
  );
}
