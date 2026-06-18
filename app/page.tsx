import { getStats, getWins, getPricing, getTestimonials, getPortfolio, getFAQs } from "@/lib/content";
import { HeroSection } from "@/components/sections/HeroSection";
import { WinsTickerSection } from "@/components/sections/WinsTickerSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PortfolioPreviewSection } from "@/components/sections/PortfolioPreviewSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingPreviewSection } from "@/components/sections/PricingPreviewSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABannerSection } from "@/components/sections/CTABannerSection";

export default function HomePage() {
  const stats = getStats();
  const wins = getWins();
  const pricing = getPricing();
  const testimonials = getTestimonials();
  const portfolio = getPortfolio();
  const faqs = getFAQs();

  return (
    <>
      <HeroSection stats={stats} />
      <WinsTickerSection wins={wins} />
      <ServicesSection />
      <WhyUsSection />
      <HowItWorksSection />
      <PortfolioPreviewSection items={portfolio} />
      <TestimonialsSection testimonials={testimonials} />
      <PricingPreviewSection pricing={pricing} />
      <IndustriesSection />
      <FAQSection faqs={faqs} />
      <CTABannerSection />
    </>
  );
}
