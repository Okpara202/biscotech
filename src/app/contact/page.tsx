import { pageMetadata } from "@/lib/seo";
import ContactHero from "./_components/contactHero";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Have a project in mind or need a clearer digital direction? Tell BiscoTech a little about it and let's start a conversation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ContactHero />
    </>
  );
}
