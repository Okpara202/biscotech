import EveryHero from "@/components/ui/reusable/everyHero";

export default function AboutHero() {
  return (
    <EveryHero
      label="ABOUT BISCO TECH, WHO ARE WE"
      title="Thoughtful design."
      highlight=" Meaningful impact"
      description="We create digital experiences that help businesses communicate clearly, connect with people, and move forward with confidence."
      card={{
        title: "Our point of view",
        text: "Great digital work should feel considered, work beautifully, and make sense for the business behind it.",
      }}
    />
  );
}
