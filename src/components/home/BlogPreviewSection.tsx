import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "The power of strategic planning: a roadmap to success",
    date: "Apr 8, 2022",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    slug: "the-power-of-strategic-planning",
  },
  {
    title: "The importance of good leadership in a growing business",
    date: "Mar 15, 2022",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    slug: "importance-of-good-leadership",
  },
  {
    title: "Unlocking growth: strategies for scaling your business",
    date: "Feb 28, 2022",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    slug: "unlocking-growth-strategies",
  },
];

export function BlogPreviewSection() {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <SectionHeader
            label="Our blog"
            title="Latest insights"
          />
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/blog">View all posts</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post, delay }: { post: typeof blogPosts[0]; delay: number }) {
  const { ref, isInView } = useScrollAnimation<HTMLAnchorElement>();

  return (
    <Link
      ref={ref}
      to={`/blog/${post.slug}`}
      className={`group card-hover block ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
            {post.date}
          </span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
        {post.title}
      </h3>
    </Link>
  );
}
