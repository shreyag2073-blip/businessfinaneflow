import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Market Research",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    link: "/services/market-research",
  },
  {
    title: "Strategic Planning",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    link: "/services/strategic-planning",
  },
  {
    title: "Financial Advisory",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    link: "/services/financial-advisory",
  },
];

export function ServicesSection() {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <SectionHeader
            label="Our services"
            title="We offer a wide range of services"
          />
          <p className="text-muted-foreground text-lg self-end">
            By combining our industry knowledge with cutting-edge tools and methodologies, we develop strategies that drive measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} delay={index * 100} />
          ))}
        </div>

        {/* Custom Service CTA */}
        <div className="bg-section-alt rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Need customized services?</h3>
            <p className="text-muted-foreground">We can tailor our solutions to meet your specific needs.</p>
          </div>
          <Link 
            to="/contact"
            className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Request a personalized service <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, delay }: { service: typeof services[0]; delay: number }) {
  const { ref, isInView } = useScrollAnimation<HTMLAnchorElement>();

  return (
    <Link
      ref={ref}
      to={service.link}
      className={`group relative overflow-hidden rounded-2xl aspect-[4/3] card-hover ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
      </div>
    </Link>
  );
}
