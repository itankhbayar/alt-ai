import { HeroSection } from "@/components/home/hero-section";
import { PartnersStrip } from "@/components/home/partners-strip";
import { ValuesSection } from "@/components/home/values-section";
import { FeaturesSection } from "@/components/home/features-section";
import { ProcessSection } from "@/components/home/process-section";
import { WhySection } from "@/components/home/why-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { StatsSection } from "@/components/home/stats-section";
import { ComparisonSection } from "@/components/home/comparison-section";
import { FaqSection } from "@/components/home/faq-section";
import { CtaSection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersStrip />
      <ValuesSection />
      <FeaturesSection />
      <ProcessSection />
      <WhySection />
      <TestimonialsSection />
      <StatsSection />
      <ComparisonSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
