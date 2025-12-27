import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function HeroSection() {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80')`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div 
        ref={ref}
        className="container-custom relative z-10 pt-24"
      >
        <div className="max-w-2xl">
          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            Grow your business faster
          </h1>
          <p 
            className={`text-lg md:text-xl text-white/80 mb-8 ${
              isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
            }`}
          >
            With our expertise and dedication, we'll help you navigate challenges, seize opportunities, and achieve your business goals.
          </p>
          <div 
            className={`flex flex-wrap gap-4 ${
              isInView ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'
            }`}
          >
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/services">Get started</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 bg-transparent border-white text-white hover:bg-white hover:text-foreground"
              asChild
            >
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Logo Marquee at bottom */}
      <div className="absolute bottom-0 left-0 right-0 py-8 bg-gradient-to-t from-black/30 to-transparent">
        <LogoMarquee />
      </div>
    </section>
  );
}

function LogoMarquee() {
  const logos = [
    "Hexagon",
    "CloudTech",
    "StartUp",
    "Horizon",
    "GreatAI",
  ];

  return (
    <div className="overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="mx-12 flex items-center gap-2 text-white/60 font-medium text-lg"
          >
            <div className="w-3 h-3 rounded-full bg-white/40" />
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}
