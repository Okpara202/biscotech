// Structured data (schema.org) for search engines. In a page, render it last, not first: the
// header treats main's first child as the hero (globals.css, HeaderOffset).
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // "<" escaped so the JSON can't close the script tag early
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
