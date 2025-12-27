import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

export function CommitmentSection() {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div>
            <SectionHeader
              label="Our commitment"
              title="We build solutions to drive results"
              className="mb-6"
            />
            <p className="text-muted-foreground text-lg mb-8">
              With our proven track record, collaborative approach, and commitment to excellence, we are uniquely positioned to help you overcome challenges, seize opportunities.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Request an audit</Link>
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
              alt="Team collaboration"
              className="rounded-2xl w-full aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
