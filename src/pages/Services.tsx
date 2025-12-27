import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";

const services = [
  { title: "Market Research", slug: "market-research", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" },
  { title: "Strategic Planning", slug: "strategic-planning", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80" },
  { title: "Financial Advisory", slug: "financial-advisory", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" },
  { title: "Digital Transition", slug: "digital-transition", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" },
  { title: "Sustainability", slug: "sustainability", image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80" },
  { title: "Management", slug: "management", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" },
];

const Services = () => (
  <Layout>
    <PageHero title="Services" backgroundImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80" />
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <SectionHeader label="Our services" title="We offer a wide range of services" />
          <p className="text-muted-foreground text-lg self-end">By combining our industry knowledge with cutting-edge tools and methodologies, we develop strategies that drive measurable results.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.slug} to={`/services/${service.slug}`} className="group relative overflow-hidden rounded-2xl aspect-[4/3] card-hover">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
