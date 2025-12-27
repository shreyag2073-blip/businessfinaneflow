import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <PageHero title="Contact" backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80" />
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <SectionHeader label="Contact us" title="How to reach us" description="Whether you have a specific project in mind or need guidance on where to start, our team is here to assist you." centered className="mb-12" />
          
          <form onSubmit={handleSubmit} className="bg-section-light rounded-2xl p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your name</label>
                <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" required className="rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your email</label>
                <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" required className="rounded-lg" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Your message</label>
              <Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your project..." rows={6} required className="rounded-lg" />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
