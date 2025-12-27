import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function StatsSection() {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-foreground/70" />
      
      {/* Content */}
      <div 
        ref={ref}
        className={`container-custom relative z-10 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto text-center">
          <div>
            <span className="text-6xl md:text-7xl font-bold text-white block mb-2">30%</span>
            <p className="text-white/70">Growth measured</p>
          </div>
          <div>
            <span className="text-6xl md:text-7xl font-bold text-white block mb-2">25%</span>
            <p className="text-white/70">Cost savings</p>
          </div>
        </div>
      </div>
    </section>
  );
}
