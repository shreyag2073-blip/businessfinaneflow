import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "20", label: "Years of experience" },
  { value: "10k", label: "Happy customers" },
  { value: "5", label: "Industry awards" },
  { value: "87", label: "Team members" },
];

const team = [
  { name: "Sarah Johnson", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name: "Michael Chen", role: "COO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Emily Davis", role: "CFO", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
  { name: "James Wilson", role: "CTO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Lisa Anderson", role: "Head of Strategy", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "David Brown", role: "Head of Operations", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
];

const About = () => {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();

  return (
    <Layout>
      <PageHero title="About Us" backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" />
      
      {/* Journey Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div ref={ref} className={`grid lg:grid-cols-2 gap-12 items-center ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div>
              <SectionHeader label="Our journey" title="Building success stories since 2004" className="mb-6" />
              <p className="text-muted-foreground text-lg mb-6">
                For over two decades, we've been dedicated to helping businesses achieve their full potential. Our journey began with a simple mission: to provide expert guidance that drives real results.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to be a trusted partner for companies across industries, from startups to Fortune 500 corporations. Our team of experts combines deep industry knowledge with innovative thinking to deliver solutions that make a difference.
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Our team" className="rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-section-light">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-4xl md:text-5xl font-bold text-primary block mb-2">{stat.value}</span>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader label="Our team" title="Meet the experts" centered className="mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img src={member.image} alt={member.name} className="w-full aspect-square object-cover rounded-2xl mb-4" />
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
