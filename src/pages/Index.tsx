import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { StatsSection } from "@/components/home/StatsSection";
import { CommitmentSection } from "@/components/home/CommitmentSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BlogPreviewSection } from "@/components/home/BlogPreviewSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <StatsSection />
      <CommitmentSection />
      <TestimonialsSection />
      <BlogPreviewSection />
    </Layout>
  );
};

export default Index;
