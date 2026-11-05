import JsonLd from "@/components/ui/reusable/jsonLd";
import { pageJsonLd, pageMetadata } from "@/lib/seo";
import FirstConversation from "./_components/firstConversation";
import OurProcessHero from "./_components/ourProcessHero";
import WorkingTogether from "./_components/workingTogether";

const description =
  "Four steps, one shared direction: how BiscoTech listens, defines the focus, builds and launches, then keeps your digital presence moving forward.";

export const metadata = pageMetadata({
  title: "Our Process: How We Work",
  description,
  path: "/our_process",
});

export default function OurProcessPage() {
  return (
    <>
      <OurProcessHero />
      <FirstConversation />
      <WorkingTogether />
      <JsonLd data={pageJsonLd({ name: "Our Process", description, path: "/our_process" })} />
    </>
  );
}
