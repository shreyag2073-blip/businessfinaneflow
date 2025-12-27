import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ApproachSection() {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section-padding bg-section-light">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
        >
          {/* Content */}
          <div>
            <SectionHeader
              label="Our approach"
              title="Innovative approach to consulting"
              className="mb-8"
            />
            <p className="text-muted-foreground text-lg mb-8">
              By combining our industry knowledge with cutting-edge tools and methodologies, we develop actionable strategies that drive measurable results.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-foreground">We believe in fostering long-term partnerships</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-foreground">We develop actionable plans to achieve your goals</p>
              </div>
            </div>
          </div>

          {/* Image with Stats Overlay */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Business meeting"
              className="rounded-2xl w-full aspect-[4/3] object-cover"
            />
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg">
              <p className="text-sm text-muted-foreground mb-1">Sales this month</p>
              <p className="text-3xl font-bold text-primary">+30%</p>
            </div>
          </div>
        </div>

        {/* Journey CTA */}
        <div 
          className={`mt-20 relative rounded-2xl overflow-hidden ${isInView ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
            alt="Our journey"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Our journey began 20 years ago
              </h3>
              <Link to="/about" className="text-primary font-medium hover:underline">
                Read our story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
