import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Proven track record",
    description: "We have helped countless businesses overcome challenges.",
    link: "/about",
    linkText: "Our track record",
  },
  {
    title: "Collaborative approach",
    description: "We ensure transparency throughout the process.",
    link: "/about",
    linkText: "Our process",
  },
  {
    title: "Innovative solutions",
    description: "We leverage the latest technologies to deliver solutions.",
    link: "/services",
    linkText: "Our solutions",
  },
];

export function WhyChooseUsSection() {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <SectionHeader
            label="Why choose us"
            title="We strive to deliver value to our clients"
          />
          <p className="text-muted-foreground text-lg self-end">
            We are dedicated to providing the highest level of service, delivering innovative solutions, and exceeding expectations in everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, delay }: { feature: typeof features[0]; delay: number }) {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`bg-section-light rounded-2xl p-8 card-hover ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-muted-foreground mb-6">{feature.description}</p>
      <Link 
        to={feature.link}
        className="flex items-center gap-2 text-primary font-medium group"
      >
        {feature.linkText} 
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
