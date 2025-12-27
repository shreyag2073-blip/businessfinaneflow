import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";

const posts = [
  { title: "The power of strategic planning: a roadmap to success", date: "Apr 8, 2022", slug: "the-power-of-strategic-planning", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" },
  { title: "The importance of good leadership in a growing business", date: "Mar 15, 2022", slug: "importance-of-good-leadership", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" },
  { title: "Unlocking growth: strategies for scaling your business", date: "Feb 28, 2022", slug: "unlocking-growth-strategies", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" },
  { title: "Navigating change: strategies for successful transitions", date: "Feb 6, 2022", slug: "navigating-change", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" },
  { title: "Creating a culture of consistent learning and growth", date: "Jan 20, 2022", slug: "culture-of-learning", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" },
  { title: "Building resilient teams in uncertain times", date: "Jan 5, 2022", slug: "building-resilient-teams", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80" },
];

const Blog = () => (
  <Layout>
    <PageHero title="Blog posts" backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" />
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <SectionHeader label="Our blog" title="Explore insights and stay ahead" />
          <p className="text-muted-foreground text-lg self-end">Our blog features insights from our team of consultants, who share their best practices on a wide range of topics.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group card-hover">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">{post.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
