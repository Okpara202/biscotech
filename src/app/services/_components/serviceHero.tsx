import EveryHero from "@/components/ui/reusable/everyHero";

export default function ServiceHero() {
  return (
    <EveryHero
      label="WHAT WE DO · OUR SERVICES"
      title="Digital solutions for"
      highlight="your next stage."
      description="We bring strategy, design, and technology together to help businesses show up clearly, connect with the right people, and grow online."
      primaryAction={{ label: "Discuss your project", href: "/contact" }}
      secondaryAction={{ label: "Explore our work", href: "/our_work" }}
      card={{
        title: "A thoughtful approach",
        text: "Whether you need a website, a stronger brand, or help reaching your audience, we shape the work around your goals—not a one-size-fits-all package.",
      }}
    />
  );
}
