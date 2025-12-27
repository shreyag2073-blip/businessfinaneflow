import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "The first step is to gain a deep understanding of your business.",
  },
  {
    number: "02",
    title: "Development",
    description: "We'll work with you to develop a strategy that fits your objectives.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "We will work closely with your team to implement the changes.",
  },
  {
    number: "04",
    title: "Monitoring",
    description: "We'll monitor key performance indicators and gather feedback.",
  },
];

export function ProcessSection() {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section-padding bg-section-light">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`text-center mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <SectionHeader
            title="Our process"
            description="We developed an innovative and flexible process that allows us to understand your business better"
            centered
          />
          <Button asChild className="rounded-full mt-6">
            <Link to="/about">Learn more</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, delay }: { step: typeof steps[0]; delay: number }) {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-8 card-hover border border-border/50 ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="text-4xl font-bold text-primary/20 mb-4 block">{step.number}</span>
      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
      <p className="text-muted-foreground text-sm">{step.description}</p>
    </div>
  );
}
