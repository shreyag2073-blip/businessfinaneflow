import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Their collaborative approach, attention to detail, and commitment to delivering results set them apart from other consulting firms. I wouldn't hesitate to recommend.",
    name: "Ryan Johnson",
    company: "Tech Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    quote: "The impact of BusinessFinanceFlow's work on our organization has been transformative. Their dedication to our success has helped us achieve remarkable growth.",
    name: "Alex Peterson",
    company: "Thompson Industries",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    quote: "Their team's depth of knowledge, strategic thinking, and commitment to excellence have been instrumental in helping us navigate complex challenges.",
    name: "David Martinez",
    company: "Johnson Enterprises",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    quote: "The team at BusinessFinanceFlow exceeded our expectations in every way. We are grateful for their partnership and the positive impact they've had on our business.",
    name: "John Smith",
    company: "JS Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
];

export function TestimonialsSection() {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section className="section-padding bg-section-light overflow-hidden">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <SectionHeader
            label="Testimonials"
            title="Trusted by 10k+ customers"
          />
          <p className="text-muted-foreground text-lg self-end">
            Whether you're a small startup or a multinational corporation, let us be your trusted advisor on the path to success.
          </p>
        </div>
      </div>

      {/* Horizontal Scrolling Testimonials */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing scrollbar-hide px-4 md:px-8"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[400px] bg-white rounded-2xl p-8 shadow-sm">
      <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
}
