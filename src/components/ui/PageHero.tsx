interface PageHeroProps {
  title: string;
  backgroundImage: string;
}

export function PageHero({ title, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 page-hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white animate-fade-in-up">
          {title}
        </h1>
      </div>
    </section>
  );
}
