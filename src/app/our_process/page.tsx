import { pageMetadata } from "@/lib/seo";
import FirstConversation from "./_components/firstConversation";
import OurProcessHero from "./_components/ourProcessHero";
import WorkingTogether from "./_components/workingTogether";

export const metadata = pageMetadata({
  title: "Our Process",
  description:
    "Four steps, one shared direction: how BiscoTech listens, defines the focus, builds and launches, then keeps your digital presence moving forward.",
  path: "/our_process",
});

export default function OurProcessPage() {
  return (
    <>
      <OurProcessHero />
      <FirstConversation />
      <WorkingTogether />
    </>
  );
}
